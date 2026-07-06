import clientPromise from "@/lib/mongodb";
import { timesheets as mockTimesheets } from "@/mocks/timesheet";
import { Timesheet } from "@/types/propsTypes";

const DATABASE_NAME = process.env.MONGODB_DB ?? "timesheet_management";
const COLLECTION_NAME = "timesheets";

const getMockTimesheets = () => structuredClone(mockTimesheets) as Timesheet[];

type TimesheetDocument = Timesheet & {
  createdAt?: Date;
  updatedAt?: Date;
};

export interface TaskInput {
  projectName: string;
  workType?: string;
  description: string;
  hours: number;
}

export interface TaskUpdateInput extends TaskInput {
  id: string;
}

export class TimesheetHoursLimitError extends Error {
  constructor(targetHours: number) {
    super(`Timesheet cannot exceed ${targetHours} hrs`);
    this.name = "TimesheetHoursLimitError";
  }
}

const getCollection = async () => {
  try {
    const client = await clientPromise();

    return client
      .db(DATABASE_NAME)
      .collection<TimesheetDocument>(COLLECTION_NAME);
  } catch (err) {
    // eslint-disable-next-line no-console
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[timesheets] getCollection failed:', msg);
    throw err;
  }
};

const recalculateTotalHours = (timesheet: TimesheetDocument) => {
  if (!timesheet.detail) return timesheet;

  timesheet.detail.totalHours = timesheet.detail.days.reduce(
    (total, day) =>
      total +
      day.tasks.reduce((dayTotal, task) => dayTotal + Number(task.hours), 0),
    0
  );

  return timesheet;
};

const assertWithinTargetHours = (timesheet: TimesheetDocument) => {
  if (!timesheet.detail) return;

  if (timesheet.detail.totalHours > timesheet.detail.targetHours) {
    throw new TimesheetHoursLimitError(timesheet.detail.targetHours);
  }
};

const seedTimesheetsIfEmpty = async () => {
  const collection = await getCollection();
  const count = await collection.estimatedDocumentCount();

  if (count > 0) return;

  const now = new Date();
  const seedData = mockTimesheets.map((timesheet) => ({
    ...structuredClone(timesheet),
    createdAt: now,
    updatedAt: now,
  }));

  await collection.insertMany(seedData);
  await collection.createIndex({ week: 1 }, { unique: true });
};

export const getTimesheetsFromDb = async () => {
  try {
    await seedTimesheetsIfEmpty();

    const collection = await getCollection();

    return collection.find({}, { projection: { _id: 0 } }).sort({ week: 1 }).toArray();
  } catch (err) {
    // eslint-disable-next-line no-console
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[timesheets] DB unavailable, returning mock timesheets:', msg);
    return getMockTimesheets();
  }
};

export const getTimesheetByWeek = async (week: number) => {
  try {
    await seedTimesheetsIfEmpty();

    const collection = await getCollection();

    return collection.findOne({ week }, { projection: { _id: 0 } });
  } catch (err) {
    const mockTimesheets = getMockTimesheets();
    return mockTimesheets.find((timesheet) => timesheet.week === week) ?? null;
  }
};

export const addTaskToTimesheetDay = async (
  week: number,
  dayDate: string,
  input: TaskInput
) => {
  const timesheet = await getTimesheetByWeek(week);

  if (!timesheet?.detail) return null;

  const day = timesheet.detail.days.find((item) => item.date === dayDate);

  if (!day) return null;

  day.tasks.push({
    id: `${Date.now()}-${crypto.randomUUID()}`,
    taskName: input.description,
    hours: input.hours,
    projectName: input.projectName,
    workType: input.workType,
  });

  recalculateTotalHours(timesheet);
  assertWithinTargetHours(timesheet);

  const collection = await getCollection();
  await collection.updateOne(
    { week },
    { $set: { detail: timesheet.detail, updatedAt: new Date() } }
  );

  return timesheet.detail;
};

export const updateTimesheetTask = async (
  week: number,
  taskId: string,
  input: TaskInput
) => {
  const timesheet = await getTimesheetByWeek(week);

  if (!timesheet?.detail) return null;

  let foundTask = false;

  for (const day of timesheet.detail.days) {
    const task = day.tasks.find((item) => item.id === taskId);

    if (task) {
      task.taskName = input.description;
      task.hours = input.hours;
      task.projectName = input.projectName;
      task.workType = input.workType;
      foundTask = true;
      break;
    }
  }

  if (!foundTask) return null;

  recalculateTotalHours(timesheet);
  assertWithinTargetHours(timesheet);

  const collection = await getCollection();
  await collection.updateOne(
    { week },
    { $set: { detail: timesheet.detail, updatedAt: new Date() } }
  );

  return timesheet.detail;
};

export const deleteTimesheetTask = async (week: number, taskId: string) => {
  const timesheet = await getTimesheetByWeek(week);

  if (!timesheet?.detail) return null;

  let foundTask = false;

  timesheet.detail.days = timesheet.detail.days.map((day) => {
    const nextTasks = day.tasks.filter((task) => task.id !== taskId);

    if (nextTasks.length !== day.tasks.length) {
      foundTask = true;
    }

    return {
      ...day,
      tasks: nextTasks,
    };
  });

  if (!foundTask) return null;

  recalculateTotalHours(timesheet);

  const collection = await getCollection();
  await collection.updateOne(
    { week },
    { $set: { detail: timesheet.detail, updatedAt: new Date() } }
  );

  return timesheet.detail;
};

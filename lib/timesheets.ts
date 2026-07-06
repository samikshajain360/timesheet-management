import clientPromise from "@/lib/mongodb";
import { timesheets as mockTimesheets } from "@/mocks/timesheet";
import { Timesheet } from "@/types/propsTypes";

const DATABASE_NAME = process.env.MONGODB_DB ?? "timesheet_management";
const COLLECTION_NAME = "timesheets";

let inMemoryTimesheets: Timesheet[] | null = null;

const ensureInMemoryTimesheets = () => {
  if (!inMemoryTimesheets) {
    inMemoryTimesheets = structuredClone(mockTimesheets) as Timesheet[];
  }

  return inMemoryTimesheets;
};

const getMockTimesheets = () => structuredClone(ensureInMemoryTimesheets()) as Timesheet[];

const getInMemoryTimesheet = (week: number) => {
  const list = ensureInMemoryTimesheets();
  return list.find((timesheet) => timesheet.week === week) ?? null;
};

const saveInMemoryTimesheet = (timesheet: TimesheetDocument) => {
  const list = ensureInMemoryTimesheets();
  const index = list.findIndex((item) => item.week === timesheet.week);

  const updated = structuredClone(timesheet) as Timesheet;

  if (index >= 0) {
    list[index] = updated;
  } else {
    list.push(updated);
  }

  return updated;
};

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

let hasSeededTimesheets = false;

const seedTimesheetsIfEmpty = async () => {
  if (hasSeededTimesheets) return;

  const collection = await getCollection();
  const count = await collection.estimatedDocumentCount();

  if (count > 0) {
    hasSeededTimesheets = true;
    return;
  }

  const now = new Date();
  const seedData = mockTimesheets.map((timesheet) => ({
    ...structuredClone(timesheet),
    createdAt: now,
    updatedAt: now,
  }));

  await collection.insertMany(seedData);
  await collection.createIndex({ week: 1 }, { unique: true });
  hasSeededTimesheets = true;
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

export const getTimesheetByWeekFromDb = async (week: number) => {
  await seedTimesheetsIfEmpty();

  const collection = await getCollection();

  return collection.findOne({ week }, { projection: { _id: 0 } });
};

export const getTimesheetByWeek = async (week: number) => {
  try {
    return await getTimesheetByWeekFromDb(week);
  } catch (err) {
    const mockTimesheets = getMockTimesheets();
    return mockTimesheets.find((timesheet) => timesheet.week === week) ?? null;
  }
};

const getTimesheetByWeekFromFallback = (week: number) => {
  const timesheet = getInMemoryTimesheet(week);
  return timesheet ? structuredClone(timesheet) as TimesheetDocument : null;
};

export const addTaskToTimesheetDay = async (
  week: number,
  dayDate: string,
  input: TaskInput
) => {
  let timesheet: TimesheetDocument | null;
  let useFallback = false;

  try {
    timesheet = await getTimesheetByWeekFromDb(week);
  } catch (err) {
    useFallback = true;
    timesheet = getTimesheetByWeekFromFallback(week);
  }

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

  if (useFallback) {
    saveInMemoryTimesheet(timesheet);
    return timesheet.detail;
  }

  try {
    const collection = await getCollection();
    await collection.updateOne(
      { week },
      { $set: { detail: timesheet.detail, updatedAt: new Date() } }
    );

    return timesheet.detail;
  } catch (err) {
    // eslint-disable-next-line no-console
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[timesheets] DB write failed, using fallback:', msg);
    saveInMemoryTimesheet(timesheet);
    return timesheet.detail;
  }
};

export const updateTimesheetTask = async (
  week: number,
  taskId: string,
  input: TaskInput
) => {
  let timesheet: TimesheetDocument | null;
  let useFallback = false;

  try {
    timesheet = await getTimesheetByWeekFromDb(week);
  } catch (err) {
    useFallback = true;
    timesheet = getTimesheetByWeekFromFallback(week);
  }

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

  if (useFallback) {
    saveInMemoryTimesheet(timesheet);
    return timesheet.detail;
  }

  try {
    const collection = await getCollection();
    await collection.updateOne(
      { week },
      { $set: { detail: timesheet.detail, updatedAt: new Date() } }
    );

    return timesheet.detail;
  } catch (err) {
    // eslint-disable-next-line no-console
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[timesheets] DB write failed, using fallback:', msg);
    saveInMemoryTimesheet(timesheet);
    return timesheet.detail;
  }
};

export const deleteTimesheetTask = async (week: number, taskId: string) => {
  let timesheet: TimesheetDocument | null;
  let useFallback = false;

  try {
    timesheet = await getTimesheetByWeekFromDb(week);
  } catch (err) {
    useFallback = true;
    timesheet = getTimesheetByWeekFromFallback(week);
  }

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

  if (useFallback) {
    saveInMemoryTimesheet(timesheet);
    return timesheet.detail;
  }

  try {
    const collection = await getCollection();
    await collection.updateOne(
      { week },
      { $set: { detail: timesheet.detail, updatedAt: new Date() } }
    );

    return timesheet.detail;
  } catch (err) {
    // eslint-disable-next-line no-console
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[timesheets] DB write failed, using fallback:', msg);
    saveInMemoryTimesheet(timesheet);
    return timesheet.detail;
  }
};

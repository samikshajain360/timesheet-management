import {
  TimesheetHoursLimitError,
  addTaskToTimesheetDay,
} from "@/lib/timesheets";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const weekNumber = Number(id);
  const body = await request.json();

  if (!Number.isFinite(weekNumber)) {
    return NextResponse.json({ error: "Invalid timesheet id" }, { status: 400 });
  }

  if (
    !body.dayDate ||
    !body.projectName ||
    !body.description ||
    body.hours === undefined
  ) {
    return NextResponse.json({ error: "Missing task fields" }, { status: 400 });
  }

  const hours = Number(body.hours);

  if (!Number.isFinite(hours) || hours < 0) {
    return NextResponse.json({ error: "Invalid task hours" }, { status: 400 });
  }

  try {
    const detail = await addTaskToTimesheetDay(weekNumber, body.dayDate, {
      projectName: body.projectName,
      workType: body.workType,
      description: body.description,
      hours,
    });

    if (!detail) {
      return NextResponse.json(
        { error: "Timesheet day not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(detail, { status: 201 });
  } catch (error) {
    if (error instanceof TimesheetHoursLimitError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    throw error;
  }
}

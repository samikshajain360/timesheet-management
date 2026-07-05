import { addTaskToTimesheetDay } from "@/lib/timesheets";
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

  const detail = await addTaskToTimesheetDay(weekNumber, body.dayDate, {
    projectName: body.projectName,
    workType: body.workType,
    description: body.description,
    hours: Number(body.hours),
  });

  if (!detail) {
    return NextResponse.json(
      { error: "Timesheet day not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(detail, { status: 201 });
}

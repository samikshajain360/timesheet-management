import { deleteTimesheetTask, updateTimesheetTask } from "@/lib/timesheets";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const { id, taskId } = await params;
  const weekNumber = Number(id);
  const body = await request.json();

  if (!Number.isFinite(weekNumber)) {
    return NextResponse.json({ error: "Invalid timesheet id" }, { status: 400 });
  }

  if (!body.projectName || !body.description || body.hours === undefined) {
    return NextResponse.json({ error: "Missing task fields" }, { status: 400 });
  }

  const detail = await updateTimesheetTask(weekNumber, taskId, {
    projectName: body.projectName,
    workType: body.workType,
    description: body.description,
    hours: Number(body.hours),
  });

  if (!detail) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(detail);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const { id, taskId } = await params;
  const weekNumber = Number(id);

  if (!Number.isFinite(weekNumber)) {
    return NextResponse.json({ error: "Invalid timesheet id" }, { status: 400 });
  }

  const detail = await deleteTimesheetTask(weekNumber, taskId);

  if (!detail) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(detail);
}

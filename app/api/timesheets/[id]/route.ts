import { getTimesheetByWeek } from "@/lib/timesheets";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const weekNumber = parseInt(resolvedParams.id);
  const timesheet = await getTimesheetByWeek(weekNumber);

  if (!timesheet) {
    return NextResponse.json({ 
      error: "Timesheet not found"
    }, { status: 404 });
  }

  if (!timesheet.detail) {
    return NextResponse.json({ error: "Detail data not available" }, { status: 404 });
  }

  return NextResponse.json(timesheet.detail);
}

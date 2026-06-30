import { timesheets } from "@/mocks/timesheet";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  const resolvedParams = await params;
  const weekNumber = parseInt(resolvedParams.id);
  const timesheet = timesheets.find((t) => t.week === weekNumber);

  if (!timesheet) {
    return NextResponse.json({ 
      error: "Timesheet not found",
      debug: {
        requestedWeek: weekNumber,
        availableWeeks: timesheets.map(t => t.week),
        totalTimesheets: timesheets.length
      }
    }, { status: 404 });
  }

  if (!timesheet.detail) {
    return NextResponse.json({ error: "Detail data not available" }, { status: 404 });
  }

  return NextResponse.json(timesheet.detail);
}

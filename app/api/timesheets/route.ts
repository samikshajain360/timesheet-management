import { timesheets } from "@/mocks/timesheet";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const calculateStatus = (totalHours: number, targetHours: number): "COMPLETED" | "INCOMPLETE" | "MISSING" => {
  if (totalHours === 0) return "MISSING";
  if (totalHours >= targetHours) return "COMPLETED";
  return "INCOMPLETE";
};

export async function GET(request: NextRequest) {
  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get("status");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  // Calculate status for each timesheet based on totalHours
  const timesheetsWithStatus = timesheets.map((timesheet) => ({
    ...timesheet,
    status: calculateStatus(timesheet.detail?.totalHours || 0, timesheet.detail?.targetHours || 40),
  }));

  let filteredData = timesheetsWithStatus;

  if (status) {
    filteredData = filteredData.filter((item) => item.status === status);
  }

  if (startDate || endDate) {
    filteredData = filteredData.filter((item) => {
      const itemStart = new Date(item.startDate);
      const itemEnd = new Date(item.endDate);
      const start = startDate ? new Date(startDate) : new Date(-8640000000000000);
      const end = endDate ? new Date(endDate) : new Date(8640000000000000);
      
      // Normalize all dates to UTC midnight for consistent comparison
      const itemStartUTC = Date.UTC(itemStart.getUTCFullYear(), itemStart.getUTCMonth(), itemStart.getUTCDate());
      const itemEndUTC = Date.UTC(itemEnd.getUTCFullYear(), itemEnd.getUTCMonth(), itemEnd.getUTCDate());
      const startUTC = Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate());
      const endUTC = Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate());
      
      // Check if the week range overlaps with the selected date range
      return itemStartUTC <= endUTC && itemEndUTC >= startUTC;
    });
  }

  return NextResponse.json(filteredData);
}
import { Timesheet } from "@/types/propsTypes";

export const getTimesheets = async (params?: {
  status?: string;
  startDate?: string;
  endDate?: string;
}): Promise<Timesheet[]> => {
  const searchParams = new URLSearchParams();

  if (params?.status) {
    searchParams.append("status", params.status);
  }
  if (params?.startDate) {
    searchParams.append("startDate", params.startDate);
  }
  if (params?.endDate) {
    searchParams.append("endDate", params.endDate);
  }

  const url = searchParams.toString()
    ? `/api/timesheets?${searchParams.toString()}`
    : "/api/timesheets";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch timesheets");
  }

  return response.json();
};

export const getTimesheetDetail =
  async (id: string) => {
    const response = await fetch(
      `/api/timesheets/${id}`
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch timesheet detail"
      );
    }

    return response.json();
  };

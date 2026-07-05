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

export const addTimesheetTask = async (
  id: string,
  task: {
    dayDate: string;
    projectName: string;
    workType?: string;
    description: string;
    hours: number;
  }
) => {
  const response = await fetch(`/api/timesheets/${id}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to add timesheet task");
  }

  return response.json();
};

export const updateTimesheetTask = async (
  id: string,
  task: {
    taskId: string;
    projectName: string;
    workType?: string;
    description: string;
    hours: number;
  }
) => {
  const response = await fetch(`/api/timesheets/${id}/tasks/${task.taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to update timesheet task");
  }

  return response.json();
};

export const deleteTimesheetTask = async (id: string, taskId: string) => {
  const response = await fetch(`/api/timesheets/${id}/tasks/${taskId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete timesheet task");
  }

  return response.json();
};

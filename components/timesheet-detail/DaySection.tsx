import TaskRow from "./TaskRow";
import AddEntryModal from "./AddEntryModal";
import { useState } from "react";
import { Day, Task, Timesheet } from "@/types/propsTypes";
import {
  addTimesheetTask,
  deleteTimesheetTask,
  updateTimesheetTask,
} from "@/services/timesheet-detail.service";

interface DaySectionProps {
  day: Day;
  timesheetId: string;
  totalHours: number;
  targetHours: number;
  onTimesheetDetailChange: (detail: NonNullable<Timesheet["detail"]>) => void;
}

export default function DaySection({
  day,
  timesheetId,
  totalHours,
  targetHours,
  onTimesheetDetailChange,
}: DaySectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = async (newTaskData: {
    projectName: string;
    workType: string;
    description: string;
    hours: number;
  }) => {
    const updatedDetail = await addTimesheetTask(timesheetId, {
      dayDate: day.date,
      ...newTaskData,
    });

    onTimesheetDetailChange(updatedDetail);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleUpdateTask = async (updatedTask: {
    id: string;
    projectName: string;
    workType: string;
    description: string;
    hours: number;
  }) => {
    const updatedDetail = await updateTimesheetTask(timesheetId, {
      taskId: updatedTask.id,
      projectName: updatedTask.projectName,
      workType: updatedTask.workType,
      description: updatedTask.description,
      hours: updatedTask.hours,
    });

    onTimesheetDetailChange(updatedDetail);
    setEditingTask(null);
    setIsModalOpen(false);
  };

  const handleDeleteTask = async (taskId: string) => {
    const updatedDetail = await deleteTimesheetTask(timesheetId, taskId);

    onTimesheetDetailChange(updatedDetail);

    if (editingTask?.id === taskId) {
      setEditingTask(null);
      setIsModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const availableHours = Math.max(
    0,
    targetHours - totalHours + (editingTask?.hours ?? 0)
  );

  return (
    <>
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="w-full sm:w-[108px] font-semibold text-[16px] sm:text-[18px] text-gray-900">
          {day.date}
        </div>

        <div className="flex-1">
          {day.tasks.map((task: Task) => (
            <TaskRow
              key={task.id}
              task={task}
              onEdit={() => handleEditTask(task)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 h-10 w-full rounded border border-dashed border-gray-300 text-sm sm:text-base text-gray-500 hover:bg-primary-100 hover:text-primary-700 hover:border-primary-700"
          >
            + Add new task
          </button>
        </div>
      </div>

      <AddEntryModal
        open={isModalOpen}
        onClose={handleModalClose}
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        maxHours={availableHours}
        taskToEdit={
          editingTask
            ? {
              ...editingTask,
              description: editingTask.taskName,
              workType: editingTask.workType ?? "Bug fixes",
            }
            : null
        }
      />
    </>
  );
}

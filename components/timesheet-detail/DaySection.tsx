import TaskRow from "./TaskRow";
import AddEntryModal from "./AddEntryModal";
import { useState } from "react";
import { Day, Task } from "@/types/propsTypes";

export default function DaySection({ day }: { day: Day }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(day.tasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = (newTaskData: { projectName: string; workType: string; description: string; hours: number }) => {
    const newTask: Task = {
      id: `${Date.now()}-${Math.random()}`,
      taskName: newTaskData.description,
      hours: newTaskData.hours,
      projectName: newTaskData.projectName,
      workType: newTaskData.workType,
    };
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleUpdateTask = (updatedTask: {
    id: string;
    projectName: string;
    workType: string;
    description: string;
    hours: number;
  }) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? {
            ...task,
            taskName: updatedTask.description,
            projectName: updatedTask.projectName,
            workType: updatedTask.workType,
            hours: updatedTask.hours,
          }
          : task
      )
    );

    setEditingTask(null);
    setIsModalOpen(false);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    if (editingTask?.id === taskId) {
      setEditingTask(null);
      setIsModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <>
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="w-full sm:w-[108px] font-semibold text-[16px] sm:text-[18px] text-gray-900">
          {day.date}
        </div>

        <div className="flex-1">
          {tasks.map((task: Task) => (
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

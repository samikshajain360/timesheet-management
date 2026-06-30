import TaskRow from "./TaskRow";
import AddEntryModal from "./AddEntryModal";
import { useState } from "react";
import { Day, Task } from "@/types/propsTypes";

export default function DaySection({ day }: { day: Day }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="w-full sm:w-[108px] font-semibold text-[16px] sm:text-[18px] text-gray-900">
          {day.date}
        </div>

        <div className="flex-1">
          {day.tasks.map((task: Task) => (
            <TaskRow key={task.id} task={task} />
          ))}

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 h-10 w-full rounded border border-dashed border-gray-300 text-sm sm:text-base text-gray-500 hover:bg-primary-100 hover:text-primary-700 hover:border-primary-700"
          >
            + Add new task
          </button>
        </div>
      </div>

      <AddEntryModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

import TaskActions from "./TimeActions";
import { Task } from "@/types/propsTypes";

export default function TaskRow({ task }: { task: Task }) {
  return (
    <div className="mb-2 flex h-auto sm:h-11 flex-col sm:flex-row items-start sm:items-center rounded border border-[#ECECEC] px-3 py-2 sm:py-0 ">
      <div className="flex-1 text-gray-900 text-sm sm:text-base">
        {task.taskName}
      </div>

      <div className="flex items-center gap-2 ms:gap-3 mt-2 sm:mt-0 w-full sm:w-auto">
        <div className="text-[12px] sm:text-[14px] text-gray-400">
          {task.hours} hrs
        </div>

        <div className="rounded-md bg-primary-100 px-2 py-1 text-[10px] sm:text-[12px] font-medium text-primary-800">
          {task.projectName}
        </div>

        <TaskActions />
      </div>
    </div>
  );
}

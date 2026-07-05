import { TimesheetProgressProps } from "@/types/propsTypes";

export default function TimesheetProgress({
  totalHours,
  targetHours,
}: TimesheetProgressProps) {
  const safeTargetHours = Math.max(targetHours, 0);
  const displayHours =
    safeTargetHours > 0
      ? Math.min(Math.max(totalHours, 0), safeTargetHours)
      : Math.max(totalHours, 0);
  const progress =
    safeTargetHours > 0 ? (displayHours / safeTargetHours) * 100 : 0;

  return (
    <div className="w-full sm:w-auto">
      <div className="mb-2 flex justify-end">
        <span className="text-xs sm:text-sm text-gray-900 font-medium">
          {displayHours}/{targetHours} hrs
        </span>
      </div>

      <div className="h-2 rounded bg-gray-200 w-full sm:w-[200px]">
        <div
          className="h-2 rounded bg-orange-400"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

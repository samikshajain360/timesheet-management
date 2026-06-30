"use client";

import { useParams, useRouter } from "next/navigation";
import TimesheetHeader from "@/components/timesheet-detail/TimesheetHeader";
import TimesheetProgress from "@/components/timesheet-detail/TimesheetProgress";
import DaySection from "@/components/timesheet-detail/DaySection";
import useTimesheetDetail from "@/hooks/useTimesheetDetail";
import { Day } from "@/types/propsTypes";
import DetailSkeleton from "@/components/common/DetailSkeleton";
import { FiArrowLeft } from "react-icons/fi";

export default function TimesheetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { timesheetDetail, loading, error } = useTimesheetDetail(id);

  if (loading) {
    return <DetailSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <div className="py-6 sm:py-8 text-center text-sm text-red-500">
          {error}
        </div>
      </div>
    );
  }

  if (!timesheetDetail || !timesheetDetail.days) {
    return (
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <div className="py-6 sm:py-8 text-center text-sm text-red-500">
          Timesheet detail not available
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
      <button
        onClick={() => router.back()}
        className="mb-2 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <FiArrowLeft size={16} />
        Back
      </button>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <TimesheetHeader
          title={timesheetDetail.title}
          weekRange={timesheetDetail.weekRange}
        />
        <TimesheetProgress
          totalHours={timesheetDetail.totalHours}
          targetHours={timesheetDetail.targetHours}
        />
      </div>

      <div className="mt-4 sm:mt-6">
        {timesheetDetail.days.map((day: Day) => (
          <DaySection key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
}

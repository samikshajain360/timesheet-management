"use client";

import { IoCloseCircleOutline } from "react-icons/io5";
import CustomDropdown from "../common/CustomDropdown";
import DateRangePicker from "../common/DateRangePicker";
import { TimesheetFiltersProps } from "@/types/propsTypes";

const statusOptions = [
  { value: "", label: "Status" },
  { value: "COMPLETED", label: "Completed" },
  { value: "INCOMPLETE", label: "Incomplete" },
  { value: "MISSING", label: "Missing" },
];

export default function TimesheetFilters({
  statusFilter,
  onStatusChange,
  onStatusClear,
  dateRangeFilter,
  onDateRangeChange,
  onDateRangeClear,
}: TimesheetFiltersProps) {
  return (
    <div className="mb-5 flex flex-col sm:flex-row items-start sm:items-center gap-2">
      <div className="relative w-full sm:w-auto">
        <DateRangePicker
          value={dateRangeFilter}
          onChange={onDateRangeChange}
          className="w-full sm:w-[250px]"
        />
        {(dateRangeFilter[0] || dateRangeFilter[1]) && (
          <button
            onClick={onDateRangeClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <IoCloseCircleOutline size={20} />
          </button>
        )}
      </div>

      <div className="relative w-full sm:w-auto">
        <CustomDropdown
          value={statusFilter}
          onChange={onStatusChange}
          options={statusOptions}
          className="w-full sm:w-[152px]"
        />
        {statusFilter && (
          <button
            onClick={onStatusClear}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <IoCloseCircleOutline size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

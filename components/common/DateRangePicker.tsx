"use client";

import { useState, useRef } from "react";
import { ClickAwayListener, Box, Button } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { FiChevronDown } from "react-icons/fi";
import { DateRangePickerProps } from "@/types/propsTypes";

export default function DateRangePicker({
  value,
  onChange,
  className = "",
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState<Dayjs | null>(
    value[0] ? dayjs(value[0]) : null
  );
  const [tempEndDate, setTempEndDate] = useState<Dayjs | null>(
    value[1] ? dayjs(value[1]) : null
  );
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const containerRef = useRef<HTMLDivElement>(null);

  const formatDateRange = () => {
    if (value[0] && value[1]) {
      return `${dayjs(value[0]).format("DD/MM/YYYY")} - ${dayjs(value[1]).format("DD/MM/YYYY")}`;
    }
    if (value[0]) {
      return `${dayjs(value[0]).format("DD/MM/YYYY")} - End`;
    }
    if (value[1]) {
      return `Start - ${dayjs(value[1]).format("DD/MM/YYYY")}`;
    }
    return "Select date range";
  };

  const handleOpen = () => {
    setTempStartDate(value[0] ? dayjs(value[0]) : null);
    setTempEndDate(value[1] ? dayjs(value[1]) : null);
    setCurrentMonth(tempStartDate || dayjs());
    setOpen(true);
  };

  const handleApply = () => {
    const formattedValue: [string | null, string | null] = [
      tempStartDate ? tempStartDate.toISOString() : null,
      tempEndDate ? tempEndDate.toISOString() : null,
    ];
    onChange(formattedValue);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleDateSelect = (date: Dayjs) => {
    if (!tempStartDate || (tempStartDate && tempEndDate)) {
      setTempStartDate(date);
      setTempEndDate(null);
    } else if (date.isBefore(tempStartDate)) {
      setTempEndDate(tempStartDate);
      setTempStartDate(date);
    } else {
      setTempEndDate(date);
    }
  };

  const isDateSelected = (date: Dayjs) => {
    return date.isSame(tempStartDate, "day") || date.isSame(tempEndDate, "day");
  };

  const isDateInRange = (date: Dayjs) => {
    if (!tempStartDate || !tempEndDate) return false;
    return (
      date.isAfter(tempStartDate, "day") && date.isBefore(tempEndDate, "day")
    );
  };

  const isDateToday = (date: Dayjs) => {
    return date.isSame(dayjs(), "day");
  };

  const isDateDisabled = (date: Dayjs) => {
    return date.isAfter(dayjs(), "day");
  };

  const getDaysInMonth = () => {
    const firstDay = currentMonth.startOf("month");
    const lastDay = currentMonth.endOf("month");
    const days: Dayjs[] = [];

    const startOfWeek = firstDay.day();
    for (let i = 0; i < startOfWeek; i++) {
      days.push(firstDay.subtract(startOfWeek - i, "day"));
    }

    for (let i = 0; i < lastDay.date(); i++) {
      days.push(firstDay.add(i, "day"));
    }

    const endOfWeek = lastDay.day();
    for (let i = 1; i < 7 - endOfWeek; i++) {
      days.push(lastDay.add(i, "day"));
    }

    return days;
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <input
        type="text"
        value={formatDateRange()}
        onClick={handleOpen}
        readOnly
        className="h-[42px] w-full rounded-md border border-[#E0E0E0] bg-white px-3 text-xs text-[#4F4F4F] outline-none focus:border-[#2F80ED] cursor-pointer pr-10"
      />
      <FiChevronDown
        size={16}
        className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform ${open ? "rotate-180" : ""}`}
      />

      {open && (
        <ClickAwayListener onClickAway={handleCancel}>
          <Box
            className="absolute top-full z-50 mt-2 rounded-lg border border-gray-200 bg-white p-3 shadow-lg"
            sx={{ width: "320px" }}
          >
            <h3 className="mb-1 text-[14px] font-semibold">
              Select Date Range
            </h3>

            <Box className="space-y-3">
              {/* Selected Dates Display */}
              <Box className="flex items-center justify-between rounded bg-gray-50 p-2 text-[12px]">
                <div>
                  <p className="text-[12px] text-gray-600">Start Date</p>
                  <p className="text-[12px] font-medium">
                    {tempStartDate
                      ? tempStartDate.format("MMM DD, YYYY")
                      : "Not selected"}
                  </p>
                </div>
                <div className="text-[12px] text-gray-400">to</div>
                <div>
                  <p className="text-[12px] text-gray-600">End Date</p>
                  <p className="text-[12px] font-medium">
                    {tempEndDate
                      ? tempEndDate.format("MMM DD, YYYY")
                      : "Not selected"}
                  </p>
                </div>
              </Box>

              {/* Custom Calendar */}
              <Box className="rounded-lg border p-2">
                {/* Month Navigation */}
                <Box className="mb-1 flex items-center justify-between">
                  <button
                    onClick={() =>
                      setCurrentMonth(currentMonth.subtract(1, "month"))
                    }
                    className="rounded p-1 hover:bg-gray-100"
                  >
                    ‹
                  </button>
                  <h4 className="text-[15px] font-semibold">
                    {currentMonth.format("MMMM YYYY")}
                  </h4>
                  <button
                    onClick={() =>
                      setCurrentMonth(currentMonth.add(1, "month"))
                    }
                    className="rounded p-1 hover:bg-gray-100"
                  >
                    ›
                  </button>
                </Box>

                {/* Weekday Headers */}
                <Box className="mb-2 grid grid-cols-7 gap-1">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div
                      key={day}
                      className="p-1 text-center text-[11px] font-medium text-gray-500"
                    >
                      {day}
                    </div>
                  ))}
                </Box>

                {/* Calendar Days */}
                <Box className="grid grid-cols-7 gap-1">
                  {getDaysInMonth().map((date, index) => {
                    const isSelected = isDateSelected(date);
                    const isInRange = isDateInRange(date);
                    const isToday = isDateToday(date);
                    const isCurrentMonth = date.isSame(currentMonth, "month");
                    const isDisabled = isDateDisabled(date);

                    return (
                      <button
                        key={index}
                        onClick={() => !isDisabled && handleDateSelect(date)}
                        disabled={isDisabled}
                        className={`flex size-7 items-center justify-center rounded text-[12px] transition-colors
                           ${
                             isDisabled
                               ? "cursor-not-allowed text-gray-300 bg-transparent hover:bg-transparent"
                               : `${isSelected ? "bg-blue-500 text-white" : "hover:bg-blue-100 cursor-pointer"} ${isInRange && !isSelected ? "bg-blue-100" : ""} ${isToday && !isSelected ? "border border-blue-400" : ""} ${!isCurrentMonth ? "text-gray-400" : "text-gray-700"}`
                           }
                        `}
                      >
                        {date.date()}
                      </button>
                    );
                  })}
                </Box>
              </Box>
            </Box>

            <Box className="mt-3 flex justify-end gap-2 w-full">
              <Button variant="outlined" size="small" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={handleApply}
                disabled={!tempStartDate || !tempEndDate}
              >
                Apply
              </Button>
            </Box>
          </Box>
        </ClickAwayListener>
      )}
    </div>
  );
}

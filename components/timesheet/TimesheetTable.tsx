"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Timesheet } from "@/types/propsTypes";
import StatusBadge from "./StatusBadge";
import Pagination from "../common/Pagination";
import CustomDropdown from "../common/CustomDropdown";
import useTimesheets from "@/hooks/useTimesheets";
import TimesheetFilters from "./TimesheetFilters";
import AddEntryModal from "../timesheet-detail/AddEntryModal";
import TableSkeleton from "../common/TableSkeleton";

export default function TimesheetTable() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const statusFilter = searchParams.get("status") || "";
  const startDate = searchParams.get("startDate") || null;
  const endDate = searchParams.get("endDate") || null;

  const dateRangeFilter: [string | null, string | null] = [startDate, endDate];

  const apiParams = useMemo(
    () => ({
      status: statusFilter || undefined,
      startDate: startDate || undefined,
      endDate: endDate || undefined,
    }),
    [statusFilter, startDate, endDate]
  );

  const { timesheets, loading, error } = useTimesheets(apiParams);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = Math.ceil(timesheets.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;

    return timesheets.slice(start, start + rowsPerPage);
  }, [timesheets, currentPage, rowsPerPage]);

  const handleStatusChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("status", value);
    } else {
      params.delete("status");
    }
    router.push(`?${params.toString()}`);
    setCurrentPage(1);
  };

  const handleDateRangeChange = (value: [string | null, string | null]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value[0]) {
      params.set("startDate", value[0]);
    } else {
      params.delete("startDate");
    }
    if (value[1]) {
      params.set("endDate", value[1]);
    } else {
      params.delete("endDate");
    }
    router.push(`?${params.toString()}`);
    setCurrentPage(1);
  };

  const handleStatusClear = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("status");
    router.push(`?${params.toString()}`);
    setCurrentPage(1);
  };

  const handleDateRangeClear = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("startDate");
    params.delete("endDate");
    router.push(`?${params.toString()}`);
    setCurrentPage(1);
  };

  const getActionText = (status?: Timesheet["status"]) => {
    switch (status) {
      case "MISSING":
        return "Create";

      case "INCOMPLETE":
        return "Update";

      default:
        return "View";
    }
  };

  const rowsPerPageOptions = [
    { value: "5", label: "5 per page" },
    { value: "10", label: "10 per page" },
    { value: "20", label: "20 per page" },
  ];

  return (
    <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
      <h2 className="mb-4 sm:mb-6 text-[20px] sm:text-[24px] leading-6 text-gray-900 font-bold">
        Your Timesheets
      </h2>

      <TimesheetFilters
        statusFilter={statusFilter}
        onStatusChange={handleStatusChange}
        onStatusClear={handleStatusClear}
        dateRangeFilter={dateRangeFilter}
        onDateRangeChange={handleDateRangeChange}
        onDateRangeClear={handleDateRangeClear}
      />

      <div className="rounded-md border border-[#ECECEC] bg-white min-h-[400px]">
        {error && (
          <div className="py-6 sm:py-8 text-center text-sm text-red-500">
            {error}
          </div>
        )}

        <div className="overflow-x-auto">
          <table
            className="w-full border-collapse min-w-[500px]"
            style={{ tableLayout: "fixed" }}
          >
            {loading ? (
              <TableSkeleton rows={rowsPerPage} />
            ) : (
              <>
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="w-[10%] bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                      WEEK #
                    </th>

                    <th className="w-[40%] px-3 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                      DATE
                    </th>

                    <th className="w-[30%] px-3 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                      STATUS
                    </th>

                    <th className="w-[20%] px-3 sm:px-4 py-2 sm:py-3 text-right text-[10px] sm:text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedData.map((item) => (
                    <tr key={item.id} className="border-t border-[#ECECEC]">
                      <td className="bg-gray-50 px-3 sm:px-4 py-3 sm:py-4 text-[12px] sm:text-[14px] text-gray-900">
                        {item.week}
                      </td>

                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-[12px] sm:text-[14px] text-gray-500">
                        {item.date}
                      </td>

                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <StatusBadge status={item.status || "MISSING"} />
                      </td>

                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-center">
                        <button
                          onClick={() => {
                            if (item.status === "MISSING") {
                              setIsModalOpen(true);
                            } else {
                              router.push(`/timesheets/${item.week}`);
                            }
                          }}
                          className="text-sm sm:text-base text-primary-600 font-normal transition hover:underline cursor-pointer bg-transparent border-none"
                        >
                          {getActionText(item.status)}
                        </button>
                      </td>
                    </tr>
                  ))}

                  {paginatedData.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="py-8 text-center text-sm text-gray-500"
                      >
                        No timesheets found
                      </td>
                    </tr>
                  )}
                </tbody>
              </>
            )}
          </table>
        </div>

        {!loading && (
          <div className="flex h-[48px] items-center justify-between border-t border-[#ECECEC] px-3 sm:px-4">
            <CustomDropdown
              value={String(rowsPerPage)}
              onChange={(value) => {
                setRowsPerPage(Number(value));
                setCurrentPage(1);
              }}
              options={rowsPerPageOptions}
              className="w-[100px] sm:w-[118px] h-9 rounded-md"
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      <AddEntryModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

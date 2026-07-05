"use client";

import { useCallback, useEffect, useState } from "react";

import { getTimesheetDetail } from "@/services/timesheet-detail.service";
import { Timesheet } from "@/types/propsTypes";

type TimesheetDetail = NonNullable<Timesheet["detail"]>;

export default function useTimesheetDetail(id: string) {
  const [timesheetDetail, setTimesheetDetail] =
    useState<TimesheetDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTimesheetDetail = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getTimesheetDetail(id);

      setTimesheetDetail(data);
    } catch {
      setError(
        "Unable to load timesheet detail"
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTimesheetDetail();
  }, [fetchTimesheetDetail]);

  return {
    timesheetDetail,
    setTimesheetDetail,
    loading,
    error,
  };
}

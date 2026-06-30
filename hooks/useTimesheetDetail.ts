"use client";

import { useEffect, useState } from "react";

import { getTimesheetDetail } from "@/services/timesheet-detail.service";

export default function useTimesheetDetail(id: string) {
  const [timesheetDetail, setTimesheetDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTimesheetDetail();
  }, [id]);

  const fetchTimesheetDetail = async () => {
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
  };

  return {
    timesheetDetail,
    loading,
    error,
  };
}

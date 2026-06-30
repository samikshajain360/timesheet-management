"use client";

import { useEffect, useState, useCallback } from "react";

import { Timesheet } from "@/types/propsTypes";
import { getTimesheets } from "@/services/timesheet.service";

export default function useTimesheets(params?: {
  status?: string;
  startDate?: string;
  endDate?: string;
}) {
  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const fetchTimesheets = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getTimesheets(params);

      setTimesheets(data);
    } catch {
      setError("Unable to load timesheets");
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchTimesheets();
  }, [fetchTimesheets]);

  return {
    timesheets,
    loading,
    error,
  };
}

export interface Timesheet {
  id: number;
  week: number;
  date: string;
  startDate: string;
  endDate: string;
  status?: "COMPLETED" | "INCOMPLETE" | "MISSING";
  detail?: {
    title: string;
    weekRange: string;
    totalHours: number;
    targetHours: number;
    days: Array<{
      date: string;
      tasks: Array<{
        id: string;
        taskName: string;
        hours: number;
        projectName: string;
      }>;
    }>;
  };
}
export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  loading?: boolean;
}

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface CustomDropdownOptions {
  value: string;
  label: string;
}

export interface CustomDropdownProps {
  label?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: CustomDropdownOptions[];
  className?: string;
  placeholder?: string;
}

export interface DateRangePickerProps {
  value: [string | null, string | null];
  onChange: (value: [string | null, string | null]) => void;
  className?: string;
}

export interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  additionalClasses?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface StatusBadgeProps {
  status: "COMPLETED" | "INCOMPLETE" | "MISSING";
}

export interface TimesheetFiltersProps {
  statusFilter: string;
  onStatusChange: (value: string) => void;
  onStatusClear: () => void;
  dateRangeFilter: [string | null, string | null];
  onDateRangeChange: (value: [string | null, string | null]) => void;
  onDateRangeClear: () => void;
}

export interface Task {
  id: string;
  taskName: string;
  hours: number;
  projectName: string;
}

export interface Day {
  date: string;
  tasks: Task[];
}

export interface TimesheetProgressProps {
  totalHours: number;
  targetHours: number;
}

import { StatusBadgeProps } from "@/types/propsTypes";

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles = {
    COMPLETED: "bg-[#DEF7EC] text-[#03543F]",

    INCOMPLETE: "bg-[#FDF6B2] text-[#723B13]",

    MISSING: "bg-[#FCE8F3] text-[#99154B]",
  };

  return (
    <span
      className={`inline-flex rounded-md px-2 py-[2px] text-[12px] font-medium uppercase ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

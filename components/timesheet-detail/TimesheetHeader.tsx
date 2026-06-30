interface Props {
  title: string;
  weekRange: string;
}

export default function TimesheetHeader({ title, weekRange }: Props) {
  return (
    <div>
      <h2 className="text-[20px] sm:text-[24px] font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-3 sm:mt-6 text-[12px] sm:text-[14px] text-gray-500">
        {weekRange}
      </p>
    </div>
  );
}
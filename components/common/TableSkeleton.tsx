const columns = [
  {
    width: "w-[10%]",
    headerClass: "bg-gray-50",
    cellClass: "bg-gray-50",
    cellWidth: "w-8",
  },
  { width: "w-[40%]", headerClass: "", cellClass: "", cellWidth: "w-32" },
  {
    width: "w-[30%]",
    headerClass: "",
    cellClass: "",
    cellWidth: "w-20",
    cellHeight: "h-6",
  },
  {
    width: "w-[20%]",
    headerClass: "",
    cellClass: "text-center",
    cellWidth: "w-12 mx-auto",
  },
];

export default function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <>
      <thead>
        <tr className="bg-[#F8F8F8]">
          {columns.map((col, index) => (
            <th
              key={index}
              className={`${col.width} px-3 sm:px-4 py-2 sm:py-3 ${col.headerClass}`}
            >
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex} className="border-t border-[#ECECEC]">
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                className={`px-3 sm:px-4 py-3 sm:py-4 ${col.cellClass}`}
              >
                <div
                  className={`h-4 bg-gray-200 rounded animate-pulse ${col.cellWidth} ${col.cellHeight || ""}`}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
}

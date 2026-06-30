export default function DetailSkeleton() {
  return (
    <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="flex-1 space-y-4">
          <div className="h-7 bg-gray-200 rounded animate-pulse w-48" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-64" />
        </div>
        <div className="w-full sm:w-auto space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
          <div className="h-2 bg-gray-200 rounded animate-pulse w-32" />
        </div>
      </div>

      {[1, 2, 3, 4, 5].map((day) => (
        <div
          key={day}
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="w-full sm:w-[108px]">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
          </div>

          <div className="flex-1 space-y-2">
            {[1, 2].map((task) => (
              <div
                key={task}
                className="flex h-auto sm:h-11 flex-col sm:flex-row items-start sm:items-center rounded border border-[#ECECEC] px-3 py-2 sm:py-0"
              >
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
                </div>
                <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0 w-full sm:w-auto">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-12" />
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
                </div>
              </div>
            ))}
            <div className="h-10 w-full rounded border border-dashed border-gray-200 bg-gray-50" />
          </div>
        </div>
      ))}
    </div>
  );
}

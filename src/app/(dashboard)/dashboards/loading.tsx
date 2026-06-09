import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardsLoading() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Dashboard header skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <Skeleton className="h-10 w-28 rounded-lg" />
        </div>
      </div>

      {/* Stats cards skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 w-8 rounded-lg" />
              </div>
              <Skeleton className="h-8 w-28" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart area skeleton */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-40" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-16 rounded-lg" />
                <Skeleton className="h-8 w-16 rounded-lg" />
              </div>
            </div>
            <Skeleton className="h-[300px] w-full rounded-lg" />
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table skeleton */}
      <div className="rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark">
        <div className="border-b border-gray-200 p-6 dark:border-white/5">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-10 w-48 rounded-lg" />
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 flex-1" />
            ))}
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Skeleton key={j} className="h-8 flex-1" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LeadershipTeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">Leadership Team</h2>
        <p className="mt-1 text-sm text-gray-500">Explore the leadership team component with interactive examples</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-base font-semibold text-gray-800 dark:text-white/90">Basic Leadership Team</h4>
          <div className="flex h-[200px] items-center justify-center rounded-lg bg-gray-50 text-gray-400 dark:bg-white/5">
            Leadership Team Component
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-base font-semibold text-gray-800 dark:text-white/90">Interactive Leadership Team</h4>
          <div className="flex h-[200px] items-center justify-center rounded-lg bg-gray-50 text-gray-400 dark:bg-white/5">
            Interactive Variant
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark lg:col-span-2">
          <h4 className="mb-4 text-base font-semibold text-gray-800 dark:text-white/90">Full Leadership Team</h4>
          <div className="flex h-[300px] items-center justify-center rounded-lg bg-gray-50 text-gray-400 dark:bg-white/5">
            Full-width Leadership Team with all features
          </div>
        </div>
      </div>
    </div>
  );
}
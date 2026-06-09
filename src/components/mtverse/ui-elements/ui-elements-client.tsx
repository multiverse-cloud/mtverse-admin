'use client';

import dynamic from 'next/dynamic';

const UIElementsPage = dynamic(() => import('@/components/mtverse/ui-elements'), {
  ssr: false,
  loading: () => (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="h-8 w-48 animate-pulse rounded-md bg-gray-200 dark:bg-white/10" />
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-40 animate-pulse rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark" />
        ))}
      </div>
    </div>
  ),
});

export default function UIElementsClient() {
  return <UIElementsPage />;
}

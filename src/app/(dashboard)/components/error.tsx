'use client';

import React from 'react';
import { AlertTriangle, RefreshCw, ArrowLeft, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function ComponentsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('[Components Error]', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="w-full max-w-lg text-center">
        {/* Error icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-500/10">
          <Code2 className="h-10 w-10 text-amber-500" />
        </div>

        {/* Error title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Component Loading Error
        </h2>

        {/* Error description */}
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          We encountered an error while loading the components. This might be a
          rendering issue with one of the UI components. Please try refreshing.
        </p>

        {/* Error details */}
        {error.message && (
          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-white/5 dark:bg-white/5">
            <p className="text-xs font-mono text-gray-600 dark:text-gray-400 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/components/ui-elements"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
          >
            <Code2 className="h-4 w-4" />
            Browse Components
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

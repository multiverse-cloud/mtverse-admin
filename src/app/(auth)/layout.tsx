'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AppShell from '@/components/mtverse/layout/app-shell';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <Link
        href="/dashboards/ecommerce"
        className="fixed left-4 top-4 z-50 inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-theme-sm font-medium text-gray-600 shadow-theme-xs transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-500 dark:border-white/10 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-brand-500/30 dark:hover:bg-brand-500/10 dark:hover:text-brand-400 sm:left-6 sm:top-6"
      >
        <ArrowLeft className="size-4" />
        Back to Dashboard
      </Link>
      {children}
    </AppShell>
  );
}

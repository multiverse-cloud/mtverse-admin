'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search, LayoutDashboard } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 dark:bg-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-500/3 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-xl text-center">
        {/* 404 number */}
        <div className="mb-8">
          <h1 className="text-[120px] font-black leading-none tracking-tighter text-gray-100 dark:text-white/5 sm:text-[160px]">
            404
          </h1>
          <div className="-mt-16 sm:-mt-20">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-brand-500/10 shadow-lg shadow-brand-500/20">
              <Search className="h-8 w-8 text-brand-500" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find your way back.
        </p>

        {/* Quick links */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Dashboard', href: '/dashboards/ecommerce', icon: LayoutDashboard },
            { label: 'UI Elements', href: '/components/ui-elements', icon: Search },
            { label: 'Charts', href: '/components/charts', icon: Search },
            { label: 'Pricing', href: '/pricing', icon: Search },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-brand-500/30 hover:shadow-md hover:shadow-brand-500/5 dark:border-white/5 dark:bg-white/5 dark:hover:border-brand-500/30"
            >
              <link.icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-brand-500 dark:text-gray-500" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/dashboards/ecommerce"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
          >
            <LayoutDashboard className="h-4 w-4" />
            Open Dashboard
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Link>
        </div>

        <p className="mt-12 text-xs text-gray-400 dark:text-gray-600">
          Lost? With 7,000+ components across 6 frameworks, there&apos;s plenty to explore.
        </p>
      </div>
    </div>
  );
}

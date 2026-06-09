'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import AppShell from '@/components/mtverse/layout/app-shell';
import Sidebar from '@/components/mtverse/layout/sidebar';
import Header from '@/components/mtverse/layout/header';
import ContentLoader from '@/components/mtverse/layout/content-loader';
import { useNavigationStore } from '@/lib/mtverse/stores/navigation-store';

function DashboardMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement>(null);
  const shouldRestoreScroll = useRef(false);
  const routeKey = pathname;

  useEffect(() => {
    const markBackForwardNavigation = () => {
      shouldRestoreScroll.current = true;
    };

    window.addEventListener('popstate', markBackForwardNavigation);
    return () => window.removeEventListener('popstate', markBackForwardNavigation);
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const savedPosition = sessionStorage.getItem(`mtverse-scroll:${routeKey}`);
    requestAnimationFrame(() => {
      main.scrollTop = shouldRestoreScroll.current && savedPosition ? Number(savedPosition) : 0;
      shouldRestoreScroll.current = false;
    });

    let frame = 0;
    const saveScrollPosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        sessionStorage.setItem(`mtverse-scroll:${routeKey}`, String(main.scrollTop));
      });
    };

    main.addEventListener('scroll', saveScrollPosition, { passive: true });
    window.addEventListener('pagehide', saveScrollPosition);

    return () => {
      saveScrollPosition();
      cancelAnimationFrame(frame);
      main.removeEventListener('scroll', saveScrollPosition);
      window.removeEventListener('pagehide', saveScrollPosition);
    };
  }, [routeKey]);

  return (
    <main ref={mainRef} className="relative flex-1 overflow-y-auto overflow-x-hidden modern-scrollbar p-4 sm:p-6 lg:p-8">
      <ContentLoader>
        {children}
      </ContentLoader>
    </main>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const sidebarCollapsed = useNavigationStore((s) => s.sidebarCollapsed);

  return (
    <AppShell>
      <Sidebar />
      <div
        className={`flex h-screen flex-1 flex-col overflow-hidden transition-[margin-left] duration-300 ${
          sidebarCollapsed ? 'lg:ml-[72px]' : 'lg:ml-[260px]'
        }`}
      >
        <Header />
        <DashboardMain>{children}</DashboardMain>
      </div>
    </AppShell>
  );
}

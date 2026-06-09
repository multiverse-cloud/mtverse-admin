'use client';

import React from 'react';
import { useNavigationStore } from '@/lib/mtverse/stores/navigation-store';

export function ThemeInitializer() {
  const theme = useNavigationStore((s) => s.theme);
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  return null;
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-950 font-outfit">
      <ThemeInitializer />
      {children}
    </div>
  );
}

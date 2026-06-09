'use client';

import React, { useState } from 'react';
import {
  Atom,
  Component,
  FileCode2,
  Code2,
  Braces,
  Server,
} from 'lucide-react';

export type FrameworkKey = 'react' | 'nextjs' | 'vue' | 'angular' | 'html' | 'laravel';

interface FrameworkTab {
  key: FrameworkKey;
  label: string;
  icon: React.ElementType;
  color: string;
}

export const FRAMEWORK_TABS: FrameworkTab[] = [
  { key: 'react', label: 'React', icon: Braces, color: 'text-[#61DAFB]' },
  { key: 'nextjs', label: 'Next.js', icon: Component, color: 'text-white' },
  { key: 'vue', label: 'Vue', icon: Code2, color: 'text-[#42b883]' },
  { key: 'angular', label: 'Angular', icon: Atom, color: 'text-[#dd0031]' },
  { key: 'html', label: 'HTML', icon: FileCode2, color: 'text-[#e34c26]' },
  { key: 'laravel', label: 'Laravel', icon: Server, color: 'text-[#ff2d20]' },
];

interface FrameworkTabsProps {
  activeTab: FrameworkKey;
  onTabChange: (tab: FrameworkKey) => void;
  availableTabs: FrameworkKey[];
  className?: string;
}

export default function FrameworkTabs({
  activeTab,
  onTabChange,
  availableTabs,
  className = '',
}: FrameworkTabsProps) {
  const visibleTabs = FRAMEWORK_TABS.filter((t) => availableTabs.includes(t.key));

  return (
    <div className={`flex items-center gap-1 overflow-x-auto rounded-lg bg-[#1e1e2e] p-1 ${className}`}>
      {visibleTabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? 'bg-brand-500 text-white shadow-sm'
                : 'text-gray-400 hover:bg-white/10 hover:text-gray-200'
            }`}
          >
            <Icon className="size-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

import { ComponentSourceData } from '../types';

export const timelinesSource: ComponentSourceData = {
  component: 'Timelines',
  slug: 'timelines',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Timeline components for displaying chronological events and activity history.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TimelinesSection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

const events = [
  { date: '2024-01-15', title: 'Project Created', description: 'Initial repository setup and configuration.', color: 'bg-brand-500' },
  { date: '2024-02-03', title: 'Design Review', description: 'Completed UI/UX design review with the team.', color: 'bg-success-500' },
  { date: '2024-03-10', title: 'Beta Launch', description: 'Released beta version to early adopters.', color: 'bg-warning-500' },
  { date: '2024-04-20', title: 'Production Release', description: 'Deployed v1.0 to production environment.', color: 'bg-brand-500' },
];

function TimelinesSection() {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Vertical Timeline</p>
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 h-full w-px bg-gray-200 dark:bg-white/10" />
          {events.map((event, i) => (
            <div key={i} className="relative pb-6 last:pb-0">
              <div className={\`absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full \${event.color}\`}>
                <div className="size-1.5 rounded-full bg-white" />
              </div>
              <p className="text-xs text-gray-400">{event.date}</p>
              <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{event.title}</p>
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Horizontal Timeline</p>
        <div className="flex items-start">
          {events.map((event, i) => (
            <div key={i} className="relative flex-1">
              <div className={\`flex size-4 items-center justify-center rounded-full \${event.color}\`}>
                <div className="size-1.5 rounded-full bg-white" />
              </div>
              {i < events.length - 1 && <div className="absolute left-4 top-2 h-px w-full bg-gray-200 dark:bg-white/10" />}
              <p className="mt-2 text-xs font-medium text-gray-900 dark:text-white">{event.title}</p>
              <p className="text-xs text-gray-400">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimelinesSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'timelines/page.tsx',
      code: `'use client';

import TimelinesSection from '@/components/mtverse/ui-elements/TimelinesSection';

export default function TimelinesPage() {
  return <TimelinesSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'TimelinesSection.vue',
      code: `<template>
  <div class="space-y-5">
    <div>
      <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Vertical Timeline</p>
      <div class="relative pl-8">
        <div class="absolute left-3 top-0 h-full w-px bg-gray-200 dark:bg-white/10" />
        <div v-for="(event, i) in events" :key="i" class="relative pb-6 last:pb-0">
          <div :class="['absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full', event.color]">
            <div class="size-1.5 rounded-full bg-white" />
          </div>
          <p class="text-xs text-gray-400">{{ event.date }}</p>
          <p class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{{ event.title }}</p>
          <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const events = [
  { date: '2024-01-15', title: 'Project Created', description: 'Initial repository setup.', color: 'bg-brand-500' },
  { date: '2024-02-03', title: 'Design Review', description: 'Completed UI/UX design review.', color: 'bg-success-500' },
  { date: '2024-03-10', title: 'Beta Launch', description: 'Released beta to early adopters.', color: 'bg-warning-500' },
  { date: '2024-04-20', title: 'Production Release', description: 'Deployed v1.0 to production.', color: 'bg-brand-500' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'timelines.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-timelines',
  template: \`
    <div class="space-y-5">
      <div>
        <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Vertical Timeline</p>
        <div class="relative pl-8">
          <div class="absolute left-3 top-0 h-full w-px bg-gray-200 dark:bg-white/10"></div>
          <div *ngFor="let event of events; let i = index" class="relative pb-6 last:pb-0">
            <div [class]="'absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full ' + event.color">
              <div class="size-1.5 rounded-full bg-white"></div>
            </div>
            <p class="text-xs text-gray-400">{{ event.date }}</p>
            <p class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{{ event.title }}</p>
            <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class TimelinesComponent {
  events = [
    { date: '2024-01-15', title: 'Project Created', description: 'Initial repository setup.', color: 'bg-brand-500' },
    { date: '2024-02-03', title: 'Design Review', description: 'Completed UI/UX design review.', color: 'bg-success-500' },
    { date: '2024-03-10', title: 'Beta Launch', description: 'Released beta version.', color: 'bg-warning-500' },
    { date: '2024-04-20', title: 'Production Release', description: 'Deployed v1.0.', color: 'bg-brand-500' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'timelines.html',
      code: `<!-- HTML + Tailwind -->
<div class="space-y-5">
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Vertical Timeline</p>
    <div class="relative pl-8">
      <div class="absolute left-3 top-0 h-full w-px bg-gray-200 dark:bg-white/10"></div>
      <div class="relative pb-6">
        <div class="absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full bg-brand-500"><div class="size-1.5 rounded-full bg-white"></div></div>
        <p class="text-xs text-gray-400">2024-01-15</p>
        <p class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Project Created</p>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Initial repository setup.</p>
      </div>
      <div class="relative pb-6">
        <div class="absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full bg-success-500"><div class="size-1.5 rounded-full bg-white"></div></div>
        <p class="text-xs text-gray-400">2024-02-03</p>
        <p class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Design Review</p>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Completed UI/UX design review.</p>
      </div>
      <div class="relative">
        <div class="absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full bg-warning-500"><div class="size-1.5 rounded-full bg-white"></div></div>
        <p class="text-xs text-gray-400">2024-03-10</p>
        <p class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Beta Launch</p>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Released beta to early adopters.</p>
      </div>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'timelines.blade.php',
      code: `<!-- Laravel Blade + Tailwind -->
<div class="space-y-5">
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Vertical Timeline</p>
    <div class="relative pl-8">
      <div class="absolute left-3 top-0 h-full w-px bg-gray-200 dark:bg-white/10"></div>
      <div class="relative pb-6">
        <div class="absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full bg-brand-500"><div class="size-1.5 rounded-full bg-white"></div></div>
        <p class="text-xs text-gray-400">2024-01-15</p>
        <p class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Project Created</p>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Initial repository setup.</p>
      </div>
      <div class="relative pb-6">
        <div class="absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full bg-success-500"><div class="size-1.5 rounded-full bg-white"></div></div>
        <p class="text-xs text-gray-400">2024-02-03</p>
        <p class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Design Review</p>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Completed UI/UX design review.</p>
      </div>
      <div class="relative">
        <div class="absolute -left-5 top-0.5 flex size-4 items-center justify-center rounded-full bg-warning-500"><div class="size-1.5 rounded-full bg-white"></div></div>
        <p class="text-xs text-gray-400">2024-03-10</p>
        <p class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Beta Launch</p>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Released beta to early adopters.</p>
      </div>
    </div>
  </div>
</div>`,
    },
  },
};

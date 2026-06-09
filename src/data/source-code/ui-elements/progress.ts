import { ComponentSourceData } from '../types';

export const progressSource: ComponentSourceData = {
  component: 'Progress',
  slug: 'progress',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Progress bar components for indicating completion status and loading states.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ProgressSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useEffect } from 'react';

function ProgressBar({ value, color = 'brand', size = 'md', showLabel = false }: { value: number; color?: string; size?: string; showLabel?: boolean }) {
  const colors: Record<string, string> = {
    brand: 'bg-brand-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
  };
  const sizes: Record<string, string> = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };
  return (
    <div className="w-full">
      <div className={\`w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 \${sizes[size]}\`}>
        <div className={\`\${colors[color]} h-full rounded-full transition-all duration-500\`} style={{ width: \`\${value}%\` }} />
      </div>
      {showLabel && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{value}%</p>}
    </div>
  );
}

function ProgressSection() {
  const [upload, setUpload] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setUpload((v) => v >= 100 ? 0 : v + 10), 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
        <div className="space-y-3">
          <ProgressBar value={75} color="brand" showLabel />
          <ProgressBar value={60} color="success" showLabel />
          <ProgressBar value={45} color="warning" showLabel />
          <ProgressBar value={30} color="error" showLabel />
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
        <div className="space-y-3">
          <ProgressBar value={65} size="sm" />
          <ProgressBar value={65} size="md" />
          <ProgressBar value={65} size="lg" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Animated</p>
        <ProgressBar value={upload} color="brand" showLabel />
      </div>
    </div>
  );
}

export default ProgressSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'progress/page.tsx',
      code: `'use client';

import ProgressSection from '@/components/mtverse/ui-elements/ProgressSection';

export default function ProgressPage() {
  return <ProgressSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ProgressSection.vue',
      code: `<template>
  <div class="space-y-5">
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
      <div class="space-y-3">
        <div v-for="bar in bars" :key="bar.color">
          <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5">
            <div :class="[bar.bg, 'h-full rounded-full transition-all duration-500']" :style="{ width: bar.value + '%' }" />
          </div>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ bar.value }}%</p>
        </div>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
      <div class="space-y-3">
        <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-1.5"><div class="bg-brand-500 h-full rounded-full" style="width:65%" /></div>
        <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-brand-500 h-full rounded-full" style="width:65%" /></div>
        <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-4"><div class="bg-brand-500 h-full rounded-full" style="width:65%" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bars = [
  { color: 'brand', value: 75, bg: 'bg-brand-500' },
  { color: 'success', value: 60, bg: 'bg-success-500' },
  { color: 'warning', value: 45, bg: 'bg-warning-500' },
  { color: 'error', value: 30, bg: 'bg-error-500' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'progress.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  template: \`
    <div class="space-y-5">
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
        <div class="space-y-3">
          <div *ngFor="let bar of bars">
            <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5">
              <div [class]="bar.bg + ' h-full rounded-full transition-all duration-500'" [style.width]="bar.value + '%'"></div>
            </div>
            <p class="mt-1 text-xs text-gray-500">{{ bar.value }}%</p>
          </div>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
        <div class="space-y-3">
          <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-1.5"><div class="bg-brand-500 h-full rounded-full" style="width:65%"></div></div>
          <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-brand-500 h-full rounded-full" style="width:65%"></div></div>
          <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-4"><div class="bg-brand-500 h-full rounded-full" style="width:65%"></div></div>
        </div>
      </div>
    </div>
  \`
})
export class ProgressComponent {
  bars = [
    { color: 'brand', value: 75, bg: 'bg-brand-500' },
    { color: 'success', value: 60, bg: 'bg-success-500' },
    { color: 'warning', value: 45, bg: 'bg-warning-500' },
    { color: 'error', value: 30, bg: 'bg-error-500' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'progress.html',
      code: `<!-- HTML + Alpine.js -->
<div class="space-y-5" x-data="{ upload: 0 }" x-init="setInterval(() => upload = upload >= 100 ? 0 : upload + 10, 500)">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
    <div class="space-y-3">
      <div><div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-brand-500 h-full rounded-full transition-all duration-500" style="width:75%"></div></div><p class="mt-1 text-xs text-gray-500">75%</p></div>
      <div><div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-success-500 h-full rounded-full" style="width:60%"></div></div><p class="mt-1 text-xs text-gray-500">60%</p></div>
      <div><div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-warning-500 h-full rounded-full" style="width:45%"></div></div><p class="mt-1 text-xs text-gray-500">45%</p></div>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Animated</p>
    <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-brand-500 h-full rounded-full transition-all duration-500" :style="'width:' + upload + '%'"></div></div>
    <p class="mt-1 text-xs text-gray-500" x-text="upload + '%'"></p>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'progress.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="space-y-5" x-data="{ upload: 0 }" x-init="setInterval(() => upload = upload >= 100 ? 0 : upload + 10, 500)">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
    <div class="space-y-3">
      <div><div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-brand-500 h-full rounded-full transition-all duration-500" style="width:75%"></div></div><p class="mt-1 text-xs text-gray-500">75%</p></div>
      <div><div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-success-500 h-full rounded-full" style="width:60%"></div></div><p class="mt-1 text-xs text-gray-500">60%</p></div>
      <div><div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-warning-500 h-full rounded-full" style="width:45%"></div></div><p class="mt-1 text-xs text-gray-500">45%</p></div>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Animated</p>
    <div class="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-2.5"><div class="bg-brand-500 h-full rounded-full transition-all duration-500" :style="'width:' + upload + '%'"></div></div>
    <p class="mt-1 text-xs text-gray-500" x-text="upload + '%'"></p>
  </div>
</div>`,
    },
  },
};

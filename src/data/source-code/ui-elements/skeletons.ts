import { ComponentSourceData } from '../types';

export const skeletonsSource: ComponentSourceData = {
  component: 'Skeletons',
  slug: 'skeletons',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Skeleton loading placeholders for content that is still loading or fetching.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'SkeletonsSection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

function Skeleton({ className }: { className?: string }) {
  return <div className={\`animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 \${className ?? ''}\`} />;
}

function SkeletonsSection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Basic Shapes</p>
        <div className="space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Card Skeleton</p>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <Skeleton className="size-12 shrink-0 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-3 w-1/4" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-4/6" />
          </div>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">List Skeleton</p>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-10 shrink-0 rounded-xl" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-1/3" />
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkeletonsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'skeletons/page.tsx',
      code: `'use client';

import SkeletonsSection from '@/components/mtverse/ui-elements/SkeletonsSection';

export default function SkeletonsPage() {
  return <SkeletonsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'SkeletonsSection.vue',
      code: `<template>
  <div class="space-y-6">
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Basic Shapes</p>
      <div class="space-y-3">
        <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-3/4" />
        <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-1/2" />
        <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-5/6" />
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Card Skeleton</p>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
        <div class="flex items-center gap-3">
          <div class="animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 size-12 shrink-0" />
          <div class="flex-1 space-y-2">
            <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-1/3" />
            <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-1/4" />
          </div>
        </div>
        <div class="mt-4 space-y-2">
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-full" />
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-5/6" />
        </div>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">List Skeleton</p>
      <div class="space-y-3">
        <div v-for="i in 3" :key="i" class="flex items-center gap-3">
          <div class="animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 size-10 shrink-0" />
          <div class="flex-1 space-y-2">
            <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-2/3" />
            <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-1/3" />
          </div>
          <div class="animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 h-6 w-16" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'skeletons.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-skeletons',
  template: \`
    <div class="space-y-6">
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Basic Shapes</p>
        <div class="space-y-3">
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-3/4"></div>
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-1/2"></div>
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-5/6"></div>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Card Skeleton</p>
        <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
          <div class="flex items-center gap-3">
            <div class="animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 size-12 shrink-0"></div>
            <div class="flex-1 space-y-2">
              <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-1/3"></div>
              <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-1/4"></div>
            </div>
          </div>
          <div class="mt-4 space-y-2">
            <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-full"></div>
            <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class SkeletonsComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'skeletons.html',
      code: `<!-- HTML + Tailwind -->
<div class="space-y-6">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Basic Shapes</p>
    <div class="space-y-3">
      <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-3/4"></div>
      <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-1/2"></div>
      <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-5/6"></div>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Card Skeleton</p>
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
      <div class="flex items-center gap-3">
        <div class="animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 size-12 shrink-0"></div>
        <div class="flex-1 space-y-2">
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-1/3"></div>
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-1/4"></div>
        </div>
      </div>
      <div class="mt-4 space-y-2">
        <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-full"></div>
        <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-5/6"></div>
      </div>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'skeletons.blade.php',
      code: `<!-- Laravel Blade + Tailwind -->
<div class="space-y-6">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Basic Shapes</p>
    <div class="space-y-3">
      <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-3/4"></div>
      <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-1/2"></div>
      <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-5/6"></div>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Card Skeleton</p>
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
      <div class="flex items-center gap-3">
        <div class="animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 size-12 shrink-0"></div>
        <div class="flex-1 space-y-2">
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-4 w-1/3"></div>
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-1/4"></div>
        </div>
      </div>
      <div class="mt-4 space-y-2">
        <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-full"></div>
        <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-3 w-5/6"></div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
};

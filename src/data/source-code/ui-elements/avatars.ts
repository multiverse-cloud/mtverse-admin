import { ComponentSourceData } from '../types';

export const avatarsSource: ComponentSourceData = {
  component: 'Avatars',
  slug: 'avatars',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Avatar components for user profile images with sizes, groups, and status indicators.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'AvatarsSection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

const initials = ['JD', 'SK', 'AM', 'RW', 'LP'];

function AvatarsSection() {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
        <div className="flex items-end gap-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-brand-100 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
          <div className="flex size-10 items-center justify-center rounded-full bg-success-100 text-sm font-medium text-success-600 dark:bg-success-500/20 dark:text-success-400">SK</div>
          <div className="flex size-12 items-center justify-center rounded-full bg-warning-100 text-base font-medium text-warning-600 dark:bg-warning-500/20 dark:text-warning-400">AM</div>
          <div className="flex size-14 items-center justify-center rounded-full bg-error-100 text-lg font-medium text-error-600 dark:bg-error-500/20 dark:text-error-400">RW</div>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Status</p>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-success-500 dark:border-gray-900" />
          </div>
          <div className="relative">
            <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">SK</div>
            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-warning-500 dark:border-gray-900" />
          </div>
          <div className="relative">
            <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">AM</div>
            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-gray-400 dark:border-gray-900" />
          </div>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Group</p>
        <div className="flex -space-x-2">
          {initials.map((init, i) => {
            const colors = ['bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400', 'bg-success-100 text-success-600 dark:bg-success-500/20 dark:text-success-400', 'bg-warning-100 text-warning-600 dark:bg-warning-500/20 dark:text-warning-400', 'bg-error-100 text-error-600 dark:bg-error-500/20 dark:text-error-400', 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'];
            return (
              <div key={i} className={\`flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium \${colors[i]} dark:border-gray-900\`}>{init}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AvatarsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'avatars/page.tsx',
      code: `'use client';

import AvatarsSection from '@/components/mtverse/ui-elements/AvatarsSection';

export default function AvatarsPage() {
  return <AvatarsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'AvatarsSection.vue',
      code: `<template>
  <div class="space-y-5">
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
      <div class="flex items-end gap-3">
        <div class="flex size-8 items-center justify-center rounded-full bg-brand-100 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
        <div class="flex size-10 items-center justify-center rounded-full bg-success-100 text-sm font-medium text-success-600 dark:bg-success-500/20 dark:text-success-400">SK</div>
        <div class="flex size-12 items-center justify-center rounded-full bg-warning-100 text-base font-medium text-warning-600 dark:bg-warning-500/20 dark:text-warning-400">AM</div>
        <div class="flex size-14 items-center justify-center rounded-full bg-error-100 text-lg font-medium text-error-600 dark:bg-error-500/20 dark:text-error-400">RW</div>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Status</p>
      <div class="flex items-center gap-3">
        <div class="relative">
          <div class="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
          <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-success-500 dark:border-gray-900" />
        </div>
        <div class="relative">
          <div class="flex size-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">SK</div>
          <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-warning-500 dark:border-gray-900" />
        </div>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Group</p>
      <div class="flex -space-x-2">
        <div v-for="(item, i) in avatars" :key="i" :class="['flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium dark:border-gray-900', item.color]">{{ item.init }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const avatars = [
  { init: 'JD', color: 'bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400' },
  { init: 'SK', color: 'bg-success-100 text-success-600 dark:bg-success-500/20 dark:text-success-400' },
  { init: 'AM', color: 'bg-warning-100 text-warning-600 dark:bg-warning-500/20 dark:text-warning-400' },
  { init: 'RW', color: 'bg-error-100 text-error-600 dark:bg-error-500/20 dark:text-error-400' },
  { init: 'LP', color: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'avatars.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-avatars',
  template: \`
    <div class="space-y-5">
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
        <div class="flex items-end gap-3">
          <div class="flex size-8 items-center justify-center rounded-full bg-brand-100 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
          <div class="flex size-10 items-center justify-center rounded-full bg-success-100 text-sm font-medium text-success-600 dark:bg-success-500/20 dark:text-success-400">SK</div>
          <div class="flex size-12 items-center justify-center rounded-full bg-warning-100 text-base font-medium text-warning-600 dark:bg-warning-500/20 dark:text-warning-400">AM</div>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Status</p>
        <div class="flex items-center gap-3">
          <div class="relative">
            <div class="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
            <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-success-500 dark:border-gray-900"></span>
          </div>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Group</p>
        <div class="flex -space-x-2">
          <div *ngFor="let av of avatars" [class]="'flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium dark:border-gray-900 ' + av.color">{{ av.init }}</div>
        </div>
      </div>
    </div>
  \`
})
export class AvatarsComponent {
  avatars = [
    { init: 'JD', color: 'bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400' },
    { init: 'SK', color: 'bg-success-100 text-success-600 dark:bg-success-500/20 dark:text-success-400' },
    { init: 'AM', color: 'bg-warning-100 text-warning-600 dark:bg-warning-500/20 dark:text-warning-400' },
    { init: 'RW', color: 'bg-error-100 text-error-600 dark:bg-error-500/20 dark:text-error-400' },
    { init: 'LP', color: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'avatars.html',
      code: `<!-- HTML + Tailwind -->
<div class="space-y-5">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
    <div class="flex items-end gap-3">
      <div class="flex size-8 items-center justify-center rounded-full bg-brand-100 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
      <div class="flex size-10 items-center justify-center rounded-full bg-success-100 text-sm font-medium text-success-600 dark:bg-success-500/20 dark:text-success-400">SK</div>
      <div class="flex size-12 items-center justify-center rounded-full bg-warning-100 text-base font-medium text-warning-600 dark:bg-warning-500/20 dark:text-warning-400">AM</div>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Status</p>
    <div class="flex items-center gap-3">
      <div class="relative">
        <div class="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
        <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-success-500 dark:border-gray-900"></span>
      </div>
      <div class="relative">
        <div class="flex size-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">SK</div>
        <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-warning-500 dark:border-gray-900"></span>
      </div>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Group</p>
    <div class="flex -space-x-2">
      <div class="flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 dark:border-gray-900">JD</div>
      <div class="flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium bg-success-100 text-success-600 dark:bg-success-500/20 dark:text-success-400 dark:border-gray-900">SK</div>
      <div class="flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium bg-warning-100 text-warning-600 dark:bg-warning-500/20 dark:text-warning-400 dark:border-gray-900">AM</div>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'avatars.blade.php',
      code: `<!-- Laravel Blade + Tailwind -->
<div class="space-y-5">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
    <div class="flex items-end gap-3">
      <div class="flex size-8 items-center justify-center rounded-full bg-brand-100 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
      <div class="flex size-10 items-center justify-center rounded-full bg-success-100 text-sm font-medium text-success-600 dark:bg-success-500/20 dark:text-success-400">SK</div>
      <div class="flex size-12 items-center justify-center rounded-full bg-warning-100 text-base font-medium text-warning-600 dark:bg-warning-500/20 dark:text-warning-400">AM</div>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Status</p>
    <div class="flex items-center gap-3">
      <div class="relative">
        <div class="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
        <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-success-500 dark:border-gray-900"></span>
      </div>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Group</p>
    <div class="flex -space-x-2">
      <div class="flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 dark:border-gray-900">JD</div>
      <div class="flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium bg-success-100 text-success-600 dark:bg-success-500/20 dark:text-success-400 dark:border-gray-900">SK</div>
      <div class="flex size-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium bg-warning-100 text-warning-600 dark:bg-warning-500/20 dark:text-warning-400 dark:border-gray-900">AM</div>
    </div>
  </div>
</div>`,
    },
  },
};

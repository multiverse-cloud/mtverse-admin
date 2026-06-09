import { ComponentSourceData } from '../types';

export const spinnersSource: ComponentSourceData = {
  component: 'Spinners',
  slug: 'spinners',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Spinner loading indicators in various sizes and styles for async operations.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'SpinnersSection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

function Spinner({ size = 'md', color = 'brand' }: { size?: 'sm' | 'md' | 'lg'; color?: string }) {
  const sizes = { sm: 'size-4', md: 'size-8', lg: 'size-12' };
  const colors: Record<string, string> = { brand: 'text-brand-500', gray: 'text-gray-400', white: 'text-white' };
  return (
    <svg className={\`animate-spin \${sizes[size]} \${colors[color]}\`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

function DotSpinner() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <div key={i} className="size-2 rounded-full bg-brand-500" style={{ animation: \`pulse 1.5s ease-in-out \${i * 0.2}s infinite\` }} />
      ))}
    </div>
  );
}

function SpinnersSection() {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
        <div className="flex items-center gap-4">
          <Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
        <div className="flex items-center gap-4">
          <Spinner color="brand" /><Spinner color="gray" />
          <div className="flex items-center justify-center rounded-xl bg-gray-800 p-3"><Spinner color="white" /></div>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Text</p>
        <div className="flex items-center gap-3">
          <Spinner size="sm" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Loading data...</span>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Dot Spinner</p>
        <DotSpinner />
      </div>
    </div>
  );
}

export default SpinnersSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'spinners/page.tsx',
      code: `'use client';

import SpinnersSection from '@/components/mtverse/ui-elements/SpinnersSection';

export default function SpinnersPage() {
  return <SpinnersSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'SpinnersSection.vue',
      code: `<template>
  <div class="space-y-5">
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
      <div class="flex items-center gap-4">
        <svg v-for="size in ['sm','md','lg']" :key="size" :class="['animate-spin', sizeMap[size], 'text-brand-500']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
      <div class="flex items-center gap-4">
        <svg class="animate-spin size-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <svg class="animate-spin size-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Text</p>
      <div class="flex items-center gap-3">
        <svg class="animate-spin size-4 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
        <span class="text-sm text-gray-500 dark:text-gray-400">Loading data...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sizeMap: Record<string, string> = { sm: 'size-4', md: 'size-8', lg: 'size-12' };
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'spinners.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  template: \`
    <div class="space-y-5">
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
        <div class="flex items-center gap-4">
          <svg *ngFor="let size of sizes" [class]="'animate-spin ' + size.cls + ' text-brand-500'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Text</p>
        <div class="flex items-center gap-3">
          <svg class="animate-spin size-4 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
          <span class="text-sm text-gray-500">Loading data...</span>
        </div>
      </div>
    </div>
  \`
})
export class SpinnersComponent {
  sizes = [
    { label: 'sm', cls: 'size-4' },
    { label: 'md', cls: 'size-8' },
    { label: 'lg', cls: 'size-12' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'spinners.html',
      code: `<!-- HTML + Tailwind -->
<div class="space-y-5">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
    <div class="flex items-center gap-4">
      <svg class="animate-spin size-4 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
      <svg class="animate-spin size-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
      <svg class="animate-spin size-12 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Text</p>
    <div class="flex items-center gap-3">
      <svg class="animate-spin size-4 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
      <span class="text-sm text-gray-500">Loading data...</span>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'spinners.blade.php',
      code: `<!-- Laravel Blade + Tailwind -->
<div class="space-y-5">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
    <div class="flex items-center gap-4">
      <svg class="animate-spin size-4 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
      <svg class="animate-spin size-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
      <svg class="animate-spin size-12 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Text</p>
    <div class="flex items-center gap-3">
      <svg class="animate-spin size-4 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
      <span class="text-sm text-gray-500">Loading data...</span>
    </div>
  </div>
</div>`,
    },
  },
};

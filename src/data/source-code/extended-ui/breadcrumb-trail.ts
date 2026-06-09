import { ComponentSourceData } from '../types';

export const breadcrumbTrailSource: ComponentSourceData = {
  component: 'Breadcrumb Trail',
  slug: 'breadcrumb-trail',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A navigation breadcrumb trail showing the current page hierarchy.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'BreadcrumbTrail.tsx',
      code: `// React + TypeScript implementation
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbTrailProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbTrail({ items }: BreadcrumbTrailProps) {
  return (
    <nav className="flex items-center gap-1 text-sm">
      <a href="/" className="flex items-center text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300">
        <Home className="size-4" />
      </a>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <ChevronRight className="size-3.5 text-gray-300 dark:text-gray-600" />
          {i === items.length - 1 ? (
            <span className="font-medium text-gray-900 dark:text-white">{item.label}</span>
          ) : (
            <a href={item.href} className="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">{item.label}</a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

// Usage: <BreadcrumbTrail items={[{ label: 'Products', href: '/products' }, { label: 'Electronics' }, { label: 'Laptops' }]} />`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'breadcrumb-trail/page.tsx',
      code: `'use client';

import BreadcrumbTrail from '@/components/mtverse/extended-ui/BreadcrumbTrail';

export default function BreadcrumbTrailPage() {
  return <BreadcrumbTrail items={[{ label: 'Products', href: '/products' }, { label: 'Electronics' }, { label: 'Laptops' }]} />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'BreadcrumbTrail.vue',
      code: `<template>
  <nav class="flex items-center gap-1 text-sm">
    <a href="/" class="flex items-center text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300">
      <Home class="size-4" />
    </a>
    <template v-for="(item, i) in items" :key="i">
      <ChevronRight class="size-3.5 text-gray-300 dark:text-gray-600" />
      <span v-if="i === items.length - 1" class="font-medium text-gray-900 dark:text-white">{{ item.label }}</span>
      <a v-else :href="item.href" class="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">{{ item.label }}</a>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { Home, ChevronRight } from 'lucide-vue-next';

interface BreadcrumbItem { label: string; href?: string; }
defineProps<{ items: BreadcrumbItem[] }>();
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'breadcrumb-trail.component.ts',
      code: `import { Component, Input } from '@angular/core';

interface BreadcrumbItem { label: string; href?: string; }

@Component({
  selector: 'app-breadcrumb-trail',
  template: \`
    <nav class="flex items-center gap-1 text-sm">
      <a href="/" class="flex items-center text-gray-400 hover:text-gray-600">
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
      </a>
      <ng-container *ngFor="let item of items; let i = index; let last = last">
        <span class="text-gray-300">›</span>
        <span *ngIf="last" class="font-medium text-gray-900 dark:text-white">{{ item.label }}</span>
        <a *ngIf="!last" [href]="item.href || '#'" class="text-gray-500 hover:text-gray-700">{{ item.label }}</a>
      </ng-container>
    </nav>
  \`
})
export class BreadcrumbTrailComponent {
  @Input() items: BreadcrumbItem[] = [];
}`,
    },
    html: {
      language: 'html',
      filename: 'breadcrumb-trail.html',
      code: `<!-- HTML + Alpine.js -->
<nav x-data="{ items: [{ label: 'Products', href: '/products' }, { label: 'Electronics' }, { label: 'Laptops' }]" class="flex items-center gap-1 text-sm">
  <a href="/" class="flex items-center text-gray-400 hover:text-gray-600">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
  </a>
  <template x-for="(item, i) in items" :key="i">
    <span class="flex items-center gap-1">
      <span class="text-gray-300">›</span>
      <span x-show="i === items.length - 1" class="font-medium text-gray-900 dark:text-white" x-text="item.label"></span>
      <a x-show="i !== items.length - 1" :href="item.href || '#'" class="text-gray-500 hover:text-gray-700" x-text="item.label"></a>
    </span>
  </template>
</nav>`,
    },
    laravel: {
      language: 'blade',
      filename: 'breadcrumb-trail.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<nav x-data="{ items: [{ label: 'Products', href: '/products' }, { label: 'Electronics' }, { label: 'Laptops' }]" class="flex items-center gap-1 text-sm">
  <a href="/" class="flex items-center text-gray-400 hover:text-gray-600">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
  </a>
  <template x-for="(item, i) in items" :key="i">
    <span class="flex items-center gap-1">
      <span class="text-gray-300">›</span>
      <span x-show="i === items.length - 1" class="font-medium text-gray-900 dark:text-white" x-text="item.label"></span>
      <a x-show="i !== items.length - 1" :href="item.href || '#'" class="text-gray-500 hover:text-gray-700" x-text="item.label"></a>
    </span>
  </template>
</nav>`,
    },
  },
};

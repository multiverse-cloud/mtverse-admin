import { ComponentSourceData } from '../types';

export const breadcrumbSource: ComponentSourceData = {
  component: 'Breadcrumb',
  slug: 'breadcrumb',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Breadcrumb navigation components for showing hierarchical page paths and user location within a site structure.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'BreadcrumbSection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

function Breadcrumb({ items, separator = '/' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-gray-400 dark:text-gray-500">{separator}</span>
          )}
          {item.href ? (
            <a
              href={item.href}
              className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="font-medium text-gray-900 dark:text-white">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

function BreadcrumbSection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Default Breadcrumb</p>
        <Breadcrumb items={[
          { label: 'Home', href: '#' },
          { label: 'Products', href: '#' },
          { label: 'Electronics', href: '#' },
          { label: 'Smartphones' },
        ]} />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Chevron Separator</p>
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '#' },
            { label: 'Settings', href: '#' },
            { label: 'Profile' },
          ]}
          separator="›"
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">With Icons</p>
        <Breadcrumb
          items={[
            { label: '🏠 Home', href: '#' },
            { label: '📁 Projects', href: '#' },
            { label: '📄 Current Project' },
          ]}
          separator="→"
        />
      </div>
    </div>
  );
}

export default BreadcrumbSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'breadcrumb/page.tsx',
      code: `'use client';

import BreadcrumbSection from '@/components/mtverse/ui-elements/BreadcrumbSection';

export default function BreadcrumbPage() {
  return <BreadcrumbSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'BreadcrumbSection.vue',
      code: `<template>
  <div class="space-y-6">
    <div>
      <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Default Breadcrumb</p>
      <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
        <template v-for="(item, index) in items1" :key="index">
          <span v-if="index > 0" class="text-gray-400 dark:text-gray-500">{{ separator1 }}</span>
          <a v-if="item.href" :href="item.href" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">{{ item.label }}</a>
          <span v-else class="font-medium text-gray-900 dark:text-white">{{ item.label }}</span>
        </template>
      </nav>
    </div>
    <div>
      <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Chevron Separator</p>
      <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
        <template v-for="(item, index) in items2" :key="index">
          <span v-if="index > 0" class="text-gray-400 dark:text-gray-500">›</span>
          <a v-if="item.href" :href="item.href" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">{{ item.label }}</a>
          <span v-else class="font-medium text-gray-900 dark:text-white">{{ item.label }}</span>
        </template>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const separator1 = '/';
const items1 = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Electronics', href: '#' },
  { label: 'Smartphones' },
];
const items2 = [
  { label: 'Dashboard', href: '#' },
  { label: 'Settings', href: '#' },
  { label: 'Profile' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'breadcrumb.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: \`
    <div class="space-y-6">
      <div>
        <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Default Breadcrumb</p>
        <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
          <ng-container *ngFor="let item of items1; let i = index">
            <span *ngIf="i > 0" class="text-gray-400 dark:text-gray-500">/</span>
            <a *ngIf="item.href" [href]="item.href" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">{{ item.label }}</a>
            <span *ngIf="!item.href" class="font-medium text-gray-900 dark:text-white">{{ item.label }}</span>
          </ng-container>
        </nav>
      </div>
      <div>
        <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Chevron Separator</p>
        <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
          <ng-container *ngFor="let item of items2; let i = index">
            <span *ngIf="i > 0" class="text-gray-400 dark:text-gray-500">›</span>
            <a *ngIf="item.href" [href]="item.href" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">{{ item.label }}</a>
            <span *ngIf="!item.href" class="font-medium text-gray-900 dark:text-white">{{ item.label }}</span>
          </ng-container>
        </nav>
      </div>
    </div>
  \`
})
export class BreadcrumbComponent {
  items1 = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Electronics', href: '#' },
    { label: 'Smartphones' },
  ];
  items2 = [
    { label: 'Dashboard', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Profile' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'breadcrumb.html',
      code: `<!-- HTML + Alpine.js -->
<div class="space-y-6">
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Default Breadcrumb</p>
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Home</a>
      <span class="text-gray-400 dark:text-gray-500">/</span>
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Products</a>
      <span class="text-gray-400 dark:text-gray-500">/</span>
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Electronics</a>
      <span class="text-gray-400 dark:text-gray-500">/</span>
      <span class="font-medium text-gray-900 dark:text-white">Smartphones</span>
    </nav>
  </div>
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Chevron Separator</p>
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Dashboard</a>
      <span class="text-gray-400 dark:text-gray-500">›</span>
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Settings</a>
      <span class="text-gray-400 dark:text-gray-500">›</span>
      <span class="font-medium text-gray-900 dark:text-white">Profile</span>
    </nav>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'breadcrumb.blade.php',
      code: `<!-- Laravel Blade + Tailwind -->
<div class="space-y-6">
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Default Breadcrumb</p>
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Home</a>
      <span class="text-gray-400 dark:text-gray-500">/</span>
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Products</a>
      <span class="text-gray-400 dark:text-gray-500">/</span>
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Electronics</a>
      <span class="text-gray-400 dark:text-gray-500">/</span>
      <span class="font-medium text-gray-900 dark:text-white">Smartphones</span>
    </nav>
  </div>
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Chevron Separator</p>
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Dashboard</a>
      <span class="text-gray-400 dark:text-gray-500">›</span>
      <a href="#" class="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Settings</a>
      <span class="text-gray-400 dark:text-gray-500">›</span>
      <span class="font-medium text-gray-900 dark:text-white">Profile</span>
    </nav>
  </div>
</div>`,
    },
  },
};

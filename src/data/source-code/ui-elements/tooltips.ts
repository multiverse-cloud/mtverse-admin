import { ComponentSourceData } from '../types';

export const tooltipsSource: ComponentSourceData = {
  component: 'Tooltips',
  slug: 'tooltips',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Tooltip components for displaying contextual hints on hover or focus.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TooltipsSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

function Tooltip({ children, text, position = 'top' }: { children: React.ReactNode; text: string; position?: 'top' | 'bottom' | 'left' | 'right' }) {
  const [show, setShow] = useState(false);
  const pos = { top: 'bottom-full left-1/2 -translate-x-1/2 mb-2', bottom: 'top-full left-1/2 -translate-x-1/2 mt-2', left: 'right-full top-1/2 -translate-y-1/2 mr-2', right: 'left-full top-1/2 -translate-y-1/2 ml-2' };

  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className={\`absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 \${pos[position]}\`}>
          {text}
        </div>
      )}
    </div>
  );
}

function TooltipsSection() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Tooltip text="Edit this item" position="top"><button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Top</button></Tooltip>
      <Tooltip text="Delete this item" position="bottom"><button className="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white hover:bg-error-600 transition-colors">Bottom</button></Tooltip>
      <Tooltip text="Go back" position="left"><button className="rounded-xl bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 transition-colors">Left</button></Tooltip>
      <Tooltip text="View details" position="right"><button className="rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white hover:bg-success-600 transition-colors">Right</button></Tooltip>
    </div>
  );
}

export default TooltipsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'tooltips/page.tsx',
      code: `'use client';

import TooltipsSection from '@/components/mtverse/ui-elements/TooltipsSection';

export default function TooltipsPage() {
  return <TooltipsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'TooltipsSection.vue',
      code: `<template>
  <div class="flex flex-wrap items-center gap-4">
    <div v-for="tip in tooltips" :key="tip.position" class="relative inline-block" @mouseenter="hovered = tip.position" @mouseleave="hovered = ''">
      <button :class="tip.btnClass">{{ tip.position }}</button>
      <div v-show="hovered === tip.position" :class="['absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700', tip.posClass]">
        {{ tip.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const hovered = ref('');
const tooltips = [
  { position: 'top', text: 'Edit this item', btnClass: 'rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors', posClass: 'bottom-full left-1/2 -translate-x-1/2 mb-2' },
  { position: 'bottom', text: 'Delete this item', btnClass: 'rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white hover:bg-error-600 transition-colors', posClass: 'top-full left-1/2 -translate-x-1/2 mt-2' },
  { position: 'left', text: 'Go back', btnClass: 'rounded-xl bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300', posClass: 'right-full top-1/2 -translate-y-1/2 mr-2' },
  { position: 'right', text: 'View details', btnClass: 'rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white hover:bg-success-600', posClass: 'left-full top-1/2 -translate-y-1/2 ml-2' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'tooltips.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  template: \`
    <div class="flex flex-wrap items-center gap-4">
      <div *ngFor="let tip of tooltips" class="relative inline-block" (mouseenter)="hovered = tip.position" (mouseleave)="hovered = ''">
        <button [class]="tip.btnClass">{{ tip.position }}</button>
        <div *ngIf="hovered === tip.position" [class]="'absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 ' + tip.posClass">
          {{ tip.text }}
        </div>
      </div>
    </div>
  \`
})
export class TooltipsComponent {
  hovered = '';
  tooltips = [
    { position: 'top', text: 'Edit this item', btnClass: 'rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white', posClass: 'bottom-full left-1/2 -translate-x-1/2 mb-2' },
    { position: 'bottom', text: 'Delete this item', btnClass: 'rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white', posClass: 'top-full left-1/2 -translate-x-1/2 mt-2' },
    { position: 'left', text: 'Go back', btnClass: 'rounded-xl bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300', posClass: 'right-full top-1/2 -translate-y-1/2 mr-2' },
    { position: 'right', text: 'View details', btnClass: 'rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white', posClass: 'left-full top-1/2 -translate-y-1/2 ml-2' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'tooltips.html',
      code: `<!-- HTML + Alpine.js -->
<div class="flex flex-wrap items-center gap-4">
  <div class="relative inline-block" x-data="{ show: false }" @mouseenter="show = true" @mouseleave="show = false">
    <button class="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white">Top</button>
    <div x-show="show" x-transition class="absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 bottom-full left-1/2 -translate-x-1/2 mb-2">Edit this item</div>
  </div>
  <div class="relative inline-block" x-data="{ show: false }" @mouseenter="show = true" @mouseleave="show = false">
    <button class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Bottom</button>
    <div x-show="show" x-transition class="absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 top-full left-1/2 -translate-x-1/2 mt-2">Delete this item</div>
  </div>
  <div class="relative inline-block" x-data="{ show: false }" @mouseenter="show = true" @mouseleave="show = false">
    <button class="rounded-xl bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">Left</button>
    <div x-show="show" x-transition class="absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 right-full top-1/2 -translate-y-1/2 mr-2">Go back</div>
  </div>
  <div class="relative inline-block" x-data="{ show: false }" @mouseenter="show = true" @mouseleave="show = false">
    <button class="rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white">Right</button>
    <div x-show="show" x-transition class="absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 left-full top-1/2 -translate-y-1/2 ml-2">View details</div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'tooltips.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="flex flex-wrap items-center gap-4">
  <div class="relative inline-block" x-data="{ show: false }" @mouseenter="show = true" @mouseleave="show = false">
    <button class="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white">Top</button>
    <div x-show="show" x-transition class="absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 bottom-full left-1/2 -translate-x-1/2 mb-2">Edit this item</div>
  </div>
  <div class="relative inline-block" x-data="{ show: false }" @mouseenter="show = true" @mouseleave="show = false">
    <button class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Bottom</button>
    <div x-show="show" x-transition class="absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 top-full left-1/2 -translate-x-1/2 mt-2">Delete this item</div>
  </div>
  <div class="relative inline-block" x-data="{ show: false }" @mouseenter="show = true" @mouseleave="show = false">
    <button class="rounded-xl bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">Left</button>
    <div x-show="show" x-transition class="absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 right-full top-1/2 -translate-y-1/2 mr-2">Go back</div>
  </div>
  <div class="relative inline-block" x-data="{ show: false }" @mouseenter="show = true" @mouseleave="show = false">
    <button class="rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white">Right</button>
    <div x-show="show" x-transition class="absolute z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-700 left-full top-1/2 -translate-y-1/2 ml-2">View details</div>
  </div>
</div>`,
    },
  },
};

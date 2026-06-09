import { ComponentSourceData } from '../types';

export const badgesSource: ComponentSourceData = {
  component: 'Badges',
  slug: 'badges',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Badge components for labels, status indicators, and categorical tagging.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'BadgesSection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

const variants = {
  solid: {
    brand: 'bg-brand-500 text-white',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-white',
    error: 'bg-error-500 text-white',
    gray: 'bg-gray-500 text-white',
  },
  soft: {
    brand: 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
    success: 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400',
    warning: 'bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-400',
    error: 'bg-error-50 text-error-600 dark:bg-error-500/10 dark:text-error-400',
    gray: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
  },
};

function BadgesSection() {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Solid</p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(variants.solid).map(([key, cls]) => (
            <span key={key} className={\`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium \${cls}\`}>{key}</span>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Soft</p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(variants.soft).map(([key, cls]) => (
            <span key={key} className={\`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium \${cls}\`}>{key}</span>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Dot</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
            <span className="size-1.5 rounded-full bg-success-500" />Active
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-warning-50 px-3 py-1 text-xs font-medium text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">
            <span className="size-1.5 rounded-full bg-warning-500" />Pending
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-error-50 px-3 py-1 text-xs font-medium text-error-600 dark:bg-error-500/10 dark:text-error-400">
            <span className="size-1.5 rounded-full bg-error-500" />Offline
          </span>
        </div>
      </div>
    </div>
  );
}

export default BadgesSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'badges/page.tsx',
      code: `'use client';

import BadgesSection from '@/components/mtverse/ui-elements/BadgesSection';

export default function BadgesPage() {
  return <BadgesSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'BadgesSection.vue',
      code: `<template>
  <div class="space-y-5">
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Solid</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="(cls, key) in solidVariants" :key="key" :class="[\`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium \${cls}\`]">{{ key }}</span>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Soft</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="(cls, key) in softVariants" :key="key" :class="[\`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium \${cls}\`]">{{ key }}</span>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Dot</p>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
          <span class="size-1.5 rounded-full bg-success-500" />Active
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full bg-warning-50 px-3 py-1 text-xs font-medium text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">
          <span class="size-1.5 rounded-full bg-warning-500" />Pending
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full bg-error-50 px-3 py-1 text-xs font-medium text-error-600 dark:bg-error-500/10 dark:text-error-400">
          <span class="size-1.5 rounded-full bg-error-500" />Offline
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const solidVariants: Record<string, string> = {
  brand: 'bg-brand-500 text-white',
  success: 'bg-success-500 text-white',
  warning: 'bg-warning-500 text-white',
  error: 'bg-error-500 text-white',
  gray: 'bg-gray-500 text-white',
};
const softVariants: Record<string, string> = {
  brand: 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
  success: 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400',
  warning: 'bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-400',
  error: 'bg-error-50 text-error-600 dark:bg-error-500/10 dark:text-error-400',
  gray: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
};
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'badges.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  template: \`
    <div class="space-y-5">
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Solid</p>
        <div class="flex flex-wrap gap-2">
          <span *ngFor="let item of solid" [class]="'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ' + item.cls">{{ item.key }}</span>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Soft</p>
        <div class="flex flex-wrap gap-2">
          <span *ngFor="let item of soft" [class]="'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ' + item.cls">{{ item.key }}</span>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Dot</p>
        <div class="flex flex-wrap gap-2">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
            <span class="size-1.5 rounded-full bg-success-500"></span>Active
          </span>
          <span class="inline-flex items-center gap-1.5 rounded-full bg-warning-50 px-3 py-1 text-xs font-medium text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">
            <span class="size-1.5 rounded-full bg-warning-500"></span>Pending
          </span>
        </div>
      </div>
    </div>
  \`
})
export class BadgesComponent {
  solid = [
    { key: 'brand', cls: 'bg-brand-500 text-white' },
    { key: 'success', cls: 'bg-success-500 text-white' },
    { key: 'warning', cls: 'bg-warning-500 text-white' },
    { key: 'error', cls: 'bg-error-500 text-white' },
    { key: 'gray', cls: 'bg-gray-500 text-white' },
  ];
  soft = [
    { key: 'brand', cls: 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400' },
    { key: 'success', cls: 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400' },
    { key: 'warning', cls: 'bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-400' },
    { key: 'error', cls: 'bg-error-50 text-error-600 dark:bg-error-500/10 dark:text-error-400' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'badges.html',
      code: `<!-- HTML + Alpine.js -->
<div class="space-y-5">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Solid</p>
    <div class="flex flex-wrap gap-2">
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-brand-500 text-white">Brand</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-success-500 text-white">Success</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-warning-500 text-white">Warning</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-error-500 text-white">Error</span>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Soft</p>
    <div class="flex flex-wrap gap-2">
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">Brand</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400">Success</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">Warning</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-error-50 text-error-600 dark:bg-error-500/10 dark:text-error-400">Error</span>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Dot</p>
    <div class="flex flex-wrap gap-2">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
        <span class="size-1.5 rounded-full bg-success-500"></span>Active
      </span>
      <span class="inline-flex items-center gap-1.5 rounded-full bg-warning-50 px-3 py-1 text-xs font-medium text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">
        <span class="size-1.5 rounded-full bg-warning-500"></span>Pending
      </span>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'badges.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="space-y-5">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Solid</p>
    <div class="flex flex-wrap gap-2">
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-brand-500 text-white">Brand</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-success-500 text-white">Success</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-warning-500 text-white">Warning</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-error-500 text-white">Error</span>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Soft</p>
    <div class="flex flex-wrap gap-2">
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">Brand</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400">Success</span>
      <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">Warning</span>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Dot</p>
    <div class="flex flex-wrap gap-2">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/10 dark:text-success-400">
        <span class="size-1.5 rounded-full bg-success-500"></span>Active
      </span>
      <span class="inline-flex items-center gap-1.5 rounded-full bg-warning-50 px-3 py-1 text-xs font-medium text-warning-600 dark:bg-warning-500/10 dark:text-warning-400">
        <span class="size-1.5 rounded-full bg-warning-500"></span>Pending
      </span>
    </div>
  </div>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const dividersSource: ComponentSourceData = {
  component: 'Dividers',
  slug: 'dividers',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Section dividers with labels and icons for visual separation of content areas.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'DividersSection.tsx',
      code: `function DividersSection() {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Simple</p>
        <hr className="border-gray-200 dark:border-white/10" />
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Label</p>
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-200 dark:border-white/10" />
          <span className="text-xs font-medium text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-200 dark:border-white/10" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Gradient</p>
        <div className="h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'dividers/page.tsx',
      code: `'use client';

import DividersSection from '@/components/mtverse/ui-elements/DividersSection';

export default function DividersPage() {
  return <DividersSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'DividersSection.vue',
      code: `<template>
  <div class="space-y-5">
    <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Simple</p><hr class="border-gray-200 dark:border-white/10" /></div>
    <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Label</p>
      <div class="flex items-center gap-4"><div class="flex-1 border-t border-gray-200 dark:border-white/10" /><span class="text-xs font-medium text-gray-400">OR</span><div class="flex-1 border-t border-gray-200 dark:border-white/10" /></div>
    </div>
    <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Gradient</p><div class="h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" /></div>
  </div>
</template>`,
    },
    angular: {
      language: 'ts',
      filename: 'dividers.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-dividers',
  template: \`
    <div class="space-y-5">
      <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Simple</p><hr class="border-gray-200 dark:border-white/10" /></div>
      <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Label</p>
        <div class="flex items-center gap-4"><div class="flex-1 border-t border-gray-200 dark:border-white/10" /><span class="text-xs font-medium text-gray-400">OR</span><div class="flex-1 border-t border-gray-200 dark:border-white/10" /></div>
      </div>
    </div>
  \`
})
export class DividersComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'dividers.html',
      code: `<!-- HTML Dividers -->
<div class="space-y-5">
  <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Simple</p><hr class="border-gray-200 dark:border-white/10" /></div>
  <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Label</p>
    <div class="flex items-center gap-4"><div class="flex-1 border-t border-gray-200 dark:border-white/10" /><span class="text-xs font-medium text-gray-400">OR</span><div class="flex-1 border-t border-gray-200 dark:border-white/10" /></div>
  </div>
  <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Gradient</p><div class="h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" /></div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'dividers.blade.php',
      code: `<!-- Laravel Blade Dividers -->
<div class="space-y-5">
  <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Simple</p><hr class="border-gray-200 dark:border-white/10" /></div>
  <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Label</p>
    <div class="flex items-center gap-4"><div class="flex-1 border-t border-gray-200 dark:border-white/10" /><span class="text-xs font-medium text-gray-400">OR</span><div class="flex-1 border-t border-gray-200 dark:border-white/10" /></div>
  </div>
  <div><p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Gradient</p><div class="h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" /></div>
</div>`,
    },
  },
};

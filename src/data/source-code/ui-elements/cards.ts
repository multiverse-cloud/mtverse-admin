import { ComponentSourceData } from '../types';

export const cardsSource: ComponentSourceData = {
  component: 'Cards',
  slug: 'cards',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Card components for content containers with headers, bodies, and footers.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'CardsSection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

function CardsSection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">Basic Card</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">This is a basic card component with a simple layout for content display.</p>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
        <div className="border-b border-gray-100 px-6 py-4 dark:border-white/10">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Card with Header</h3>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">This card has a separate header section with a border divider.</p>
        </div>
        <div className="border-t border-gray-100 px-6 py-3 dark:border-white/10">
          <button className="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">Learn More →</button>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
        <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 dark:border-white/10">
          <div className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">📊</div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Stats Card</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Revenue overview</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-3xl font-bold text-gray-900 dark:text-white">$48,250</p>
          <p className="mt-1 text-sm text-success-500">↑ 12.5% from last month</p>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-theme-sm">
        <h3 className="text-base font-semibold">Gradient Card</h3>
        <p className="mt-2 text-sm text-white/80">A card with a gradient background for emphasis and visual appeal.</p>
        <button className="mt-4 rounded-xl bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors">Get Started</button>
      </div>
    </div>
  );
}

export default CardsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'cards/page.tsx',
      code: `'use client';

import CardsSection from '@/components/mtverse/ui-elements/CardsSection';

export default function CardsPage() {
  return <CardsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'CardsSection.vue',
      code: `<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
      <h3 class="text-base font-semibold text-gray-900 dark:text-white">Basic Card</h3>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">This is a basic card component with a simple layout.</p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
      <div class="border-b border-gray-100 px-6 py-4 dark:border-white/10">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white">Card with Header</h3>
      </div>
      <div class="p-6">
        <p class="text-sm text-gray-500 dark:text-gray-400">This card has a separate header section with a border divider.</p>
      </div>
      <div class="border-t border-gray-100 px-6 py-3 dark:border-white/10">
        <button class="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">Learn More →</button>
      </div>
    </div>
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
      <div class="flex items-center gap-3 border-b border-gray-100 px-6 py-4 dark:border-white/10">
        <div class="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">📊</div>
        <div><h3 class="text-sm font-semibold text-gray-900 dark:text-white">Stats Card</h3><p class="text-xs text-gray-500 dark:text-gray-400">Revenue overview</p></div>
      </div>
      <div class="p-6">
        <p class="text-3xl font-bold text-gray-900 dark:text-white">$48,250</p>
        <p class="mt-1 text-sm text-success-500">↑ 12.5% from last month</p>
      </div>
    </div>
    <div class="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-theme-sm">
      <h3 class="text-base font-semibold">Gradient Card</h3>
      <p class="mt-2 text-sm text-white/80">A card with a gradient background for emphasis.</p>
      <button class="mt-4 rounded-xl bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors">Get Started</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'cards.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: \`
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white">Basic Card</h3>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">This is a basic card component.</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
        <div class="border-b border-gray-100 px-6 py-4 dark:border-white/10">
          <h3 class="text-base font-semibold text-gray-900 dark:text-white">Card with Header</h3>
        </div>
        <div class="p-6">
          <p class="text-sm text-gray-500 dark:text-gray-400">This card has a separate header section.</p>
        </div>
        <div class="border-t border-gray-100 px-6 py-3 dark:border-white/10">
          <button class="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">Learn More →</button>
        </div>
      </div>
      <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
        <div class="flex items-center gap-3 border-b border-gray-100 px-6 py-4 dark:border-white/10">
          <div class="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">📊</div>
          <div><h3 class="text-sm font-semibold text-gray-900 dark:text-white">Stats Card</h3><p class="text-xs text-gray-500 dark:text-gray-400">Revenue</p></div>
        </div>
        <div class="p-6">
          <p class="text-3xl font-bold text-gray-900 dark:text-white">$48,250</p>
          <p class="mt-1 text-sm text-success-500">↑ 12.5%</p>
        </div>
      </div>
      <div class="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-theme-sm">
        <h3 class="text-base font-semibold">Gradient Card</h3>
        <p class="mt-2 text-sm text-white/80">A card with a gradient background.</p>
        <button class="mt-4 rounded-xl bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors">Get Started</button>
      </div>
    </div>
  \`
})
export class CardsComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'cards.html',
      code: `<!-- HTML + Alpine.js -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
    <h3 class="text-base font-semibold text-gray-900 dark:text-white">Basic Card</h3>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">This is a basic card component.</p>
  </div>
  <div class="rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
    <div class="border-b border-gray-100 px-6 py-4 dark:border-white/10">
      <h3 class="text-base font-semibold text-gray-900 dark:text-white">Card with Header</h3>
    </div>
    <div class="p-6">
      <p class="text-sm text-gray-500 dark:text-gray-400">This card has a separate header section.</p>
    </div>
    <div class="border-t border-gray-100 px-6 py-3 dark:border-white/10">
      <button class="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">Learn More →</button>
    </div>
  </div>
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
    <div class="flex items-center gap-3 border-b border-gray-100 px-6 py-4 dark:border-white/10">
      <div class="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">📊</div>
      <div><h3 class="text-sm font-semibold text-gray-900 dark:text-white">Stats Card</h3><p class="text-xs text-gray-500 dark:text-gray-400">Revenue</p></div>
    </div>
    <div class="p-6">
      <p class="text-3xl font-bold text-gray-900 dark:text-white">$48,250</p>
      <p class="mt-1 text-sm text-success-500">↑ 12.5%</p>
    </div>
  </div>
  <div class="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-theme-sm">
    <h3 class="text-base font-semibold">Gradient Card</h3>
    <p class="mt-2 text-sm text-white/80">A card with a gradient background.</p>
    <button class="mt-4 rounded-xl bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors">Get Started</button>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'cards.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
    <h3 class="text-base font-semibold text-gray-900 dark:text-white">Basic Card</h3>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">This is a basic card component.</p>
  </div>
  <div class="rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
    <div class="border-b border-gray-100 px-6 py-4 dark:border-white/10">
      <h3 class="text-base font-semibold text-gray-900 dark:text-white">Card with Header</h3>
    </div>
    <div class="p-6">
      <p class="text-sm text-gray-500 dark:text-gray-400">This card has a separate header section.</p>
    </div>
    <div class="border-t border-gray-100 px-6 py-3 dark:border-white/10">
      <button class="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">Learn More →</button>
    </div>
  </div>
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-gray-900">
    <div class="flex items-center gap-3 border-b border-gray-100 px-6 py-4 dark:border-white/10">
      <div class="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">📊</div>
      <div><h3 class="text-sm font-semibold text-gray-900 dark:text-white">Stats Card</h3><p class="text-xs text-gray-500 dark:text-gray-400">Revenue</p></div>
    </div>
    <div class="p-6">
      <p class="text-3xl font-bold text-gray-900 dark:text-white">$48,250</p>
      <p class="mt-1 text-sm text-success-500">↑ 12.5%</p>
    </div>
  </div>
  <div class="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-theme-sm">
    <h3 class="text-base font-semibold">Gradient Card</h3>
    <p class="mt-2 text-sm text-white/80">A card with a gradient background.</p>
    <button class="mt-4 rounded-xl bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors">Get Started</button>
  </div>
</div>`,
    },
  },
};

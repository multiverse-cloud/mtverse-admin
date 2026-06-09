import { ComponentSourceData } from '../types';

export const buttonsSource: ComponentSourceData = {
  component: 'Buttons',
  slug: 'buttons',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Interactive button components with multiple variants, sizes, and states.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ButtonsSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

function ButtonsSection() {
  const [loading, setLoading] = useState(false);
  const simulate = () => { setLoading(true); setTimeout(() => setLoading(false), 2000); };

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Variants</p>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-theme-sm hover:bg-brand-600 active:bg-brand-700 transition-colors">Primary</button>
          <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">Secondary</button>
          <button className="rounded-xl border border-brand-500 px-5 py-2.5 text-sm font-medium text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">Outline</button>
          <button className="rounded-xl bg-error-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-error-600 transition-colors">Danger</button>
          <button className="rounded-xl bg-success-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600 transition-colors">Small</button>
          <button className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Medium</button>
          <button className="rounded-xl bg-brand-500 px-7 py-3 text-base font-medium text-white hover:bg-brand-600 transition-colors">Large</button>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Loading</p>
        <div className="flex flex-wrap gap-2">
          <button onClick={simulate} disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
          <button disabled className="rounded-xl bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500">Disabled</button>
        </div>
      </div>
    </div>
  );
}

export default ButtonsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'buttons/page.tsx',
      code: `'use client';

import ButtonsSection from '@/components/mtverse/ui-elements/ButtonsSection';

export default function ButtonsPage() {
  return <ButtonsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ButtonsSection.vue',
      code: `<template>
  <div class="space-y-5">
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Variants</p>
      <div class="flex flex-wrap gap-2">
        <button class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-theme-sm hover:bg-brand-600 active:bg-brand-700 transition-colors">Primary</button>
        <button class="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">Secondary</button>
        <button class="rounded-xl border border-brand-500 px-5 py-2.5 text-sm font-medium text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">Outline</button>
        <button class="rounded-xl bg-error-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-error-600 transition-colors">Danger</button>
        <button class="rounded-xl bg-success-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
      <div class="flex flex-wrap items-center gap-2">
        <button class="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600 transition-colors">Small</button>
        <button class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Medium</button>
        <button class="rounded-xl bg-brand-500 px-7 py-3 text-base font-medium text-white hover:bg-brand-600 transition-colors">Large</button>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Loading</p>
      <div class="flex flex-wrap gap-2">
        <button @click="simulate" :disabled="loading" class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
          {{ loading ? 'Saving...' : 'Save Changes' }}
        </button>
        <button disabled class="rounded-xl bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500">Disabled</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);
const simulate = () => {
  loading.value = true;
  setTimeout(() => { loading.value = false; }, 2000);
};
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'buttons.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: \`
    <div class="space-y-5">
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Variants</p>
        <div class="flex flex-wrap gap-2">
          <button class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-theme-sm hover:bg-brand-600 active:bg-brand-700 transition-colors">Primary</button>
          <button class="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">Secondary</button>
          <button class="rounded-xl border border-brand-500 px-5 py-2.5 text-sm font-medium text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">Outline</button>
          <button class="rounded-xl bg-error-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-error-600 transition-colors">Danger</button>
          <button class="rounded-xl bg-success-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Loading</p>
        <div class="flex flex-wrap gap-2">
          <button (click)="simulate()" [disabled]="loading" class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
            {{ loading ? 'Saving...' : 'Save Changes' }}
          </button>
          <button disabled class="rounded-xl bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500">Disabled</button>
        </div>
      </div>
    </div>
  \`
})
export class ButtonsComponent {
  loading = false;
  simulate() {
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 2000);
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'buttons.html',
      code: `<!-- HTML + Alpine.js -->
<div class="space-y-5" x-data="{ loading: false }">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Variants</p>
    <div class="flex flex-wrap gap-2">
      <button class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-theme-sm hover:bg-brand-600 active:bg-brand-700 transition-colors">Primary</button>
      <button class="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">Secondary</button>
      <button class="rounded-xl border border-brand-500 px-5 py-2.5 text-sm font-medium text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">Outline</button>
      <button class="rounded-xl bg-error-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-error-600 transition-colors">Danger</button>
      <button class="rounded-xl bg-success-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Loading</p>
    <div class="flex flex-wrap gap-2">
      <button @click="loading = true; setTimeout(() => loading = false, 2000)" :disabled="loading" class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
        <span x-text="loading ? 'Saving...' : 'Save Changes'"></span>
      </button>
      <button disabled class="rounded-xl bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500">Disabled</button>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'buttons.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="space-y-5" x-data="{ loading: false }">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Variants</p>
    <div class="flex flex-wrap gap-2">
      <button class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-theme-sm hover:bg-brand-600 active:bg-brand-700 transition-colors">Primary</button>
      <button class="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">Secondary</button>
      <button class="rounded-xl border border-brand-500 px-5 py-2.5 text-sm font-medium text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">Outline</button>
      <button class="rounded-xl bg-error-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-error-600 transition-colors">Danger</button>
      <button class="rounded-xl bg-success-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Loading</p>
    <div class="flex flex-wrap gap-2">
      <button @click="loading = true; setTimeout(() => loading = false, 2000)" :disabled="loading" class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
        <span x-text="loading ? 'Saving...' : 'Save Changes'"></span>
      </button>
      <button disabled class="rounded-xl bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500">Disabled</button>
    </div>
  </div>
</div>`,
    },
  },
};

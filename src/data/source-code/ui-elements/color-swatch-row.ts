import { ComponentSourceData } from '../types';

export const colorSwatchRowSource: ComponentSourceData = {
  component: 'Color Swatch Row',
  slug: 'color-swatch-row',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Color Swatch Row component for the UI Elements library with full customization support.',
  sources: {
    react: { language: 'tsx', filename: 'ColorSwatchRow.tsx', code: `import React, { useState } from 'react';

export default function ColorSwatchRow() {
  const [active, setActive] = useState(false);
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Color Swatch Row</span>
        <button
          onClick={() => setActive(!active)}
          className="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600"
        >
          {active ? 'Active' : 'Toggle'}
        </button>
      </div>
      {active && (
        <div className="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
          <p className="text-xs text-gray-600 dark:text-gray-400">Interactive color swatch row content</p>
        </div>
      )}
    </div>
  );
}` },
    nextjs: { language: 'tsx', filename: 'color-swatch-row/page.tsx', code: `'use client';
import ColorSwatchRow from '@/components/mtverse/ui-elements/ColorSwatchRow';
export default function Page() {
  return <ColorSwatchRow />;
}` },
    vue: { language: 'vue', filename: 'ColorSwatchRow.vue', code: `<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Color Swatch Row</span>
      <button @click="active = !active"
        class="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
        {{ active ? 'Active' : 'Toggle' }}
      </button>
    </div>
    <div v-if="active" class="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
      <p class="text-xs text-gray-600 dark:text-gray-400">Interactive color swatch row content</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const active = ref(false);
</script>` },
    angular: { language: 'ts', filename: 'color-swatch-row.component.ts', code: `import { Component } from '@angular/core';
@Component({
  selector: 'app-color-swatch-row',
  template: \`
    <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Color Swatch Row</span>
        <button (click)="toggle()"
          class="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
          {{ active ? 'Active' : 'Toggle' }}
        </button>
      </div>
      <div *ngIf="active" class="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
        <p class="text-xs text-gray-600 dark:text-gray-400">Interactive color swatch row content</p>
      </div>
    </div>
  \`
})
export class ColorSwatchRowComponent {
  active = false;
  toggle() { this.active = !this.active; }
}` },
    html: { language: 'html', filename: 'color-swatch-row.html', code: `<!-- HTML + Alpine.js -->
<div x-data="{ active: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <div class="flex items-center justify-between">
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Color Swatch Row</span>
    <button @click="active = !active"
      class="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
      <span x-text="active ? 'Active' : 'Toggle'"></span>
    </button>
  </div>
  <div x-show="active" x-transition class="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
    <p class="text-xs text-gray-600 dark:text-gray-400">Interactive color swatch row content</p>
  </div>
</div>` },
    laravel: { language: 'blade', filename: 'color-swatch-row.blade.php', code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ active: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <div class="flex items-center justify-between">
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Color Swatch Row</span>
    <button @click="active = !active"
      class="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
      <span x-text="active ? 'Active' : 'Toggle'"></span>
    </button>
  </div>
  <div x-show="active" x-transition class="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
    <p class="text-xs text-gray-600 dark:text-gray-400">Interactive color swatch row content</p>
  </div>
</div>` },
  },
};

import { ComponentSourceData } from '../types';

export const slideInPanelSource: ComponentSourceData = {
  component: 'Slide In Panel',
  slug: 'slide-in-panel',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A panel that slides in from the side of the screen with smooth transitions.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'SlideInPanel.tsx',
      code: `import React, { useState } from 'react';

export default function SlideInPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
      >
        Open Panel
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl dark:bg-gray-dark"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'slideInRight 0.3s ease-out',
            }}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-gray-800 dark:text-white">Slide Panel</h4>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">&times;</button>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Panel content goes here.</p>
          </div>
        </div>
      )}
      <style>{\`@keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }\`}</style>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'slide-in-panel/page.tsx',
      code: `'use client';

import SlideInPanel from '@/components/mtverse/advanced-ui/SlideInPanel';

export default function SlideInPanelPage() {
  return <SlideInPanel />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'SlideInPanel.vue',
      code: `<template>
  <div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
    <button @click="isOpen = true"
      class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
      Open Panel
    </button>
    <Teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 z-50" @click="isOpen = false">
        <div class="absolute inset-0 bg-black/40" />
        <div class="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl dark:bg-gray-dark slide-in-right"
          @click.stop>
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800 dark:text-white">Slide Panel</h4>
            <button @click="isOpen = false" class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">&times;</button>
          </div>
          <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Panel content goes here.</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<style scoped>
.slide-in-right { animation: slideInRight 0.3s ease-out; }
@keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'slide-in-panel.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-in-panel',
  template: \`
    <div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <button (click)="isOpen = true"
        class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
        Open Panel
      </button>
      <div *ngIf="isOpen" class="fixed inset-0 z-50" (click)="isOpen = false">
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl dark:bg-gray-dark slide-in-right"
          (click)="$event.stopPropagation()">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800 dark:text-white">Slide Panel</h4>
            <button (click)="isOpen = false" class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">&times;</button>
          </div>
          <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Panel content goes here.</p>
        </div>
      </div>
    </div>
  \`,
  styles: [\`
    .slide-in-right { animation: slideInRight 0.3s ease-out; }
    @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
  \`]
})
export class SlideInPanelComponent {
  isOpen = false;
}`,
    },
    html: {
      language: 'html',
      filename: 'slide-in-panel.html',
      code: `<!-- HTML + Alpine.js -->
<div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ isOpen: false }">
  <button @click="isOpen = true"
    class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Open Panel
  </button>
  <div x-show="isOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0"
    x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-200"
    x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
    class="fixed inset-0 z-50" @click="isOpen = false">
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl dark:bg-gray-dark"
      x-transition:enter="transition ease-out duration-300" x-transition:enter-start="translate-x-full"
      x-transition:enter-end="translate-x-0" @click.stop>
      <div class="flex items-center justify-between">
        <h4 class="text-lg font-bold text-gray-800 dark:text-white">Slide Panel</h4>
        <button @click="isOpen = false" class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">&times;</button>
      </div>
      <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Panel content goes here.</p>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'slide-in-panel.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ isOpen: false }">
  <button @click="isOpen = true"
    class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Open Panel
  </button>
  <div x-show="isOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0"
    x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-200"
    x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
    class="fixed inset-0 z-50" @click="isOpen = false">
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl dark:bg-gray-dark"
      x-transition:enter="transition ease-out duration-300" x-transition:enter-start="translate-x-full"
      x-transition:enter-end="translate-x-0" @click.stop>
      <div class="flex items-center justify-between">
        <h4 class="text-lg font-bold text-gray-800 dark:text-white">Slide Panel</h4>
        <button @click="isOpen = false" class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">&times;</button>
      </div>
      <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Panel content goes here.</p>
    </div>
  </div>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const shimmerLoaderSource: ComponentSourceData = {
  component: 'Shimmer Loader',
  slug: 'shimmer-loader',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A skeleton loading placeholder with a shimmer animation effect.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ShimmerLoader.tsx',
      code: `import React from 'react';

interface ShimmerLoaderProps {
  lines?: number;
}

export default function ShimmerLoader({ lines = 3 }: ShimmerLoaderProps) {
  return (
    <div className="w-full max-w-sm space-y-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="relative h-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
          <span
            className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </div>
      ))}
      <style>{\`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      \`}</style>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'shimmer-loader/page.tsx',
      code: `'use client';

import ShimmerLoader from '@/components/mtverse/advanced-ui/ShimmerLoader';

export default function ShimmerLoaderPage() {
  return <ShimmerLoader />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ShimmerLoader.vue',
      code: `<template>
  <div class="w-full max-w-sm space-y-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
    <div v-for="i in lines" :key="i" class="relative h-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
      <span class="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

withDefaults(defineProps<{ lines?: number }>(), { lines: 3 });
</script>

<style scoped>
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'shimmer-loader.component.ts',
      code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shimmer-loader',
  template: \`
    <div class="w-full max-w-sm space-y-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <div *ngFor="let i of linesArr" class="relative h-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
        <span class="absolute inset-0 shimmer-bar bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
      </div>
    </div>
  \`,
  styles: [\`
    .shimmer-bar { animation: shimmer 2s infinite; transform: translateX(-100%); }
    @keyframes shimmer { 100% { transform: translateX(100%); } }
  \`]
})
export class ShimmerLoaderComponent {
  @Input() lines = 3;
  get linesArr() { return Array(this.lines).fill(0); }
}`,
    },
    html: {
      language: 'html',
      filename: 'shimmer-loader.html',
      code: `<!-- HTML + Tailwind CSS -->
<div class="w-full max-w-sm space-y-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
  <div class="relative h-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
    <span class="absolute inset-0 shimmer-bar bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
  </div>
  <div class="relative h-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
    <span class="absolute inset-0 shimmer-bar bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
  </div>
  <div class="relative h-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
    <span class="absolute inset-0 shimmer-bar bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
  </div>
</div>
<style>
  .shimmer-bar { animation: shimmer 2s infinite; transform: translateX(-100%); }
  @keyframes shimmer { 100% { transform: translateX(100%); } }
</style>`,
    },
    laravel: {
      language: 'blade',
      filename: 'shimmer-loader.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="w-full max-w-sm space-y-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ lines: 3 }">
  @for ($i = 0; $i < $lines ?? 3; $i++)
    <div class="relative h-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
      <span class="absolute inset-0 shimmer-bar bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
    </div>
  @endfor
</div>
<style>
  .shimmer-bar { animation: shimmer 2s infinite; transform: translateX(-100%); }
  @keyframes shimmer { 100% { transform: translateX(100%); } }
</style>`,
    },
  },
};

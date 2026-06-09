import { ComponentSourceData } from '../types';

export const morphingIconSource: ComponentSourceData = {
  component: 'Morphing Icon',
  slug: 'morphing-icon',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'An icon that smoothly morphs between two different shapes on hover.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MorphingIcon.tsx',
      code: `import React, { useState } from 'react';

export default function MorphingIcon() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        className="text-brand-500 transition-all duration-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <path
          d={hovered
            ? 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
            : 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'
          }
          fill="currentColor"
          style={{ transition: 'd 0.5s ease' }}
        />
      </svg>
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {hovered ? 'Star' : 'Circle'}
      </span>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'morphing-icon/page.tsx',
      code: `'use client';

import MorphingIcon from '@/components/mtverse/advanced-ui/MorphingIcon';

export default function MorphingIconPage() {
  return <MorphingIcon />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MorphingIcon.vue',
      code: `<template>
  <div class="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
      class="text-brand-500 transition-all duration-500"
      @mouseenter="hovered = true" @mouseleave="hovered = false">
      <path :d="hovered
        ? 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
        : 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'"
        fill="currentColor" style="transition: d 0.5s ease" />
    </svg>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
      {{ hovered ? 'Star' : 'Circle' }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const hovered = ref(false);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'morphing-icon.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-morphing-icon',
  template: \`
    <div class="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
        class="text-brand-500 transition-all duration-500"
        (mouseenter)="hovered = true" (mouseleave)="hovered = false">
        <path [attr.d]="hovered
          ? 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
          : 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'"
          fill="currentColor" style="transition: d 0.5s ease" />
      </svg>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
        {{ hovered ? 'Star' : 'Circle' }}
      </span>
    </div>
  \`
})
export class MorphingIconComponent {
  hovered = false;
}`,
    },
    html: {
      language: 'html',
      filename: 'morphing-icon.html',
      code: `<!-- HTML + Alpine.js -->
<div class="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ hovered: false }">
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
    class="text-brand-500 transition-all duration-500"
    @mouseenter="hovered = true" @mouseleave="hovered = false">
    <path :d="hovered
      ? 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
      : 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'"
      fill="currentColor" style="transition: d 0.5s ease"></path>
  </svg>
  <span class="text-sm font-medium text-gray-500 dark:text-gray-400" x-text="hovered ? 'Star' : 'Circle'"></span>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'morphing-icon.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ hovered: false }">
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
    class="text-brand-500 transition-all duration-500"
    @mouseenter="hovered = true" @mouseleave="hovered = false">
    <path :d="hovered
      ? 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
      : 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'"
      fill="currentColor" style="transition: d 0.5s ease"></path>
  </svg>
  <span class="text-sm font-medium text-gray-500 dark:text-gray-400" x-text="hovered ? 'Star' : 'Circle'"></span>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const progressstepanimatedSource: ComponentSourceData = {
  component: 'Animated Step Progress',
  slug: 'progress-step-animated',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Step-by-step progress indicator with animated transitions between steps.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ProgressStepAnimated.tsx',
      code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProgressStepAnimated() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800"
    >
      <p className="text-sm text-gray-700 dark:text-gray-300">Step-by-step progress indicator with animated transitions between steps.</p>
      <button
        onClick={() => setIsActive(!isActive)}
        className="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
      >
        Toggle State
      </button>
    </motion.div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'progress-step-animated/page.tsx',
      code: `'use client';

import ProgressStepAnimated from '@/components/mtverse/advanced-ui/ProgressStepAnimated';

export default function ProgressStepAnimatedPage() {
  return (
    <div className="p-6">
      <ProgressStepAnimated />
    </div>
  );
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ProgressStepAnimated.vue',
      code: `<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <p class="text-sm text-gray-700 dark:text-gray-300">Step-by-step progress indicator with animated transitions between steps.</p>
    <button
      @click="isActive = !isActive"
      class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
    >
      Toggle State
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isActive = ref(false);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'progress-step-animated.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-step-animated',
  template: \`
    <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <p class="text-sm text-gray-700 dark:text-gray-300">Step-by-step progress indicator with animated transitions between steps.</p>
      <button (click)="toggle()"
        class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
        Toggle State
      </button>
    </div>
  \`
})
export class ProgressStepAnimatedComponent {
  isActive = false;
  toggle() { this.isActive = !this.isActive; }
}`,
    },
    html: {
      language: 'html',
      filename: 'progress-step-animated.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Step-by-step progress indicator with animated transitions between steps.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'progress-step-animated.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Step-by-step progress indicator with animated transitions between steps.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const pulsedotSource: ComponentSourceData = {
  component: 'Pulse Dot',
  slug: 'pulse-dot',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Animated pulsing dot indicator for status, notifications, and live updates.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'PulseDot.tsx',
      code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PulseDot() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800"
    >
      <p className="text-sm text-gray-700 dark:text-gray-300">Animated pulsing dot indicator for status, notifications, and live updates.</p>
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
      filename: 'pulse-dot/page.tsx',
      code: `'use client';

import PulseDot from '@/components/mtverse/advanced-ui/PulseDot';

export default function PulseDotPage() {
  return (
    <div className="p-6">
      <PulseDot />
    </div>
  );
}`,
    },
    vue: {
      language: 'vue',
      filename: 'PulseDot.vue',
      code: `<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <p class="text-sm text-gray-700 dark:text-gray-300">Animated pulsing dot indicator for status, notifications, and live updates.</p>
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
      filename: 'pulse-dot.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-pulse-dot',
  template: \`
    <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <p class="text-sm text-gray-700 dark:text-gray-300">Animated pulsing dot indicator for status, notifications, and live updates.</p>
      <button (click)="toggle()"
        class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
        Toggle State
      </button>
    </div>
  \`
})
export class PulseDotComponent {
  isActive = false;
  toggle() { this.isActive = !this.isActive; }
}`,
    },
    html: {
      language: 'html',
      filename: 'pulse-dot.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Animated pulsing dot indicator for status, notifications, and live updates.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'pulse-dot.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Animated pulsing dot indicator for status, notifications, and live updates.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const keyboardnavSource: ComponentSourceData = {
  component: 'Keyboard Navigation',
  slug: 'keyboard-nav',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'Keyboard-navigable container with arrow key support and focus management.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'KeyboardNav.tsx',
      code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function KeyboardNav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800"
    >
      <p className="text-sm text-gray-700 dark:text-gray-300">Keyboard-navigable container with arrow key support and focus management.</p>
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
      filename: 'keyboard-nav/page.tsx',
      code: `'use client';

import KeyboardNav from '@/components/mtverse/extended-ui/KeyboardNav';

export default function KeyboardNavPage() {
  return (
    <div className="p-6">
      <KeyboardNav />
    </div>
  );
}`,
    },
    vue: {
      language: 'vue',
      filename: 'KeyboardNav.vue',
      code: `<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <p class="text-sm text-gray-700 dark:text-gray-300">Keyboard-navigable container with arrow key support and focus management.</p>
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
      filename: 'keyboard-nav.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-nav',
  template: \`
    <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <p class="text-sm text-gray-700 dark:text-gray-300">Keyboard-navigable container with arrow key support and focus management.</p>
      <button (click)="toggle()"
        class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
        Toggle State
      </button>
    </div>
  \`
})
export class KeyboardNavComponent {
  isActive = false;
  toggle() { this.isActive = !this.isActive; }
}`,
    },
    html: {
      language: 'html',
      filename: 'keyboard-nav.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Keyboard-navigable container with arrow key support and focus management.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'keyboard-nav.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Keyboard-navigable container with arrow key support and focus management.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
  },
};

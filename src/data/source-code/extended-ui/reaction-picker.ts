import { ComponentSourceData } from '../types';

export const reactionpickerSource: ComponentSourceData = {
  component: 'Reaction Picker',
  slug: 'reaction-picker',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'Emoji reaction picker with animated selection and count display.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ReactionPicker.tsx',
      code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReactionPicker() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800"
    >
      <p className="text-sm text-gray-700 dark:text-gray-300">Emoji reaction picker with animated selection and count display.</p>
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
      filename: 'reaction-picker/page.tsx',
      code: `'use client';

import ReactionPicker from '@/components/mtverse/extended-ui/ReactionPicker';

export default function ReactionPickerPage() {
  return (
    <div className="p-6">
      <ReactionPicker />
    </div>
  );
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ReactionPicker.vue',
      code: `<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <p class="text-sm text-gray-700 dark:text-gray-300">Emoji reaction picker with animated selection and count display.</p>
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
      filename: 'reaction-picker.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-reaction-picker',
  template: \`
    <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <p class="text-sm text-gray-700 dark:text-gray-300">Emoji reaction picker with animated selection and count display.</p>
      <button (click)="toggle()"
        class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
        Toggle State
      </button>
    </div>
  \`
})
export class ReactionPickerComponent {
  isActive = false;
  toggle() { this.isActive = !this.isActive; }
}`,
    },
    html: {
      language: 'html',
      filename: 'reaction-picker.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Emoji reaction picker with animated selection and count display.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'reaction-picker.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Emoji reaction picker with animated selection and count display.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
  },
};

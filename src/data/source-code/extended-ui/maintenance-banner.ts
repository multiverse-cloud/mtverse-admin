import { ComponentSourceData } from '../types';

export const maintenancebannerSource: ComponentSourceData = {
  component: 'Maintenance Banner',
  slug: 'maintenance-banner',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'Scheduled maintenance notification banner with countdown timer.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MaintenanceBanner.tsx',
      code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MaintenanceBanner() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800"
    >
      <p className="text-sm text-gray-700 dark:text-gray-300">Scheduled maintenance notification banner with countdown timer.</p>
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
      filename: 'maintenance-banner/page.tsx',
      code: `'use client';

import MaintenanceBanner from '@/components/mtverse/extended-ui/MaintenanceBanner';

export default function MaintenanceBannerPage() {
  return (
    <div className="p-6">
      <MaintenanceBanner />
    </div>
  );
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MaintenanceBanner.vue',
      code: `<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <p class="text-sm text-gray-700 dark:text-gray-300">Scheduled maintenance notification banner with countdown timer.</p>
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
      filename: 'maintenance-banner.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance-banner',
  template: \`
    <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <p class="text-sm text-gray-700 dark:text-gray-300">Scheduled maintenance notification banner with countdown timer.</p>
      <button (click)="toggle()"
        class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
        Toggle State
      </button>
    </div>
  \`
})
export class MaintenanceBannerComponent {
  isActive = false;
  toggle() { this.isActive = !this.isActive; }
}`,
    },
    html: {
      language: 'html',
      filename: 'maintenance-banner.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Scheduled maintenance notification banner with countdown timer.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'maintenance-banner.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ isActive: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">Scheduled maintenance notification banner with countdown timer.</p>
  <button
    @click="isActive = !isActive"
    class="mt-3 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
    Toggle State
  </button>
</div>`,
    },
  },
};

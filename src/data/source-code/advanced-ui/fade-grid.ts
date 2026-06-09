import { ComponentSourceData } from '../types';

export const fadeGridSource: ComponentSourceData = {
  component: 'FadeGrid',
  slug: 'fade-grid',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Grid items fade in sequentially on scroll.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'FadeGrid.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function FadeGrid() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">FadeGrid component - Grid items fade in sequentially on scroll.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'fade-grid/page.tsx',
      code: `'use client';

import FadeGrid from '@/components/mtverse/advanced-ui/FadeGrid';

export default function FadeGridPage() {
  return <FadeGrid />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'FadeGrid.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">FadeGrid component - Grid items fade in sequentially on scroll.</p>
  </div>
</template>

<script setup lang="ts">
// FadeGrid Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'FadeGrid.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-fade-grid',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">FadeGrid component - Grid items fade in sequentially on scroll.</p>
    </div>
  \`
})
export class FadeGridComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'fade-grid.html',
      code: `<!-- FadeGrid - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">FadeGrid component - Grid items fade in sequentially on scroll.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'fade-grid.blade.php',
      code: `<!-- FadeGrid - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">FadeGrid component - Grid items fade in sequentially on scroll.</p>
</div>`,
    },
  },
};

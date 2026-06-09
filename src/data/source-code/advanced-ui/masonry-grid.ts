import { ComponentSourceData } from '../types';

export const masonryGridSource: ComponentSourceData = {
  component: 'MasonryGrid',
  slug: 'masonry-grid',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'An animated masonry layout grid with category filtering.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MasonryGrid.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function MasonryGrid() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">MasonryGrid component - An animated masonry layout grid with category filtering.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'masonry-grid/page.tsx',
      code: `'use client';

import MasonryGrid from '@/components/mtverse/advanced-ui/MasonryGrid';

export default function MasonryGridPage() {
  return <MasonryGrid />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MasonryGrid.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">MasonryGrid component - An animated masonry layout grid with category filtering.</p>
  </div>
</template>

<script setup lang="ts">
// MasonryGrid Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'MasonryGrid.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-masonry-grid',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">MasonryGrid component - An animated masonry layout grid with category filtering.</p>
    </div>
  \`
})
export class MasonryGridComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'masonry-grid.html',
      code: `<!-- MasonryGrid - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">MasonryGrid component - An animated masonry layout grid with category filtering.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'masonry-grid.blade.php',
      code: `<!-- MasonryGrid - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">MasonryGrid component - An animated masonry layout grid with category filtering.</p>
</div>`,
    },
  },
};

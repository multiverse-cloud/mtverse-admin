import { ComponentSourceData } from '../types';

export const matrixRainSource: ComponentSourceData = {
  component: 'MatrixRain',
  slug: 'matrix-rain',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Matrix digital rain effect with falling characters.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MatrixRain.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function MatrixRain() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">MatrixRain component - Matrix digital rain effect with falling characters.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'matrix-rain/page.tsx',
      code: `'use client';

import MatrixRain from '@/components/mtverse/advanced-ui/MatrixRain';

export default function MatrixRainPage() {
  return <MatrixRain />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MatrixRain.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">MatrixRain component - Matrix digital rain effect with falling characters.</p>
  </div>
</template>

<script setup lang="ts">
// MatrixRain Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'MatrixRain.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix-rain',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">MatrixRain component - Matrix digital rain effect with falling characters.</p>
    </div>
  \`
})
export class MatrixRainComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'matrix-rain.html',
      code: `<!-- MatrixRain - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">MatrixRain component - Matrix digital rain effect with falling characters.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'matrix-rain.blade.php',
      code: `<!-- MatrixRain - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">MatrixRain component - Matrix digital rain effect with falling characters.</p>
</div>`,
    },
  },
};

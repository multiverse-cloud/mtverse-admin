import { ComponentSourceData } from '../types';

export const gradientMeshSource: ComponentSourceData = {
  component: 'GradientMesh',
  slug: 'gradient-mesh',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Animated gradient mesh background with shifting colors.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'GradientMesh.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function GradientMesh() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">GradientMesh component - Animated gradient mesh background with shifting colors.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'gradient-mesh/page.tsx',
      code: `'use client';

import GradientMesh from '@/components/mtverse/advanced-ui/GradientMesh';

export default function GradientMeshPage() {
  return <GradientMesh />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'GradientMesh.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">GradientMesh component - Animated gradient mesh background with shifting colors.</p>
  </div>
</template>

<script setup lang="ts">
// GradientMesh Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'GradientMesh.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient-mesh',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">GradientMesh component - Animated gradient mesh background with shifting colors.</p>
    </div>
  \`
})
export class GradientMeshComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'gradient-mesh.html',
      code: `<!-- GradientMesh - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">GradientMesh component - Animated gradient mesh background with shifting colors.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'gradient-mesh.blade.php',
      code: `<!-- GradientMesh - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">GradientMesh component - Animated gradient mesh background with shifting colors.</p>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const morphingShapeSource: ComponentSourceData = {
  component: 'MorphingShape',
  slug: 'morphing-shape',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'SVG shape that morphs between two different polygon shapes on click.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MorphingShape.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function MorphingShape() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">MorphingShape component - SVG shape that morphs between two different polygon shapes on click.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'morphing-shape/page.tsx',
      code: `'use client';

import MorphingShape from '@/components/mtverse/advanced-ui/MorphingShape';

export default function MorphingShapePage() {
  return <MorphingShape />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MorphingShape.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">MorphingShape component - SVG shape that morphs between two different polygon shapes on click.</p>
  </div>
</template>

<script setup lang="ts">
// MorphingShape Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'MorphingShape.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-morphing-shape',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">MorphingShape component - SVG shape that morphs between two different polygon shapes on click.</p>
    </div>
  \`
})
export class MorphingShapeComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'morphing-shape.html',
      code: `<!-- MorphingShape - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">MorphingShape component - SVG shape that morphs between two different polygon shapes on click.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'morphing-shape.blade.php',
      code: `<!-- MorphingShape - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">MorphingShape component - SVG shape that morphs between two different polygon shapes on click.</p>
</div>`,
    },
  },
};

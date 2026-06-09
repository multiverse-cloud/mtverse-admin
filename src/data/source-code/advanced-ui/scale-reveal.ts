import { ComponentSourceData } from '../types';

export const scaleRevealSource: ComponentSourceData = {
  component: 'ScaleReveal',
  slug: 'scale-reveal',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Content scales in from center with spring animation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ScaleReveal.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function ScaleReveal() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">ScaleReveal component - Content scales in from center with spring animation.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'scale-reveal/page.tsx',
      code: `'use client';

import ScaleReveal from '@/components/mtverse/advanced-ui/ScaleReveal';

export default function ScaleRevealPage() {
  return <ScaleReveal />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ScaleReveal.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">ScaleReveal component - Content scales in from center with spring animation.</p>
  </div>
</template>

<script setup lang="ts">
// ScaleReveal Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'ScaleReveal.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-scale-reveal',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">ScaleReveal component - Content scales in from center with spring animation.</p>
    </div>
  \`
})
export class ScaleRevealComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'scale-reveal.html',
      code: `<!-- ScaleReveal - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ScaleReveal component - Content scales in from center with spring animation.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'scale-reveal.blade.php',
      code: `<!-- ScaleReveal - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ScaleReveal component - Content scales in from center with spring animation.</p>
</div>`,
    },
  },
};

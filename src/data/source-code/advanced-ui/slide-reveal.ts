import { ComponentSourceData } from '../types';

export const slideRevealSource: ComponentSourceData = {
  component: 'SlideReveal',
  slug: 'slide-reveal',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Content slides in from the left edge.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'SlideReveal.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function SlideReveal() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">SlideReveal component - Content slides in from the left edge.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'slide-reveal/page.tsx',
      code: `'use client';

import SlideReveal from '@/components/mtverse/advanced-ui/SlideReveal';

export default function SlideRevealPage() {
  return <SlideReveal />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'SlideReveal.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">SlideReveal component - Content slides in from the left edge.</p>
  </div>
</template>

<script setup lang="ts">
// SlideReveal Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'SlideReveal.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-reveal',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">SlideReveal component - Content slides in from the left edge.</p>
    </div>
  \`
})
export class SlideRevealComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'slide-reveal.html',
      code: `<!-- SlideReveal - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">SlideReveal component - Content slides in from the left edge.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'slide-reveal.blade.php',
      code: `<!-- SlideReveal - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">SlideReveal component - Content slides in from the left edge.</p>
</div>`,
    },
  },
};

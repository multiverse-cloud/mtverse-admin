import { ComponentSourceData } from '../types';

export const hoverMorphSource: ComponentSourceData = {
  component: 'HoverMorph',
  slug: 'hover-morph',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A shape that morphs from square to circle on hover.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'HoverMorph.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function HoverMorph() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">HoverMorph component - A shape that morphs from square to circle on hover.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'hover-morph/page.tsx',
      code: `'use client';

import HoverMorph from '@/components/mtverse/advanced-ui/HoverMorph';

export default function HoverMorphPage() {
  return <HoverMorph />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'HoverMorph.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">HoverMorph component - A shape that morphs from square to circle on hover.</p>
  </div>
</template>

<script setup lang="ts">
// HoverMorph Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'HoverMorph.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-morph',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">HoverMorph component - A shape that morphs from square to circle on hover.</p>
    </div>
  \`
})
export class HoverMorphComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'hover-morph.html',
      code: `<!-- HoverMorph - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">HoverMorph component - A shape that morphs from square to circle on hover.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'hover-morph.blade.php',
      code: `<!-- HoverMorph - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">HoverMorph component - A shape that morphs from square to circle on hover.</p>
</div>`,
    },
  },
};

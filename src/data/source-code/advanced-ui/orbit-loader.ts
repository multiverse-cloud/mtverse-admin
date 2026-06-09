import { ComponentSourceData } from '../types';

export const orbitLoaderSource: ComponentSourceData = {
  component: 'OrbitLoader',
  slug: 'orbit-loader',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'An orbital spinner loader animation with rotating dots.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'OrbitLoader.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function OrbitLoader() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">OrbitLoader component - An orbital spinner loader animation with rotating dots.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'orbit-loader/page.tsx',
      code: `'use client';

import OrbitLoader from '@/components/mtverse/advanced-ui/OrbitLoader';

export default function OrbitLoaderPage() {
  return <OrbitLoader />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'OrbitLoader.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">OrbitLoader component - An orbital spinner loader animation with rotating dots.</p>
  </div>
</template>

<script setup lang="ts">
// OrbitLoader Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'OrbitLoader.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-orbit-loader',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">OrbitLoader component - An orbital spinner loader animation with rotating dots.</p>
    </div>
  \`
})
export class OrbitLoaderComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'orbit-loader.html',
      code: `<!-- OrbitLoader - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">OrbitLoader component - An orbital spinner loader animation with rotating dots.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'orbit-loader.blade.php',
      code: `<!-- OrbitLoader - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">OrbitLoader component - An orbital spinner loader animation with rotating dots.</p>
</div>`,
    },
  },
};

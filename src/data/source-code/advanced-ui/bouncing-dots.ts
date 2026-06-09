import { ComponentSourceData } from '../types';

export const bouncingDotsSource: ComponentSourceData = {
  component: 'BouncingDots',
  slug: 'bouncing-dots',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Chat typing indicator with bouncing dots.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'BouncingDots.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function BouncingDots() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">BouncingDots component - Chat typing indicator with bouncing dots.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'bouncing-dots/page.tsx',
      code: `'use client';

import BouncingDots from '@/components/mtverse/advanced-ui/BouncingDots';

export default function BouncingDotsPage() {
  return <BouncingDots />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'BouncingDots.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">BouncingDots component - Chat typing indicator with bouncing dots.</p>
  </div>
</template>

<script setup lang="ts">
// BouncingDots Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'BouncingDots.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-bouncing-dots',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">BouncingDots component - Chat typing indicator with bouncing dots.</p>
    </div>
  \`
})
export class BouncingDotsComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'bouncing-dots.html',
      code: `<!-- BouncingDots - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">BouncingDots component - Chat typing indicator with bouncing dots.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'bouncing-dots.blade.php',
      code: `<!-- BouncingDots - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">BouncingDots component - Chat typing indicator with bouncing dots.</p>
</div>`,
    },
  },
};

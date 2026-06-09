import { ComponentSourceData } from '../types';

export const springButtonSource: ComponentSourceData = {
  component: 'SpringButton',
  slug: 'spring-button',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A button with spring bounce animation on click.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'SpringButton.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function SpringButton() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">SpringButton component - A button with spring bounce animation on click.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'spring-button/page.tsx',
      code: `'use client';

import SpringButton from '@/components/mtverse/advanced-ui/SpringButton';

export default function SpringButtonPage() {
  return <SpringButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'SpringButton.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">SpringButton component - A button with spring bounce animation on click.</p>
  </div>
</template>

<script setup lang="ts">
// SpringButton Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'SpringButton.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-spring-button',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">SpringButton component - A button with spring bounce animation on click.</p>
    </div>
  \`
})
export class SpringButtonComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'spring-button.html',
      code: `<!-- SpringButton - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">SpringButton component - A button with spring bounce animation on click.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'spring-button.blade.php',
      code: `<!-- SpringButton - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">SpringButton component - A button with spring bounce animation on click.</p>
</div>`,
    },
  },
};

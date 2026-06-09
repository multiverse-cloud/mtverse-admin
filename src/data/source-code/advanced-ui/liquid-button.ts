import { ComponentSourceData } from '../types';

export const liquidButtonSource: ComponentSourceData = {
  component: 'LiquidButton',
  slug: 'liquid-button',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A button with a liquid/water border-radius effect on hover.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'LiquidButton.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function LiquidButton() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">LiquidButton component - A button with a liquid/water border-radius effect on hover.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'liquid-button/page.tsx',
      code: `'use client';

import LiquidButton from '@/components/mtverse/advanced-ui/LiquidButton';

export default function LiquidButtonPage() {
  return <LiquidButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'LiquidButton.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">LiquidButton component - A button with a liquid/water border-radius effect on hover.</p>
  </div>
</template>

<script setup lang="ts">
// LiquidButton Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'LiquidButton.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-liquid-button',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">LiquidButton component - A button with a liquid/water border-radius effect on hover.</p>
    </div>
  \`
})
export class LiquidButtonComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'liquid-button.html',
      code: `<!-- LiquidButton - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">LiquidButton component - A button with a liquid/water border-radius effect on hover.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'liquid-button.blade.php',
      code: `<!-- LiquidButton - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">LiquidButton component - A button with a liquid/water border-radius effect on hover.</p>
</div>`,
    },
  },
};

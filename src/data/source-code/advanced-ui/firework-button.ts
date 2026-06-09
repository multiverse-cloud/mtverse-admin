import { ComponentSourceData } from '../types';

export const fireworkButtonSource: ComponentSourceData = {
  component: 'FireworkButton',
  slug: 'firework-button',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A button that launches radial firework sparks on click.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'FireworkButton.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function FireworkButton() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">FireworkButton component - A button that launches radial firework sparks on click.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'firework-button/page.tsx',
      code: `'use client';

import FireworkButton from '@/components/mtverse/advanced-ui/FireworkButton';

export default function FireworkButtonPage() {
  return <FireworkButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'FireworkButton.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">FireworkButton component - A button that launches radial firework sparks on click.</p>
  </div>
</template>

<script setup lang="ts">
// FireworkButton Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'FireworkButton.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-firework-button',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">FireworkButton component - A button that launches radial firework sparks on click.</p>
    </div>
  \`
})
export class FireworkButtonComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'firework-button.html',
      code: `<!-- FireworkButton - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">FireworkButton component - A button that launches radial firework sparks on click.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'firework-button.blade.php',
      code: `<!-- FireworkButton - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">FireworkButton component - A button that launches radial firework sparks on click.</p>
</div>`,
    },
  },
};

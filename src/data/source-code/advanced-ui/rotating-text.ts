import { ComponentSourceData } from '../types';

export const rotatingTextSource: ComponentSourceData = {
  component: 'RotatingText',
  slug: 'rotating-text',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Text that rotates through multiple word options.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'RotatingText.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function RotatingText() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">RotatingText component - Text that rotates through multiple word options.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'rotating-text/page.tsx',
      code: `'use client';

import RotatingText from '@/components/mtverse/advanced-ui/RotatingText';

export default function RotatingTextPage() {
  return <RotatingText />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'RotatingText.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">RotatingText component - Text that rotates through multiple word options.</p>
  </div>
</template>

<script setup lang="ts">
// RotatingText Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'RotatingText.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-rotating-text',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">RotatingText component - Text that rotates through multiple word options.</p>
    </div>
  \`
})
export class RotatingTextComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'rotating-text.html',
      code: `<!-- RotatingText - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">RotatingText component - Text that rotates through multiple word options.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'rotating-text.blade.php',
      code: `<!-- RotatingText - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">RotatingText component - Text that rotates through multiple word options.</p>
</div>`,
    },
  },
};

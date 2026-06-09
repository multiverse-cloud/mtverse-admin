import { ComponentSourceData } from '../types';

export const waveTextSource: ComponentSourceData = {
  component: 'WaveText',
  slug: 'wave-text',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Text with wave animation on individual letters.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'WaveText.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function WaveText() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">WaveText component - Text with wave animation on individual letters.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'wave-text/page.tsx',
      code: `'use client';

import WaveText from '@/components/mtverse/advanced-ui/WaveText';

export default function WaveTextPage() {
  return <WaveText />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'WaveText.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">WaveText component - Text with wave animation on individual letters.</p>
  </div>
</template>

<script setup lang="ts">
// WaveText Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'WaveText.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-wave-text',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">WaveText component - Text with wave animation on individual letters.</p>
    </div>
  \`
})
export class WaveTextComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'wave-text.html',
      code: `<!-- WaveText - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">WaveText component - Text with wave animation on individual letters.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'wave-text.blade.php',
      code: `<!-- WaveText - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">WaveText component - Text with wave animation on individual letters.</p>
</div>`,
    },
  },
};

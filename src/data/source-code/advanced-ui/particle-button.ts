import { ComponentSourceData } from '../types';

export const particleButtonSource: ComponentSourceData = {
  component: 'ParticleButton',
  slug: 'particle-button',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A button that emits particles on click.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ParticleButton.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function ParticleButton() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">ParticleButton component - A button that emits particles on click.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'particle-button/page.tsx',
      code: `'use client';

import ParticleButton from '@/components/mtverse/advanced-ui/ParticleButton';

export default function ParticleButtonPage() {
  return <ParticleButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ParticleButton.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">ParticleButton component - A button that emits particles on click.</p>
  </div>
</template>

<script setup lang="ts">
// ParticleButton Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'ParticleButton.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-particle-button',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">ParticleButton component - A button that emits particles on click.</p>
    </div>
  \`
})
export class ParticleButtonComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'particle-button.html',
      code: `<!-- ParticleButton - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ParticleButton component - A button that emits particles on click.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'particle-button.blade.php',
      code: `<!-- ParticleButton - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ParticleButton component - A button that emits particles on click.</p>
</div>`,
    },
  },
};

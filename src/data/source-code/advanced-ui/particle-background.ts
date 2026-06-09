import { ComponentSourceData } from '../types';

export const particleBackgroundSource: ComponentSourceData = {
  component: 'ParticleBackground',
  slug: 'particle-background',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Floating particles background effect with gentle animations.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ParticleBackground.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function ParticleBackground() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">ParticleBackground component - Floating particles background effect with gentle animations.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'particle-background/page.tsx',
      code: `'use client';

import ParticleBackground from '@/components/mtverse/advanced-ui/ParticleBackground';

export default function ParticleBackgroundPage() {
  return <ParticleBackground />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ParticleBackground.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">ParticleBackground component - Floating particles background effect with gentle animations.</p>
  </div>
</template>

<script setup lang="ts">
// ParticleBackground Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'ParticleBackground.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-particle-background',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">ParticleBackground component - Floating particles background effect with gentle animations.</p>
    </div>
  \`
})
export class ParticleBackgroundComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'particle-background.html',
      code: `<!-- ParticleBackground - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ParticleBackground component - Floating particles background effect with gentle animations.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'particle-background.blade.php',
      code: `<!-- ParticleBackground - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ParticleBackground component - Floating particles background effect with gentle animations.</p>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const neonBorderSource: ComponentSourceData = {
  component: 'NeonBorder',
  slug: 'neon-border',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'An animated neon border that cycles through colors.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'NeonBorder.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function NeonBorder() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">NeonBorder component - An animated neon border that cycles through colors.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'neon-border/page.tsx',
      code: `'use client';

import NeonBorder from '@/components/mtverse/advanced-ui/NeonBorder';

export default function NeonBorderPage() {
  return <NeonBorder />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'NeonBorder.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">NeonBorder component - An animated neon border that cycles through colors.</p>
  </div>
</template>

<script setup lang="ts">
// NeonBorder Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'NeonBorder.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-neon-border',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">NeonBorder component - An animated neon border that cycles through colors.</p>
    </div>
  \`
})
export class NeonBorderComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'neon-border.html',
      code: `<!-- NeonBorder - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">NeonBorder component - An animated neon border that cycles through colors.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'neon-border.blade.php',
      code: `<!-- NeonBorder - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">NeonBorder component - An animated neon border that cycles through colors.</p>
</div>`,
    },
  },
};

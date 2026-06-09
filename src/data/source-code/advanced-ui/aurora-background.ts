import { ComponentSourceData } from '../types';

export const auroraBackgroundSource: ComponentSourceData = {
  component: 'AuroraBackground',
  slug: 'aurora-background',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Northern lights aurora effect with moving gradient blobs.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'AuroraBackground.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">AuroraBackground component - Northern lights aurora effect with moving gradient blobs.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'aurora-background/page.tsx',
      code: `'use client';

import AuroraBackground from '@/components/mtverse/advanced-ui/AuroraBackground';

export default function AuroraBackgroundPage() {
  return <AuroraBackground />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'AuroraBackground.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">AuroraBackground component - Northern lights aurora effect with moving gradient blobs.</p>
  </div>
</template>

<script setup lang="ts">
// AuroraBackground Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'AuroraBackground.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-aurora-background',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">AuroraBackground component - Northern lights aurora effect with moving gradient blobs.</p>
    </div>
  \`
})
export class AuroraBackgroundComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'aurora-background.html',
      code: `<!-- AuroraBackground - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">AuroraBackground component - Northern lights aurora effect with moving gradient blobs.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'aurora-background.blade.php',
      code: `<!-- AuroraBackground - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">AuroraBackground component - Northern lights aurora effect with moving gradient blobs.</p>
</div>`,
    },
  },
};

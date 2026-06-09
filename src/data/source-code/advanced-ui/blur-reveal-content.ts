import { ComponentSourceData } from '../types';

export const blurRevealContentSource: ComponentSourceData = {
  component: 'BlurRevealContent',
  slug: 'blur-reveal-content',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Content reveals with a blur-to-clear transition.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'BlurRevealContent.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function BlurRevealContent() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">BlurRevealContent component - Content reveals with a blur-to-clear transition.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'blur-reveal-content/page.tsx',
      code: `'use client';

import BlurRevealContent from '@/components/mtverse/advanced-ui/BlurRevealContent';

export default function BlurRevealContentPage() {
  return <BlurRevealContent />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'BlurRevealContent.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">BlurRevealContent component - Content reveals with a blur-to-clear transition.</p>
  </div>
</template>

<script setup lang="ts">
// BlurRevealContent Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'BlurRevealContent.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-blur-reveal-content',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">BlurRevealContent component - Content reveals with a blur-to-clear transition.</p>
    </div>
  \`
})
export class BlurRevealContentComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'blur-reveal-content.html',
      code: `<!-- BlurRevealContent - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">BlurRevealContent component - Content reveals with a blur-to-clear transition.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'blur-reveal-content.blade.php',
      code: `<!-- BlurRevealContent - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">BlurRevealContent component - Content reveals with a blur-to-clear transition.</p>
</div>`,
    },
  },
};

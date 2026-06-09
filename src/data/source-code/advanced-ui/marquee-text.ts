import { ComponentSourceData } from '../types';

export const marqueeTextSource: ComponentSourceData = {
  component: 'MarqueeText',
  slug: 'marquee-text',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Infinite scrolling text marquee animation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MarqueeText.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function MarqueeText() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">MarqueeText component - Infinite scrolling text marquee animation.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'marquee-text/page.tsx',
      code: `'use client';

import MarqueeText from '@/components/mtverse/advanced-ui/MarqueeText';

export default function MarqueeTextPage() {
  return <MarqueeText />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MarqueeText.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">MarqueeText component - Infinite scrolling text marquee animation.</p>
  </div>
</template>

<script setup lang="ts">
// MarqueeText Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'MarqueeText.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee-text',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">MarqueeText component - Infinite scrolling text marquee animation.</p>
    </div>
  \`
})
export class MarqueeTextComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'marquee-text.html',
      code: `<!-- MarqueeText - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">MarqueeText component - Infinite scrolling text marquee animation.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'marquee-text.blade.php',
      code: `<!-- MarqueeText - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">MarqueeText component - Infinite scrolling text marquee animation.</p>
</div>`,
    },
  },
};

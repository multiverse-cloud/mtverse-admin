import { ComponentSourceData } from '../types';

export const elasticSliderSource: ComponentSourceData = {
  component: 'ElasticSlider',
  slug: 'elastic-slider',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A slider with elastic spring-physics value display.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ElasticSlider.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function ElasticSlider() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">ElasticSlider component - A slider with elastic spring-physics value display.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'elastic-slider/page.tsx',
      code: `'use client';

import ElasticSlider from '@/components/mtverse/advanced-ui/ElasticSlider';

export default function ElasticSliderPage() {
  return <ElasticSlider />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ElasticSlider.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">ElasticSlider component - A slider with elastic spring-physics value display.</p>
  </div>
</template>

<script setup lang="ts">
// ElasticSlider Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'ElasticSlider.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-elastic-slider',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">ElasticSlider component - A slider with elastic spring-physics value display.</p>
    </div>
  \`
})
export class ElasticSliderComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'elastic-slider.html',
      code: `<!-- ElasticSlider - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ElasticSlider component - A slider with elastic spring-physics value display.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'elastic-slider.blade.php',
      code: `<!-- ElasticSlider - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ElasticSlider component - A slider with elastic spring-physics value display.</p>
</div>`,
    },
  },
};

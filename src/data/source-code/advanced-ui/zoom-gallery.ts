import { ComponentSourceData } from '../types';

export const zoomGallerySource: ComponentSourceData = {
  component: 'ZoomGallery',
  slug: 'zoom-gallery',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Image gallery with zoom and parallax on selection.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ZoomGallery.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function ZoomGallery() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">ZoomGallery component - Image gallery with zoom and parallax on selection.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'zoom-gallery/page.tsx',
      code: `'use client';

import ZoomGallery from '@/components/mtverse/advanced-ui/ZoomGallery';

export default function ZoomGalleryPage() {
  return <ZoomGallery />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ZoomGallery.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">ZoomGallery component - Image gallery with zoom and parallax on selection.</p>
  </div>
</template>

<script setup lang="ts">
// ZoomGallery Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'ZoomGallery.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom-gallery',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">ZoomGallery component - Image gallery with zoom and parallax on selection.</p>
    </div>
  \`
})
export class ZoomGalleryComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'zoom-gallery.html',
      code: `<!-- ZoomGallery - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ZoomGallery component - Image gallery with zoom and parallax on selection.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'zoom-gallery.blade.php',
      code: `<!-- ZoomGallery - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ZoomGallery component - Image gallery with zoom and parallax on selection.</p>
</div>`,
    },
  },
};

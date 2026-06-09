import { ComponentSourceData } from '../types';

export const tiltCardSource: ComponentSourceData = {
  component: 'TiltCard',
  slug: 'tilt-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A card that tilts following the mouse cursor with a glare effect.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TiltCard.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function TiltCard() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">TiltCard component - A card that tilts following the mouse cursor with a glare effect.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'tilt-card/page.tsx',
      code: `'use client';

import TiltCard from '@/components/mtverse/advanced-ui/TiltCard';

export default function TiltCardPage() {
  return <TiltCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'TiltCard.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">TiltCard component - A card that tilts following the mouse cursor with a glare effect.</p>
  </div>
</template>

<script setup lang="ts">
// TiltCard Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'TiltCard.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-tilt-card',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">TiltCard component - A card that tilts following the mouse cursor with a glare effect.</p>
    </div>
  \`
})
export class TiltCardComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'tilt-card.html',
      code: `<!-- TiltCard - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">TiltCard component - A card that tilts following the mouse cursor with a glare effect.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'tilt-card.blade.php',
      code: `<!-- TiltCard - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">TiltCard component - A card that tilts following the mouse cursor with a glare effect.</p>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const breathingCardSource: ComponentSourceData = {
  component: 'BreathingCard',
  slug: 'breathing-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A card with subtle breathing/pulsing animation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'BreathingCard.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function BreathingCard() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">BreathingCard component - A card with subtle breathing/pulsing animation.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'breathing-card/page.tsx',
      code: `'use client';

import BreathingCard from '@/components/mtverse/advanced-ui/BreathingCard';

export default function BreathingCardPage() {
  return <BreathingCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'BreathingCard.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">BreathingCard component - A card with subtle breathing/pulsing animation.</p>
  </div>
</template>

<script setup lang="ts">
// BreathingCard Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'BreathingCard.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-breathing-card',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">BreathingCard component - A card with subtle breathing/pulsing animation.</p>
    </div>
  \`
})
export class BreathingCardComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'breathing-card.html',
      code: `<!-- BreathingCard - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">BreathingCard component - A card with subtle breathing/pulsing animation.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'breathing-card.blade.php',
      code: `<!-- BreathingCard - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">BreathingCard component - A card with subtle breathing/pulsing animation.</p>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const swipeDeckSource: ComponentSourceData = {
  component: 'SwipeDeck',
  slug: 'swipe-deck',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Tinder-style swipeable card deck with like/skip.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'SwipeDeck.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function SwipeDeck() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">SwipeDeck component - Tinder-style swipeable card deck with like/skip.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'swipe-deck/page.tsx',
      code: `'use client';

import SwipeDeck from '@/components/mtverse/advanced-ui/SwipeDeck';

export default function SwipeDeckPage() {
  return <SwipeDeck />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'SwipeDeck.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">SwipeDeck component - Tinder-style swipeable card deck with like/skip.</p>
  </div>
</template>

<script setup lang="ts">
// SwipeDeck Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'SwipeDeck.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-swipe-deck',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">SwipeDeck component - Tinder-style swipeable card deck with like/skip.</p>
    </div>
  \`
})
export class SwipeDeckComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'swipe-deck.html',
      code: `<!-- SwipeDeck - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">SwipeDeck component - Tinder-style swipeable card deck with like/skip.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'swipe-deck.blade.php',
      code: `<!-- SwipeDeck - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">SwipeDeck component - Tinder-style swipeable card deck with like/skip.</p>
</div>`,
    },
  },
};

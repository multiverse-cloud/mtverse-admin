import { ComponentSourceData } from '../types';

export const staggerCardsSource: ComponentSourceData = {
  component: 'StaggerCards',
  slug: 'stagger-cards',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Cards animate in with staggered delay.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'StaggerCards.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function StaggerCards() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">StaggerCards component - Cards animate in with staggered delay.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'stagger-cards/page.tsx',
      code: `'use client';

import StaggerCards from '@/components/mtverse/advanced-ui/StaggerCards';

export default function StaggerCardsPage() {
  return <StaggerCards />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'StaggerCards.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">StaggerCards component - Cards animate in with staggered delay.</p>
  </div>
</template>

<script setup lang="ts">
// StaggerCards Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'StaggerCards.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-stagger-cards',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">StaggerCards component - Cards animate in with staggered delay.</p>
    </div>
  \`
})
export class StaggerCardsComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'stagger-cards.html',
      code: `<!-- StaggerCards - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">StaggerCards component - Cards animate in with staggered delay.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'stagger-cards.blade.php',
      code: `<!-- StaggerCards - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">StaggerCards component - Cards animate in with staggered delay.</p>
</div>`,
    },
  },
};

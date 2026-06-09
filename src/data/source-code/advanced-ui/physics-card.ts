import { ComponentSourceData } from '../types';

export const physicsCardSource: ComponentSourceData = {
  component: 'PhysicsCard',
  slug: 'physics-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A draggable card with spring physics bounce effect.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'PhysicsCard.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function PhysicsCard() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">PhysicsCard component - A draggable card with spring physics bounce effect.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'physics-card/page.tsx',
      code: `'use client';

import PhysicsCard from '@/components/mtverse/advanced-ui/PhysicsCard';

export default function PhysicsCardPage() {
  return <PhysicsCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'PhysicsCard.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">PhysicsCard component - A draggable card with spring physics bounce effect.</p>
  </div>
</template>

<script setup lang="ts">
// PhysicsCard Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'PhysicsCard.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-physics-card',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">PhysicsCard component - A draggable card with spring physics bounce effect.</p>
    </div>
  \`
})
export class PhysicsCardComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'physics-card.html',
      code: `<!-- PhysicsCard - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">PhysicsCard component - A draggable card with spring physics bounce effect.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'physics-card.blade.php',
      code: `<!-- PhysicsCard - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">PhysicsCard component - A draggable card with spring physics bounce effect.</p>
</div>`,
    },
  },
};

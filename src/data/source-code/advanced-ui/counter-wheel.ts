import { ComponentSourceData } from '../types';

export const counterWheelSource: ComponentSourceData = {
  component: 'CounterWheel',
  slug: 'counter-wheel',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A mechanical counter wheel animation with spring physics.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'CounterWheel.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function CounterWheel() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">CounterWheel component - A mechanical counter wheel animation with spring physics.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'counter-wheel/page.tsx',
      code: `'use client';

import CounterWheel from '@/components/mtverse/advanced-ui/CounterWheel';

export default function CounterWheelPage() {
  return <CounterWheel />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'CounterWheel.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">CounterWheel component - A mechanical counter wheel animation with spring physics.</p>
  </div>
</template>

<script setup lang="ts">
// CounterWheel Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'CounterWheel.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-wheel',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">CounterWheel component - A mechanical counter wheel animation with spring physics.</p>
    </div>
  \`
})
export class CounterWheelComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'counter-wheel.html',
      code: `<!-- CounterWheel - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">CounterWheel component - A mechanical counter wheel animation with spring physics.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'counter-wheel.blade.php',
      code: `<!-- CounterWheel - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">CounterWheel component - A mechanical counter wheel animation with spring physics.</p>
</div>`,
    },
  },
};

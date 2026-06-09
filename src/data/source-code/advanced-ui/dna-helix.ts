import { ComponentSourceData } from '../types';

export const dnaHelixSource: ComponentSourceData = {
  component: 'DNAHelix',
  slug: 'dna-helix',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A double helix DNA-style animation with pulsing bars.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'DNAHelix.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function DNAHelix() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">DNAHelix component - A double helix DNA-style animation with pulsing bars.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'dna-helix/page.tsx',
      code: `'use client';

import DNAHelix from '@/components/mtverse/advanced-ui/DNAHelix';

export default function DNAHelixPage() {
  return <DNAHelix />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'DNAHelix.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">DNAHelix component - A double helix DNA-style animation with pulsing bars.</p>
  </div>
</template>

<script setup lang="ts">
// DNAHelix Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'DnaHelix.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-dna-helix',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">DNAHelix component - A double helix DNA-style animation with pulsing bars.</p>
    </div>
  \`
})
export class DnaHelixComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'dna-helix.html',
      code: `<!-- DNAHelix - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">DNAHelix component - A double helix DNA-style animation with pulsing bars.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'dna-helix.blade.php',
      code: `<!-- DNAHelix - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">DNAHelix component - A double helix DNA-style animation with pulsing bars.</p>
</div>`,
    },
  },
};

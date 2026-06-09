import { ComponentSourceData } from '../types';

export const typingEffectSource: ComponentSourceData = {
  component: 'TypingEffect',
  slug: 'typing-effect',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Multi-word typing with delete cycle animation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TypingEffect.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function TypingEffect() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">TypingEffect component - Multi-word typing with delete cycle animation.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'typing-effect/page.tsx',
      code: `'use client';

import TypingEffect from '@/components/mtverse/advanced-ui/TypingEffect';

export default function TypingEffectPage() {
  return <TypingEffect />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'TypingEffect.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">TypingEffect component - Multi-word typing with delete cycle animation.</p>
  </div>
</template>

<script setup lang="ts">
// TypingEffect Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'TypingEffect.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">TypingEffect component - Multi-word typing with delete cycle animation.</p>
    </div>
  \`
})
export class TypingEffectComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'typing-effect.html',
      code: `<!-- TypingEffect - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">TypingEffect component - Multi-word typing with delete cycle animation.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'typing-effect.blade.php',
      code: `<!-- TypingEffect - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">TypingEffect component - Multi-word typing with delete cycle animation.</p>
</div>`,
    },
  },
};

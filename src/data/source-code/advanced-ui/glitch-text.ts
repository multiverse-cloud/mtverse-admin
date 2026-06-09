import { ComponentSourceData } from '../types';

export const glitchTextSource: ComponentSourceData = {
  component: 'GlitchText',
  slug: 'glitch-text',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A glitch/cyberpunk text effect with color shifting.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'GlitchText.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function GlitchText() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">GlitchText component - A glitch/cyberpunk text effect with color shifting.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'glitch-text/page.tsx',
      code: `'use client';

import GlitchText from '@/components/mtverse/advanced-ui/GlitchText';

export default function GlitchTextPage() {
  return <GlitchText />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'GlitchText.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">GlitchText component - A glitch/cyberpunk text effect with color shifting.</p>
  </div>
</template>

<script setup lang="ts">
// GlitchText Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'GlitchText.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-glitch-text',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">GlitchText component - A glitch/cyberpunk text effect with color shifting.</p>
    </div>
  \`
})
export class GlitchTextComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'glitch-text.html',
      code: `<!-- GlitchText - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">GlitchText component - A glitch/cyberpunk text effect with color shifting.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'glitch-text.blade.php',
      code: `<!-- GlitchText - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">GlitchText component - A glitch/cyberpunk text effect with color shifting.</p>
</div>`,
    },
  },
};

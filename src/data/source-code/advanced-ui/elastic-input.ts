import { ComponentSourceData } from '../types';

export const elasticInputSource: ComponentSourceData = {
  component: 'ElasticInput',
  slug: 'elastic-input',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'An input field with elastic expand animation on focus.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ElasticInput.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function ElasticInput() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">ElasticInput component - An input field with elastic expand animation on focus.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'elastic-input/page.tsx',
      code: `'use client';

import ElasticInput from '@/components/mtverse/advanced-ui/ElasticInput';

export default function ElasticInputPage() {
  return <ElasticInput />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ElasticInput.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">ElasticInput component - An input field with elastic expand animation on focus.</p>
  </div>
</template>

<script setup lang="ts">
// ElasticInput Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'ElasticInput.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-elastic-input',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">ElasticInput component - An input field with elastic expand animation on focus.</p>
    </div>
  \`
})
export class ElasticInputComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'elastic-input.html',
      code: `<!-- ElasticInput - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ElasticInput component - An input field with elastic expand animation on focus.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'elastic-input.blade.php',
      code: `<!-- ElasticInput - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">ElasticInput component - An input field with elastic expand animation on focus.</p>
</div>`,
    },
  },
};

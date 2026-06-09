import { ComponentSourceData } from '../types';

export const gravityListSource: ComponentSourceData = {
  component: 'GravityList',
  slug: 'gravity-list',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Items that fall with gravity-style spring animation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'GravityList.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

export default function GravityList() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-600">GravityList component - Items that fall with gravity-style spring animation.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'gravity-list/page.tsx',
      code: `'use client';

import GravityList from '@/components/mtverse/advanced-ui/GravityList';

export default function GravityListPage() {
  return <GravityList />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'GravityList.vue',
      code: `<template>
  <div class="flex items-center justify-center p-8">
    <p class="text-gray-600">GravityList component - Items that fall with gravity-style spring animation.</p>
  </div>
</template>

<script setup lang="ts">
// GravityList Vue component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'GravityList.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-gravity-list',
  template: \`
    <div class="flex items-center justify-center p-8">
      <p class="text-gray-600">GravityList component - Items that fall with gravity-style spring animation.</p>
    </div>
  \`
})
export class GravityListComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'gravity-list.html',
      code: `<!-- GravityList - HTML/Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">GravityList component - Items that fall with gravity-style spring animation.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'gravity-list.blade.php',
      code: `<!-- GravityList - Laravel Blade + Alpine.js -->
<div x-data class="flex items-center justify-center p-8">
  <p class="text-gray-600">GravityList component - Items that fall with gravity-style spring animation.</p>
</div>`,
    },
  },
};

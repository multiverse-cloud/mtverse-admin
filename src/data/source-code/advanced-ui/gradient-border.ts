import { ComponentSourceData } from '../types';

export const gradientBorderSource: ComponentSourceData = {
  component: 'Gradient Border',
  slug: 'gradient-border',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A card with an animated gradient border that rotates around the element.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'GradientBorder.tsx',
      code: `import React from 'react';

interface GradientBorderProps {
  children?: React.ReactNode;
}

export default function GradientBorder({ children }: GradientBorderProps) {
  return (
    <div className="relative rounded-xl p-[2px] overflow-hidden">
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #f43f5e, #6366f1)',
          animation: 'gradient-spin 3s linear infinite',
        }}
      />
      <div className="relative rounded-[10px] bg-white p-6 dark:bg-gray-dark">
        {children ?? (
          <>
            <h4 className="text-lg font-bold text-gray-800 dark:text-white">Gradient Border</h4>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">An animated gradient border wrapping this card.</p>
          </>
        )}
      </div>
      <style>{\`
        @keyframes gradient-spin { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
      \`}</style>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'gradient-border/page.tsx',
      code: `'use client';

import GradientBorder from '@/components/mtverse/advanced-ui/GradientBorder';

export default function GradientBorderPage() {
  return <GradientBorder />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'GradientBorder.vue',
      code: `<template>
  <div class="relative rounded-xl p-[2px] overflow-hidden">
    <div class="absolute inset-0 rounded-xl gradient-spin-bg"
      :style="{ background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #f43f5e, #6366f1)' }" />
    <div class="relative rounded-[10px] bg-white p-6 dark:bg-gray-dark">
      <slot>
        <h4 class="text-lg font-bold text-gray-800 dark:text-white">Gradient Border</h4>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">An animated gradient border wrapping this card.</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.gradient-spin-bg { animation: gradient-spin 3s linear infinite; }
@keyframes gradient-spin { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'gradient-border.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient-border',
  template: \`
    <div class="relative rounded-xl p-[2px] overflow-hidden">
      <div class="absolute inset-0 rounded-xl gradient-spin-bg"
        style="background: conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #f43f5e, #6366f1)"></div>
      <div class="relative rounded-[10px] bg-white p-6 dark:bg-gray-dark">
        <h4 class="text-lg font-bold text-gray-800 dark:text-white">Gradient Border</h4>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">An animated gradient border wrapping this card.</p>
      </div>
    </div>
  \`,
  styles: [\`
    .gradient-spin-bg { animation: gradient-spin 3s linear infinite; }
    @keyframes gradient-spin { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
  \`]
})
export class GradientBorderComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'gradient-border.html',
      code: `<!-- HTML + CSS -->
<div class="relative rounded-xl p-[2px] overflow-hidden">
  <div class="absolute inset-0 rounded-xl gradient-spin-bg"
    style="background: conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #f43f5e, #6366f1)"></div>
  <div class="relative rounded-[10px] bg-white p-6 dark:bg-gray-dark">
    <h4 class="text-lg font-bold text-gray-800 dark:text-white">Gradient Border</h4>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">An animated gradient border wrapping this card.</p>
  </div>
</div>
<style>
  .gradient-spin-bg { animation: gradient-spin 3s linear infinite; }
  @keyframes gradient-spin { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
</style>`,
    },
    laravel: {
      language: 'blade',
      filename: 'gradient-border.blade.php',
      code: `<!-- Laravel Blade + CSS -->
<div class="relative rounded-xl p-[2px] overflow-hidden">
  <div class="absolute inset-0 rounded-xl gradient-spin-bg"
    style="background: conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #f43f5e, #6366f1)"></div>
  <div class="relative rounded-[10px] bg-white p-6 dark:bg-gray-dark">
    <h4 class="text-lg font-bold text-gray-800 dark:text-white">Gradient Border</h4>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">An animated gradient border wrapping this card.</p>
  </div>
</div>
<style>
  .gradient-spin-bg { animation: gradient-spin 3s linear infinite; }
  @keyframes gradient-spin { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
</style>`,
    },
  },
};

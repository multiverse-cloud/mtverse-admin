import { ComponentSourceData } from '../types';

export const typographySource: ComponentSourceData = {
  component: 'Typography',
  slug: 'typography',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Typography components showcasing headings, paragraphs, text styles, and formatting options.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TypographySection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

function TypographySection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Headings</p>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Heading 2</h2>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Heading 3</h3>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Heading 4</h4>
          <h5 className="text-lg font-bold text-gray-900 dark:text-white">Heading 5</h5>
          <h6 className="text-base font-bold text-gray-900 dark:text-white">Heading 6</h6>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Body Text</p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          This is a paragraph of body text. It demonstrates the default font size, line height, and color used throughout the application for readable content.
        </p>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          This is smaller secondary text, typically used for descriptions, captions, or supporting information.
        </p>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Text Styles</p>
        <div className="space-y-2">
          <p className="text-base text-gray-900 dark:text-white"><strong>Bold text</strong> for emphasis</p>
          <p className="text-base text-gray-900 dark:text-white"><em>Italic text</em> for subtle emphasis</p>
          <p className="text-base text-gray-700 dark:text-gray-300"><span className="underline">Underlined text</span> for links or highlights</p>
          <p className="text-base text-gray-700 dark:text-gray-300"><span className="line-through">Strikethrough text</span> for deletions</p>
          <p className="text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded inline-block">Code inline text</p>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
        <div className="space-y-1">
          <p className="text-sm text-brand-500">Brand primary color text</p>
          <p className="text-sm text-success-500">Success color text</p>
          <p className="text-sm text-warning-500">Warning color text</p>
          <p className="text-sm text-error-500">Error color text</p>
          <p className="text-sm text-gray-400">Muted text color</p>
        </div>
      </div>
    </div>
  );
}

export default TypographySection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'typography/page.tsx',
      code: `'use client';

import TypographySection from '@/components/mtverse/ui-elements/TypographySection';

export default function TypographyPage() {
  return <TypographySection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'TypographySection.vue',
      code: `<template>
  <div class="space-y-6">
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Headings</p>
      <div class="space-y-2">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Heading 2</h2>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Heading 3</h3>
        <h4 class="text-xl font-bold text-gray-900 dark:text-white">Heading 4</h4>
        <h5 class="text-lg font-bold text-gray-900 dark:text-white">Heading 5</h5>
        <h6 class="text-base font-bold text-gray-900 dark:text-white">Heading 6</h6>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Body Text</p>
      <p class="text-base text-gray-700 dark:text-gray-300">This is a paragraph of body text demonstrating the default font size, line height, and color.</p>
      <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">This is smaller secondary text for descriptions and captions.</p>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Text Styles</p>
      <div class="space-y-2">
        <p class="text-base text-gray-900 dark:text-white"><strong>Bold text</strong> for emphasis</p>
        <p class="text-base text-gray-900 dark:text-white"><em>Italic text</em> for subtle emphasis</p>
        <p class="text-base text-gray-700 dark:text-gray-300"><span class="underline">Underlined text</span> for highlights</p>
        <p class="text-base text-gray-700 dark:text-gray-300"><span class="line-through">Strikethrough</span> for deletions</p>
        <p class="text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded inline-block">Code inline text</p>
      </div>
    </div>
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
      <div class="space-y-1">
        <p class="text-sm text-brand-500">Brand primary color text</p>
        <p class="text-sm text-success-500">Success color text</p>
        <p class="text-sm text-warning-500">Warning color text</p>
        <p class="text-sm text-error-500">Error color text</p>
        <p class="text-sm text-gray-400">Muted text color</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'typography.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-typography',
  template: \`
    <div class="space-y-6">
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Headings</p>
        <div class="space-y-2">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Heading 2</h2>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Heading 3</h3>
          <h4 class="text-xl font-bold text-gray-900 dark:text-white">Heading 4</h4>
          <h5 class="text-lg font-bold text-gray-900 dark:text-white">Heading 5</h5>
          <h6 class="text-base font-bold text-gray-900 dark:text-white">Heading 6</h6>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Body Text</p>
        <p class="text-base text-gray-700 dark:text-gray-300">This is a paragraph of body text demonstrating the default styles.</p>
        <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">Smaller secondary text for descriptions and captions.</p>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Text Styles</p>
        <div class="space-y-2">
          <p class="text-base text-gray-900 dark:text-white"><strong>Bold text</strong> for emphasis</p>
          <p class="text-base text-gray-900 dark:text-white"><em>Italic text</em> for subtle emphasis</p>
          <p class="text-base text-gray-700 dark:text-gray-300"><span class="underline">Underlined text</span></p>
          <p class="text-base text-gray-700 dark:text-gray-300"><span class="line-through">Strikethrough</span></p>
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
        <div class="space-y-1">
          <p class="text-sm text-brand-500">Brand primary color text</p>
          <p class="text-sm text-success-500">Success color text</p>
          <p class="text-sm text-warning-500">Warning color text</p>
          <p class="text-sm text-error-500">Error color text</p>
          <p class="text-sm text-gray-400">Muted text color</p>
        </div>
      </div>
    </div>
  \`
})
export class TypographyComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'typography.html',
      code: `<!-- HTML + Tailwind -->
<div class="space-y-6">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Headings</p>
    <div class="space-y-2">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Heading 2</h2>
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Heading 3</h3>
      <h4 class="text-xl font-bold text-gray-900 dark:text-white">Heading 4</h4>
      <h5 class="text-lg font-bold text-gray-900 dark:text-white">Heading 5</h5>
      <h6 class="text-base font-bold text-gray-900 dark:text-white">Heading 6</h6>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Body Text</p>
    <p class="text-base text-gray-700 dark:text-gray-300">This is a paragraph of body text demonstrating the default font size, line height, and color.</p>
    <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">Smaller secondary text for descriptions and captions.</p>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Text Styles</p>
    <div class="space-y-2">
      <p class="text-base text-gray-900 dark:text-white"><strong>Bold text</strong> for emphasis</p>
      <p class="text-base text-gray-900 dark:text-white"><em>Italic text</em> for subtle emphasis</p>
      <p class="text-base text-gray-700 dark:text-gray-300"><span class="underline">Underlined text</span></p>
      <p class="text-base text-gray-700 dark:text-gray-300"><span class="line-through">Strikethrough</span></p>
      <p class="text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded inline-block">Code inline text</p>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
    <div class="space-y-1">
      <p class="text-sm text-brand-500">Brand primary color text</p>
      <p class="text-sm text-success-500">Success color text</p>
      <p class="text-sm text-warning-500">Warning color text</p>
      <p class="text-sm text-error-500">Error color text</p>
      <p class="text-sm text-gray-400">Muted text color</p>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'typography.blade.php',
      code: `<!-- Laravel Blade + Tailwind -->
<div class="space-y-6">
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Headings</p>
    <div class="space-y-2">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Heading 2</h2>
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Heading 3</h3>
      <h4 class="text-xl font-bold text-gray-900 dark:text-white">Heading 4</h4>
      <h5 class="text-lg font-bold text-gray-900 dark:text-white">Heading 5</h5>
      <h6 class="text-base font-bold text-gray-900 dark:text-white">Heading 6</h6>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Body Text</p>
    <p class="text-base text-gray-700 dark:text-gray-300">This is a paragraph of body text demonstrating the default styles.</p>
    <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">Smaller secondary text for descriptions and captions.</p>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Text Styles</p>
    <div class="space-y-2">
      <p class="text-base text-gray-900 dark:text-white"><strong>Bold text</strong> for emphasis</p>
      <p class="text-base text-gray-900 dark:text-white"><em>Italic text</em> for subtle emphasis</p>
      <p class="text-base text-gray-700 dark:text-gray-300"><span class="underline">Underlined text</span></p>
      <p class="text-base text-gray-700 dark:text-gray-300"><span class="line-through">Strikethrough</span></p>
      <p class="text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded inline-block">Code inline text</p>
    </div>
  </div>
  <div>
    <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Colors</p>
    <div class="space-y-1">
      <p class="text-sm text-brand-500">Brand primary color text</p>
      <p class="text-sm text-success-500">Success color text</p>
      <p class="text-sm text-warning-500">Warning color text</p>
      <p class="text-sm text-error-500">Error color text</p>
      <p class="text-sm text-gray-400">Muted text color</p>
    </div>
  </div>
</div>`,
    },
  },
};

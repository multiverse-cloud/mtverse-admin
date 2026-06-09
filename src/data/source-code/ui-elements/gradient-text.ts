import { ComponentSourceData } from '../types';

export const gradientTextSource: ComponentSourceData = {
  component: 'Gradient Text',
  slug: 'gradient-text',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Text with gradient color effects for eye-catching headings.',
  sources: {
    react: { language: 'tsx', filename: 'GradientTextSection.tsx', code: `function GradientTextSection() {\n  return (\n    <div className="space-y-4">\n      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">Gradient Heading</h2>\n      <p className="text-2xl font-bold bg-gradient-to-r from-success-500 via-blue-light-500 to-brand-500 bg-clip-text text-transparent">Multi-Color Gradient</p>\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'gradient-text/page.tsx', code: `'use client';\nimport GradientTextSection from '@/components/mtverse/ui-elements/GradientTextSection';\nexport default function GradientTextPage() { return <GradientTextSection />; }` },
    vue: { language: 'vue', filename: 'GradientTextSection.vue', code: `<template><div class="space-y-4"><h2 class="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">Gradient Heading</h2></div></template>` },
    angular: { language: 'ts', filename: 'gradient-text.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-gradient-text', template: '<h2 class="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">Gradient Heading</h2>' })\nexport class GradientTextComponent {}` },
    html: { language: 'html', filename: 'gradient-text.html', code: `<!-- HTML Gradient Text --><h2 class="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">Gradient Heading</h2>` },
    laravel: { language: 'blade', filename: 'gradient-text.blade.php', code: `<!-- Laravel Gradient Text --><h2 class="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">Gradient Heading</h2>` },
  },
};

import { ComponentSourceData } from '../types';

export const textInputsSource: ComponentSourceData = {
  component: 'Text Inputs',
  slug: 'text-inputs',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Input fields with labels, validation states, icons, and helper text.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TextInputsSection.tsx',
      code: `function TextInputsSection() {
  return (
    <div className="space-y-4 max-w-md">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">Default Input</label>
        <input type="text" placeholder="Enter your name" className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">Error State</label>
        <input type="text" defaultValue="invalid" className="w-full rounded-xl border border-error-500 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-error-500/20 transition-colors" />
        <p className="mt-1 text-xs text-error-500">Please enter a valid email</p>
      </div>
    </div>
  );
}`,
    },
    nextjs: { language: 'tsx', filename: 'text-inputs/page.tsx', code: `'use client';\nimport TextInputsSection from '@/components/mtverse/ui-elements/TextInputsSection';\nexport default function TextInputsPage() { return <TextInputsSection />; }` },
    vue: { language: 'vue', filename: 'TextInputsSection.vue', code: `<template><div class="space-y-4 max-w-md"><div><label class="mb-1.5 block text-sm font-medium text-gray-700">Default Input</label><input type="text" placeholder="Enter your name" class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors" /></div></div></template>` },
    angular: { language: 'ts', filename: 'text-inputs.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-text-inputs', template: '<div class="space-y-4 max-w-md"><div><label class="mb-1.5 block text-sm font-medium text-gray-700">Default Input</label><input type="text" placeholder="Enter your name" class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors" /></div></div>' })\nexport class TextInputsComponent {}` },
    html: { language: 'html', filename: 'text-inputs.html', code: `<!-- HTML Text Inputs --><div class="space-y-4 max-w-md"><div><label class="mb-1.5 block text-sm font-medium text-gray-700">Default Input</label><input type="text" placeholder="Enter your name" class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors" /></div></div>` },
    laravel: { language: 'blade', filename: 'text-inputs.blade.php', code: `<!-- Laravel Text Inputs --><div class="space-y-4 max-w-md"><div><label class="mb-1.5 block text-sm font-medium text-gray-700">Default Input</label><input type="text" placeholder="Enter your name" class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors" /></div></div>` },
  },
};

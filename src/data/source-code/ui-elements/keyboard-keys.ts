import { ComponentSourceData } from '../types';

export const keyboardKeysSource: ComponentSourceData = {
  component: 'Keyboard Keys',
  slug: 'keyboard-keys',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Styled keyboard shortcut key display for documentation.',
  sources: {
    react: { language: 'tsx', filename: 'KeyboardKeysSection.tsx', code: `function KeyboardKeysSection() {\n  return (\n    <div className="flex items-center gap-2">\n      <kbd className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">Ctrl</kbd>\n      <span className="text-xs text-gray-400">+</span>\n      <kbd className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">K</kbd>\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'keyboard-keys/page.tsx', code: `'use client';\nimport KeyboardKeysSection from '@/components/mtverse/ui-elements/KeyboardKeysSection';\nexport default function KeyboardKeysPage() { return <KeyboardKeysSection />; }` },
    vue: { language: 'vue', filename: 'KeyboardKeysSection.vue', code: `<template><div class="flex items-center gap-2"><kbd class="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">Ctrl</kbd><span class="text-xs text-gray-400">+</span><kbd class="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">K</kbd></div></template>` },
    angular: { language: 'ts', filename: 'keyboard-keys.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-keyboard-keys', template: '' })\nexport class KeyboardKeysComponent {}` },
    html: { language: 'html', filename: 'keyboard-keys.html', code: `<!-- HTML Keyboard Keys --><div class="flex items-center gap-2"><kbd class="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">Ctrl</kbd><span class="text-xs text-gray-400">+</span><kbd class="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">K</kbd></div>` },
    laravel: { language: 'blade', filename: 'keyboard-keys.blade.php', code: `<!-- Laravel Keyboard Keys --><div class="flex items-center gap-2"><kbd class="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">Ctrl</kbd><span class="text-xs text-gray-400">+</span><kbd class="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">K</kbd></div>` },
  },
};

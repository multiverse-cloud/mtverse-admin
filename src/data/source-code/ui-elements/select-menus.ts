import { ComponentSourceData } from '../types';

export const selectMenusSource: ComponentSourceData = {
  component: 'Select Menus',
  slug: 'select-menus',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Custom styled select dropdowns with multi-select support.',
  sources: {
    react: { language: 'tsx', filename: 'SelectMenusSection.tsx', code: `function SelectMenusSection() {\n  return (\n    <div className="max-w-md">\n      <select className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition-colors">\n        <option>Select an option</option><option>Dashboard</option><option>Analytics</option>\n      </select>\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'select-menus/page.tsx', code: `'use client';\nimport SelectMenusSection from '@/components/mtverse/ui-elements/SelectMenusSection';\nexport default function SelectMenusPage() { return <SelectMenusSection />; }` },
    vue: { language: 'vue', filename: 'SelectMenusSection.vue', code: `<template><div class="max-w-md"><select class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition-colors"><option>Select an option</option><option>Dashboard</option></select></div></template>` },
    angular: { language: 'ts', filename: 'select-menus.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-select-menus', template: '' })\nexport class SelectMenusComponent {}` },
    html: { language: 'html', filename: 'select-menus.html', code: `<!-- HTML Select --><div class="max-w-md"><select class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm"><option>Select an option</option><option>Dashboard</option></select></div>` },
    laravel: { language: 'blade', filename: 'select-menus.blade.php', code: `<!-- Laravel Select --><div class="max-w-md"><select class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm"><option>Select an option</option><option>Dashboard</option></select></div>` },
  },
};

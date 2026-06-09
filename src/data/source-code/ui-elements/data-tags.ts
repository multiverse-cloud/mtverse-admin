import { ComponentSourceData } from '../types';

export const dataTagsSource: ComponentSourceData = {
  component: 'Data Tags',
  slug: 'data-tags',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Metadata key-value tag pairs for structured data display.',
  sources: {
    react: { language: 'tsx', filename: 'DataTagsSection.tsx', code: `function DataTagsSection() {\n  const tags = [{ key: 'Status', value: 'Active', color: 'bg-success-50 text-success-600' }];\n  return (\n    <div className="flex flex-wrap gap-2">\n      {tags.map((t) => (\n        <div key={t.key} className={\`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 \${t.color}\`}>\n          <span className="text-[10px] font-semibold uppercase opacity-70">{t.key}:</span>\n          <span className="text-xs font-medium">{t.value}</span>\n        </div>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'data-tags/page.tsx', code: `'use client';\nimport DataTagsSection from '@/components/mtverse/ui-elements/DataTagsSection';\nexport default function DataTagsPage() { return <DataTagsSection />; }` },
    vue: { language: 'vue', filename: 'DataTagsSection.vue', code: `<template><div class="flex flex-wrap gap-2"><div v-for="t in tags" :key="t.key" :class="t.color" class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5"><span class="text-[10px] font-semibold uppercase opacity-70">{{ t.key }}:</span><span class="text-xs font-medium">{{ t.value }}</span></div></div></template><script setup lang="ts">const tags = [{ key: 'Status', value: 'Active', color: 'bg-success-50 text-success-600' }];</script>` },
    angular: { language: 'ts', filename: 'data-tags.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-data-tags', template: '' })\nexport class DataTagsComponent { tags = [{ key: 'Status', value: 'Active', color: 'bg-success-50 text-success-600' }]; }` },
    html: { language: 'html', filename: 'data-tags.html', code: `<!-- HTML Data Tags --><div class="flex flex-wrap gap-2"><div class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 bg-success-50 text-success-600"><span class="text-[10px] font-semibold uppercase opacity-70">Status:</span><span class="text-xs font-medium">Active</span></div></div>` },
    laravel: { language: 'blade', filename: 'data-tags.blade.php', code: `<!-- Laravel Data Tags --><div class="flex flex-wrap gap-2"><div class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 bg-success-50 text-success-600"><span class="text-[10px] font-semibold uppercase opacity-70">Status:</span><span class="text-xs font-medium">Active</span></div></div>` },
  },
};

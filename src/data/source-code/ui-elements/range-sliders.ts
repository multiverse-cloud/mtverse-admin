import { ComponentSourceData } from '../types';

export const rangeSlidersSource: ComponentSourceData = {
  component: 'Range Sliders',
  slug: 'range-sliders',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Custom styled range inputs with value display and markers.',
  sources: {
    react: { language: 'tsx', filename: 'RangeSlidersSection.tsx', code: `function RangeSlidersSection() {\n  const [value, setValue] = useState(50);\n  return (\n    <div className="max-w-md">\n      <div className="mb-2 flex justify-between"><label className="text-sm font-medium text-gray-700">Volume</label><span className="text-sm font-medium text-brand-500">{value}%</span></div>\n      <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-2 rounded-full bg-gray-200 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-500" />\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'range-sliders/page.tsx', code: `'use client';\nimport RangeSlidersSection from '@/components/mtverse/ui-elements/RangeSlidersSection';\nexport default function RangeSlidersPage() { return <RangeSlidersSection />; }` },
    vue: { language: 'vue', filename: 'RangeSlidersSection.vue', code: `<template><div class="max-w-md"><div class="mb-2 flex justify-between"><label class="text-sm font-medium text-gray-700">Volume</label><span class="text-sm font-medium text-brand-500">{{ value }}%</span></div><input type="range" min="0" max="100" v-model.number="value" class="w-full h-2 rounded-full bg-gray-200 appearance-none cursor-pointer" /></div></template><script setup lang="ts">import { ref } from 'vue'; const value = ref(50);</script>` },
    angular: { language: 'ts', filename: 'range-sliders.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-range-sliders', template: '' })\nexport class RangeSlidersComponent { value = 50; }` },
    html: { language: 'html', filename: 'range-sliders.html', code: `<!-- HTML Range --><div x-data="{ value: 50 }" class="max-w-md"><div class="mb-2 flex justify-between"><label class="text-sm font-medium text-gray-700">Volume</label><span class="text-sm font-medium text-brand-500" x-text="value + '%'"></span></div><input type="range" min="0" max="100" x-model="value" class="w-full h-2 rounded-full bg-gray-200 appearance-none cursor-pointer" /></div>` },
    laravel: { language: 'blade', filename: 'range-sliders.blade.php', code: `<!-- Laravel Range --><div x-data="{ value: 50 }" class="max-w-md"><div class="mb-2 flex justify-between"><label class="text-sm font-medium text-gray-700">Volume</label><span class="text-sm font-medium text-brand-500" x-text="value + '%'"></span></div><input type="range" min="0" max="100" x-model="value" class="w-full h-2 rounded-full bg-gray-200 appearance-none cursor-pointer" /></div>` },
  },
};

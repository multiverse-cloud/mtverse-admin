import { ComponentSourceData } from '../types';

export const scrollIndicatorSource: ComponentSourceData = {
  component: 'Scroll Indicator',
  slug: 'scroll-indicator',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Reading progress bar showing scroll position.',
  sources: {
    react: { language: 'tsx', filename: 'ScrollIndicatorSection.tsx', code: `function ScrollIndicatorSection() {\n  const [pct, setPct] = useState(0);\n  return (\n    <div>\n      <div className="relative h-3 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all" style={{ width: \`\${pct}%\` }} /></div>\n      <input type="range" min={0} max={100} value={pct} onChange={(e) => setPct(Number(e.target.value))} className="w-32 mt-2" />\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'scroll-indicator/page.tsx', code: `'use client';\nimport ScrollIndicatorSection from '@/components/mtverse/ui-elements/ScrollIndicatorSection';\nexport default function ScrollIndicatorPage() { return <ScrollIndicatorSection />; }` },
    vue: { language: 'vue', filename: 'ScrollIndicatorSection.vue', code: `<template><div><div class="relative h-3 overflow-hidden rounded-full bg-gray-100"><div class="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all" :style="{ width: pct + '%' }" /></div><input type="range" min="0" max="100" v-model.number="pct" class="w-32 mt-2" /></div></template><script setup lang="ts">import { ref } from 'vue'; const pct = ref(0);</script>` },
    angular: { language: 'ts', filename: 'scroll-indicator.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-scroll-indicator', template: '' })\nexport class ScrollIndicatorComponent { pct = 0; }` },
    html: { language: 'html', filename: 'scroll-indicator.html', code: `<!-- HTML Scroll Indicator --><div x-data="{ pct: 0 }"><div class="relative h-3 overflow-hidden rounded-full bg-gray-100"><div class="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all" :style="'width:' + pct + '%'"></div></div><input type="range" min="0" max="100" x-model="pct" class="w-32 mt-2" /></div>` },
    laravel: { language: 'blade', filename: 'scroll-indicator.blade.php', code: `<!-- Laravel Scroll Indicator --><div x-data="{ pct: 0 }"><div class="relative h-3 overflow-hidden rounded-full bg-gray-100"><div class="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all" :style="'width:' + pct + '%'"></div></div><input type="range" min="0" max="100" x-model="pct" class="w-32 mt-2" /></div>` },
  },
};

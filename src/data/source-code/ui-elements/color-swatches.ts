import { ComponentSourceData } from '../types';

export const colorSwatchesSource: ComponentSourceData = {
  component: 'Color Swatches',
  slug: 'color-swatches',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Color palette display with copy-to-clipboard functionality.',
  sources: {
    react: { language: 'tsx', filename: 'ColorSwatchesSection.tsx', code: `function ColorSwatchesSection() {\n  const [copied, setCopied] = useState<string | null>(null);\n  const colors = ['bg-brand-50', 'bg-brand-500', 'bg-brand-700'];\n  const handleCopy = (c) => { navigator.clipboard.writeText(c); setCopied(c); setTimeout(() => setCopied(null), 1500); };\n  return (\n    <div className="flex gap-1">\n      {colors.map((c) => (\n        <button key={c} onClick={() => handleCopy(c)} className={\`group relative flex-1 h-10 first:rounded-l-lg last:rounded-r-lg \${c}\`} />\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'color-swatches/page.tsx', code: `'use client';\nimport ColorSwatchesSection from '@/components/mtverse/ui-elements/ColorSwatchesSection';\nexport default function ColorSwatchesPage() { return <ColorSwatchesSection />; }` },
    vue: { language: 'vue', filename: 'ColorSwatchesSection.vue', code: `<template><div class="flex gap-1"><button v-for="c in colors" :key="c" @click="handleCopy(c)" :class="c" class="group relative flex-1 h-10 first:rounded-l-lg last:rounded-r-lg" /></div></template><script setup lang="ts">import { ref } from 'vue'; const copied = ref(null); const colors = ['bg-brand-50', 'bg-brand-500']; const handleCopy = (c) => { navigator.clipboard.writeText(c); copied.value = c; };</script>` },
    angular: { language: 'ts', filename: 'color-swatches.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-color-swatches', template: '' })\nexport class ColorSwatchesComponent {}` },
    html: { language: 'html', filename: 'color-swatches.html', code: `<!-- HTML Color Swatches --><div class="flex gap-1"><div class="flex-1 h-10 rounded-l-lg bg-brand-50"></div><div class="flex-1 h-10 bg-brand-500"></div><div class="flex-1 h-10 rounded-r-lg bg-brand-700"></div></div>` },
    laravel: { language: 'blade', filename: 'color-swatches.blade.php', code: `<!-- Laravel Color Swatches --><div class="flex gap-1"><div class="flex-1 h-10 rounded-l-lg bg-brand-50"></div><div class="flex-1 h-10 bg-brand-500"></div><div class="flex-1 h-10 rounded-r-lg bg-brand-700"></div></div>` },
  },
};

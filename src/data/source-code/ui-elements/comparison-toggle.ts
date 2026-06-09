import { ComponentSourceData } from '../types';

export const comparisonToggleSource: ComponentSourceData = {
  component: 'Comparison Toggle',
  slug: 'comparison-toggle',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'A/B comparison switch for plan or option selection.',
  sources: {
    react: { language: 'tsx', filename: 'ComparisonToggleSection.tsx', code: `function ComparisonToggleSection() {\n  const [plan, setPlan] = useState<'A' | 'B'>('A');\n  return (\n    <div className="inline-flex rounded-xl bg-gray-100 p-1">\n      {(['A', 'B'] as const).map((p) => (\n        <button key={p} onClick={() => setPlan(p)} className={\`rounded-lg px-6 py-2.5 text-sm font-medium \${plan === p ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'}\`}>Plan {p}</button>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'comparison-toggle/page.tsx', code: `'use client';\nimport ComparisonToggleSection from '@/components/mtverse/ui-elements/ComparisonToggleSection';\nexport default function ComparisonTogglePage() { return <ComparisonToggleSection />; }` },
    vue: { language: 'vue', filename: 'ComparisonToggleSection.vue', code: `<template><div class="inline-flex rounded-xl bg-gray-100 p-1"><button v-for="p in ['A', 'B']" :key="p" @click="plan = p" :class="plan === p ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'" class="rounded-lg px-6 py-2.5 text-sm font-medium">Plan {{ p }}</button></div></template><script setup lang="ts">import { ref } from 'vue'; const plan = ref('A');</script>` },
    angular: { language: 'ts', filename: 'comparison-toggle.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-comparison-toggle', template: '' })\nexport class ComparisonToggleComponent { plan = 'A'; }` },
    html: { language: 'html', filename: 'comparison-toggle.html', code: `<!-- HTML Comparison Toggle --><div x-data="{ plan: 'A' }" class="inline-flex rounded-xl bg-gray-100 p-1"><button @click="plan = 'A'" :class="plan === 'A' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'" class="rounded-lg px-6 py-2.5 text-sm font-medium">Plan A</button><button @click="plan = 'B'" :class="plan === 'B' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'" class="rounded-lg px-6 py-2.5 text-sm font-medium">Plan B</button></div>` },
    laravel: { language: 'blade', filename: 'comparison-toggle.blade.php', code: `<!-- Laravel Comparison Toggle --><div x-data="{ plan: 'A' }" class="inline-flex rounded-xl bg-gray-100 p-1"><button @click="plan = 'A'" :class="plan === 'A' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'" class="rounded-lg px-6 py-2.5 text-sm font-medium">Plan A</button><button @click="plan = 'B'" :class="plan === 'B' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'" class="rounded-lg px-6 py-2.5 text-sm font-medium">Plan B</button></div>` },
  },
};

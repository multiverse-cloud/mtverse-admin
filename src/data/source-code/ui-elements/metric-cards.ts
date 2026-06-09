import { ComponentSourceData } from '../types';

export const metricCardsSource: ComponentSourceData = {
  component: 'Metric Cards',
  slug: 'metric-cards',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'KPI metric display cards with trends and icons.',
  sources: {
    react: { language: 'tsx', filename: 'MetricCardsSection.tsx', code: `function MetricCardsSection() {\n  const metrics = [{ label: 'Revenue', value: '$48,295', change: '+12.5%', up: true }];\n  return (\n    <div className="grid grid-cols-2 gap-4">\n      {metrics.map((m) => (\n        <div key={m.label} className="rounded-xl border border-gray-200 p-4">\n          <p className="text-xs font-medium text-gray-500">{m.label}</p>\n          <p className="mt-2 text-2xl font-bold">{m.value}</p>\n          <p className={\`mt-1 text-xs font-medium \${m.up ? 'text-success-500' : 'text-error-500'}\`}>{m.change}</p>\n        </div>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'metric-cards/page.tsx', code: `'use client';\nimport MetricCardsSection from '@/components/mtverse/ui-elements/MetricCardsSection';\nexport default function MetricCardsPage() { return <MetricCardsSection />; }` },
    vue: { language: 'vue', filename: 'MetricCardsSection.vue', code: `<template><div class="grid grid-cols-2 gap-4"><div v-for="m in metrics" :key="m.label" class="rounded-xl border border-gray-200 p-4"><p class="text-xs font-medium text-gray-500">{{ m.label }}</p><p class="mt-2 text-2xl font-bold">{{ m.value }}</p><p :class="m.up ? 'text-success-500' : 'text-error-500'" class="mt-1 text-xs font-medium">{{ m.change }}</p></div></div></template><script setup lang="ts">const metrics = [{ label: 'Revenue', value: '$48,295', change: '+12.5%', up: true }];</script>` },
    angular: { language: 'ts', filename: 'metric-cards.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-metric-cards', template: '' })\nexport class MetricCardsComponent { metrics = [{ label: 'Revenue', value: '$48,295', change: '+12.5%', up: true }]; }` },
    html: { language: 'html', filename: 'metric-cards.html', code: `<!-- HTML Metric Cards --><div class="grid grid-cols-2 gap-4"><div class="rounded-xl border border-gray-200 p-4"><p class="text-xs font-medium text-gray-500">Revenue</p><p class="mt-2 text-2xl font-bold">$48,295</p><p class="mt-1 text-xs font-medium text-success-500">+12.5%</p></div></div>` },
    laravel: { language: 'blade', filename: 'metric-cards.blade.php', code: `<!-- Laravel Metric Cards --><div class="grid grid-cols-2 gap-4"><div class="rounded-xl border border-gray-200 p-4"><p class="text-xs font-medium text-gray-500">Revenue</p><p class="mt-2 text-2xl font-bold">$48,295</p><p class="mt-1 text-xs font-medium text-success-500">+12.5%</p></div></div>` },
  },
};

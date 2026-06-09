import { ComponentSourceData } from '../types';

export const verticalNavSource: ComponentSourceData = {
  component: 'Vertical Nav',
  slug: 'vertical-nav',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Vertical navigation sidebar mini with icons and labels.',
  sources: {
    react: { language: 'tsx', filename: 'VerticalNavSection.tsx', code: `function VerticalNavSection() {\n  const [active, setActive] = useState('dashboard');\n  const nav = [{ id: 'dashboard', label: 'Dashboard', icon: HomeIcon }, { id: 'analytics', label: 'Analytics', icon: ChartIcon }];\n  return (\n    <div className="w-52 rounded-xl border p-2">\n      {nav.map((item) => (\n        <button key={item.id} onClick={() => setActive(item.id)} className={\`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium \${active === item.id ? 'bg-brand-50 text-brand-600' : 'text-gray-600 hover:bg-gray-50'}\`}><item.icon className="size-4" />{item.label}</button>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'vertical-nav/page.tsx', code: `'use client';\nimport VerticalNavSection from '@/components/mtverse/ui-elements/VerticalNavSection';\nexport default function VerticalNavPage() { return <VerticalNavSection />; }` },
    vue: { language: 'vue', filename: 'VerticalNavSection.vue', code: `<template><div class="w-52 rounded-xl border p-2"><button v-for="item in nav" :key="item.id" @click="active = item.id" :class="active === item.id ? 'bg-brand-50 text-brand-600' : 'text-gray-600 hover:bg-gray-50'" class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium">{{ item.label }}</button></div></template><script setup lang="ts">import { ref } from 'vue'; const active = ref('dashboard'); const nav = [{ id: 'dashboard', label: 'Dashboard' }];</script>` },
    angular: { language: 'ts', filename: 'vertical-nav.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-vertical-nav', template: '' })\nexport class VerticalNavComponent { active = 'dashboard'; nav = [{ id: 'dashboard', label: 'Dashboard' }]; }` },
    html: { language: 'html', filename: 'vertical-nav.html', code: `<!-- HTML Vertical Nav --><div x-data="{ active: 'dashboard' }" class="w-52 rounded-xl border p-2"><button @click="active = 'dashboard'" :class="active === 'dashboard' ? 'bg-brand-50 text-brand-600' : 'text-gray-600'" class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium">Dashboard</button></div>` },
    laravel: { language: 'blade', filename: 'vertical-nav.blade.php', code: `<!-- Laravel Vertical Nav --><div x-data="{ active: 'dashboard' }" class="w-52 rounded-xl border p-2"><button @click="active = 'dashboard'" :class="active === 'dashboard' ? 'bg-brand-50 text-brand-600' : 'text-gray-600'" class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium">Dashboard</button></div>` },
  },
};

import { ComponentSourceData } from '../types';

export const tabsWithIconsSource: ComponentSourceData = {
  component: 'Tabs with Icons',
  slug: 'tabs-with-icons',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Icon-based tab navigation with horizontal and icon-only variants.',
  sources: {
    react: { language: 'tsx', filename: 'TabsWithIconsSection.tsx', code: `function TabsWithIconsSection() {\n  const [active, setActive] = useState(0);\n  const tabs = [{ label: 'Dashboard', icon: HomeIcon }, { label: 'Analytics', icon: ChartIcon }];\n  return (\n    <div className="flex gap-1 rounded-xl bg-gray-100 p-1">\n      {tabs.map((tab, i) => (\n        <button key={tab.label} onClick={() => setActive(i)} className={\`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium \${active === i ? 'bg-white text-brand-500 shadow-sm' : 'text-gray-500'}\`}><tab.icon className="size-4" />{tab.label}</button>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'tabs-with-icons/page.tsx', code: `'use client';\nimport TabsWithIconsSection from '@/components/mtverse/ui-elements/TabsWithIconsSection';\nexport default function TabsWithIconsPage() { return <TabsWithIconsSection />; }` },
    vue: { language: 'vue', filename: 'TabsWithIconsSection.vue', code: `<template><div class="flex gap-1 rounded-xl bg-gray-100 p-1"><button v-for="(tab, i) in tabs" :key="tab.label" @click="active = i" :class="active === i ? 'bg-white text-brand-500 shadow-sm' : 'text-gray-500'" class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium">{{ tab.label }}</button></div></template><script setup lang="ts">import { ref } from 'vue'; const active = ref(0); const tabs = [{ label: 'Dashboard' }, { label: 'Analytics' }];</script>` },
    angular: { language: 'ts', filename: 'tabs-with-icons.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-tabs-with-icons', template: '' })\nexport class TabsWithIconsComponent { active = 0; tabs = [{ label: 'Dashboard' }]; }` },
    html: { language: 'html', filename: 'tabs-with-icons.html', code: `<!-- HTML Tabs with Icons --><div x-data="{ active: 0 }" class="flex gap-1 rounded-xl bg-gray-100 p-1"><button @click="active = 0" :class="active === 0 ? 'bg-white text-brand-500 shadow-sm' : 'text-gray-500'" class="rounded-lg px-4 py-2 text-sm font-medium">Dashboard</button></div>` },
    laravel: { language: 'blade', filename: 'tabs-with-icons.blade.php', code: `<!-- Laravel Tabs with Icons --><div x-data="{ active: 0 }" class="flex gap-1 rounded-xl bg-gray-100 p-1"><button @click="active = 0" :class="active === 0 ? 'bg-white text-brand-500 shadow-sm' : 'text-gray-500'" class="rounded-lg px-4 py-2 text-sm font-medium">Dashboard</button></div>` },
  },
};

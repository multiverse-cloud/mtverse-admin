import { ComponentSourceData } from '../types';

export const iconShowcaseSource: ComponentSourceData = {
  component: 'Icon Showcase',
  slug: 'icon-showcase',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Lucide icon grid with search filtering for icon browsing.',
  sources: {
    react: { language: 'tsx', filename: 'IconShowcaseSection.tsx', code: `function IconShowcaseSection() {\n  const [search, setSearch] = useState('');\n  const icons = [{ name: 'Home', icon: HomeIcon }, { name: 'Search', icon: SearchIcon }];\n  const filtered = icons.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));\n  return (\n    <div>\n      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search icons..." className="mb-4 rounded-lg border px-3 py-2 text-sm" />\n      <div className="grid grid-cols-8 gap-2">\n        {filtered.map((item) => (\n          <div key={item.name} className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50"><item.icon className="size-5" /><span className="text-[9px]">{item.name}</span></div>\n        ))}\n      </div>\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'icon-showcase/page.tsx', code: `'use client';\nimport IconShowcaseSection from '@/components/mtverse/ui-elements/IconShowcaseSection';\nexport default function IconShowcasePage() { return <IconShowcaseSection />; }` },
    vue: { language: 'vue', filename: 'IconShowcaseSection.vue', code: `<template><div><input v-model="search" placeholder="Search icons..." class="mb-4 rounded-lg border px-3 py-2 text-sm" /><div class="grid grid-cols-8 gap-2"><div v-for="item in filtered" :key="item.name" class="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50"><span class="text-[9px]">{{ item.name }}</span></div></div></div></template><script setup lang="ts">import { ref, computed } from 'vue'; const search = ref(''); const icons = [{ name: 'Home' }]; const filtered = computed(() => icons.filter(i => i.name.toLowerCase().includes(search.value.toLowerCase())));</script>` },
    angular: { language: 'ts', filename: 'icon-showcase.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-icon-showcase', template: '' })\nexport class IconShowcaseComponent { search = ''; }` },
    html: { language: 'html', filename: 'icon-showcase.html', code: `<!-- HTML Icon Grid --><div class="grid grid-cols-8 gap-2"><div class="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50"><span class="text-[9px]">Home</span></div></div>` },
    laravel: { language: 'blade', filename: 'icon-showcase.blade.php', code: `<!-- Laravel Icon Grid --><div class="grid grid-cols-8 gap-2"><div class="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50"><span class="text-[9px]">Home</span></div></div>` },
  },
};

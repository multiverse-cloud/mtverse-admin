import { ComponentSourceData } from '../types';

export const dragHandleListSource: ComponentSourceData = {
  component: 'Drag Handle List',
  slug: 'drag-handle-list',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Sortable list with drag handles and priority indicators.',
  sources: {
    react: { language: 'tsx', filename: 'DragHandleListSection.tsx', code: `function DragHandleListSection() {\n  const [items, setItems] = useState([{ id: '1', title: 'Design system', priority: 'High' }]);\n  const moveItem = (from, to) => { const u = [...items]; const [m] = u.splice(from, 1); u.splice(to, 0, m); setItems(u); };\n  return (\n    <div className="max-w-md space-y-2">\n      {items.map((item, i) => (\n        <div key={item.id} className="flex items-center gap-3 rounded-xl border px-3 py-2.5">\n          <span className="cursor-grab text-gray-400">⠿</span>\n          <span className="text-sm font-medium">{item.title}</span>\n        </div>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'drag-handle-list/page.tsx', code: `'use client';\nimport DragHandleListSection from '@/components/mtverse/ui-elements/DragHandleListSection';\nexport default function DragHandleListPage() { return <DragHandleListSection />; }` },
    vue: { language: 'vue', filename: 'DragHandleListSection.vue', code: `<template><div class="max-w-md space-y-2"><div v-for="item in items" :key="item.id" class="flex items-center gap-3 rounded-xl border px-3 py-2.5"><span class="cursor-grab text-gray-400">⠿</span><span class="text-sm font-medium">{{ item.title }}</span></div></div></template><script setup lang="ts">const items = [{ id: '1', title: 'Design system', priority: 'High' }];</script>` },
    angular: { language: 'ts', filename: 'drag-handle-list.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-drag-handle-list', template: '' })\nexport class DragHandleListComponent { items = [{ id: '1', title: 'Design system', priority: 'High' }]; }` },
    html: { language: 'html', filename: 'drag-handle-list.html', code: `<!-- HTML Drag Handle List --><div class="max-w-md space-y-2"><div class="flex items-center gap-3 rounded-xl border px-3 py-2.5"><span class="cursor-grab text-gray-400">⠿</span><span class="text-sm font-medium">Design system</span></div></div>` },
    laravel: { language: 'blade', filename: 'drag-handle-list.blade.php', code: `<!-- Laravel Drag Handle List --><div class="max-w-md space-y-2"><div class="flex items-center gap-3 rounded-xl border px-3 py-2.5"><span class="cursor-grab text-gray-400">⠿</span><span class="text-sm font-medium">Design system</span></div></div>` },
  },
};

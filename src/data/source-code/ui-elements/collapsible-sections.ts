import { ComponentSourceData } from '../types';

export const collapsibleSectionsSource: ComponentSourceData = {
  component: 'Collapsible Sections',
  slug: 'collapsible-sections',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Expand/collapse sections with smooth animation and icons.',
  sources: {
    react: { language: 'tsx', filename: 'CollapsibleSectionsSection.tsx', code: `function CollapsibleSectionsSection() {\n  const [open, setOpen] = useState<Record<string, boolean>>({ general: true });\n  const toggle = (id) => setOpen((p) => ({ ...p, [id]: !p[id] }));\n  return (\n    <div className="max-w-md space-y-2">\n      <div className="rounded-xl border border-gray-200 overflow-hidden">\n        <button onClick={() => toggle('general')} className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium">General Settings</button>\n        {open.general && <div className="border-t border-gray-100 px-4 py-3"><p className="text-sm text-gray-600">Settings content here</p></div>}\n      </div>\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'collapsible-sections/page.tsx', code: `'use client';\nimport CollapsibleSectionsSection from '@/components/mtverse/ui-elements/CollapsibleSectionsSection';\nexport default function CollapsibleSectionsPage() { return <CollapsibleSectionsSection />; }` },
    vue: { language: 'vue', filename: 'CollapsibleSectionsSection.vue', code: `<template><div class="max-w-md space-y-2"><div class="rounded-xl border border-gray-200 overflow-hidden"><button @click="open = !open" class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium">General Settings</button><div v-if="open" class="border-t border-gray-100 px-4 py-3"><p class="text-sm text-gray-600">Settings content here</p></div></div></div></template><script setup lang="ts">import { ref } from 'vue'; const open = ref(true);</script>` },
    angular: { language: 'ts', filename: 'collapsible-sections.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-collapsible-sections', template: '' })\nexport class CollapsibleSectionsComponent { open = true; }` },
    html: { language: 'html', filename: 'collapsible-sections.html', code: `<!-- HTML Collapsible --><div x-data="{ open: true }" class="max-w-md"><div class="rounded-xl border border-gray-200 overflow-hidden"><button @click="open = !open" class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium">General Settings</button><div x-show="open" class="border-t border-gray-100 px-4 py-3"><p class="text-sm text-gray-600">Settings content here</p></div></div></div>` },
    laravel: { language: 'blade', filename: 'collapsible-sections.blade.php', code: `<!-- Laravel Collapsible --><div x-data="{ open: true }" class="max-w-md"><div class="rounded-xl border border-gray-200 overflow-hidden"><button @click="open = !open" class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium">General Settings</button><div x-show="open" class="border-t border-gray-100 px-4 py-3"><p class="text-sm text-gray-600">Settings content here</p></div></div></div>` },
  },
};

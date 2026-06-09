import { ComponentSourceData } from '../types';

export const resizablePanelSource: ComponentSourceData = {
  component: 'Resizable Panel',
  slug: 'resizable-panel',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Draggable resize handle panel for adjustable layouts.',
  sources: {
    react: { language: 'tsx', filename: 'ResizablePanelSection.tsx', code: `function ResizablePanelSection() {\n  const [width, setWidth] = useState(50);\n  const [dragging, setDragging] = useState(false);\n  return (\n    <div className="flex h-48 rounded-xl border border-gray-200 overflow-hidden">\n      <div style={{ width: width + '%' }} className="flex items-center justify-center bg-brand-50">Panel A</div>\n      <div onMouseDown={() => setDragging(true)} className="flex w-2 cursor-col-resize items-center justify-center bg-gray-200 hover:bg-brand-500" />\n      <div className="flex flex-1 items-center justify-center bg-gray-50">Panel B</div>\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'resizable-panel/page.tsx', code: `'use client';\nimport ResizablePanelSection from '@/components/mtverse/ui-elements/ResizablePanelSection';\nexport default function ResizablePanelPage() { return <ResizablePanelSection />; }` },
    vue: { language: 'vue', filename: 'ResizablePanelSection.vue', code: `<template><div class="flex h-48 rounded-xl border border-gray-200 overflow-hidden"><div :style="{ width: width + '%' }" class="flex items-center justify-center bg-brand-50">Panel A</div><div class="flex w-2 cursor-col-resize items-center justify-center bg-gray-200" /><div class="flex flex-1 items-center justify-center bg-gray-50">Panel B</div></div></template><script setup lang="ts">import { ref } from 'vue'; const width = ref(50);</script>` },
    angular: { language: 'ts', filename: 'resizable-panel.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-resizable-panel', template: '' })\nexport class ResizablePanelComponent { width = 50; }` },
    html: { language: 'html', filename: 'resizable-panel.html', code: `<!-- HTML Resizable Panel --><div class="flex h-48 rounded-xl border border-gray-200 overflow-hidden"><div class="flex items-center justify-center bg-brand-50" style="width: 50%">Panel A</div><div class="flex w-2 cursor-col-resize items-center justify-center bg-gray-200"></div><div class="flex flex-1 items-center justify-center bg-gray-50">Panel B</div></div>` },
    laravel: { language: 'blade', filename: 'resizable-panel.blade.php', code: `<!-- Laravel Resizable Panel --><div class="flex h-48 rounded-xl border border-gray-200 overflow-hidden"><div class="flex items-center justify-center bg-brand-50" style="width: 50%">Panel A</div><div class="flex w-2 cursor-col-resize items-center justify-center bg-gray-200"></div><div class="flex flex-1 items-center justify-center bg-gray-50">Panel B</div></div>` },
  },
};

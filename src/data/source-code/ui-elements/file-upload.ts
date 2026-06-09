import { ComponentSourceData } from '../types';

export const fileUploadSource: ComponentSourceData = {
  component: 'File Upload',
  slug: 'file-upload',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Drag and drop file upload area with file list management.',
  sources: {
    react: { language: 'tsx', filename: 'FileUploadSection.tsx', code: `function FileUploadSection() {\n  const [files, setFiles] = useState<string[]>([]);\n  const [dragOver, setDragOver] = useState(false);\n  return (\n    <div className="max-w-lg">\n      <div onDragOver={(e) => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} onDrop={(e) => { e.preventDefault(); setDragOver(false); }} onClick={() => setFiles((p) => [...p, 'file.pdf'])} className={\`flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed p-8 text-center \${dragOver ? 'border-brand-500 bg-brand-50' : 'border-gray-300 bg-gray-50'}\`}>\n        <p className="text-sm font-medium text-gray-700">Drag & drop files here</p>\n      </div>\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'file-upload/page.tsx', code: `'use client';\nimport FileUploadSection from '@/components/mtverse/ui-elements/FileUploadSection';\nexport default function FileUploadPage() { return <FileUploadSection />; }` },
    vue: { language: 'vue', filename: 'FileUploadSection.vue', code: `<template><div class="max-w-lg"><div @dragover.prevent="dragOver = true" @dragleave="dragOver = false" @drop.prevent="dragOver = false" :class="dragOver ? 'border-brand-500 bg-brand-50' : 'border-gray-300 bg-gray-50'" class="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed p-8 text-center"><p class="text-sm font-medium text-gray-700">Drag & drop files here</p></div></div></template><script setup lang="ts">import { ref } from 'vue'; const dragOver = ref(false);</script>` },
    angular: { language: 'ts', filename: 'file-upload.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-file-upload', template: '' })\nexport class FileUploadComponent { dragOver = false; }` },
    html: { language: 'html', filename: 'file-upload.html', code: `<!-- HTML File Upload --><div x-data="{ dragOver: false }" class="max-w-lg"><div @dragover.prevent="dragOver = true" @dragleave="dragOver = false" @drop.prevent="dragOver = false" :class="dragOver ? 'border-brand-500 bg-brand-50' : 'border-gray-300 bg-gray-50'" class="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed p-8 text-center"><p class="text-sm font-medium text-gray-700">Drag & drop files here</p></div></div>` },
    laravel: { language: 'blade', filename: 'file-upload.blade.php', code: `<!-- Laravel File Upload --><div x-data="{ dragOver: false }" class="max-w-lg"><div @dragover.prevent="dragOver = true" @dragleave="dragOver = false" @drop.prevent="dragOver = false" :class="dragOver ? 'border-brand-500 bg-brand-50' : 'border-gray-300 bg-gray-50'" class="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed p-8 text-center"><p class="text-sm font-medium text-gray-700">Drag & drop files here</p></div></div>` },
  },
};

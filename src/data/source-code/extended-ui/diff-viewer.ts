import { ComponentSourceData } from '../types';

export const diffViewerSource: ComponentSourceData = {
  component: 'Diff Viewer',
  slug: 'diff-viewer',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A side-by-side or inline diff viewer for comparing text changes with color-coded additions and deletions.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'DiffViewer.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

interface DiffLine {
  type: 'add' | 'remove' | 'same';
  content: string;
}

const diffLines: DiffLine[] = [
  { type: 'same', content: 'import React from "react";' },
  { type: 'remove', content: 'const version = "1.0.0";' },
  { type: 'add', content: 'const version = "2.0.0";' },
  { type: 'same', content: '' },
  { type: 'same', content: 'export default function App() {' },
  { type: 'remove', content: '  return <div>Old UI</div>;' },
  { type: 'add', content: '  return <div>New UI v2</div>;' },
  { type: 'same', content: '}' },
];

export default function DiffViewer() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-white/5">
        <span className="text-xs font-medium text-gray-500">Changes</span>
        <span className="text-xs text-green-600">+2</span>
        <span className="text-xs text-red-600">-2</span>
      </div>
      <div className="divide-y divide-gray-100 dark:divide-white/5">
        {diffLines.map((line, i) => (
          <div key={i} className={\`flex font-mono text-xs \${line.type === 'add' ? 'bg-green-50 dark:bg-green-950/20' : line.type === 'remove' ? 'bg-red-50 dark:bg-red-950/20' : ''}\`}>
            <span className="w-8 shrink-0 select-none px-2 py-1 text-center text-gray-400">{line.type === 'add' ? '+' : line.type === 'remove' ? '−' : ' '}</span>
            <span className={\`px-2 py-1 \${line.type === 'add' ? 'text-green-700 dark:text-green-400' : line.type === 'remove' ? 'text-red-700 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}\`}>{line.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'diff-viewer/page.tsx',
      code: `'use client';

import DiffViewer from '@/components/mtverse/extended-ui/DiffViewer';

export default function DiffViewerPage() {
  return <DiffViewer />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'DiffViewer.vue',
      code: `<template>
  <div class="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
    <div class="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-white/5">
      <span class="text-xs font-medium text-gray-500">Changes</span>
      <div class="flex gap-2"><span class="text-xs text-green-600">+2</span><span class="text-xs text-red-600">-2</span></div>
    </div>
    <div class="divide-y divide-gray-100 dark:divide-white/5">
      <div v-for="(line, i) in diffLines" :key="i" class="flex font-mono text-xs" :class="line.type === 'add' ? 'bg-green-50 dark:bg-green-950/20' : line.type === 'remove' ? 'bg-red-50 dark:bg-red-950/20' : ''">
        <span class="w-8 shrink-0 select-none px-2 py-1 text-center text-gray-400">{{ line.type === 'add' ? '+' : line.type === 'remove' ? '−' : ' ' }}</span>
        <span class="px-2 py-1" :class="line.type === 'add' ? 'text-green-700 dark:text-green-400' : line.type === 'remove' ? 'text-red-700 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'">{{ line.content }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const diffLines = [
  { type: 'same', content: 'import React from "react";' },
  { type: 'remove', content: 'const version = "1.0.0";' },
  { type: 'add', content: 'const version = "2.0.0";' },
  { type: 'same', content: '' },
  { type: 'same', content: 'export default function App() {' },
  { type: 'remove', content: '  return <div>Old UI</div>;' },
  { type: 'add', content: '  return <div>New UI v2</div>;' },
  { type: 'same', content: '}' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'diff-viewer.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-diff-viewer',
  template: \`
    <div class="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-white/5">
        <span class="text-xs font-medium text-gray-500">Changes</span>
        <div class="flex gap-2"><span class="text-xs text-green-600">+2</span><span class="text-xs text-red-600">-2</span></div>
      </div>
      <div class="divide-y divide-gray-100 dark:divide-white/5">
        <div *ngFor="let line of diffLines; let i = index" class="flex font-mono text-xs" [class.bg-green-50]="line.type === 'add'" [class.bg-red-50]="line.type === 'remove'">
          <span class="w-8 shrink-0 select-none px-2 py-1 text-center text-gray-400">{{ line.type === 'add' ? '+' : line.type === 'remove' ? '−' : ' ' }}</span>
          <span class="px-2 py-1" [class.text-green-700]="line.type === 'add'" [class.text-red-700]="line.type === 'remove'" [class.text-gray-700]="line.type === 'same'">{{ line.content }}</span>
        </div>
      </div>
    </div>
  \`
})
export class DiffViewerComponent {
  diffLines = [
    { type: 'same', content: 'import React from "react";' },
    { type: 'remove', content: 'const version = "1.0.0";' },
    { type: 'add', content: 'const version = "2.0.0";' },
    { type: 'same', content: '' },
    { type: 'same', content: 'export default function App() {' },
    { type: 'remove', content: '  return <div>Old UI</div>;' },
    { type: 'add', content: '  return <div>New UI v2</div>;' },
    { type: 'same', content: '}' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'diff-viewer.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ diffLines: [{ type: 'same', content: 'import React from \"react\";' }, { type: 'remove', content: 'const version = \"1.0.0\";' }, { type: 'add', content: 'const version = \"2.0.0\";' }, { type: 'same', content: '' }, { type: 'same', content: 'export default function App() {' }, { type: 'remove', content: '  return <div>Old UI</div>;' }, { type: 'add', content: '  return <div>New UI v2</div>;' }, { type: 'same', content: '}' }] }" class="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
  <div class="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-white/5">
    <span class="text-xs font-medium text-gray-500">Changes</span>
    <div class="flex gap-2"><span class="text-xs text-green-600">+2</span><span class="text-xs text-red-600">-2</span></div>
  </div>
  <div class="divide-y divide-gray-100 dark:divide-white/5">
    <template x-for="(line, i) in diffLines" :key="i">
      <div class="flex font-mono text-xs" :class="line.type === 'add' ? 'bg-green-50' : line.type === 'remove' ? 'bg-red-50' : ''">
        <span class="w-8 shrink-0 select-none px-2 py-1 text-center text-gray-400" x-text="line.type === 'add' ? '+' : line.type === 'remove' ? '−' : ' '"></span>
        <span class="px-2 py-1" :class="line.type === 'add' ? 'text-green-700' : line.type === 'remove' ? 'text-red-700' : 'text-gray-700'" x-text="line.content"></span>
      </div>
    </template>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'diff-viewer.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ diffLines: [{ type: 'same', content: 'import React from \"react\";' }, { type: 'remove', content: 'const version = \"1.0.0\";' }, { type: 'add', content: 'const version = \"2.0.0\";' }, { type: 'same', content: '' }, { type: 'same', content: 'export default function App() {' }, { type: 'remove', content: '  return <div>Old UI</div>;' }, { type: 'add', content: '  return <div>New UI v2</div>;' }, { type: 'same', content: '}' }] }" class="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
  <div class="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-white/5">
    <span class="text-xs font-medium text-gray-500">Changes</span>
    <div class="flex gap-2"><span class="text-xs text-green-600">+2</span><span class="text-xs text-red-600">-2</span></div>
  </div>
  <div class="divide-y divide-gray-100 dark:divide-white/5">
    <template x-for="(line, i) in diffLines" :key="i">
      <div class="flex font-mono text-xs" :class="line.type === 'add' ? 'bg-green-50' : line.type === 'remove' ? 'bg-red-50' : ''">
        <span class="w-8 shrink-0 select-none px-2 py-1 text-center text-gray-400" x-text="line.type === 'add' ? '+' : line.type === 'remove' ? '−' : ' '"></span>
        <span class="px-2 py-1" :class="line.type === 'add' ? 'text-green-700' : line.type === 'remove' ? 'text-red-700' : 'text-gray-700'" x-text="line.content"></span>
      </div>
    </template>
  </div>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const markdownPreviewSource: ComponentSourceData = {
  component: 'Markdown Preview',
  slug: 'markdown-preview',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A live markdown editor with split-pane preview rendering.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MarkdownPreview.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useMemo } from 'react';
import { Eye, Code } from 'lucide-react';

function parseMd(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-900 dark:text-white">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-gray-900 dark:text-white">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-gray-900 dark:text-white">$1</h1>')
    .replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*(.+?)\\*/g, '<em>$1</em>')
    .replace(/\\\`(.+?)\\\`/g, '<code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono dark:bg-white/10">$1</code>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-gray-700 dark:text-gray-300">$1</li>')
    .replace(/\\n/g, '<br/>');
}

const defaultMd = '# Hello World\\n\\nThis is **markdown** with *italic* and \\\`code\\\`.\\n\\n- Item one\\n- Item two';

export default function MarkdownPreview() {
  const [md, setMd] = useState(defaultMd);
  const [tab, setTab] = useState<'edit' | 'preview'>('edit');
  const html = useMemo(() => parseMd(md), [md]);

  return (
    <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
      <div className="flex border-b border-gray-200 dark:border-white/5">
        <button onClick={() => setTab('edit')} className={'flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium ' + (tab === 'edit' ? 'border-b-2 border-brand-500 text-brand-600' : 'text-gray-500')}><Code className="size-4" /> Edit</button>
        <button onClick={() => setTab('preview')} className={'flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium ' + (tab === 'preview' ? 'border-b-2 border-brand-500 text-brand-600' : 'text-gray-500')}><Eye className="size-4" /> Preview</button>
      </div>
      {tab === 'edit' ? (
        <textarea value={md} onChange={(e) => setMd(e.target.value)} className="min-h-[200px] w-full bg-transparent px-4 py-3 text-sm font-mono text-gray-900 outline-none dark:text-white" />
      ) : (
        <div className="px-4 py-3 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'markdown-preview/page.tsx',
      code: `'use client';

import MarkdownPreview from '@/components/mtverse/extended-ui/MarkdownPreview';

export default function MarkdownPreviewPage() {
  return <MarkdownPreview />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MarkdownPreview.vue',
      code: `<template>
  <div class="w-full max-w-2xl rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
    <div class="flex border-b border-gray-200 dark:border-white/5">
      <button @click="tab = 'edit'" class="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium" :class="tab === 'edit' ? 'border-b-2 border-brand-500 text-brand-600' : 'text-gray-500'"><Code class="size-4" /> Edit</button>
      <button @click="tab = 'preview'" class="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium" :class="tab === 'preview' ? 'border-b-2 border-brand-500 text-brand-600' : 'text-gray-500'"><Eye class="size-4" /> Preview</button>
    </div>
    <textarea v-if="tab === 'edit'" v-model="md" class="min-h-[200px] w-full bg-transparent px-4 py-3 text-sm font-mono text-gray-900 outline-none dark:text-white" />
    <div v-else class="px-4 py-3 text-sm leading-relaxed" v-html="html" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Eye, Code } from 'lucide-vue-next';

const tab = ref<'edit' | 'preview'>('edit');
const md = ref('# Hello World\\n\\nThis is **markdown** with *italic* and \\\`code\\\`.\\n\\n- Item one\\n- Item two');

function parseMd(text: string): string {
  return text.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold">$1</h1>').replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>').replace(/\\*(.+?)\\*/g, '<em>$1</em>').replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\\n/g, '<br/>');
}

const html = computed(() => parseMd(md.value));
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'markdown-preview.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown-preview',
  template: \`
    <div class="w-full max-w-2xl rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
      <div class="flex border-b border-gray-200 dark:border-white/5">
        <button (click)="tab = 'edit'" [class.border-b-2]="tab === 'edit'" [class.border-brand-500]="tab === 'edit'" [class.text-brand-600]="tab === 'edit'" class="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium">Edit</button>
        <button (click)="tab = 'preview'" [class.border-b-2]="tab === 'preview'" [class.border-brand-500]="tab === 'preview'" [class.text-brand-600]="tab === 'preview'" class="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium">Preview</button>
      </div>
      <textarea *ngIf="tab === 'edit'" [(ngModel)]="md" class="min-h-[200px] w-full bg-transparent px-4 py-3 text-sm font-mono outline-none dark:text-white"></textarea>
      <div *ngIf="tab === 'preview'" class="px-4 py-3 text-sm" [innerHTML]="html"></div>
    </div>
  \`
})
export class MarkdownPreviewComponent {
  tab: 'edit' | 'preview' = 'edit';
  md = '# Hello World\\n\\nThis is **markdown** with *italic* and \\\`code\\\`.\\n\\n- Item one\\n- Item two';
  get html() {
    return this.md.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold">$1</h1>').replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>').replace(/\\*(.+?)\\*/g, '<em>$1</em>').replace(/\\n/g, '<br/>');
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'markdown-preview.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ tab: 'edit', md: '# Hello World\\n\\nThis is **markdown** with *italic* and \\\`code\\\`.\\n\\n- Item one\\n- Item two', get html() { return this.md.replace(/^# (.+)$/gm, '<h1 class=\\'text-2xl font-bold\\'>$1</h1>').replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>').replace(/\\*(.+?)\\*/g, '<em>$1</em>').replace(/\\n/g, '<br/>'); } }" class="w-full max-w-2xl rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
  <div class="flex border-b border-gray-200 dark:border-white/5">
    <button @click="tab = 'edit'" class="px-4 py-2.5 text-sm font-medium" :class="tab === 'edit' ? 'border-b-2 border-brand-500 text-brand-600' : 'text-gray-500'">Edit</button>
    <button @click="tab = 'preview'" class="px-4 py-2.5 text-sm font-medium" :class="tab === 'preview' ? 'border-b-2 border-brand-500 text-brand-600' : 'text-gray-500'">Preview</button>
  </div>
  <textarea x-show="tab === 'edit'" x-model="md" class="min-h-[200px] w-full bg-transparent px-4 py-3 text-sm font-mono outline-none dark:text-white"></textarea>
  <div x-show="tab === 'preview'" class="px-4 py-3 text-sm leading-relaxed" x-html="html"></div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'markdown-preview.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ tab: 'edit', md: '# Hello World\\n\\nThis is **markdown** with *italic* and \\\`code\\\`.\\n\\n- Item one\\n- Item two', get html() { return this.md.replace(/^# (.+)$/gm, '<h1 class=\\'text-2xl font-bold\\'>$1</h1>').replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>').replace(/\\*(.+?)\\*/g, '<em>$1</em>').replace(/\\n/g, '<br/>'); } }" class="w-full max-w-2xl rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
  <div class="flex border-b border-gray-200 dark:border-white/5">
    <button @click="tab = 'edit'" class="px-4 py-2.5 text-sm font-medium" :class="tab === 'edit' ? 'border-b-2 border-brand-500 text-brand-600' : 'text-gray-500'">Edit</button>
    <button @click="tab = 'preview'" class="px-4 py-2.5 text-sm font-medium" :class="tab === 'preview' ? 'border-b-2 border-brand-500 text-brand-600' : 'text-gray-500'">Preview</button>
  </div>
  <textarea x-show="tab === 'edit'" x-model="md" class="min-h-[200px] w-full bg-transparent px-4 py-3 text-sm font-mono outline-none dark:text-white"></textarea>
  <div x-show="tab === 'preview'" class="px-4 py-3 text-sm leading-relaxed" x-html="html"></div>
</div>`,
    },
  },
};

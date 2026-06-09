import { ComponentSourceData } from '../types';

export const richTextEditorSource: ComponentSourceData = {
  component: 'Rich Text Editor',
  slug: 'rich-text-editor',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A WYSIWYG rich text editor with formatting toolbar and content output.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'RichTextEditor.tsx',
      code: `// React + TypeScript implementation
import React, { useRef, useState } from 'react';
import { Bold, Italic, Underline, List, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export default function RichTextEditor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState('<p>Start typing...</p>');

  const exec = (cmd: string, val?: string) => {
    document.execCommand(cmd, false, val);
    editorRef.current?.focus();
  };

  const tools = [
    { icon: Bold, cmd: 'bold', tip: 'Bold' },
    { icon: Italic, cmd: 'italic', tip: 'Italic' },
    { icon: Underline, cmd: 'underline', tip: 'Underline' },
    { icon: List, cmd: 'insertUnorderedList', tip: 'List' },
    { icon: AlignLeft, cmd: 'justifyLeft', tip: 'Left' },
    { icon: AlignCenter, cmd: 'justifyCenter', tip: 'Center' },
    { icon: AlignRight, cmd: 'justifyRight', tip: 'Right' },
  ];

  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 px-2 py-1.5 dark:border-white/5">
        {tools.map((t) => (
          <button key={t.cmd} onClick={() => exec(t.cmd)} title={t.tip} className="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/5 dark:hover:text-gray-300">
            <t.icon className="size-4" />
          </button>
        ))}
      </div>
      <div ref={editorRef} contentEditable suppressContentEditableWarning onInput={() => setHtml(editorRef.current?.innerHTML ?? '')} className="min-h-[150px] px-4 py-3 text-sm text-gray-900 outline-none dark:text-white" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="border-t border-gray-200 px-4 py-2 dark:border-white/5">
        <p className="text-xs text-gray-400">{html.replace(/<[^>]*>/g, '').length} characters</p>
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'rich-text-editor/page.tsx',
      code: `'use client';

import RichTextEditor from '@/components/mtverse/extended-ui/RichTextEditor';

export default function RichTextEditorPage() {
  return <RichTextEditor />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'RichTextEditor.vue',
      code: `<template>
  <div class="w-full max-w-lg rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
    <div class="flex flex-wrap items-center gap-0.5 border-b border-gray-200 px-2 py-1.5 dark:border-white/5">
      <button v-for="t in tools" :key="t.cmd" @click="exec(t.cmd)" :title="t.tip" class="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/5">
        <component :is="t.icon" class="size-4" />
      </button>
    </div>
    <div ref="editorRef" contenteditable @input="onInput" class="min-h-[150px] px-4 py-3 text-sm text-gray-900 outline-none dark:text-white" v-html="html" />
    <div class="border-t border-gray-200 px-4 py-2 dark:border-white/5">
      <p class="text-xs text-gray-400">{{ charCount }} characters</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Bold, Italic, Underline, List, AlignLeft, AlignCenter, AlignRight } from 'lucide-vue-next';

const html = ref('<p>Start typing...</p>');
const editorRef = ref<HTMLElement | null>(null);
const tools = [
  { icon: Bold, cmd: 'bold', tip: 'Bold' },
  { icon: Italic, cmd: 'italic', tip: 'Italic' },
  { icon: Underline, cmd: 'underline', tip: 'Underline' },
  { icon: List, cmd: 'insertUnorderedList', tip: 'List' },
  { icon: AlignLeft, cmd: 'justifyLeft', tip: 'Left' },
  { icon: AlignCenter, cmd: 'justifyCenter', tip: 'Center' },
  { icon: AlignRight, cmd: 'justifyRight', tip: 'Right' },
];

const charCount = computed(() => html.value.replace(/<[^>]*>/g, '').length);

function exec(cmd: string) { document.execCommand(cmd, false); editorRef.value?.focus(); }
function onInput() { if (editorRef.value) html.value = editorRef.value.innerHTML; }
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'rich-text-editor.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  template: \`
    <div class="w-full max-w-lg rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
      <div class="flex flex-wrap items-center gap-0.5 border-b border-gray-200 px-2 py-1.5 dark:border-white/5">
        <button *ngFor="let t of tools" (click)="exec(t.cmd)" [title]="t.tip" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700">{{ t.label }}</button>
      </div>
      <div [contentEditable]="true" (input)="onInput($event)" class="min-h-[150px] px-4 py-3 text-sm text-gray-900 outline-none dark:text-white" [innerHTML]="html"></div>
      <div class="border-t border-gray-200 px-4 py-2 dark:border-white/5">
        <p class="text-xs text-gray-400">{{ charCount }} characters</p>
      </div>
    </div>
  \`
})
export class RichTextEditorComponent {
  html = '<p>Start typing...</p>';
  tools = [
    { label: 'B', cmd: 'bold', tip: 'Bold' },
    { label: 'I', cmd: 'italic', tip: 'Italic' },
    { label: 'U', cmd: 'underline', tip: 'Underline' },
    { label: '•', cmd: 'insertUnorderedList', tip: 'List' },
  ];
  get charCount() { return this.html.replace(/<[^>]*>/g, '').length; }
  exec(cmd: string) { document.execCommand(cmd, false); }
  onInput(e: Event) { this.html = (e.target as HTMLElement).innerHTML; }
}`,
    },
    html: {
      language: 'html',
      filename: 'rich-text-editor.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ html: '<p>Start typing...</p>', exec(cmd) { document.execCommand(cmd, false); }, get charCount() { return this.html.replace(/<[^>]*>/g, '').length; } }" class="w-full max-w-lg rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
  <div class="flex flex-wrap items-center gap-0.5 border-b border-gray-200 px-2 py-1.5 dark:border-white/5">
    <button @click="exec('bold')" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 font-bold">B</button>
    <button @click="exec('italic')" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 italic">I</button>
    <button @click="exec('underline')" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 underline">U</button>
    <button @click="exec('insertUnorderedList')" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100">•</button>
  </div>
  <div contenteditable @input="html = $event.target.innerHTML" x-html="html" class="min-h-[150px] px-4 py-3 text-sm text-gray-900 outline-none dark:text-white"></div>
  <div class="border-t border-gray-200 px-4 py-2 dark:border-white/5">
    <p class="text-xs text-gray-400" x-text="charCount + ' characters'"></p>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'rich-text-editor.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ html: '<p>Start typing...</p>', exec(cmd) { document.execCommand(cmd, false); }, get charCount() { return this.html.replace(/<[^>]*>/g, '').length; } }" class="w-full max-w-lg rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
  <div class="flex flex-wrap items-center gap-0.5 border-b border-gray-200 px-2 py-1.5 dark:border-white/5">
    <button @click="exec('bold')" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 font-bold">B</button>
    <button @click="exec('italic')" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 italic">I</button>
    <button @click="exec('underline')" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 underline">U</button>
    <button @click="exec('insertUnorderedList')" class="rounded-md p-1.5 text-gray-500 hover:bg-gray-100">•</button>
  </div>
  <div contenteditable @input="html = $event.target.innerHTML" x-html="html" class="min-h-[150px] px-4 py-3 text-sm text-gray-900 outline-none dark:text-white"></div>
  <div class="border-t border-gray-200 px-4 py-2 dark:border-white/5">
    <p class="text-xs text-gray-400" x-text="charCount + ' characters'"></p>
  </div>
</div>`,
    },
  },
};

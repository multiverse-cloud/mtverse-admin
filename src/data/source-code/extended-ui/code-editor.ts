import { ComponentSourceData } from '../types';

export const codeEditorSource: ComponentSourceData = {
  component: 'Code Editor',
  slug: 'code-editor',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A lightweight code editor with syntax highlighting and line numbers.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'CodeEditor.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const defaultCode = \`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);\`;

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);
  const [copied, setCopied] = useState(false);
  const lines = code.split('\\n');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-gray-900 dark:border-white/10">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span className="text-xs font-medium text-gray-400">typescript</span>
        <button onClick={handleCopy} className="text-gray-400 hover:text-gray-200">
          {copied ? <Check className="size-4 text-green-400" /> : <Copy className="size-4" />}
        </button>
      </div>
      <div className="flex">
        <div className="select-none border-r border-gray-700 px-3 py-3 text-right font-mono text-xs text-gray-600">
          {lines.map((_, i) => <div key={i}>{i + 1}</div>)}
        </div>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false} className="flex-1 resize-none bg-transparent px-4 py-3 font-mono text-xs text-green-300 outline-none" />
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'code-editor/page.tsx',
      code: `'use client';

import CodeEditor from '@/components/mtverse/extended-ui/CodeEditor';

export default function CodeEditorPage() {
  return <CodeEditor />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'CodeEditor.vue',
      code: `<template>
  <div class="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-gray-900 dark:border-white/10">
    <div class="flex items-center justify-between border-b border-gray-700 px-4 py-2">
      <span class="text-xs font-medium text-gray-400">typescript</span>
      <button @click="handleCopy" class="text-gray-400 hover:text-gray-200">
        <Check v-if="copied" class="size-4 text-green-400" />
        <Copy v-else class="size-4" />
      </button>
    </div>
    <div class="flex">
      <div class="select-none border-r border-gray-700 px-3 py-3 text-right font-mono text-xs text-gray-600">
        <div v-for="(_, i) in lines" :key="i">{{ i + 1 }}</div>
      </div>
      <textarea v-model="code" spellcheck="false" class="flex-1 resize-none bg-transparent px-4 py-3 font-mono text-xs text-green-300 outline-none" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Copy, Check } from 'lucide-vue-next';

const code = ref('function greet(name: string): string {\\n  return \`Hello, \${name}!\`;\\n}\\n\\nconst message = greet("World");\\nconsole.log(message);');
const copied = ref(false);
const lines = computed(() => code.value.split('\\n'));

async function handleCopy() {
  await navigator.clipboard.writeText(code.value);
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 2000);
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'code-editor.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  template: \`
    <div class="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-gray-900 dark:border-white/10">
      <div class="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span class="text-xs font-medium text-gray-400">typescript</span>
        <button (click)="copyCode()" class="text-gray-400 hover:text-gray-200">
          {{ copied ? '✓' : 'Copy' }}
        </button>
      </div>
      <div class="flex">
        <div class="select-none border-r border-gray-700 px-3 py-3 text-right font-mono text-xs text-gray-600">
          <div *ngFor="let _ of lines; let i = index">{{ i + 1 }}</div>
        </div>
        <textarea [(ngModel)]="code" spellcheck="false" class="flex-1 resize-none bg-transparent px-4 py-3 font-mono text-xs text-green-300 outline-none"></textarea>
      </div>
    </div>
  \`
})
export class CodeEditorComponent {
  code = 'function greet(name: string): string {\\n  return \`Hello, \${name}!\`;\\n}\\n\\nconst message = greet("World");\\nconsole.log(message);';
  copied = false;
  get lines() { return this.code.split('\\n'); }

  async copyCode() {
    await navigator.clipboard.writeText(this.code);
    this.copied = true;
    setTimeout(() => { this.copied = false; }, 2000);
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'code-editor.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ code: 'function greet(name) {\\n  return \`Hello, \${name}!\`;\\n}', copied: false, get lines() { return this.code.split('\\n'); }, async copyCode() { await navigator.clipboard.writeText(this.code); this.copied = true; setTimeout(() => { this.copied = false; }, 2000); } }" class="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-gray-900 dark:border-white/10">
  <div class="flex items-center justify-between border-b border-gray-700 px-4 py-2">
    <span class="text-xs font-medium text-gray-400">javascript</span>
    <button @click="copyCode()" class="text-xs text-gray-400 hover:text-gray-200" x-text="copied ? 'Copied!' : 'Copy'"></button>
  </div>
  <div class="flex">
    <div class="select-none border-r border-gray-700 px-3 py-3 text-right font-mono text-xs text-gray-600">
      <template x-for="(_, i) in lines" :key="i">
        <div x-text="i + 1"></div>
      </template>
    </div>
    <textarea x-model="code" spellcheck="false" class="flex-1 resize-none bg-transparent px-4 py-3 font-mono text-xs text-green-300 outline-none"></textarea>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'code-editor.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ code: 'function greet(name) {\\n  return \`Hello, \${name}!\`;\\n}', copied: false, get lines() { return this.code.split('\\n'); }, async copyCode() { await navigator.clipboard.writeText(this.code); this.copied = true; setTimeout(() => { this.copied = false; }, 2000); } }" class="w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-gray-900 dark:border-white/10">
  <div class="flex items-center justify-between border-b border-gray-700 px-4 py-2">
    <span class="text-xs font-medium text-gray-400">javascript</span>
    <button @click="copyCode()" class="text-xs text-gray-400 hover:text-gray-200" x-text="copied ? 'Copied!' : 'Copy'"></button>
  </div>
  <div class="flex">
    <div class="select-none border-r border-gray-700 px-3 py-3 text-right font-mono text-xs text-gray-600">
      <template x-for="(_, i) in lines" :key="i">
        <div x-text="i + 1"></div>
      </template>
    </div>
    <textarea x-model="code" spellcheck="false" class="flex-1 resize-none bg-transparent px-4 py-3 font-mono text-xs text-green-300 outline-none"></textarea>
  </div>
</div>`,
    },
  },
};

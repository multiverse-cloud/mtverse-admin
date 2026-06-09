import { ComponentSourceData } from '../types';

export const codeBlockSource: ComponentSourceData = {
  component: 'Code Block',
  slug: 'code-block',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Code block components for displaying formatted source code snippets with syntax highlighting and copy functionality.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'CodeBlockSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

function CodeBlock({ code, language = 'tsx', filename, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\\n');

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
      {filename && (
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{filename}</span>
          <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-medium uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">{language}</span>
        </div>
      )}
      <div className="relative bg-gray-900 p-4">
        <button
          onClick={copyToClipboard}
          className="absolute right-3 top-3 rounded-lg bg-gray-800 px-2.5 py-1.5 text-xs text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
        <pre className="overflow-x-auto text-sm leading-relaxed">
          <code className="text-gray-100">
            {lines.map((line, i) => (
              <div key={i} className="flex">
                {showLineNumbers && (
                  <span className="mr-4 inline-block w-6 select-none text-right text-gray-600">{i + 1}</span>
                )}
                <span>{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function CodeBlockSection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">With Filename</p>
        <CodeBlock
          code="function greet(name: string) {\\n  return \\"Hello, \\" + name + \\"!\\";\\n}\\n\\nconsole.log(greet(\\"World\\"));"
          language="typescript"
          filename="greet.ts"
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Simple Block</p>
        <CodeBlock
          code="npm install @mtverse/ui\\nnpm run dev"
          language="bash"
          showLineNumbers={false}
        />
      </div>
    </div>
  );
}

export default CodeBlockSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'code-block/page.tsx',
      code: `'use client';

import CodeBlockSection from '@/components/mtverse/ui-elements/CodeBlockSection';

export default function CodeBlockPage() {
  return <CodeBlockSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'CodeBlockSection.vue',
      code: `<template>
  <div class="space-y-6">
    <div>
      <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">With Filename</p>
      <div class="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
          <span class="text-xs font-medium text-gray-600 dark:text-gray-400">greet.ts</span>
          <span class="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-medium uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">typescript</span>
        </div>
        <div class="relative bg-gray-900 p-4">
          <button @click="copyCode" class="absolute right-3 top-3 rounded-lg bg-gray-800 px-2.5 py-1.5 text-xs text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
            {{ copied ? '✓ Copied' : 'Copy' }}
          </button>
          <pre class="overflow-x-auto text-sm leading-relaxed"><code class="text-gray-100"><div v-for="(line, i) in codeLines" :key="i" class="flex"><span class="mr-4 inline-block w-6 select-none text-right text-gray-600">{{ i + 1 }}</span><span>{{ line }}</span></div></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const copied = ref(false);
const code = \`function greet(name: string) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));\`;

const codeLines = computed(() => code.split('\\n'));

const copyCode = async () => {
  await navigator.clipboard.writeText(code);
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 2000);
};
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'code-block.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-code-block',
  template: \`
    <div class="space-y-6">
      <div>
        <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">With Filename</p>
        <div class="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
            <span class="text-xs font-medium text-gray-600 dark:text-gray-400">{{ filename }}</span>
            <span class="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-medium uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">{{ language }}</span>
          </div>
          <div class="relative bg-gray-900 p-4">
            <button (click)="copyCode()" class="absolute right-3 top-3 rounded-lg bg-gray-800 px-2.5 py-1.5 text-xs text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
              {{ copied ? '✓ Copied' : 'Copy' }}
            </button>
            <pre class="overflow-x-auto text-sm leading-relaxed"><code class="text-gray-100"><div *ngFor="let line of lines; let i = index" class="flex"><span class="mr-4 inline-block w-6 select-none text-right text-gray-600">{{ i + 1 }}</span><span>{{ line }}</span></div></code></pre>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class CodeBlockComponent {
  filename = 'greet.ts';
  language = 'typescript';
  copied = false;
  code = \`function greet(name: string) {\\n  return "Hello, " + name + "!";\\n}\\n\\nconsole.log(greet("World"));\`;
  lines = this.code.split('\\n');

  async copyCode() {
    await navigator.clipboard.writeText(this.code);
    this.copied = true;
    setTimeout(() => { this.copied = false; }, 2000);
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'code-block.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ copied: false, copyCode() { navigator.clipboard.writeText(this.\\$refs.code.textContent); this.copied = true; setTimeout(() => this.copied = false, 2000); } }">
  <div class="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
      <span class="text-xs font-medium text-gray-600 dark:text-gray-400">greet.ts</span>
      <span class="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-medium uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">typescript</span>
    </div>
    <div class="relative bg-gray-900 p-4">
      <button @click="copyCode()" class="absolute right-3 top-3 rounded-lg bg-gray-800 px-2.5 py-1.5 text-xs text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
        <span x-text="copied ? '✓ Copied' : 'Copy'"></span>
      </button>
      <pre class="overflow-x-auto text-sm leading-relaxed"><code class="text-gray-100" x-ref="code">function greet(name: string) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));</code></pre>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'code-block.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ copied: false, copyCode() { navigator.clipboard.writeText(this.\\$refs.code.textContent); this.copied = true; setTimeout(() => this.copied = false, 2000); } }">
  <div class="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
      <span class="text-xs font-medium text-gray-600 dark:text-gray-400">{{ $filename ?? 'example.ts' }}</span>
      <span class="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-medium uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">{{ $language ?? 'typescript' }}</span>
    </div>
    <div class="relative bg-gray-900 p-4">
      <button @click="copyCode()" class="absolute right-3 top-3 rounded-lg bg-gray-800 px-2.5 py-1.5 text-xs text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
        <span x-text="copied ? '✓ Copied' : 'Copy'"></span>
      </button>
      <pre class="overflow-x-auto text-sm leading-relaxed"><code class="text-gray-100" x-ref="code">{{ $code ?? '' }}</code></pre>
    </div>
  </div>
</div>`,
    },
  },
};

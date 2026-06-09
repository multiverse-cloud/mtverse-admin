import { ComponentSourceData } from '../types';

export const copyToClipboardSource: ComponentSourceData = {
  component: 'Copy to Clipboard',
  slug: 'copy-to-clipboard',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A button that copies text to the clipboard with visual feedback on success.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'CopyToClipboard.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyToClipboardProps {
  text: string;
  label?: string;
}

export default function CopyToClipboard({ text, label = 'Copy' }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button onClick={handleCopy} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
      {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
      <span>{copied ? 'Copied!' : label}</span>
    </button>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'copy-to-clipboard/page.tsx',
      code: `'use client';

import CopyToClipboard from '@/components/mtverse/extended-ui/CopyToClipboard';

export default function CopyToClipboardPage() {
  return <CopyToClipboard text="Hello, World!" label="Copy" />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'CopyToClipboard.vue',
      code: `<template>
  <button @click="handleCopy" class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
    <Check v-if="copied" class="size-4 text-green-500" />
    <Copy v-else class="size-4" />
    <span>{{ copied ? 'Copied!' : label }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Copy, Check } from 'lucide-vue-next';

const props = withDefaults(defineProps<{ text: string; label?: string }>(), { label: 'Copy' });
const copied = ref(false);

async function handleCopy() {
  await navigator.clipboard.writeText(props.text);
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 2000);
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'copy-to-clipboard.component.ts',
      code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-to-clipboard',
  template: \`
    <button (click)="handleCopy()" class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
      <svg *ngIf="copied" class="size-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <svg *ngIf="!copied" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      <span>{{ copied ? 'Copied!' : label }}</span>
    </button>
  \`
})
export class CopyToClipboardComponent {
  @Input() text = '';
  @Input() label = 'Copy';
  copied = false;

  async handleCopy() {
    await navigator.clipboard.writeText(this.text);
    this.copied = true;
    setTimeout(() => { this.copied = false; }, 2000);
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'copy-to-clipboard.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ copied: false, async handleCopy(text) { await navigator.clipboard.writeText(text); this.copied = true; setTimeout(() => { this.copied = false; }, 2000); } }">
  <button @click="handleCopy('Hello, World!')" class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
    <svg x-show="!copied" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    <svg x-show="copied" class="size-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span x-text="copied ? 'Copied!' : 'Copy'"></span>
  </button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'copy-to-clipboard.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ copied: false, async handleCopy(text) { await navigator.clipboard.writeText(text); this.copied = true; setTimeout(() => { this.copied = false; }, 2000); } }">
  <button @click="handleCopy('Hello, World!')" class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
    <svg x-show="!copied" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    <svg x-show="copied" class="size-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span x-text="copied ? 'Copied!' : 'Copy'"></span>
  </button>
</div>`,
    },
  },
};

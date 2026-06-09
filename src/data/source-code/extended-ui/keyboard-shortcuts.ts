import { ComponentSourceData } from '../types';

export const keyboardShortcutsSource: ComponentSourceData = {
  component: 'Keyboard Shortcuts',
  slug: 'keyboard-shortcuts',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A keyboard shortcuts display and manager component with customizable key bindings.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'KeyboardShortcuts.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { Keyboard } from 'lucide-react';

const shortcuts = [
  { action: 'Search', keys: ['Ctrl', 'K'] },
  { action: 'Save', keys: ['Ctrl', 'S'] },
  { action: 'Undo', keys: ['Ctrl', 'Z'] },
  { action: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { action: 'Bold', keys: ['Ctrl', 'B'] },
  { action: 'Italic', keys: ['Ctrl', 'I'] },
];

export default function KeyboardShortcuts() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? shortcuts : shortcuts.slice(0, 3);

  return (
    <div className="w-80 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <div className="mb-3 flex items-center gap-2">
        <Keyboard className="size-4 text-gray-400" />
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Keyboard Shortcuts</h3>
      </div>
      <div className="space-y-2">
        {visible.map((s) => (
          <div key={s.action} className="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-white/5">
            <span className="text-sm text-gray-700 dark:text-gray-300">{s.action}</span>
            <div className="flex items-center gap-1">
              {s.keys.map((key, i) => (
                <React.Fragment key={key}>
                  <kbd className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-mono text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">{key}</kbd>
                  {i < s.keys.length - 1 && <span className="text-xs text-gray-400">+</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setShowAll(!showAll)} className="mt-2 text-xs font-medium text-brand-500 hover:text-brand-600">{showAll ? 'Show less' : \`Show all (\${shortcuts.length})\`}</button>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'keyboard-shortcuts/page.tsx',
      code: `'use client';

import KeyboardShortcuts from '@/components/mtverse/extended-ui/KeyboardShortcuts';

export default function KeyboardShortcutsPage() {
  return <KeyboardShortcuts />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'KeyboardShortcuts.vue',
      code: `<template>
  <div class="w-80 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <div class="mb-3 flex items-center gap-2">
      <Keyboard class="size-4 text-gray-400" />
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Keyboard Shortcuts</h3>
    </div>
    <div class="space-y-2">
      <div v-for="s in visible" :key="s.action" class="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-white/5">
        <span class="text-sm text-gray-700 dark:text-gray-300">{{ s.action }}</span>
        <div class="flex items-center gap-1">
          <template v-for="(key, i) in s.keys" :key="key">
            <kbd class="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-mono text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">{{ key }}</kbd>
            <span v-if="i < s.keys.length - 1" class="text-xs text-gray-400">+</span>
          </template>
        </div>
      </div>
    </div>
    <button @click="showAll = !showAll" class="mt-2 text-xs font-medium text-brand-500 hover:text-brand-600">{{ showAll ? 'Show less' : 'Show all (' + shortcuts.length + ')' }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Keyboard } from 'lucide-vue-next';

const showAll = ref(false);
const shortcuts = [
  { action: 'Search', keys: ['Ctrl', 'K'] },
  { action: 'Save', keys: ['Ctrl', 'S'] },
  { action: 'Undo', keys: ['Ctrl', 'Z'] },
  { action: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { action: 'Bold', keys: ['Ctrl', 'B'] },
  { action: 'Italic', keys: ['Ctrl', 'I'] },
];
const visible = computed(() => showAll.value ? shortcuts : shortcuts.slice(0, 3));
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'keyboard-shortcuts.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-shortcuts',
  template: \`
    <div class="w-80 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <h3 class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Keyboard Shortcuts</h3>
      <div class="space-y-2">
        <div *ngFor="let s of visible" class="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-white/5">
          <span class="text-sm text-gray-700 dark:text-gray-300">{{ s.action }}</span>
          <div class="flex items-center gap-1">
            <ng-container *ngFor="let key of s.keys; let i = index">
              <kbd class="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-mono text-gray-600">{{ key }}</kbd>
              <span *ngIf="i < s.keys.length - 1" class="text-xs text-gray-400">+</span>
            </ng-container>
          </div>
        </div>
      </div>
      <button (click)="showAll = !showAll" class="mt-2 text-xs font-medium text-brand-500">{{ showAll ? 'Show less' : 'Show all (' + shortcuts.length + ')' }}</button>
    </div>
  \`
})
export class KeyboardShortcutsComponent {
  showAll = false;
  shortcuts = [
    { action: 'Search', keys: ['Ctrl', 'K'] },
    { action: 'Save', keys: ['Ctrl', 'S'] },
    { action: 'Undo', keys: ['Ctrl', 'Z'] },
    { action: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
    { action: 'Bold', keys: ['Ctrl', 'B'] },
    { action: 'Italic', keys: ['Ctrl', 'I'] },
  ];
  get visible() { return this.showAll ? this.shortcuts : this.shortcuts.slice(0, 3); }
}`,
    },
    html: {
      language: 'html',
      filename: 'keyboard-shortcuts.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ showAll: false, shortcuts: [{ action: 'Search', keys: ['Ctrl', 'K'] }, { action: 'Save', keys: ['Ctrl', 'S'] }, { action: 'Undo', keys: ['Ctrl', 'Z'] }, { action: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] }, { action: 'Bold', keys: ['Ctrl', 'B'] }, { action: 'Italic', keys: ['Ctrl', 'I'] }], get visible() { return this.showAll ? this.shortcuts : this.shortcuts.slice(0, 3); } }" class="w-80 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <h3 class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Keyboard Shortcuts</h3>
  <div class="space-y-2">
    <template x-for="s in visible" :key="s.action">
      <div class="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-white/5">
        <span class="text-sm text-gray-700 dark:text-gray-300" x-text="s.action"></span>
        <div class="flex items-center gap-1">
          <template x-for="(key, i) in s.keys" :key="key">
            <span class="contents">
              <kbd class="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-mono text-gray-600" x-text="key"></kbd>
              <span x-show="i < s.keys.length - 1" class="text-xs text-gray-400">+</span>
            </span>
          </template>
        </div>
      </div>
    </template>
  </div>
  <button @click="showAll = !showAll" class="mt-2 text-xs font-medium text-brand-500" x-text="showAll ? 'Show less' : 'Show all (' + shortcuts.length + ')'"></button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'keyboard-shortcuts.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ showAll: false, shortcuts: [{ action: 'Search', keys: ['Ctrl', 'K'] }, { action: 'Save', keys: ['Ctrl', 'S'] }, { action: 'Undo', keys: ['Ctrl', 'Z'] }, { action: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] }, { action: 'Bold', keys: ['Ctrl', 'B'] }, { action: 'Italic', keys: ['Ctrl', 'I'] }], get visible() { return this.showAll ? this.shortcuts : this.shortcuts.slice(0, 3); } }" class="w-80 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <h3 class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Keyboard Shortcuts</h3>
  <div class="space-y-2">
    <template x-for="s in visible" :key="s.action">
      <div class="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-white/5">
        <span class="text-sm text-gray-700 dark:text-gray-300" x-text="s.action"></span>
        <div class="flex items-center gap-1">
          <template x-for="(key, i) in s.keys" :key="key">
            <span class="contents">
              <kbd class="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-mono text-gray-600" x-text="key"></kbd>
              <span x-show="i < s.keys.length - 1" class="text-xs text-gray-400">+</span>
            </span>
          </template>
        </div>
      </div>
    </template>
  </div>
  <button @click="showAll = !showAll" class="mt-2 text-xs font-medium text-brand-500" x-text="showAll ? 'Show less' : 'Show all (' + shortcuts.length + ')'"></button>
</div>`,
    },
  },
};

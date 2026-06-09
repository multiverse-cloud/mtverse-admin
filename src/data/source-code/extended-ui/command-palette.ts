import { ComponentSourceData } from '../types';

export const commandPaletteSource: ComponentSourceData = {
  component: 'Command Palette',
  slug: 'command-palette',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A keyboard-activated command palette for quick navigation and search.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'CommandPalette.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useEffect } from 'react';
import { Search, Command } from 'lucide-react';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const commands = ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Products'];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(true); }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = commands.filter((c) => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <button onClick={() => setOpen(true)} className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500 dark:border-white/10 dark:bg-white/5">
        <Search className="size-4" />
        <span className="flex-1 text-left">Search commands...</span>
        <kbd className="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-mono dark:bg-white/10">Ctrl+K</kbd>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-xl dark:border-white/5 dark:bg-gray-800">
            <div className="flex items-center border-b border-gray-200 px-4 dark:border-white/5">
              <Search className="size-4 text-gray-400" />
              <input className="flex-1 bg-transparent px-3 py-3 text-sm outline-none" placeholder="Type a command..." value={query} onChange={(e) => setQuery(e.target.value)} autoFocus />
            </div>
            <div className="max-h-64 overflow-y-auto p-2">
              {filtered.map((cmd) => (
                <button key={cmd} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5" onClick={() => setOpen(false)}>
                  <Command className="size-4 text-gray-400" />{cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'command-palette/page.tsx',
      code: `'use client';

import CommandPalette from '@/components/mtverse/extended-ui/CommandPalette';

export default function CommandPalettePage() {
  return <CommandPalette />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'CommandPalette.vue',
      code: `<template>
  <div>
    <button @click="open = true" class="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500 dark:border-white/10 dark:bg-white/5">
      <Search class="size-4" />
      <span class="flex-1 text-left">Search commands...</span>
      <kbd class="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-mono dark:bg-white/10">Ctrl+K</kbd>
    </button>
    <div v-if="open" class="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div class="absolute inset-0 bg-black/30" @click="open = false" />
      <div class="relative z-10 w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-xl dark:border-white/5 dark:bg-gray-800">
        <div class="flex items-center border-b border-gray-200 px-4 dark:border-white/5">
          <Search class="size-4 text-gray-400" />
          <input class="flex-1 bg-transparent px-3 py-3 text-sm outline-none" placeholder="Type a command..." v-model="query" ref="inputRef" />
        </div>
        <div class="max-h-64 overflow-y-auto p-2">
          <button v-for="cmd in filtered" :key="cmd" class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5" @click="open = false">{{ cmd }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Search } from 'lucide-vue-next';

const open = ref(false);
const query = ref('');
const inputRef = ref<HTMLInputElement | null>(null);
const commands = ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Products'];
const filtered = computed(() => commands.filter((c) => c.toLowerCase().includes(query.value.toLowerCase())));

const handleKeydown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open.value = true; }
  if (e.key === 'Escape') open.value = false;
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'command-palette.component.ts',
      code: `import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-command-palette',
  template: \`
    <button (click)="open = true" class="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500 dark:border-white/10 dark:bg-white/5">
      Search commands...
      <kbd class="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-mono dark:bg-white/10">Ctrl+K</kbd>
    </button>
    <div *ngIf="open" class="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div class="absolute inset-0 bg-black/30" (click)="open = false"></div>
      <div class="relative z-10 w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-xl dark:border-white/5 dark:bg-gray-800">
        <div class="flex items-center border-b border-gray-200 px-4 dark:border-white/5">
          <input class="flex-1 bg-transparent px-3 py-3 text-sm outline-none" placeholder="Type a command..." [(ngModel)]="query" />
        </div>
        <div class="max-h-64 overflow-y-auto p-2">
          <button *ngFor="let cmd of filtered" class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50" (click)="open = false">{{ cmd }}</button>
        </div>
      </div>
    </div>
  \`
})
export class CommandPaletteComponent {
  open = false;
  query = '';
  commands = ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Products'];
  get filtered() { return this.commands.filter(c => c.toLowerCase().includes(this.query.toLowerCase())); }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); this.open = true; }
    if (e.key === 'Escape') this.open = false;
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'command-palette.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ open: false, query: '', commands: ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Products'] }" @keydown.window="($event.metaKey || $event.ctrlKey) && $event.key === 'k' && ($event.preventDefault(), open = true)" @keydown.escape="open = false">
  <button @click="open = true" class="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500 dark:border-white/10 dark:bg-white/5">
    Search commands...
    <kbd class="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-mono dark:bg-white/10">Ctrl+K</kbd>
  </button>
  <div x-show="open" x-transition class="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
    <div class="absolute inset-0 bg-black/30" @click="open = false"></div>
    <div class="relative z-10 w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-xl dark:border-white/5 dark:bg-gray-800">
      <div class="flex items-center border-b border-gray-200 px-4 dark:border-white/5">
        <input class="flex-1 bg-transparent px-3 py-3 text-sm outline-none" placeholder="Type a command..." x-model="query" @keydown.escape="open = false" />
      </div>
      <div class="max-h-64 overflow-y-auto p-2">
        <template x-for="cmd in commands.filter(c => c.toLowerCase().includes(query.toLowerCase()))" :key="cmd">
          <button class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50" @click="open = false" x-text="cmd"></button>
        </template>
      </div>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'command-palette.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ open: false, query: '', commands: ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Products'] }" @keydown.window="($event.metaKey || $event.ctrlKey) && $event.key === 'k' && ($event.preventDefault(), open = true)" @keydown.escape="open = false">
  <button @click="open = true" class="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500 dark:border-white/10 dark:bg-white/5">
    Search commands...
    <kbd class="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-mono dark:bg-white/10">Ctrl+K</kbd>
  </button>
  <div x-show="open" x-transition class="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
    <div class="absolute inset-0 bg-black/30" @click="open = false"></div>
    <div class="relative z-10 w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-xl dark:border-white/5 dark:bg-gray-800">
      <div class="flex items-center border-b border-gray-200 px-4 dark:border-white/5">
        <input class="flex-1 bg-transparent px-3 py-3 text-sm outline-none" placeholder="Type a command..." x-model="query" />
      </div>
      <div class="max-h-64 overflow-y-auto p-2">
        <template x-for="cmd in commands.filter(c => c.toLowerCase().includes(query.toLowerCase()))" :key="cmd">
          <button class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50" @click="open = false" x-text="cmd"></button>
        </template>
      </div>
    </div>
  </div>
</div>`,
    },
  },
};

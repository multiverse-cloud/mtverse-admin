import { ComponentSourceData } from '../types';

export const shareButtonSource: ComponentSourceData = {
  component: 'Share Button',
  slug: 'share-button',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A share button with a dropdown menu for multiple sharing platforms.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ShareButton.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useRef, useEffect } from 'react';
import { Share2, Twitter, Link2, Mail } from 'lucide-react';

const platforms = [
  { name: 'Twitter', icon: Twitter, color: 'text-sky-500' },
  { name: 'Email', icon: Mail, color: 'text-gray-600' },
  { name: 'Copy Link', icon: Link2, color: 'text-gray-500' },
];

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600">
        <Share2 className="size-4" /> Share
      </button>
      {open && (
        <div className="absolute right-0 top-full z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg dark:border-white/10 dark:bg-gray-800">
          {platforms.map((p) => (
            <button key={p.name} onClick={() => setOpen(false)} className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5">
              <p.icon className={\`size-4 \${p.color}\`} /> {p.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'share-button/page.tsx',
      code: `'use client';

import ShareButton from '@/components/mtverse/extended-ui/ShareButton';

export default function ShareButtonPage() {
  return <ShareButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ShareButton.vue',
      code: `<template>
  <div ref="dropdownRef" class="relative">
    <button @click="open = !open" class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600">
      <Share2 class="size-4" /> Share
    </button>
    <div v-if="open" class="absolute right-0 top-full z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg dark:border-white/10 dark:bg-gray-800">
      <button v-for="p in platforms" :key="p.name" @click="open = false" class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5">
        <component :is="p.icon" :class="'size-4 ' + p.color" /> {{ p.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Share2, Twitter, Link2, Mail } from 'lucide-vue-next';

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const platforms = [
  { name: 'Twitter', icon: Twitter, color: 'text-sky-500' },
  { name: 'Email', icon: Mail, color: 'text-gray-600' },
  { name: 'Copy Link', icon: Link2, color: 'text-gray-500' },
];

const handleClick = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) open.value = false;
};
onMounted(() => document.addEventListener('mousedown', handleClick));
onUnmounted(() => document.removeEventListener('mousedown', handleClick));
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'share-button.component.ts',
      code: `import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-share-button',
  template: \`
    <div class="relative" (click)="$event.stopPropagation()">
      <button (click)="open = !open" class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600">
        Share
      </button>
      <div *ngIf="open" class="absolute right-0 top-full z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg dark:border-white/10 dark:bg-gray-800">
        <button *ngFor="let p of platforms" (click)="open = false" class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300">
          <span [class]="p.color">●</span> {{ p.name }}
        </button>
      </div>
    </div>
  \`
})
export class ShareButtonComponent {
  open = false;
  platforms = [
    { name: 'Twitter', color: 'text-sky-500' },
    { name: 'Email', color: 'text-gray-600' },
    { name: 'Copy Link', color: 'text-gray-500' },
  ];

  @HostListener('document:click')
  onDocClick() { this.open = false; }
}`,
    },
    html: {
      language: 'html',
      filename: 'share-button.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ open: false }" @click.away="open = false" class="relative">
  <button @click="open = !open" class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
    Share
  </button>
  <div x-show="open" x-transition class="absolute right-0 top-full z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg dark:border-white/10 dark:bg-gray-800">
    <template x-for="p in [{ name: 'Twitter', color: 'text-sky-500' }, { name: 'Email', color: 'text-gray-600' }, { name: 'Copy Link', color: 'text-gray-500' }]" :key="p.name">
      <button @click="open = false" class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300">
        <span :class="p.color">●</span> <span x-text="p.name"></span>
      </button>
    </template>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'share-button.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ open: false }" @click.away="open = false" class="relative">
  <button @click="open = !open" class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
    Share
  </button>
  <div x-show="open" x-transition class="absolute right-0 top-full z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg dark:border-white/10 dark:bg-gray-800">
    <template x-for="p in [{ name: 'Twitter', color: 'text-sky-500' }, { name: 'Email', color: 'text-gray-600' }, { name: 'Copy Link', color: 'text-gray-500' }]" :key="p.name">
      <button @click="open = false" class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300">
        <span :class="p.color">●</span> <span x-text="p.name"></span>
      </button>
    </template>
  </div>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const dateDisplaySource: ComponentSourceData = {
  component: 'Date Display',
  slug: 'date-display',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A date display component with relative time, formatting, and locale support.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'DateDisplay.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

function formatRelative(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return \`\${minutes}m ago\`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return \`\${hours}h ago\`;
  const days = Math.floor(hours / 24);
  if (days < 7) return \`\${days}d ago\`;
  return date.toLocaleDateString();
}

export default function DateDisplay() {
  const [date] = useState(new Date(Date.now() - 1000 * 60 * 45));
  const [format, setFormat] = useState<'relative' | 'full' | 'short'>('relative');

  const display = format === 'relative' ? formatRelative(date) : format === 'full' ? date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : date.toLocaleDateString();

  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-gray-800">
      <Calendar className="size-4 text-gray-400" />
      <span className="text-sm font-medium text-gray-900 dark:text-white">{display}</span>
      <div className="flex gap-1 rounded-lg bg-gray-100 p-0.5 dark:bg-white/10">
        {(['relative', 'full', 'short'] as const).map((f) => (
          <button key={f} onClick={() => setFormat(f)} className={\`rounded-md px-2.5 py-1 text-xs font-medium transition-colors \${format === f ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}\`}>{f}</button>
        ))}
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'date-display/page.tsx',
      code: `'use client';

import DateDisplay from '@/components/mtverse/extended-ui/DateDisplay';

export default function DateDisplayPage() {
  return <DateDisplay />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'DateDisplay.vue',
      code: `<template>
  <div class="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-gray-800">
    <Calendar class="size-4 text-gray-400" />
    <span class="text-sm font-medium text-gray-900 dark:text-white">{{ display }}</span>
    <div class="flex gap-1 rounded-lg bg-gray-100 p-0.5 dark:bg-white/10">
      <button v-for="f in formats" :key="f" @click="format = f" class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors" :class="format === f ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'">{{ f }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Calendar } from 'lucide-vue-next';

const date = new Date(Date.now() - 1000 * 60 * 45);
const format = ref<'relative' | 'full' | 'short'>('relative');
const formats = ['relative', 'full', 'short'] as const;

function formatRelative(d: Date): string {
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + 'm ago';
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + 'h ago';
  return d.toLocaleDateString();
}

const display = computed(() => {
  if (format.value === 'relative') return formatRelative(date);
  if (format.value === 'full') return date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return date.toLocaleDateString();
});
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'date-display.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-date-display',
  template: \`
    <div class="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-gray-800">
      <span class="text-sm font-medium text-gray-900 dark:text-white">{{ display }}</span>
      <div class="flex gap-1 rounded-lg bg-gray-100 p-0.5 dark:bg-white/10">
        <button *ngFor="let f of formats" (click)="format = f" class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors" [class.bg-white]="format === f" [class.shadow-sm]="format === f" [class.text-gray-900]="format === f" [class.text-gray-500]="format !== f">{{ f }}</button>
      </div>
    </div>
  \`
})
export class DateDisplayComponent {
  format: 'relative' | 'full' | 'short' = 'relative';
  formats = ['relative', 'full', 'short'];
  date = new Date(Date.now() - 1000 * 60 * 45);
  get display() {
    if (this.format === 'relative') {
      const mins = Math.floor((Date.now() - this.date.getTime()) / 60000);
      return mins < 1 ? 'just now' : mins < 60 ? mins + 'm ago' : Math.floor(mins / 60) + 'h ago';
    }
    return this.format === 'full' ? this.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : this.date.toLocaleDateString();
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'date-display.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ format: 'relative', date: new Date(Date.now() - 1000 * 60 * 45), formats: ['relative', 'full', 'short'], get display() { const mins = Math.floor((Date.now() - this.date.getTime()) / 60000); if (this.format === 'relative') return mins < 1 ? 'just now' : mins < 60 ? mins + 'm ago' : Math.floor(mins/60) + 'h ago'; if (this.format === 'full') return this.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); return this.date.toLocaleDateString(); } }" class="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-gray-800">
  <span class="text-sm font-medium text-gray-900 dark:text-white" x-text="display"></span>
  <div class="flex gap-1 rounded-lg bg-gray-100 p-0.5 dark:bg-white/10">
    <template x-for="f in formats" :key="f">
      <button @click="format = f" class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors" :class="format === f ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'" x-text="f"></button>
    </template>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'date-display.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ format: 'relative', date: new Date(Date.now() - 1000 * 60 * 45), formats: ['relative', 'full', 'short'], get display() { const mins = Math.floor((Date.now() - this.date.getTime()) / 60000); if (this.format === 'relative') return mins < 1 ? 'just now' : mins < 60 ? mins + 'm ago' : Math.floor(mins/60) + 'h ago'; if (this.format === 'full') return this.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); return this.date.toLocaleDateString(); } }" class="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-gray-800">
  <span class="text-sm font-medium text-gray-900 dark:text-white" x-text="display"></span>
  <div class="flex gap-1 rounded-lg bg-gray-100 p-0.5 dark:bg-white/10">
    <template x-for="f in formats" :key="f">
      <button @click="format = f" class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors" :class="format === f ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'" x-text="f"></button>
    </template>
  </div>
</div>`,
    },
  },
};

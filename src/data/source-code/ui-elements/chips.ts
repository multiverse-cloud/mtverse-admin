import { ComponentSourceData } from '../types';

export const chipsSource: ComponentSourceData = {
  component: 'Chips',
  slug: 'chips',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Dense action chips with icons for compact selections and filters.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ChipsSection.tsx',
      code: `function ChipsSection() {
  const [selected, setSelected] = useState<string[]>(['React']);
  const chips = [
    { id: 'react', label: 'React', color: 'bg-blue-light-50 text-blue-light-600 dark:bg-blue-light-500/15 dark:text-blue-light-500' },
    { id: 'vue', label: 'Vue', color: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500' },
  ];
  const toggle = (id) => setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <button key={c.id} onClick={() => toggle(c.id)} className={\`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium \${c.color}\`}>{c.label}</button>
      ))}
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'chips/page.tsx',
      code: `'use client';
import ChipsSection from '@/components/mtverse/ui-elements/ChipsSection';
export default function ChipsPage() { return <ChipsSection />; }`,
    },
    vue: {
      language: 'vue',
      filename: 'ChipsSection.vue',
      code: `<template>
  <div class="flex flex-wrap gap-2">
    <button v-for="c in chips" :key="c.id" @click="toggle(c.id)" :class="\`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium \${c.color}\`">{{ c.label }}</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const selected = ref<string[]>(['React']);
const chips = [{ id: 'react', label: 'React', color: 'bg-blue-light-50 text-blue-light-600' }];
const toggle = (id) => { selected.value = selected.value.includes(id) ? selected.value.filter(x => x !== id) : [...selected.value, id]; };
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'chips.component.ts',
      code: `import { Component } from '@angular/core';
@Component({ selector: 'app-chips', template: '<div class="flex flex-wrap gap-2"><button *ngFor="let c of chips" (click)="toggle(c.id)" [class]="c.color" class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium">{{ c.label }}</button></div>' })
export class ChipsComponent { chips = [{ id: 'react', label: 'React', color: 'bg-blue-light-50 text-blue-light-600' }]; toggle(id: string) {} }`,
    },
    html: { language: 'html', filename: 'chips.html', code: `<!-- HTML Chips --><div class="flex flex-wrap gap-2"><button class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium bg-blue-light-50 text-blue-light-600">React</button></div>` },
    laravel: { language: 'blade', filename: 'chips.blade.php', code: `<!-- Laravel Chips --><div class="flex flex-wrap gap-2"><button class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium bg-blue-light-50 text-blue-light-600">React</button></div>` },
  },
};

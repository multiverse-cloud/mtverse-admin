import { ComponentSourceData } from '../types';

export const accordionsSource: ComponentSourceData = {
  component: 'Accordions',
  slug: 'accordions',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Accordion components for collapsible content sections with expand and collapse functionality.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'AccordionsSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

const items = [
  { title: 'What is mtverse-admin?', content: 'mtverse-admin is a comprehensive admin dashboard template built with modern web technologies, offering hundreds of components and pages.' },
  { title: 'How do I get started?', content: 'Simply clone the repository, install dependencies with npm install, and run the development server with npm run dev.' },
  { title: 'Is dark mode supported?', content: 'Yes, all components support dark mode out of the box using Tailwind CSS dark mode classes.' },
];

function AccordionItem({ title, content, open, onToggle }: { title: string; content: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0 dark:border-white/10">
      <button onClick={onToggle} className="flex w-full items-center justify-between py-4 text-left">
        <span className="text-sm font-medium text-gray-900 dark:text-white">{title}</span>
        <svg className={\`size-5 text-gray-500 transition-transform \${open ? 'rotate-180' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div className={\`overflow-hidden transition-all \${open ? 'max-h-40 pb-4' : 'max-h-0'}\`}>
        <p className="text-sm text-gray-500 dark:text-gray-400">{content}</p>
      </div>
    </div>
  );
}

function AccordionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 dark:border-white/10 dark:bg-gray-900">
      {items.map((item, i) => (
        <AccordionItem key={i} title={item.title} content={item.content} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
      ))}
    </div>
  );
}

export default AccordionsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'accordions/page.tsx',
      code: `'use client';

import AccordionsSection from '@/components/mtverse/ui-elements/AccordionsSection';

export default function AccordionsPage() {
  return <AccordionsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'AccordionsSection.vue',
      code: `<template>
  <div class="rounded-2xl border border-gray-200 bg-white px-6 dark:border-white/10 dark:bg-gray-900">
    <div v-for="(item, i) in items" :key="i" class="border-b border-gray-200 last:border-b-0 dark:border-white/10">
      <button @click="openIndex = openIndex === i ? null : i" class="flex w-full items-center justify-between py-4 text-left">
        <span class="text-sm font-medium text-gray-900 dark:text-white">{{ item.title }}</span>
        <svg :class="['size-5 text-gray-500 transition-transform', openIndex === i ? 'rotate-180' : '']" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div :class="['overflow-hidden transition-all', openIndex === i ? 'max-h-40 pb-4' : 'max-h-0']">
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const openIndex = ref<number | null>(0);
const items = [
  { title: 'What is mtverse-admin?', content: 'mtverse-admin is a comprehensive admin dashboard template built with modern web technologies.' },
  { title: 'How do I get started?', content: 'Clone the repository, install dependencies, and run the development server.' },
  { title: 'Is dark mode supported?', content: 'Yes, all components support dark mode out of the box.' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'accordions.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-accordions',
  template: \`
    <div class="rounded-2xl border border-gray-200 bg-white px-6 dark:border-white/10 dark:bg-gray-900">
      <div *ngFor="let item of items; let i = index" class="border-b border-gray-200 last:border-b-0 dark:border-white/10">
        <button (click)="openIndex = openIndex === i ? null : i" class="flex w-full items-center justify-between py-4 text-left">
          <span class="text-sm font-medium text-gray-900 dark:text-white">{{ item.title }}</span>
          <svg [class]="'size-5 text-gray-500 transition-transform ' + (openIndex === i ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div [class]="'overflow-hidden transition-all ' + (openIndex === i ? 'max-h-40 pb-4' : 'max-h-0')">
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.content }}</p>
        </div>
      </div>
    </div>
  \`
})
export class AccordionsComponent {
  openIndex: number | null = 0;
  items = [
    { title: 'What is mtverse-admin?', content: 'A comprehensive admin dashboard template.' },
    { title: 'How do I get started?', content: 'Clone the repo, install deps, run dev server.' },
    { title: 'Is dark mode supported?', content: 'Yes, all components support dark mode.' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'accordions.html',
      code: `<!-- HTML + Alpine.js -->
<div class="rounded-2xl border border-gray-200 bg-white px-6 dark:border-white/10 dark:bg-gray-900" x-data="{ openIndex: 0 }">
  <div class="border-b border-gray-200 dark:border-white/10">
    <button @click="openIndex = openIndex === 0 ? null : 0" class="flex w-full items-center justify-between py-4 text-left">
      <span class="text-sm font-medium text-gray-900 dark:text-white">What is mtverse-admin?</span>
      <svg :class="'size-5 text-gray-500 transition-transform ' + (openIndex === 0 ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="openIndex === 0" x-transition class="pb-4"><p class="text-sm text-gray-500 dark:text-gray-400">A comprehensive admin dashboard template.</p></div>
  </div>
  <div class="border-b border-gray-200 dark:border-white/10">
    <button @click="openIndex = openIndex === 1 ? null : 1" class="flex w-full items-center justify-between py-4 text-left">
      <span class="text-sm font-medium text-gray-900 dark:text-white">How do I get started?</span>
      <svg :class="'size-5 text-gray-500 transition-transform ' + (openIndex === 1 ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="openIndex === 1" x-transition class="pb-4"><p class="text-sm text-gray-500 dark:text-gray-400">Clone the repo, install deps, run dev server.</p></div>
  </div>
  <div>
    <button @click="openIndex = openIndex === 2 ? null : 2" class="flex w-full items-center justify-between py-4 text-left">
      <span class="text-sm font-medium text-gray-900 dark:text-white">Is dark mode supported?</span>
      <svg :class="'size-5 text-gray-500 transition-transform ' + (openIndex === 2 ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="openIndex === 2" x-transition class="pb-4"><p class="text-sm text-gray-500 dark:text-gray-400">Yes, all components support dark mode.</p></div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'accordions.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="rounded-2xl border border-gray-200 bg-white px-6 dark:border-white/10 dark:bg-gray-900" x-data="{ openIndex: 0 }">
  <div class="border-b border-gray-200 dark:border-white/10">
    <button @click="openIndex = openIndex === 0 ? null : 0" class="flex w-full items-center justify-between py-4 text-left">
      <span class="text-sm font-medium text-gray-900 dark:text-white">What is mtverse-admin?</span>
      <svg :class="'size-5 text-gray-500 transition-transform ' + (openIndex === 0 ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="openIndex === 0" x-transition class="pb-4"><p class="text-sm text-gray-500 dark:text-gray-400">A comprehensive admin dashboard template.</p></div>
  </div>
  <div class="border-b border-gray-200 dark:border-white/10">
    <button @click="openIndex = openIndex === 1 ? null : 1" class="flex w-full items-center justify-between py-4 text-left">
      <span class="text-sm font-medium text-gray-900 dark:text-white">How do I get started?</span>
      <svg :class="'size-5 text-gray-500 transition-transform ' + (openIndex === 1 ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="openIndex === 1" x-transition class="pb-4"><p class="text-sm text-gray-500 dark:text-gray-400">Clone the repo, install deps, run dev server.</p></div>
  </div>
  <div>
    <button @click="openIndex = openIndex === 2 ? null : 2" class="flex w-full items-center justify-between py-4 text-left">
      <span class="text-sm font-medium text-gray-900 dark:text-white">Is dark mode supported?</span>
      <svg :class="'size-5 text-gray-500 transition-transform ' + (openIndex === 2 ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="openIndex === 2" x-transition class="pb-4"><p class="text-sm text-gray-500 dark:text-gray-400">Yes, all components support dark mode.</p></div>
  </div>
</div>`,
    },
  },
};

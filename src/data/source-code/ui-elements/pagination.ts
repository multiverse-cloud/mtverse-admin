import { ComponentSourceData } from '../types';

export const paginationSource: ComponentSourceData = {
  component: 'Pagination',
  slug: 'pagination',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Pagination components for navigating through paged data and content lists.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'PaginationSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

function PaginationSection() {
  const [page, setPage] = useState(3);
  const totalPages = 8;

  const getPages = () => {
    const pages: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Basic</p>
        <nav className="flex items-center gap-1">
          <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          {getPages().map((p, i) =>
            p === '...' ? (
              <span key={i} className="inline-flex size-10 items-center justify-center text-sm text-gray-400">...</span>
            ) : (
              <button key={i} onClick={() => setPage(p as number)} className={\`inline-flex size-10 items-center justify-center rounded-lg text-sm font-medium transition-colors \${page === p ? 'bg-brand-500 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}\`}>{p}</button>
            )
          )}
          <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </nav>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Showing page {page} of {totalPages}</p>
    </div>
  );
}

export default PaginationSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'pagination/page.tsx',
      code: `'use client';

import PaginationSection from '@/components/mtverse/ui-elements/PaginationSection';

export default function PaginationPage() {
  return <PaginationSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'PaginationSection.vue',
      code: `<template>
  <div class="space-y-5">
    <div>
      <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Basic</p>
      <nav class="flex items-center gap-1">
        <button @click="page = Math.max(1, page - 1)" :disabled="page === 1" class="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">
          <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <template v-for="(p, i) in pages" :key="i">
          <span v-if="p === '...'" class="inline-flex size-10 items-center justify-center text-sm text-gray-400">...</span>
          <button v-else @click="page = p" :class="['inline-flex size-10 items-center justify-center rounded-lg text-sm font-medium transition-colors', page === p ? 'bg-brand-500 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800']">{{ p }}</button>
        </template>
        <button @click="page = Math.min(totalPages, page + 1)" :disabled="page === totalPages" class="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">
          <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </nav>
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">Showing page {{ page }} of {{ totalPages }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const page = ref(3);
const totalPages = 8;
const pages = computed(() => {
  const result: (number | string)[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page.value - 1 && i <= page.value + 1)) result.push(i);
    else if (result[result.length - 1] !== '...') result.push('...');
  }
  return result;
});
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'pagination.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: \`
    <div class="space-y-5">
      <nav class="flex items-center gap-1">
        <button (click)="page = Math.max(1, page - 1)" [disabled]="page === 1" class="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">‹</button>
        <ng-container *ngFor="let p of pages; let i = index">
          <span *ngIf="p === '...'" class="inline-flex size-10 items-center justify-center text-sm text-gray-400">...</span>
          <button *ngIf="p !== '...'" (click)="page = p" [class]="'inline-flex size-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ' + (page === p ? 'bg-brand-500 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800')">{{ p }}</button>
        </ng-container>
        <button (click)="page = Math.min(totalPages, page + 1)" [disabled]="page === totalPages" class="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">›</button>
      </nav>
      <p class="text-sm text-gray-500">Showing page {{ page }} of {{ totalPages }}</p>
    </div>
  \`
})
export class PaginationComponent {
  page = 3;
  totalPages = 8;
  get pages(): (number | string)[] {
    const result: (number | string)[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      if (i === 1 || i === this.totalPages || (i >= this.page - 1 && i <= this.page + 1)) result.push(i);
      else if (result[result.length - 1] !== '...') result.push('...');
    }
    return result;
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'pagination.html',
      code: `<!-- HTML + Alpine.js -->
<div class="space-y-5" x-data="{ page: 3, totalPages: 8, getPages() { let p = []; for (let i = 1; i <= this.totalPages; i++) { if (i === 1 || i === this.totalPages || (i >= this.page - 1 && i <= this.page + 1)) p.push(i); else if (p[p.length-1] !== '...') p.push('...'); } return p; } }">
  <nav class="flex items-center gap-1">
    <button @click="page = Math.max(1, page - 1)" :disabled="page === 1" class="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">‹</button>
    <template x-for="(p, i) in getPages()" :key="i">
      <span x-show="p === '...'" class="inline-flex size-10 items-center justify-center text-sm text-gray-400">...</span>
      <button x-show="p !== '...'" @click="page = p" :class="'inline-flex size-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ' + (page === p ? 'bg-brand-500 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800')" x-text="p"></button>
    </template>
    <button @click="page = Math.min(totalPages, page + 1)" :disabled="page === totalPages" class="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">›</button>
  </nav>
  <p class="text-sm text-gray-500">Showing page <span x-text="page"></span> of <span x-text="totalPages"></span></p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'pagination.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="space-y-5" x-data="{ page: 3, totalPages: 8, getPages() { let p = []; for (let i = 1; i <= this.totalPages; i++) { if (i === 1 || i === this.totalPages || (i >= this.page - 1 && i <= this.page + 1)) p.push(i); else if (p[p.length-1] !== '...') p.push('...'); } return p; } }">
  <nav class="flex items-center gap-1">
    <button @click="page = Math.max(1, page - 1)" :disabled="page === 1" class="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">‹</button>
    <template x-for="(p, i) in getPages()" :key="i">
      <span x-show="p === '...'" class="inline-flex size-10 items-center justify-center text-sm text-gray-400">...</span>
      <button x-show="p !== '...'" @click="page = p" :class="'inline-flex size-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ' + (page === p ? 'bg-brand-500 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800')" x-text="p"></button>
    </template>
    <button @click="page = Math.min(totalPages, page + 1)" :disabled="page === totalPages" class="inline-flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">›</button>
  </nav>
  <p class="text-sm text-gray-500">Showing page <span x-text="page"></span> of <span x-text="totalPages"></span></p>
</div>`,
    },
  },
};

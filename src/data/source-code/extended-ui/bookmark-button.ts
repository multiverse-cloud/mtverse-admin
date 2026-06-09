import { ComponentSourceData } from '../types';

export const bookmarkButtonSource: ComponentSourceData = {
  component: 'Bookmark Button',
  slug: 'bookmark-button',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A toggle bookmark button with save/unsave animation and label.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'BookmarkButton.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';

export default function BookmarkButton() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <button onClick={() => setBookmarked(!bookmarked)} className={\`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all active:scale-95 \${bookmarked ? 'border-brand-500 bg-brand-50 text-brand-600 dark:border-brand-400 dark:bg-brand-950/30 dark:text-brand-400' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300'}\`}>
      <Bookmark className={\`size-4 transition-all \${bookmarked ? 'fill-brand-500' : ''}\`} />
      {bookmarked ? 'Saved' : 'Save'}
    </button>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'bookmark-button/page.tsx',
      code: `'use client';

import BookmarkButton from '@/components/mtverse/extended-ui/BookmarkButton';

export default function BookmarkButtonPage() {
  return <BookmarkButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'BookmarkButton.vue',
      code: `<template>
  <button @click="bookmarked = !bookmarked" class="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all active:scale-95" :class="bookmarked ? 'border-brand-500 bg-brand-50 text-brand-600 dark:border-brand-400 dark:bg-brand-950/30 dark:text-brand-400' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300'">
    <Bookmark class="size-4 transition-all" :class="bookmarked ? 'fill-brand-500' : ''" />
    {{ bookmarked ? 'Saved' : 'Save' }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Bookmark } from 'lucide-vue-next';

const bookmarked = ref(false);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'bookmark-button.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmark-button',
  template: \`
    <button (click)="bookmarked = !bookmarked" class="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all active:scale-95" [class.border-brand-500]="bookmarked" [class.bg-brand-50]="bookmarked" [class.text-brand-600]="bookmarked" [class.border-gray-200]="!bookmarked" [class.bg-white]="!bookmarked" [class.text-gray-700]="!bookmarked">
      <svg class="size-4 transition-all" [class.fill-brand-500]="bookmarked" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
      {{ bookmarked ? 'Saved' : 'Save' }}
    </button>
  \`
})
export class BookmarkButtonComponent {
  bookmarked = false;
}`,
    },
    html: {
      language: 'html',
      filename: 'bookmark-button.html',
      code: `<!-- HTML + Alpine.js -->
<button x-data="{ bookmarked: false }" @click="bookmarked = !bookmarked" class="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all active:scale-95" :class="bookmarked ? 'border-brand-500 bg-brand-50 text-brand-600' : 'border-gray-200 bg-white text-gray-700'">
  <svg class="size-4 transition-all" :class="bookmarked ? 'fill-brand-500' : ''" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
  <span x-text="bookmarked ? 'Saved' : 'Save'"></span>
</button>`,
    },
    laravel: {
      language: 'blade',
      filename: 'bookmark-button.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<button x-data="{ bookmarked: false }" @click="bookmarked = !bookmarked" class="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all active:scale-95" :class="bookmarked ? 'border-brand-500 bg-brand-50 text-brand-600' : 'border-gray-200 bg-white text-gray-700'">
  <svg class="size-4 transition-all" :class="bookmarked ? 'fill-brand-500' : ''" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
  <span x-text="bookmarked ? 'Saved' : 'Save'"></span>
</button>`,
    },
  },
};

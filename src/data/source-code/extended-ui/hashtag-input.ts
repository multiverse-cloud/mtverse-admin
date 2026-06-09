import { ComponentSourceData } from '../types';

export const hashtagInputSource: ComponentSourceData = {
  component: 'Hashtag Input',
  slug: 'hashtag-input',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A tag input with #hashtag autocomplete and chip-style tag rendering.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'HashtagInput.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useRef } from 'react';
import { X, Hash } from 'lucide-react';

const suggestions = ['design', 'development', 'marketing', 'product', 'engineering', 'sales', 'support', 'research'];

export default function HashtagInput() {
  const [tags, setTags] = useState<string[]>(['design', 'product']);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = suggestions.filter((s) => s.toLowerCase().startsWith(input.toLowerCase()) && !tags.includes(s));
  const addTag = (tag: string) => { if (!tags.includes(tag)) setTags([...tags, tag]); setInput(''); };
  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  return (
    <div className="w-80">
      <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-gray-800" onClick={() => inputRef.current?.focus()}>
        {tags.map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950/30 dark:text-brand-400">
            <Hash className="size-3" />{tag}<button onClick={() => removeTag(tag)}><X className="size-3 opacity-60 hover:opacity-100" /></button>
          </span>
        ))}
        <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && input) { e.preventDefault(); addTag(input); } }} placeholder="Add tag..." className="min-w-[80px] flex-1 bg-transparent text-sm outline-none dark:text-white" />
      </div>
      {filtered.length > 0 && input.length > 0 && (
        <div className="mt-1 rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
          {filtered.slice(0, 5).map((s) => (
            <button key={s} onClick={() => addTag(s)} className="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5">
              <Hash className="size-3 text-gray-400" />{s}
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
      filename: 'hashtag-input/page.tsx',
      code: `'use client';

import HashtagInput from '@/components/mtverse/extended-ui/HashtagInput';

export default function HashtagInputPage() {
  return <HashtagInput />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'HashtagInput.vue',
      code: `<template>
  <div class="w-80">
    <div class="flex flex-wrap items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-gray-800" @click="inputRef?.focus()">
      <span v-for="tag in tags" :key="tag" class="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950/30 dark:text-brand-400">
        <Hash class="size-3" />{{ tag }}<button @click="removeTag(tag)"><X class="size-3 opacity-60 hover:opacity-100" /></button>
      </span>
      <input ref="inputRef" v-model="input" @keydown.enter.prevent="input && addTag(input)" placeholder="Add tag..." class="min-w-[80px] flex-1 bg-transparent text-sm outline-none dark:text-white" />
    </div>
    <div v-if="filtered.length > 0 && input.length > 0" class="mt-1 rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
      <button v-for="s in filtered.slice(0, 5)" :key="s" @click="addTag(s)" class="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300">
        <Hash class="size-3 text-gray-400" />{{ s }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Hash, X } from 'lucide-vue-next';

const tags = ref<string[]>(['design', 'product']);
const input = ref('');
const inputRef = ref<HTMLInputElement | null>(null);
const suggestions = ['design', 'development', 'marketing', 'product', 'engineering', 'sales', 'support', 'research'];
const filtered = computed(() => suggestions.filter((s) => s.toLowerCase().startsWith(input.value.toLowerCase()) && !tags.value.includes(s)));

function addTag(tag: string) { if (!tags.value.includes(tag)) tags.value.push(tag); input.value = ''; }
function removeTag(tag: string) { tags.value = tags.value.filter((t) => t !== tag); }
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'hashtag-input.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-hashtag-input',
  template: \`
    <div class="w-80">
      <div class="flex flex-wrap items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-gray-800">
        <span *ngFor="let tag of tags" class="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">
          #{{ tag }} <button (click)="removeTag(tag)" class="opacity-60 hover:opacity-100">&times;</button>
        </span>
        <input [(ngModel)]="input" (keydown.enter)="addTag(input)" placeholder="Add tag..." class="min-w-[80px] flex-1 bg-transparent text-sm outline-none dark:text-white" />
      </div>
      <div *ngIf="filtered.length > 0 && input.length > 0" class="mt-1 rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
        <button *ngFor="let s of filtered.slice(0, 5)" (click)="addTag(s)" class="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          #{{ s }}
        </button>
      </div>
    </div>
  \`
})
export class HashtagInputComponent {
  tags = ['design', 'product'];
  input = '';
  suggestions = ['design', 'development', 'marketing', 'product', 'engineering', 'sales', 'support', 'research'];
  get filtered() { return this.suggestions.filter(s => s.toLowerCase().startsWith(this.input.toLowerCase()) && !this.tags.includes(s)); }

  addTag(tag: string) { if (!this.tags.includes(tag)) this.tags.push(tag); this.input = ''; }
  removeTag(tag: string) { this.tags = this.tags.filter(t => t !== tag); }
}`,
    },
    html: {
      language: 'html',
      filename: 'hashtag-input.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ tags: ['design', 'product'], input: '', suggestions: ['design', 'development', 'marketing', 'product', 'engineering', 'sales', 'support', 'research'], get filtered() { return this.suggestions.filter(s => s.toLowerCase().startsWith(this.input.toLowerCase()) && !this.tags.includes(s)); }, addTag(tag) { if (!this.tags.includes(tag)) this.tags.push(tag); this.input = ''; }, removeTag(tag) { this.tags = this.tags.filter(t => t !== tag); } }" class="w-80">
  <div class="flex flex-wrap items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-gray-800">
    <template x-for="tag in tags" :key="tag">
      <span class="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">
        #<span x-text="tag"></span> <button @click="removeTag(tag)" class="opacity-60 hover:opacity-100">&times;</button>
      </span>
    </template>
    <input x-model="input" @keydown.enter.prevent="input && addTag(input)" placeholder="Add tag..." class="min-w-[80px] flex-1 bg-transparent text-sm outline-none dark:text-white" />
  </div>
  <div x-show="filtered.length > 0 && input.length > 0" x-transition class="mt-1 rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
    <template x-for="s in filtered.slice(0, 5)" :key="s">
      <button @click="addTag(s)" class="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">#<span x-text="s"></span></button>
    </template>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'hashtag-input.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ tags: ['design', 'product'], input: '', suggestions: ['design', 'development', 'marketing', 'product', 'engineering', 'sales', 'support', 'research'], get filtered() { return this.suggestions.filter(s => s.toLowerCase().startsWith(this.input.toLowerCase()) && !this.tags.includes(s)); }, addTag(tag) { if (!this.tags.includes(tag)) this.tags.push(tag); this.input = ''; }, removeTag(tag) { this.tags = this.tags.filter(t => t !== tag); } }" class="w-80">
  <div class="flex flex-wrap items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-gray-800">
    <template x-for="tag in tags" :key="tag">
      <span class="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">
        #<span x-text="tag"></span> <button @click="removeTag(tag)" class="opacity-60 hover:opacity-100">&times;</button>
      </span>
    </template>
    <input x-model="input" @keydown.enter.prevent="input && addTag(input)" placeholder="Add tag..." class="min-w-[80px] flex-1 bg-transparent text-sm outline-none dark:text-white" />
  </div>
  <div x-show="filtered.length > 0 && input.length > 0" x-transition class="mt-1 rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
    <template x-for="s in filtered.slice(0, 5)" :key="s">
      <button @click="addTag(s)" class="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">#<span x-text="s"></span></button>
    </template>
  </div>
</div>`,
    },
  },
};

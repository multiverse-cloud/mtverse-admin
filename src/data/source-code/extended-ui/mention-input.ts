import { ComponentSourceData } from '../types';

export const mentionInputSource: ComponentSourceData = {
  component: 'Mention Input',
  slug: 'mention-input',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A text input with @mention autocomplete and dropdown suggestions.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MentionInput.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useRef } from 'react';

const users = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Williams'];

export default function MentionInput() {
  const [value, setValue] = useState('');
  const [mentionIdx, setMentionIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const lastAt = value.lastIndexOf('@');
  const query = lastAt >= 0 ? value.slice(lastAt + 1).split(/\\s/)[0] : '';
  const showSuggestions = lastAt >= 0 && query.length > 0;
  const suggestions = showSuggestions ? users.filter((u) => u.toLowerCase().startsWith(query.toLowerCase())) : [];

  const selectMention = (name: string) => {
    setValue(value.slice(0, lastAt) + '@' + name + ' ' + value.slice(lastAt + 1 + query.length));
    setMentionIdx(-1);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-80">
      <input ref={inputRef} value={value} onChange={(e) => { setValue(e.target.value); setMentionIdx(-1); }} placeholder="Type @ to mention someone..." className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-800 dark:text-white" />
      {suggestions.length > 0 && (
        <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
          {suggestions.map((u, i) => (
            <button key={u} onClick={() => selectMention(u)} onMouseEnter={() => setMentionIdx(i)} className={\`flex w-full items-center gap-2 px-3 py-2 text-sm \${i === mentionIdx ? 'bg-brand-50 text-brand-600 dark:bg-brand-950/30' : 'text-gray-700 dark:text-gray-300'}\`}>
              <div className="size-6 rounded-full bg-brand-100 dark:bg-brand-900/30" /> {u}
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
      filename: 'mention-input/page.tsx',
      code: `'use client';

import MentionInput from '@/components/mtverse/extended-ui/MentionInput';

export default function MentionInputPage() {
  return <MentionInput />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MentionInput.vue',
      code: `<template>
  <div class="relative w-80">
    <input v-model="value" @input="mentionIdx = -1" placeholder="Type @ to mention someone..." ref="inputRef" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-800 dark:text-white" />
    <div v-if="suggestions.length > 0" class="absolute left-0 top-full z-10 mt-1 w-full rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
      <button v-for="(u, i) in suggestions" :key="u" @click="selectMention(u)" @mouseenter="mentionIdx = i" class="flex w-full items-center gap-2 px-3 py-2 text-sm" :class="i === mentionIdx ? 'bg-brand-50 text-brand-600' : 'text-gray-700 dark:text-gray-300'">
        <div class="size-6 rounded-full bg-brand-100 dark:bg-brand-900/30" /> {{ u }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const value = ref('');
const mentionIdx = ref(-1);
const inputRef = ref<HTMLInputElement | null>(null);
const users = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Williams'];

const lastAt = computed(() => value.value.lastIndexOf('@'));
const query = computed(() => lastAt.value >= 0 ? value.value.slice(lastAt.value + 1).split(/\\s/)[0] : '');
const suggestions = computed(() => lastAt.value >= 0 && query.value.length > 0 ? users.filter((u) => u.toLowerCase().startsWith(query.value.toLowerCase())) : []);

function selectMention(name: string) {
  value.value = value.value.slice(0, lastAt.value) + '@' + name + ' ' + value.value.slice(lastAt.value + 1 + query.value.length);
  mentionIdx.value = -1;
  inputRef.value?.focus();
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'mention-input.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-mention-input',
  template: \`
    <div class="relative w-80">
      <input [(ngModel)]="value" (ngModelChange)="onInput()" placeholder="Type @ to mention someone..." class="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-white/10 dark:bg-gray-800 dark:text-white" />
      <div *ngIf="suggestions.length > 0" class="absolute left-0 top-full z-10 mt-1 w-full rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
        <button *ngFor="let u of suggestions; let i = index" (click)="selectMention(u)" (mouseenter)="mentionIdx = i" class="flex w-full items-center gap-2 px-3 py-2 text-sm" [class.bg-brand-50]="i === mentionIdx" [class.text-brand-600]="i === mentionIdx" [class.text-gray-700]="i !== mentionIdx">
          <div class="size-6 rounded-full bg-brand-100"></div> {{ u }}
        </button>
      </div>
    </div>
  \`
})
export class MentionInputComponent {
  value = '';
  mentionIdx = -1;
  users = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Williams'];
  suggestions: string[] = [];

  onInput() {
    const at = this.value.lastIndexOf('@');
    const q = at >= 0 ? this.value.slice(at + 1).split(/\\s/)[0] : '';
    this.suggestions = at >= 0 && q.length > 0 ? this.users.filter(u => u.toLowerCase().startsWith(q.toLowerCase())) : [];
  }

  selectMention(name: string) {
    const at = this.value.lastIndexOf('@');
    const q = this.value.slice(at + 1).split(/\\s/)[0];
    this.value = this.value.slice(0, at) + '@' + name + ' ' + this.value.slice(at + 1 + q.length);
    this.suggestions = [];
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'mention-input.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ value: '', users: ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Williams'], get lastAt() { return this.value.lastIndexOf('@'); }, get query() { return this.lastAt >= 0 ? this.value.slice(this.lastAt + 1).split(/\\\\s/)[0] : ''; }, get suggestions() { return this.lastAt >= 0 && this.query.length > 0 ? this.users.filter(u => u.toLowerCase().startsWith(this.query.toLowerCase())) : []; }, selectMention(name) { this.value = this.value.slice(0, this.lastAt) + '@' + name + ' ' + this.value.slice(this.lastAt + 1 + this.query.length); } }" class="relative w-80">
  <input x-model="value" placeholder="Type @ to mention someone..." class="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-white/10 dark:bg-gray-800 dark:text-white" />
  <div x-show="suggestions.length > 0" x-transition class="absolute left-0 top-full z-10 mt-1 w-full rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
    <template x-for="(u, i) in suggestions" :key="u">
      <button @click="selectMention(u)" class="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600" x-text="u"></button>
    </template>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'mention-input.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ value: '', users: ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Williams'], get lastAt() { return this.value.lastIndexOf('@'); }, get query() { return this.lastAt >= 0 ? this.value.slice(this.lastAt + 1).split(/\\\\s/)[0] : ''; }, get suggestions() { return this.lastAt >= 0 && this.query.length > 0 ? this.users.filter(u => u.toLowerCase().startsWith(this.query.toLowerCase())) : []; }, selectMention(name) { this.value = this.value.slice(0, this.lastAt) + '@' + name + ' ' + this.value.slice(this.lastAt + 1 + this.query.length); } }" class="relative w-80">
  <input x-model="value" placeholder="Type @ to mention someone..." class="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-white/10 dark:bg-gray-800 dark:text-white" />
  <div x-show="suggestions.length > 0" x-transition class="absolute left-0 top-full z-10 mt-1 w-full rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-gray-800">
    <template x-for="(u, i) in suggestions" :key="u">
      <button @click="selectMention(u)" class="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600" x-text="u"></button>
    </template>
  </div>
</div>`,
    },
  },
};

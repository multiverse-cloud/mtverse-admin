import { ComponentSourceData } from '../types';

export const tagInputSource: ComponentSourceData = {
  component: 'Tag Input',
  slug: 'tag-input',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Tag input components for entering and managing multiple values as discrete tags with add and remove functionality.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TagInputSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState, KeyboardEvent } from 'react';

interface TagInputProps {
  placeholder?: string;
  maxTags?: number;
}

function TagInput({ placeholder = 'Add a tag...', maxTags = 10 }: TagInputProps) {
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript', 'Tailwind']);
  const [inputValue, setInputValue] = useState('');

  const addTag = (value: string) => {
    const trimmed = value.trim();
    if (trimmed && !tags.includes(trimmed) && tags.length < maxTags) {
      setTags([...tags, trimmed]);
    }
    setInputValue('');
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-gray-900">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-1 rounded-lg bg-brand-100 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400"
        >
          {tag}
          <button
            onClick={() => removeTag(index)}
            className="ml-0.5 rounded-full p-0.5 hover:bg-brand-200 dark:hover:bg-brand-500/30 transition-colors"
          >
            ✕
          </button>
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tags.length < maxTags ? placeholder : ''}
        className="min-w-[120px] flex-1 border-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
      />
    </div>
  );
}

function TagInputSection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Default Tag Input</p>
        <TagInput />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">With Placeholder</p>
        <TagInput placeholder="Type and press Enter..." />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Limited Tags (max 3)</p>
        <TagInput placeholder="Max 3 tags" maxTags={3} />
      </div>
    </div>
  );
}

export default TagInputSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'tag-input/page.tsx',
      code: `'use client';

import TagInputSection from '@/components/mtverse/ui-elements/TagInputSection';

export default function TagInputPage() {
  return <TagInputSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'TagInputSection.vue',
      code: `<template>
  <div class="space-y-6">
    <div>
      <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Default Tag Input</p>
      <div class="flex flex-wrap items-center gap-2 rounded-xl border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-gray-900">
        <span v-for="(tag, index) in tags" :key="index" class="inline-flex items-center gap-1 rounded-lg bg-brand-100 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400">
          {{ tag }}
          <button @click="removeTag(index)" class="ml-0.5 rounded-full p-0.5 hover:bg-brand-200 dark:hover:bg-brand-500/30 transition-colors">✕</button>
        </span>
        <input
          type="text"
          v-model="inputValue"
          @keydown="handleKeyDown"
          :placeholder="tags.length < 10 ? 'Add a tag...' : ''"
          class="min-w-[120px] flex-1 border-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tags = ref<string[]>(['Vue', 'TypeScript', 'Tailwind']);
const inputValue = ref('');

const addTag = (value: string) => {
  const trimmed = value.trim();
  if (trimmed && !tags.value.includes(trimmed) && tags.value.length < 10) {
    tags.value.push(trimmed);
  }
  inputValue.value = '';
};

const removeTag = (index: number) => {
  tags.value.splice(index, 1);
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTag(inputValue.value);
  } else if (e.key === 'Backspace' && !inputValue.value && tags.value.length > 0) {
    removeTag(tags.value.length - 1);
  }
};
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'tag-input.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-input',
  template: \`
    <div class="space-y-6">
      <div>
        <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Default Tag Input</p>
        <div class="flex flex-wrap items-center gap-2 rounded-xl border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-gray-900">
          <span *ngFor="let tag of tags; let i = index" class="inline-flex items-center gap-1 rounded-lg bg-brand-100 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400">
            {{ tag }}
            <button (click)="removeTag(i)" class="ml-0.5 rounded-full p-0.5 hover:bg-brand-200 dark:hover:bg-brand-500/30 transition-colors">✕</button>
          </span>
          <input
            type="text"
            [(ngModel)]="inputValue"
            (keydown)="handleKeyDown($event)"
            [placeholder]="tags.length < 10 ? 'Add a tag...' : ''"
            class="min-w-[120px] flex-1 border-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  \`
})
export class TagInputComponent {
  tags = ['Angular', 'TypeScript', 'Tailwind'];
  inputValue = '';

  addTag(value: string) {
    const trimmed = value.trim();
    if (trimmed && !this.tags.includes(trimmed) && this.tags.length < 10) {
      this.tags.push(trimmed);
    }
    this.inputValue = '';
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addTag(this.inputValue);
    } else if (e.key === 'Backspace' && !this.inputValue && this.tags.length > 0) {
      this.removeTag(this.tags.length - 1);
    }
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'tag-input.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{
  tags: ['HTML', 'Alpine.js', 'Tailwind'],
  inputValue: '',
  addTag(value) {
    const trimmed = value.trim();
    if (trimmed && !this.tags.includes(trimmed) && this.tags.length < 10) {
      this.tags.push(trimmed);
    }
    this.inputValue = '';
  },
  removeTag(index) {
    this.tags.splice(index, 1);
  },
  handleKeyDown(e) {
    if (e.key === 'Enter') { e.preventDefault(); this.addTag(this.inputValue); }
    else if (e.key === 'Backspace' && !this.inputValue && this.tags.length > 0) { this.removeTag(this.tags.length - 1); }
  }
}">
  <div class="flex flex-wrap items-center gap-2 rounded-xl border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-gray-900">
    <template x-for="(tag, index) in tags" :key="index">
      <span class="inline-flex items-center gap-1 rounded-lg bg-brand-100 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400">
        <span x-text="tag"></span>
        <button @click="removeTag(index)" class="ml-0.5 rounded-full p-0.5 hover:bg-brand-200 dark:hover:bg-brand-500/30 transition-colors">✕</button>
      </span>
    </template>
    <input
      type="text"
      x-model="inputValue"
      @keydown="handleKeyDown($event)"
      :placeholder="tags.length < 10 ? 'Add a tag...' : ''"
      class="min-w-[120px] flex-1 border-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
    />
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'tag-input.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{
  tags: @json($tags ?? ['Laravel', 'Blade', 'Tailwind']),
  inputValue: '',
  addTag(value) {
    const trimmed = value.trim();
    if (trimmed && !this.tags.includes(trimmed) && this.tags.length < 10) {
      this.tags.push(trimmed);
    }
    this.inputValue = '';
  },
  removeTag(index) {
    this.tags.splice(index, 1);
  },
  handleKeyDown(e) {
    if (e.key === 'Enter') { e.preventDefault(); this.addTag(this.inputValue); }
    else if (e.key === 'Backspace' && !this.inputValue && this.tags.length > 0) { this.removeTag(this.tags.length - 1); }
  }
}">
  <div class="flex flex-wrap items-center gap-2 rounded-xl border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-gray-900">
    <template x-for="(tag, index) in tags" :key="index">
      <span class="inline-flex items-center gap-1 rounded-lg bg-brand-100 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/20 dark:text-brand-400">
        <span x-text="tag"></span>
        <button @click="removeTag(index)" class="ml-0.5 rounded-full p-0.5 hover:bg-brand-200 dark:hover:bg-brand-500/30 transition-colors">✕</button>
      </span>
    </template>
    <input
      type="text"
      x-model="inputValue"
      @keydown="handleKeyDown($event)"
      :placeholder="tags.length < 10 ? 'Add a tag...' : ''"
      class="min-w-[120px] flex-1 border-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
    />
  </div>
</div>`,
    },
  },
};

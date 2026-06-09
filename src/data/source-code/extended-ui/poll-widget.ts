import { ComponentSourceData } from '../types';

export const pollWidgetSource: ComponentSourceData = {
  component: 'Poll Widget',
  slug: 'poll-widget',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'Poll Widget component for the Extended UI library with full customization support.',
  sources: {
    react: { language: 'tsx', filename: 'PollWidget.tsx', code: `import React, { useState } from 'react';

export default function PollWidget() {
  const [active, setActive] = useState(false);
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Poll Widget</span>
        <button
          onClick={() => setActive(!active)}
          className="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600"
        >
          {active ? 'Active' : 'Toggle'}
        </button>
      </div>
      {active && (
        <div className="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
          <p className="text-xs text-gray-600 dark:text-gray-400">Interactive poll widget content</p>
        </div>
      )}
    </div>
  );
}` },
    nextjs: { language: 'tsx', filename: 'poll-widget/page.tsx', code: `'use client';
import PollWidget from '@/components/mtverse/extended-ui/PollWidget';
export default function Page() {
  return <PollWidget />;
}` },
    vue: { language: 'vue', filename: 'PollWidget.vue', code: `<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Poll Widget</span>
      <button @click="active = !active"
        class="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
        {{ active ? 'Active' : 'Toggle' }}
      </button>
    </div>
    <div v-if="active" class="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
      <p class="text-xs text-gray-600 dark:text-gray-400">Interactive poll widget content</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const active = ref(false);
</script>` },
    angular: { language: 'ts', filename: 'poll-widget.component.ts', code: `import { Component } from '@angular/core';
@Component({
  selector: 'app-poll-widget',
  template: \`
    <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Poll Widget</span>
        <button (click)="toggle()"
          class="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
          {{ active ? 'Active' : 'Toggle' }}
        </button>
      </div>
      <div *ngIf="active" class="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
        <p class="text-xs text-gray-600 dark:text-gray-400">Interactive poll widget content</p>
      </div>
    </div>
  \`
})
export class PollWidgetComponent {
  active = false;
  toggle() { this.active = !this.active; }
}` },
    html: { language: 'html', filename: 'poll-widget.html', code: `<!-- HTML + Alpine.js -->
<div x-data="{ active: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <div class="flex items-center justify-between">
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Poll Widget</span>
    <button @click="active = !active"
      class="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
      <span x-text="active ? 'Active' : 'Toggle'"></span>
    </button>
  </div>
  <div x-show="active" x-transition class="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
    <p class="text-xs text-gray-600 dark:text-gray-400">Interactive poll widget content</p>
  </div>
</div>` },
    laravel: { language: 'blade', filename: 'poll-widget.blade.php', code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ active: false }" class="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <div class="flex items-center justify-between">
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Poll Widget</span>
    <button @click="active = !active"
      class="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
      <span x-text="active ? 'Active' : 'Toggle'"></span>
    </button>
  </div>
  <div x-show="active" x-transition class="mt-3 rounded-md bg-gray-50 p-3 dark:bg-white/5">
    <p class="text-xs text-gray-600 dark:text-gray-400">Interactive poll widget content</p>
  </div>
</div>` },
  },
};

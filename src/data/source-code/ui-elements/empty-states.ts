import { ComponentSourceData } from '../types';

export const emptyStatesSource: ComponentSourceData = {
  component: 'Empty States',
  slug: 'empty-states',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Empty state components for displaying placeholder content when no data is available, with helpful calls-to-action.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'EmptyStatesSection.tsx',
      code: `// React + TypeScript implementation
import React from 'react';

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

function EmptyState({ icon = '📭', title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
      <span className="text-5xl">{icon}</span>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">{description}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-4 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

function EmptyStatesSection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Data</p>
        <EmptyState
          icon="📭"
          title="No messages yet"
          description="You don't have any messages in your inbox. Start a conversation to see messages here."
          actionLabel="Compose Message"
          onAction={() => console.log('Compose clicked')}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Results</p>
        <EmptyState
          icon="🔍"
          title="No results found"
          description="We couldn't find anything matching your search. Try adjusting your filters or search terms."
          actionLabel="Clear Filters"
          onAction={() => console.log('Clear filters')}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Simple</p>
        <EmptyState
          icon="📋"
          title="No tasks"
          description="Your task list is empty. Add a new task to get started."
        />
      </div>
    </div>
  );
}

export default EmptyStatesSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'empty-states/page.tsx',
      code: `'use client';

import EmptyStatesSection from '@/components/mtverse/ui-elements/EmptyStatesSection';

export default function EmptyStatesPage() {
  return <EmptyStatesSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'EmptyStatesSection.vue',
      code: `<template>
  <div class="space-y-6">
    <div>
      <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Data</p>
      <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
        <span class="text-5xl">📭</span>
        <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No messages yet</h3>
        <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">You don't have any messages in your inbox. Start a conversation to see messages here.</p>
        <button class="mt-4 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors" @click="compose">Compose Message</button>
      </div>
    </div>
    <div>
      <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Results</p>
      <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
        <span class="text-5xl">🔍</span>
        <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No results found</h3>
        <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">We couldn't find anything matching your search. Try adjusting your filters or search terms.</p>
        <button class="mt-4 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors" @click="clearFilters">Clear Filters</button>
      </div>
    </div>
    <div>
      <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Simple</p>
      <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
        <span class="text-5xl">📋</span>
        <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No tasks</h3>
        <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">Your task list is empty. Add a new task to get started.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const compose = () => console.log('Compose clicked');
const clearFilters = () => console.log('Clear filters');
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'empty-states.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-states',
  template: \`
    <div class="space-y-6">
      <div>
        <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Data</p>
        <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
          <span class="text-5xl">📭</span>
          <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No messages yet</h3>
          <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">You don't have any messages in your inbox. Start a conversation to see messages here.</p>
          <button (click)="compose()" class="mt-4 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Compose Message</button>
        </div>
      </div>
      <div>
        <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Results</p>
        <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
          <span class="text-5xl">🔍</span>
          <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No results found</h3>
          <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">We couldn't find anything matching your search. Try adjusting your filters.</p>
          <button (click)="clearFilters()" class="mt-4 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Clear Filters</button>
        </div>
      </div>
    </div>
  \`
})
export class EmptyStatesComponent {
  compose() { console.log('Compose clicked'); }
  clearFilters() { console.log('Clear filters'); }
}`,
    },
    html: {
      language: 'html',
      filename: 'empty-states.html',
      code: `<!-- HTML + Alpine.js -->
<div class="space-y-6">
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Data</p>
    <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
      <span class="text-5xl">📭</span>
      <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No messages yet</h3>
      <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">You don't have any messages in your inbox. Start a conversation to see messages here.</p>
      <button class="mt-4 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Compose Message</button>
    </div>
  </div>
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Results</p>
    <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
      <span class="text-5xl">🔍</span>
      <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No results found</h3>
      <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">We couldn't find anything matching your search. Try adjusting your filters.</p>
      <button class="mt-4 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Clear Filters</button>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'empty-states.blade.php',
      code: `<!-- Laravel Blade + Tailwind -->
<div class="space-y-6">
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Data</p>
    <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
      <span class="text-5xl">📭</span>
      <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No messages yet</h3>
      <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">You don't have any messages in your inbox. Start a conversation to see messages here.</p>
      <a href="#" class="mt-4 inline-block rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Compose Message</a>
    </div>
  </div>
  <div>
    <p class="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">No Results</p>
    <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900/50">
      <span class="text-5xl">🔍</span>
      <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No results found</h3>
      <p class="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">We couldn't find anything matching your search. Try adjusting your filters.</p>
      <a href="#" class="mt-4 inline-block rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Clear Filters</a>
    </div>
  </div>
</div>`,
    },
  },
};

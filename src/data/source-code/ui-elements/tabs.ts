import { ComponentSourceData } from '../types';

export const tabsSource: ComponentSourceData = {
  component: 'Tabs',
  slug: 'tabs',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Tab navigation components for switching between content sections and views.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TabsSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

function TabsSection() {
  const [active, setActive] = useState('overview');
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div>
      <div className="flex border-b border-gray-200 dark:border-white/10">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActive(tab.id)} className={\`relative px-5 py-3 text-sm font-medium transition-colors \${
            active === tab.id
              ? 'text-brand-500'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }\`}>
            {tab.label}
            {active === tab.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full" />}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
        {active === 'overview' && <p className="text-sm text-gray-600 dark:text-gray-300">Overview content: Summary of your project dashboard with key metrics and recent activity.</p>}
        {active === 'analytics' && <p className="text-sm text-gray-600 dark:text-gray-300">Analytics content: Detailed charts and data visualizations for tracking performance.</p>}
        {active === 'settings' && <p className="text-sm text-gray-600 dark:text-gray-300">Settings content: Configure your project preferences and notification settings.</p>}
      </div>
    </div>
  );
}

export default TabsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'tabs/page.tsx',
      code: `'use client';

import TabsSection from '@/components/mtverse/ui-elements/TabsSection';

export default function TabsPage() {
  return <TabsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'TabsSection.vue',
      code: `<template>
  <div>
    <div class="flex border-b border-gray-200 dark:border-white/10">
      <button v-for="tab in tabs" :key="tab.id" @click="active = tab.id" :class="['relative px-5 py-3 text-sm font-medium transition-colors', active === tab.id ? 'text-brand-500' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200']">
        {{ tab.label }}
        <span v-if="active === tab.id" class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full" />
      </button>
    </div>
    <div class="mt-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
      <p v-if="active === 'overview'" class="text-sm text-gray-600 dark:text-gray-300">Overview content: Summary of your project dashboard.</p>
      <p v-if="active === 'analytics'" class="text-sm text-gray-600 dark:text-gray-300">Analytics content: Detailed charts and data visualizations.</p>
      <p v-if="active === 'settings'" class="text-sm text-gray-600 dark:text-gray-300">Settings content: Configure preferences and notifications.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref('overview');
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'settings', label: 'Settings' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'tabs.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: \`
    <div>
      <div class="flex border-b border-gray-200 dark:border-white/10">
        <button *ngFor="let tab of tabs" (click)="active = tab.id" [class]="'relative px-5 py-3 text-sm font-medium transition-colors ' + (active === tab.id ? 'text-brand-500' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400')">
          {{ tab.label }}
          <span *ngIf="active === tab.id" class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></span>
        </button>
      </div>
      <div class="mt-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
        <p *ngIf="active === 'overview'" class="text-sm text-gray-600 dark:text-gray-300">Overview content: Summary of your project dashboard.</p>
        <p *ngIf="active === 'analytics'" class="text-sm text-gray-600 dark:text-gray-300">Analytics content: Detailed charts and data visualizations.</p>
        <p *ngIf="active === 'settings'" class="text-sm text-gray-600 dark:text-gray-300">Settings content: Configure preferences and notifications.</p>
      </div>
    </div>
  \`
})
export class TabsComponent {
  active = 'overview';
  tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'settings', label: 'Settings' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'tabs.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ active: 'overview' }">
  <div class="flex border-b border-gray-200 dark:border-white/10">
    <template x-for="tab in [{id:'overview',label:'Overview'},{id:'analytics',label:'Analytics'},{id:'settings',label:'Settings'}]" :key="tab.id">
      <button @click="active = tab.id" :class="'relative px-5 py-3 text-sm font-medium transition-colors ' + (active === tab.id ? 'text-brand-500' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400')">
        <span x-text="tab.label"></span>
        <span x-show="active === tab.id" class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></span>
      </button>
    </template>
  </div>
  <div class="mt-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
    <p x-show="active === 'overview'" class="text-sm text-gray-600 dark:text-gray-300">Overview content: Summary of your project dashboard.</p>
    <p x-show="active === 'analytics'" class="text-sm text-gray-600 dark:text-gray-300">Analytics content: Detailed charts and data visualizations.</p>
    <p x-show="active === 'settings'" class="text-sm text-gray-600 dark:text-gray-300">Settings content: Configure preferences and notifications.</p>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'tabs.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ active: 'overview' }">
  <div class="flex border-b border-gray-200 dark:border-white/10">
    <button @click="active = 'overview'" :class="'relative px-5 py-3 text-sm font-medium transition-colors ' + (active === 'overview' ? 'text-brand-500' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400')">Overview <span x-show="active === 'overview'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></span></button>
    <button @click="active = 'analytics'" :class="'relative px-5 py-3 text-sm font-medium transition-colors ' + (active === 'analytics' ? 'text-brand-500' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400')">Analytics <span x-show="active === 'analytics'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></span></button>
    <button @click="active = 'settings'" :class="'relative px-5 py-3 text-sm font-medium transition-colors ' + (active === 'settings' ? 'text-brand-500' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400')">Settings <span x-show="active === 'settings'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></span></button>
  </div>
  <div class="mt-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-900">
    <p x-show="active === 'overview'" class="text-sm text-gray-600 dark:text-gray-300">Overview content: Summary of your project dashboard.</p>
    <p x-show="active === 'analytics'" class="text-sm text-gray-600 dark:text-gray-300">Analytics content: Detailed charts and data visualizations.</p>
    <p x-show="active === 'settings'" class="text-sm text-gray-600 dark:text-gray-300">Settings content: Configure preferences and notifications.</p>
  </div>
</div>`,
    },
  },
};

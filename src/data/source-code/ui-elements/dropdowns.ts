import { ComponentSourceData } from '../types';

export const dropdownsSource: ComponentSourceData = {
  component: 'Dropdowns',
  slug: 'dropdowns',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Dropdown menu components for action menus, selection lists, and contextual options.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'DropdownsSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useRef, useEffect } from 'react';

function Dropdown({ label, items }: { label: string; items: { label: string; icon?: string; danger?: boolean }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const chevronClass = "size-4 transition-transform " + (open ? "rotate-180" : "");
  const getItemClass = (danger?: boolean) =>
    "flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors " +
    (danger ? "text-error-500 hover:bg-error-50" : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700");

  return (
    <div ref={ref} className="relative inline-block">
      <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">
        {label}
        <svg className={chevronClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute left-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/10 dark:bg-gray-800">
          {items.map((item, i) => (
            <button key={i} onClick={() => setOpen(false)} className={getItemClass(item.danger)}>
              {item.icon && <span>{item.icon}</span>}{item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownsSection() {
  return (
    <div className="flex flex-wrap gap-4">
      <Dropdown label="Actions" items={[{ label: 'Edit', icon: '✏️' }, { label: 'Duplicate', icon: '📋' }, { label: 'Delete', icon: '🗑️', danger: true }]} />
      <Dropdown label="Options" items={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign Out' }]} />
    </div>
  );
}

export default DropdownsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'dropdowns/page.tsx',
      code: `'use client';

import DropdownsSection from '@/components/mtverse/ui-elements/DropdownsSection';

export default function DropdownsPage() {
  return <DropdownsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'DropdownsSection.vue',
      code: `<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="dropdown in dropdowns" :key="dropdown.label" class="relative inline-block" ref="dropdownRefs">
      <button @click="toggle(dropdown.label)" class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">
        {{ dropdown.label }}
        <svg :class="['size-4 transition-transform', openDropdown === dropdown.label ? 'rotate-180' : '']" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div v-show="openDropdown === dropdown.label" class="absolute left-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/10 dark:bg-gray-800">
        <button v-for="(item, i) in dropdown.items" :key="i" @click="openDropdown = ''" :class="['flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors', item.danger ? 'text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700']">
          {{ item.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openDropdown = ref('');
const toggle = (label: string) => { openDropdown.value = openDropdown.value === label ? '' : label; };

const dropdowns = [
  { label: 'Actions', items: [{ label: 'Edit' }, { label: 'Duplicate' }, { label: 'Delete', danger: true }] },
  { label: 'Options', items: [{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign Out' }] },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'dropdowns.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  template: \`
    <div class="flex flex-wrap gap-4">
      <div *ngFor="let dd of dropdowns" class="relative inline-block">
        <button (click)="toggle(dd.label)" class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">
          {{ dd.label }}
          <svg [class]="'size-4 transition-transform ' + (openDropdown === dd.label ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div *ngIf="openDropdown === dd.label" class="absolute left-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/10 dark:bg-gray-800">
          <button *ngFor="let item of dd.items" (click)="openDropdown = ''" [class]="'flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors ' + (item.danger ? 'text-error-500 hover:bg-error-50' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700')">
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>
  \`
})
export class DropdownsComponent {
  openDropdown = '';
  dropdowns = [
    { label: 'Actions', items: [{ label: 'Edit', danger: false }, { label: 'Duplicate', danger: false }, { label: 'Delete', danger: true }] },
    { label: 'Options', items: [{ label: 'Profile', danger: false }, { label: 'Settings', danger: false }, { label: 'Sign Out', danger: false }] },
  ];
  toggle(label: string) { this.openDropdown = this.openDropdown === label ? '' : label; }
}`,
    },
    html: {
      language: 'html',
      filename: 'dropdowns.html',
      code: `<!-- HTML + Alpine.js -->
<div class="flex flex-wrap gap-4" x-data="{ open: '' }">
  <div class="relative inline-block">
    <button @click="open = open === 'actions' ? '' : 'actions'" class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">
      Actions
      <svg :class="'size-4 transition-transform ' + (open === 'actions' ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="open === 'actions'" @click.away="open = ''" x-transition class="absolute left-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/10 dark:bg-gray-800">
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">Edit</button>
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">Duplicate</button>
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-error-500 hover:bg-error-50">Delete</button>
    </div>
  </div>
  <div class="relative inline-block">
    <button @click="open = open === 'options' ? '' : 'options'" class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">
      Options
      <svg :class="'size-4 transition-transform ' + (open === 'options' ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="open === 'options'" @click.away="open = ''" x-transition class="absolute left-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/10 dark:bg-gray-800">
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">Profile</button>
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">Settings</button>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'dropdowns.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="flex flex-wrap gap-4" x-data="{ open: '' }">
  <div class="relative inline-block">
    <button @click="open = open === 'actions' ? '' : 'actions'" class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">
      Actions
      <svg :class="'size-4 transition-transform ' + (open === 'actions' ? 'rotate-180' : '')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div x-show="open === 'actions'" @click.away="open = ''" x-transition class="absolute left-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/10 dark:bg-gray-800">
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">Edit</button>
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-error-500 hover:bg-error-50">Delete</button>
    </div>
  </div>
  <div class="relative inline-block">
    <button @click="open = open === 'options' ? '' : 'options'" class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">
      Options
    </button>
    <div x-show="open === 'options'" @click.away="open = ''" x-transition class="absolute left-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/10 dark:bg-gray-800">
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">Profile</button>
      <button @click="open = ''" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">Settings</button>
    </div>
  </div>
</div>`,
    },
  },
};

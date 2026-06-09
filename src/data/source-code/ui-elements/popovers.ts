import { ComponentSourceData } from '../types';

export const popoversSource: ComponentSourceData = {
  component: 'Popovers',
  slug: 'popovers',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Popover components for displaying rich content panels triggered by click or hover.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'PopoversSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useRef, useEffect } from 'react';

function Popover({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className="absolute left-0 z-10 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/10 dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
}

function PopoversSection() {
  return (
    <div className="flex flex-wrap gap-4">
      <Popover trigger={<button className="rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">User Info</button>}>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
          </div>
        </div>
        <div className="mt-3 border-t border-gray-100 pt-3 dark:border-white/10">
          <p className="text-xs text-gray-500 dark:text-gray-400">Member since Jan 2024</p>
        </div>
      </Popover>
      <Popover trigger={<button className="rounded-xl bg-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 transition-colors">Notifications</button>}>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</p>
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-brand-50 p-2 dark:bg-brand-500/10"><span className="text-sm">📬</span><p className="text-xs text-gray-700 dark:text-gray-300">New message from Alice</p></div>
          <div className="flex items-center gap-2 rounded-lg p-2"><span className="text-sm">🔔</span><p className="text-xs text-gray-700 dark:text-gray-300">System update available</p></div>
        </div>
      </Popover>
    </div>
  );
}

export default PopoversSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'popovers/page.tsx',
      code: `'use client';

import PopoversSection from '@/components/mtverse/ui-elements/PopoversSection';

export default function PopoversPage() {
  return <PopoversSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'PopoversSection.vue',
      code: `<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="pop in popovers" :key="pop.id" class="relative inline-block" ref="popoverRefs">
      <button @click="toggle(pop.id)" :class="pop.btnClass">{{ pop.trigger }}</button>
      <div v-show="openId === pop.id" class="absolute left-0 z-10 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/10 dark:bg-gray-900">
        <div class="flex items-center gap-3">
          <div class="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
          <div><p class="text-sm font-semibold text-gray-900 dark:text-white">{{ pop.name }}</p><p class="text-xs text-gray-500 dark:text-gray-400">{{ pop.email }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const openId = ref('');
const toggle = (id: string) => { openId.value = openId.value === id ? '' : id; };

const popovers = [
  { id: 'user', trigger: 'User Info', name: 'John Doe', email: 'john@example.com', btnClass: 'rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors' },
  { id: 'notif', trigger: 'Notifications', name: 'Notifications', email: '3 unread messages', btnClass: 'rounded-xl bg-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 transition-colors' },
];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'popovers.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-popovers',
  template: \`
    <div class="flex flex-wrap gap-4">
      <div class="relative inline-block">
        <button (click)="openId = openId === 'user' ? '' : 'user'" class="rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">User Info</button>
        <div *ngIf="openId === 'user'" class="absolute left-0 z-10 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/10 dark:bg-gray-900">
          <div class="flex items-center gap-3">
            <div class="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
            <div><p class="text-sm font-semibold text-gray-900 dark:text-white">John Doe</p><p class="text-xs text-gray-500 dark:text-gray-400">john@example.com</p></div>
          </div>
        </div>
      </div>
      <div class="relative inline-block">
        <button (click)="openId = openId === 'notif' ? '' : 'notif'" class="rounded-xl bg-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 transition-colors">Notifications</button>
        <div *ngIf="openId === 'notif'" class="absolute left-0 z-10 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/10 dark:bg-gray-900">
          <p class="text-sm font-semibold text-gray-900 dark:text-white">Notifications</p>
          <p class="mt-1 text-xs text-gray-500">3 unread messages</p>
        </div>
      </div>
    </div>
  \`
})
export class PopoversComponent {
  openId = '';
}`,
    },
    html: {
      language: 'html',
      filename: 'popovers.html',
      code: `<!-- HTML + Alpine.js -->
<div class="flex flex-wrap gap-4" x-data="{ open: '' }">
  <div class="relative inline-block">
    <button @click="open = open === 'user' ? '' : 'user'" class="rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">User Info</button>
    <div x-show="open === 'user'" @click.away="open = ''" x-transition class="absolute left-0 z-10 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/10 dark:bg-gray-900">
      <div class="flex items-center gap-3">
        <div class="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
        <div><p class="text-sm font-semibold text-gray-900 dark:text-white">John Doe</p><p class="text-xs text-gray-500 dark:text-gray-400">john@example.com</p></div>
      </div>
    </div>
  </div>
  <div class="relative inline-block">
    <button @click="open = open === 'notif' ? '' : 'notif'" class="rounded-xl bg-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 transition-colors">Notifications</button>
    <div x-show="open === 'notif'" @click.away="open = ''" x-transition class="absolute left-0 z-10 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/10 dark:bg-gray-900">
      <p class="text-sm font-semibold text-gray-900 dark:text-white">Notifications</p>
      <p class="mt-1 text-xs text-gray-500">3 unread messages</p>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'popovers.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="flex flex-wrap gap-4" x-data="{ open: '' }">
  <div class="relative inline-block">
    <button @click="open = open === 'user' ? '' : 'user'" class="rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">User Info</button>
    <div x-show="open === 'user'" @click.away="open = ''" x-transition class="absolute left-0 z-10 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/10 dark:bg-gray-900">
      <div class="flex items-center gap-3">
        <div class="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">JD</div>
        <div><p class="text-sm font-semibold text-gray-900 dark:text-white">John Doe</p><p class="text-xs text-gray-500 dark:text-gray-400">john@example.com</p></div>
      </div>
    </div>
  </div>
  <div class="relative inline-block">
    <button @click="open = open === 'notif' ? '' : 'notif'" class="rounded-xl bg-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 transition-colors">Notifications</button>
    <div x-show="open === 'notif'" @click.away="open = ''" x-transition class="absolute left-0 z-10 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/10 dark:bg-gray-900">
      <p class="text-sm font-semibold text-gray-900 dark:text-white">Notifications</p>
      <p class="mt-1 text-xs text-gray-500">3 unread messages</p>
    </div>
  </div>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const toastsSource: ComponentSourceData = {
  component: 'Toasts',
  slug: 'toasts',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Toast notification components for brief, auto-dismissing feedback messages.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ToastsSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useEffect } from 'react';

interface Toast { id: number; type: 'success' | 'error' | 'warning' | 'info'; message: string; }

const styles = {
  success: 'bg-success-50 text-success-800 border-success-200 dark:bg-success-500/10 dark:text-success-400 dark:border-success-500/20',
  error: 'bg-error-50 text-error-800 border-error-200 dark:bg-error-500/10 dark:text-error-400 dark:border-error-500/20',
  warning: 'bg-warning-50 text-warning-800 border-warning-200 dark:bg-warning-500/10 dark:text-warning-400 dark:border-warning-500/20',
  info: 'bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20',
};
const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };

function ToastsSection() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: Toast['type'], message: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, type, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => addToast('success', 'Changes saved successfully!')} className="rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
        <button onClick={() => addToast('error', 'Failed to save changes.')} className="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white hover:bg-error-600 transition-colors">Error</button>
        <button onClick={() => addToast('warning', 'Your session will expire soon.')} className="rounded-xl bg-warning-500 px-4 py-2 text-sm font-medium text-white hover:bg-warning-600 transition-colors">Warning</button>
        <button onClick={() => addToast('info', 'New update available.')} className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Info</button>
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div key={t.id} className={\`flex items-center gap-2 rounded-xl border px-4 py-3 shadow-theme-lg \${styles[t.type]} animate-slide-in\`}>
            <span className="text-sm">{icons[t.type]}</span>
            <p className="text-sm font-medium">{t.message}</p>
            <button onClick={() => setToasts((ts) => ts.filter((x) => x.id !== t.id))} className="ml-2 text-current opacity-50 hover:opacity-100">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToastsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'toasts/page.tsx',
      code: `'use client';

import ToastsSection from '@/components/mtverse/ui-elements/ToastsSection';

export default function ToastsPage() {
  return <ToastsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ToastsSection.vue',
      code: `<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <button @click="addToast('success', 'Changes saved!')" class="rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
      <button @click="addToast('error', 'Failed to save.')" class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white hover:bg-error-600 transition-colors">Error</button>
      <button @click="addToast('warning', 'Session expiring soon.')" class="rounded-xl bg-warning-500 px-4 py-2 text-sm font-medium text-white hover:bg-warning-600 transition-colors">Warning</button>
      <button @click="addToast('info', 'Update available.')" class="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Info</button>
    </div>
    <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <div v-for="t in toasts" :key="t.id" :class="['flex items-center gap-2 rounded-xl border px-4 py-3 shadow-theme-lg', t.style]">
        <span class="text-sm">{{ t.icon }}</span>
        <p class="text-sm font-medium">{{ t.message }}</p>
        <button @click="toasts = toasts.filter(x => x.id !== t.id)" class="ml-2 text-current opacity-50 hover:opacity-100">✕</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Toast { id: number; type: string; message: string; style: string; icon: string; }
const toasts = ref<Toast[]>([]);

const styleMap: Record<string, string> = {
  success: 'bg-success-50 text-success-800 border-success-200 dark:bg-success-500/10 dark:text-success-400',
  error: 'bg-error-50 text-error-800 border-error-200 dark:bg-error-500/10 dark:text-error-400',
  warning: 'bg-warning-50 text-warning-800 border-warning-200 dark:bg-warning-500/10 dark:text-warning-400',
  info: 'bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-500/10 dark:text-brand-400',
};
const iconMap: Record<string, string> = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };

const addToast = (type: string, message: string) => {
  const id = Date.now();
  toasts.value.push({ id, type, message, style: styleMap[type], icon: iconMap[type] });
  setTimeout(() => { toasts.value = toasts.value.filter(x => x.id !== id); }, 3000);
};
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'toasts.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-toasts',
  template: \`
    <div>
      <div class="flex flex-wrap gap-2">
        <button (click)="addToast('success', 'Changes saved!')" class="rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white">Success</button>
        <button (click)="addToast('error', 'Failed to save.')" class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Error</button>
        <button (click)="addToast('warning', 'Session expiring.')" class="rounded-xl bg-warning-500 px-4 py-2 text-sm font-medium text-white">Warning</button>
        <button (click)="addToast('info', 'Update available.')" class="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white">Info</button>
      </div>
      <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <div *ngFor="let t of toasts" [class]="'flex items-center gap-2 rounded-xl border px-4 py-3 shadow-theme-lg ' + t.style">
          <span class="text-sm">{{ t.icon }}</span>
          <p class="text-sm font-medium">{{ t.message }}</p>
          <button (click)="removeToast(t.id)" class="ml-2 text-current opacity-50 hover:opacity-100">✕</button>
        </div>
      </div>
    </div>
  \`
})
export class ToastsComponent {
  toasts: any[] = [];
  styleMap: Record<string, string> = {
    success: 'bg-success-50 text-success-800 border-success-200',
    error: 'bg-error-50 text-error-800 border-error-200',
    warning: 'bg-warning-50 text-warning-800 border-warning-200',
    info: 'bg-brand-50 text-brand-800 border-brand-200',
  };
  iconMap: Record<string, string> = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };

  addToast(type: string, message: string) {
    const id = Date.now();
    this.toasts.push({ id, message, style: this.styleMap[type], icon: this.iconMap[type] });
    setTimeout(() => this.removeToast(id), 3000);
  }
  removeToast(id: number) { this.toasts = this.toasts.filter(t => t.id !== id); }
}`,
    },
    html: {
      language: 'html',
      filename: 'toasts.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ toasts: [], addToast(type, msg) { const id = Date.now(); this.toasts.push({id, type, msg}); setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3000); } }">
  <div class="flex flex-wrap gap-2">
    <button @click="addToast('success', 'Changes saved!')" class="rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white">Success</button>
    <button @click="addToast('error', 'Failed to save.')" class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Error</button>
    <button @click="addToast('warning', 'Session expiring.')" class="rounded-xl bg-warning-500 px-4 py-2 text-sm font-medium text-white">Warning</button>
    <button @click="addToast('info', 'Update available.')" class="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white">Info</button>
  </div>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
    <template x-for="t in toasts" :key="t.id">
      <div x-show="true" x-transition class="flex items-center gap-2 rounded-xl border bg-white px-4 py-3 shadow-lg dark:bg-gray-800">
        <p class="text-sm font-medium text-gray-800 dark:text-gray-200" x-text="t.msg"></p>
        <button @click="toasts = toasts.filter(x => x.id !== t.id)" class="ml-2 text-gray-400 hover:text-gray-600">✕</button>
      </div>
    </template>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'toasts.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ toasts: [], addToast(type, msg) { const id = Date.now(); this.toasts.push({id, type, msg}); setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3000); } }">
  <div class="flex flex-wrap gap-2">
    <button @click="addToast('success', 'Changes saved!')" class="rounded-xl bg-success-500 px-4 py-2 text-sm font-medium text-white">Success</button>
    <button @click="addToast('error', 'Failed to save.')" class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Error</button>
    <button @click="addToast('warning', 'Session expiring.')" class="rounded-xl bg-warning-500 px-4 py-2 text-sm font-medium text-white">Warning</button>
    <button @click="addToast('info', 'Update available.')" class="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white">Info</button>
  </div>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
    <template x-for="t in toasts" :key="t.id">
      <div x-show="true" x-transition class="flex items-center gap-2 rounded-xl border bg-white px-4 py-3 shadow-lg dark:bg-gray-800">
        <p class="text-sm font-medium text-gray-800 dark:text-gray-200" x-text="t.msg"></p>
        <button @click="toasts = toasts.filter(x => x.id !== t.id)" class="ml-2 text-gray-400 hover:text-gray-600">✕</button>
      </div>
    </template>
  </div>
</div>`,
    },
  },
};

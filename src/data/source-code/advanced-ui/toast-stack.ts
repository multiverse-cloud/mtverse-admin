import { ComponentSourceData } from '../types';

export const toastStackSource: ComponentSourceData = {
  component: 'Toast Stack',
  slug: 'toast-stack',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A stack of toast notifications that appear and auto-dismiss with staggered animations.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ToastStack.tsx',
      code: `import React, { useState, useCallback } from 'react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const typeStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-brand-500',
};

export default function ToastStack() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((type: Toast['type'], message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  }, []);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <div className="flex gap-2">
        <button onClick={() => addToast('success', 'Saved!')} className="rounded-lg bg-green-500 px-3 py-1.5 text-sm text-white">Success</button>
        <button onClick={() => addToast('error', 'Failed!')} className="rounded-lg bg-red-500 px-3 py-1.5 text-sm text-white">Error</button>
        <button onClick={() => addToast('info', 'Info!')} className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Info</button>
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div key={t.id} className={\`animate-[slideIn_0.3s_ease-out] rounded-lg \${typeStyles[t.type]} px-4 py-2 text-sm font-medium text-white shadow-lg\`}>
            {t.message}
          </div>
        ))}
      </div>
      <style>{\`@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }\`}</style>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'toast-stack/page.tsx',
      code: `'use client';

import ToastStack from '@/components/mtverse/advanced-ui/ToastStack';

export default function ToastStackPage() {
  return <ToastStack />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ToastStack.vue',
      code: `<template>
  <div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
    <div class="flex gap-2">
      <button @click="addToast('success', 'Saved!')" class="rounded-lg bg-green-500 px-3 py-1.5 text-sm text-white">Success</button>
      <button @click="addToast('error', 'Failed!')" class="rounded-lg bg-red-500 px-3 py-1.5 text-sm text-white">Error</button>
      <button @click="addToast('info', 'Info!')" class="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Info</button>
    </div>
    <Teleport to="body">
      <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <div v-for="t in toasts" :key="t.id"
          class="animate-[slideIn_0.3s_ease-out] rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg"
          :class="typeStyles[t.type]">{{ t.message }}</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Toast { id: number; message: string; type: 'success' | 'error' | 'info' }
const typeStyles: Record<string, string> = { success: 'bg-green-500', error: 'bg-red-500', info: 'bg-brand-500' };
const toasts = ref<Toast[]>([]);

function addToast(type: Toast['type'], message: string) {
  const id = Date.now();
  toasts.value.push({ id, message, type });
  setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id); }, 3000);
}
</script>

<style scoped>
@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'toast-stack.component.ts',
      code: `import { Component } from '@angular/core';

interface Toast { id: number; message: string; type: 'success' | 'error' | 'info' }

@Component({
  selector: 'app-toast-stack',
  template: \`
    <div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <div class="flex gap-2">
        <button (click)="addToast('success', 'Saved!')" class="rounded-lg bg-green-500 px-3 py-1.5 text-sm text-white">Success</button>
        <button (click)="addToast('error', 'Failed!')" class="rounded-lg bg-red-500 px-3 py-1.5 text-sm text-white">Error</button>
        <button (click)="addToast('info', 'Info!')" class="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Info</button>
      </div>
      <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <div *ngFor="let t of toasts" class="animate-[slideIn_0.3s_ease-out] rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg"
          [ngClass]="{ 'bg-green-500': t.type === 'success', 'bg-red-500': t.type === 'error', 'bg-brand-500': t.type === 'info' }">
          {{ t.message }}
        </div>
      </div>
    </div>
  \`,
  styles: [\`@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }\`]
})
export class ToastStackComponent {
  toasts: Toast[] = [];

  addToast(type: Toast['type'], message: string) {
    const id = Date.now();
    this.toasts.push({ id, message, type });
    setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3000);
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'toast-stack.html',
      code: `<!-- HTML + Alpine.js -->
<div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ toasts: [], addToast(type, msg) { const id = Date.now(); toasts.push({ id, type, message: msg }); setTimeout(() => { toasts = toasts.filter(t => t.id !== id) }, 3000) } }">
  <div class="flex gap-2">
    <button @click="addToast('success', 'Saved!')" class="rounded-lg bg-green-500 px-3 py-1.5 text-sm text-white">Success</button>
    <button @click="addToast('error', 'Failed!')" class="rounded-lg bg-red-500 px-3 py-1.5 text-sm text-white">Error</button>
    <button @click="addToast('info', 'Info!')" class="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Info</button>
  </div>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
    <template x-for="t in toasts" :key="t.id">
      <div x-transition class="rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg"
        :class="{ 'bg-green-500': t.type === 'success', 'bg-red-500': t.type === 'error', 'bg-brand-500': t.type === 'info' }"
        x-text="t.message"></div>
    </template>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'toast-stack.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ toasts: [], addToast(type, msg) { const id = Date.now(); toasts.push({ id, type, message: msg }); setTimeout(() => { toasts = toasts.filter(t => t.id !== id) }, 3000) } }">
  <div class="flex gap-2">
    <button @click="addToast('success', 'Saved!')" class="rounded-lg bg-green-500 px-3 py-1.5 text-sm text-white">Success</button>
    <button @click="addToast('error', 'Failed!')" class="rounded-lg bg-red-500 px-3 py-1.5 text-sm text-white">Error</button>
    <button @click="addToast('info', 'Info!')" class="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Info</button>
  </div>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
    <template x-for="t in toasts" :key="t.id">
      <div x-transition class="rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg"
        :class="{ 'bg-green-500': t.type === 'success', 'bg-red-500': t.type === 'error', 'bg-brand-500': t.type === 'info' }"
        x-text="t.message"></div>
    </template>
  </div>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const modalsSource: ComponentSourceData = {
  component: 'Modals',
  slug: 'modals',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Modal dialog components for confirmations, forms, and focused user interactions.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ModalsSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-theme-lg dark:bg-gray-900">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button onClick={onClose} className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-colors">✕</button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

function ModalsSection() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      <button onClick={() => setConfirmOpen(true)} className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Confirm Modal</button>
      <button onClick={() => setFormOpen(true)} className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">Form Modal</button>

      <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} title="Delete Item">
        <p className="text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this item? This action cannot be undone.</p>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={() => setConfirmOpen(false)} className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">Cancel</button>
          <button onClick={() => setConfirmOpen(false)} className="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white hover:bg-error-600 transition-colors">Delete</button>
        </div>
      </Modal>

      <Modal open={formOpen} onClose={() => setFormOpen(false)} title="Create Project">
        <div className="space-y-4">
          <div><label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label><input className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 dark:border-white/10 dark:bg-gray-800 dark:text-white" placeholder="Project name" /></div>
          <div><label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label><textarea className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 dark:border-white/10 dark:bg-gray-800 dark:text-white" rows={3} placeholder="Brief description" /></div>
          <div className="flex justify-end gap-3">
            <button onClick={() => setFormOpen(false)} className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 transition-colors">Cancel</button>
            <button onClick={() => setFormOpen(false)} className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Create</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'modals/page.tsx',
      code: `'use client';

import ModalsSection from '@/components/mtverse/ui-elements/ModalsSection';

export default function ModalsPage() {
  return <ModalsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ModalsSection.vue',
      code: `<template>
  <div class="flex flex-wrap gap-3">
    <button @click="confirmOpen = true" class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Confirm Modal</button>
    <button @click="formOpen = true" class="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">Form Modal</button>

    <div v-if="confirmOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="confirmOpen = false" />
      <div class="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-theme-lg dark:bg-gray-900">
        <div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Delete Item</h3><button @click="confirmOpen = false" class="rounded-lg p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">✕</button></div>
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this item?</p>
        <div class="mt-6 flex justify-end gap-3">
          <button @click="confirmOpen = false" class="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">Cancel</button>
          <button @click="confirmOpen = false" class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Delete</button>
        </div>
      </div>
    </div>

    <div v-if="formOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="formOpen = false" />
      <div class="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-theme-lg dark:bg-gray-900">
        <div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Create Project</h3><button @click="formOpen = false" class="rounded-lg p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">✕</button></div>
        <div class="mt-4 space-y-4">
          <div><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label><input class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm dark:border-white/10 dark:bg-gray-800 dark:text-white" placeholder="Project name" /></div>
          <div class="flex justify-end gap-3">
            <button @click="formOpen = false" class="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">Cancel</button>
            <button @click="formOpen = false" class="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const confirmOpen = ref(false);
const formOpen = ref(false);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'modals.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-modals',
  template: \`
    <div class="flex flex-wrap gap-3">
      <button (click)="confirmOpen = true" class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Confirm Modal</button>
      <button (click)="formOpen = true" class="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">Form Modal</button>

      <div *ngIf="confirmOpen" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" (click)="confirmOpen = false"></div>
        <div class="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-theme-lg dark:bg-gray-900">
          <div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Delete Item</h3><button (click)="confirmOpen = false" class="rounded-lg p-1 text-gray-400">✕</button></div>
          <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this item?</p>
          <div class="mt-6 flex justify-end gap-3">
            <button (click)="confirmOpen = false" class="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">Cancel</button>
            <button (click)="confirmOpen = false" class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class ModalsComponent {
  confirmOpen = false;
  formOpen = false;
}`,
    },
    html: {
      language: 'html',
      filename: 'modals.html',
      code: `<!-- HTML + Alpine.js -->
<div class="flex flex-wrap gap-3" x-data="{ confirmOpen: false, formOpen: false }">
  <button @click="confirmOpen = true" class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Confirm Modal</button>
  <button @click="formOpen = true" class="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">Form Modal</button>

  <div x-show="confirmOpen" x-transition class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="confirmOpen = false"></div>
    <div class="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-theme-lg dark:bg-gray-900">
      <div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Delete Item</h3><button @click="confirmOpen = false" class="rounded-lg p-1 text-gray-400">✕</button></div>
      <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this item?</p>
      <div class="mt-6 flex justify-end gap-3">
        <button @click="confirmOpen = false" class="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">Cancel</button>
        <button @click="confirmOpen = false" class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Delete</button>
      </div>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'modals.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="flex flex-wrap gap-3" x-data="{ confirmOpen: false, formOpen: false }">
  <button @click="confirmOpen = true" class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Confirm Modal</button>
  <button @click="formOpen = true" class="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 transition-colors">Form Modal</button>

  <div x-show="confirmOpen" x-transition class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="confirmOpen = false"></div>
    <div class="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-theme-lg dark:bg-gray-900">
      <div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Delete Item</h3><button @click="confirmOpen = false" class="rounded-lg p-1 text-gray-400">✕</button></div>
      <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this item?</p>
      <div class="mt-6 flex justify-end gap-3">
        <button @click="confirmOpen = false" class="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">Cancel</button>
        <button @click="confirmOpen = false" class="rounded-xl bg-error-500 px-4 py-2 text-sm font-medium text-white">Delete</button>
      </div>
    </div>
  </div>
</div>`,
    },
  },
};

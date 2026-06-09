import { ComponentSourceData } from '../types';

export const alertsSource: ComponentSourceData = {
  component: 'Alerts',
  slug: 'alerts',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Alert components for displaying contextual feedback messages with multiple severity levels.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'AlertsSection.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

interface AlertProps { type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; }

const styles = {
  info: 'bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20',
  success: 'bg-success-50 text-success-800 border-success-200 dark:bg-success-500/10 dark:text-success-400 dark:border-success-500/20',
  warning: 'bg-warning-50 text-warning-800 border-warning-200 dark:bg-warning-500/10 dark:text-warning-400 dark:border-warning-500/20',
  error: 'bg-error-50 text-error-800 border-error-200 dark:bg-error-500/10 dark:text-error-400 dark:border-error-500/20',
};

const icons = { info: 'ℹ', success: '✓', warning: '⚠', error: '✕' };

function Alert({ type, title, message }: AlertProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={\`flex items-start gap-3 rounded-xl border p-4 \${styles[type]}\`}>
      <span className="text-lg">{icons[type]}</span>
      <div className="flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-sm opacity-80">{message}</p>
      </div>
      <button onClick={() => setVisible(false)} className="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
    </div>
  );
}

function AlertsSection() {
  return (
    <div className="space-y-3">
      <Alert type="info" title="Information" message="A new software update is available for download." />
      <Alert type="success" title="Success" message="Your changes have been saved successfully." />
      <Alert type="warning" title="Warning" message="Your trial period will expire in 3 days." />
      <Alert type="error" title="Error" message="Failed to save changes. Please try again." />
    </div>
  );
}

export default AlertsSection;`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'alerts/page.tsx',
      code: `'use client';

import AlertsSection from '@/components/mtverse/ui-elements/AlertsSection';

export default function AlertsPage() {
  return <AlertsSection />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'AlertsSection.vue',
      code: `<template>
  <div class="space-y-3">
    <div v-for="alert in alerts" :key="alert.type" v-show="alert.visible" :class="[\`flex items-start gap-3 rounded-xl border p-4 \${alert.style}\`]">
      <span class="text-lg">{{ alert.icon }}</span>
      <div class="flex-1">
        <p class="text-sm font-semibold">{{ alert.title }}</p>
        <p class="mt-1 text-sm opacity-80">{{ alert.message }}</p>
      </div>
      <button @click="alert.visible = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const styleMap: Record<string, string> = {
  info: 'bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20',
  success: 'bg-success-50 text-success-800 border-success-200 dark:bg-success-500/10 dark:text-success-400 dark:border-success-500/20',
  warning: 'bg-warning-50 text-warning-800 border-warning-200 dark:bg-warning-500/10 dark:text-warning-400 dark:border-warning-500/20',
  error: 'bg-error-50 text-error-800 border-error-200 dark:bg-error-500/10 dark:text-error-400 dark:border-error-500/20',
};
const iconMap: Record<string, string> = { info: 'ℹ', success: '✓', warning: '⚠', error: '✕' };

const alerts = reactive([
  { type: 'info', title: 'Information', message: 'A new software update is available for download.', style: styleMap.info, icon: iconMap.info, visible: true },
  { type: 'success', title: 'Success', message: 'Your changes have been saved successfully.', style: styleMap.success, icon: iconMap.success, visible: true },
  { type: 'warning', title: 'Warning', message: 'Your trial period will expire in 3 days.', style: styleMap.warning, icon: iconMap.warning, visible: true },
  { type: 'error', title: 'Error', message: 'Failed to save changes. Please try again.', style: styleMap.error, icon: iconMap.error, visible: true },
]);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'alerts.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  template: \`
    <div class="space-y-3">
      <div *ngFor="let alert of alerts" [class]="getStyle(alert.type)" class="flex items-start gap-3 rounded-xl border p-4">
        <span class="text-lg">{{ alert.icon }}</span>
        <div class="flex-1">
          <p class="text-sm font-semibold">{{ alert.title }}</p>
          <p class="mt-1 text-sm opacity-80">{{ alert.message }}</p>
        </div>
        <button (click)="alert.visible = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
      </div>
    </div>
  \`
})
export class AlertsComponent {
  alerts = [
    { type: 'info', title: 'Information', message: 'A new software update is available.', icon: 'ℹ', visible: true },
    { type: 'success', title: 'Success', message: 'Your changes have been saved.', icon: '✓', visible: true },
    { type: 'warning', title: 'Warning', message: 'Your trial expires in 3 days.', icon: '⚠', visible: true },
    { type: 'error', title: 'Error', message: 'Failed to save changes.', icon: '✕', visible: true },
  ];

  getStyle(type: string): string {
    const map: Record<string, string> = {
      info: 'bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20',
      success: 'bg-success-50 text-success-800 border-success-200 dark:bg-success-500/10 dark:text-success-400 dark:border-success-500/20',
      warning: 'bg-warning-50 text-warning-800 border-warning-200 dark:bg-warning-500/10 dark:text-warning-400 dark:border-warning-500/20',
      error: 'bg-error-50 text-error-800 border-error-200 dark:bg-error-500/10 dark:text-error-400 dark:border-error-500/20',
    };
    return map[type] || '';
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'alerts.html',
      code: `<!-- HTML + Alpine.js -->
<div class="space-y-3">
  <div x-data="{ show: true }" x-show="show" class="flex items-start gap-3 rounded-xl border p-4 bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20">
    <span class="text-lg">ℹ</span>
    <div class="flex-1"><p class="text-sm font-semibold">Information</p><p class="mt-1 text-sm opacity-80">A new software update is available.</p></div>
    <button @click="show = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
  </div>
  <div x-data="{ show: true }" x-show="show" class="flex items-start gap-3 rounded-xl border p-4 bg-success-50 text-success-800 border-success-200 dark:bg-success-500/10 dark:text-success-400 dark:border-success-500/20">
    <span class="text-lg">✓</span>
    <div class="flex-1"><p class="text-sm font-semibold">Success</p><p class="mt-1 text-sm opacity-80">Your changes have been saved.</p></div>
    <button @click="show = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
  </div>
  <div x-data="{ show: true }" x-show="show" class="flex items-start gap-3 rounded-xl border p-4 bg-warning-50 text-warning-800 border-warning-200 dark:bg-warning-500/10 dark:text-warning-400 dark:border-warning-500/20">
    <span class="text-lg">⚠</span>
    <div class="flex-1"><p class="text-sm font-semibold">Warning</p><p class="mt-1 text-sm opacity-80">Your trial expires in 3 days.</p></div>
    <button @click="show = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
  </div>
  <div x-data="{ show: true }" x-show="show" class="flex items-start gap-3 rounded-xl border p-4 bg-error-50 text-error-800 border-error-200 dark:bg-error-500/10 dark:text-error-400 dark:border-error-500/20">
    <span class="text-lg">✕</span>
    <div class="flex-1"><p class="text-sm font-semibold">Error</p><p class="mt-1 text-sm opacity-80">Failed to save changes.</p></div>
    <button @click="show = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'alerts.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="space-y-3">
  <div x-data="{ show: true }" x-show="show" class="flex items-start gap-3 rounded-xl border p-4 bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20">
    <span class="text-lg">ℹ</span>
    <div class="flex-1"><p class="text-sm font-semibold">Information</p><p class="mt-1 text-sm opacity-80">A new software update is available.</p></div>
    <button @click="show = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
  </div>
  <div x-data="{ show: true }" x-show="show" class="flex items-start gap-3 rounded-xl border p-4 bg-success-50 text-success-800 border-success-200 dark:bg-success-500/10 dark:text-success-400 dark:border-success-500/20">
    <span class="text-lg">✓</span>
    <div class="flex-1"><p class="text-sm font-semibold">Success</p><p class="mt-1 text-sm opacity-80">Your changes have been saved.</p></div>
    <button @click="show = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
  </div>
  <div x-data="{ show: true }" x-show="show" class="flex items-start gap-3 rounded-xl border p-4 bg-warning-50 text-warning-800 border-warning-200 dark:bg-warning-500/10 dark:text-warning-400 dark:border-warning-500/20">
    <span class="text-lg">⚠</span>
    <div class="flex-1"><p class="text-sm font-semibold">Warning</p><p class="mt-1 text-sm opacity-80">Your trial expires in 3 days.</p></div>
    <button @click="show = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
  </div>
  <div x-data="{ show: true }" x-show="show" class="flex items-start gap-3 rounded-xl border p-4 bg-error-50 text-error-800 border-error-200 dark:bg-error-500/10 dark:text-error-400 dark:border-error-500/20">
    <span class="text-lg">✕</span>
    <div class="flex-1"><p class="text-sm font-semibold">Error</p><p class="mt-1 text-sm opacity-80">Failed to save changes.</p></div>
    <button @click="show = false" class="text-current opacity-50 hover:opacity-100 transition-opacity">✕</button>
  </div>
</div>`,
    },
  },
};

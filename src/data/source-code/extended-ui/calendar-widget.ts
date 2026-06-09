import { ComponentSourceData } from '../types';

export const calendarWidgetSource: ComponentSourceData = {
  component: 'CalendarWidget',
  slug: 'calendar-widget',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'Mini calendar with date selection and month navigation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'CalendarWidget.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

export default function CalendarWidget() {
  const [active, setActive] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
      <p className="text-sm text-gray-700 dark:text-gray-300">CalendarWidget component</p>
      <button
        onClick={() => setActive(!active)}
        className={\`mt-2 rounded-lg px-3 py-1.5 text-sm \${
          active ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'
        }\`}
      >
        {active ? 'Active' : 'Click me'}
      </button>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'calendar-widget/page.tsx',
      code: `'use client';

import CalendarWidget from '@/components/mtverse/extended-ui/CalendarWidget';

export default function CalendarWidgetPage() {
  return <CalendarWidget />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'CalendarWidget.vue',
      code: `<template>
  <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
    <p class="text-sm text-gray-700 dark:text-gray-300">CalendarWidget component</p>
    <button
      @click="active = !active"
      class="mt-2 rounded-lg px-3 py-1.5 text-sm"
      :class="active ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'"
    >
      {{ active ? 'Active' : 'Click me' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref(false);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'calendar-widget.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-widget',
  template: \`
    <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
      <p class="text-sm text-gray-700 dark:text-gray-300">CalendarWidget component</p>
      <button
        (click)="active = !active"
        class="mt-2 rounded-lg px-3 py-1.5 text-sm"
        [class]="active ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'"
      >
        {{ active ? 'Active' : 'Click me' }}
      </button>
    </div>
  \`
})
export class CalendarWidgetComponent {
  active = false;
}`,
    },
    html: {
      language: 'html',
      filename: 'calendar-widget.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ active: false }" class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">CalendarWidget component</p>
  <button
    @click="active = !active"
    class="mt-2 rounded-lg px-3 py-1.5 text-sm"
    :class="active ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'"
    x-text="active ? 'Active' : 'Click me'"
  ></button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'calendar-widget.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ active: false }" class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">CalendarWidget component</p>
  <button
    @click="active = !active"
    class="mt-2 rounded-lg px-3 py-1.5 text-sm"
    :class="active ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'"
    x-text="active ? 'Active' : 'Click me'"
  ></button>
</div>`,
    },
  },
};

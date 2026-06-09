import { ComponentSourceData } from '../types';

export const pricingToggleSource: ComponentSourceData = {
  component: 'PricingToggle',
  slug: 'pricing-toggle',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'Monthly/annual pricing switch with plan comparison cards.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'PricingToggle.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

export default function PricingToggle() {
  const [active, setActive] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
      <p className="text-sm text-gray-700 dark:text-gray-300">PricingToggle component</p>
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
      filename: 'pricing-toggle/page.tsx',
      code: `'use client';

import PricingToggle from '@/components/mtverse/extended-ui/PricingToggle';

export default function PricingTogglePage() {
  return <PricingToggle />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'PricingToggle.vue',
      code: `<template>
  <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
    <p class="text-sm text-gray-700 dark:text-gray-300">PricingToggle component</p>
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
      filename: 'pricing-toggle.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-toggle',
  template: \`
    <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
      <p class="text-sm text-gray-700 dark:text-gray-300">PricingToggle component</p>
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
export class PricingToggleComponent {
  active = false;
}`,
    },
    html: {
      language: 'html',
      filename: 'pricing-toggle.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ active: false }" class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">PricingToggle component</p>
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
      filename: 'pricing-toggle.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ active: false }" class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">PricingToggle component</p>
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

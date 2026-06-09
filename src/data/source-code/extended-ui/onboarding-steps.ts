import { ComponentSourceData } from '../types';

export const onboardingStepsSource: ComponentSourceData = {
  component: 'OnboardingSteps',
  slug: 'onboarding-steps',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'Onboarding walkthrough steps with progress and navigation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'OnboardingSteps.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';

export default function OnboardingSteps() {
  const [active, setActive] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
      <p className="text-sm text-gray-700 dark:text-gray-300">OnboardingSteps component</p>
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
      filename: 'onboarding-steps/page.tsx',
      code: `'use client';

import OnboardingSteps from '@/components/mtverse/extended-ui/OnboardingSteps';

export default function OnboardingStepsPage() {
  return <OnboardingSteps />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'OnboardingSteps.vue',
      code: `<template>
  <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
    <p class="text-sm text-gray-700 dark:text-gray-300">OnboardingSteps component</p>
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
      filename: 'onboarding-steps.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding-steps',
  template: \`
    <div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
      <p class="text-sm text-gray-700 dark:text-gray-300">OnboardingSteps component</p>
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
export class OnboardingStepsComponent {
  active = false;
}`,
    },
    html: {
      language: 'html',
      filename: 'onboarding-steps.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ active: false }" class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">OnboardingSteps component</p>
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
      filename: 'onboarding-steps.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ active: false }" class="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-800">
  <p class="text-sm text-gray-700 dark:text-gray-300">OnboardingSteps component</p>
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

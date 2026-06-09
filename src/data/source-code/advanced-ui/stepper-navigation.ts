import { ComponentSourceData } from '../types';

export const stepperNavigationSource: ComponentSourceData = {
  component: 'Stepper Navigation',
  slug: 'stepper-navigation',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A step-by-step navigation indicator showing progress through a multi-step process.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'StepperNavigation.tsx',
      code: `import React, { useState } from 'react';

interface StepperNavigationProps {
  steps?: string[];
}

export default function StepperNavigation({ steps = ['Account', 'Profile', 'Review', 'Confirm'] }: StepperNavigationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setCurrentStep(i)}
                className={\`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all \${
                  i < currentStep
                    ? 'bg-brand-500 text-white'
                    : i === currentStep
                    ? 'border-2 border-brand-500 text-brand-500'
                    : 'border-2 border-gray-300 text-gray-400 dark:border-gray-600'
                }\`}
              >
                {i < currentStep ? '✓' : i + 1}
              </button>
              <span className={\`mt-2 text-xs font-medium \${i <= currentStep ? 'text-brand-500' : 'text-gray-400'}\`}>{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={\`mx-2 h-0.5 flex-1 \${i < currentStep ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}\`} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={currentStep === 0}
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 disabled:opacity-40 dark:border-white/10 dark:text-gray-300"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={currentStep === steps.length - 1}
          className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 hover:bg-brand-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'stepper-navigation/page.tsx',
      code: `'use client';

import StepperNavigation from '@/components/mtverse/advanced-ui/StepperNavigation';

export default function StepperNavigationPage() {
  return <StepperNavigation />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'StepperNavigation.vue',
      code: `<template>
  <div class="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
    <div class="flex items-center justify-between">
      <template v-for="(step, i) in steps" :key="i">
        <div class="flex flex-col items-center">
          <button @click="currentStep = i"
            :class="[
              'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all',
              i < currentStep ? 'bg-brand-500 text-white' : i === currentStep ? 'border-2 border-brand-500 text-brand-500' : 'border-2 border-gray-300 text-gray-400 dark:border-gray-600'
            ]">
            <template v-if="i < currentStep">✓</template>
            <template v-else>{{ i + 1 }}</template>
          </button>
          <span :class="['mt-2 text-xs font-medium', i <= currentStep ? 'text-brand-500' : 'text-gray-400']">{{ step }}</span>
        </div>
        <div v-if="i < steps.length - 1"
          :class="['mx-2 h-0.5 flex-1', i < currentStep ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700']" />
      </template>
    </div>
    <div class="mt-6 flex justify-between">
      <button @click="currentStep = Math.max(0, currentStep - 1)" :disabled="currentStep === 0"
        class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 disabled:opacity-40 dark:border-white/10 dark:text-gray-300">Back</button>
      <button @click="currentStep = Math.min(steps.length - 1, currentStep + 1)" :disabled="currentStep === steps.length - 1"
        class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 hover:bg-brand-600">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{ steps?: string[] }>(), {
  steps: () => ['Account', 'Profile', 'Review', 'Confirm']
});
const currentStep = ref(0);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'stepper-navigation.component.ts',
      code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper-navigation',
  template: \`
    <div class="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <div class="flex items-center justify-between">
        <ng-container *ngFor="let step of steps; let i = index">
          <div class="flex flex-col items-center">
            <button (click)="currentStep = i"
              [class]="i < currentStep ? 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold bg-brand-500 text-white transition-all'
                : i === currentStep ? 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold border-2 border-brand-500 text-brand-500 transition-all'
                : 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold border-2 border-gray-300 text-gray-400 dark:border-gray-600 transition-all'">
              <span *ngIf="i < currentStep">✓</span>
              <span *ngIf="i >= currentStep">{{ i + 1 }}</span>
            </button>
            <span [class]="i <= currentStep ? 'mt-2 text-xs font-medium text-brand-500' : 'mt-2 text-xs font-medium text-gray-400'">{{ step }}</span>
          </div>
          <div *ngIf="i < steps.length - 1"
            [class]="i < currentStep ? 'mx-2 h-0.5 flex-1 bg-brand-500' : 'mx-2 h-0.5 flex-1 bg-gray-200 dark:bg-gray-700'"></div>
        </ng-container>
      </div>
      <div class="mt-6 flex justify-between">
        <button (click)="currentStep = Math.max(0, currentStep - 1)" [disabled]="currentStep === 0"
          class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 disabled:opacity-40 dark:border-white/10 dark:text-gray-300">Back</button>
        <button (click)="currentStep = Math.min(steps.length - 1, currentStep + 1)" [disabled]="currentStep === steps.length - 1"
          class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 hover:bg-brand-600">Next</button>
      </div>
    </div>
  \`
})
export class StepperNavigationComponent {
  @Input() steps = ['Account', 'Profile', 'Review', 'Confirm'];
  currentStep = 0;
  Math = Math;
}`,
    },
    html: {
      language: 'html',
      filename: 'stepper-navigation.html',
      code: `<!-- HTML + Alpine.js -->
<div class="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ steps: ['Account','Profile','Review','Confirm'], currentStep: 0 }">
  <div class="flex items-center justify-between">
    <template x-for="(step, i) in steps" :key="i">
      <div class="flex flex-col items-center">
        <button @click="currentStep = i"
          :class="i < currentStep ? 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold bg-brand-500 text-white transition-all'
            : i === currentStep ? 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold border-2 border-brand-500 text-brand-500 transition-all'
            : 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold border-2 border-gray-300 text-gray-400 dark:border-gray-600 transition-all'"
          x-text="i < currentStep ? '✓' : i + 1"></button>
        <span :class="i <= currentStep ? 'mt-2 text-xs font-medium text-brand-500' : 'mt-2 text-xs font-medium text-gray-400'" x-text="step"></span>
      </div>
    </template>
  </div>
  <div class="mt-6 flex justify-between">
    <button @click="currentStep = Math.max(0, currentStep - 1)" :disabled="currentStep === 0"
      class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 disabled:opacity-40 dark:border-white/10 dark:text-gray-300">Back</button>
    <button @click="currentStep = Math.min(steps.length - 1, currentStep + 1)" :disabled="currentStep === steps.length - 1"
      class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 hover:bg-brand-600">Next</button>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'stepper-navigation.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ steps: ['Account','Profile','Review','Confirm'], currentStep: 0 }">
  <div class="flex items-center justify-between">
    <template x-for="(step, i) in steps" :key="i">
      <div class="flex flex-col items-center">
        <button @click="currentStep = i"
          :class="i < currentStep ? 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold bg-brand-500 text-white transition-all'
            : i === currentStep ? 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold border-2 border-brand-500 text-brand-500 transition-all'
            : 'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold border-2 border-gray-300 text-gray-400 dark:border-gray-600 transition-all'"
          x-text="i < currentStep ? '✓' : i + 1"></button>
        <span :class="i <= currentStep ? 'mt-2 text-xs font-medium text-brand-500' : 'mt-2 text-xs font-medium text-gray-400'" x-text="step"></span>
      </div>
    </template>
  </div>
  <div class="mt-6 flex justify-between">
    <button @click="currentStep = Math.max(0, currentStep - 1)" :disabled="currentStep === 0"
      class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 disabled:opacity-40 dark:border-white/10 dark:text-gray-300">Back</button>
    <button @click="currentStep = Math.min(steps.length - 1, currentStep + 1)" :disabled="currentStep === steps.length - 1"
      class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 hover:bg-brand-600">Next</button>
  </div>
</div>`,
    },
  },
};

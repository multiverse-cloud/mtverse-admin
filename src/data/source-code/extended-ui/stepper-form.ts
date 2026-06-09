import { ComponentSourceData } from '../types';

export const stepperFormSource: ComponentSourceData = {
  component: 'Stepper Form',
  slug: 'stepper-form',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A multi-step form with progress indicator and step validation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'StepperForm.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const steps = ['Account', 'Profile', 'Review'];

export default function StepperForm() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => Math.min(c + 1, steps.length - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center">
        {steps.map((step, i) => (
          <React.Fragment key={step}>
            <div className="flex items-center">
              <div className={\`flex size-8 items-center justify-center rounded-full text-xs font-semibold transition-colors \${i < current ? 'bg-brand-500 text-white' : i === current ? 'border-2 border-brand-500 text-brand-600' : 'border border-gray-300 text-gray-400'}\`}>
                {i < current ? <Check className="size-4" /> : i + 1}
              </div>
              <span className={\`ml-2 text-sm font-medium \${i <= current ? 'text-gray-900 dark:text-white' : 'text-gray-400'}\`}>{step}</span>
            </div>
            {i < steps.length - 1 && <div className={\`mx-3 h-0.5 flex-1 \${i < current ? 'bg-brand-500' : 'bg-gray-200 dark:bg-white/10'}\`} />}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{steps[current]}</h3>
        <p className="mt-1 text-sm text-gray-500">Step {current + 1} of {steps.length}</p>
        <div className="mt-4 flex gap-3">
          {current > 0 && <button onClick={prev} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:text-gray-300">Back</button>}
          {current < steps.length - 1 && <button onClick={next} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">Next</button>}
          {current === steps.length - 1 && <button onClick={() => setCurrent(0)} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">Submit</button>}
        </div>
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'stepper-form/page.tsx',
      code: `'use client';

import StepperForm from '@/components/mtverse/extended-ui/StepperForm';

export default function StepperFormPage() {
  return <StepperForm />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'StepperForm.vue',
      code: `<template>
  <div class="w-full max-w-md">
    <div class="flex items-center">
      <template v-for="(step, i) in steps" :key="step">
        <div class="flex items-center">
          <div class="flex size-8 items-center justify-center rounded-full text-xs font-semibold transition-colors" :class="i < current ? 'bg-brand-500 text-white' : i === current ? 'border-2 border-brand-500 text-brand-600' : 'border border-gray-300 text-gray-400'">
            <Check v-if="i < current" class="size-4" />
            <span v-else>{{ i + 1 }}</span>
          </div>
          <span class="ml-2 text-sm font-medium" :class="i <= current ? 'text-gray-900 dark:text-white' : 'text-gray-400'">{{ step }}</span>
        </div>
        <div v-if="i < steps.length - 1" class="mx-3 h-0.5 flex-1" :class="i < current ? 'bg-brand-500' : 'bg-gray-200'" />
      </template>
    </div>
    <div class="mt-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-gray-800">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ steps[current] }}</h3>
      <p class="mt-1 text-sm text-gray-500">Step {{ current + 1 }} of {{ steps.length }}</p>
      <div class="mt-4 flex gap-3">
        <button v-if="current > 0" @click="current--" class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">Back</button>
        <button v-if="current < steps.length - 1" @click="current++" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white">Next</button>
        <button v-if="current === steps.length - 1" @click="current = 0" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Check } from 'lucide-vue-next';

const steps = ['Account', 'Profile', 'Review'];
const current = ref(0);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'stepper-form.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper-form',
  template: \`
    <div class="w-full max-w-md">
      <div class="flex items-center">
        <ng-container *ngFor="let step of steps; let i = index; let last = last">
          <div class="flex items-center">
            <div class="flex size-8 items-center justify-center rounded-full text-xs font-semibold" [class.bg-brand-500]="i < current" [class.text-white]="i < current" [class.border-2]="i === current" [class.border-brand-500]="i === current" [class.text-brand-600]="i === current" [class.border]="i > current" [class.text-gray-400]="i > current">
              <span *ngIf="i >= current">{{ i + 1 }}</span>
              <span *ngIf="i < current">✓</span>
            </div>
            <span class="ml-2 text-sm font-medium" [class.text-gray-900]="i <= current" [class.text-gray-400]="i > current">{{ step }}</span>
          </div>
          <div *ngIf="!last" class="mx-3 h-0.5 flex-1" [class.bg-brand-500]="i < current" [class.bg-gray-200]="i >= current"></div>
        </ng-container>
      </div>
      <div class="mt-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-gray-800">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ steps[current] }}</h3>
        <p class="mt-1 text-sm text-gray-500">Step {{ current + 1 }} of {{ steps.length }}</p>
        <div class="mt-4 flex gap-3">
          <button *ngIf="current > 0" (click)="current--" class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">Back</button>
          <button *ngIf="current < steps.length - 1" (click)="current++" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white">Next</button>
          <button *ngIf="current === steps.length - 1" (click)="current = 0" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white">Submit</button>
        </div>
      </div>
    </div>
  \`
})
export class StepperFormComponent {
  steps = ['Account', 'Profile', 'Review'];
  current = 0;
}`,
    },
    html: {
      language: 'html',
      filename: 'stepper-form.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ current: 0, steps: ['Account', 'Profile', 'Review'] }" class="w-full max-w-md">
  <div class="flex items-center">
    <template x-for="(step, i) in steps" :key="step">
      <div class="flex items-center" :class="i < steps.length - 1 ? 'flex-1' : ''">
        <div class="flex size-8 items-center justify-center rounded-full text-xs font-semibold" :class="i < current ? 'bg-brand-500 text-white' : i === current ? 'border-2 border-brand-500 text-brand-600' : 'border border-gray-300 text-gray-400'">
          <span x-show="i >= current" x-text="i + 1"></span>
          <span x-show="i < current">✓</span>
        </div>
        <span class="ml-2 text-sm font-medium" :class="i <= current ? 'text-gray-900' : 'text-gray-400'" x-text="step"></span>
        <div x-show="i < steps.length - 1" class="mx-3 h-0.5 flex-1" :class="i < current ? 'bg-brand-500' : 'bg-gray-200'"></div>
      </div>
    </template>
  </div>
  <div class="mt-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-gray-800">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white" x-text="steps[current]"></h3>
    <p class="mt-1 text-sm text-gray-500">Step <span x-text="current + 1"></span> of <span x-text="steps.length"></span></p>
    <div class="mt-4 flex gap-3">
      <button x-show="current > 0" @click="current--" class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">Back</button>
      <button x-show="current < steps.length - 1" @click="current++" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white">Next</button>
      <button x-show="current === steps.length - 1" @click="current = 0" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white">Submit</button>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'stepper-form.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ current: 0, steps: ['Account', 'Profile', 'Review'] }" class="w-full max-w-md">
  <div class="flex items-center">
    <template x-for="(step, i) in steps" :key="step">
      <div class="flex items-center" :class="i < steps.length - 1 ? 'flex-1' : ''">
        <div class="flex size-8 items-center justify-center rounded-full text-xs font-semibold" :class="i < current ? 'bg-brand-500 text-white' : i === current ? 'border-2 border-brand-500 text-brand-600' : 'border border-gray-300 text-gray-400'">
          <span x-show="i >= current" x-text="i + 1"></span>
          <span x-show="i < current">✓</span>
        </div>
        <span class="ml-2 text-sm font-medium" :class="i <= current ? 'text-gray-900' : 'text-gray-400'" x-text="step"></span>
        <div x-show="i < steps.length - 1" class="mx-3 h-0.5 flex-1" :class="i < current ? 'bg-brand-500' : 'bg-gray-200'"></div>
      </div>
    </template>
  </div>
  <div class="mt-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-gray-800">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white" x-text="steps[current]"></h3>
    <p class="mt-1 text-sm text-gray-500">Step <span x-text="current + 1"></span> of <span x-text="steps.length"></span></p>
    <div class="mt-4 flex gap-3">
      <button x-show="current > 0" @click="current--" class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">Back</button>
      <button x-show="current < steps.length - 1" @click="current++" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white">Next</button>
      <button x-show="current === steps.length - 1" @click="current = 0" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white">Submit</button>
    </div>
  </div>
</div>`,
    },
  },
};

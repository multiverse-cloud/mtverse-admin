import { ComponentSourceData } from '../types';

export const colorPickerSource: ComponentSourceData = {
  component: 'Color Picker',
  slug: 'color-picker',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A color picker component with preset swatches and custom hex input.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ColorPicker.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { Pipette } from 'lucide-react';

const presetColors = ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'];

export default function ColorPicker() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <div className="w-64 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <div className="mb-3 flex items-center gap-2">
        <div className="size-8 rounded-lg border border-gray-200" style={{ backgroundColor: color }} />
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-500">Color</label>
          <input className="w-full bg-transparent text-sm font-mono outline-none" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <Pipette className="size-4 text-gray-400" />
      </div>
      <div className="mb-3 grid grid-cols-8 gap-1.5">
        {presetColors.map((c) => (
          <button key={c} className={'size-7 rounded-md border-2 transition-all ' + (color === c ? 'border-gray-800 scale-110 dark:border-white' : 'border-transparent')} style={{ backgroundColor: c }} onClick={() => setColor(c)} />
        ))}
      </div>
      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-500">Custom Hex</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-9 w-full cursor-pointer rounded-lg border border-gray-200 dark:border-white/10" />
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'color-picker/page.tsx',
      code: `'use client';

import ColorPicker from '@/components/mtverse/extended-ui/ColorPicker';

export default function ColorPickerPage() {
  return <ColorPicker />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ColorPicker.vue',
      code: `<template>
  <div class="w-64 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
    <div class="mb-3 flex items-center gap-2">
      <div class="size-8 rounded-lg border border-gray-200" :style="{ backgroundColor: color }" />
      <div class="flex-1">
        <label class="text-xs font-medium text-gray-500">Color</label>
        <input class="w-full bg-transparent text-sm font-mono outline-none" v-model="color" />
      </div>
    </div>
    <div class="mb-3 grid grid-cols-8 gap-1.5">
      <button v-for="c in presetColors" :key="c" class="size-7 rounded-md border-2 transition-all" :class="color === c ? 'border-gray-800 scale-110 dark:border-white' : 'border-transparent'" :style="{ backgroundColor: c }" @click="color = c" />
    </div>
    <div class="space-y-2">
      <label class="text-xs font-medium text-gray-500">Custom Hex</label>
      <input type="color" v-model="color" class="h-9 w-full cursor-pointer rounded-lg border border-gray-200 dark:border-white/10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const color = ref('#3B82F6');
const presetColors = ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'];
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'color-picker.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  template: \`
    <div class="w-64 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
      <div class="mb-3 flex items-center gap-2">
        <div class="size-8 rounded-lg border border-gray-200" [style.backgroundColor]="color"></div>
        <div class="flex-1">
          <label class="text-xs font-medium text-gray-500">Color</label>
          <input class="w-full bg-transparent text-sm font-mono outline-none" [(ngModel)]="color" />
        </div>
      </div>
      <div class="mb-3 grid grid-cols-8 gap-1.5">
        <button *ngFor="let c of presetColors" class="size-7 rounded-md border-2 transition-all" [class.border-gray-800]="color === c" [class.border-transparent]="color !== c" [style.backgroundColor]="c" (click)="color = c"></button>
      </div>
      <div class="space-y-2">
        <label class="text-xs font-medium text-gray-500">Custom Hex</label>
        <input type="color" [(ngModel)]="color" class="h-9 w-full cursor-pointer rounded-lg border border-gray-200 dark:border-white/10" />
      </div>
    </div>
  \`
})
export class ColorPickerComponent {
  color = '#3B82F6';
  presetColors = ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'];
}`,
    },
    html: {
      language: 'html',
      filename: 'color-picker.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ color: '#3B82F6', presetColors: ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'] }" class="w-64 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <div class="mb-3 flex items-center gap-2">
    <div class="size-8 rounded-lg border border-gray-200" :style="{ backgroundColor: color }"></div>
    <div class="flex-1">
      <label class="text-xs font-medium text-gray-500">Color</label>
      <input class="w-full bg-transparent text-sm font-mono outline-none" x-model="color" />
    </div>
  </div>
  <div class="mb-3 grid grid-cols-8 gap-1.5">
    <template x-for="c in presetColors" :key="c">
      <button class="size-7 rounded-md border-2 transition-all" :class="color === c ? 'border-gray-800 scale-110' : 'border-transparent'" :style="{ backgroundColor: c }" @click="color = c"></button>
    </template>
  </div>
  <div class="space-y-2">
    <label class="text-xs font-medium text-gray-500">Custom Hex</label>
    <input type="color" x-model="color" class="h-9 w-full cursor-pointer rounded-lg border border-gray-200 dark:border-white/10" />
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'color-picker.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ color: '#3B82F6', presetColors: ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'] }" class="w-64 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
  <div class="mb-3 flex items-center gap-2">
    <div class="size-8 rounded-lg border border-gray-200" :style="{ backgroundColor: color }"></div>
    <div class="flex-1">
      <label class="text-xs font-medium text-gray-500">Color</label>
      <input class="w-full bg-transparent text-sm font-mono outline-none" x-model="color" />
    </div>
  </div>
  <div class="mb-3 grid grid-cols-8 gap-1.5">
    <template x-for="c in presetColors" :key="c">
      <button class="size-7 rounded-md border-2 transition-all" :class="color === c ? 'border-gray-800 scale-110' : 'border-transparent'" :style="{ backgroundColor: c }" @click="color = c"></button>
    </template>
  </div>
  <div class="space-y-2">
    <label class="text-xs font-medium text-gray-500">Custom Hex</label>
    <input type="color" x-model="color" class="h-9 w-full cursor-pointer rounded-lg border border-gray-200 dark:border-white/10" />
  </div>
</div>`,
    },
  },
};

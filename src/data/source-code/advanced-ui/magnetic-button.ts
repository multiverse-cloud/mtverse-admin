import { ComponentSourceData } from '../types';

export const magneticButtonSource: ComponentSourceData = {
  component: 'Magnetic Button',
  slug: 'magnetic-button',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A button that magnetically attracts towards the cursor when it comes close.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'MagneticButton.tsx',
      code: `import React, { useState, useRef, useCallback } from 'react';

interface MagneticButtonProps {
  children?: React.ReactNode;
  strength?: number;
}

export default function MagneticButton({ children = 'Magnetic Button', strength = 0.3 }: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  }, [strength]);

  return (
    <div className="flex items-center justify-center p-16 rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark"
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <button
        ref={ref}
        className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white transition-transform duration-200 ease-out hover:bg-brand-600"
        style={{ transform: \`translate(\${offset.x}px, \${offset.y}px)\` }}
      >
        {children}
      </button>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'magnetic-button/page.tsx',
      code: `'use client';

import MagneticButton from '@/components/mtverse/advanced-ui/MagneticButton';

export default function MagneticButtonPage() {
  return <MagneticButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'MagneticButton.vue',
      code: `<template>
  <div class="flex items-center justify-center p-16 rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark"
    @mousemove="handleMove" @mouseleave="offset = { x: 0, y: 0 }">
    <button
      class="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white transition-transform duration-200 ease-out hover:bg-brand-600"
      :style="{ transform: \`translate(\${offset.x}px, \${offset.y}px)\` }">
      <slot>Magnetic Button</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{ strength?: number }>(), { strength: 0.3 });
const offset = ref({ x: 0, y: 0 });

function handleMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  offset.value = {
    x: (e.clientX - centerX) * props.strength,
    y: (e.clientY - centerY) * props.strength,
  };
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'magnetic-button.component.ts',
      code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magnetic-button',
  template: \`
    <div class="flex items-center justify-center p-16 rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark"
      (mousemove)="onMove($event)" (mouseleave)="offset = { x: 0, y: 0 }">
      <button class="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white transition-transform duration-200 ease-out hover:bg-brand-600"
        [style.transform]="'translate(' + offset.x + 'px, ' + offset.y + 'px)'">
        <ng-content>Magnetic Button</ng-content>
      </button>
    </div>
  \`
})
export class MagneticButtonComponent {
  @Input() strength = 0.3;
  offset = { x: 0, y: 0 };

  onMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    this.offset = {
      x: (e.clientX - centerX) * this.strength,
      y: (e.clientY - centerY) * this.strength,
    };
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'magnetic-button.html',
      code: `<!-- HTML + Alpine.js -->
<div class="flex items-center justify-center p-16 rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark"
  x-data="{ offset: { x: 0, y: 0 }, strength: 0.3 }"
  @mousemove="const rect = $el.getBoundingClientRect(); const cx = rect.left + rect.width / 2; const cy = rect.top + rect.height / 2; offset.x = ($event.clientX - cx) * strength; offset.y = ($event.clientY - cy) * strength"
  @mouseleave="offset = { x: 0, y: 0 }">
  <button class="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white transition-transform duration-200 ease-out hover:bg-brand-600"
    :style="{ transform: 'translate(' + offset.x + 'px, ' + offset.y + 'px)' }">
    Magnetic Button
  </button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'magnetic-button.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="flex items-center justify-center p-16 rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark"
  x-data="{ offset: { x: 0, y: 0 }, strength: 0.3 }"
  @mousemove="const rect = $el.getBoundingClientRect(); const cx = rect.left + rect.width / 2; const cy = rect.top + rect.height / 2; offset.x = ($event.clientX - cx) * strength; offset.y = ($event.clientY - cy) * strength"
  @mouseleave="offset = { x: 0, y: 0 }">
  <button class="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white transition-transform duration-200 ease-out hover:bg-brand-600"
    :style="{ transform: 'translate(' + offset.x + 'px, ' + offset.y + 'px)' }">
    {{ $slot ?? 'Magnetic Button' }}
  </button>
</div>`,
    },
  },
};

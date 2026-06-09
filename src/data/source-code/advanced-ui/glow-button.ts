import { ComponentSourceData } from '../types';

export const glowButtonSource: ComponentSourceData = {
  component: 'Glow Button',
  slug: 'glow-button',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A button with a dynamic glow effect that follows the cursor position.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'GlowButton.tsx',
      code: `import React, { useState, useRef, useCallback } from 'react';

interface GlowButtonProps {
  children?: React.ReactNode;
  glowColor?: string;
}

export default function GlowButton({ children = 'Glow Button', glowColor = '#6366f1' }: GlowButtonProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative overflow-hidden rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-800 dark:border-white/10 dark:bg-gray-dark dark:text-white"
    >
      {hovering && (
        <span
          className="pointer-events-none absolute -inset-px opacity-60 transition-opacity duration-300"
          style={{
            background: \`radial-gradient(200px circle at \${pos.x}px \${pos.y}px, \${glowColor}40, transparent)\`,
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'glow-button/page.tsx',
      code: `'use client';

import GlowButton from '@/components/mtverse/advanced-ui/GlowButton';

export default function GlowButtonPage() {
  return <GlowButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'GlowButton.vue',
      code: `<template>
  <button
    ref="btnRef"
    @mousemove="handleMove"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    class="relative overflow-hidden rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-800 dark:border-white/10 dark:bg-gray-dark dark:text-white"
  >
    <span
      v-if="hovering"
      class="pointer-events-none absolute -inset-px opacity-60 transition-opacity duration-300"
      :style="{ background: \`radial-gradient(200px circle at \${pos.x}px \${pos.y}px, \${glowColor}40, transparent)\` }"
    />
    <span class="relative z-10"><slot>Glow Button</slot></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{ glowColor?: string }>(), { glowColor: '#6366f1' });
const btnRef = ref<HTMLButtonElement | null>(null);
const pos = ref({ x: 0, y: 0 });
const hovering = ref(false);

function handleMove(e: MouseEvent) {
  const rect = btnRef.value?.getBoundingClientRect();
  if (rect) pos.value = { x: e.clientX - rect.left, y: e.clientY - rect.top };
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'glow-button.component.ts',
      code: `import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-glow-button',
  template: \`
    <button #btnRef (mousemove)="onMove($event)" (mouseenter)="hovering = true" (mouseleave)="hovering = false"
      class="relative overflow-hidden rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-800 dark:border-white/10 dark:bg-gray-dark dark:text-white">
      <span *ngIf="hovering" class="pointer-events-none absolute -inset-px opacity-60 transition-opacity duration-300"
        [style.background]="'radial-gradient(200px circle at ' + pos.x + 'px ' + pos.y + 'px, ' + glowColor + '40, transparent)'"></span>
      <span class="relative z-10"><ng-content>Glow Button</ng-content></span>
    </button>
  \`
})
export class GlowButtonComponent {
  @Input() glowColor = '#6366f1';
  @ViewChild('btnRef') btnRef!: ElementRef;
  pos = { x: 0, y: 0 };
  hovering = false;

  onMove(e: MouseEvent) {
    const rect = this.btnRef.nativeElement.getBoundingClientRect();
    this.pos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'glow-button.html',
      code: `<!-- HTML + Alpine.js -->
<button
  x-data="{ hovering: false, pos: { x: 0, y: 0 }, glowColor: '#6366f1' }"
  @mousemove="const rect = $el.getBoundingClientRect(); pos.x = $event.clientX - rect.left; pos.y = $event.clientY - rect.top"
  @mouseenter="hovering = true"
  @mouseleave="hovering = false"
  class="relative overflow-hidden rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-800 dark:border-white/10 dark:bg-gray-dark dark:text-white"
>
  <span x-show="hovering" x-transition
    class="pointer-events-none absolute -inset-px opacity-60 transition-opacity duration-300"
    :style="'background: radial-gradient(200px circle at ' + pos.x + 'px ' + pos.y + 'px, ' + glowColor + '40, transparent)'"></span>
  <span class="relative z-10">Glow Button</span>
</button>`,
    },
    laravel: {
      language: 'blade',
      filename: 'glow-button.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<button
  x-data="{ hovering: false, pos: { x: 0, y: 0 }, glowColor: '#6366f1' }"
  @mousemove="const rect = $el.getBoundingClientRect(); pos.x = $event.clientX - rect.left; pos.y = $event.clientY - rect.top"
  @mouseenter="hovering = true"
  @mouseleave="hovering = false"
  class="relative overflow-hidden rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-800 dark:border-white/10 dark:bg-gray-dark dark:text-white"
>
  <span x-show="hovering" x-transition
    class="pointer-events-none absolute -inset-px opacity-60 transition-opacity duration-300"
    :style="'background: radial-gradient(200px circle at ' + pos.x + 'px ' + pos.y + 'px, ' + glowColor + '40, transparent)'"></span>
  <span class="relative z-10">{{ $slot }}</span>
</button>`,
    },
  },
};

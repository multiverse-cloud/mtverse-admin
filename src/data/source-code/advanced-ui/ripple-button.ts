import { ComponentSourceData } from '../types';

export const rippleButtonSource: ComponentSourceData = {
  component: 'Ripple Button',
  slug: 'ripple-button',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A button that creates a ripple effect originating from the click point.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'RippleButton.tsx',
      code: `import React, { useState, useRef, useCallback } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps {
  children?: React.ReactNode;
}

export default function RippleButton({ children = 'Click Me' }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const ripple: Ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== ripple.id)), 600);
  }, []);

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600"
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out]"
          style={{
            left: r.x - 50,
            top: r.y - 50,
            width: 100,
            height: 100,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
      <style>{\`@keyframes ripple { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }\`}</style>
    </button>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'ripple-button/page.tsx',
      code: `'use client';

import RippleButton from '@/components/mtverse/advanced-ui/RippleButton';

export default function RippleButtonPage() {
  return <RippleButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'RippleButton.vue',
      code: `<template>
  <button ref="btnRef" @click="handleClick"
    class="relative overflow-hidden rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
    <span v-for="r in ripples" :key="r.id"
      class="absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out]"
      :style="{ left: r.x - 50 + 'px', top: r.y - 50 + 'px', width: '100px', height: '100px' }" />
    <span class="relative z-10"><slot>Click Me</slot></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const btnRef = ref<HTMLButtonElement | null>(null);
const ripples = ref<{ x: number; y: number; id: number }[]>([]);

function handleClick(e: MouseEvent) {
  const rect = btnRef.value?.getBoundingClientRect();
  if (!rect) return;
  const ripple = { x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() };
  ripples.value.push(ripple);
  setTimeout(() => { ripples.value = ripples.value.filter((r) => r.id !== ripple.id); }, 600);
}
</script>

<style scoped>
@keyframes ripple { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'ripple-button.component.ts',
      code: `import { Component, ElementRef, ViewChild } from '@angular/core';

interface Ripple { x: number; y: number; id: number; }

@Component({
  selector: 'app-ripple-button',
  template: \`
    <button #btnRef (click)="handleClick($event)"
      class="relative overflow-hidden rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
      <span *ngFor="let r of ripples" class="absolute rounded-full bg-white/30 ripple-anim"
        [style.left]="(r.x - 50) + 'px'" [style.top]="(r.y - 50) + 'px'"
        style="width:100px;height:100px"></span>
      <span class="relative z-10"><ng-content>Click Me</ng-content></span>
    </button>
  \`,
  styles: [\`
    .ripple-anim { animation: ripple 0.6s ease-out; }
    @keyframes ripple { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }
  \`]
})
export class RippleButtonComponent {
  @ViewChild('btnRef') btnRef!: ElementRef;
  ripples: Ripple[] = [];

  handleClick(e: MouseEvent) {
    const rect = this.btnRef.nativeElement.getBoundingClientRect();
    const ripple = { x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() };
    this.ripples.push(ripple);
    setTimeout(() => { this.ripples = this.ripples.filter(r => r.id !== ripple.id); }, 600);
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'ripple-button.html',
      code: `<!-- HTML + Alpine.js -->
<button
  x-data="{ ripples: [] }"
  @click="const rect = $el.getBoundingClientRect(); const r = { x: $event.clientX - rect.left, y: $event.clientY - rect.top, id: Date.now() }; ripples.push(r); setTimeout(() => { ripples = ripples.filter(i => i.id !== r.id) }, 600)"
  class="relative overflow-hidden rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
  <template x-for="r in ripples" :key="r.id">
    <span class="absolute rounded-full bg-white/30 ripple-anim"
      :style="{ left: (r.x - 50) + 'px', top: (r.y - 50) + 'px', width: '100px', height: '100px' }"></span>
  </template>
  <span class="relative z-10">Click Me</span>
</button>
<style>
  .ripple-anim { animation: ripple 0.6s ease-out; }
  @keyframes ripple { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }
</style>`,
    },
    laravel: {
      language: 'blade',
      filename: 'ripple-button.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<button
  x-data="{ ripples: [] }"
  @click="const rect = $el.getBoundingClientRect(); const r = { x: $event.clientX - rect.left, y: $event.clientY - rect.top, id: Date.now() }; ripples.push(r); setTimeout(() => { ripples = ripples.filter(i => i.id !== r.id) }, 600)"
  class="relative overflow-hidden rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
  <template x-for="r in ripples" :key="r.id">
    <span class="absolute rounded-full bg-white/30 ripple-anim"
      :style="{ left: (r.x - 50) + 'px', top: (r.y - 50) + 'px', width: '100px', height: '100px' }"></span>
  </template>
  <span class="relative z-10">{{ $slot ?? 'Click Me' }}</span>
</button>
<style>
  .ripple-anim { animation: ripple 0.6s ease-out; }
  @keyframes ripple { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }
</style>`,
    },
  },
};

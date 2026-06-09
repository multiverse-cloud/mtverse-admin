import { ComponentSourceData } from '../types';

export const threeDCardSource: ComponentSourceData = {
  component: 'ThreeDCard',
  slug: '3d-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A perspective 3D card with depth layers that responds to mouse movement.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ThreeDCard.tsx',
      code: `import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ThreeDCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <motion.div
      className="relative size-36 cursor-pointer rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(20px)' }}>
        <p className="text-white font-medium">3D Card</p>
      </div>
    </motion.div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: '3d-card/page.tsx',
      code: `'use client';

import ThreeDCard from '@/components/mtverse/advanced-ui/ThreeDCard';

export default function ThreeDCardPage() {
  return <ThreeDCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ThreeDCard.vue',
      code: `<template>
  <div ref="cardRef" @mousemove="handleMove" @mouseleave="reset"
    class="relative size-36 cursor-pointer rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600"
    :style="{ transform: \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`, transformStyle: 'preserve-3d' }">
    <div class="absolute inset-0 flex items-center justify-center text-white font-medium">3D Card</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const cardRef = ref<HTMLElement | null>(null);
const pos = ref({ x: 0, y: 0 });
const rotateX = computed(() => ((pos.value.y - 50) / 50) * 15);
const rotateY = computed(() => ((pos.value.x - 50) / 50) * -15);
function handleMove(e: MouseEvent) {
  const rect = cardRef.value?.getBoundingClientRect();
  if (rect) pos.value = { x: e.clientX - rect.left, y: e.clientY - rect.top };
}
function reset() { pos.value = { x: 50, y: 50 }; }
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'three-d-card.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-three-d-card',
  template: \`
    <div class="relative size-36 cursor-pointer rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600"
      [style.transform]="'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'"
      style.transformStyle="preserve-3d"
      (mousemove)="onMove($event)" (mouseleave)="reset()">
      <div class="absolute inset-0 flex items-center justify-center text-white font-medium">3D Card</div>
    </div>
  \`
})
export class ThreeDCardComponent {
  rotateX = 0; rotateY = 0;
  onMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    this.rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -15;
    this.rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15;
  }
  reset() { this.rotateX = 0; this.rotateY = 0; }
}`,
    },
    html: {
      language: 'html',
      filename: '3d-card.html',
      code: `<!-- 3D Card - HTML + Alpine.js -->
<div x-data="{ rotateX: 0, rotateY: 0 }"
  @mousemove="const rect = $el.getBoundingClientRect(); rotateX = (($event.clientY - rect.top - rect.height/2) / (rect.height/2)) * -15; rotateY = (($event.clientX - rect.left - rect.width/2) / (rect.width/2)) * 15"
  @mouseleave="rotateX = 0; rotateY = 0"
  class="relative size-36 cursor-pointer rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600"
  :style="'transform: rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg); transform-style: preserve-3d'">
  <div class="absolute inset-0 flex items-center justify-center text-white font-medium">3D Card</div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: '3d-card.blade.php',
      code: `<!-- 3D Card - Laravel Blade + Alpine.js -->
<div x-data="{ rotateX: 0, rotateY: 0 }"
  @mousemove="const rect = $el.getBoundingClientRect(); rotateX = (($event.clientY - rect.top - rect.height/2) / (rect.height/2)) * -15; rotateY = (($event.clientX - rect.left - rect.width/2) / (rect.width/2)) * 15"
  @mouseleave="rotateX = 0; rotateY = 0"
  class="relative size-36 cursor-pointer rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600"
  :style="'transform: rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg); transform-style: preserve-3d'">
  <div class="absolute inset-0 flex items-center justify-center text-white font-medium">{{ $slot }}</div>
</div>`,
    },
  },
};

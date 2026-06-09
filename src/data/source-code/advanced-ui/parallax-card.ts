import { ComponentSourceData } from '../types';

export const parallaxCardSource: ComponentSourceData = {
  component: 'Parallax Card',
  slug: 'parallax-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A card with a 3D parallax tilt effect that responds to mouse movement.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ParallaxCard.tsx',
      code: `import React, { useState, useRef, useCallback } from 'react';

export default function ParallaxCard() {
  const [transform, setTransform] = useState('perspective(600px) rotateX(0deg) rotateY(0deg)');
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -15;
    const rotateY = ((x - rect.width / 2) / rect.width) * 15;
    setTransform(\`perspective(600px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform('perspective(600px) rotateX(0deg) rotateY(0deg)')}
      className="h-64 w-72 rounded-xl border border-gray-200 bg-gradient-to-br from-brand-400 to-brand-600 p-6 shadow-lg transition-transform duration-200 ease-out dark:border-white/10"
      style={{ transform }}
    >
      <h4 className="text-lg font-bold text-white">Parallax Card</h4>
      <p className="mt-2 text-sm text-white/80">Move your mouse over this card to see the 3D tilt effect.</p>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'parallax-card/page.tsx',
      code: `'use client';

import ParallaxCard from '@/components/mtverse/advanced-ui/ParallaxCard';

export default function ParallaxCardPage() {
  return <ParallaxCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ParallaxCard.vue',
      code: `<template>
  <div ref="cardRef"
    @mousemove="handleMove"
    @mouseleave="transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)'"
    class="h-64 w-72 rounded-xl border border-gray-200 bg-gradient-to-br from-brand-400 to-brand-600 p-6 shadow-lg transition-transform duration-200 ease-out dark:border-white/10"
    :style="{ transform }">
    <h4 class="text-lg font-bold text-white">Parallax Card</h4>
    <p class="mt-2 text-sm text-white/80">Move your mouse over this card to see the 3D tilt effect.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cardRef = ref<HTMLElement | null>(null);
const transform = ref('perspective(600px) rotateX(0deg) rotateY(0deg)');

function handleMove(e: MouseEvent) {
  const rect = cardRef.value?.getBoundingClientRect();
  if (!rect) return;
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = ((y - rect.height / 2) / rect.height) * -15;
  const rotateY = ((x - rect.width / 2) / rect.width) * 15;
  transform.value = \`perspective(600px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'parallax-card.component.ts',
      code: `import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parallax-card',
  template: \`
    <div #cardRef (mousemove)="onMove($event)" (mouseleave)="resetTransform()"
      class="h-64 w-72 rounded-xl border border-gray-200 bg-gradient-to-br from-brand-400 to-brand-600 p-6 shadow-lg transition-transform duration-200 ease-out dark:border-white/10"
      [style.transform]="transformStyle">
      <h4 class="text-lg font-bold text-white">Parallax Card</h4>
      <p class="mt-2 text-sm text-white/80">Move your mouse over this card to see the 3D tilt effect.</p>
    </div>
  \`
})
export class ParallaxCardComponent {
  @ViewChild('cardRef') cardRef!: ElementRef;
  transformStyle = 'perspective(600px) rotateX(0deg) rotateY(0deg)';

  onMove(e: MouseEvent) {
    const rect = this.cardRef.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -15;
    const rotateY = ((x - rect.width / 2) / rect.width) * 15;
    this.transformStyle = \`perspective(600px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
  }

  resetTransform() {
    this.transformStyle = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'parallax-card.html',
      code: `<!-- HTML + Alpine.js -->
<div
  x-data="{ transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)' }"
  @mousemove="const rect = $el.getBoundingClientRect(); const x = $event.clientX - rect.left; const y = $event.clientY - rect.top; const rx = ((y - rect.height / 2) / rect.height) * -15; const ry = ((x - rect.width / 2) / rect.width) * 15; transform = 'perspective(600px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)'"
  @mouseleave="transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)'"
  class="h-64 w-72 rounded-xl border border-gray-200 bg-gradient-to-br from-brand-400 to-brand-600 p-6 shadow-lg transition-transform duration-200 ease-out dark:border-white/10"
  :style="{ transform }">
  <h4 class="text-lg font-bold text-white">Parallax Card</h4>
  <p class="mt-2 text-sm text-white/80">Move your mouse over this card to see the 3D tilt effect.</p>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'parallax-card.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div
  x-data="{ transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)' }"
  @mousemove="const rect = $el.getBoundingClientRect(); const x = $event.clientX - rect.left; const y = $event.clientY - rect.top; const rx = ((y - rect.height / 2) / rect.height) * -15; const ry = ((x - rect.width / 2) / rect.width) * 15; transform = 'perspective(600px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)'"
  @mouseleave="transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)'"
  class="h-64 w-72 rounded-xl border border-gray-200 bg-gradient-to-br from-brand-400 to-brand-600 p-6 shadow-lg transition-transform duration-200 ease-out dark:border-white/10"
  :style="{ transform }">
  <h4 class="text-lg font-bold text-white">Parallax Card</h4>
  <p class="mt-2 text-sm text-white/80">Move your mouse over this card to see the 3D tilt effect.</p>
</div>`,
    },
  },
};

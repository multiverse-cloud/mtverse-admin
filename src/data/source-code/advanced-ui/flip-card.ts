import { ComponentSourceData } from '../types';

export const flipCardSource: ComponentSourceData = {
  component: 'Flip Card',
  slug: 'flip-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A card that flips to reveal content on the back when hovered or clicked.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'FlipCard.tsx',
      code: `import React, { useState } from 'react';

interface FlipCardProps {
  front?: React.ReactNode;
  back?: React.ReactNode;
}

export default function FlipCard({ front = 'Hover to Flip', back = 'Back Content' }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group h-64 w-64 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative h-full w-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-dark"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-lg font-semibold text-gray-800 dark:text-white">{front}</span>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl border border-brand-200 bg-brand-500"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-lg font-semibold text-white">{back}</span>
        </div>
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'flip-card/page.tsx',
      code: `'use client';

import FlipCard from '@/components/mtverse/advanced-ui/FlipCard';

export default function FlipCardPage() {
  return <FlipCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'FlipCard.vue',
      code: `<template>
  <div class="h-64 w-64 cursor-pointer" @mouseenter="flipped = true" @mouseleave="flipped = false">
    <div
      class="relative h-full w-full transition-transform duration-500"
      :style="{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }"
    >
      <div
        class="absolute inset-0 flex items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-dark"
        :style="{ backfaceVisibility: 'hidden' }"
      >
        <span class="text-lg font-semibold text-gray-800 dark:text-white">{{ front }}</span>
      </div>
      <div
        class="absolute inset-0 flex items-center justify-center rounded-xl border border-brand-200 bg-brand-500"
        :style="{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }"
      >
        <span class="text-lg font-semibold text-white">{{ back }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{ front?: string; back?: string }>(), { front: 'Hover to Flip', back: 'Back Content' });
const flipped = ref(false);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'flip-card.component.ts',
      code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  template: \`
    <div class="h-64 w-64 cursor-pointer" (mouseenter)="flipped = true" (mouseleave)="flipped = false">
      <div class="relative h-full w-full transition-transform duration-500"
        [style.transformStyle]="'preserve-3d'" [style.transform]="flipped ? 'rotateY(180deg)' : 'rotateY(0)'">
        <div class="absolute inset-0 flex items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-dark"
          [style.backfaceVisibility]="'hidden'">
          <span class="text-lg font-semibold text-gray-800 dark:text-white">{{ front }}</span>
        </div>
        <div class="absolute inset-0 flex items-center justify-center rounded-xl border border-brand-200 bg-brand-500"
          [style.backfaceVisibility]="'hidden'" [style.transform]="'rotateY(180deg)'">
          <span class="text-lg font-semibold text-white">{{ back }}</span>
        </div>
      </div>
    </div>
  \`
})
export class FlipCardComponent {
  @Input() front = 'Hover to Flip';
  @Input() back = 'Back Content';
  flipped = false;
}`,
    },
    html: {
      language: 'html',
      filename: 'flip-card.html',
      code: `<!-- HTML + Alpine.js -->
<div class="h-64 w-64 cursor-pointer" x-data="{ flipped: false }"
  @mouseenter="flipped = true" @mouseleave="flipped = false">
  <div class="relative h-full w-full transition-transform duration-500"
    :style="{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }">
    <div class="absolute inset-0 flex items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-dark"
      style="backface-visibility: hidden;">
      <span class="text-lg font-semibold text-gray-800 dark:text-white">Hover to Flip</span>
    </div>
    <div class="absolute inset-0 flex items-center justify-center rounded-xl border border-brand-200 bg-brand-500"
      style="backface-visibility: hidden; transform: rotateY(180deg);">
      <span class="text-lg font-semibold text-white">Back Content</span>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'flip-card.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="h-64 w-64 cursor-pointer" x-data="{ flipped: false }"
  @mouseenter="flipped = true" @mouseleave="flipped = false">
  <div class="relative h-full w-full transition-transform duration-500"
    :style="{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }">
    <div class="absolute inset-0 flex items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-dark"
      style="backface-visibility: hidden;">
      <span class="text-lg font-semibold text-gray-800 dark:text-white">{{ $front ?? 'Hover to Flip' }}</span>
    </div>
    <div class="absolute inset-0 flex items-center justify-center rounded-xl border border-brand-200 bg-brand-500"
      style="backface-visibility: hidden; transform: rotateY(180deg);">
      <span class="text-lg font-semibold text-white">{{ $back ?? 'Back Content' }}</span>
    </div>
  </div>
</div>`,
    },
  },
};

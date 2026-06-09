import { ComponentSourceData } from '../types';

export const spotlightCardSource: ComponentSourceData = {
  component: 'Spotlight Card',
  slug: 'spotlight-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A card with a spotlight effect that follows the cursor, illuminating the content.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'SpotlightCard.tsx',
      code: `import React, { useState, useRef, useCallback } from 'react';

interface SpotlightCardProps {
  children?: React.ReactNode;
}

export default function SpotlightCard({ children }: SpotlightCardProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative h-64 w-80 overflow-hidden rounded-xl border border-gray-200 bg-gray-900 p-6 dark:border-white/10"
    >
      {hovering && (
        <div
          className="pointer-events-none absolute -inset-px z-0"
          style={{
            background: \`radial-gradient(300px circle at \${pos.x}px \${pos.y}px, rgba(99,102,241,0.15), transparent 60%)\`,
          }}
        />
      )}
      <div className="relative z-10">
        {children ?? (
          <>
            <h4 className="text-lg font-bold text-white">Spotlight Card</h4>
            <p className="mt-2 text-sm text-gray-400">Hover over this card to see the spotlight follow your cursor.</p>
          </>
        )}
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'spotlight-card/page.tsx',
      code: `'use client';

import SpotlightCard from '@/components/mtverse/advanced-ui/SpotlightCard';

export default function SpotlightCardPage() {
  return <SpotlightCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'SpotlightCard.vue',
      code: `<template>
  <div ref="cardRef"
    @mousemove="handleMove" @mouseenter="hovering = true" @mouseleave="hovering = false"
    class="relative h-64 w-80 overflow-hidden rounded-xl border border-gray-200 bg-gray-900 p-6 dark:border-white/10">
    <div v-if="hovering" class="pointer-events-none absolute -inset-px z-0"
      :style="{ background: \`radial-gradient(300px circle at \${pos.x}px \${pos.y}px, rgba(99,102,241,0.15), transparent 60%)\` }" />
    <div class="relative z-10">
      <slot>
        <h4 class="text-lg font-bold text-white">Spotlight Card</h4>
        <p class="mt-2 text-sm text-gray-400">Hover over this card to see the spotlight follow your cursor.</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cardRef = ref<HTMLElement | null>(null);
const pos = ref({ x: 0, y: 0 });
const hovering = ref(false);

function handleMove(e: MouseEvent) {
  const rect = cardRef.value?.getBoundingClientRect();
  if (rect) pos.value = { x: e.clientX - rect.left, y: e.clientY - rect.top };
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'spotlight-card.component.ts',
      code: `import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spotlight-card',
  template: \`
    <div #cardRef (mousemove)="onMove($event)" (mouseenter)="hovering = true" (mouseleave)="hovering = false"
      class="relative h-64 w-80 overflow-hidden rounded-xl border border-gray-200 bg-gray-900 p-6 dark:border-white/10">
      <div *ngIf="hovering" class="pointer-events-none absolute -inset-px z-0"
        [style.background]="'radial-gradient(300px circle at ' + pos.x + 'px ' + pos.y + 'px, rgba(99,102,241,0.15), transparent 60%)'"></div>
      <div class="relative z-10">
        <h4 class="text-lg font-bold text-white">Spotlight Card</h4>
        <p class="mt-2 text-sm text-gray-400">Hover over this card to see the spotlight follow your cursor.</p>
      </div>
    </div>
  \`
})
export class SpotlightCardComponent {
  @ViewChild('cardRef') cardRef!: ElementRef;
  pos = { x: 0, y: 0 };
  hovering = false;

  onMove(e: MouseEvent) {
    const rect = this.cardRef.nativeElement.getBoundingClientRect();
    this.pos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'spotlight-card.html',
      code: `<!-- HTML + Alpine.js -->
<div class="relative h-64 w-80 overflow-hidden rounded-xl border border-gray-200 bg-gray-900 p-6 dark:border-white/10"
  x-data="{ pos: { x: 0, y: 0 }, hovering: false }"
  @mousemove="const rect = $el.getBoundingClientRect(); pos.x = $event.clientX - rect.left; pos.y = $event.clientY - rect.top"
  @mouseenter="hovering = true" @mouseleave="hovering = false">
  <div x-show="hovering" x-transition class="pointer-events-none absolute -inset-px z-0"
    :style="{ background: 'radial-gradient(300px circle at ' + pos.x + 'px ' + pos.y + 'px, rgba(99,102,241,0.15), transparent 60%)' }"></div>
  <div class="relative z-10">
    <h4 class="text-lg font-bold text-white">Spotlight Card</h4>
    <p class="mt-2 text-sm text-gray-400">Hover over this card to see the spotlight follow your cursor.</p>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'spotlight-card.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="relative h-64 w-80 overflow-hidden rounded-xl border border-gray-200 bg-gray-900 p-6 dark:border-white/10"
  x-data="{ pos: { x: 0, y: 0 }, hovering: false }"
  @mousemove="const rect = $el.getBoundingClientRect(); pos.x = $event.clientX - rect.left; pos.y = $event.clientY - rect.top"
  @mouseenter="hovering = true" @mouseleave="hovering = false">
  <div x-show="hovering" x-transition class="pointer-events-none absolute -inset-px z-0"
    :style="{ background: 'radial-gradient(300px circle at ' + pos.x + 'px ' + pos.y + 'px, rgba(99,102,241,0.15), transparent 60%)' }"></div>
  <div class="relative z-10">
    <h4 class="text-lg font-bold text-white">Spotlight Card</h4>
    <p class="mt-2 text-sm text-gray-400">Hover over this card to see the spotlight follow your cursor.</p>
  </div>
</div>`,
    },
  },
};

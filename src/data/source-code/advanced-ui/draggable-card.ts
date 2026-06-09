import { ComponentSourceData } from '../types';

export const draggableCardSource: ComponentSourceData = {
  component: 'Draggable Card',
  slug: 'draggable-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A card that can be dragged and repositioned freely within its container.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'DraggableCard.tsx',
      code: `import React, { useState, useRef, useCallback } from 'react';

export default function DraggableCard() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    dragStart.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    setDragging(true);
  }, [pos]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return;
    setPos({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
  }, [dragging]);

  const handleMouseUp = useCallback(() => setDragging(false), []);

  return (
    <div
      className="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-gray-800"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        onMouseDown={handleMouseDown}
        className="absolute w-48 cursor-grab rounded-lg border border-gray-200 bg-white p-4 shadow-md select-none dark:border-white/10 dark:bg-gray-dark"
        style={{ transform: \`translate(\${pos.x}px, \${pos.y}px)\`, cursor: dragging ? 'grabbing' : 'grab' }}
      >
        <h4 className="text-sm font-bold text-gray-800 dark:text-white">Drag Me</h4>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Click and drag this card around.</p>
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'draggable-card/page.tsx',
      code: `'use client';

import DraggableCard from '@/components/mtverse/advanced-ui/DraggableCard';

export default function DraggableCardPage() {
  return <DraggableCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'DraggableCard.vue',
      code: `<template>
  <div class="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-gray-800"
    @mousemove="onMouseMove" @mouseup="dragging = false" @mouseleave="dragging = false">
    <div @mousedown="onMouseDown"
      class="absolute w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-md select-none dark:border-white/10 dark:bg-gray-dark"
      :style="{ transform: 'translate(' + pos.x + 'px, ' + pos.y + 'px)', cursor: dragging ? 'grabbing' : 'grab' }">
      <h4 class="text-sm font-bold text-gray-800 dark:text-white">Drag Me</h4>
      <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Click and drag this card around.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pos = ref({ x: 0, y: 0 });
const dragging = ref(false);
const dragStart = ref({ x: 0, y: 0 });

function onMouseDown(e: MouseEvent) {
  dragStart.value = { x: e.clientX - pos.value.x, y: e.clientY - pos.value.y };
  dragging.value = true;
}

function onMouseMove(e: MouseEvent) {
  if (!dragging.value) return;
  pos.value = { x: e.clientX - dragStart.value.x, y: e.clientY - dragStart.value.y };
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'draggable-card.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-draggable-card',
  template: \`
    <div class="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-gray-800"
      (mousemove)="onMouseMove($event)" (mouseup)="dragging = false" (mouseleave)="dragging = false">
      <div (mousedown)="onMouseDown($event)"
        class="absolute w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-md select-none dark:border-white/10 dark:bg-gray-dark"
        [style.transform]="'translate(' + pos.x + 'px, ' + pos.y + 'px)'"
        [style.cursor]="dragging ? 'grabbing' : 'grab'">
        <h4 class="text-sm font-bold text-gray-800 dark:text-white">Drag Me</h4>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Click and drag this card around.</p>
      </div>
    </div>
  \`
})
export class DraggableCardComponent {
  pos = { x: 0, y: 0 };
  dragging = false;
  dragStart = { x: 0, y: 0 };

  onMouseDown(e: MouseEvent) {
    this.dragStart = { x: e.clientX - this.pos.x, y: e.clientY - this.pos.y };
    this.dragging = true;
  }

  onMouseMove(e: MouseEvent) {
    if (!this.dragging) return;
    this.pos = { x: e.clientX - this.dragStart.x, y: e.clientY - this.dragStart.y };
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'draggable-card.html',
      code: `<!-- HTML + Alpine.js -->
<div class="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-gray-800"
  x-data="{ pos: { x: 0, y: 0 }, dragging: false, dragStart: { x: 0, y: 0 } }"
  @mousemove.window="if (dragging) { pos.x = $event.clientX - dragStart.x; pos.y = $event.clientY - dragStart.y }"
  @mouseup.window="dragging = false">
  <div @mousedown="dragStart = { x: $event.clientX - pos.x, y: $event.clientY - pos.y }; dragging = true"
    class="absolute w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-md select-none dark:border-white/10 dark:bg-gray-dark"
    :style="{ transform: 'translate(' + pos.x + 'px, ' + pos.y + 'px)', cursor: dragging ? 'grabbing' : 'grab' }">
    <h4 class="text-sm font-bold text-gray-800 dark:text-white">Drag Me</h4>
    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Click and drag this card around.</p>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'draggable-card.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-gray-800"
  x-data="{ pos: { x: 0, y: 0 }, dragging: false, dragStart: { x: 0, y: 0 } }"
  @mousemove.window="if (dragging) { pos.x = $event.clientX - dragStart.x; pos.y = $event.clientY - dragStart.y }"
  @mouseup.window="dragging = false">
  <div @mousedown="dragStart = { x: $event.clientX - pos.x, y: $event.clientY - pos.y }; dragging = true"
    class="absolute w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-md select-none dark:border-white/10 dark:bg-gray-dark"
    :style="{ transform: 'translate(' + pos.x + 'px, ' + pos.y + 'px)', cursor: dragging ? 'grabbing' : 'grab' }">
    <h4 class="text-sm font-bold text-gray-800 dark:text-white">Drag Me</h4>
    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Click and drag this card around.</p>
  </div>
</div>`,
    },
  },
};

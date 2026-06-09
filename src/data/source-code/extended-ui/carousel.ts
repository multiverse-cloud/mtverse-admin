import { ComponentSourceData } from '../types';

export const carouselSource: ComponentSourceData = {
  component: 'Carousel',
  slug: 'carousel',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'An image carousel with slide navigation, autoplay, and dot indicators.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'Carousel.tsx',
      code: `// React + TypeScript implementation
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { title: 'Mountain View', color: 'bg-sky-400' },
  { title: 'Ocean Sunset', color: 'bg-orange-400' },
  { title: 'Forest Path', color: 'bg-green-500' },
  { title: 'Desert Dunes', color: 'bg-yellow-500' },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-xl">
      <div className="relative h-64">
        {slides.map((slide, i) => (
          <div key={i} className={\`absolute inset-0 flex items-center justify-center transition-opacity duration-500 \${slide.color} \${i === index ? 'opacity-100' : 'opacity-0'}\`}>
            <span className="text-2xl font-bold text-white drop-shadow-lg">{slide.title}</span>
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800">
        <ChevronLeft className="size-5 text-gray-700 dark:text-gray-200" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800">
        <ChevronRight className="size-5 text-gray-700 dark:text-gray-200" />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={\`h-2 rounded-full transition-all \${i === index ? 'w-6 bg-white' : 'w-2 bg-white/50'}\`} />
        ))}
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'carousel/page.tsx',
      code: `'use client';

import Carousel from '@/components/mtverse/extended-ui/Carousel';

export default function CarouselPage() {
  return <Carousel />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'Carousel.vue',
      code: `<template>
  <div class="relative w-full max-w-lg overflow-hidden rounded-xl">
    <div class="relative h-64">
      <div v-for="(slide, i) in slides" :key="i" class="absolute inset-0 flex items-center justify-center transition-opacity duration-500" :class="[slide.color, i === index ? 'opacity-100' : 'opacity-0']">
        <span class="text-2xl font-bold text-white drop-shadow-lg">{{ slide.title }}</span>
      </div>
    </div>
    <button @click="prev" class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white">
      <ChevronLeft class="size-5 text-gray-700" />
    </button>
    <button @click="next" class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white">
      <ChevronRight class="size-5 text-gray-700" />
    </button>
    <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
      <button v-for="(_, i) in slides" :key="i" @click="index = i" class="h-2 rounded-full transition-all" :class="i === index ? 'w-6 bg-white' : 'w-2 bg-white/50'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const slides = [
  { title: 'Mountain View', color: 'bg-sky-400' },
  { title: 'Ocean Sunset', color: 'bg-orange-400' },
  { title: 'Forest Path', color: 'bg-green-500' },
  { title: 'Desert Dunes', color: 'bg-yellow-500' },
];

const index = ref(0);
const next = () => { index.value = (index.value + 1) % slides.length; };
const prev = () => { index.value = (index.value - 1 + slides.length) % slides.length; };

let timer: ReturnType<typeof setInterval>;
onMounted(() => { timer = setInterval(next, 4000); });
onUnmounted(() => clearInterval(timer));
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'carousel.component.ts',
      code: `import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: \`
    <div class="relative w-full max-w-lg overflow-hidden rounded-xl">
      <div class="relative h-64">
        <div *ngFor="let slide of slides; let i = index" class="absolute inset-0 flex items-center justify-center transition-opacity duration-500" [class.opacity-100]="i === index" [class.opacity-0]="i !== index" [ngClass]="slide.color">
          <span class="text-2xl font-bold text-white drop-shadow-lg">{{ slide.title }}</span>
        </div>
      </div>
      <button (click)="prev()" class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white">‹</button>
      <button (click)="next()" class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white">›</button>
      <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        <button *ngFor="let _ of slides; let i = index" (click)="index = i" class="h-2 rounded-full transition-all" [class.w-6]="i === index" [class.bg-white]="i === index" [class.w-2]="i !== index" [class.bg-white50]="i !== index"></button>
      </div>
    </div>
  \`
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides = [
    { title: 'Mountain View', color: 'bg-sky-400' },
    { title: 'Ocean Sunset', color: 'bg-orange-400' },
    { title: 'Forest Path', color: 'bg-green-500' },
    { title: 'Desert Dunes', color: 'bg-yellow-500' },
  ];
  index = 0;
  private timer: any;

  next() { this.index = (this.index + 1) % this.slides.length; }
  prev() { this.index = (this.index - 1 + this.slides.length) % this.slides.length; }

  ngOnInit() { this.timer = setInterval(() => this.next(), 4000); }
  ngOnDestroy() { clearInterval(this.timer); }
}`,
    },
    html: {
      language: 'html',
      filename: 'carousel.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ index: 0, slides: [{ title: 'Mountain View', color: 'bg-sky-400' }, { title: 'Ocean Sunset', color: 'bg-orange-400' }, { title: 'Forest Path', color: 'bg-green-500' }, { title: 'Desert Dunes', color: 'bg-yellow-500' }], next() { this.index = (this.index + 1) % this.slides.length; }, prev() { this.index = (this.index - 1 + this.slides.length) % this.slides.length; } }" x-init="setInterval(() => next(), 4000)" class="relative w-full max-w-lg overflow-hidden rounded-xl">
  <div class="relative h-64">
    <template x-for="(slide, i) in slides" :key="i">
      <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-500" :class="[slide.color, i === index ? 'opacity-100' : 'opacity-0']">
        <span class="text-2xl font-bold text-white drop-shadow-lg" x-text="slide.title"></span>
      </div>
    </template>
  </div>
  <button @click="prev()" class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white text-gray-700">‹</button>
  <button @click="next()" class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white text-gray-700">›</button>
  <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
    <template x-for="(_, i) in slides" :key="i">
      <button @click="index = i" class="h-2 rounded-full transition-all" :class="i === index ? 'w-6 bg-white' : 'w-2 bg-white/50'"></button>
    </template>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'carousel.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ index: 0, slides: [{ title: 'Mountain View', color: 'bg-sky-400' }, { title: 'Ocean Sunset', color: 'bg-orange-400' }, { title: 'Forest Path', color: 'bg-green-500' }, { title: 'Desert Dunes', color: 'bg-yellow-500' }], next() { this.index = (this.index + 1) % this.slides.length; }, prev() { this.index = (this.index - 1 + this.slides.length) % this.slides.length; } }" x-init="setInterval(() => next(), 4000)" class="relative w-full max-w-lg overflow-hidden rounded-xl">
  <div class="relative h-64">
    <template x-for="(slide, i) in slides" :key="i">
      <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-500" :class="[slide.color, i === index ? 'opacity-100' : 'opacity-0']">
        <span class="text-2xl font-bold text-white drop-shadow-lg" x-text="slide.title"></span>
      </div>
    </template>
  </div>
  <button @click="prev()" class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white text-gray-700">‹</button>
  <button @click="next()" class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm hover:bg-white text-gray-700">›</button>
  <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
    <template x-for="(_, i) in slides" :key="i">
      <button @click="index = i" class="h-2 rounded-full transition-all" :class="i === index ? 'w-6 bg-white' : 'w-2 bg-white/50'"></button>
    </template>
  </div>
</div>`,
    },
  },
};

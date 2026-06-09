import { ComponentSourceData } from '../types';

export const ratingStarsSource: ComponentSourceData = {
  component: 'Rating Stars',
  slug: 'rating-stars',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'An interactive star rating component with hover preview and half-star support.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'RatingStars.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
}

export default function RatingStars({ max = 5, value = 0, onChange }: RatingStarsProps) {
  const [hover, setHover] = useState(0);
  const display = hover || value;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;
        const filled = starValue <= display;
        return (
          <button key={i} onMouseEnter={() => setHover(starValue)} onMouseLeave={() => setHover(0)} onClick={() => onChange?.(starValue)} className="transition-transform hover:scale-110">
            <Star className={\`size-6 \${filled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}\`} />
          </button>
        );
      })}
      <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">{display > 0 ? display.toFixed(1) : 'No rating'}</span>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'rating-stars/page.tsx',
      code: `'use client';

import { useState } from 'react';
import RatingStars from '@/components/mtverse/extended-ui/RatingStars';

export default function RatingStarsPage() {
  const [rating, setRating] = useState(0);
  return <RatingStars value={rating} onChange={setRating} />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'RatingStars.vue',
      code: `<template>
  <div class="flex items-center gap-1">
    <button v-for="i in max" :key="i" @mouseenter="hover = i" @mouseleave="hover = 0" @click="$emit('update:modelValue', i)" class="transition-transform hover:scale-110">
      <Star class="size-6" :class="i <= display ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'" />
    </button>
    <span class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">{{ display > 0 ? display.toFixed(1) : 'No rating' }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Star } from 'lucide-vue-next';

const props = withDefaults(defineProps<{ max?: number; modelValue?: number }>(), { max: 5, modelValue: 0 });
defineEmits<{ 'update:modelValue': [value: number] }>();
const hover = ref(0);
const display = computed(() => hover.value || props.modelValue);
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'rating-stars.component.ts',
      code: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  template: \`
    <div class="flex items-center gap-1">
      <button *ngFor="let star of stars; let i = index" (mouseenter)="hover = i + 1" (mouseleave)="hover = 0" (click)="rate(i + 1)" class="transition-transform hover:scale-110">
        <svg class="size-6" [class.fill-yellow-400]="i + 1 <= display" [class.text-yellow-400]="i + 1 <= display" [class.text-gray-300]="i + 1 > display" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </button>
      <span class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">{{ display > 0 ? display.toFixed(1) : 'No rating' }}</span>
    </div>
  \`
})
export class RatingStarsComponent {
  @Input() max = 5;
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();
  hover = 0;
  stars = Array.from({ length: 5 });
  get display() { return this.hover || this.value; }
  rate(v: number) { this.value = v; this.valueChange.emit(v); }
}`,
    },
    html: {
      language: 'html',
      filename: 'rating-stars.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ hover: 0, value: 0, max: 5, get display() { return this.hover || this.value; } }" class="flex items-center gap-1">
  <template x-for="i in max" :key="i">
    <button @mouseenter="hover = i" @mouseleave="hover = 0" @click="value = i" class="transition-transform hover:scale-110">
      <svg class="size-6" :class="i <= display ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
  </template>
  <span class="ml-2 text-sm font-medium text-gray-600" x-text="display > 0 ? display.toFixed(1) : 'No rating'"></span>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'rating-stars.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ hover: 0, value: 0, max: 5, get display() { return this.hover || this.value; } }" class="flex items-center gap-1">
  <template x-for="i in max" :key="i">
    <button @mouseenter="hover = i" @mouseleave="hover = 0" @click="value = i" class="transition-transform hover:scale-110">
      <svg class="size-6" :class="i <= display ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
  </template>
  <span class="ml-2 text-sm font-medium text-gray-600" x-text="display > 0 ? display.toFixed(1) : 'No rating'"></span>
</div>`,
    },
  },
};

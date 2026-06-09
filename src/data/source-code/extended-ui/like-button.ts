import { ComponentSourceData } from '../types';

export const likeButtonSource: ComponentSourceData = {
  component: 'Like Button',
  slug: 'like-button',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'An animated like button with count, heart animation, and toggle state.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'LikeButton.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  initialCount?: number;
  initialLiked?: boolean;
}

export default function LikeButton({ initialCount = 24, initialLiked = false }: LikeButtonProps) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);

  const toggle = () => {
    setLiked(!liked);
    setCount((c) => (liked ? c - 1 : c + 1));
  };

  return (
    <button onClick={toggle} className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95" style={{ borderColor: liked ? '#EF4444' : undefined, backgroundColor: liked ? '#FEF2F2' : undefined }}>
      <Heart className={\`size-4 transition-all \${liked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-500 group-hover:text-red-400'}\`} />
      <span className={liked ? 'text-red-600' : 'text-gray-600 dark:text-gray-400'}>{count}</span>
    </button>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'like-button/page.tsx',
      code: `'use client';

import LikeButton from '@/components/mtverse/extended-ui/LikeButton';

export default function LikeButtonPage() {
  return <LikeButton initialCount={24} />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'LikeButton.vue',
      code: `<template>
  <button @click="toggle" class="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95" :class="liked ? 'border-red-500 bg-red-50 dark:border-red-400 dark:bg-red-950/30' : 'border-gray-200 dark:border-white/10'">
    <Heart class="size-4 transition-all" :class="liked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-500 group-hover:text-red-400'" />
    <span :class="liked ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'">{{ count }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Heart } from 'lucide-vue-next';

const props = withDefaults(defineProps<{ initialCount?: number; initialLiked?: boolean }>(), { initialCount: 24, initialLiked: false });
const liked = ref(props.initialLiked);
const count = ref(props.initialCount);

function toggle() {
  liked.value = !liked.value;
  count.value += liked.value ? 1 : -1;
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'like-button.component.ts',
      code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-button',
  template: \`
    <button (click)="toggle()" class="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95" [class.border-red-500]="liked" [class.bg-red-50]="liked">
      <svg class="size-4 transition-all" [class.fill-red-500]="liked" [class.text-red-500]="liked" [class.scale-110]="liked" [class.text-gray-500]="!liked" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <span [class.text-red-600]="liked" [class.text-gray-600]="!liked">{{ count }}</span>
    </button>
  \`
})
export class LikeButtonComponent {
  @Input() initialCount = 24;
  @Input() initialLiked = false;
  liked = false;
  count = 24;

  ngOnInit() { this.liked = this.initialLiked; this.count = this.initialCount; }

  toggle() {
    this.liked = !this.liked;
    this.count += this.liked ? 1 : -1;
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'like-button.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ liked: false, count: 24 }">
  <button @click="liked = !liked; count += liked ? 1 : -1" class="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95" :class="liked ? 'border-red-500 bg-red-50' : 'border-gray-200'">
    <svg class="size-4 transition-all" :class="liked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-500'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    <span :class="liked ? 'text-red-600' : 'text-gray-600'" x-text="count"></span>
  </button>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'like-button.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ liked: false, count: 24 }">
  <button @click="liked = !liked; count += liked ? 1 : -1" class="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95" :class="liked ? 'border-red-500 bg-red-50' : 'border-gray-200'">
    <svg class="size-4 transition-all" :class="liked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-500'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    <span :class="liked ? 'text-red-600' : 'text-gray-600'" x-text="count"></span>
  </button>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const animatedCounterSource: ComponentSourceData = {
  component: 'Animated Counter',
  slug: 'animated-counter',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A counter that animates from 0 to a target number when scrolled into view.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'AnimatedCounter.tsx',
      code: `// React implementation with intersection observer
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target?: number;
  duration?: number;
}

export default function AnimatedCounter({ target = 1248, duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-white/5 dark:bg-gray-dark">
      <h4 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Animated Counter</h4>
      <span ref={ref} className="text-4xl font-bold text-brand-500">{count.toLocaleString()}</span>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'animated-counter/page.tsx',
      code: `'use client';

import AnimatedCounter from '@/components/mtverse/advanced-ui/AnimatedCounter';

export default function AnimatedCounterPage() {
  return <AnimatedCounter />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'AnimatedCounter.vue',
      code: `<template>
  <div class="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-white/5 dark:bg-gray-dark">
    <h4 class="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Animated Counter</h4>
    <span ref="counterRef" class="text-4xl font-bold text-brand-500">{{ count.toLocaleString() }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = withDefaults(defineProps<{ target?: number; duration?: number }>(), { target: 1248, duration: 2 });
const count = ref(0);
const counterRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) isVisible.value = true; },
    { threshold: 0.1 }
  );
  if (counterRef.value) observer.observe(counterRef.value);
  onUnmounted(() => observer.disconnect());
});

watch(isVisible, (visible) => {
  if (!visible) return;
  let start = 0;
  const increment = props.target / (props.duration * 60);
  timer = setInterval(() => {
    start += increment;
    if (start >= props.target) { count.value = props.target; if (timer) clearInterval(timer); }
    else count.value = Math.floor(start);
  }, 1000 / 60);
});
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'animated-counter.component.ts',
      code: `import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-animated-counter',
  template: \`
    <div class="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-white/5 dark:bg-gray-dark">
      <h4 class="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Animated Counter</h4>
      <span #counterRef class="text-4xl font-bold text-brand-500">{{ count | number }}</span>
    </div>
  \`
})
export class AnimatedCounterComponent implements AfterViewInit, OnDestroy {
  @Input() target = 1248;
  @Input() duration = 2;
  @ViewChild('counterRef') counterRef!: ElementRef;
  count = 0;
  private timer: any;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) this.startCounting(); },
      { threshold: 0.1 }
    );
    this.observer.observe(this.counterRef.nativeElement);
  }

  startCounting() {
    let start = 0;
    const increment = this.target / (this.duration * 60);
    this.timer = setInterval(() => {
      start += increment;
      if (start >= this.target) { this.count = this.target; clearInterval(this.timer); }
      else this.count = Math.floor(start);
    }, 1000 / 60);
  }

  ngOnDestroy() { if (this.timer) clearInterval(this.timer); if (this.observer) this.observer.disconnect(); }
}`,
    },
    html: {
      language: 'html',
      filename: 'animated-counter.html',
      code: `<!-- HTML + Alpine.js -->
<div class="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-white/5 dark:bg-gray-dark"
     x-data="{ count: 0, target: 1248, started: false }"
     x-intersect.once="started = true">
  <h4 class="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Animated Counter</h4>
  <span class="text-4xl font-bold text-brand-500" x-text="count.toLocaleString()"></span>
  <script>
    // Alpine.js init would handle the counter animation
    // Using x-intersect plugin for visibility detection
  </script>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'animated-counter.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-white/5 dark:bg-gray-dark"
     x-data="{ count: 0, target: 1248, started: false }"
     x-intersect.once="started = true">
  <h4 class="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Animated Counter</h4>
  <span class="text-4xl font-bold text-brand-500" x-text="count.toLocaleString()"></span>
</div>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const typewriterTextSource: ComponentSourceData = {
  component: 'Typewriter Text',
  slug: 'typewriter-text',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'Text that types itself out character by character with a blinking cursor effect.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TypewriterText.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text?: string;
  speed?: number;
}

export default function TypewriterText({ text = 'Welcome to mtverse-admin', speed = 60 }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
      else clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [isVisible, text, speed]);

  return (
    <div ref={ref} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <h4 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Typewriter Text</h4>
      <p className="font-mono text-lg text-gray-800 dark:text-white">
        {displayed}
        <span className="animate-[blink_1s_step-end_infinite] ml-0.5 border-r-2 border-brand-500">&nbsp;</span>
      </p>
      <style>{\`@keyframes blink { 50% { border-color: transparent; } }\`}</style>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'typewriter-text/page.tsx',
      code: `'use client';

import TypewriterText from '@/components/mtverse/advanced-ui/TypewriterText';

export default function TypewriterTextPage() {
  return <TypewriterText />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'TypewriterText.vue',
      code: `<template>
  <div ref="textRef" class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
    <h4 class="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Typewriter Text</h4>
    <p class="font-mono text-lg text-gray-800 dark:text-white">
      {{ displayed }}<span class="animate-[blink_1s_step-end_infinite] ml-0.5 border-r-2 border-brand-500">&nbsp;</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = withDefaults(defineProps<{ text?: string; speed?: number }>(), { text: 'Welcome to mtverse-admin', speed: 60 });
const displayed = ref('');
const isVisible = ref(false);
const textRef = ref<HTMLElement | null>(null);
let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) isVisible.value = true; }, { threshold: 0.1 });
  if (textRef.value) observer.observe(textRef.value);
  onUnmounted(() => observer.disconnect());
});

watch(isVisible, (visible) => {
  if (!visible) return;
  let i = 0;
  timer = setInterval(() => {
    if (i < props.text.length) { displayed.value = props.text.slice(0, i + 1); i++; }
    else if (timer) clearInterval(timer);
  }, props.speed);
});
</script>

<style scoped>
@keyframes blink { 50% { border-color: transparent; } }
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'typewriter-text.component.ts',
      code: `import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-typewriter-text',
  template: \`
    <div #textRef class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <h4 class="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Typewriter Text</h4>
      <p class="font-mono text-lg text-gray-800 dark:text-white">
        {{ displayed }}<span class="blink-cursor ml-0.5 border-r-2 border-brand-500">&nbsp;</span>
      </p>
    </div>
  \`,
  styles: [\`.blink-cursor { animation: blink 1s step-end infinite; } @keyframes blink { 50% { border-color: transparent; } }\`]
})
export class TypewriterTextComponent implements AfterViewInit, OnDestroy {
  @Input() text = 'Welcome to mtverse-admin';
  @Input() speed = 60;
  @ViewChild('textRef') textRef!: ElementRef;
  displayed = '';
  private timer: any;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) this.startTyping();
    }, { threshold: 0.1 });
    this.observer.observe(this.textRef.nativeElement);
  }

  startTyping() {
    let i = 0;
    this.timer = setInterval(() => {
      if (i < this.text.length) { this.displayed = this.text.slice(0, i + 1); i++; }
      else clearInterval(this.timer);
    }, this.speed);
  }

  ngOnDestroy() { if (this.timer) clearInterval(this.timer); if (this.observer) this.observer.disconnect(); }
}`,
    },
    html: {
      language: 'html',
      filename: 'typewriter-text.html',
      code: `<!-- HTML + Alpine.js -->
<div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ displayed: '', text: 'Welcome to mtverse-admin', speed: 60, started: false }"
  x-intersect.once="started = true; let i = 0; const t = setInterval(() => { if (i < text.length) { displayed = text.slice(0, i + 1); i++; } else clearInterval(t); }, speed)">
  <h4 class="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Typewriter Text</h4>
  <p class="font-mono text-lg text-gray-800 dark:text-white">
    <span x-text="displayed"></span><span class="blink-cursor ml-0.5 border-r-2 border-brand-500">&nbsp;</span>
  </p>
</div>
<style>
  .blink-cursor { animation: blink 1s step-end infinite; }
  @keyframes blink { 50% { border-color: transparent; } }
</style>`,
    },
    laravel: {
      language: 'blade',
      filename: 'typewriter-text.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ displayed: '', text: 'Welcome to mtverse-admin', speed: 60, started: false }"
  x-intersect.once="started = true; let i = 0; const t = setInterval(() => { if (i < text.length) { displayed = text.slice(0, i + 1); i++; } else clearInterval(t); }, speed)">
  <h4 class="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Typewriter Text</h4>
  <p class="font-mono text-lg text-gray-800 dark:text-white">
    <span x-text="displayed"></span><span class="blink-cursor ml-0.5 border-r-2 border-brand-500">&nbsp;</span>
  </p>
</div>
<style>
  .blink-cursor { animation: blink 1s step-end infinite; }
  @keyframes blink { 50% { border-color: transparent; } }
</style>`,
    },
  },
};

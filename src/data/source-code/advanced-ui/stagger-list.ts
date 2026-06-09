import { ComponentSourceData } from '../types';

export const staggerListSource: ComponentSourceData = {
  component: 'Stagger List',
  slug: 'stagger-list',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A list where items animate in with a staggered delay for a cascading reveal effect.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'StaggerList.tsx',
      code: `import React, { useState, useEffect, useRef } from 'react';

interface StaggerListProps {
  items?: string[];
}

export default function StaggerList({ items = ['Dashboard', 'Analytics', 'Reports', 'Settings', 'Users'] }: StaggerListProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, i) => {
            setTimeout(() => setVisibleItems((prev) => [...prev, i]), i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [items]);

  return (
    <div ref={ref} className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <h4 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Stagger List</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-800 dark:border-white/5 dark:bg-gray-800 dark:text-gray-200"
            style={{
              opacity: visibleItems.includes(i) ? 1 : 0,
              transform: visibleItems.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.4s ease',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'stagger-list/page.tsx',
      code: `'use client';

import StaggerList from '@/components/mtverse/advanced-ui/StaggerList';

export default function StaggerListPage() {
  return <StaggerList />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'StaggerList.vue',
      code: `<template>
  <div ref="listRef" class="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
    <h4 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Stagger List</h4>
    <ul class="space-y-2">
      <li v-for="(item, i) in items" :key="i"
        class="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-800 dark:border-white/5 dark:bg-gray-800 dark:text-gray-200"
        :style="{ opacity: visibleItems.includes(i) ? 1 : 0, transform: visibleItems.includes(i) ? 'translateX(0)' : 'translateX(-20px)', transition: 'all 0.4s ease' }"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = withDefaults(defineProps<{ items?: string[] }>(), {
  items: () => ['Dashboard', 'Analytics', 'Reports', 'Settings', 'Users']
});
const listRef = ref<HTMLElement | null>(null);
const visibleItems = ref<number[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      props.items.forEach((_, i) => {
        setTimeout(() => visibleItems.value.push(i), i * 120);
      });
    }
  }, { threshold: 0.1 });
  if (listRef.value) observer.observe(listRef.value);
  onUnmounted(() => observer.disconnect());
});
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'stagger-list.component.ts',
      code: `import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stagger-list',
  template: \`
    <div #listRef class="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
      <h4 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Stagger List</h4>
      <ul class="space-y-2">
        <li *ngFor="let item of items; let i = index"
          class="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-800 dark:border-white/5 dark:bg-gray-800 dark:text-gray-200"
          [style.opacity]="visibleItems.includes(i) ? 1 : 0"
          [style.transform]="visibleItems.includes(i) ? 'translateX(0)' : 'translateX(-20px)'"
          [style.transition]="'all 0.4s ease'">
          {{ item }}
        </li>
      </ul>
    </div>
  \`
})
export class StaggerListComponent implements AfterViewInit, OnDestroy {
  @Input() items = ['Dashboard', 'Analytics', 'Reports', 'Settings', 'Users'];
  @ViewChild('listRef') listRef!: ElementRef;
  visibleItems: number[] = [];
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.items.forEach((_, i) => setTimeout(() => this.visibleItems.push(i), i * 120));
      }
    }, { threshold: 0.1 });
    this.observer.observe(this.listRef.nativeElement);
  }

  ngOnDestroy() { if (this.observer) this.observer.disconnect(); }
}`,
    },
    html: {
      language: 'html',
      filename: 'stagger-list.html',
      code: `<!-- HTML + Alpine.js -->
<div class="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ items: ['Dashboard','Analytics','Reports','Settings','Users'], visible: [] }"
  x-intersect.once="items.forEach((_, i) => setTimeout(() => visible.push(i), i * 120))">
  <h4 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Stagger List</h4>
  <ul class="space-y-2">
    <template x-for="(item, i) in items" :key="i">
      <li class="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-800 dark:border-white/5 dark:bg-gray-800 dark:text-gray-200"
        :style="{ opacity: visible.includes(i) ? 1 : 0, transform: visible.includes(i) ? 'translateX(0)' : 'translateX(-20px)', transition: 'all 0.4s ease' }"
        x-text="item"></li>
    </template>
  </ul>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'stagger-list.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark"
  x-data="{ items: ['Dashboard','Analytics','Reports','Settings','Users'], visible: [] }"
  x-intersect.once="items.forEach((_, i) => setTimeout(() => visible.push(i), i * 120))">
  <h4 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Stagger List</h4>
  <ul class="space-y-2">
    <template x-for="(item, i) in items" :key="i">
      <li class="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-800 dark:border-white/5 dark:bg-gray-800 dark:text-gray-200"
        :style="{ opacity: visible.includes(i) ? 1 : 0, transform: visible.includes(i) ? 'translateX(0)' : 'translateX(-20px)', transition: 'all 0.4s ease' }"
        x-text="item"></li>
    </template>
  </ul>
</div>`,
    },
  },
};

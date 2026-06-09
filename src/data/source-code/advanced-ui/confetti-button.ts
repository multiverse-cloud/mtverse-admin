import { ComponentSourceData } from '../types';

export const confettiButtonSource: ComponentSourceData = {
  component: 'Confetti Button',
  slug: 'confetti-button',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A button that triggers a confetti particle burst animation when clicked.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'ConfettiButton.tsx',
      code: `import React, { useState, useCallback, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  velocity: number;
}

const colors = ['#6366f1', '#ec4899', '#f43f5e', '#22c55e', '#f59e0b', '#3b82f6'];

export default function ConfettiButton() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      color: colors[i % colors.length],
      angle: (Math.PI * 2 * i) / 20,
      velocity: 40 + Math.random() * 60,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => setParticles((prev) => prev.filter((p) => !newParticles.includes(p))), 1000);
  }, []);

  return (
    <div className="relative inline-block">
      <button ref={ref} onClick={handleClick}
        className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
        Click for Confetti
      </button>
      {particles.map((p) => (
        <span key={p.id} className="pointer-events-none absolute h-2 w-2 rounded-full animate-[confetti-burst_1s_ease-out_forwards]"
          style={{
            left: p.x, top: p.y, backgroundColor: p.color,
            '--tx': \`\${Math.cos(p.angle) * p.velocity}px\`,
            '--ty': \`\${Math.sin(p.angle) * p.velocity - 50}px\`,
          } as React.CSSProperties}
        />
      ))}
      <style>{\`
        @keyframes confetti-burst {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
      \`}</style>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'confetti-button/page.tsx',
      code: `'use client';

import ConfettiButton from '@/components/mtverse/advanced-ui/ConfettiButton';

export default function ConfettiButtonPage() {
  return <ConfettiButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'ConfettiButton.vue',
      code: `<template>
  <div class="relative inline-block">
    <button ref="btnRef" @click="handleClick"
      class="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
      Click for Confetti
    </button>
    <span v-for="p in particles" :key="p.id"
      class="pointer-events-none absolute h-2 w-2 rounded-full confetti-burst"
      :style="{ left: p.x + 'px', top: p.y + 'px', backgroundColor: p.color, '--tx': Math.cos(p.angle) * p.velocity + 'px', '--ty': (Math.sin(p.angle) * p.velocity - 50) + 'px' }" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const colors = ['#6366f1', '#ec4899', '#f43f5e', '#22c55e', '#f59e0b', '#3b82f6'];
const btnRef = ref<HTMLButtonElement | null>(null);
const particles = ref<any[]>([]);

function handleClick(e: MouseEvent) {
  const rect = btnRef.value?.getBoundingClientRect();
  if (!rect) return;
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const newP = Array.from({ length: 20 }, (_, i) => ({
    id: Date.now() + i, x, y, color: colors[i % colors.length],
    angle: (Math.PI * 2 * i) / 20, velocity: 40 + Math.random() * 60,
  }));
  particles.value.push(...newP);
  setTimeout(() => { particles.value = particles.value.filter((p: any) => !newP.includes(p)); }, 1000);
}
</script>

<style scoped>
.confetti-burst { animation: confetti-burst 1s ease-out forwards; }
@keyframes confetti-burst {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
}
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'confetti-button.component.ts',
      code: `import { Component, ElementRef, ViewChild } from '@angular/core';

interface Particle { id: number; x: number; y: number; color: string; angle: number; velocity: number; }

@Component({
  selector: 'app-confetti-button',
  template: \`
    <div class="relative inline-block">
      <button #btnRef (click)="handleClick($event)"
        class="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
        Click for Confetti
      </button>
      <span *ngFor="let p of particles" class="pointer-events-none absolute h-2 w-2 rounded-full confetti-burst"
        [style.left]="p.x + 'px'" [style.top]="p.y + 'px'" [style.backgroundColor]="p.color"
        [style.--tx]="Math.cos(p.angle) * p.velocity + 'px'"
        [style.--ty]="(Math.sin(p.angle) * p.velocity - 50) + 'px'"></span>
    </div>
  \`,
  styles: [\`
    .confetti-burst { animation: confetti-burst 1s ease-out forwards; }
    @keyframes confetti-burst { 0% { transform: translate(0,0) scale(1); opacity: 1; } 100% { transform: translate(var(--tx),var(--ty)) scale(0); opacity: 0; } }
  \`]
})
export class ConfettiButtonComponent {
  @ViewChild('btnRef') btnRef!: ElementRef;
  particles: Particle[] = [];
  Math = Math;
  colors = ['#6366f1','#ec4899','#f43f5e','#22c55e','#f59e0b','#3b82f6'];

  handleClick(e: MouseEvent) {
    const rect = this.btnRef.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const newP = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i, x, y, color: this.colors[i % this.colors.length],
      angle: (Math.PI * 2 * i) / 20, velocity: 40 + Math.random() * 60,
    }));
    this.particles.push(...newP);
    setTimeout(() => { this.particles = this.particles.filter(p => !newP.includes(p)); }, 1000);
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'confetti-button.html',
      code: `<!-- HTML + Alpine.js -->
<div class="relative inline-block"
  x-data="{ particles: [], colors: ['#6366f1','#ec4899','#f43f5e','#22c55e','#f59e0b','#3b82f6'] }">
  <button @click="const rect = $el.getBoundingClientRect(); const x = $event.clientX - rect.left; const y = $event.clientY - rect.top;
    const newP = Array.from({length:20},(_,i)=>({id:Date.now()+i,x,y,color:colors[i%colors.length],angle:(Math.PI*2*i)/20,velocity:40+Math.random()*60}));
    particles.push(...newP); setTimeout(()=>{particles=particles.filter(p=>!newP.includes(p))},1000)"
    class="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
    Click for Confetti
  </button>
  <template x-for="p in particles" :key="p.id">
    <span class="pointer-events-none absolute h-2 w-2 rounded-full confetti-burst"
      :style="{ left: p.x+'px', top: p.y+'px', backgroundColor: p.color, '--tx': Math.cos(p.angle)*p.velocity+'px', '--ty': (Math.sin(p.angle)*p.velocity-50)+'px' }"></span>
  </template>
</div>
<style>
  .confetti-burst { animation: confetti-burst 1s ease-out forwards; }
  @keyframes confetti-burst { 0% { transform: translate(0,0) scale(1); opacity:1; } 100% { transform: translate(var(--tx),var(--ty)) scale(0); opacity:0; } }
</style>`,
    },
    laravel: {
      language: 'blade',
      filename: 'confetti-button.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div class="relative inline-block"
  x-data="{ particles: [], colors: ['#6366f1','#ec4899','#f43f5e','#22c55e','#f59e0b','#3b82f6'] }">
  <button @click="const rect = $el.getBoundingClientRect(); const x = $event.clientX - rect.left; const y = $event.clientY - rect.top;
    const newP = Array.from({length:20},(_,i)=>({id:Date.now()+i,x,y,color:colors[i%colors.length],angle:(Math.PI*2*i)/20,velocity:40+Math.random()*60}));
    particles.push(...newP); setTimeout(()=>{particles=particles.filter(p=>!newP.includes(p))},1000)"
    class="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">
    {{ $slot ?? 'Click for Confetti' }}
  </button>
  <template x-for="p in particles" :key="p.id">
    <span class="pointer-events-none absolute h-2 w-2 rounded-full confetti-burst"
      :style="{ left: p.x+'px', top: p.y+'px', backgroundColor: p.color, '--tx': Math.cos(p.angle)*p.velocity+'px', '--ty': (Math.sin(p.angle)*p.velocity-50)+'px' }"></span>
  </template>
</div>
<style>
  .confetti-burst { animation: confetti-burst 1s ease-out forwards; }
  @keyframes confetti-burst { 0% { transform: translate(0,0) scale(1); opacity:1; } 100% { transform: translate(var(--tx),var(--ty)) scale(0); opacity:0; } }
</style>`,
    },
  },
};

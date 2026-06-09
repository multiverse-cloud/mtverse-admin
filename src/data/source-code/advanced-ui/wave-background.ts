import { ComponentSourceData } from '../types';

export const waveBackgroundSource: ComponentSourceData = {
  component: 'Wave Background',
  slug: 'wave-background',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'An animated wave background pattern using CSS animations for a dynamic visual effect.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'WaveBackground.tsx',
      code: `import React from 'react';

export default function WaveBackground() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-400 to-brand-600" />
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-[wave_8s_linear_infinite]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
          fill="rgba(255,255,255,0.15)"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-[wave_12s_linear_infinite_reverse]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,80 L1440,120 L0,120 Z"
          fill="rgba(255,255,255,0.1)"
        />
      </svg>
      <div className="relative z-10 flex h-full items-center justify-center">
        <h4 className="text-xl font-bold text-white">Wave Background</h4>
      </div>
      <style>{\`
        @keyframes wave { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      \`}</style>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'wave-background/page.tsx',
      code: `'use client';

import WaveBackground from '@/components/mtverse/advanced-ui/WaveBackground';

export default function WaveBackgroundPage() {
  return <WaveBackground />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'WaveBackground.vue',
      code: `<template>
  <div class="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-white/5">
    <div class="absolute inset-0 bg-gradient-to-b from-brand-400 to-brand-600" />
    <svg class="absolute bottom-0 left-0 w-[200%] animate-[wave_8s_linear_infinite]" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.15)" />
    </svg>
    <svg class="absolute bottom-0 left-0 w-[200%] animate-[wave_12s_linear_infinite_reverse]" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,80 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.1)" />
    </svg>
    <div class="relative z-10 flex h-full items-center justify-center">
      <h4 class="text-xl font-bold text-white">Wave Background</h4>
    </div>
  </div>
</template>

<style scoped>
@keyframes wave { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'wave-background.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-wave-background',
  template: \`
    <div class="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-white/5">
      <div class="absolute inset-0 bg-gradient-to-b from-brand-400 to-brand-600"></div>
      <svg class="absolute bottom-0 left-0 w-[200%] wave-anim" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.15)" />
      </svg>
      <svg class="absolute bottom-0 left-0 w-[200%] wave-anim-reverse" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,80 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.1)" />
      </svg>
      <div class="relative z-10 flex h-full items-center justify-center">
        <h4 class="text-xl font-bold text-white">Wave Background</h4>
      </div>
    </div>
  \`,
  styles: [\`
    .wave-anim { animation: wave 8s linear infinite; }
    .wave-anim-reverse { animation: wave 12s linear infinite reverse; }
    @keyframes wave { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  \`]
})
export class WaveBackgroundComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'wave-background.html',
      code: `<!-- HTML + CSS -->
<div class="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-white/5">
  <div class="absolute inset-0 bg-gradient-to-b from-brand-400 to-brand-600"></div>
  <svg class="absolute bottom-0 left-0 w-[200%] wave-anim" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.15)" />
  </svg>
  <svg class="absolute bottom-0 left-0 w-[200%] wave-anim-reverse" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,80 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.1)" />
  </svg>
  <div class="relative z-10 flex h-full items-center justify-center">
    <h4 class="text-xl font-bold text-white">Wave Background</h4>
  </div>
</div>
<style>
  .wave-anim { animation: wave 8s linear infinite; }
  .wave-anim-reverse { animation: wave 12s linear infinite reverse; }
  @keyframes wave { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
</style>`,
    },
    laravel: {
      language: 'blade',
      filename: 'wave-background.blade.php',
      code: `<!-- Laravel Blade + CSS -->
<div class="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-white/5">
  <div class="absolute inset-0 bg-gradient-to-b from-brand-400 to-brand-600"></div>
  <svg class="absolute bottom-0 left-0 w-[200%] wave-anim" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.15)" />
  </svg>
  <svg class="absolute bottom-0 left-0 w-[200%] wave-anim-reverse" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,80 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.1)" />
  </svg>
  <div class="relative z-10 flex h-full items-center justify-center">
    <h4 class="text-xl font-bold text-white">Wave Background</h4>
  </div>
</div>
<style>
  .wave-anim { animation: wave 8s linear infinite; }
  .wave-anim-reverse { animation: wave 12s linear infinite reverse; }
  @keyframes wave { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
</style>`,
    },
  },
};

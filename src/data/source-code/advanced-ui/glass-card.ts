import { ComponentSourceData } from '../types';

export const glassCardSource: ComponentSourceData = {
  component: 'Glass Card',
  slug: 'glass-card',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A card with glassmorphism effect featuring blur, transparency, and subtle borders.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'GlassCard.tsx',
      code: `import React from 'react';

interface GlassCardProps {
  children?: React.ReactNode;
}

export default function GlassCard({ children }: GlassCardProps) {
  return (
    <div className="relative h-64 w-80 overflow-hidden rounded-xl">
      {/* Background pattern for glass effect visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-400 via-purple-500 to-pink-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3),transparent_50%)]" />

      {/* Glass card */}
      <div
        className="absolute inset-4 rounded-xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md"
      >
        {children ?? (
          <>
            <h4 className="text-lg font-bold text-white">Glass Card</h4>
            <p className="mt-2 text-sm text-white/80">A beautiful glassmorphism effect with blur and transparency.</p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Glass</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Blur</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'glass-card/page.tsx',
      code: `'use client';

import GlassCard from '@/components/mtverse/advanced-ui/GlassCard';

export default function GlassCardPage() {
  return <GlassCard />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'GlassCard.vue',
      code: `<template>
  <div class="relative h-64 w-80 overflow-hidden rounded-xl">
    <div class="absolute inset-0 bg-gradient-to-br from-brand-400 via-purple-500 to-pink-500" />
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3),transparent_50%)]" />
    <div class="absolute inset-4 rounded-xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
      <slot>
        <h4 class="text-lg font-bold text-white">Glass Card</h4>
        <p class="mt-2 text-sm text-white/80">A beautiful glassmorphism effect with blur and transparency.</p>
        <div class="mt-4 flex gap-2">
          <span class="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Glass</span>
          <span class="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Blur</span>
        </div>
      </slot>
    </div>
  </div>
</template>`,
    },
    angular: {
      language: 'ts',
      filename: 'glass-card.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  template: \`
    <div class="relative h-64 w-80 overflow-hidden rounded-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-400 via-purple-500 to-pink-500"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3),transparent_50%)]"></div>
      <div class="absolute inset-4 rounded-xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
        <h4 class="text-lg font-bold text-white">Glass Card</h4>
        <p class="mt-2 text-sm text-white/80">A beautiful glassmorphism effect with blur and transparency.</p>
        <div class="mt-4 flex gap-2">
          <span class="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Glass</span>
          <span class="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Blur</span>
        </div>
      </div>
    </div>
  \`
})
export class GlassCardComponent {}`,
    },
    html: {
      language: 'html',
      filename: 'glass-card.html',
      code: `<!-- HTML + Tailwind CSS -->
<div class="relative h-64 w-80 overflow-hidden rounded-xl">
  <div class="absolute inset-0 bg-gradient-to-br from-brand-400 via-purple-500 to-pink-500"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3),transparent_50%)]"></div>
  <div class="absolute inset-4 rounded-xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
    <h4 class="text-lg font-bold text-white">Glass Card</h4>
    <p class="mt-2 text-sm text-white/80">A beautiful glassmorphism effect with blur and transparency.</p>
    <div class="mt-4 flex gap-2">
      <span class="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Glass</span>
      <span class="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Blur</span>
    </div>
  </div>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'glass-card.blade.php',
      code: `<!-- Laravel Blade + Tailwind CSS -->
<div class="relative h-64 w-80 overflow-hidden rounded-xl">
  <div class="absolute inset-0 bg-gradient-to-br from-brand-400 via-purple-500 to-pink-500"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3),transparent_50%)]"></div>
  <div class="absolute inset-4 rounded-xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
    {{ $slot ?? '<h4 class="text-lg font-bold text-white">Glass Card</h4><p class="mt-2 text-sm text-white/80">A beautiful glassmorphism effect with blur and transparency.</p>' }}
  </div>
</div>`,
    },
  },
};

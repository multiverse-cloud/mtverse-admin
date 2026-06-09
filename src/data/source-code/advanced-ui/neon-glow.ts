import { ComponentSourceData } from '../types';

export const neonGlowSource: ComponentSourceData = {
  component: 'Neon Glow',
  slug: 'neon-glow',
  category: 'Advanced UI',
  categorySlug: 'advanced-ui',
  description: 'A text or element with a pulsing neon glow effect using CSS text-shadow and box-shadow.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'NeonGlow.tsx',
      code: `import React from 'react';

interface NeonGlowProps {
  text?: string;
  color?: string;
}

export default function NeonGlow({ text = 'Neon Glow', color = '#6366f1' }: NeonGlowProps) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 p-8 dark:border-white/5">
      <h2
        className="text-4xl font-bold"
        style={{
          color,
          textShadow: \`0 0 7px \${color}, 0 0 10px \${color}, 0 0 21px \${color}, 0 0 42px \${color}\`,
          animation: 'neon-pulse 2s ease-in-out infinite alternate',
        }}
      >
        {text}
      </h2>
      <style>{\`
        @keyframes neon-pulse {
          from { text-shadow: 0 0 7px \${color}, 0 0 10px \${color}, 0 0 21px \${color}, 0 0 42px \${color}; }
          to { text-shadow: 0 0 4px \${color}, 0 0 7px \${color}, 0 0 15px \${color}, 0 0 30px \${color}; }
        }
      \`}</style>
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'neon-glow/page.tsx',
      code: `'use client';

import NeonGlow from '@/components/mtverse/advanced-ui/NeonGlow';

export default function NeonGlowPage() {
  return <NeonGlow />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'NeonGlow.vue',
      code: `<template>
  <div class="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 p-8 dark:border-white/5">
    <h2 class="text-4xl font-bold neon-text" :style="{ color, '--glow-color': color }">{{ text }}</h2>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

withDefaults(defineProps<{ text?: string; color?: string }>(), { text: 'Neon Glow', color: '#6366f1' });
</script>

<style scoped>
.neon-text {
  text-shadow: 0 0 7px var(--glow-color), 0 0 10px var(--glow-color), 0 0 21px var(--glow-color), 0 0 42px var(--glow-color);
  animation: neon-pulse 2s ease-in-out infinite alternate;
}
@keyframes neon-pulse {
  from { text-shadow: 0 0 7px var(--glow-color), 0 0 10px var(--glow-color), 0 0 21px var(--glow-color), 0 0 42px var(--glow-color); }
  to { text-shadow: 0 0 4px var(--glow-color), 0 0 7px var(--glow-color), 0 0 15px var(--glow-color), 0 0 30px var(--glow-color); }
}
</style>`,
    },
    angular: {
      language: 'ts',
      filename: 'neon-glow.component.ts',
      code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neon-glow',
  template: \`
    <div class="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 p-8 dark:border-white/5">
      <h2 class="text-4xl font-bold neon-text" [style.color]="color" [style.--glow-color]="color">{{ text }}</h2>
    </div>
  \`,
  styles: [\`
    .neon-text { text-shadow: 0 0 7px var(--glow-color), 0 0 10px var(--glow-color), 0 0 21px var(--glow-color), 0 0 42px var(--glow-color); animation: neon-pulse 2s ease-in-out infinite alternate; }
    @keyframes neon-pulse {
      from { text-shadow: 0 0 7px var(--glow-color), 0 0 10px var(--glow-color), 0 0 21px var(--glow-color), 0 0 42px var(--glow-color); }
      to { text-shadow: 0 0 4px var(--glow-color), 0 0 7px var(--glow-color), 0 0 15px var(--glow-color), 0 0 30px var(--glow-color); }
    }
  \`]
})
export class NeonGlowComponent {
  @Input() text = 'Neon Glow';
  @Input() color = '#6366f1';
}`,
    },
    html: {
      language: 'html',
      filename: 'neon-glow.html',
      code: `<!-- HTML + CSS -->
<div class="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 p-8 dark:border-white/5">
  <h2 class="text-4xl font-bold neon-text" style="color: #6366f1; --glow-color: #6366f1;">Neon Glow</h2>
</div>
<style>
  .neon-text {
    text-shadow: 0 0 7px var(--glow-color), 0 0 10px var(--glow-color), 0 0 21px var(--glow-color), 0 0 42px var(--glow-color);
    animation: neon-pulse 2s ease-in-out infinite alternate;
  }
  @keyframes neon-pulse {
    from { text-shadow: 0 0 7px var(--glow-color), 0 0 10px var(--glow-color), 0 0 21px var(--glow-color), 0 0 42px var(--glow-color); }
    to { text-shadow: 0 0 4px var(--glow-color), 0 0 7px var(--glow-color), 0 0 15px var(--glow-color), 0 0 30px var(--glow-color); }
  }
</style>`,
    },
    laravel: {
      language: 'blade',
      filename: 'neon-glow.blade.php',
      code: `<!-- Laravel Blade + CSS -->
<div class="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 p-8 dark:border-white/5">
  <h2 class="text-4xl font-bold neon-text" style="color: #6366f1; --glow-color: #6366f1;">{{ $text ?? 'Neon Glow' }}</h2>
</div>
<style>
  .neon-text {
    text-shadow: 0 0 7px var(--glow-color), 0 0 10px var(--glow-color), 0 0 21px var(--glow-color), 0 0 42px var(--glow-color);
    animation: neon-pulse 2s ease-in-out infinite alternate;
  }
  @keyframes neon-pulse {
    from { text-shadow: 0 0 7px var(--glow-color), 0 0 10px var(--glow-color), 0 0 21px var(--glow-color), 0 0 42px var(--glow-color); }
    to { text-shadow: 0 0 4px var(--glow-color), 0 0 7px var(--glow-color), 0 0 15px var(--glow-color), 0 0 30px var(--glow-color); }
  }
</style>`,
    },
  },
};

import { ComponentSourceData } from '../types';

export const animatedUnderlineSource: ComponentSourceData = {
  component: 'Animated Underline',
  slug: 'animated-underline',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Hover underline animation on links for interactive navigation.',
  sources: {
    react: { language: 'tsx', filename: 'AnimatedUnderlineSection.tsx', code: `function AnimatedUnderlineSection() {\n  const [hovered, setHovered] = useState<string | null>(null);\n  return (\n    <div className="flex gap-6">\n      {['Dashboard', 'Analytics'].map((link) => (\n        <a key={link} href="#" onMouseEnter={() => setHovered(link)} onMouseLeave={() => setHovered(null)} className="relative text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors">{link}<span className={\`absolute bottom-0 left-0 h-0.5 bg-brand-500 transition-all duration-300 \${hovered === link ? 'w-full' : 'w-0'}\`} /></a>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'animated-underline/page.tsx', code: `'use client';\nimport AnimatedUnderlineSection from '@/components/mtverse/ui-elements/AnimatedUnderlineSection';\nexport default function AnimatedUnderlinePage() { return <AnimatedUnderlineSection />; }` },
    vue: { language: 'vue', filename: 'AnimatedUnderlineSection.vue', code: `<template><div class="flex gap-6"><a v-for="link in links" :key="link" href="#" @mouseenter="hovered = link" @mouseleave="hovered = null" class="relative text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors">{{ link }}<span :class="hovered === link ? 'w-full' : 'w-0'" class="absolute bottom-0 left-0 h-0.5 bg-brand-500 transition-all duration-300" /></a></div></template><script setup lang="ts">import { ref } from 'vue'; const hovered = ref(null); const links = ['Dashboard', 'Analytics'];</script>` },
    angular: { language: 'ts', filename: 'animated-underline.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-animated-underline', template: '' })\nexport class AnimatedUnderlineComponent {}` },
    html: { language: 'html', filename: 'animated-underline.html', code: `<!-- HTML Animated Underline --><div class="flex gap-6"><a href="#" class="relative text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors group">Dashboard<span class="absolute bottom-0 left-0 h-0.5 bg-brand-500 transition-all duration-300 w-0 group-hover:w-full"></span></a></div>` },
    laravel: { language: 'blade', filename: 'animated-underline.blade.php', code: `<!-- Laravel Animated Underline --><div class="flex gap-6"><a href="#" class="relative text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors group">Dashboard<span class="absolute bottom-0 left-0 h-0.5 bg-brand-500 transition-all duration-300 w-0 group-hover:w-full"></span></a></div>` },
  },
};

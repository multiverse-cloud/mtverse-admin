import { ComponentSourceData } from '../types';

export const switchesSource: ComponentSourceData = {
  component: 'Switches',
  slug: 'switches',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Toggle switches with labels and color variants for binary state controls.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'SwitchesSection.tsx',
      code: `function SwitchesSection() {
  const [on, setOn] = useState(true);
  return (
    <div className="flex items-center justify-between max-w-md">
      <div><p className="text-sm font-medium text-gray-800 dark:text-white/90">Notifications</p><p className="text-xs text-gray-500">Receive push notifications</p></div>
      <button onClick={() => setOn(!on)} className={\`relative inline-flex h-6 w-11 rounded-full transition-colors \${on ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}\`}>
        <span className={\`inline-block size-5 rounded-full bg-white shadow-sm transition-transform \${on ? 'translate-x-5.5' : 'translate-x-0.5'} mt-0.5\`} />
      </button>
    </div>
  );
}`,
    },
    nextjs: { language: 'tsx', filename: 'switches/page.tsx', code: `'use client';\nimport SwitchesSection from '@/components/mtverse/ui-elements/SwitchesSection';\nexport default function SwitchesPage() { return <SwitchesSection />; }` },
    vue: { language: 'vue', filename: 'SwitchesSection.vue', code: `<template><div class="flex items-center justify-between max-w-md"><p class="text-sm font-medium text-gray-800">Notifications</p><button @click="on = !on" :class="\`relative inline-flex h-6 w-11 rounded-full transition-colors \${on ? 'bg-brand-500' : 'bg-gray-200'}\`"><span :class="\`inline-block size-5 rounded-full bg-white shadow-sm transition-transform \${on ? 'translate-x-5.5' : 'translate-x-0.5'} mt-0.5\`" /></button></div></template><script setup lang="ts">import { ref } from 'vue'; const on = ref(true);</script>` },
    angular: { language: 'ts', filename: 'switches.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-switches', template: '<button (click)="on = !on" [class]="on ? \\'bg-brand-500\\' : \\'bg-gray-200\\'" class="relative inline-flex h-6 w-11 rounded-full transition-colors"><span class="inline-block size-5 rounded-full bg-white shadow-sm mt-0.5" [class.translate-x-5.5]="on" [class.translate-x-0.5]="!on"></span></button>' })\nexport class SwitchesComponent { on = true; }` },
    html: { language: 'html', filename: 'switches.html', code: `<!-- HTML Switch --><div x-data="{ on: true }"><button @click="on = !on" :class="on ? 'bg-brand-500' : 'bg-gray-200'" class="relative inline-flex h-6 w-11 rounded-full transition-colors"><span :class="on ? 'translate-x-5.5' : 'translate-x-0.5'" class="inline-block size-5 rounded-full bg-white shadow-sm transition-transform mt-0.5"></span></button></div>` },
    laravel: { language: 'blade', filename: 'switches.blade.php', code: `<!-- Laravel Switch --><div x-data="{ on: true }"><button @click="on = !on" :class="on ? 'bg-brand-500' : 'bg-gray-200'" class="relative inline-flex h-6 w-11 rounded-full transition-colors"><span :class="on ? 'translate-x-5.5' : 'translate-x-0.5'" class="inline-block size-5 rounded-full bg-white shadow-sm transition-transform mt-0.5"></span></button></div>` },
  },
};

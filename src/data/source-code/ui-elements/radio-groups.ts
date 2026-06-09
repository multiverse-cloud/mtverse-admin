import { ComponentSourceData } from '../types';

export const radioGroupsSource: ComponentSourceData = {
  component: 'Radio Groups',
  slug: 'radio-groups',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Styled radio button groups for single selection from multiple options.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'RadioGroupsSection.tsx',
      code: `function RadioGroupsSection() {
  const [selected, setSelected] = useState('pro');
  const options = [{ value: 'free', label: 'Free Plan' }, { value: 'pro', label: 'Pro Plan' }];
  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt.value} className={\`flex items-center gap-3 rounded-xl border p-3 cursor-pointer \${selected === opt.value ? 'border-brand-500 bg-brand-50' : 'border-gray-200'}\`}>
          <div className={\`flex size-5 items-center justify-center rounded-full border-2 \${selected === opt.value ? 'border-brand-500' : 'border-gray-300'}\`}>
            {selected === opt.value && <div className="size-2.5 rounded-full bg-brand-500" />}
          </div>
          <span className="text-sm font-medium">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}`,
    },
    nextjs: { language: 'tsx', filename: 'radio-groups/page.tsx', code: `'use client';\nimport RadioGroupsSection from '@/components/mtverse/ui-elements/RadioGroupsSection';\nexport default function RadioGroupsPage() { return <RadioGroupsSection />; }` },
    vue: { language: 'vue', filename: 'RadioGroupsSection.vue', code: `<template><div class="space-y-2"><label v-for="opt in options" :key="opt.value" :class="selected === opt.value ? 'border-brand-500 bg-brand-50' : 'border-gray-200'" class="flex items-center gap-3 rounded-xl border p-3 cursor-pointer"><div :class="selected === opt.value ? 'border-brand-500' : 'border-gray-300'" class="flex size-5 items-center justify-center rounded-full border-2"><div v-if="selected === opt.value" class="size-2.5 rounded-full bg-brand-500" /></div><span class="text-sm font-medium">{{ opt.label }}</span></label></div></template><script setup lang="ts">import { ref } from 'vue'; const selected = ref('pro'); const options = [{ value: 'free', label: 'Free Plan' }, { value: 'pro', label: 'Pro Plan' }];</script>` },
    angular: { language: 'ts', filename: 'radio-groups.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-radio-groups', template: '' })\nexport class RadioGroupsComponent { selected = 'pro'; options = [{ value: 'free', label: 'Free Plan' }, { value: 'pro', label: 'Pro Plan' }]; }` },
    html: { language: 'html', filename: 'radio-groups.html', code: `<!-- HTML Radio Groups --><div x-data="{ selected: 'pro' }"><label :class="selected === 'free' ? 'border-brand-500' : 'border-gray-200'" class="flex items-center gap-3 rounded-xl border p-3 cursor-pointer"><input type="radio" x-model="selected" value="free" /><span>Free Plan</span></label></div>` },
    laravel: { language: 'blade', filename: 'radio-groups.blade.php', code: `<!-- Laravel Radio Groups --><div x-data="{ selected: 'pro' }"><label :class="selected === 'free' ? 'border-brand-500' : 'border-gray-200'" class="flex items-center gap-3 rounded-xl border p-3 cursor-pointer"><input type="radio" x-model="selected" value="free" /><span>Free Plan</span></label></div>` },
  },
};

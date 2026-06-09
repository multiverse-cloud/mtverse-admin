import { ComponentSourceData } from '../types';

export const checkboxesSource: ComponentSourceData = {
  component: 'Checkboxes',
  slug: 'checkboxes',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Styled checkboxes with indeterminate state for multi-selection controls.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'CheckboxesSection.tsx',
      code: `function CheckboxesSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({ terms: true });
  const toggle = (key) => setChecked((p) => ({ ...p, [key]: !p[key] }));
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <button onClick={() => toggle('terms')} className={\`flex size-5 shrink-0 items-center justify-center rounded-md border-2 \${checked.terms ? 'border-brand-500 bg-brand-500' : 'border-gray-300'}\`}>
        {checked.terms && <CheckIcon className="size-3 text-white" />}
      </button>
      <span className="text-sm">Accept terms</span>
    </label>
  );
}`,
    },
    nextjs: { language: 'tsx', filename: 'checkboxes/page.tsx', code: `'use client';\nimport CheckboxesSection from '@/components/mtverse/ui-elements/CheckboxesSection';\nexport default function CheckboxesPage() { return <CheckboxesSection />; }` },
    vue: { language: 'vue', filename: 'CheckboxesSection.vue', code: `<template><label class="flex items-start gap-3 cursor-pointer"><button @click="checked = !checked" :class="checked ? 'border-brand-500 bg-brand-500' : 'border-gray-300'" class="flex size-5 shrink-0 items-center justify-center rounded-md border-2"><svg v-if="checked" class="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg></button><span class="text-sm">Accept terms</span></label></template><script setup lang="ts">import { ref } from 'vue'; const checked = ref(true);</script>` },
    angular: { language: 'ts', filename: 'checkboxes.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-checkboxes', template: '' })\nexport class CheckboxesComponent { checked = true; }` },
    html: { language: 'html', filename: 'checkboxes.html', code: `<!-- HTML Checkboxes --><label class="flex items-center gap-3 cursor-pointer"><input type="checkbox" class="size-5 rounded-md border-2 border-brand-500" checked /><span class="text-sm">Accept terms</span></label>` },
    laravel: { language: 'blade', filename: 'checkboxes.blade.php', code: `<!-- Laravel Checkboxes --><label class="flex items-center gap-3 cursor-pointer"><input type="checkbox" class="size-5 rounded-md border-2 border-brand-500" checked /><span class="text-sm">Accept terms</span></label>` },
  },
};

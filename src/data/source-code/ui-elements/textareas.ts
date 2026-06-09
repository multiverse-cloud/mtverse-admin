import { ComponentSourceData } from '../types';

export const textareasSource: ComponentSourceData = {
  component: 'Textareas',
  slug: 'textareas',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Auto-resize textareas with character count for long-form text input.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'TextareasSection.tsx',
      code: `function TextareasSection() {
  const [text, setText] = useState('');
  const maxChars = 200;
  return (
    <div className="max-w-md">
      <label className="mb-1.5 block text-sm font-medium text-gray-700">With Character Count</label>
      <textarea rows={3} value={text} onChange={(e) => setText(e.target.value.slice(0, maxChars))} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 resize-none transition-colors" />
      <p className="mt-1 text-xs text-gray-400">{text.length}/{maxChars}</p>
    </div>
  );
}`,
    },
    nextjs: { language: 'tsx', filename: 'textareas/page.tsx', code: `'use client';\nimport TextareasSection from '@/components/mtverse/ui-elements/TextareasSection';\nexport default function TextareasPage() { return <TextareasSection />; }` },
    vue: { language: 'vue', filename: 'TextareasSection.vue', code: `<template><div class="max-w-md"><label class="mb-1.5 block text-sm font-medium text-gray-700">With Character Count</label><textarea rows="3" :value="text" @input="text = $event.target.value.slice(0, 200)" class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 resize-none transition-colors" /><p class="mt-1 text-xs text-gray-400">{{ text.length }}/200</p></div></template><script setup lang="ts">import { ref } from 'vue'; const text = ref('');</script>` },
    angular: { language: 'ts', filename: 'textareas.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-textareas', template: '' })\nexport class TextareasComponent { text = ''; maxChars = 200; }` },
    html: { language: 'html', filename: 'textareas.html', code: `<!-- HTML Textarea with Count --><div x-data="{ text: '' }" class="max-w-md"><textarea x-model="text" rows="3" class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none resize-none"></textarea><p class="mt-1 text-xs text-gray-400"><span x-text="text.length"></span>/200</p></div>` },
    laravel: { language: 'blade', filename: 'textareas.blade.php', code: `<!-- Laravel Textarea --><div x-data="{ text: '' }" class="max-w-md"><textarea x-model="text" rows="3" class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none resize-none"></textarea><p class="mt-1 text-xs text-gray-400"><span x-text="text.length"></span>/200</p></div>` },
  },
};

import { ComponentSourceData } from '../types';

export const statusIndicatorSource: ComponentSourceData = {
  component: 'Status Indicator',
  slug: 'status-indicator',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Online/offline/busy status dots with pulse animation.',
  sources: {
    react: { language: 'tsx', filename: 'StatusIndicatorSection.tsx', code: `function StatusIndicatorSection() {\n  const statuses = [{ label: 'Online', color: 'bg-success-500' }, { label: 'Busy', color: 'bg-error-500' }];\n  return (\n    <div className="flex gap-4">\n      {statuses.map((s) => (\n        <div key={s.label} className="flex items-center gap-2">\n          <span className={\`relative flex size-3 \${s.color} rounded-full\`}><span className={\`absolute inset-0 animate-ping rounded-full \${s.color} opacity-75\`} /></span>\n          <span className="text-sm font-medium">{s.label}</span>\n        </div>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'status-indicator/page.tsx', code: `'use client';\nimport StatusIndicatorSection from '@/components/mtverse/ui-elements/StatusIndicatorSection';\nexport default function StatusIndicatorPage() { return <StatusIndicatorSection />; }` },
    vue: { language: 'vue', filename: 'StatusIndicatorSection.vue', code: `<template><div class="flex gap-4"><div v-for="s in statuses" :key="s.label" class="flex items-center gap-2"><span :class="s.color" class="relative flex size-3 rounded-full"><span :class="s.color" class="absolute inset-0 animate-ping rounded-full opacity-75" /></span><span class="text-sm font-medium">{{ s.label }}</span></div></div></template><script setup lang="ts">const statuses = [{ label: 'Online', color: 'bg-success-500' }];</script>` },
    angular: { language: 'ts', filename: 'status-indicator.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-status-indicator', template: '' })\nexport class StatusIndicatorComponent { statuses = [{ label: 'Online', color: 'bg-success-500' }]; }` },
    html: { language: 'html', filename: 'status-indicator.html', code: `<!-- HTML Status Indicator --><div class="flex gap-4"><div class="flex items-center gap-2"><span class="relative flex size-3 bg-success-500 rounded-full"><span class="absolute inset-0 animate-ping rounded-full bg-success-500 opacity-75"></span></span><span class="text-sm font-medium">Online</span></div></div>` },
    laravel: { language: 'blade', filename: 'status-indicator.blade.php', code: `<!-- Laravel Status --><div class="flex gap-4"><div class="flex items-center gap-2"><span class="relative flex size-3 bg-success-500 rounded-full"><span class="absolute inset-0 animate-ping rounded-full bg-success-500 opacity-75"></span></span><span class="text-sm font-medium">Online</span></div></div>` },
  },
};

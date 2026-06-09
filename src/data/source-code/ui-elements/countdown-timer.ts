import { ComponentSourceData } from '../types';

export const countdownTimerSource: ComponentSourceData = {
  component: 'Countdown Timer',
  slug: 'countdown-timer',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Days/hours/minutes countdown with live updating display.',
  sources: {
    react: { language: 'tsx', filename: 'CountdownTimerSection.tsx', code: `function CountdownTimerSection() {\n  const targetDate = new Date();\n  targetDate.setDate(targetDate.getDate() + 12);\n  const [now, setNow] = useState(Date.now());\n  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);\n  const diff = Math.max(0, targetDate.getTime() - now);\n  const days = Math.floor(diff / 86400000);\n  const hours = Math.floor((diff % 86400000) / 3600000);\n  const minutes = Math.floor((diff % 3600000) / 60000);\n  const seconds = Math.floor((diff % 60000) / 1000);\n  return (\n    <div className="flex items-center gap-3">\n      {[{ label: 'Days', value: days }, { label: 'Hours', value: hours }].map((u) => (\n        <div key={u.label} className="flex flex-col items-center"><div className="flex size-16 items-center justify-center rounded-xl bg-gray-100"><span className="text-2xl font-bold">{String(u.value).padStart(2, '0')}</span></div><span className="mt-1 text-[10px] uppercase text-gray-400">{u.label}</span></div>\n      ))}\n    </div>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'countdown-timer/page.tsx', code: `'use client';\nimport CountdownTimerSection from '@/components/mtverse/ui-elements/CountdownTimerSection';\nexport default function CountdownTimerPage() { return <CountdownTimerSection />; }` },
    vue: { language: 'vue', filename: 'CountdownTimerSection.vue', code: `<template><div class="flex items-center gap-3">{{ countdown }}</div></template><script setup lang="ts">import { ref, onMounted, onUnmounted } from 'vue'; const countdown = ref(''); let t: any; onMounted(() => { t = setInterval(() => { countdown.value = new Date().toISOString(); }, 1000); }); onUnmounted(() => clearInterval(t));</script>` },
    angular: { language: 'ts', filename: 'countdown-timer.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-countdown-timer', template: '' })\nexport class CountdownTimerComponent {}` },
    html: { language: 'html', filename: 'countdown-timer.html', code: `<!-- HTML Countdown --><div x-data="{ days: 12, hours: 5, minutes: 30, seconds: 0, tick() { setInterval(() => { this.seconds--; if (this.seconds < 0) { this.seconds = 59; this.minutes--; } }, 1000); } }" x-init="tick()"><div class="flex items-center gap-3"><div class="flex size-16 items-center justify-center rounded-xl bg-gray-100"><span class="text-2xl font-bold" x-text="String(days).padStart(2, '0')"></span></div></div></div>` },
    laravel: { language: 'blade', filename: 'countdown-timer.blade.php', code: `<!-- Laravel Countdown --><div x-data="{ days: 12, hours: 5 }" x-init="setInterval(() => { /* tick */ }, 1000)"><div class="flex items-center gap-3"><div class="flex size-16 items-center justify-center rounded-xl bg-gray-100"><span class="text-2xl font-bold" x-text="String(days).padStart(2, '0')"></span></div></div></div>` },
  },
};

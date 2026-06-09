import { ComponentSourceData } from '../types';

export const notificationBadgeSource: ComponentSourceData = {
  component: 'Notification Badge',
  slug: 'notification-badge',
  category: 'UI Elements',
  categorySlug: 'ui-elements',
  description: 'Badge with count on icons for notification indicators.',
  sources: {
    react: { language: 'tsx', filename: 'NotificationBadgeSection.tsx', code: `function NotificationBadgeSection() {\n  const [count, setCount] = useState(5);\n  return (\n    <button onClick={() => setCount((p) => Math.max(0, p - 1))} className="relative">\n      <BellIcon className="size-7 text-gray-600" />\n      {count > 0 && <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-error-500 text-[10px] font-bold text-white">{count}</span>}\n    </button>\n  );\n}` },
    nextjs: { language: 'tsx', filename: 'notification-badge/page.tsx', code: `'use client';\nimport NotificationBadgeSection from '@/components/mtverse/ui-elements/NotificationBadgeSection';\nexport default function NotificationBadgePage() { return <NotificationBadgeSection />; }` },
    vue: { language: 'vue', filename: 'NotificationBadgeSection.vue', code: `<template><button @click="count = Math.max(0, count - 1)" class="relative"><span class="text-gray-600">🔔</span><span v-if="count > 0" class="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-error-500 text-[10px] font-bold text-white">{{ count }}</span></button></template><script setup lang="ts">import { ref } from 'vue'; const count = ref(5);</script>` },
    angular: { language: 'ts', filename: 'notification-badge.component.ts', code: `import { Component } from '@angular/core';\n@Component({ selector: 'app-notification-badge', template: '' })\nexport class NotificationBadgeComponent { count = 5; }` },
    html: { language: 'html', filename: 'notification-badge.html', code: `<!-- HTML Notification Badge --><div x-data="{ count: 5 }"><button @click="count = Math.max(0, count - 1)" class="relative"><span>🔔</span><span x-show="count > 0" x-text="count" class="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-error-500 text-[10px] font-bold text-white"></span></button></div>` },
    laravel: { language: 'blade', filename: 'notification-badge.blade.php', code: `<!-- Laravel Notification Badge --><div x-data="{ count: 5 }"><button @click="count = Math.max(0, count - 1)" class="relative"><span>🔔</span><span x-show="count > 0" x-text="count" class="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-error-500 text-[10px] font-bold text-white"></span></button></div>` },
  },
};

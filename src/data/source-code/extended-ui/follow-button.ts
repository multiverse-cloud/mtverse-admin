import { ComponentSourceData } from '../types';

export const followButtonSource: ComponentSourceData = {
  component: 'Follow Button',
  slug: 'follow-button',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'A follow/unfollow toggle button with loading state and animation.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'FollowButton.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { UserPlus, UserCheck } from 'lucide-react';

export default function FollowButton() {
  const [following, setFollowing] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setFollowing(!following);
    setLoading(false);
  };

  return (
    <button onClick={toggle} disabled={loading} className={\`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-95 disabled:opacity-60 \${following ? 'border border-gray-200 bg-white text-gray-700 hover:border-red-200 hover:text-red-600 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300' : 'bg-brand-500 text-white hover:bg-brand-600'}\`}>
      {loading ? (
        <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
      ) : following ? (
        <UserCheck className="size-4" />
      ) : (
        <UserPlus className="size-4" />
      )}
      {loading ? '...' : following ? 'Following' : 'Follow'}
    </button>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'follow-button/page.tsx',
      code: `'use client';

import FollowButton from '@/components/mtverse/extended-ui/FollowButton';

export default function FollowButtonPage() {
  return <FollowButton />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'FollowButton.vue',
      code: `<template>
  <button @click="toggle" :disabled="loading" class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-95 disabled:opacity-60" :class="following ? 'border border-gray-200 bg-white text-gray-700 hover:border-red-200 hover:text-red-600 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300' : 'bg-brand-500 text-white hover:bg-brand-600'">
    <svg v-if="loading" class="size-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
    <UserCheck v-else-if="following" class="size-4" />
    <UserPlus v-else class="size-4" />
    {{ loading ? '...' : following ? 'Following' : 'Follow' }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UserPlus, UserCheck } from 'lucide-vue-next';

const following = ref(false);
const loading = ref(false);

async function toggle() {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 500));
  following.value = !following.value;
  loading.value = false;
}
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'follow-button.component.ts',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-follow-button',
  template: \`
    <button (click)="toggle()" [disabled]="loading" class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-95 disabled:opacity-60" [class.bg-brand-500]="!following" [class.text-white]="!following" [class.border]="following" [class.border-gray-200]="following" [class.bg-white]="following" [class.text-gray-700]="following">
      <svg *ngIf="loading" class="size-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
      {{ loading ? '...' : following ? 'Following' : 'Follow' }}
    </button>
  \`
})
export class FollowButtonComponent {
  following = false;
  loading = false;

  async toggle() {
    this.loading = true;
    await new Promise(r => setTimeout(r, 500));
    this.following = !this.following;
    this.loading = false;
  }
}`,
    },
    html: {
      language: 'html',
      filename: 'follow-button.html',
      code: `<!-- HTML + Alpine.js -->
<button x-data="{ following: false, loading: false }" @click="loading = true; setTimeout(() => { following = !following; loading = false; }, 500)" :disabled="loading" class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-95 disabled:opacity-60" :class="following ? 'border border-gray-200 bg-white text-gray-700' : 'bg-brand-500 text-white'">
  <svg x-show="loading" class="size-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
  <span x-text="loading ? '...' : following ? 'Following' : 'Follow'"></span>
</button>`,
    },
    laravel: {
      language: 'blade',
      filename: 'follow-button.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<button x-data="{ following: false, loading: false }" @click="loading = true; setTimeout(() => { following = !following; loading = false; }, 500)" :disabled="loading" class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-95 disabled:opacity-60" :class="following ? 'border border-gray-200 bg-white text-gray-700' : 'bg-brand-500 text-white'">
  <svg x-show="loading" class="size-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
  <span x-text="loading ? '...' : following ? 'Following' : 'Follow'"></span>
</button>`,
    },
  },
};

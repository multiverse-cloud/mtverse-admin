import { ComponentSourceData } from '../types';

export const fileTreeSource: ComponentSourceData = {
  component: 'File Tree',
  slug: 'file-tree',
  category: 'Extended UI',
  categorySlug: 'extended-ui',
  description: 'An expandable file tree component for navigating directory structures.',
  sources: {
    react: {
      language: 'tsx',
      filename: 'FileTree.tsx',
      code: `// React + TypeScript implementation
import React, { useState } from 'react';
import { ChevronRight, Folder, FolderOpen, FileText } from 'lucide-react';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const tree: TreeNode[] = [
  { name: 'src', children: [
    { name: 'components', children: [{ name: 'Button.tsx' }, { name: 'Card.tsx' }, { name: 'Modal.tsx' }] },
    { name: 'pages', children: [{ name: 'index.tsx' }, { name: 'about.tsx' }] },
    { name: 'utils.ts' },
  ]},
  { name: 'package.json' },
  { name: 'tsconfig.json' },
];

function Node({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(false);
  const isDir = !!node.children;

  return (
    <div>
      <button onClick={() => isDir && setOpen(!open)} className="flex w-full items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5" style={{ paddingLeft: \`\${depth * 16 + 8}px\` }}>
        {isDir ? <ChevronRight className={\`size-3.5 transition-transform \${open ? 'rotate-90' : ''}\`} /> : <span className="w-3.5" />}
        {isDir ? open ? <FolderOpen className="size-4 text-brand-500" /> : <Folder className="size-4 text-brand-500" /> : <FileText className="size-4 text-gray-400" />}
        <span>{node.name}</span>
      </button>
      {isDir && open && node.children!.map((child) => <Node key={child.name} node={child} depth={depth + 1} />)}
    </div>
  );
}

export default function FileTree() {
  return (
    <div className="w-64 rounded-xl border border-gray-200 bg-white p-2 dark:border-white/10 dark:bg-gray-800">
      <h3 className="mb-1 px-2 text-xs font-semibold uppercase text-gray-400">Explorer</h3>
      {tree.map((node) => <Node key={node.name} node={node} />)}
    </div>
  );
}`,
    },
    nextjs: {
      language: 'tsx',
      filename: 'file-tree/page.tsx',
      code: `'use client';

import FileTree from '@/components/mtverse/extended-ui/FileTree';

export default function FileTreePage() {
  return <FileTree />;
}`,
    },
    vue: {
      language: 'vue',
      filename: 'FileTree.vue',
      code: `<template>
  <div class="w-64 rounded-xl border border-gray-200 bg-white p-2 dark:border-white/10 dark:bg-gray-800">
    <h3 class="mb-1 px-2 text-xs font-semibold uppercase text-gray-400">Explorer</h3>
    <TreeNode v-for="node in tree" :key="node.name" :node="node" :depth="0" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronRight, Folder, FolderOpen, FileText } from 'lucide-vue-next';

interface TreeNode { name: string; children?: TreeNode[] }

const tree: TreeNode[] = [
  { name: 'src', children: [{ name: 'components', children: [{ name: 'Button.tsx' }, { name: 'Card.tsx' }] }, { name: 'pages', children: [{ name: 'index.tsx' }] }, { name: 'utils.ts' }] },
  { name: 'package.json' },
  { name: 'tsconfig.json' },
];
</script>

<script lang="ts">
// TreeNode sub-component
</script>`,
    },
    angular: {
      language: 'ts',
      filename: 'file-tree.component.ts',
      code: `import { Component, Input } from '@angular/core';

interface TreeNode { name: string; children?: TreeNode[]; expanded?: boolean; }

@Component({
  selector: 'app-tree-node',
  template: \`
    <div>
      <button (click)="toggle()" class="flex w-full items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300" [style.padding-left.px]="depth * 16 + 8">
        <span *ngIf="node.children" class="transition-transform" [class.rotate-90]="node.expanded">▸</span>
        <span *ngIf="!node.children" class="w-3.5"></span>
        <span [class.text-brand-500]="!!node.children" [class.text-gray-400]="!node.children">{{ node.name }}</span>
      </button>
      <ng-container *ngIf="node.children && node.expanded">
        <app-tree-node *ngFor="let child of node.children" [node]="child" [depth]="depth + 1"></app-tree-node>
      </ng-container>
    </div>
  \`
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  @Input() depth = 0;
  toggle() { if (this.node.children) this.node.expanded = !this.node.expanded; }
}

@Component({
  selector: 'app-file-tree',
  template: \`
    <div class="w-64 rounded-xl border border-gray-200 bg-white p-2 dark:border-white/10 dark:bg-gray-800">
      <h3 class="mb-1 px-2 text-xs font-semibold uppercase text-gray-400">Explorer</h3>
      <app-tree-node *ngFor="let node of tree" [node]="node" [depth]="0"></app-tree-node>
    </div>
  \`
})
export class FileTreeComponent {
  tree: TreeNode[] = [
    { name: 'src', expanded: false, children: [{ name: 'components', children: [{ name: 'Button.tsx' }, { name: 'Card.tsx' }] }, { name: 'utils.ts' }] },
    { name: 'package.json' },
  ];
}`,
    },
    html: {
      language: 'html',
      filename: 'file-tree.html',
      code: `<!-- HTML + Alpine.js -->
<div x-data="{ tree: [{ name: 'src', open: false, children: [{ name: 'components', open: false, children: [{ name: 'Button.tsx' }, { name: 'Card.tsx' }] }, { name: 'utils.ts' }] }, { name: 'package.json' }, { name: 'tsconfig.json' }], toggle(node) { node.open = !node.open; } }" class="w-64 rounded-xl border border-gray-200 bg-white p-2 dark:border-white/10 dark:bg-gray-800">
  <h3 class="mb-1 px-2 text-xs font-semibold uppercase text-gray-400">Explorer</h3>
  <template x-for="node in tree" :key="node.name">
    <div>
      <button @click="node.children && toggle(node)" class="flex w-full items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-50">
        <span x-show="node.children" class="transition-transform" :class="node.open ? 'rotate-90' : ''">▸</span>
        <span x-show="!node.children" class="w-3.5"></span>
        <span :class="node.children ? 'text-brand-500' : 'text-gray-400'" x-text="node.name"></span>
      </button>
      <div x-show="node.open && node.children" x-transition class="pl-4">
        <template x-for="child in node.children || []" :key="child.name">
          <div>
            <button @click="child.children && toggle(child)" class="flex w-full items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-50">
              <span x-show="child.children" class="transition-transform" :class="child.open ? 'rotate-90' : ''">▸</span>
              <span x-show="!child.children" class="w-3.5"></span>
              <span :class="child.children ? 'text-brand-500' : 'text-gray-400'" x-text="child.name"></span>
            </button>
          </div>
        </template>
      </div>
    </div>
  </template>
</div>`,
    },
    laravel: {
      language: 'blade',
      filename: 'file-tree.blade.php',
      code: `<!-- Laravel Blade + Alpine.js -->
<div x-data="{ tree: [{ name: 'src', open: false, children: [{ name: 'components', open: false, children: [{ name: 'Button.tsx' }, { name: 'Card.tsx' }] }, { name: 'utils.ts' }] }, { name: 'package.json' }, { name: 'tsconfig.json' }], toggle(node) { node.open = !node.open; } }" class="w-64 rounded-xl border border-gray-200 bg-white p-2 dark:border-white/10 dark:bg-gray-800">
  <h3 class="mb-1 px-2 text-xs font-semibold uppercase text-gray-400">Explorer</h3>
  <template x-for="node in tree" :key="node.name">
    <div>
      <button @click="node.children && toggle(node)" class="flex w-full items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-50">
        <span x-show="node.children" class="transition-transform" :class="node.open ? 'rotate-90' : ''">▸</span>
        <span x-show="!node.children" class="w-3.5"></span>
        <span :class="node.children ? 'text-brand-500' : 'text-gray-400'" x-text="node.name"></span>
      </button>
      <div x-show="node.open && node.children" x-transition class="pl-4">
        <template x-for="child in node.children || []" :key="child.name">
          <div>
            <button @click="child.children && toggle(child)" class="flex w-full items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-50">
              <span x-show="child.children" class="transition-transform" :class="child.open ? 'rotate-90' : ''">▸</span>
              <span x-show="!child.children" class="w-3.5"></span>
              <span :class="child.children ? 'text-brand-500' : 'text-gray-400'" x-text="child.name"></span>
            </button>
          </div>
        </template>
      </div>
    </div>
  </template>
</div>`,
    },
  },
};

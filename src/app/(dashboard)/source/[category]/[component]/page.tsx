'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Code2, Eye, Columns2 } from 'lucide-react';
import { getSourceData, getCategoryComponents } from '@/data/source-code';
import CodeBlock from '@/components/mtverse/code-viewer/CodeBlock';
import FrameworkTabs, { FrameworkKey } from '@/components/mtverse/code-viewer/FrameworkTabs';
import type { ComponentSourceData, FrameworkSource } from '@/data/source-code/types';

type ViewMode = 'code' | 'preview' | 'split';

export default function SourceCodePage() {
  const params = useParams();
  const category = params.category as string;
  const component = params.component as string;

  const data = useMemo(() => getSourceData(category, component), [category, component]);

  const availableTabs = useMemo(() => {
    if (!data) return [] as FrameworkKey[];
    return Object.keys(data.sources) as FrameworkKey[];
  }, [data]);

  const [activeTab, setActiveTab] = useState<FrameworkKey>(availableTabs[0] || 'react');
  const [viewMode, setViewMode] = useState<ViewMode>('code');

  if (!data) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-center">
          <Code2 className="mx-auto size-12 text-gray-300 dark:text-gray-600" />
          <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white/90">Source Not Found</h2>
          <p className="mt-2 text-sm text-gray-500">The source code for this component is not available yet.</p>
          <Link
            href={`/components/${category}`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to {category.replace('-', ' ')}
          </Link>
        </div>
      </div>
    );
  }

  const currentSource: FrameworkSource | undefined = data.sources[activeTab];
  const categoryLabel = category === 'ui-elements' ? 'UI Elements' : category === 'advanced-ui' ? 'Advanced UI' : 'Extended UI';
  const backHref = category === 'ui-elements' ? '/components/ui-elements' : category === 'advanced-ui' ? '/components/advanced-ui' : '/components/extended-ui';

  return (
    <div className="space-y-6">
      {/* Breadcrumb / Back nav */}
      <div className="flex items-center gap-3">
        <Link
          href={backHref}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-500 transition-colors"
        >
          <ArrowLeft className="size-4" />
          {categoryLabel}
        </Link>
        <span className="text-gray-300 dark:text-gray-600">/</span>
        <span className="text-sm font-medium text-gray-800 dark:text-white/90">{data.component}</span>
      </div>

      {/* Title & description */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">{data.component}</h1>
        <p className="mt-1 text-sm text-gray-500">{data.description}</p>
      </div>

      {/* View mode toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setViewMode('code')}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            viewMode === 'code' ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/15'
          }`}
        >
          <Code2 className="size-4" /> Code
        </button>
        <button
          onClick={() => setViewMode('preview')}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            viewMode === 'preview' ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/15'
          }`}
        >
          <Eye className="size-4" /> Preview
        </button>
        <button
          onClick={() => setViewMode('split')}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            viewMode === 'split' ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/15'
          }`}
        >
          <Columns2 className="size-4" /> Split
        </button>
      </div>

      {/* Framework tabs */}
      <FrameworkTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        availableTabs={availableTabs}
      />

      {/* Content area */}
      <div className={`grid gap-6 ${viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Code panel */}
        {(viewMode === 'code' || viewMode === 'split') && currentSource && (
          <div>
            <CodeBlock
              code={currentSource.code}
              language={currentSource.language}
              filename={currentSource.filename}
              showLineNumbers={true}
            />
          </div>
        )}

        {/* Preview panel */}
        {(viewMode === 'preview' || viewMode === 'split') && (
          <div className="rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark">
            <div className="border-b border-gray-200 px-4 py-2.5 dark:border-white/5">
              <div className="flex items-center gap-2">
                <Eye className="size-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Live Preview</span>
              </div>
            </div>
            <div className="p-6">
              <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-gray-400">Interactive preview for &quot;{data.component}&quot; — view the component on the main page for full interactivity.</p>
                <Link
                  href={backHref}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors"
                >
                  View on {categoryLabel} page <ArrowLeft className="size-3 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick nav to other components in this category */}
      <QuickNav category={category} currentComponent={component} />
    </div>
  );
}

function QuickNav({ category, currentComponent }: { category: string; currentComponent: string }) {
  const data = useMemo(() => getCategoryComponents(category), [category]);

  if (!data || data.length <= 1) return null;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
      <h3 className="mb-3 text-sm font-semibold text-gray-800 dark:text-white/90">More {category.replace('-', ' ')} Components</h3>
      <div className="flex flex-wrap gap-2">
        {data.map((item: { slug: string; component: string }) => (
          <Link
            key={item.slug}
            href={`/source/${category}/${item.slug}`}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              item.slug === currentComponent
                ? 'bg-brand-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/15'
            }`}
          >
            {item.component}
          </Link>
        ))}
      </div>
    </div>
  );
}

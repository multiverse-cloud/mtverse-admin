import { FrameworkKey } from '@/components/mtverse/code-viewer/FrameworkTabs';

export interface FrameworkSource {
  language: string;
  code: string;
  filename: string;
}

export interface ComponentSourceData {
  component: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  sources: Partial<Record<FrameworkKey, FrameworkSource>>;
  preview?: React.ComponentType;
}

/** Type-safe registry of all source code data */
export type SourceCodeRegistry = Record<string, Record<string, ComponentSourceData>>;

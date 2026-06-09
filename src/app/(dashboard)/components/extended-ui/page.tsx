import type { Metadata } from 'next';
import ExtendedUIElementsClient from '@/components/mtverse/ui-elements/extended-client';

export const metadata: Metadata = {
  title: 'Extended UI - Command Palette, Editors & Utility Components',
  description:
    'Browse 20+ extended UI components for mtverse admin including command palette, diff viewer, rich text editor, color picker, rating stars, file tree, keyboard shortcuts, markdown preview, mention input, and more. Built with Tailwind CSS v4.',
  keywords: [
    'extended UI components',
    'command palette',
    'diff viewer',
    'rich text editor',
    'color picker',
    'rating stars',
    'copy to clipboard',
    'code editor',
    'bookmark button',
    'carousel component',
    'breadcrumb trail',
    'stepper form',
    'file tree',
    'keyboard shortcuts',
    'share button',
    'hashtag input',
    'follow button',
    'markdown preview',
    'mention input',
    'date display',
    'Tailwind CSS extended UI',
    'React utility components',
  ],
  alternates: {
    canonical: '/components/extended-ui',
  },
  openGraph: {
    title:
      'Extended UI - Command Palette, Editors & Utilities | mtverse admin',
    description:
      '20+ extended UI components including command palette, editors, color picker, file tree, and more. Built with Tailwind CSS v4.',
    url: 'https://mtverseadmin.com/components/extended-ui',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extended UI Components | mtverse admin',
    description:
      '20+ extended UI components including command palette, rich text editor, and utility components.',
  },
};

export default function ExtendedUIRoutePage() {
  return <ExtendedUIElementsClient />;
}

import type { Metadata } from 'next';
import UIElementsClient from '@/components/mtverse/ui-elements/ui-elements-client';

export const metadata: Metadata = {
  title: 'UI Elements - Buttons, Cards, Badges & More | 50+ Components',
  description:
    'Explore 50+ premium UI element components for mtverse admin including buttons, badges, cards, alerts, accordions, avatars, breadcrumbs, carousels, modals, tabs, tooltips, and more. Built with Tailwind CSS v4.',
  keywords: [
    'UI elements',
    'Tailwind CSS buttons',
    'badge components',
    'card UI',
    'alert components',
    'accordion UI',
    'avatar components',
    'modal dialog',
    'tooltip UI',
    'popover component',
    'tabs navigation',
    'dropdown menu',
    'toast notifications',
    'spinner loading',
    'skeleton loader',
    'progress bar',
    'pagination UI',
    'Tailwind UI kit',
    'React UI components',
    'Next.js UI elements',
  ],
  alternates: {
    canonical: '/components/ui-elements',
  },
  openGraph: {
    title: 'UI Elements - Buttons, Cards, Badges & More | mtverse admin',
    description:
      '50+ premium UI element components including buttons, badges, cards, alerts, modals, tabs, and more. Built with Tailwind CSS v4.',
    url: 'https://mtverseadmin.com/components/ui-elements',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI Elements - 50+ Components | mtverse admin',
    description:
      '50+ premium UI element components for your admin dashboard. Buttons, cards, badges, alerts, and more.',
  },
};

export default function UIElementsRoutePage() {
  return <UIElementsClient />;
}

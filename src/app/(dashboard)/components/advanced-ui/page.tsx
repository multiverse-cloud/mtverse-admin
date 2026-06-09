import type { Metadata } from 'next';
import AdvancedUIElementsClient from '@/components/mtverse/ui-elements/advanced-client';

export const metadata: Metadata = {
  title: 'Advanced UI - Animations, Glass Cards & Morphing Components',
  description:
    'Discover 20+ advanced UI components for mtverse admin including glow buttons, gradient borders, morphing icons, spotlight cards, shimmer loaders, neon glow effects, animated counters, flip cards, parallax cards, and more. Built with Tailwind CSS v4 and Framer Motion.',
  keywords: [
    'advanced UI components',
    'glass morphism card',
    'glow button',
    'gradient border',
    'morphing icon',
    'spotlight card',
    'shimmer loader',
    'neon glow effect',
    'animated counter',
    'flip card animation',
    'parallax card',
    'magnetic button',
    'ripple button',
    'wave background',
    'confetti button',
    'typewriter text',
    'toast stack',
    'stagger list animation',
    'drag and drop card',
    'slide in panel',
    'Tailwind CSS animations',
    'Framer Motion components',
  ],
  alternates: {
    canonical: '/components/advanced-ui',
  },
  openGraph: {
    title: 'Advanced UI - Animations & Interactive Components | mtverse admin',
    description:
      '20+ advanced UI components with animations, glass morphism, parallax effects, and more. Built with Tailwind CSS v4 and Framer Motion.',
    url: 'https://mtverseadmin.com/components/advanced-ui',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced UI Components | mtverse admin',
    description:
      '20+ advanced UI components with animations, morphing, glow effects, and interactive features.',
  },
};

export default function AdvancedUIRoutePage() {
  return <AdvancedUIElementsClient />;
}

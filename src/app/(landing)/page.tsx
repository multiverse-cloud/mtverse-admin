import type { Metadata } from 'next';
import Homepage from '@/components/mtverse/landing/homepage';

export const metadata: Metadata = {
  title: 'mtverse admin - Premium Tailwind CSS Admin Dashboard | 3000+ Components',
  description: 'The most comprehensive premium Tailwind CSS admin dashboard template. 3,200+ components across 6 frameworks (HTML, React, Next.js, Vue, Angular, Laravel). 10 dashboards, dark mode, production-ready.',
  alternates: { canonical: '/' },
};

export default function LandingPage() {
  return <Homepage />;
}

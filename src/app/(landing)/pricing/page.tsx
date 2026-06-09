import type { Metadata } from 'next';
import PricingStandalone from '@/components/mtverse/landing/pricing-standalone';

export const metadata: Metadata = {
  title: 'Pricing - mtverse admin',
  description: 'Choose the right plan for your team. mtverse admin offers Basic (Free), Premium ($149), and Enterprise ($399) licenses with lifetime access and updates.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return <PricingStandalone />;
}

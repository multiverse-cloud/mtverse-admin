'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronDown, Zap, Shield, Building2, HelpCircle } from 'lucide-react';
import Link from 'next/link';

// ===== PRICING DATA =====
const plans = [
  {
    name: 'Basic',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for getting started with basic components.',
    icon: Zap,
    popular: false,
    cta: 'Get Started Free',
    features: [
      '1 Framework (HTML/Alpine.js)',
      '50+ Basic UI Components',
      '2 Dashboard Variants',
      'Light Mode Only',
      'Community Support',
      'Basic Documentation',
      'Single Project License',
    ],
  },
  {
    name: 'Premium',
    price: { monthly: 149, yearly: 99 },
    description: 'Best value for professional developers and teams.',
    icon: Shield,
    popular: true,
    cta: 'Get Premium',
    features: [
      'All 6 Frameworks',
      '3000+ UI Components',
      '10 Dashboard Variants',
      'Dark Mode Support',
      'Priority Support',
      'Full Documentation + Source',
      'Unlimited Projects License',
      'Free Lifetime Updates',
      'Figma Design Files',
    ],
  },
  {
    name: 'Enterprise',
    price: { monthly: 399, yearly: 299 },
    description: 'For large teams with advanced requirements.',
    icon: Building2,
    popular: false,
    cta: 'Contact Sales',
    features: [
      'Everything in Premium',
      'Custom Branding License',
      'White-Label Rights',
      'Design System Tokens',
      'Dedicated Account Manager',
      'SLA & Priority Bug Fixes',
      'Custom Component Requests',
      'Team Training Sessions',
      'On-Premise Deployment Guide',
    ],
  },
];

const comparisonFeatures = [
  { name: 'Frameworks', basic: '1', premium: '6', enterprise: '6' },
  { name: 'UI Components', basic: '50+', premium: '3000+', enterprise: '3000+' },
  { name: 'Dashboard Variants', basic: '2', premium: '10', enterprise: '10' },
  { name: 'Dark Mode', basic: false, premium: true, enterprise: true },
  { name: 'Source Code Access', basic: false, premium: true, enterprise: true },
  { name: 'Free Updates', basic: '6 months', premium: 'Lifetime', enterprise: 'Lifetime' },
  { name: 'Figma Files', basic: false, premium: true, enterprise: true },
  { name: 'Priority Support', basic: false, premium: true, enterprise: true },
  { name: 'White-Label Rights', basic: false, premium: false, enterprise: true },
  { name: 'Custom Components', basic: false, premium: false, enterprise: true },
  { name: 'Team Training', basic: false, premium: false, enterprise: true },
  { name: 'Project License', basic: 'Single', premium: 'Unlimited', enterprise: 'Unlimited' },
];

const faqs = [
  {
    question: 'What frameworks are included in the Premium plan?',
    answer: 'The Premium plan includes all 6 framework versions: HTML/Alpine.js, React 18, Next.js 14, Vue 3, Angular 17, and Laravel 10. Each version has the same components adapted to the framework\'s conventions and best practices.',
  },
  {
    question: 'Can I use mtverse admin in multiple projects?',
    answer: 'Yes! The Premium and Enterprise plans include an unlimited projects license. The Basic plan is limited to a single project. You can use the template in as many personal or client projects as you want with Premium or higher.',
  },
  {
    question: 'Do I get free updates?',
    answer: 'Premium and Enterprise users receive lifetime free updates, including new components, dashboard variants, and framework updates. Basic plan users get updates for 6 months from the purchase date.',
  },
  {
    question: 'What does "White-Label Rights" mean?',
    answer: 'White-Label Rights (Enterprise only) allow you to remove all mtverse branding and use the template as if it were your own creation. This is ideal for agencies building products for clients or SaaS applications.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If mtverse admin doesn\'t meet your expectations, contact us within 30 days for a full refund, no questions asked.',
  },
  {
    question: 'How do I get support?',
    answer: 'Basic users get community support via our Discord channel. Premium users get priority email support with 24h response time. Enterprise users get a dedicated account manager with guaranteed 4h response time during business hours.',
  },
];

// ===== PRICING CARDS SECTION =====
function PricingCardsSection() {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-500">Pricing</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
            Choose the plan that fits your needs. All plans include access to our comprehensive component library.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                isYearly ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block size-5 rounded-full bg-white shadow-sm transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-600 dark:bg-success-500/10 dark:text-success-400"
              >
                Save 33%
              </motion.span>
            )}
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.price.yearly : plan.price.monthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative rounded-lg border p-6 lg:p-8 ${
                  plan.popular
                    ? 'border-brand-500 bg-white shadow-xl shadow-brand-500/10 dark:border-brand-400 dark:bg-gray-dark dark:shadow-brand-500/5'
                    : 'border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-brand-500 px-4 py-1 text-xs font-bold text-white shadow-lg shadow-brand-500/25">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`mb-4 flex size-12 items-center justify-center rounded-lg ${
                    plan.popular
                      ? 'bg-brand-50 text-brand-500 dark:bg-brand-500/10'
                      : 'bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400'
                  }`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${price}
                    </span>
                    {price > 0 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    )}
                    {price === 0 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">/forever</span>
                    )}
                  </div>
                  {isYearly && price > 0 && (
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      Billed annually (${price}/year)
                    </p>
                  )}
                </div>

                <Link
                  href={plan.name === 'Enterprise' ? '/pages/support' : '/dashboards/ecommerce'}
                  className={`mb-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600 hover:shadow-xl'
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                  {plan.popular && <Zap className="size-4" />}
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-success-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===== COMPARISON TABLE SECTION =====
function ComparisonTableSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = useState(false);
  const displayedFeatures = expanded ? comparisonFeatures : comparisonFeatures.slice(0, 6);

  return (
    <section ref={ref} className="bg-gray-50 py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-500">Compare Plans</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Feature Comparison
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark"
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 border-b border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-white/5">
            <div className="p-4 text-sm font-semibold text-gray-900 dark:text-white">Feature</div>
            <div className="p-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Basic</div>
            <div className="p-4 text-center text-sm font-semibold text-brand-500">Premium</div>
            <div className="p-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Enterprise</div>
          </div>

          {/* Table Rows */}
          {displayedFeatures.map((feature, i) => (
            <div
              key={feature.name}
              className={`grid grid-cols-4 ${
                i < displayedFeatures.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''
              }`}
            >
              <div className="p-4 text-sm text-gray-700 dark:text-gray-300">{feature.name}</div>
              <div className="flex items-center justify-center p-4">
                {typeof feature.basic === 'boolean' ? (
                  feature.basic ? <Check className="size-5 text-success-500" /> : <X className="size-5 text-gray-300 dark:text-gray-600" />
                ) : (
                  <span className="text-sm text-gray-600 dark:text-gray-400">{feature.basic}</span>
                )}
              </div>
              <div className="flex items-center justify-center p-4">
                {typeof feature.premium === 'boolean' ? (
                  feature.premium ? <Check className="size-5 text-success-500" /> : <X className="size-5 text-gray-300 dark:text-gray-600" />
                ) : (
                  <span className="text-sm font-medium text-brand-500">{feature.premium}</span>
                )}
              </div>
              <div className="flex items-center justify-center p-4">
                {typeof feature.enterprise === 'boolean' ? (
                  feature.enterprise ? <Check className="size-5 text-success-500" /> : <X className="size-5 text-gray-300 dark:text-gray-600" />
                ) : (
                  <span className="text-sm text-gray-600 dark:text-gray-400">{feature.enterprise}</span>
                )}
              </div>
            </div>
          ))}

          {/* Expand/Collapse */}
          {comparisonFeatures.length > 6 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex w-full items-center justify-center gap-1 border-t border-gray-200 py-3 text-sm font-medium text-brand-500 hover:text-brand-600 dark:border-white/5"
            >
              {expanded ? 'Show Less' : 'Show All Features'}
              <ChevronDown className={`size-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ===== FAQ SECTION =====
function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-500">FAQ</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
            Got questions? We have answers. If you can&apos;t find what you&apos;re looking for, reach out to our support team.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="size-5 shrink-0 text-brand-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`size-5 shrink-0 text-gray-400 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-100 px-5 pb-5 pt-4 dark:border-white/5">
                      <p className="pl-8 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CTA SECTION =====
function PricingCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section ref={ref} className="bg-gray-50 py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-lg dark:border-white/5 dark:bg-gray-dark sm:p-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-600 dark:text-gray-400">
            Our team is here to help you choose the right plan for your project needs.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/pages/support"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600"
            >
              Contact Sales
            </Link>
            <Link
              href="/components/advanced-ui"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
            >
              View Documentation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function PricingFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 dark:border-white/5 dark:bg-gray-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-brand-500">mtverse</span>
            <span className="text-xl text-gray-400">admin</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/#features" className="hover:text-brand-500">Features</Link>
            <Link href="/pricing" className="hover:text-brand-500">Pricing</Link>
            <Link href="/components/ui-elements" className="hover:text-brand-500">Components</Link>
            <Link href="/components/advanced-ui" className="hover:text-brand-500">Documentation</Link>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} mtverse admin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== MAIN PRICING PAGE =====
export default function PricingStandalone() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PricingCardsSection />
      <ComparisonTableSection />
      <FAQSection />
      <PricingCTASection />
      <PricingFooter />
    </div>
  );
}

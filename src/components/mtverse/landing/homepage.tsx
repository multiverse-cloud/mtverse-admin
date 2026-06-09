'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  motion,
  useInView,
  AnimatePresence,
  MotionConfig,
} from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Layers,
  LayoutGrid,
  Moon,
  Smartphone,
  Box,
  ChevronRight,
  Star,
  Sparkles,
  Code2,
  BarChart3,
  Shield,
  ShoppingCart,
  TrendingUp,
  Megaphone,
  Users,
  Wallet,
  Package,
  Brain,
  Target,
  DollarSign,
  Check,
  Play,
  Search,
  X,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp,
  Clock,
  Palette,
  Layout,
  Monitor,
  Globe,
  Terminal,
  Copy,
  ExternalLink,
  Heart,
  MessageSquare,
  Download,
  Eye,
  BadgeCheck,
  Rocket,
  Gem,
  Crown,
  Quote,
  FileCode,
  Component,
  ToggleLeft,
  Calendar,
  Kanban,
  ListTree,
  Command,
  Grid3X3,
  SlidersHorizontal,
  Table,
  Bell,
  Settings,
  PieChart,
  Activity,
  FolderOpen,
  Database,
  Server,
  Webhook,
  Cpu,
  Blocks,
  PanelLeft,
  AlignJustify,
  Columns3,
  Maximize2,
  MonitorSmartphone,
  Brush,
} from 'lucide-react';
import Link from 'next/link';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// ===== REDUCED MOTION HOOK (alias for backwards compat) =====
const usePrefersReducedMotion = useReducedMotion;

// ===== ANIMATION HELPERS =====
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

// ===== HOOKS =====
function useAnimatedCounter(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (prefersReduced) {
      // Use a micro-delay to avoid synchronous setState in effect
      const raf = requestAnimationFrame(() => setCount(target));
      return () => cancelAnimationFrame(raf);
    }
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration, startOnView, prefersReduced]);

  return { count, ref };
}

// ===== TECH STACK BADGES (no emoji) =====
function TechMarquee() {
  const techs = [
    { name: 'React', icon: Component },
    { name: 'Next.js', icon: Globe },
    { name: 'Vue', icon: Code2 },
    { name: 'Angular', icon: Webhook },
    { name: 'TypeScript', icon: FileCode },
    { name: 'Tailwind CSS', icon: Brush },
    { name: 'Laravel', icon: Server },
    { name: 'Alpine.js', icon: Zap },
    { name: 'Prisma', icon: Database },
    { name: 'Vite', icon: Zap },
  ];

  return (
    <div className="mt-14">
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
        Available for every major framework
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {techs.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-gray-500 transition-colors hover:border-brand-200 hover:text-brand-600 dark:border-white/5 dark:bg-white/[0.02] dark:text-gray-400 dark:hover:border-brand-500/20 dark:hover:text-brand-400"
            >
              <Icon className="size-3.5" />
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ===== AVATAR STACK =====
function AvatarStack() {
  const colors = ['bg-brand-500', 'bg-purple-500', 'bg-cyan-500', 'bg-emerald-500', 'bg-amber-500'];
  const initials = ['SC', 'MR', 'EP', 'JD', 'AK'];
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {initials.map((init, i) => (
          <div
            key={init}
            className={`flex size-7 items-center justify-center rounded-full ${colors[i]} text-[10px] font-bold text-white ring-2 ring-white dark:ring-gray-950`}
          >
            {init}
          </div>
        ))}
      </div>
      <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
        Trusted by <span className="font-semibold text-gray-900 dark:text-white">10,000+</span> developers
      </span>
    </div>
  );
}

// ===== HERO SECTION =====
function HeroSection() {
  const { count, ref: counterRef } = useAnimatedCounter(7000, 2500);
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-gray-100 pt-20 pb-16 dark:border-white/5 lg:pt-32 lg:pb-24">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-transparent to-transparent dark:from-brand-950/20 dark:via-transparent dark:to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(70,95,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(70,95,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="initial"
          animate="animate"
          variants={prefersReduced ? undefined : staggerContainer}
        >
          {/* Announcement Badge */}
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-md border border-brand-200/60 bg-brand-50/80 px-3 py-1.5 transition-all hover:border-brand-300 hover:bg-brand-100/80 dark:border-brand-500/20 dark:bg-brand-500/10 dark:hover:border-brand-500/30"
            >
              <span className="flex items-center gap-1 rounded bg-brand-500 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                <Sparkles className="size-3" /> New
              </span>
              <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
                v2.0 Released — 7000+ Components
              </span>
              <ChevronRight className="size-3.5 text-brand-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              mtverse
            </span>{' '}
            <span className="text-gray-300 dark:text-gray-600">admin</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg"
          >
            Production-ready Tailwind CSS admin dashboard template.
            Ship beautiful dashboards in hours, not months.
          </motion.p>

          {/* Stats Row */}
          <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-8 sm:gap-12">
            {[
              { value: count, suffix: '+', label: 'Components', ref: counterRef },
              { value: 6, suffix: '', label: 'Frameworks' },
              { value: 15, suffix: '+', label: 'Dashboards' },
              { value: 500, suffix: '+', label: 'Pages' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p
                  ref={stat.ref}
                  className="text-2xl font-bold tabular-nums text-gray-900 dark:text-white sm:text-3xl"
                >
                  {typeof stat.value === 'number' && !stat.ref ? stat.value.toLocaleString() : stat.value.toLocaleString()}{stat.suffix}
                </p>
                <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30"
            >
              Browse Components <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/dashboards/ecommerce"
              className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
            >
              <Play className="size-4" /> Live Demo
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-col items-center gap-3">
            <AvatarStack />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1.5 text-xs text-gray-500 dark:text-gray-400">4.9/5 from 2,400+ reviews</span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeInUp}>
            <TechMarquee />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== MINI COMPONENT PREVIEWS =====
function MiniButtonPreview() {
  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-md bg-brand-500 px-2.5 py-1 text-[10px] font-semibold text-white">Primary</span>
        <span className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">Outline</span>
        <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-700 dark:bg-white/10 dark:text-gray-300">Ghost</span>
        <span className="inline-flex items-center rounded-md bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold text-white">Success</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-md bg-brand-500 px-2 py-0.5 text-[9px] font-semibold text-white">SM</span>
        <span className="inline-flex items-center rounded-md bg-brand-500 px-3 py-1 text-[10px] font-semibold text-white">MD</span>
        <span className="inline-flex items-center rounded-md bg-brand-500 px-4 py-1.5 text-[11px] font-semibold text-white">LG</span>
      </div>
      <div className="flex gap-2">
        <span className="inline-flex items-center gap-1 rounded-md bg-brand-500 px-2.5 py-1 text-[10px] font-semibold text-white"><Download className="size-3" /> Icon</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-2.5 py-1 text-[10px] font-semibold text-white">Rounded</span>
      </div>
    </div>
  );
}

function MiniCardPreview() {
  return (
    <div className="space-y-2">
      <div className="rounded-md border border-gray-200 bg-white p-2.5 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center"><BarChart3 className="size-3.5 text-brand-500" /></div>
          <div>
            <p className="text-[10px] font-semibold text-gray-900 dark:text-white">Revenue</p>
            <p className="text-[9px] text-gray-500">$48,250</p>
          </div>
          <span className="ml-auto text-[9px] font-medium text-emerald-500">+12.5%</span>
        </div>
      </div>
      <div className="rounded-md border border-gray-200 bg-white p-2.5 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center"><Users className="size-3.5 text-purple-500" /></div>
          <div>
            <p className="text-[10px] font-semibold text-gray-900 dark:text-white">Users</p>
            <p className="text-[9px] text-gray-500">12,847</p>
          </div>
          <span className="ml-auto text-[9px] font-medium text-emerald-500">+8.2%</span>
        </div>
      </div>
    </div>
  );
}

function MiniBadgePreview() {
  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap gap-1.5">
        <span className="inline-flex items-center rounded bg-brand-50 px-1.5 py-0.5 text-[9px] font-semibold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">Default</span>
        <span className="inline-flex items-center rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">Success</span>
        <span className="inline-flex items-center rounded bg-amber-50 px-1.5 py-0.5 text-[9px] font-semibold text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">Warning</span>
        <span className="inline-flex items-center rounded bg-red-50 px-1.5 py-0.5 text-[9px] font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400">Error</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[9px] font-semibold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"><Check className="size-2.5" /> Verified</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-0.5 text-[9px] font-semibold text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"><Zap className="size-2.5" /> Pro</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-2 py-0.5 text-[9px] font-semibold text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400"><Sparkles className="size-2.5" /> New</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <span className="inline-flex items-center rounded-full border border-brand-200 px-2 py-0.5 text-[9px] font-medium text-brand-600 dark:border-brand-500/20 dark:text-brand-400">Outline</span>
        <span className="inline-flex items-center rounded-full bg-brand-500 px-2 py-0.5 text-[9px] font-medium text-white">Solid</span>
      </div>
    </div>
  );
}

function MiniAdvancedPreview() {
  return (
    <div className="space-y-2">
      {/* Mini kanban */}
      <div className="flex gap-1.5">
        {['To Do', 'In Progress', 'Done'].map((col, ci) => (
          <div key={col} className="flex-1 rounded-md bg-gray-50 p-1.5 dark:bg-white/[0.03]">
            <p className="mb-1 text-[8px] font-semibold text-gray-500 dark:text-gray-400">{col}</p>
            {ci === 0 && <div className="rounded bg-white p-1 dark:bg-white/5 text-[7px] text-gray-600 dark:text-gray-300">Design review</div>}
            {ci === 1 && <div className="rounded bg-white p-1 dark:bg-white/5 text-[7px] text-gray-600 dark:text-gray-300 border-l-2 border-brand-500">API integration</div>}
            {ci === 2 && <div className="rounded bg-white p-1 dark:bg-white/5 text-[7px] text-gray-600 dark:text-gray-300 border-l-2 border-emerald-500">Auth module</div>}
          </div>
        ))}
      </div>
      {/* Mini tree view */}
      <div className="rounded-md border border-gray-200 bg-white p-2 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="text-[8px] font-semibold text-gray-500 dark:text-gray-400 mb-1">Tree View</div>
        <div className="space-y-0.5 text-[8px]">
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300"><FolderOpen className="size-2.5 text-amber-500" /> src</div>
          <div className="flex items-center gap-1 pl-3 text-gray-700 dark:text-gray-300"><FolderOpen className="size-2.5 text-amber-500" /> components</div>
          <div className="flex items-center gap-1 pl-6 text-gray-600 dark:text-gray-400"><FileCode className="size-2.5 text-brand-500" /> Button.tsx</div>
          <div className="flex items-center gap-1 pl-6 text-gray-600 dark:text-gray-400"><FileCode className="size-2.5 text-brand-500" /> Card.tsx</div>
        </div>
      </div>
    </div>
  );
}

function MiniExtendedPreview() {
  return (
    <div className="space-y-2">
      {/* Mini calendar */}
      <div className="rounded-md border border-gray-200 bg-white p-2 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[8px] font-semibold text-gray-700 dark:text-gray-300">March 2025</span>
          <div className="flex gap-0.5">
            <ChevronRight className="size-2.5 text-gray-400 rotate-180" />
            <ChevronRight className="size-2.5 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {['M','T','W','T','F','S','S'].map((d, index) => <span key={`${d}-${index}`} className="text-[7px] text-gray-400">{d}</span>)}
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(d => (
            <span key={d} className={`text-[7px] ${d === 8 ? 'rounded bg-brand-500 text-white font-bold' : 'text-gray-600 dark:text-gray-400'}`}>{d}</span>
          ))}
        </div>
      </div>
      {/* Mini chart */}
      <div className="rounded-md border border-gray-200 bg-white p-2 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="text-[8px] font-semibold text-gray-700 dark:text-gray-300 mb-1">Area Chart</div>
        <svg viewBox="0 0 120 32" className="w-full h-8">
          <path d="M0 28 L10 22 L20 24 L30 16 L40 18 L50 12 L60 14 L70 8 L80 10 L90 6 L100 8 L110 4 L120 6 L120 32 L0 32Z" fill="rgba(70,95,255,0.1)" stroke="none" />
          <path d="M0 28 L10 22 L20 24 L30 16 L40 18 L50 12 L60 14 L70 8 L80 10 L90 6 L100 8 L110 4 L120 6" fill="none" stroke="#465fff" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

// ===== COMPONENT SHOWCASE SECTION =====
function ComponentShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = usePrefersReducedMotion();

  const showcaseItems = [
    {
      title: 'Buttons',
      subtitle: '25 variants',
      icon: ToggleLeft,
      preview: <MiniButtonPreview />,
    },
    {
      title: 'Cards & Stats',
      subtitle: '18 variants',
      icon: Layout,
      preview: <MiniCardPreview />,
    },
    {
      title: 'Badges & Chips',
      subtitle: '12 variants',
      icon: BadgeCheck,
      preview: <MiniBadgePreview />,
    },
    {
      title: 'Advanced UI',
      subtitle: 'Kanban, Tree, DnD...',
      icon: Layers,
      preview: <MiniAdvancedPreview />,
    },
    {
      title: 'Extended UI',
      subtitle: 'Calendar, Charts...',
      icon: Calendar,
      preview: <MiniExtendedPreview />,
    },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-brand-200/60 bg-brand-50/80 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-400">
            <Blocks className="size-3.5" /> Components
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
            Real Component Previews
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 dark:text-gray-400">
            Not mockups. These are actual component designs you get out of the box.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {showcaseItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={isInView || prefersReduced ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: prefersReduced ? 0 : i * 0.06 }}
                className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 dark:border-white/5 dark:bg-gray-dark dark:hover:border-brand-500/20"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-md bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10">
                    <Icon className="size-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                  </div>
                </div>
                <div className="rounded-md border border-gray-100 bg-gray-50/50 p-3 dark:border-white/5 dark:bg-white/[0.02]">
                  {item.preview}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===== MASONRY GRID SECTION =====
const masonryItems = [
  {
    title: 'Kanban Board',
    icon: Kanban,
    category: 'Advanced UI',
    height: 'h-64',
    preview: (
      <div className="flex gap-2 h-full">
        {['Backlog', 'In Progress', 'Review', 'Done'].map((col, ci) => (
          <div key={col} className="flex-1 rounded-md bg-gray-50 p-2 dark:bg-white/[0.03]">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[9px] font-semibold text-gray-600 dark:text-gray-300">{col}</span>
              <span className="text-[8px] text-gray-400">{[3,2,2,1][ci]}</span>
            </div>
            <div className="space-y-1.5">
              {ci === 0 && (
                <>
                  <div className="rounded bg-white p-1.5 dark:bg-white/5">
                    <p className="text-[8px] font-medium text-gray-700 dark:text-gray-300">User research</p>
                    <div className="mt-1 flex items-center gap-1"><span className="h-1 w-8 rounded-full bg-brand-500" /><span className="text-[7px] text-gray-400">60%</span></div>
                  </div>
                  <div className="rounded bg-white p-1.5 dark:bg-white/5">
                    <p className="text-[8px] font-medium text-gray-700 dark:text-gray-300">Competitive analysis</p>
                    <span className="inline-block rounded bg-purple-100 px-1 py-0.5 text-[7px] text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">Design</span>
                  </div>
                </>
              )}
              {ci === 1 && (
                <>
                  <div className="rounded bg-white p-1.5 dark:bg-white/5 border-l-2 border-brand-500">
                    <p className="text-[8px] font-medium text-gray-700 dark:text-gray-300">API integration</p>
                    <div className="mt-0.5 flex -space-x-1">
                      <div className="size-3 rounded-full bg-brand-500 ring-1 ring-white dark:ring-gray-800" />
                      <div className="size-3 rounded-full bg-purple-500 ring-1 ring-white dark:ring-gray-800" />
                    </div>
                  </div>
                  <div className="rounded bg-white p-1.5 dark:bg-white/5 border-l-2 border-amber-500">
                    <p className="text-[8px] font-medium text-gray-700 dark:text-gray-300">Auth module</p>
                  </div>
                </>
              )}
              {ci === 2 && (
                <div className="rounded bg-white p-1.5 dark:bg-white/5 border-l-2 border-emerald-500">
                  <p className="text-[8px] font-medium text-gray-700 dark:text-gray-300">Dashboard layout</p>
                  <span className="inline-block rounded bg-emerald-100 px-1 py-0.5 text-[7px] text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">Ready</span>
                </div>
              )}
              {ci === 3 && (
                <div className="rounded bg-white p-1.5 dark:bg-white/5 border-l-2 border-gray-400">
                  <p className="text-[8px] font-medium text-gray-700 dark:text-gray-300">Setup project</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Command Palette',
    icon: Command,
    category: 'Advanced UI',
    height: 'h-44',
    preview: (
      <div className="rounded-md border border-gray-200 bg-white p-2 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-2 py-1.5 dark:border-white/5 dark:bg-white/[0.03]">
          <Search className="size-3 text-gray-400" />
          <span className="text-[9px] text-gray-400">Type a command or search...</span>
          <kbd className="ml-auto rounded bg-gray-200 px-1 py-0.5 text-[7px] text-gray-500 dark:bg-white/10 dark:text-gray-400">ESC</kbd>
        </div>
        <div className="mt-2 space-y-0.5">
          {[
            { icon: Palette, label: 'Change Theme', shortcut: 'T' },
            { icon: Bell, label: 'Notifications', shortcut: 'N' },
            { icon: Settings, label: 'Settings', shortcut: 'S' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 rounded px-2 py-1 hover:bg-gray-50 dark:hover:bg-white/[0.03]">
              <item.icon className="size-3 text-gray-400" />
              <span className="text-[9px] text-gray-700 dark:text-gray-300">{item.label}</span>
              <kbd className="ml-auto rounded bg-gray-100 px-1 py-0.5 text-[7px] text-gray-400 dark:bg-white/5 dark:text-gray-500">{item.shortcut}</kbd>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Data Table',
    icon: Table,
    category: 'Extended UI',
    height: 'h-52',
    preview: (
      <div className="rounded-md border border-gray-200 bg-white dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center justify-between border-b border-gray-100 px-2 py-1.5 dark:border-white/5">
          <span className="text-[9px] font-semibold text-gray-700 dark:text-gray-300">Users</span>
          <div className="flex items-center gap-1 rounded bg-gray-50 px-1.5 py-0.5 dark:bg-white/[0.03]">
            <Search className="size-2.5 text-gray-400" />
            <span className="text-[7px] text-gray-400">Filter...</span>
          </div>
        </div>
        <table className="w-full text-[8px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-white/5">
              <th className="px-2 py-1 text-left font-semibold text-gray-500 dark:text-gray-400">Name</th>
              <th className="px-2 py-1 text-left font-semibold text-gray-500 dark:text-gray-400">Role</th>
              <th className="px-2 py-1 text-left font-semibold text-gray-500 dark:text-gray-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Sarah C.', role: 'Admin', status: 'Active' },
              { name: 'Marcus R.', role: 'Editor', status: 'Active' },
              { name: 'Emily P.', role: 'Viewer', status: 'Inactive' },
              { name: 'James W.', role: 'Editor', status: 'Active' },
            ].map(row => (
              <tr key={row.name} className="border-b border-gray-50 dark:border-white/[0.02]">
                <td className="px-2 py-1 text-gray-700 dark:text-gray-300">{row.name}</td>
                <td className="px-2 py-1 text-gray-500 dark:text-gray-400">{row.role}</td>
                <td className="px-2 py-1">
                  <span className={`inline-block rounded px-1 py-0.5 text-[7px] font-medium ${
                    row.status === 'Active' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400'
                  }`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: 'Rich Text Editor',
    icon: Code2,
    category: 'Advanced UI',
    height: 'h-40',
    preview: (
      <div className="rounded-md border border-gray-200 bg-white dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center gap-1 border-b border-gray-100 px-2 py-1 dark:border-white/5">
          {['B', 'I', 'U'].map(s => (
            <span key={s} className="flex size-4 items-center justify-center rounded text-[8px] font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-white/[0.03]">{s}</span>
          ))}
          <div className="mx-1 h-3 w-px bg-gray-200 dark:bg-white/10" />
          {['H1', 'H2', 'UL'].map(s => (
            <span key={s} className="flex size-4 items-center justify-center rounded text-[7px] font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-white/[0.03]">{s}</span>
          ))}
        </div>
        <div className="p-2 text-[8px] leading-relaxed text-gray-600 dark:text-gray-400">
          <p className="font-semibold text-gray-800 dark:text-gray-200">Getting Started</p>
          <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Date Picker',
    icon: Calendar,
    category: 'Extended UI',
    height: 'h-56',
    preview: (
      <div className="rounded-md border border-gray-200 bg-white p-2 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center justify-between mb-2">
          <ChevronRight className="size-3 text-gray-400 rotate-180" />
          <span className="text-[9px] font-semibold text-gray-700 dark:text-gray-300">March 2025</span>
          <ChevronRight className="size-3 text-gray-400" />
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d} className="text-[7px] font-medium text-gray-400 py-0.5">{d}</span>)}
          {Array.from({length: 35}, (_, i) => {
            const day = i - 5;
            if (day < 1 || day > 31) return <span key={i} />;
            return (
              <span key={i} className={`text-[8px] py-0.5 rounded ${
                day === 15 ? 'bg-brand-500 text-white font-bold' :
                day === 20 ? 'bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300' :
                'text-gray-600 dark:text-gray-400'
              }`}>{day}</span>
            );
          })}
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-2 dark:border-white/5">
          <span className="text-[8px] text-gray-500">Selected: Mar 15, 2025</span>
          <span className="text-[8px] font-medium text-brand-500">Apply</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Notification Panel',
    icon: Bell,
    category: 'UI Elements',
    height: 'h-48',
    preview: (
      <div className="rounded-md border border-gray-200 bg-white dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center justify-between border-b border-gray-100 px-2 py-1.5 dark:border-white/5">
          <span className="text-[9px] font-semibold text-gray-700 dark:text-gray-300">Notifications</span>
          <span className="rounded-full bg-brand-500 px-1.5 py-0.5 text-[7px] font-bold text-white">3</span>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-white/[0.02]">
          {[
            { title: 'New order received', time: '2m ago', type: 'order' },
            { title: 'User signup', time: '15m ago', type: 'user' },
            { title: 'Server alert', time: '1h ago', type: 'alert' },
            { title: 'Payment success', time: '3h ago', type: 'payment' },
          ].map(n => (
            <div key={n.title} className="flex items-center gap-2 px-2 py-1.5">
              <div className={`size-5 rounded-full flex items-center justify-center ${
                n.type === 'order' ? 'bg-brand-50 dark:bg-brand-500/10' :
                n.type === 'alert' ? 'bg-red-50 dark:bg-red-500/10' :
                'bg-emerald-50 dark:bg-emerald-500/10'
              }`}>
                {n.type === 'order' && <ShoppingCart className="size-2.5 text-brand-500" />}
                {n.type === 'user' && <Users className="size-2.5 text-purple-500" />}
                {n.type === 'alert' && <Bell className="size-2.5 text-red-500" />}
                {n.type === 'payment' && <DollarSign className="size-2.5 text-emerald-500" />}
              </div>
              <div className="flex-1">
                <p className="text-[8px] font-medium text-gray-700 dark:text-gray-300">{n.title}</p>
                <p className="text-[7px] text-gray-400">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

function MasonryGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section ref={ref} className="bg-gray-50/50 py-16 dark:bg-gray-900/30 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-brand-200/60 bg-brand-50/80 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-400">
            <Grid3X3 className="size-3.5" /> Advanced & Extended
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
            Interactive Components,{' '}
            <span className="text-brand-500">Not Static Screenshots</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 dark:text-gray-400">
            Explore the depth of our Advanced and Extended UI component library.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {masonryItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={isInView || prefersReduced ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: prefersReduced ? 0 : i * 0.06 }}
                className="mb-4 break-inside-avoid rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 dark:border-white/5 dark:bg-gray-dark dark:hover:border-brand-500/20"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-6 items-center justify-center rounded-md bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                      <Icon className="size-3" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">{item.category}</p>
                    </div>
                  </div>
                  <Link href="/components/ui-elements" className="text-[10px] font-medium text-brand-500 hover:text-brand-600">
                    View <ChevronRight className="inline size-3" />
                  </Link>
                </div>
                <div className="rounded-md border border-gray-100 bg-gray-50/50 p-2 dark:border-white/5 dark:bg-white/[0.01]">
                  {item.preview}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===== DASHBOARD SHOWCASE SECTION =====
const dashboards = [
  { name: 'E-commerce', icon: ShoppingCart, stats: ['$48.2K', '+12.5%'], color: 'bg-brand-500' },
  { name: 'Analytics', icon: BarChart3, stats: ['12.8K', '+8.2%'], color: 'bg-cyan-500' },
  { name: 'CRM', icon: Users, stats: ['1,429', '+3.1%'], color: 'bg-emerald-500' },
  { name: 'SaaS', icon: Shield, stats: ['$9.4K', '+15.3%'], color: 'bg-purple-500' },
  { name: 'Finance', icon: DollarSign, stats: ['$124K', '+6.8%'], color: 'bg-amber-500' },
  { name: 'AI/ML', icon: Brain, stats: ['98.2%', '+2.1%'], color: 'bg-violet-500' },
  { name: 'Marketing', icon: Megaphone, stats: ['8.4K', '+11.2%'], color: 'bg-pink-500' },
  { name: 'Logistics', icon: Package, stats: ['2,847', '+4.5%'], color: 'bg-sky-500' },
];

function DashboardShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-brand-200/60 bg-brand-50/80 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-400">
            <Monitor className="size-3.5" /> Dashboards
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
            15 Dashboard Variants,{' '}
            <span className="text-brand-500">Production-Ready</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 dark:text-gray-400">
            Purpose-built dashboards for every industry. Each with unique metrics, charts, and data layouts.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboards.map((dash, i) => {
            const Icon = dash.icon;
            return (
              <motion.div
                key={dash.name}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={isInView || prefersReduced ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: prefersReduced ? 0 : i * 0.05 }}
              >
                <Link href={`/dashboards/${dash.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block">
                  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 dark:border-white/5 dark:bg-gray-dark dark:hover:border-brand-500/20">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/50 px-3 py-1.5 dark:border-white/5 dark:bg-white/[0.03]">
                      <div className="size-1.5 rounded-full bg-red-400" />
                      <div className="size-1.5 rounded-full bg-amber-400" />
                      <div className="size-1.5 rounded-full bg-emerald-400" />
                      <div className="ml-2 flex-1 rounded-sm bg-gray-200/50 px-2 py-0.5 dark:bg-white/5">
                        <span className="text-[8px] text-gray-400">{dash.name.toLowerCase().replace(/\s+/g, '-')}.app</span>
                      </div>
                    </div>

                    {/* Dashboard content preview */}
                    <div className="p-3">
                      <div className="rounded-md border border-gray-100 bg-gray-50/50 p-2 dark:border-white/5 dark:bg-white/[0.02]">
                        {/* Mini dashboard header */}
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className={`flex size-5 items-center justify-center rounded ${dash.color} text-white`}>
                              <Icon className="size-2.5" />
                            </div>
                            <span className="text-[9px] font-semibold text-gray-700 dark:text-gray-300">{dash.name}</span>
                          </div>
                          <span className="text-[8px] text-emerald-500 font-medium">{dash.stats[1]}</span>
                        </div>
                        {/* Stat cards */}
                        <div className="mb-2 grid grid-cols-2 gap-1.5">
                          <div className="rounded bg-white p-1.5 dark:bg-white/5">
                            <p className="text-[7px] text-gray-400">Revenue</p>
                            <p className="text-[10px] font-bold text-gray-800 dark:text-gray-200">{dash.stats[0]}</p>
                          </div>
                          <div className="rounded bg-white p-1.5 dark:bg-white/5">
                            <p className="text-[7px] text-gray-400">Growth</p>
                            <p className="text-[10px] font-bold text-emerald-500">{dash.stats[1]}</p>
                          </div>
                        </div>
                        {/* Mini chart bars */}
                        <div className="flex items-end gap-0.5 h-8">
                          {[35,55,40,65,50,75,60,85,70,90,78,95].map((h, j) => (
                            <div
                              key={j}
                              className="flex-1 rounded-t bg-brand-500/20 dark:bg-brand-500/15"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Label */}
                    <div className="border-t border-gray-100 px-3 py-2 dark:border-white/5">
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{dash.name} Dashboard</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===== FRAMEWORK SHOWCASE SECTION =====
const frameworks = [
  {
    name: 'HTML',
    fullName: 'HTML / Alpine.js',
    desc: 'Lightweight, no build step required',
    icon: FileCode,
    code: `<div x-data="{ open: false }">
  <button @click="open = !open"
    class="px-4 py-2 bg-brand-500
           text-white rounded-lg">
    Toggle
  </button>
  <div x-show="open" x-transition>
    Hello from Alpine.js!
  </div>
</div>`,
  },
  {
    name: 'React',
    fullName: 'React 18',
    desc: 'Component-based with TypeScript',
    icon: Component,
    code: `import { useState } from 'react';

export default function Toggle() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-brand-500
                   text-white rounded-lg">
        Toggle
      </button>
      {open && <div>Hello from React!</div>}
    </>
  );
}`,
  },
  {
    name: 'Next.js',
    fullName: 'Next.js 14',
    desc: 'App Router, SSR, and API routes',
    icon: Globe,
    code: `'use client';
import { useState } from 'react';

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-brand-500
                   text-white rounded-lg">
        Toggle
      </button>
      {open && <div>Hello Next.js!</div>}
    </div>
  );
}`,
  },
  {
    name: 'Vue',
    fullName: 'Vue 3',
    desc: 'Composition API with Vite',
    icon: Code2,
    code: `<script setup>
import { ref } from 'vue';
const open = ref(false);
</script>

<template>
  <button @click="open = !open"
    class="px-4 py-2 bg-brand-500
           text-white rounded-lg">
    Toggle
  </button>
  <div v-if="open">Hello from Vue!</div>
</template>`,
  },
  {
    name: 'Angular',
    fullName: 'Angular 17',
    desc: 'Enterprise-grade with RxJS',
    icon: Webhook,
    code: `@Component({
  selector: 'app-toggle',
  template: \`
    <button (click)="toggle()"
      class="px-4 py-2 bg-brand-500
             text-white rounded-lg">
      Toggle
    </button>
    <div *ngIf="open">
      Hello from Angular!
    </div>
  \`
})
export class ToggleComponent {
  open = false;
  toggle() { this.open = !this.open; }
}`,
  },
  {
    name: 'Laravel',
    fullName: 'Laravel + Blade',
    desc: 'Blade templates with Alpine.js',
    icon: Server,
    code: `<div x-data="{ open: false }">
  <button @click="open = !open"
    class="px-4 py-2 bg-brand-500
           text-white rounded-lg">
    Toggle
  </button>
  <div x-show="open" x-transition>
    Hello from Laravel + Alpine!
  </div>
</div>`,
  },
];

function FrameworkShowcaseSection() {
  const [activeTab, setActiveTab] = useState(2); // Default to Next.js
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [copied, setCopied] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(frameworks[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [activeTab]);

  return (
    <section ref={ref} className="bg-gray-50/50 py-16 dark:bg-gray-900/30 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-brand-200/60 bg-brand-50/80 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-400">
            <Terminal className="size-3.5" /> Multi-Framework
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
            One Template,{' '}
            <span className="text-brand-500">Six Frameworks</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 dark:text-gray-400">
            Every component available for HTML, React, Next.js, Vue, Angular, and Laravel.
          </p>
        </div>

        <div className="mt-10">
          {/* Framework Cards Row */}
          <div className="mb-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {frameworks.map((fw, i) => {
              const Icon = fw.icon;
              return (
                <motion.button
                  key={fw.name}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={isInView || prefersReduced ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: prefersReduced ? 0 : i * 0.05 }}
                  onClick={() => setActiveTab(i)}
                  className={`group flex flex-col items-center gap-2 rounded-lg border p-3 transition-all ${
                    activeTab === i
                      ? 'border-brand-500 bg-white shadow-md shadow-brand-500/10 dark:border-brand-500/40 dark:bg-gray-dark dark:shadow-brand-500/5'
                      : 'border-gray-200 bg-white hover:border-brand-200 hover:shadow-sm dark:border-white/5 dark:bg-gray-dark dark:hover:border-brand-500/20'
                  }`}
                >
                  <div className={`flex size-8 items-center justify-center rounded-md transition-colors ${
                    activeTab === i
                      ? 'bg-brand-500 text-white'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-500 dark:bg-white/5 dark:text-gray-400 dark:group-hover:bg-brand-500/10 dark:group-hover:text-brand-400'
                  }`}>
                    <Icon className="size-4" />
                  </div>
                  <span className={`text-xs font-medium ${
                    activeTab === i ? 'text-brand-600 dark:text-brand-400' : 'text-gray-600 dark:text-gray-400'
                  }`}>{fw.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Code Window */}
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView || prefersReduced ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="overflow-hidden rounded-lg border border-gray-200 bg-gray-900 dark:border-white/5"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-gray-800/50 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-red-500/80" />
                <div className="size-2.5 rounded-full bg-amber-500/80" />
                <div className="size-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs text-gray-400">{frameworks[activeTab].fullName} — component.tsx</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Code Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: prefersReduced ? 0 : 0.2 }}
                className="p-5"
              >
                <pre className="overflow-x-auto text-xs leading-relaxed">
                  <code className="text-gray-300">
                    {frameworks[activeTab].code.split('\n').map((line, i) => (
                      <div key={i} className="flex">
                        <span className="mr-4 inline-block w-5 select-none text-right text-gray-600">{i + 1}</span>
                        <span>{highlightSyntax(line)}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </motion.div>
            </AnimatePresence>

            {/* Info Bar */}
            <div className="border-t border-white/10 bg-gray-800/30 px-5 py-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-md bg-brand-500 text-white">
                    {React.createElement(frameworks[activeTab].icon, { className: 'size-4' })}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{frameworks[activeTab].fullName}</h4>
                    <p className="text-xs text-gray-400">{frameworks[activeTab].desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['TypeScript', 'Tailwind CSS v4', 'Dark Mode', 'Responsive'].map((tag) => (
                    <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Syntax highlighting helper
function highlightSyntax(code: string): React.ReactNode {
  const parts = code.split(/(import|from|export|default|const|return|function|interface|type|let|var|class|extends|implements|new|this|true|false|null|undefined|'[^']*'|"[^"]*"|`[^`]*`|\/\/.*|\/\*[\s\S]*?\*\/|@[a-zA-Z]+|\b\d+\b)/g);
  return parts.map((part, i) => {
    if (/^(import|from|export|default|const|return|function|interface|type|let|var|class|extends|implements|new|this)$/.test(part)) {
      return <span key={i} className="text-purple-400">{part}</span>;
    }
    if (/^(true|false|null|undefined)$/.test(part)) {
      return <span key={i} className="text-amber-400">{part}</span>;
    }
    if (/^['"`]/.test(part)) {
      return <span key={i} className="text-emerald-400">{part}</span>;
    }
    if (/^\/\/|^\//.test(part)) {
      return <span key={i} className="text-gray-500">{part}</span>;
    }
    if (/^@[a-zA-Z]/.test(part)) {
      return <span key={i} className="text-amber-300">{part}</span>;
    }
    if (/^\d+$/.test(part)) {
      return <span key={i} className="text-cyan-400">{part}</span>;
    }
    return part;
  });
}

// ===== LAYOUT SYSTEMS SECTION =====
const layouts = [
  { name: 'Sidebar', icon: PanelLeft, desc: 'Classic collapsible sidebar navigation' },
  { name: 'Top Nav', icon: AlignJustify, desc: 'Horizontal top navigation bar' },
  { name: 'Dual Sidebar', icon: Columns3, desc: 'Dual sidebar with icon + content' },
  { name: 'Compact', icon: Maximize2, desc: 'Compact mode for data-dense apps' },
  { name: 'Horizontal', icon: LayoutGrid, desc: 'Horizontal menu with mega menu' },
  { name: 'Responsive', icon: MonitorSmartphone, desc: 'Adaptive from mobile to desktop' },
];

function LayoutsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-brand-200/60 bg-brand-50/80 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-400">
            <SlidersHorizontal className="size-3.5" /> Layouts
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
            6 Layout Systems
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 dark:text-gray-400">
            Choose the layout that fits your application. Every layout supports dark mode and responsive design.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {layouts.map((layout, i) => {
            const Icon = layout.icon;
            return (
              <motion.div
                key={layout.name}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={isInView || prefersReduced ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: prefersReduced ? 0 : i * 0.05 }}
                className="group rounded-lg border border-gray-200 bg-white p-4 text-center transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 dark:border-white/5 dark:bg-gray-dark dark:hover:border-brand-500/20"
              >
                <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-md bg-gray-50 text-gray-500 transition-colors group-hover:bg-brand-50 group-hover:text-brand-500 dark:bg-white/5 dark:text-gray-400 dark:group-hover:bg-brand-500/10 dark:group-hover:text-brand-400">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{layout.name}</h3>
                <p className="mt-1 text-[10px] text-gray-500 dark:text-gray-400">{layout.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===== CTA SECTION =====
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView || prefersReduced ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg border border-brand-500/20 bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-14 text-center sm:px-16"
        >
          {/* Subtle background */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }} />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Start Building Today
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/80 sm:text-base">
              Join 10,000+ developers who ship beautiful dashboards with mtverse admin. Get access to 7,000+ components across 6 frameworks.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
              >
                Browse Components <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/dashboards/ecommerce"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Play className="size-4" /> Live Demo
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 text-xs font-medium text-white/70 transition-colors hover:text-white"
              >
                View Pricing <ChevronRight className="size-3" />
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-xs font-medium text-white/70 transition-colors hover:text-white"
              >
                <Github className="size-3.5" /> Star on GitHub
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== FOOTER =====
const footerLinks = {
  Product: ['Features', 'Components', 'Dashboards', 'Pricing', 'Changelog', 'Roadmap'],
  Resources: ['Documentation', 'Tutorials', 'Blog', 'Community', 'Support', 'API'],
  Company: ['About', 'Careers', 'Press', 'Partners', 'Legal', 'Privacy'],
  Frameworks: ['HTML / Alpine', 'React', 'Next.js', 'Vue', 'Angular', 'Laravel'],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

function LandingFooter() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                mtverse
              </span>
              <span className="text-xl text-gray-300 dark:text-gray-600">admin</span>
            </div>
            <p className="mt-3 max-w-xs text-xs text-gray-500 dark:text-gray-400">
              The most comprehensive premium Tailwind CSS admin dashboard template for modern web applications.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex size-8 items-center justify-center rounded-md border border-gray-200 text-gray-400 transition-all hover:border-brand-200 hover:text-brand-500 dark:border-white/5 dark:hover:border-brand-500/20 dark:hover:text-brand-400"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-gray-900 dark:text-white">{title}</h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="text-xs text-gray-500 transition-colors hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 dark:border-white/5 md:flex-row">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} mtverse admin. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-400 dark:text-gray-500">
            <Link href="/" className="transition-colors hover:text-brand-500">Privacy</Link>
            <Link href="/" className="transition-colors hover:text-brand-500">Terms</Link>
            <Link href="/" className="transition-colors hover:text-brand-500">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 flex size-9 items-center justify-center rounded-md bg-brand-500 text-white shadow-md transition-all hover:bg-brand-600 hover:shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

// ===== DEFER BELOW-THE-FOLD SECTIONS =====
function DeferredSection({ children, minHeight = 400 }: { children: React.ReactNode; minHeight?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !('IntersectionObserver' in window);
  });

  useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={ref} style={!isVisible ? { minHeight } : undefined}>
      {isVisible ? children : null}
    </div>
  );
}

// ===== MAIN HOMEPAGE =====
export default function Homepage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <HeroSection />
      <ComponentShowcaseSection />
      <DeferredSection><MasonryGridSection /></DeferredSection>
      <DeferredSection minHeight={500}><DashboardShowcaseSection /></DeferredSection>
      <DeferredSection><FrameworkShowcaseSection /></DeferredSection>
      <DeferredSection><LayoutsSection /></DeferredSection>
      <DeferredSection><CTASection /></DeferredSection>
      <DeferredSection minHeight={300}><LandingFooter /></DeferredSection>
    </div>
  );
}

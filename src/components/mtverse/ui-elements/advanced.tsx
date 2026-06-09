'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView, MotionConfig } from 'framer-motion';
import { hasSourceData } from '@/data/source-code/available';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getTransition } from '@/lib/motion-utils';
import {
  Search, Plus, Bell, Check, X, ChevronRight, ChevronDown, ChevronLeft,
  Menu, Settings, Star, Heart, ArrowRight, Zap, RefreshCw, AlertCircle,
  CheckCircle, Home, Sun, Moon, Send, Download, Upload, Eye, Trash2,
  Edit3, MoreVertical, Filter, BellRing, MessageSquare, Bookmark, Share2,
  Minus, Maximize2, Volume2, Play, Pause, SkipForward, SkipBack,
  Code2, Sparkles, Layers, Droplets, Grid3x3, Type, Box, LayoutGrid,
  ArrowUpRight, ThumbsUp, MessageCircle, Move, Shuffle, Hash, Crosshair,
} from 'lucide-react';

// ===== SHARED STYLES =====
const sectionCard = 'rounded-lg border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark';
const sectionHeading = 'mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90';

// ===== SECTION CARD =====
function SectionCard({ title, sourceSlug, generated = false, children }: { title: string; sourceSlug?: string; generated?: boolean; children?: React.ReactNode }) {
  const canViewSource = hasSourceData(sourceSlug);
  const showGeneratedPreview = generated || isGeneratedPlaceholder(children);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">{title}</h3>
        {sourceSlug && canViewSource && (
          <Link
            href={sourceSlug}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-brand-500 transition-colors hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10"
          >
            <Code2 className="size-3.5" />
            View Source
          </Link>
        )}
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
        {showGeneratedPreview ? (
          <GeneratedAdvancedPreview title={title} sourceSlug={sourceSlug} />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

function ViewSourceLink({ sourceSlug }: { sourceSlug: string }) {
  if (!hasSourceData(sourceSlug)) return null;

  return (
    <Link
      href={sourceSlug}
      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-brand-500 transition-colors hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10"
    >
      <Code2 className="size-3.5" />
      View Source
    </Link>
  );
}

function nodeText(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join(' ');
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return nodeText(node.props.children);
  }
  return '';
}

function isGeneratedPlaceholder(children: React.ReactNode) {
  const text = nodeText(children).replace(/\s+/g, ' ').trim();
  return text.includes('Default') && text.includes('Outline') && text.includes('Ghost') && text.includes('Active');
}

function hashValue(value: string) {
  return Array.from(value).reduce((total, char) => total + char.charCodeAt(0), 0);
}

function seededUnit(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function GeneratedAdvancedPreview({ title, sourceSlug }: { title: string; sourceSlug?: string }) {
  const slug = sourceSlug?.split('/').pop() ?? title.toLowerCase().replace(/\s+/g, '-');
  const seed = hashValue(slug);
  const color = ['#465fff', '#12b76a', '#f79009', '#0ba5ec', '#9e77ed', '#f04438'][seed % 6];
  const accent = ['#12b76a', '#f79009', '#0ba5ec', '#9e77ed', '#f04438', '#465fff'][(seed + 2) % 6];
  const kind = getAdvancedPreviewKind(slug);

  return (
    <div className="space-y-4" data-generated-preview-kind={kind}>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
          <Sparkles className="size-3.5" style={{ color }} />
          {kind}
        </span>
        <span className="rounded-md bg-gray-50 px-2 py-1 font-mono text-[10px] text-gray-400 dark:bg-white/5">
          {slug}
        </span>
      </div>
      {renderAdvancedPreview(kind, title, color, accent, seed)}
    </div>
  );
}

function getAdvancedPreviewKind(slug: string) {
  if (/(button|toggle|switch|action)/.test(slug)) return 'Interactive control';
  if (/(loader|spinner|skeleton|progress|orbit|pulse)/.test(slug)) return 'Motion feedback';
  if (/(card|panel|board|dock)/.test(slug)) return 'Depth surface';
  if (/(text|type|headline|typography|word)/.test(slug)) return 'Animated text';
  if (/(grid|layout|gallery|masonry|mesh)/.test(slug)) return 'Spatial layout';
  if (/(nav|menu|accordion|tabs|search)/.test(slug)) return 'Navigation pattern';
  if (/(input|form|slider|knob)/.test(slug)) return 'Animated form';
  if (/(background|particle|wave|rain|lava|aurora|vortex|orb)/.test(slug)) return 'Ambient effect';
  return 'Advanced effect';
}

function renderAdvancedPreview(kind: string, title: string, color: string, accent: string, seed: number) {
  if (kind === 'Interactive control') {
    return (
      <div className="flex items-center justify-center rounded-lg bg-gray-50 p-5 dark:bg-white/5">
        <motion.button
          className="relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
          style={{ backgroundColor: color }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <motion.span
            className="absolute inset-y-0 -left-8 w-8 bg-white/30"
            animate={{ x: ['0%', '520%'] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
          />
          <span className="relative">{title}</span>
        </motion.button>
      </div>
    );
  }

  if (kind === 'Motion feedback') {
    return (
      <div className="flex h-28 items-center justify-center rounded-lg bg-gray-50 dark:bg-white/5">
        {[0, 1, 2, 3].map((index) => (
          <motion.span
            key={index}
            className="mx-1 size-3 rounded-full"
            style={{ backgroundColor: index % 2 ? accent : color }}
            animate={{ y: [0, -18, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ repeat: Infinity, duration: 0.9, delay: index * 0.12 }}
          />
        ))}
      </div>
    );
  }

  if (kind === 'Depth surface') {
    return (
      <div className="relative h-32 overflow-hidden rounded-lg bg-gray-50 p-5 dark:bg-white/5">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute h-20 w-36 rounded-lg border border-white/50 shadow-sm dark:border-white/10"
            style={{ backgroundColor: index === 0 ? color : index === 1 ? accent : '#ffffff', left: 24 + index * 36, top: 18 + index * 10 }}
            animate={{ y: index === 0 ? [0, -5, 0] : [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2 + index * 0.35 }}
          />
        ))}
      </div>
    );
  }

  if (kind === 'Animated text') {
    return (
      <div className="rounded-lg bg-gray-50 p-5 dark:bg-white/5">
        <motion.div
          className="bg-clip-text text-2xl font-bold text-transparent"
          style={{ backgroundImage: `linear-gradient(90deg, ${color}, ${accent}, ${color})`, backgroundSize: '200% 100%' }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          {title}
        </motion.div>
        <div className="mt-3 h-2 w-3/4 rounded-full" style={{ backgroundColor: `${color}33` }} />
      </div>
    );
  }

  if (kind === 'Spatial layout') {
    return (
      <div className="grid grid-cols-4 gap-2 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className={`${index % 3 === 0 ? 'col-span-2' : ''} h-10 rounded-md`}
            style={{ backgroundColor: index % 2 ? `${accent}33` : `${color}33`, border: `1px solid ${index % 2 ? accent : color}` }}
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: index * 0.06 }}
          />
        ))}
      </div>
    );
  }

  if (kind === 'Navigation pattern') {
    return (
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="flex gap-2">
          {['Overview', 'Motion', 'State'].map((label, index) => (
            <span
              key={label}
              className="rounded-md px-3 py-1.5 text-xs font-medium"
              style={{ backgroundColor: index === seed % 3 ? color : `${color}1f`, color: index === seed % 3 ? '#fff' : color }}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[0, 1, 2].map((index) => (
            <div key={index} className="h-2 rounded-full" style={{ width: `${48 + index * 18}%`, backgroundColor: index === 1 ? `${accent}66` : `${color}33` }} />
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'Animated form') {
    return (
      <div className="space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="h-9 rounded-md border bg-white dark:border-white/10 dark:bg-gray-900" style={{ borderColor: color }} />
        <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: accent }}
            animate={{ width: ['28%', '78%', '28%'] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
          />
        </div>
      </div>
    );
  }

  if (kind === 'Ambient effect') {
    return (
      <div className="relative h-32 overflow-hidden rounded-lg" style={{ background: `linear-gradient(135deg, ${color}22, ${accent}33)` }}>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute size-20 rounded-full blur-xl"
            style={{ backgroundColor: index % 2 ? accent : color, left: `${10 + index * 26}%`, top: `${12 + index * 14}%` }}
            animate={{ x: [0, 16, 0], y: [0, -10, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ repeat: Infinity, duration: 2.5 + index * 0.4 }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-lg text-white" style={{ backgroundColor: color }}>
          <Zap className="size-5" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-2.5 w-2/3 rounded-full" style={{ backgroundColor: `${color}55` }} />
          <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: `${accent}55` }} />
        </div>
      </div>
    </div>
  );
}
const grid3 = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
const grid4 = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4';

// ===== 1. ANIMATED COUNTER =====
function AnimatedCounter({ target = 1248, duration = 2 }: { target?: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Animated Counter</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/animated-counter" />
      </div>
      <div className={`${sectionCard} text-center`}>
        <span ref={ref} className="text-4xl font-bold text-brand-500">{count.toLocaleString()}</span>
      </div>
    </div>
  );
}

// ===== 2. REVEAL CARD =====
function RevealCard() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Reveal Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/reveal-card" />
      </div>
      <div
        className={`${sectionCard} cursor-pointer overflow-hidden`}
        onClick={() => setRevealed(!revealed)}
      >
        <motion.div
          animate={{ rotateY: revealed ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          style={{ perspective: 600, transformStyle: 'preserve-3d' }}
        >
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300">
              {revealed ? '🎉 Secret content revealed!' : 'Click to reveal hidden content'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 3. GLOW BUTTON =====
function GlowButton() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Glow Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/glow-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.button
          className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white"
          whileHover={{
            boxShadow: '0 0 20px rgba(70,95,255,0.6), 0 0 40px rgba(70,95,255,0.3)',
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: ['0 0 5px rgba(70,95,255,0.2)', '0 0 20px rgba(70,95,255,0.4)', '0 0 5px rgba(70,95,255,0.2)'],
          }}
          transition={{ boxShadow: { repeat: Infinity, duration: 2 } }}
        >
          <Zap className="mr-2 inline size-4" />Glow Effect
        </motion.button>
      </div>
    </div>
  );
}

// ===== 4. SHIMMER LOADER =====
function ShimmerLoader() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Shimmer Loader</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/shimmer-loader" />
      </div>
      <div className={sectionCard}>
        <div className="space-y-3">
          {['w-3/4', 'w-full', 'w-5/6', 'w-2/3'].map((w, i) => (
            <div key={i} className={`h-4 ${w} overflow-hidden rounded-lg bg-gray-200 dark:bg-white/10`}>
              <motion.div
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/20"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear', delay: i * 0.2 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 5. MORPHING ICON =====
function MorphingIcon() {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Morphing Icon</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/morphing-icon" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.button
          className="flex size-14 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/20"
          onClick={() => setToggled(!toggled)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={toggled ? 'check' : 'plus'}
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              {toggled ? <Check className="size-6 text-success-500" /> : <Plus className="size-6 text-brand-500" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}

// ===== 6. STAGGER LIST =====
function StaggerList() {
  const items = ['Dashboard', 'Analytics', 'Reports', 'Settings', 'Users'];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Stagger List</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/stagger-list" />
      </div>
      <div className={sectionCard}>
        <div ref={ref} className="space-y-2">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 dark:bg-white/5"
            >
              <ChevronRight className="size-4 text-brand-500" />
              <span className="text-theme-sm text-gray-700 dark:text-gray-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 7. PARALLAX CARD =====
function ParallaxCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Parallax Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/parallax-card" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="flex size-32 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 text-white"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          whileHover={{ scale: 1.05 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => { x.set(0); y.set(0); }}
        >
          <span className="text-lg font-bold">Hover Me</span>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 8. WAVE BACKGROUND =====
function WaveBackground() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Wave Background</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/wave-background" />
      </div>
      <div className={`${sectionCard} overflow-hidden`}>
        <div className="relative h-24 overflow-hidden rounded-lg bg-brand-500">
          {[0, 1, 2].map((i) => (
            <motion.svg
              key={i}
              className="absolute bottom-0 w-[200%]"
              viewBox="0 0 1440 100"
              style={{ opacity: 0.2 + i * 0.1 }}
              animate={{ x: ['-0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 4 + i * 2, ease: 'linear' }}
            >
              <path
                d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z"
                fill="white"
              />
            </motion.svg>
          ))}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <span className="font-semibold">Wave Effect</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 9. TYPEWRITER TEXT =====
function TypewriterText() {
  const text = 'Welcome to mtverse admin';
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    if (idx < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, idx + 1));
        setIdx(idx + 1);
      }, 60);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => { setDisplayed(''); setIdx(0); }, 2000);
      return () => clearTimeout(timer);
    }
  }, [idx, isInView, text]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Typewriter Text</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/typewriter-text" />
      </div>
      <div className={sectionCard}>
        <p ref={ref} className="font-mono text-lg text-gray-800 dark:text-white/90">
          {displayed}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="text-brand-500"
          >
            |
          </motion.span>
        </p>
      </div>
    </div>
  );
}

// ===== 10. FLIP CARD =====
function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Flip Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/flip-card" />
      </div>
      <div
        className="cursor-pointer"
        style={{ perspective: 600 }}
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="relative h-40"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-gray-200 bg-brand-50 dark:border-white/5 dark:bg-brand-500/20" style={{ backfaceVisibility: 'hidden' }}>
            <div className="text-center">
              <p className="text-sm font-medium text-brand-500">Front Side</p>
              <p className="mt-1 text-xs text-gray-500">Click to flip</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-gray-200 bg-success-50 dark:border-white/5 dark:bg-success-500/20" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="text-center">
              <p className="text-sm font-medium text-success-500">Back Side</p>
              <p className="mt-1 text-xs text-gray-500">Click to flip back</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 11. MAGNETIC BUTTON =====
function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.3);
    y.set(dy * 0.3);
  }, [x, y]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Magnetic Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/magnetic-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.button
          ref={ref}
          style={{ x: springX, y: springY }}
          onMouseMove={handleMouse}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white"
        >
          Hover Near Me
        </motion.button>
      </div>
    </div>
  );
}

// ===== 12. SPOTLIGHT CARD =====
function SpotlightCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Spotlight Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/spotlight-card" />
      </div>
      <div
        ref={ref}
        className={`${sectionCard} relative overflow-hidden`}
        onMouseMove={(e) => {
          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(70,95,255,0.1), transparent)`,
          }}
        />
        <p className="text-theme-sm text-gray-700 dark:text-gray-300">Move your cursor to see the spotlight effect follow along.</p>
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, rgba(70,95,255,0.08), transparent)`,
          }}
        />
      </div>
    </div>
  );
}

// ===== 13. GRADIENT BORDER CARD =====
function GradientBorderCard() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Gradient Border</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/gradient-border" />
      </div>
      <div className="relative rounded-lg p-[2px]">
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(90deg, #465fff, #12b76a, #f79009, #465fff)',
            backgroundSize: '300% 100%',
          }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />
        <div className="relative rounded-lg bg-white p-6 dark:bg-gray-dark">
          <p className="text-theme-sm text-gray-700 dark:text-gray-300">Animated gradient border wrapping this card.</p>
        </div>
      </div>
    </div>
  );
}

// ===== 14. RIPPLE BUTTON =====
function RippleButton() {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const nextId = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = nextId.current++;
    setRipples((r) => [...r, { x, y, id }]);
    setTimeout(() => setRipples((r) => r.filter((rip) => rip.id !== id)), 800);
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Ripple Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/ripple-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <button
          onClick={handleClick}
          className="relative overflow-hidden rounded-lg bg-brand-500 px-6 py-3 font-medium text-white"
        >
          Click for Ripple
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              className="absolute rounded-full bg-white/30"
              initial={{ width: 0, height: 0, opacity: 0.5, x: r.x, y: r.y, top: 0, left: 0, translateX: '-50%', translateY: '-50%' }}
              animate={{ width: 200, height: 200, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}
        </button>
      </div>
    </div>
  );
}

// ===== 15. SLIDE IN PANEL =====
function SlideInPanel() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Slide In Panel</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/slide-in-panel" />
      </div>
      <div className={sectionCard}>
        <button onClick={() => setOpen(true)} className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
          Open Panel
        </button>
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              <motion.div
                className="fixed right-0 top-0 z-50 h-full w-80 bg-white p-6 shadow-xl dark:bg-gray-800"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Slide Panel</h3>
                  <button onClick={() => setOpen(false)} className="text-gray-500"><X className="size-5" /></button>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">This panel slides in from the right with a spring animation.</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ===== 16. FADE IN IMAGE =====
function FadeInImage() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Fade In Image</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/fade-in-image" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="h-28 w-full overflow-hidden rounded-lg bg-gradient-to-br from-brand-400 to-purple-500"
        >
          <div className="flex h-full items-center justify-center text-white" onLoad={() => setLoaded(true)}>
            <span className="text-sm">Image Content</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 17. BOUNCE NOTIFICATION =====
function BounceNotification() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Bounce Notification</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/bounce-notification" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative">
          <Bell className="size-8 text-gray-600 dark:text-gray-300" />
          <motion.span
            className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-error-500 text-[10px] font-bold text-white"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          >
            3
          </motion.span>
        </div>
      </div>
    </div>
  );
}

// ===== 18. ROTATING LOADER =====
function RotatingLoader() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Rotating Loader</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/rotating-loader" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="size-12 rounded-full border-4 border-gray-200 border-t-brand-500 dark:border-white/10 dark:border-t-brand-500"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
      </div>
    </div>
  );
}

// ===== 19. PULSE DOT =====
function PulseDot() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Pulse Dot</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/pulse-dot" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="flex items-center gap-3">
          {(['success', 'warning', 'error'] as const).map((c) => {
            const colors = { success: 'bg-success-500', warning: 'bg-warning-500', error: 'bg-error-500' };
            return (
              <div key={c} className="relative flex size-4 items-center justify-center">
                <motion.div
                  className={`absolute size-4 rounded-full ${colors[c]}`}
                  animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <div className={`size-3 rounded-full ${colors[c]}`} />
              </div>
            );
          })}
          <span className="text-sm text-gray-600 dark:text-gray-400">Live</span>
        </div>
      </div>
    </div>
  );
}

// ===== 20. EXPANDABLE SEARCH =====
function ExpandableSearch() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Expandable Search</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/expandable-search" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="flex items-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5"
          animate={{ width: expanded ? 280 : 48 }}
          transition={{ duration: 0.3 }}
        >
          <button className="flex size-12 shrink-0 items-center justify-center text-gray-500" onClick={() => setExpanded(!expanded)}>
            <Search className="size-5" />
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full bg-transparent pr-3 text-sm text-gray-700 outline-none dark:text-white"
                placeholder="Search..."
                autoFocus
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 21. FLOATING ACTION BUTTON =====
function FloatingActionButton() {
  const [open, setOpen] = useState(false);
  const actions = [
    { icon: Edit3, label: 'Edit', color: 'bg-brand-500' },
    { icon: Upload, label: 'Upload', color: 'bg-success-500' },
    { icon: Share2, label: 'Share', color: 'bg-warning-500' },
  ];

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Floating Action Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/floating-action-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative">
          <AnimatePresence>
            {open && actions.map((action, i) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.label}
                  className={`absolute bottom-14 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full text-white shadow-lg ${action.color}`}
                  initial={{ y: 0, opacity: 0, scale: 0 }}
                  animate={{ y: -(i + 1) * 48, opacity: 1, scale: 1 }}
                  exit={{ y: 0, opacity: 0, scale: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Icon className="size-4" />
                </motion.button>
              );
            })}
          </AnimatePresence>
          <motion.button
            className="flex size-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg"
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            animate={{ rotate: open ? 45 : 0 }}
          >
            <Plus className="size-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// ===== 22. STEPPER NAVIGATION =====
function StepperNavigation() {
  const [step, setStep] = useState(1);
  const steps = [1, 2, 3, 4];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Stepper Navigation</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/stepper-navigation" />
      </div>
      <div className={sectionCard}>
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <motion.div
                className={`flex size-10 items-center justify-center rounded-full font-semibold text-sm ${
                  s <= step ? 'bg-brand-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-white/10'
                }`}
                animate={{ scale: s === step ? 1.15 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {s}
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  className="h-1 flex-1 mx-2 rounded bg-gray-200 dark:bg-white/10"
                >
                  <motion.div
                    className="h-full rounded bg-brand-500"
                    initial={{ width: '0%' }}
                    animate={{ width: s < step ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <button onClick={() => setStep(Math.max(1, step - 1))} className="rounded-lg border px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300">Prev</button>
          <button onClick={() => setStep(Math.min(4, step + 1))} className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Next</button>
        </div>
      </div>
    </div>
  );
}

// ===== 23. TOAST STACK =====
function ToastStack() {
  const [toasts, setToasts] = useState<Array<{ id: number; type: string }>>([]);
  const nextId = useRef(0);

  const addToast = (type: string) => {
    const id = nextId.current++;
    setToasts((t) => [...t, { id, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  };

  const colors: Record<string, string> = {
    success: 'bg-success-500',
    error: 'bg-error-500',
    warning: 'bg-warning-500',
    info: 'bg-blue-light-500',
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Toast Stack</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/toast-stack" />
      </div>
      <div className={sectionCard}>
        <div className="flex gap-2">
          {['success', 'error', 'warning', 'info'].map((t) => (
            <button key={t} onClick={() => addToast(t)} className={`rounded-lg px-3 py-1.5 text-sm text-white ${colors[t]}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.95 }}
                className={`rounded-lg px-4 py-2 text-sm text-white ${colors[toast.type]}`}
              >
                {toast.type.charAt(0).toUpperCase() + toast.type.slice(1)} notification
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ===== 24. DRAGGABLE CARD =====
function DraggableCard() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Draggable Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/draggable-card" />
      </div>
      <div className={sectionCard}>
        <div className="flex h-36 items-center justify-center">
          <motion.div
            className="flex size-24 cursor-grab items-center justify-center rounded-lg bg-brand-50 text-brand-500 shadow-lg active:cursor-grabbing dark:bg-brand-500/20"
            drag
            dragConstraints={{ left: -80, right: 80, top: -40, bottom: 40 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
          >
            <span className="text-xs font-medium">Drag Me</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ===== 25. SWIPEABLE LIST ITEM =====
function SwipeableListItem() {
  const [swiped, setSwiped] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Swipeable List Item</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/swipeable-list-item" />
      </div>
      <div className={sectionCard}>
        <motion.div
          className="relative overflow-hidden rounded-lg"
          drag="x"
          dragConstraints={{ left: -100, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) setSwiped(true);
            else setSwiped(false);
          }}
        >
          <div className="absolute right-0 top-0 flex h-full items-center gap-2 bg-error-500 px-4 text-white">
            <Trash2 className="size-4" />
          </div>
          <div className={`rounded-lg bg-gray-50 px-4 py-3 dark:bg-white/5 ${swiped ? 'mr-16' : ''}`}>
            <span className="text-sm text-gray-700 dark:text-gray-300">Swipe left to reveal action</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 26. PULL TO REFRESH =====
function PullToRefresh() {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Pull to Refresh</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/pull-to-refresh" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="cursor-pointer"
          animate={{ rotate: refreshing ? 360 : 0 }}
          transition={{ repeat: refreshing ? Infinity : 0, duration: 0.8, ease: 'linear' }}
          onClick={() => {
            setRefreshing(true);
            setTimeout(() => setRefreshing(false), 2000);
          }}
        >
          <RefreshCw className="size-8 text-brand-500" />
        </motion.div>
        <p className="text-xs text-gray-500">{refreshing ? 'Refreshing...' : 'Click to refresh'}</p>
      </div>
    </div>
  );
}

// ===== 27. INFINITE SCROLL LOADER =====
function InfiniteScrollLoader() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Infinite Scroll Loader</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/infinite-scroll-loader" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="size-3 rounded-full bg-brand-500"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 28. ERROR BOUNDARY FALLBACK =====
function ErrorBoundaryFallback() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Error Fallback</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/error-boundary-fallback" />
      </div>
      <div className={`${sectionCard} text-center`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <AlertCircle className="mx-auto size-12 text-error-500" />
        </motion.div>
        <motion.p
          className="mt-2 text-sm text-error-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Something went wrong
        </motion.p>
        <motion.button
          className="mt-3 rounded-lg bg-error-500 px-4 py-1.5 text-sm text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Again
        </motion.button>
      </div>
    </div>
  );
}

// ===== 29. SUCCESS ANIMATION =====
function SuccessAnimation() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Success Animation</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/success-animation" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <button onClick={() => setShow(true)} className="rounded-lg bg-success-500 px-4 py-2 text-sm text-white">
          Show Success
        </button>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="flex size-16 items-center justify-center rounded-full bg-success-100 dark:bg-success-500/20"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle className="size-10 text-success-500" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {show && <button onClick={() => setShow(false)} className="text-xs text-gray-500">Reset</button>}
      </div>
    </div>
  );
}

// ===== 30. CONFETTI BUTTON =====
function ConfettiButton() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);
  const nextId = useRef(0);

  const fire = () => {
    const colors = ['#465fff', '#12b76a', '#f79009', '#f04438', '#0ba5ec'];
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: nextId.current++,
      x: (Math.random() - 0.5) * 200,
      y: -(Math.random() * 150 + 50),
      color: colors[i % colors.length],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1500);
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Confetti Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/confetti-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative">
          <motion.button
            className="rounded-lg bg-warning-500 px-6 py-3 font-medium text-white"
            whileTap={{ scale: 0.9 }}
            onClick={fire}
          >
            🎉 Celebrate
          </motion.button>
          <AnimatePresence>
            {particles.map((p) => (
              <motion.span
                key={p.id}
                className="absolute left-1/2 top-1/2 size-2 rounded-full"
                style={{ backgroundColor: p.color }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x: p.x, y: p.y, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ===== 31. GRADIENT TEXT =====
function GradientText() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Gradient Text</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/gradient-text" />
      </div>
      <div className={sectionCard}>
        <motion.h2
          className="bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          style={{ backgroundSize: '200% 200%' }}
        >
          Animated Gradient
        </motion.h2>
      </div>
    </div>
  );
}

// ===== 32. NEON GLOW =====
function NeonGlow() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Neon Glow</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/neon-glow" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="rounded-lg border-2 border-brand-500 px-6 py-3 text-lg font-bold text-brand-500"
          animate={{
            textShadow: [
              '0 0 5px rgba(70,95,255,0.5)',
              '0 0 20px rgba(70,95,255,0.8)',
              '0 0 5px rgba(70,95,255,0.5)',
            ],
            boxShadow: [
              '0 0 5px rgba(70,95,255,0.3), inset 0 0 5px rgba(70,95,255,0.1)',
              '0 0 20px rgba(70,95,255,0.6), inset 0 0 10px rgba(70,95,255,0.2)',
              '0 0 5px rgba(70,95,255,0.3), inset 0 0 5px rgba(70,95,255,0.1)',
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          NEON
        </motion.div>
      </div>
    </div>
  );
}

// ===== 33. GLASS CARD =====
function GlassCard() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Glass Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/glass-card" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="h-28 w-full rounded-lg bg-gradient-to-br from-brand-400 to-purple-600 p-4">
          <div className="h-full rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-md">
            <p className="text-sm font-medium text-white">Glassmorphism</p>
            <p className="mt-1 text-xs text-white/70">Frosted glass effect with backdrop blur</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 34. BLUR REVEAL =====
function BlurReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Blur Reveal</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/blur-reveal" />
      </div>
      <div className={sectionCard}>
        <motion.p
          ref={ref}
          className="text-gray-700 dark:text-gray-300"
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          This text starts blurred and reveals itself when scrolled into view. The blur gradually fades away.
        </motion.p>
      </div>
    </div>
  );
}

// ===== 35. SCALE HOVER =====
function ScaleHover() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Scale Hover</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/scale-hover" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="flex size-24 items-center justify-center rounded-lg bg-success-50 text-success-500 dark:bg-success-500/20"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Star className="size-8" />
        </motion.div>
      </div>
    </div>
  );
}

// ===== 36. WOBBLE BUTTON =====
function WobbleButton() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Wobble Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/wobble-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.button
          className="rounded-lg bg-warning-500 px-6 py-3 font-medium text-white"
          whileHover={{
            rotate: [0, -3, 3, -3, 3, 0],
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          Wobble Me
        </motion.button>
      </div>
    </div>
  );
}

// ===== 37. JELLO EFFECT =====
function JelloEffect() {
  const [triggered, setTriggered] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Jello Effect</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/jello-effect" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="flex size-24 items-center justify-center rounded-lg bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/20"
          animate={triggered ? {
            scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
            scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
          } : {}}
          transition={{ duration: 0.8 }}
          onClick={() => { setTriggered(true); setTimeout(() => setTriggered(false), 1000); }}
        >
          <span className="text-xs font-medium">Click</span>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 38. SLIDE UP MODAL =====
function SlideUpModal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Slide Up Modal</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/slide-up-modal" />
      </div>
      <div className={sectionCard}>
        <button onClick={() => setOpen(true)} className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
          Open Modal
        </button>
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              <motion.div
                className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md rounded-t-2xl bg-white p-6 shadow-xl dark:bg-gray-800"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Slide Up Modal</h3>
                  <button onClick={() => setOpen(false)}><X className="size-5 text-gray-500" /></button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">This modal slides up from the bottom with a spring animation.</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ===== 39. DROPDOWN MENU ANIMATED =====
function DropdownMenuAnimated() {
  const [open, setOpen] = useState(false);
  const items = ['Profile', 'Settings', 'Billing', 'Sign Out'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Dropdown Animated</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/dropdown-menu-animated" />
      </div>
      <div className={sectionCard}>
        <div className="relative inline-block">
          <button onClick={() => setOpen(!open)} className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 dark:bg-white/10 dark:text-gray-300">
            Menu <ChevronDown className="inline size-4" />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute left-0 top-full z-10 mt-2 w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-white/5 dark:bg-gray-800"
                initial={{ opacity: 0, scale: 0.95, y: -5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -5 }}
                transition={{ duration: 0.15 }}
              >
                {items.map((item) => (
                  <button key={item} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5" onClick={() => setOpen(false)}>
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ===== 40. TAB INDICATOR =====
function TabIndicator() {
  const [active, setActive] = useState(0);
  const tabs = ['Overview', 'Analytics', 'Reports'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Tab Indicator</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/tab-indicator" />
      </div>
      <div className={sectionCard}>
        <div className="relative flex border-b border-gray-200 dark:border-white/10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`relative px-4 py-2 text-sm font-medium ${active === i ? 'text-brand-500' : 'text-gray-500'}`}
              onClick={() => setActive(i)}
            >
              {tab}
              {active === i && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500"
                  layoutId="tab-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 41. TOGGLE SWITCH ANIMATED =====
function ToggleSwitchAnimated() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Toggle Switch</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/toggle-switch-animated" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <button
          className={`relative h-8 w-14 rounded-full ${on ? 'bg-brand-500' : 'bg-gray-300 dark:bg-white/20'}`}
          onClick={() => setOn(!on)}
        >
          <motion.div
            className="absolute top-1 size-6 rounded-full bg-white shadow"
            animate={{ left: on ? 30 : 4 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>
      </div>
    </div>
  );
}

// ===== 42. CHECKBOX ANIMATED =====
function CheckboxAnimated() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Checkbox Animated</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/checkbox-animated" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <button
          className={`flex size-7 items-center justify-center rounded-md border-2 ${
            checked ? 'border-brand-500 bg-brand-500' : 'border-gray-300 dark:border-white/20'
          }`}
          onClick={() => setChecked(!checked)}
        >
          <AnimatePresence>
            {checked && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Check className="size-4 text-white" strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

// ===== 43. RADIO ANIMATED =====
function RadioAnimated() {
  const [selected, setSelected] = useState(0);
  const options = ['A', 'B', 'C'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Radio Animated</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/radio-animated" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="flex gap-4">
          {options.map((opt, i) => (
            <button key={opt} className="flex items-center gap-2" onClick={() => setSelected(i)}>
              <div className={`flex size-6 items-center justify-center rounded-full border-2 ${
                selected === i ? 'border-brand-500' : 'border-gray-300 dark:border-white/20'
              }`}>
                {selected === i && (
                  <motion.div
                    className="size-3 rounded-full bg-brand-500"
                    layoutId="radio-dot"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{opt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 44. PROGRESS CIRCLE ANIMATED =====
function ProgressCircleAnimated() {
  const [progress, setProgress] = useState(75);
  const circumference = 2 * Math.PI * 40;
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Progress Circle</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/progress-circle-animated" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <svg width="100" height="100" className="-rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" className="stroke-gray-200 dark:stroke-white/10" strokeWidth="8" />
          <motion.circle
            cx="50" cy="50" r="40" fill="none" className="stroke-brand-500" strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="flex items-center gap-2">
          <input type="range" min="0" max="100" value={progress} onChange={(e) => setProgress(+e.target.value)} className="w-24" />
          <span className="text-sm text-gray-600 dark:text-gray-400">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

// ===== 45. PROGRESS STEP ANIMATED =====
function ProgressStepAnimated() {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = ['Cart', 'Shipping', 'Payment', 'Review'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Progress Steps</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/progress-step-animated" />
      </div>
      <div className={sectionCard}>
        <div className="flex items-center">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <motion.div
                className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold ${
                  i <= currentStep ? 'bg-brand-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-white/10'
                }`}
                animate={{ scale: i === currentStep ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {i < currentStep ? <Check className="size-4" /> : i + 1}
              </motion.div>
              {i < steps.length - 1 && (
                <div className="h-1 flex-1 bg-gray-200 dark:bg-white/10">
                  <motion.div
                    className="h-full bg-brand-500"
                    initial={{ width: '0%' }}
                    animate={{ width: i < currentStep ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-gray-500">
          {steps.map((s) => <span key={s}>{s}</span>)}
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} className="rounded-lg border px-3 py-1 text-xs">Back</button>
          <button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} className="rounded-lg bg-brand-500 px-3 py-1 text-xs text-white">Next</button>
        </div>
      </div>
    </div>
  );
}

// ===== 46. SIDEBAR ANIMATED =====
function SidebarAnimated() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Sidebar Animated</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/sidebar-animated" />
      </div>
      <div className={sectionCard}>
        <div className="flex h-44 overflow-hidden rounded-lg border border-gray-200 dark:border-white/5">
          <motion.div
            className="flex flex-col bg-gray-50 dark:bg-white/5"
            animate={{ width: open ? 140 : 40 }}
            transition={{ duration: 0.3, type: 'spring' }}
          >
            <div className="flex h-10 items-center justify-center border-b border-gray-200 dark:border-white/5">
              {open ? <span className="text-xs font-bold text-brand-500">Menu</span> : <Menu className="size-4 text-brand-500" />}
            </div>
            {[Home, Settings, Bell, Star].map((Icon, i) => (
              <div key={i} className="flex items-center gap-2 px-2 py-2">
                <Icon className="size-4 shrink-0 text-gray-500" />
                {open && <motion.span className="text-xs text-gray-600 dark:text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Item {i + 1}</motion.span>}
              </div>
            ))}
          </motion.div>
          <div className="flex flex-1 items-center justify-center text-xs text-gray-500">
            Content Area
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="mt-2 rounded-lg bg-brand-500 px-3 py-1 text-xs text-white">
          Toggle Sidebar
        </button>
      </div>
    </div>
  );
}

// ===== 47. DRAWER ANIMATED =====
function DrawerAnimated() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Drawer Animated</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/drawer-animated" />
      </div>
      <div className={sectionCard}>
        <button onClick={() => setOpen(true)} className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
          Open Drawer
        </button>
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              <motion.div
                className="fixed left-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl dark:bg-gray-800"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Drawer</h3>
                  <button onClick={() => setOpen(false)}><X className="size-5 text-gray-500" /></button>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">This drawer slides in from the left with a spring animation.</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ===== 48. POPOVER ANIMATED =====
function PopoverAnimated() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Popover Animated</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/popover-animated" />
      </div>
      <div className={sectionCard}>
        <div className="relative inline-block">
          <button onClick={() => setOpen(!open)} className="rounded-lg bg-brand-50 px-4 py-2 text-sm text-brand-500 dark:bg-brand-500/20">
            Click for Popover
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute left-0 top-full z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-white/5 dark:bg-gray-800"
                initial={{ opacity: 0, scale: 0.9, transformOrigin: 'top left' }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                <p className="text-sm text-gray-700 dark:text-gray-300">This is an animated popover with scale transition.</p>
                <button onClick={() => setOpen(false)} className="mt-2 text-xs text-brand-500">Close</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ===== 49. TOOLTIP ANIMATED =====
function TooltipAnimated() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Tooltip Animated</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/tooltip-animated" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative">
          <button
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 dark:bg-white/10 dark:text-gray-300"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            Hover Me
          </button>
          <AnimatePresence>
            {show && (
              <motion.div
                className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1.5 text-xs text-white dark:bg-gray-200 dark:text-gray-800"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.15 }}
              >
                Animated Tooltip
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ===== 50. ACCORDION ANIMATED =====
function AccordionAnimated() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const items = [
    { title: 'What is mtverse?', content: 'mtverse is a comprehensive admin dashboard template with 700+ components.' },
    { title: 'How to customize?', content: 'You can customize colors, typography, spacing, and more through the design system.' },
    { title: 'Is it responsive?', content: 'Yes, mtverse is fully responsive and works on all screen sizes.' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Accordion Animated</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/accordion-animated" />
      </div>
      <div className={sectionCard}>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-lg border border-gray-200 dark:border-white/5">
              <button
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                {item.title}
                <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="size-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-3 text-sm text-gray-600 dark:text-gray-400">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 51. 3D CARD =====
function ThreeDCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">3D Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/3d-card" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="relative size-36 cursor-pointer rounded-lg bg-gradient-to-br from-brand-500 to-purple-600"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => { x.set(0); y.set(0); }}
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-lg" style={{ transform: 'translateZ(20px)' }}>
            <div className="text-center text-white">
              <Layers className="mx-auto size-6" />
              <p className="mt-1 text-sm font-medium">Depth Layers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 52. MORPHING SHAPE =====
function MorphingShape() {
  const [morphed, setMorphed] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Morphing Shape</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/morphing-shape" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.svg width="100" height="100" viewBox="0 0 100 100" onClick={() => setMorphed(!morphed)} className="cursor-pointer">
          <motion.path
            d={morphed
              ? "M50 10 L90 40 L80 90 L20 90 L10 40 Z"
              : "M50 5 L95 30 L80 95 L20 95 L5 30 Z"
            }
            fill="rgba(70,95,255,0.2)"
            stroke="#465fff"
            strokeWidth="2"
            animate={{
              d: morphed
                ? "M50 5 L95 30 L80 95 L20 95 L5 30 Z"
                : "M50 10 L90 40 L80 90 L20 90 L10 40 Z",
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </motion.svg>
        <p className="text-xs text-gray-500">Click to morph</p>
      </div>
    </div>
  );
}

// ===== 53. LIQUID BUTTON =====
function LiquidButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Liquid Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/liquid-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.button
          className="rounded-lg bg-brand-500 px-8 py-3 font-medium text-white"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          animate={{
            borderRadius: hovered ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '12px',
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          whileTap={{ scale: 0.95 }}
        >
          <Droplets className="mr-2 inline size-4" />Liquid Effect
        </motion.button>
      </div>
    </div>
  );
}

// ===== 54. PARTICLE BACKGROUND =====
function ParticleBackground() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: seededUnit(100 + i) * 100,
    y: seededUnit(200 + i) * 100,
    size: seededUnit(300 + i) * 4 + 2,
    duration: seededUnit(400 + i) * 8 + 4,
    drift: (seededUnit(500 + i) - 0.5) * 20,
  }));
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Particle Background</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/particle-background" />
      </div>
      <div className={`${sectionCard} overflow-hidden`}>
        <div className="relative h-32 overflow-hidden rounded-lg bg-gray-900">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-brand-400"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              animate={{ y: [0, -30, 0], x: [0, p.drift, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: p.duration, ease: 'easeInOut' }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <Sparkles className="mr-2 size-5" /><span className="font-medium">Particles</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 55. GRADIENT MESH =====
function GradientMesh() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Gradient Mesh</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/gradient-mesh" />
      </div>
      <div className={`${sectionCard} overflow-hidden`}>
        <div className="relative h-32 overflow-hidden rounded-lg">
          <motion.div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #465fff, #12b76a, #f79009, #f04438)', backgroundSize: '400% 400%' }}
            animate={{ backgroundPosition: ['0% 50%', '50% 0%', '100% 50%', '50% 100%', '0% 50%'] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <span className="font-medium">Mesh Gradient</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 56. TILT CARD =====
function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const glareX = useTransform(x, [-100, 100], [0, 100]);
  const glareY = useTransform(y, [-100, 100], [0, 100]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Tilt Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/tilt-card" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          ref={ref}
          className="relative size-36 cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-brand-500 to-purple-600"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => { x.set(0); y.set(0); }}
        >
          <div className="flex h-full items-center justify-center text-white">
            <span className="font-medium">Tilt + Glare</span>
          </div>
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
            style={{ backgroundPositionX: glareX, backgroundPositionY: glareY }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// ===== 57. ELASTIC SLIDER =====
function ElasticSlider() {
  const [value, setValue] = useState(50);
  const springValue = useSpring(value, { stiffness: 100, damping: 12 });
  const displayValue = useTransform(springValue, (v) => Math.round(v));
  const [shown, setShown] = useState(50);
  useEffect(() => { const unsub = displayValue.on('change', (v) => setShown(v)); return unsub; }, [displayValue]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Elastic Slider</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/elastic-slider" />
      </div>
      <div className={sectionCard}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Value</span>
            <motion.span className="text-lg font-bold text-brand-500" key={shown}>{shown}</motion.span>
          </div>
          <input type="range" min="0" max="100" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full accent-brand-500" />
          <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
            <motion.div className="h-full rounded-full bg-brand-500" style={{ width: `${value}%` }} layout transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 58. PHYSICS CARD =====
function PhysicsCard() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Physics Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/physics-card" />
      </div>
      <div className={sectionCard}>
        <div className="flex h-40 items-center justify-center">
          <motion.div
            className="flex size-28 cursor-grab items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 text-white shadow-lg active:cursor-grabbing"
            drag
            dragConstraints={{ left: -80, right: 80, top: -40, bottom: 40 }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            whileDrag={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
          >
            <Move className="size-6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ===== 59. ORBIT LOADER =====
function OrbitLoader() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Orbit Loader</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/orbit-loader" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative size-20">
          <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 dark:border-white/10" />
          <motion.div
            className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-brand-500"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            style={{ transformOrigin: '50% 40px' }}
          />
          <motion.div
            className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-purple-500"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            style={{ transformOrigin: '50% 40px' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Crosshair className="size-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 60. DNA HELIX =====
function DNAHelix() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">DNA Helix</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/dna-helix" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="flex items-center gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-full bg-brand-500"
              animate={{
                height: [8, 24, 8],
                y: [0, -8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.15, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 61. AURORA BACKGROUND =====
function AuroraBackground() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Aurora Background</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/aurora-background" />
      </div>
      <div className={`${sectionCard} overflow-hidden`}>
        <div className="relative h-32 overflow-hidden rounded-lg bg-gray-900">
          <motion.div
            className="absolute -left-20 -top-10 size-40 rounded-full bg-brand-500/30 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-10 top-5 size-36 rounded-full bg-purple-500/30 blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-20 size-32 rounded-full bg-success-500/20 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <span className="font-medium">Aurora Effect</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 62. FIREWORK BUTTON =====
function FireworkButton() {
  const [sparks, setSparks] = useState<Array<{ id: number; angle: number; color: string }>>([]);
  const nextId = useRef(0);
  const fire = () => {
    const colors = ['#465fff', '#12b76a', '#f79009', '#f04438', '#e879f9'];
    const newSparks = Array.from({ length: 12 }, (_, i) => ({
      id: nextId.current++,
      angle: (i / 12) * 360,
      color: colors[i % colors.length],
    }));
    setSparks(newSparks);
    setTimeout(() => setSparks([]), 1200);
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Firework Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/firework-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative">
          <motion.button
            className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white"
            onClick={fire}
            whileTap={{ scale: 0.9 }}
          >
            🎆 Firework
          </motion.button>
          {sparks.map((s) => {
            const rad = (s.angle * Math.PI) / 180;
            const dist = 60;
            return (
              <motion.div
                key={s.id}
                className="absolute left-1/2 top-1/2 size-2 rounded-full"
                style={{ backgroundColor: s.color }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x: Math.cos(rad) * dist, y: Math.sin(rad) * dist, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ===== 63. ELASTIC INPUT =====
function ElasticInput() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Elastic Input</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/elastic-input" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="w-full"
          animate={{ scaleX: focused ? 1.02 : 1, scaleY: focused ? 0.98 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <input
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
            placeholder="Click to focus..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </motion.div>
      </div>
    </div>
  );
}

// ===== 64. MASONRY GRID =====
function MasonryGrid() {
  const [filter, setFilter] = useState('all');
  const items = [
    { id: 1, cat: 'all', h: 'h-20', color: 'bg-brand-500' },
    { id: 2, cat: 'design', h: 'h-28', color: 'bg-purple-500' },
    { id: 3, cat: 'dev', h: 'h-24', color: 'bg-success-500' },
    { id: 4, cat: 'design', h: 'h-16', color: 'bg-warning-500' },
    { id: 5, cat: 'dev', h: 'h-28', color: 'bg-brand-400' },
    { id: 6, cat: 'all', h: 'h-20', color: 'bg-error-400' },
  ];
  const filtered = items.filter((it) => filter === 'all' || it.cat === 'all' || it.cat === filter);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Masonry Grid</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/masonry-grid" />
      </div>
      <div className={sectionCard}>
        <div className="mb-3 flex gap-2">
          {['all', 'design', 'dev'].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-lg px-3 py-1 text-xs font-medium ${filter === f ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'}`}>
              {f}
            </button>
          ))}
        </div>
        <motion.div className="grid grid-cols-3 gap-2" layout>
          <AnimatePresence>
            {filtered.map((it) => (
              <motion.div key={it.id} layout className={`${it.h} rounded-lg ${it.color}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 65. MARQUEE TEXT =====
function MarqueeText() {
  const items = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Prisma'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Marquee Text</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/marquee-text" />
      </div>
      <div className={`${sectionCard} overflow-hidden`}>
        <div className="relative h-10 overflow-hidden rounded-lg bg-brand-50 dark:bg-brand-500/10">
          <motion.div
            className="absolute flex items-center gap-8 whitespace-nowrap text-sm font-medium text-brand-500"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            {[...items, ...items].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ===== 66. TYPING EFFECT =====
function TypingEffect() {
  const words = ['Innovative', 'Powerful', 'Beautiful', 'Fast'];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wordIdx];
    if (!deleting && charIdx < word.length) {
      const t = setTimeout(() => setCharIdx(charIdx + 1), 80);
      return () => clearTimeout(t);
    } else if (!deleting && charIdx === word.length) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    } else if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx(charIdx - 1), 40);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => { setDeleting(false); setWordIdx((wordIdx + 1) % words.length); }, 50);
      return () => clearTimeout(t);
    }
  }, [charIdx, deleting, wordIdx]);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Typing Effect</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/typing-effect" />
      </div>
      <div className={sectionCard}>
        <p className="font-mono text-lg text-gray-800 dark:text-white/90">
          {words[wordIdx].slice(0, charIdx)}
          <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="text-brand-500">|</motion.span>
        </p>
      </div>
    </div>
  );
}

// ===== 67. COUNTER WHEEL =====
function CounterWheel() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Counter Wheel</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/counter-wheel" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 px-4 dark:border-white/10 dark:bg-white/5" style={{ height: 48 }}>
          <motion.div
            animate={{ y: -(value % 10) * 48 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="flex size-12 items-center justify-center text-xl font-bold text-brand-500">{i}</div>
            ))}
          </motion.div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setValue(Math.max(0, value - 1))} className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-white/10 dark:text-gray-300">-</button>
          <button onClick={() => setValue(value + 1)} className="rounded-lg bg-brand-500 px-3 py-1 text-sm text-white">+</button>
        </div>
      </div>
    </div>
  );
}

// ===== 68. BREATHING CARD =====
function BreathingCard() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Breathing Card</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/breathing-card" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="flex size-28 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/20"
          animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 0 rgba(70,95,255,0)', '0 0 20px rgba(70,95,255,0.15)', '0 0 0 rgba(70,95,255,0)'] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <Heart className="size-8 text-brand-500" />
        </motion.div>
      </div>
    </div>
  );
}

// ===== 69. HOVER MORPH =====
function HoverMorph() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Hover Morph</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/hover-morph" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="flex size-24 items-center justify-center bg-brand-500 text-white"
          animate={{
            borderRadius: hovered ? '50%' : '12px',
            rotate: hovered ? 45 : 0,
            scale: hovered ? 1.1 : 1,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <Shuffle className="size-6" />
        </motion.div>
      </div>
    </div>
  );
}

// ===== 70. GRAVITY LIST =====
function GravityList() {
  const [items, setItems] = useState<string[]>([]);
  const addItem = () => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Gravity List</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/gravity-list" />
      </div>
      <div className={sectionCard}>
        <button onClick={addItem} className="mb-3 rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Add Item</button>
        <div className="space-y-1">
          <AnimatePresence>
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.05 }}
                className="rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:bg-white/5 dark:text-gray-300"
              >
                {item}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ===== 71. GLITCH TEXT =====
function GlitchText() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Glitch Text</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/glitch-text" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative">
          <motion.span
            className="text-2xl font-bold text-gray-800 dark:text-white"
            animate={{ x: [0, -2, 2, -1, 0], textShadow: ['2px 0 #f04438', '-2px 0 #465fff', '0 0 transparent'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' as const }}
          >
            GLITCH
          </motion.span>
        </div>
      </div>
    </div>
  );
}

// ===== 72. WAVE TEXT =====
function WaveText() {
  const text = 'Wave Text';
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Wave Text</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/wave-text" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="flex">
          {text.split('').map((char, i) => (
            <motion.span
              key={i}
              className="text-xl font-bold text-brand-500"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.1, ease: 'easeInOut' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 73. SPRING BUTTON =====
function SpringButton() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Spring Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/spring-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.button
          className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white"
          animate={clicked ? { scale: [1, 0.85, 1.1, 0.95, 1.02, 1] } : {}}
          transition={{ duration: 0.5 }}
          onClick={() => { setClicked(true); setTimeout(() => setClicked(false), 600); }}
        >
          <Zap className="mr-2 inline size-4" />Spring Bounce
        </motion.button>
      </div>
    </div>
  );
}

// ===== 74. PARTICLE BUTTON =====
function ParticleButton() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const nextId = useRef(0);
  const emit = () => {
    const ps = Array.from({ length: 8 }, (_, i) => ({
      id: nextId.current++,
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
    }));
    setParticles(ps);
    setTimeout(() => setParticles([]), 1000);
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Particle Button</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/particle-button" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative">
          <motion.button
            className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white"
            onClick={emit}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="mr-2 inline size-4" />Emit Particles
          </motion.button>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute left-1/2 top-1/2 size-2 rounded-full bg-brand-400"
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: p.x, y: p.y, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 75. NEON BORDER =====
function NeonBorder() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Neon Border</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/neon-border" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          className="rounded-lg border-2 border-brand-500 px-6 py-4"
          animate={{
            borderColor: ['#465fff', '#12b76a', '#f79009', '#465fff'],
            boxShadow: ['0 0 10px rgba(70,95,255,0.4)', '0 0 10px rgba(18,183,106,0.4)', '0 0 10px rgba(247,144,9,0.4)', '0 0 10px rgba(70,95,255,0.4)'],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        >
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Animated neon border glow</p>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 76. MATRIX RAIN =====
function MatrixRain() {
  const cols = Array.from({ length: 12 }, (_, i) => i);
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Matrix Rain</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/matrix-rain" />
      </div>
      <div className={`${sectionCard} overflow-hidden`}>
        <div className="relative flex h-28 justify-around overflow-hidden rounded-lg bg-black font-mono text-xs">
          {cols.map((i) => (
            <motion.div
              key={i}
              className="text-brand-400"
              animate={{ y: ['0%', '200%'] }}
              transition={{ repeat: Infinity, duration: 2 + seededUnit(600 + i) * 2, ease: 'linear', delay: seededUnit(700 + i) * 2 }}
            >
              {Array.from({ length: 8 }, (_, j) => (
                <div key={j} style={{ opacity: 1 - j * 0.12 }}>{chars[(i * 7 + j * 13) % chars.length]}</div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 77. BLUR REVEAL CONTENT =====
function BlurRevealContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Blur Reveal Content</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/blur-reveal-content" />
      </div>
      <div className={sectionCard}>
        <motion.div
          ref={ref}
          initial={{ filter: 'blur(12px)', opacity: 0, scale: 0.95 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="rounded-lg bg-brand-50 p-4 text-center dark:bg-brand-500/10"
        >
          <Eye className="mx-auto size-6 text-brand-500" />
          <p className="mt-2 text-sm text-brand-500">Content revealed from blur</p>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 78. SCALE REVEAL =====
function ScaleReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Scale Reveal</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/scale-reveal" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <motion.div
          ref={ref}
          className="flex size-28 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 text-white"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        >
          <ArrowUpRight className="size-8" />
        </motion.div>
      </div>
    </div>
  );
}

// ===== 79. SLIDE REVEAL =====
function SlideReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Slide Reveal</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/slide-reveal" />
      </div>
      <div className={sectionCard}>
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="rounded-lg border border-brand-200 bg-brand-50 p-4 dark:border-brand-500/20 dark:bg-brand-500/10"
        >
          <p className="text-sm text-brand-500">Slid in from the left edge</p>
        </motion.div>
      </div>
    </div>
  );
}

// ===== 80. FADE GRID =====
function FadeGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Fade Grid</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/fade-grid" />
      </div>
      <div className={sectionCard}>
        <div ref={ref} className="grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="h-10 rounded-lg bg-brand-500"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ opacity: 0.4 + (i / 8) * 0.6 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 81. STAGGER CARDS =====
function StaggerCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Stagger Cards</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/stagger-cards" />
      </div>
      <div className={sectionCard}>
        <div ref={ref} className="flex gap-2">
          {Array.from({ length: 4 }, (_, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 p-3 text-center text-white"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
            >
              <p className="text-xs font-medium">Card {i + 1}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 82. ZOOM GALLERY =====
function ZoomGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const colors = ['from-brand-400 to-brand-600', 'from-purple-400 to-purple-600', 'from-success-400 to-success-600', 'from-warning-400 to-warning-600'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Zoom Gallery</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/zoom-gallery" />
      </div>
      <div className={sectionCard}>
        <div className="grid grid-cols-2 gap-2">
          {colors.map((c, i) => (
            <motion.div
              key={i}
              className={`h-20 cursor-pointer rounded-lg bg-gradient-to-br ${c}`}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(selected === i ? null : i)}
              layout
            />
          ))}
        </div>
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className={`mt-2 h-24 rounded-lg bg-gradient-to-br ${colors[selected]}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ===== 83. SWIPE DECK =====
function SwipeDeck() {
  const [cards, setCards] = useState(['Card 1', 'Card 2', 'Card 3']);
  const [direction, setDirection] = useState(0);
  const remove = (dir: number) => {
    setDirection(dir);
    setCards((prev) => prev.slice(1));
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Swipe Deck</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/swipe-deck" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="relative h-36 w-56">
          <AnimatePresence custom={direction}>
            {cards.map((card, i) => (
              <motion.div
                key={card}
                className="absolute inset-x-0 top-0 flex h-32 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-lg dark:border-white/5 dark:bg-gray-dark dark:text-gray-300"
                style={{ zIndex: cards.length - i }}
                initial={{ scale: 1 - i * 0.05, y: i * 8 }}
                animate={{ scale: 1 - i * 0.05, y: i * 8 }}
                exit={{ x: direction > 0 ? 200 : -200, opacity: 0, rotate: direction > 0 ? 15 : -15 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-medium">{card}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {cards.length > 0 && (
          <div className="flex gap-2">
            <button onClick={() => remove(-1)} className="rounded-lg bg-error-500 px-3 py-1.5 text-sm text-white">Skip</button>
            <button onClick={() => remove(1)} className="rounded-lg bg-success-500 px-3 py-1.5 text-sm text-white">Like</button>
          </div>
        )}
        {cards.length === 0 && <button onClick={() => setCards(['Card 1', 'Card 2', 'Card 3'])} className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Reset</button>}
      </div>
    </div>
  );
}

// ===== 84. BOUNCING DOTS =====
function BouncingDots() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Bouncing Dots</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/bouncing-dots" />
      </div>
      <div className={`${sectionCard} flex flex-col items-center gap-3`}>
        <div className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-4 py-3 dark:bg-white/5">
          <motion.div className="size-2.5 rounded-full bg-gray-400" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
          <motion.div className="size-2.5 rounded-full bg-gray-400" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }} />
          <motion.div className="size-2.5 rounded-full bg-gray-400" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }} />
          <span className="ml-2 text-xs text-gray-500">typing...</span>
        </div>
      </div>
    </div>
  );
}

// ===== 85. ROTATING TEXT =====
function RotatingText() {
  const words = ['Amazing', 'Creative', 'Modern', 'Powerful'];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Rotating Text</h4>
        <ViewSourceLink sourceSlug="/source/advanced-ui/rotating-text" />
      </div>
      <div className={sectionCard}>
        <div className="flex items-center gap-2 text-lg">
          <span className="text-gray-700 dark:text-gray-300">We are</span>
          <div className="relative h-8 w-28 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[idx]}
                className="absolute inset-0 flex items-center font-bold text-brand-500"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== MAIN COMPONENT =====
export function AdvancedUIElements() {
  const prefersReduced = useReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReduced ? 'user' : 'never'}>
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">Advanced UI Elements</h2>
          <p className="mt-1 text-sm text-gray-500">Explore 50+ modern animated UI components with framer-motion</p>
        </div>
        <Link href="/source/advanced-ui/glow-button" className="inline-flex items-center gap-2 rounded-lg bg-[#1e1e2e] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2d2d3f] transition-colors">
          <Code2 className="size-4" /> View Source Code
        </Link>
      </div>

      {/* Section 1: Counter & Numbers */}
      <div>
        <h2 className={sectionHeading}>Counter & Numbers</h2>
        <div className={grid3}>
          <AnimatedCounter target={5280} />
          <AnimatedCounter target={99} duration={1} />
          <AnimatedCounter target={250000} />
        </div>
      </div>

      {/* Section 2: Card Animations */}
      <div>
        <h2 className={sectionHeading}>Card Animations</h2>
        <div className={grid3}>
          <RevealCard />
          <ParallaxCard />
          <SpotlightCard />
          <GradientBorderCard />
          <GlassCard />
          <FlipCard />
        </div>
      </div>

      {/* Section 3: Button Effects */}
      <div>
        <h2 className={sectionHeading}>Button Effects</h2>
        <div className={grid4}>
          <GlowButton />
          <RippleButton />
          <MagneticButton />
          <WobbleButton />
          <ConfettiButton />
        </div>
      </div>

      {/* Section 4: Loading & Progress */}
      <div>
        <h2 className={sectionHeading}>Loading & Progress</h2>
        <div className={grid3}>
          <ShimmerLoader />
          <RotatingLoader />
          <InfiniteScrollLoader />
          <ProgressCircleAnimated />
          <ProgressStepAnimated />
          <PullToRefresh />
        </div>
      </div>

      {/* Section 5: Text Effects */}
      <div>
        <h2 className={sectionHeading}>Text Effects</h2>
        <div className={grid3}>
          <TypewriterText />
          <GradientText />
          <BlurReveal />
        </div>
      </div>

      {/* Section 6: Lists & Navigation */}
      <div>
        <h2 className={sectionHeading}>Lists & Navigation</h2>
        <div className={grid3}>
          <StaggerList />
          <StepperNavigation />
          <TabIndicator />
          <SidebarAnimated />
        </div>
      </div>

      {/* Section 7: Visual Effects */}
      <div>
        <h2 className={sectionHeading}>Visual Effects</h2>
        <div className={grid4}>
          <WaveBackground />
          <NeonGlow />
          <ScaleHover />
          <JelloEffect />
          <FadeInImage />
          <PulseDot />
          <BounceNotification />
          <MorphingIcon />
        </div>
      </div>

      {/* Section 8: Feedback Animations */}
      <div>
        <h2 className={sectionHeading}>Feedback Animations</h2>
        <div className={grid3}>
          <SuccessAnimation />
          <ErrorBoundaryFallback />
          <ToastStack />
        </div>
      </div>

      {/* Section 9: Form Controls */}
      <div>
        <h2 className={sectionHeading}>Form Controls</h2>
        <div className={grid4}>
          <ToggleSwitchAnimated />
          <CheckboxAnimated />
          <RadioAnimated />
          <ExpandableSearch />
        </div>
      </div>

      {/* Section 10: Overlays & Panels */}
      <div>
        <h2 className={sectionHeading}>Overlays & Panels</h2>
        <div className={grid3}>
          <SlideUpModal />
          <SlideInPanel />
          <DrawerAnimated />
          <DropdownMenuAnimated />
          <PopoverAnimated />
          <TooltipAnimated />
          <AccordionAnimated />
        </div>
      </div>

      {/* Section 11: Gestures */}
      <div>
        <h2 className={sectionHeading}>Gestures</h2>
        <div className={grid3}>
          <DraggableCard />
          <SwipeableListItem />
          <FloatingActionButton />
        </div>
      </div>

      {/* Section 12: 3D & Depth */}
      <div>
        <h2 className={sectionHeading}>3D & Depth</h2>
        <div className={grid3}>
          <ThreeDCard />
          <TiltCard />
          <PhysicsCard />
        </div>
      </div>

      {/* Section 13: Background Effects */}
      <div>
        <h2 className={sectionHeading}>Background Effects</h2>
        <div className={grid3}>
          <ParticleBackground />
          <GradientMesh />
          <AuroraBackground />
          <MatrixRain />
        </div>
      </div>

      {/* Section 14: Advanced Buttons */}
      <div>
        <h2 className={sectionHeading}>Advanced Buttons</h2>
        <div className={grid4}>
          <LiquidButton />
          <FireworkButton />
          <SpringButton />
          <ParticleButton />
        </div>
      </div>

      {/* Section 15: Advanced Text */}
      <div>
        <h2 className={sectionHeading}>Advanced Text</h2>
        <div className={grid3}>
          <TypingEffect />
          <GlitchText />
          <WaveText />
          <MarqueeText />
          <RotatingText />
        </div>
      </div>

      {/* Section 16: Advanced Loaders */}
      <div>
        <h2 className={sectionHeading}>Advanced Loaders</h2>
        <div className={grid3}>
          <OrbitLoader />
          <DNAHelix />
          <CounterWheel />
          <BouncingDots />
        </div>
      </div>

      {/* Section 17: Interactive Cards */}
      <div>
        <h2 className={sectionHeading}>Interactive Cards</h2>
        <div className={grid3}>
          <BreathingCard />
          <HoverMorph />
          <MorphingShape />
          <NeonBorder />
        </div>
      </div>

      {/* Section 18: Layouts & Grids */}
      <div>
        <h2 className={sectionHeading}>Layouts & Grids</h2>
        <div className={grid3}>
          <MasonryGrid />
          <FadeGrid />
          <StaggerCards />
          <ZoomGallery />
        </div>
      </div>

      {/* Section 19: Reveal Animations */}
      <div>
        <h2 className={sectionHeading}>Reveal Animations</h2>
        <div className={grid3}>
          <BlurRevealContent />
          <ScaleReveal />
          <SlideReveal />
        </div>
      </div>

      {/* Section 20: Advanced Forms */}
      <div>
        <h2 className={sectionHeading}>Advanced Forms</h2>
        <div className={grid3}>
          <ElasticInput />
          <ElasticSlider />
        </div>
      </div>

      {/* Section 21: Decks & Lists */}
      <div>
        <h2 className={sectionHeading}>Decks & Lists</h2>
        <div className={grid3}>
          <SwipeDeck />
          <GravityList />
        </div>
      </div>
    </div>
    </MotionConfig>
  );
}

export default AdvancedUIElements;

/* ═══════════════════════════════════════════════════════════════
   NEW ADVANCED UI (145 additional components)
   ═══════════════════════════════════════════════════════════════ */




















































































































































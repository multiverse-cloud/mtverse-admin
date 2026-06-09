'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { hasSourceData } from '@/data/source-code/available';
import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  X,
  Plus,
  Download,
  Mail,
  Heart,
  Search,
  Settings,
  Bell,
  Trash2,
  Edit3,
  Eye,
  Star,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  BarChart3,
  Home,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  Loader2,
  Package,
  User,
  Code2,
  MessageSquare,
  Clock,
  FileText,
  Upload,
  Palette,
  Minus,
  GripVertical,
  ArrowRight,
  MoreHorizontal,
  Layout,
  Zap,
  Activity,
  Monitor,
  MousePointer,
  Maximize2,
  ChevronsUpDown,
  Type,
  Hash,
  Command,
  Sparkles,
  Link2,
  ChevronDown,
  ChevronUp,
  Folder,
  Filter,
  FileCode,
  Shield,
  Globe,
  Cpu,
  Wifi,
  Camera,
  MapPin,
  Calendar,
  Phone,
  Lock,
  Tag,
  Bookmark,
  Layers,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Frame,
  Image,
  Music,
  Video,
  Volume2,
} from 'lucide-react';

/* ───────────────────── Shared Wrappers ───────────────────── */

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
          <GeneratedUIElementPreview title={title} sourceSlug={sourceSlug} />
        ) : (
          children
        )}
      </div>
    </div>
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

function GeneratedUIElementPreview({ title, sourceSlug }: { title: string; sourceSlug?: string }) {
  const slug = sourceSlug?.split('/').pop() ?? title.toLowerCase().replace(/\s+/g, '-');
  const seed = hashValue(slug);
  const color = ['#465fff', '#12b76a', '#f79009', '#0ba5ec', '#9e77ed', '#f04438'][seed % 6];
  const accent = ['#12b76a', '#f79009', '#0ba5ec', '#9e77ed', '#f04438', '#465fff'][(seed + 2) % 6];
  const kind = getUIElementPreviewKind(slug);

  return (
    <div className="space-y-4" data-generated-preview-kind={kind}>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
          {renderUIElementIcon(kind, color)}
          {kind}
        </span>
        <span className="rounded-md bg-gray-50 px-2 py-1 font-mono text-[10px] text-gray-400 dark:bg-white/5">
          {slug}
        </span>
      </div>
      {renderUIElementPreview(kind, title, color, accent, seed)}
    </div>
  );
}

function getUIElementPreviewKind(slug: string) {
  if (/(button|dropdown|menu|toggle|switch|stepper|slider|picker|segmented)/.test(slug)) return 'Control';
  if (/(input|form|textarea|select|search|upload|editor|field|tag)/.test(slug)) return 'Form element';
  if (/(table|chart|metric|stat|progress|timeline|calendar|list|activity)/.test(slug)) return 'Data display';
  if (/(card|modal|drawer|panel|sheet|container|layout|grid|stack)/.test(slug)) return 'Surface';
  if (/(alert|toast|badge|status|notification|banner|message|empty)/.test(slug)) return 'Feedback';
  if (/(avatar|profile|user|team|comment|mention|social)/.test(slug)) return 'People';
  if (/(image|video|audio|file|map|media|gallery|icon)/.test(slug)) return 'Media';
  if (/(breadcrumb|nav|tab|pagination|sidebar|header|command)/.test(slug)) return 'Navigation';
  return 'Utility';
}

function renderUIElementIcon(kind: string, color: string) {
  const iconClass = 'size-3.5';
  if (kind === 'Control') return <MousePointer className={iconClass} style={{ color }} />;
  if (kind === 'Form element') return <Edit3 className={iconClass} style={{ color }} />;
  if (kind === 'Data display') return <BarChart3 className={iconClass} style={{ color }} />;
  if (kind === 'Surface') return <Layout className={iconClass} style={{ color }} />;
  if (kind === 'Feedback') return <Bell className={iconClass} style={{ color }} />;
  if (kind === 'People') return <Users className={iconClass} style={{ color }} />;
  if (kind === 'Media') return <Image className={iconClass} style={{ color }} />;
  if (kind === 'Navigation') return <ArrowRight className={iconClass} style={{ color }} />;
  return <Sparkles className={iconClass} style={{ color }} />;
}

function renderUIElementPreview(kind: string, title: string, color: string, accent: string, seed: number) {
  if (kind === 'Control') {
    return (
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="mb-4 flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm dark:bg-gray-900">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{title}</span>
          <span className="h-5 w-10 rounded-full p-0.5" style={{ backgroundColor: color }}>
            <span className="block size-4 rounded-full bg-white" style={{ marginLeft: seed % 2 ? 18 : 0 }} />
          </span>
        </div>
        <div className="flex gap-2">
          {['Primary', 'Secondary', 'Quiet'].map((label, index) => (
            <button
              key={label}
              className="rounded-md px-3 py-1.5 text-xs font-semibold"
              style={{ backgroundColor: index === 0 ? color : `${color}18`, color: index === 0 ? '#fff' : color }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'Form element') {
    return (
      <div className="space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="h-9 rounded-md border bg-white px-3 py-2 dark:bg-gray-900" style={{ borderColor: `${color}88` }}>
          <div className="h-2.5 w-2/3 rounded-full" style={{ backgroundColor: `${color}55` }} />
        </div>
        <div className="h-9 rounded-md border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-gray-900">
          <div className="h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-white/15" />
        </div>
        <button className="w-full rounded-md py-2 text-xs font-semibold text-white" style={{ backgroundColor: accent }}>
          Save {title}
        </button>
      </div>
    );
  }

  if (kind === 'Data display') {
    return (
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="mb-3 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white/90">{(seed % 900) + 100}</p>
          </div>
          <span className="rounded-md px-2 py-1 text-xs font-medium" style={{ backgroundColor: `${accent}22`, color: accent }}>
            +{(seed % 8) + 2}%
          </span>
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[42, 70, 50, 86, 64, 78].map((height, index) => (
            <span key={index} className="flex-1 rounded-t" style={{ height: `${(height + seed + index * 5) % 58 + 28}%`, backgroundColor: index % 2 ? `${accent}99` : color }} />
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'Surface') {
    return (
      <div className="relative h-28 overflow-hidden rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="absolute rounded-lg border border-white/60 shadow-sm dark:border-white/10"
            style={{
              width: 118 - index * 8,
              height: 58,
              left: 20 + index * 38,
              top: 16 + index * 10,
              backgroundColor: index === 0 ? `${color}dd` : index === 1 ? `${accent}dd` : '#fff',
            }}
          />
        ))}
      </div>
    );
  }

  if (kind === 'Feedback') {
    return (
      <div className="space-y-2 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        {[color, accent, '#98a2b3'].map((tone, index) => (
          <div key={`${tone}-${index}`} className="flex items-center gap-3 rounded-md bg-white px-3 py-2 shadow-sm dark:bg-gray-900">
            <span className="size-2.5 rounded-full" style={{ backgroundColor: tone }} />
            <span className="h-2 flex-1 rounded-full" style={{ backgroundColor: `${tone}33` }} />
            <span className="text-[10px] font-medium text-gray-400">{index === 0 ? 'New' : 'Seen'}</span>
          </div>
        ))}
      </div>
    );
  }

  if (kind === 'People') {
    return (
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        {[0, 1, 2].map((index) => (
          <div key={index} className="mb-2 flex items-center gap-3 rounded-md bg-white p-2 shadow-sm last:mb-0 dark:bg-gray-900">
            <span className="flex size-8 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: index % 2 ? accent : color }}>
              {title.split(' ').map((part) => part[0]).join('').slice(0, 2)}
            </span>
            <span className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-white/15" />
            <span className="size-2 rounded-full bg-success-500" />
          </div>
        ))}
      </div>
    );
  }

  if (kind === 'Media') {
    return (
      <div className="grid grid-cols-3 gap-2 rounded-lg bg-gray-50 p-3 dark:bg-white/5">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`${index === 0 ? 'col-span-2 row-span-2 h-24' : 'h-11'} flex items-center justify-center rounded-md text-white`}
            style={{ background: `linear-gradient(135deg, ${index % 2 ? accent : color}, ${index % 2 ? color : accent})` }}
          >
            {index === 0 && <Image className="size-5" />}
          </div>
        ))}
      </div>
    );
  }

  if (kind === 'Navigation') {
    return (
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="flex gap-2">
          {['Overview', 'Details', 'Activity'].map((label, index) => (
            <span
              key={label}
              className="rounded-md px-3 py-1.5 text-xs font-semibold"
              style={{ backgroundColor: index === seed % 3 ? color : `${color}18`, color: index === seed % 3 ? '#fff' : color }}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <Home className="size-3.5" />
          <ChevronRight className="size-3" />
          <span>{title}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className={`${index % 3 === 0 ? 'col-span-2' : ''} h-10 rounded-md`} style={{ backgroundColor: index % 2 ? `${accent}33` : `${color}33`, border: `1px solid ${index % 2 ? accent : color}` }} />
        ))}
      </div>
    </div>
  );
}

/* ───────────────────── 1. Alerts ───────────────────── */

function AlertsSection() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const dismiss = (id: string) => setDismissed((p) => ({ ...p, [id]: true }));

  const alerts = [
    { id: 'info', bg: 'bg-blue-light-50 dark:bg-blue-light-500/10', icon: Info, iconColor: 'text-blue-light-500', title: 'Info Alert', desc: 'This is an informational message for your attention.' },
    { id: 'success', bg: 'bg-success-50 dark:bg-success-500/10', icon: CheckCircle, iconColor: 'text-success-500', title: 'Success Alert', desc: 'Your changes have been saved successfully.' },
    { id: 'warning', bg: 'bg-warning-50 dark:bg-warning-500/10', icon: AlertTriangle, iconColor: 'text-warning-500', title: 'Warning Alert', desc: 'Please review before proceeding further.' },
    { id: 'error', bg: 'bg-error-50 dark:bg-error-500/10', icon: XCircle, iconColor: 'text-error-500', title: 'Error Alert', desc: 'Something went wrong. Please try again later.' },
  ];

  return (
    <SectionCard title="Alerts" sourceSlug="/source/ui-elements/alerts">
      <div className="space-y-3">
        {alerts.map((a) => !dismissed[a.id] && (
          <div key={a.id} className={`flex items-start gap-3 rounded-lg p-4 ${a.bg}`}>
            <a.icon className={`mt-0.5 size-5 shrink-0 ${a.iconColor}`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">{a.title}</p>
              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{a.desc}</p>
            </div>
            <button onClick={() => dismiss(a.id)} className="shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <X className="size-4" />
            </button>
          </div>
        ))}
        {Object.keys(dismissed).length === 4 && (
          <button onClick={() => setDismissed({})} className="text-sm font-medium text-brand-500 hover:text-brand-600">
            Reset Alerts
          </button>
        )}
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 2. Badges ───────────────────── */

function BadgesSection() {
  const [removable, setRemovable] = useState(['React', 'TypeScript', 'Tailwind']);

  const badges = [
    { label: 'Default', cls: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
    { label: 'Brand', cls: 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400' },
    { label: 'Success', cls: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500' },
    { label: 'Warning', cls: 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-500' },
    { label: 'Error', cls: 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500' },
    { label: 'Info', cls: 'bg-blue-light-50 text-blue-light-600 dark:bg-blue-light-500/15 dark:text-blue-light-500' },
  ];

  const dotBadges = [
    { label: 'Active', dot: 'bg-success-500' },
    { label: 'Pending', dot: 'bg-warning-500' },
    { label: 'Inactive', dot: 'bg-gray-400' },
  ];

  return (
    <SectionCard title="Badges" sourceSlug="/source/ui-elements/badges">
      <div className="space-y-4">
        {/* Color badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span key={b.label} className={`inline-flex items-center rounded-full px-3 py-1 text-theme-xs font-medium ${b.cls}`}>
              {b.label}
            </span>
          ))}
        </div>
        {/* Dot badges */}
        <div className="flex flex-wrap gap-2">
          {dotBadges.map((b) => (
            <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-theme-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              <span className={`size-2 rounded-full ${b.dot}`} />
              {b.label}
            </span>
          ))}
        </div>
        {/* Removable badges */}
        <div className="flex flex-wrap gap-2">
          {removable.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-theme-xs font-medium text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
              {tag}
              <button onClick={() => setRemovable((p) => p.filter((t) => t !== tag))} className="hover:text-brand-800 dark:hover:text-brand-300">
                <X className="size-3" />
              </button>
            </span>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 3. Buttons ───────────────────── */

function ButtonsSection() {
  const [loading, setLoading] = useState(false);
  const simulate = () => { setLoading(true); setTimeout(() => setLoading(false), 2000); };

  return (
    <SectionCard title="Buttons" sourceSlug="/source/ui-elements/buttons">
      <div className="space-y-5">
        {/* Variants */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Variants</p>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-theme-sm hover:bg-brand-600 active:bg-brand-700 transition-colors">Primary</button>
            <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-sm border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">Secondary</button>
            <button className="rounded-lg border border-brand-500 px-5 py-2.5 text-sm font-medium text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">Outline</button>
            <button className="rounded-lg bg-error-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-error-600 transition-colors">Danger</button>
            <button className="rounded-lg bg-success-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
          </div>
        </div>
        {/* Sizes */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Sizes</p>
          <div className="flex flex-wrap items-center gap-2">
            <button className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600 transition-colors">Small</button>
            <button className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Medium</button>
            <button className="rounded-lg bg-brand-500 px-7 py-3 text-base font-medium text-white hover:bg-brand-600 transition-colors">Large</button>
          </div>
        </div>
        {/* With Icons */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Icons</p>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"><Plus className="size-4" /> Add Item</button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors">Download <Download className="size-4" /></button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"><Mail className="size-4" /> Send Email</button>
          </div>
        </div>
        {/* Icon Only */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Icon Only</p>
          <div className="flex flex-wrap gap-2">
            <button className="flex size-10 items-center justify-center rounded-lg bg-brand-500 text-white hover:bg-brand-600 transition-colors"><Heart className="size-4" /></button>
            <button className="flex size-10 items-center justify-center rounded-lg bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors"><Search className="size-4" /></button>
            <button className="flex size-10 items-center justify-center rounded-lg bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-white/10 dark:hover:bg-gray-700 transition-colors"><Settings className="size-4" /></button>
            <button className="flex size-10 items-center justify-center rounded-lg bg-error-500 text-white hover:bg-error-600 transition-colors"><Trash2 className="size-4" /></button>
          </div>
        </div>
        {/* Button Group */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Button Group</p>
          <div className="inline-flex rounded-lg border border-gray-300 dark:border-white/10 overflow-hidden">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors border-r border-gray-300 dark:border-white/10">Left</button>
            <button className="px-4 py-2 text-sm font-medium text-brand-500 bg-brand-50 hover:bg-brand-100 dark:bg-brand-500/15 dark:text-brand-400 transition-colors border-r border-gray-300 dark:border-white/10">Center</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">Right</button>
          </div>
        </div>
        {/* Loading & Disabled */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Loading &amp; Disabled</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={simulate} disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
              {loading && <Loader2 className="size-4 animate-spin" />}
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button disabled className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white opacity-50 cursor-not-allowed">Disabled</button>
            <button disabled className="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500">Disabled</button>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 4. Cards ───────────────────── */

function CardsSection() {
  return (
    <SectionCard title="Cards" sourceSlug="/source/ui-elements/cards">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Basic Card */}
        <div className="rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark overflow-hidden">
          <div className="border-b border-gray-100 px-5 py-4 dark:border-white/5">
            <h4 className="font-semibold text-gray-800 dark:text-white/90">Basic Card</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Card subtitle</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">This is a basic card with a title, body content, and footer section. Cards are versatile containers.</p>
          </div>
          <div className="border-t border-gray-100 px-5 py-3 dark:border-white/5 flex justify-end gap-2">
            <button className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 transition-colors">Cancel</button>
            <button className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600 transition-colors">Confirm</button>
          </div>
        </div>

        {/* Stat Card */}
        <div className="rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
              <p className="mt-1 text-2xl font-bold text-gray-800 dark:text-white/90">$45,231</p>
              <div className="mt-2 flex items-center gap-1 text-xs font-medium text-success-500">
                <TrendingUp className="size-3.5" /> +20.9%
              </div>
            </div>
            <div className="flex size-12 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/15">
              <DollarSign className="size-6 text-brand-500" />
            </div>
          </div>
        </div>

        {/* Metric Card */}
        <div className="rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark p-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Users</p>
          <p className="mt-1 text-3xl font-bold text-gray-800 dark:text-white/90">12,847</p>
          <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">vs 11,200 last month</p>
          <div className="mt-3 flex items-end gap-0.5 h-8">
            {[40, 55, 35, 65, 50, 70, 45, 80, 60, 75, 90, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-brand-500" style={{ height: `${h}%`, opacity: 0.4 + (i / 12) * 0.6 }} />
            ))}
          </div>
        </div>

        {/* User Card */}
        <div className="rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark p-5">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-lg font-bold text-white">AM</div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white/90">Alex Morgan</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Senior Developer</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-gray-50 px-2 py-2 dark:bg-white/5">
              <p className="text-lg font-bold text-gray-800 dark:text-white/90">142</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Projects</p>
            </div>
            <div className="rounded-lg bg-gray-50 px-2 py-2 dark:bg-white/5">
              <p className="text-lg font-bold text-gray-800 dark:text-white/90">8.9K</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Followers</p>
            </div>
            <div className="rounded-lg bg-gray-50 px-2 py-2 dark:bg-white/5">
              <p className="text-lg font-bold text-gray-800 dark:text-white/90">4.8</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Rating</p>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="rounded-lg border-2 border-brand-500 bg-white dark:bg-gray-dark p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-brand-500 px-3 py-0.5 text-xs font-medium text-white rounded-bl-lg">Popular</div>
          <p className="text-sm font-semibold text-brand-500">Premium</p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-800 dark:text-white/90">$149</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul className="mt-4 space-y-2">
            {['All Dashboard Variants', '500+ Components', 'Priority Support', '12 Months Updates', 'Source Files'].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="size-4 text-success-500 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <button className="mt-5 w-full rounded-lg bg-brand-500 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Get Started</button>
        </div>

        {/* Stat Card - Down trend */}
        <div className="rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Bounce Rate</p>
              <p className="mt-1 text-2xl font-bold text-gray-800 dark:text-white/90">34.2%</p>
              <div className="mt-2 flex items-center gap-1 text-xs font-medium text-error-500">
                <TrendingDown className="size-3.5" /> -2.4%
              </div>
            </div>
            <div className="flex size-12 items-center justify-center rounded-lg bg-warning-50 dark:bg-warning-500/15">
              <BarChart3 className="size-6 text-warning-500" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 5. Dropdowns ───────────────────── */

function DropdownsSection() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (id: string) => setOpen((p) => (p === id ? null : id));

  useEffect(() => {
    const handler = () => setOpen(null);
    if (open) document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [open]);

  return (
    <SectionCard title="Dropdowns" sourceSlug="/source/ui-elements/dropdowns">
      <div className="flex flex-wrap gap-4">
        {/* Basic */}
        <div className="relative">
          <button onClick={(e) => { e.stopPropagation(); toggle('basic'); }} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-white/10 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
            Basic Dropdown <ChevronRight className={`size-4 transition-transform ${open === 'basic' ? 'rotate-90' : ''}`} />
          </button>
          {open === 'basic' && (
            <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/5 dark:bg-gray-800">
              {['Profile', 'Settings', 'Billing', 'Notifications'].map((item) => (
                <button key={item} className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5 transition-colors">{item}</button>
              ))}
            </div>
          )}
        </div>

        {/* With Icons */}
        <div className="relative">
          <button onClick={(e) => { e.stopPropagation(); toggle('icons'); }} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-white/10 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
            With Icons <ChevronRight className={`size-4 transition-transform ${open === 'icons' ? 'rotate-90' : ''}`} />
          </button>
          {open === 'icons' && (
            <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/5 dark:bg-gray-800">
              {[
                { icon: Eye, label: 'View' },
                { icon: Edit3, label: 'Edit' },
                { icon: Download, label: 'Download' },
                { icon: Trash2, label: 'Delete' },
              ].map(({ icon: Icon, label }) => (
                <button key={label} className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5 transition-colors">
                  <Icon className="size-4" /> {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* With Dividers */}
        <div className="relative">
          <button onClick={(e) => { e.stopPropagation(); toggle('dividers'); }} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-white/10 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
            With Dividers <ChevronRight className={`size-4 transition-transform ${open === 'dividers' ? 'rotate-90' : ''}`} />
          </button>
          {open === 'dividers' && (
            <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/5 dark:bg-gray-800">
              <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"><User className="size-4" /> Profile</button>
              <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"><Settings className="size-4" /> Settings</button>
              <div className="my-1 border-t border-gray-100 dark:border-white/5" />
              <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10"><Trash2 className="size-4" /> Delete Account</button>
            </div>
          )}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 6. Modals ───────────────────── */

function ModalsSection() {
  const [modal, setModal] = useState<'sm' | 'md' | 'lg' | null>(null);
  const sizes = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-2xl' };

  return (
    <SectionCard title="Modals" sourceSlug="/source/ui-elements/modals">
      <div className="flex flex-wrap gap-2">
        {(['sm', 'md', 'lg'] as const).map((s) => (
          <button key={s} onClick={() => setModal(s)} className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">
            Open {s.toUpperCase()} Modal
          </button>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setModal(null)} />
          <div className={`relative w-full ${sizes[modal]} rounded-lg bg-white p-6 shadow-theme-lg dark:bg-gray-800`}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Modal Title</h3>
              <button onClick={() => setModal(null)} className="flex size-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300">
                <X className="size-5" />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">This is a {modal.toUpperCase()} sized modal dialog. You can place any content here, including forms, information, or confirmation messages.</p>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setModal(null)} className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:border-white/10 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors">Cancel</button>
              <button onClick={() => setModal(null)} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </SectionCard>
  );
}

/* ───────────────────── 7. Tabs ───────────────────── */

function TabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activePill, setActivePill] = useState(0);

  const tabs = ['Overview', 'Analytics', 'Reports', 'Settings'];
  const pillTabs = ['All', 'Active', 'Inactive', 'Pending'];

  return (
    <SectionCard title="Tabs" sourceSlug="/source/ui-elements/tabs">
      <div className="space-y-6">
        {/* Underline Tabs */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Underline Style</p>
          <div className="flex border-b border-gray-200 dark:border-white/10">
            {tabs.map((t, i) => (
              <button key={t} onClick={() => setActiveTab(i)} className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${activeTab === i ? 'text-brand-500' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
                {t}
                {activeTab === i && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full" />}
              </button>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
            <p className="text-sm text-gray-600 dark:text-gray-400">Content for <span className="font-semibold text-gray-800 dark:text-white/90">{tabs[activeTab]}</span> tab. Switch between tabs to see different content panels.</p>
          </div>
        </div>

        {/* Pill Tabs */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Pill Style</p>
          <div className="inline-flex gap-1 rounded-lg bg-gray-100 p-1 dark:bg-white/5">
            {pillTabs.map((t, i) => (
              <button key={t} onClick={() => setActivePill(i)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${activePill === i ? 'bg-white text-gray-800 shadow-theme-sm dark:bg-gray-700 dark:text-white/90' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
            <p className="text-sm text-gray-600 dark:text-gray-400">Showing <span className="font-semibold text-gray-800 dark:text-white/90">{pillTabs[activePill]}</span> items with pill-style navigation.</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 8. Accordions ───────────────────── */

function AccordionsSection() {
  const [singleOpen, setSingleOpen] = useState<number | null>(0);
  const [multiOpen, setMultiOpen] = useState<Record<number, boolean>>({ 0: true });

  const items = [
    { title: 'What is mtverse admin?', body: 'mtverse admin is a comprehensive admin dashboard template built with Next.js, Tailwind CSS, and modern web technologies. It provides a rich set of UI components and dashboard layouts.' },
    { title: 'How to customize the theme?', body: 'You can customize the theme by modifying the Tailwind CSS configuration and CSS variables. The design system supports light and dark modes with brand color customization.' },
    { title: 'Is it production ready?', body: 'Yes, mtverse admin is built with production-grade code, TypeScript support, and follows best practices for performance, accessibility, and security.' },
  ];

  const toggleSingle = (i: number) => setSingleOpen((p) => (p === i ? null : i));
  const toggleMulti = (i: number) => setMultiOpen((p) => ({ ...p, [i]: !p[i] }));

  return (
    <SectionCard title="Accordions" sourceSlug="/source/ui-elements/accordions">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Single Expand */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Single Expand</p>
          <div className="space-y-2">
            {items.map((item, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-white/5 overflow-hidden">
                <button onClick={() => toggleSingle(i)} className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-800 dark:text-white/90 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  {item.title}
                  <ChevronRight className={`size-4 text-gray-400 transition-transform ${singleOpen === i ? 'rotate-90' : ''}`} />
                </button>
                {singleOpen === i && (
                  <div className="border-t border-gray-100 px-4 py-3 dark:border-white/5">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Multiple Expand */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Multiple Expand</p>
          <div className="space-y-2">
            {items.map((item, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-white/5 overflow-hidden">
                <button onClick={() => toggleMulti(i)} className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-800 dark:text-white/90 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  {item.title}
                  <ChevronRight className={`size-4 text-gray-400 transition-transform ${multiOpen[i] ? 'rotate-90' : ''}`} />
                </button>
                {multiOpen[i] && (
                  <div className="border-t border-gray-100 px-4 py-3 dark:border-white/5">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 9. Tooltips ───────────────────── */

function TooltipsSection() {
  const positions = [
    { label: 'Top', pos: 'top', btnCls: 'col-start-2' },
    { label: 'Right', pos: 'right', btnCls: 'col-start-3' },
    { label: 'Bottom', pos: 'bottom', btnCls: 'col-start-2' },
    { label: 'Left', pos: 'left', btnCls: 'col-start-1' },
  ] as const;

  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const getTooltipClasses = (pos: string) => {
    const base = 'absolute z-50 whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-200 dark:text-gray-800 pointer-events-none transition-opacity';
    switch (pos) {
      case 'top': return `${base} bottom-full left-1/2 -translate-x-1/2 mb-2`;
      case 'bottom': return `${base} top-full left-1/2 -translate-x-1/2 mt-2`;
      case 'left': return `${base} right-full top-1/2 -translate-y-1/2 mr-2`;
      case 'right': return `${base} left-full top-1/2 -translate-y-1/2 ml-2`;
      default: return base;
    }
  };

  return (
    <SectionCard title="Tooltips" sourceSlug="/source/ui-elements/tooltips">
      <div className="flex flex-wrap gap-4">
        {positions.map((p) => (
          <div key={p.label} className="relative" onMouseEnter={() => setHoveredTooltip(p.label)} onMouseLeave={() => setHoveredTooltip(null)}>
            <button className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">
              {p.label}
            </button>
            {hoveredTooltip === p.label && (
              <div className={getTooltipClasses(p.pos)}>
                Tooltip on {p.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 10. Progress Bars ───────────────────── */

function ProgressBarsSection() {
  const bars = [
    { label: 'Default', pct: 65, color: 'bg-brand-500' },
    { label: 'Success', pct: 85, color: 'bg-success-500' },
    { label: 'Warning', pct: 45, color: 'bg-warning-500' },
    { label: 'Error', pct: 30, color: 'bg-error-500' },
  ];

  const circularPct = 72;
  const r = 40;
  const circ = 2 * Math.PI * r;
  const offset = circ - (circularPct / 100) * circ;

  return (
    <SectionCard title="Progress Bars" sourceSlug="/source/ui-elements/progress">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Linear */}
        <div className="space-y-4">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">{b.label}</span>
                <span className="text-gray-500 dark:text-gray-400">{b.pct}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
                <div className={`h-full rounded-full ${b.color} transition-all duration-500`} style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Circular */}
        <div className="flex items-center justify-center gap-6">
          <div className="relative">
            <svg className="size-28 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-100 dark:text-white/10" />
              <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-brand-500" strokeDasharray={circ} strokeDashoffset={offset} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white/90">{circularPct}%</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { label: 'Storage', pct: 72, color: 'text-brand-500' },
              { label: 'Bandwidth', pct: 56, color: 'text-success-500' },
              { label: 'CPU', pct: 89, color: 'text-warning-500' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-sm">
                <span className={`size-2.5 rounded-full ${s.color.replace('text-', 'bg-')} `} />
                <span className="text-gray-600 dark:text-gray-400">{s.label}</span>
                <span className="font-medium text-gray-800 dark:text-white/90">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 11. Spinners ───────────────────── */

function SpinnersSection() {
  return (
    <SectionCard title="Spinners" sourceSlug="/source/ui-elements/spinners">
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-5 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Small</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-[3px] border-brand-500 border-t-transparent" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-12 animate-spin rounded-full-4 border-4 border-brand-500 border-t-transparent" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Large</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-[3px] border-success-500 border-t-transparent" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Success</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-[3px] border-warning-500 border-t-transparent" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Warning</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-[3px] border-error-500 border-t-transparent" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Error</span>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 12. Skeleton Loaders ───────────────────── */

function SkeletonLoadersSection() {
  return (
    <SectionCard title="Skeleton Loaders" sourceSlug="/source/ui-elements/skeletons">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Text Skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-white/10" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
        </div>

        {/* Avatar Skeleton */}
        <div className="flex items-center gap-3">
          <div className="size-12 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-white/10" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
            <div className="h-3 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
          </div>
        </div>

        {/* Card Skeleton */}
        <div className="rounded-lg border border-gray-200 dark:border-white/5 p-4 space-y-3">
          <div className="h-40 animate-pulse rounded-lg bg-gray-200 dark:bg-white/10" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
          <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
        </div>

        {/* Table Skeleton */}
        <div className="space-y-3">
          <div className="flex gap-4">
            <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
            <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
            <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
            <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <div className="h-4 w-1/4 animate-pulse rounded bg-gray-100 dark:bg-white/5" />
              <div className="h-4 w-1/4 animate-pulse rounded bg-gray-100 dark:bg-white/5" />
              <div className="h-4 w-1/4 animate-pulse rounded bg-gray-100 dark:bg-white/5" />
              <div className="h-4 w-1/4 animate-pulse rounded bg-gray-100 dark:bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 13. Avatars ───────────────────── */

function AvatarsSection() {
  const users = [
    { initials: 'AM', bg: 'bg-brand-500', ring: 'ring-brand-500' },
    { initials: 'SC', bg: 'bg-success-500', ring: 'ring-success-500' },
    { initials: 'MJ', bg: 'bg-warning-500', ring: 'ring-warning-500' },
    { initials: 'ED', bg: 'bg-error-500', ring: 'ring-error-500' },
    { initials: 'DW', bg: 'bg-blue-light-500', ring: 'ring-blue-light-500' },
  ];

  return (
    <SectionCard title="Avatars" sourceSlug="/source/ui-elements/avatars">
      <div className="space-y-5">
        {/* Single Avatars */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Individual</p>
          <div className="flex items-center gap-3">
            {users.map((u) => (
              <div key={u.initials} className={`flex size-11 items-center justify-center rounded-full ${u.bg} text-sm font-bold text-white ring-2 ring-offset-2 ring-offset-white ${u.ring} dark:ring-offset-gray-dark`}>
                {u.initials}
              </div>
            ))}
          </div>
        </div>

        {/* Avatar Group */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Group</p>
          <div className="flex items-center -space-x-3">
            {users.map((u) => (
              <div key={u.initials} className={`flex size-10 items-center justify-center rounded-full ${u.bg} text-xs font-bold text-white ring-2 ring-white dark:ring-gray-dark`}>
                {u.initials}
              </div>
            ))}
            <div className="flex size-10 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-600 ring-2 ring-white dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-dark">
              +3
            </div>
          </div>
        </div>

        {/* With Status */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Status</p>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="flex size-11 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">AM</div>
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-success-500 dark:border-gray-dark" />
            </div>
            <div className="relative">
              <div className="flex size-11 items-center justify-center rounded-full bg-warning-500 text-sm font-bold text-white">SC</div>
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-warning-500 dark:border-gray-dark" />
            </div>
            <div className="relative">
              <div className="flex size-11 items-center justify-center rounded-full bg-gray-400 text-sm font-bold text-white">MJ</div>
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-gray-400 dark:border-gray-dark" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 14. Timeline ───────────────────── */

function TimelineSection() {
  const events = [
    { icon: ShoppingCart, color: 'bg-brand-50 text-brand-500 dark:bg-brand-500/15', title: 'New order placed', desc: 'Order #7892 by Sarah Johnson', time: '2 min ago' },
    { icon: Users, color: 'bg-success-50 text-success-500 dark:bg-success-500/15', title: 'New user registered', desc: 'mike.peters@example.com', time: '15 min ago' },
    { icon: DollarSign, color: 'bg-warning-50 text-warning-500 dark:bg-warning-500/15', title: 'Payment received', desc: '$12,500 from Acme Corp', time: '1 hr ago' },
    { icon: Bell, color: 'bg-error-50 text-error-500 dark:bg-error-500/15', title: 'Server alert', desc: 'CPU usage above 85%', time: '2 hrs ago' },
    { icon: Star, color: 'bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/15', title: 'New review', desc: '5-star review from Emily Chen', time: '3 hrs ago' },
  ];

  return (
    <SectionCard title="Timeline" sourceSlug="/source/ui-elements/timelines">
      <div className="relative pl-8">
        {/* Connecting line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200 dark:bg-white/10" />

        <div className="space-y-6">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <div key={i} className="relative flex gap-4">
                <div className={`absolute -left-8 flex size-7 items-center justify-center rounded-full ${e.color}`}>
                  <Icon className="size-3.5" />
                </div>
                <div className="flex-1 min-w-0 pb-1">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white/90">{e.title}</p>
                  <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{e.desc}</p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{e.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 15. Pagination ───────────────────── */

function PaginationSection() {
  const [page, setPage] = useState(3);
  const totalPages = 8;

  return (
    <SectionCard title="Pagination" sourceSlug="/source/ui-elements/pagination">
      <div className="flex items-center gap-1">
        <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
          <ChevronLeft className="size-4" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button key={p} onClick={() => setPage(p)} className={`flex size-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${p === page ? 'bg-brand-500 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5'}`}>
            {p}
          </button>
        ))}
        <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="flex size-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
          <ChevronRight className="size-4" />
        </button>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 16. Toast / Notification ───────────────────── */

interface Toast {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

function ToastSection() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counter = React.useRef(0);

  const addToast = useCallback((type: Toast['type'], message: string) => {
    const id = ++counter.current;
    setToasts((p) => [...p, { id, type, message }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3000);
  }, []);

  const toastStyles: Record<Toast['type'], { bg: string; icon: React.ElementType; iconColor: string }> = {
    success: { bg: 'bg-success-50 dark:bg-success-500/15', icon: CheckCircle, iconColor: 'text-success-500' },
    error: { bg: 'bg-error-50 dark:bg-error-500/15', icon: XCircle, iconColor: 'text-error-500' },
    warning: { bg: 'bg-warning-50 dark:bg-warning-500/15', icon: AlertTriangle, iconColor: 'text-warning-500' },
    info: { bg: 'bg-blue-light-50 dark:bg-blue-light-500/15', icon: Info, iconColor: 'text-blue-light-500' },
  };

  return (
    <SectionCard title="Toast / Notification" sourceSlug="/source/ui-elements/toasts">
      <div className="flex flex-wrap gap-2">
        <button onClick={() => addToast('success', 'Operation completed successfully!')} className="rounded-lg bg-success-500 px-4 py-2 text-sm font-medium text-white hover:bg-success-600 transition-colors">Success</button>
        <button onClick={() => addToast('error', 'Something went wrong!')} className="rounded-lg bg-error-500 px-4 py-2 text-sm font-medium text-white hover:bg-error-600 transition-colors">Error</button>
        <button onClick={() => addToast('warning', 'Please review your input.')} className="rounded-lg bg-warning-500 px-4 py-2 text-sm font-medium text-white hover:bg-warning-600 transition-colors">Warning</button>
        <button onClick={() => addToast('info', 'A new update is available.')} className="rounded-lg bg-blue-light-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-light-600 transition-colors">Info</button>
      </div>

      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2">
        {toasts.map((t) => {
          const style = toastStyles[t.type];
          const Icon = style.icon;
          return (
            <div key={t.id} className={`flex items-center gap-3 rounded-lg px-4 py-3 shadow-theme-lg ${style.bg} animate-in slide-in-from-right`}>
              <Icon className={`size-5 ${style.iconColor}`} />
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">{t.message}</p>
              <button onClick={() => setToasts((p) => p.filter((x) => x.id !== t.id))} className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <X className="size-4" />
              </button>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 17. Breadcrumb ───────────────────── */

function BreadcrumbSection() {
  return (
    <SectionCard title="Breadcrumb" sourceSlug="/source/ui-elements/breadcrumb">
      <div className="space-y-3">
        <nav className="flex items-center gap-1 text-sm">
          <a href="#" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"><Home className="size-4" /></a>
          <ChevronRight className="size-3.5 text-gray-400" />
          <a href="#" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Components</a>
          <ChevronRight className="size-3.5 text-gray-400" />
          <span className="font-medium text-gray-800 dark:text-white/90">UI Elements</span>
        </nav>

        <nav className="flex items-center gap-1.5 text-sm">
          <a href="#" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Home</a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <a href="#" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Dashboard</a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <a href="#" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Analytics</a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <span className="font-medium text-gray-800 dark:text-white/90">Reports</span>
        </nav>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 18. Empty States ───────────────────── */

function EmptyStatesSection() {
  return (
    <SectionCard title="Empty States" sourceSlug="/source/ui-elements/empty-states">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* No Data */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-white/10 py-12 px-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5">
            <Package className="size-8 text-gray-400" />
          </div>
          <h4 className="mt-4 text-base font-semibold text-gray-800 dark:text-white/90">No Data Found</h4>
          <p className="mt-1 max-w-xs text-sm text-gray-500 dark:text-gray-400">There are no items to display. Start by adding your first item.</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors"><Plus className="size-4" /> Add Item</button>
        </div>

        {/* No Results */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-white/10 py-12 px-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5">
            <Search className="size-8 text-gray-400" />
          </div>
          <h4 className="mt-4 text-base font-semibold text-gray-800 dark:text-white/90">No Results</h4>
          <p className="mt-1 max-w-xs text-sm text-gray-500 dark:text-gray-400">Your search did not match any results. Try adjusting your search terms.</p>
          <button className="mt-4 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-white/10 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">Clear Filters</button>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 19. Tag Input ───────────────────── */

function TagInputSection() {
  const [tags, setTags] = useState(['Next.js', 'React', 'Tailwind', 'TypeScript']);
  const [input, setInput] = useState('');

  const addTag = () => {
    const v = input.trim();
    if (v && !tags.includes(v)) {
      setTags((p) => [...p, v]);
      setInput('');
    }
  };

  return (
    <SectionCard title="Tag Input" sourceSlug="/source/ui-elements/tag-input">
      <div className="max-w-md">
        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 dark:border-white/10 dark:bg-gray-800">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
              {tag}
              <button onClick={() => setTags((p) => p.filter((t) => t !== tag))} className="hover:text-brand-800 dark:hover:text-brand-300">
                <X className="size-3" />
              </button>
            </span>
          ))}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
            placeholder={tags.length === 0 ? 'Add a tag...' : ''}
            className="flex-1 min-w-[80px] border-0 bg-transparent py-1 text-sm text-gray-800 placeholder-gray-400 outline-none dark:text-white/90 dark:placeholder-gray-500"
          />
        </div>
        <p className="mt-1.5 text-xs text-gray-400">Press Enter to add a tag</p>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 20. Code Block ───────────────────── */

function CodeBlockSection() {
  const [copied, setCopied] = useState(false);
  const code = `const greeting = "Hello, mtverse!";
const features = ["Dashboards", "Components", "Charts"];

features.map((feature) => {
  console.log(greeting + " - " + feature);
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <SectionCard title="Code Block" sourceSlug="/source/ui-elements/code-block">
      <div className="relative max-w-xl">
        <div className="rounded-lg bg-gray-900 dark:bg-gray-950 overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-error-500/80" />
              <span className="size-3 rounded-full bg-warning-500/80" />
              <span className="size-3 rounded-full bg-success-500/80" />
            </div>
            <button onClick={handleCopy} className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className="text-gray-300">
              <span className="text-blue-light-500">const</span>{' '}
              <span className="text-brand-300">greeting</span> ={' '}
              <span className="text-success-400">&quot;Hello, mtverse!&quot;</span>;{'\n'}
              <span className="text-blue-light-500">const</span>{' '}
              <span className="text-brand-300">features</span> = [{'\n'}
              {'  '}<span className="text-success-400">&quot;Dashboards&quot;</span>,{'\n'}
              {'  '}<span className="text-success-400">&quot;Components&quot;</span>,{'\n'}
              {'  '}<span className="text-success-400">&quot;Charts&quot;</span>{'\n'}
              ];{'\n'}
              {'\n'}
              <span className="text-brand-300">features</span>.<span className="text-warning-400">map</span>((<span className="text-brand-300">feature</span>) =&gt; {'{'}{'\n'}
              {'  '}<span className="text-blue-light-500">console</span>.<span className="text-warning-400">log</span>(<span className="text-brand-300">greeting</span> + &quot; - &quot; + <span className="text-brand-300">feature</span>);{'\n'}
              {'}'});
            </code>
          </pre>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 21. Popovers ───────────────────── */

function PopoversSection() {
  const [popoverOpen, setPopoverOpen] = useState<string | null>(null);
  const togglePopover = (id: string) => setPopoverOpen((p) => (p === id ? null : id));

  useEffect(() => {
    const handler = () => setPopoverOpen(null);
    if (popoverOpen) document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [popoverOpen]);

  return (
    <SectionCard title="Popovers" sourceSlug="/source/ui-elements/popovers">
      <div className="flex flex-wrap gap-6">
        {/* Click Popover */}
        <div className="relative">
          <button onClick={(e) => { e.stopPropagation(); togglePopover('click'); }} className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">
            Click Popover
          </button>
          {popoverOpen === 'click' && (
            <div className="absolute left-0 top-full z-50 mt-3 w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/5 dark:bg-gray-800">
              <div className="absolute -top-1.5 left-6 size-3 rotate-45 border-l border-t border-gray-200 bg-white dark:border-white/5 dark:bg-gray-800" />
              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Popover Title</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">This popover appears on click. It can contain any content including forms and actions.</p>
              <div className="mt-3 flex gap-2">
                <button className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600 transition-colors">Action</button>
                <button className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5 transition-colors">Cancel</button>
              </div>
            </div>
          )}
        </div>

        {/* Info Popover */}
        <div className="relative">
          <button onClick={(e) => { e.stopPropagation(); togglePopover('info'); }} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-white/10 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
            <Info className="size-4 text-blue-light-500" /> Info Popover
          </button>
          {popoverOpen === 'info' && (
            <div className="absolute left-0 top-full z-50 mt-3 w-56 rounded-lg border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/5 dark:bg-gray-800">
              <div className="absolute -top-1.5 left-6 size-3 rotate-45 border-l border-t border-gray-200 bg-white dark:border-white/5 dark:bg-gray-800" />
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-light-500">
                <Info className="size-4" /> Information
              </div>
              <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">This is an informational popover with helpful context about the feature.</p>
            </div>
          )}
        </div>

        {/* Confirmation Popover */}
        <div className="relative">
          <button onClick={(e) => { e.stopPropagation(); togglePopover('confirm'); }} className="inline-flex items-center gap-2 rounded-lg bg-error-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-error-600 transition-colors">
            <Trash2 className="size-4" /> Delete
          </button>
          {popoverOpen === 'confirm' && (
            <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-white/5 dark:bg-gray-800">
              <div className="absolute -top-1.5 right-6 size-3 rotate-45 border-l border-t border-gray-200 bg-white dark:border-white/5 dark:bg-gray-800" />
              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Confirm Deletion</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Are you sure you want to delete this item? This action cannot be undone.</p>
              <div className="mt-3 flex gap-2">
                <button onClick={() => setPopoverOpen(null)} className="rounded-lg bg-error-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-error-600 transition-colors">Delete</button>
                <button onClick={() => setPopoverOpen(null)} className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:text-gray-400 transition-colors">Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 22. Typography ───────────────────── */

function TypographySection() {
  return (
    <SectionCard title="Typography" sourceSlug="/source/ui-elements/typography">
      <div className="space-y-6">
        {/* Headings */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Headings</p>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white/90">Heading 1 — Bold &amp; Impactful</h1>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">Heading 2 — Section Title</h2>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">Heading 3 — Subsection</h3>
            <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">Heading 4 — Card Title</h4>
            <h5 className="text-base font-medium text-gray-800 dark:text-white/90">Heading 5 — Small Section</h5>
            <h6 className="text-sm font-medium text-gray-500 dark:text-gray-400">Heading 6 — Caption</h6>
          </div>
        </div>
        {/* Text Sizes */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Text Sizes</p>
          <div className="space-y-1.5">
            <p className="text-xs text-gray-600 dark:text-gray-400">Extra Small — For labels and fine print</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Small — Body text and descriptions</p>
            <p className="text-base text-gray-600 dark:text-gray-400">Base — Default paragraph text</p>
            <p className="text-lg text-gray-600 dark:text-gray-400">Large — Emphasized content</p>
            <p className="text-xl text-gray-800 dark:text-white/90">Extra Large — Featured content</p>
          </div>
        </div>
        {/* Font Weights */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Font Weights</p>
          <div className="flex flex-wrap gap-4">
            <span className="font-light text-gray-600 dark:text-gray-400">Light</span>
            <span className="font-normal text-gray-600 dark:text-gray-400">Regular</span>
            <span className="font-medium text-gray-800 dark:text-white/90">Medium</span>
            <span className="font-semibold text-gray-800 dark:text-white/90">Semibold</span>
            <span className="font-bold text-gray-800 dark:text-white/90">Bold</span>
            <span className="font-extrabold text-gray-800 dark:text-white/90">Extra Bold</span>
          </div>
        </div>
        {/* Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Unordered List</p>
            <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Dashboard analytics overview</li>
              <li>Real-time data visualization</li>
              <li>Customizable widget layouts</li>
              <li>Multi-language support</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Ordered List</p>
            <ol className="ml-4 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Install the package</li>
              <li>Configure your theme</li>
              <li>Build your components</li>
              <li>Deploy to production</li>
            </ol>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 23. Dividers ───────────────────── */

function DividersSection() {
  return (
    <SectionCard title="Dividers" sourceSlug="/source/ui-elements/dividers">
      <div className="space-y-5">
        {/* Simple Divider */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Simple</p>
          <hr className="border-gray-200 dark:border-white/10" />
        </div>
        {/* Dashed Divider */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Dashed</p>
          <hr className="border-dashed border-gray-300 dark:border-white/10" />
        </div>
        {/* Divider with Label */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Label</p>
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-gray-200 dark:border-white/10" />
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-200 dark:border-white/10" />
          </div>
        </div>
        {/* Divider with Icon */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Icon</p>
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-gray-200 dark:border-white/10" />
            <Star className="size-4 text-brand-500" />
            <div className="flex-1 border-t border-gray-200 dark:border-white/10" />
          </div>
        </div>
        {/* Gradient Divider */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Gradient</p>
          <div className="h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 24. Chips ───────────────────── */

function ChipsSection() {
  const [selected, setSelected] = useState<string[]>(['React']);
  const chips = [
    { id: 'react', label: 'React', icon: Code2, color: 'bg-blue-light-50 text-blue-light-600 dark:bg-blue-light-500/15 dark:text-blue-light-500' },
    { id: 'vue', label: 'Vue', icon: Layers, color: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500' },
    { id: 'angular', label: 'Angular', icon: Shield, color: 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500' },
    { id: 'svelte', label: 'Svelte', icon: Zap, color: 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400' },
    { id: 'next', label: 'Next.js', icon: Globe, color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
  ];

  const toggle = (id: string) => setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <SectionCard title="Chips" sourceSlug="/source/ui-elements/chips">
      <div className="space-y-4">
        {/* Action Chips */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Action Chips</p>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <button key={c.id} onClick={() => toggle(c.id)} className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${c.color} ${selected.includes(c.id) ? 'ring-2 ring-offset-1 ring-brand-500/30 dark:ring-offset-gray-dark' : 'opacity-70 hover:opacity-100'}`}>
                <c.icon className="size-3.5" />
                {c.label}
                {selected.includes(c.id) && <Check className="size-3" />}
              </button>
            ))}
          </div>
        </div>
        {/* Static Chips */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Static Chips</p>
          <div className="flex flex-wrap gap-2">
            {['Design', 'Development', 'Marketing', 'Analytics'].map((label) => (
              <span key={label} className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                <Tag className="size-3" /> {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 25. Switches ───────────────────── */

function SwitchesSection() {
  const [switches, setSwitches] = useState<Record<string, boolean>>({ notifications: true, darkMode: false, autoSave: true });

  const toggleSwitch = (key: string) => setSwitches((p) => ({ ...p, [key]: !p[key] }));

  const items = [
    { key: 'notifications', label: 'Notifications', desc: 'Receive push notifications', color: 'bg-brand-500' },
    { key: 'darkMode', label: 'Dark Mode', desc: 'Use dark theme', color: 'bg-gray-800 dark:bg-gray-600' },
    { key: 'autoSave', label: 'Auto Save', desc: 'Automatically save changes', color: 'bg-success-500' },
  ];

  return (
    <SectionCard title="Switches" sourceSlug="/source/ui-elements/switches">
      <div className="space-y-5">
        {/* Labeled Switches */}
        <div className="max-w-md space-y-4">
          {items.map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">{item.label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
              <button onClick={() => toggleSwitch(item.key)} className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${switches[item.key] ? item.color : 'bg-gray-200 dark:bg-gray-700'}`}>
                <span className={`inline-block size-5 rounded-full bg-white shadow-sm transition-transform ${switches[item.key] ? 'translate-x-5.5' : 'translate-x-0.5'} mt-0.5`} />
              </button>
            </div>
          ))}
        </div>
        {/* Color Variants */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Color Variants</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Brand', color: 'bg-brand-500', on: true },
              { label: 'Success', color: 'bg-success-500', on: true },
              { label: 'Warning', color: 'bg-warning-500', on: true },
              { label: 'Error', color: 'bg-error-500', on: true },
            ].map((s) => (
              <button key={s.label} className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${s.on ? s.color : 'bg-gray-200 dark:bg-gray-700'}`}>
                <span className={`inline-block size-5 rounded-full bg-white shadow-sm transition-transform ${s.on ? 'translate-x-5.5' : 'translate-x-0.5'} mt-0.5`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 26. Radio Groups ───────────────────── */

function RadioGroupsSection() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [selectedSize, setSelectedSize] = useState('md');

  return (
    <SectionCard title="Radio Groups" sourceSlug="/source/ui-elements/radio-groups">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plan Selection */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Plan Selection</p>
          <div className="space-y-2">
            {[
              { value: 'free', label: 'Free Plan', desc: '$0/month' },
              { value: 'pro', label: 'Pro Plan', desc: '$29/month' },
              { value: 'enterprise', label: 'Enterprise', desc: '$99/month' },
            ].map((opt) => (
              <label key={opt.value} className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${selectedPlan === opt.value ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-gray-200 hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/5'}`}>
                <div className={`flex size-5 items-center justify-center rounded-full border-2 transition-colors ${selectedPlan === opt.value ? 'border-brand-500' : 'border-gray-300 dark:border-gray-600'}`}>
                  {selectedPlan === opt.value && <div className="size-2.5 rounded-full bg-brand-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">{opt.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{opt.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
        {/* Size Selection */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Size Selection</p>
          <div className="flex gap-2">
            {['sm', 'md', 'lg', 'xl'].map((size) => (
              <label key={size} className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 cursor-pointer transition-colors ${selectedSize === size ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-gray-200 hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/5'}`}>
                <div className={`flex size-4 items-center justify-center rounded-full border-2 transition-colors ${selectedSize === size ? 'border-brand-500' : 'border-gray-300 dark:border-gray-600'}`}>
                  {selectedSize === size && <div className="size-2 rounded-full bg-brand-500" />}
                </div>
                <span className={`text-sm font-medium ${selectedSize === size ? 'text-brand-600 dark:text-brand-400' : 'text-gray-600 dark:text-gray-400'}`}>{size.toUpperCase()}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 27. Checkboxes ───────────────────── */

function CheckboxesSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({ terms: true, newsletter: false, updates: true, analytics: false });
  const toggle = (key: string) => setChecked((p) => ({ ...p, [key]: !p[key] }));
  const allChecked = checked.terms && checked.newsletter && checked.updates && checked.analytics;
  const noneChecked = !checked.terms && !checked.newsletter && !checked.updates && !checked.analytics;

  return (
    <SectionCard title="Checkboxes" sourceSlug="/source/ui-elements/checkboxes">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Individual Checkboxes */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Individual</p>
          <div className="space-y-3">
            {[
              { key: 'terms', label: 'Accept terms and conditions', desc: 'Required to continue' },
              { key: 'newsletter', label: 'Subscribe to newsletter', desc: 'Weekly updates' },
              { key: 'updates', label: 'Product updates', desc: 'New features and fixes' },
              { key: 'analytics', label: 'Usage analytics', desc: 'Help us improve' },
            ].map((item) => (
              <label key={item.key} className="flex items-start gap-3 cursor-pointer">
                <button onClick={() => toggle(item.key)} className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${checked[item.key] ? 'border-brand-500 bg-brand-500' : 'border-gray-300 dark:border-gray-600'}`}>
                  {checked[item.key] && <Check className="size-3 text-white" strokeWidth={3} />}
                </button>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">{item.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
        {/* Indeterminate */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Select All (Indeterminate)</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-gray-200 p-3 dark:border-white/5">
              <button onClick={() => { const next = !allChecked; setChecked({ terms: next, newsletter: next, updates: next, analytics: next }); }} className={`flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${allChecked ? 'border-brand-500 bg-brand-500' : noneChecked ? 'border-gray-300 dark:border-gray-600' : 'border-brand-500 bg-brand-500'}`}>
                {allChecked && <Check className="size-3 text-white" strokeWidth={3} />}
                {!allChecked && !noneChecked && <Minus className="size-3 text-white" strokeWidth={3} />}
              </button>
              <span className="text-sm font-medium text-gray-800 dark:text-white/90">Select All</span>
            </label>
            <p className="text-xs text-gray-400 dark:text-gray-500">{Object.values(checked).filter(Boolean).length} of 4 selected</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 28. Text Inputs ───────────────────── */

function TextInputsSection() {
  return (
    <SectionCard title="Text Inputs" sourceSlug="/source/ui-elements/text-inputs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        {/* Default */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Default Input</label>
          <input type="text" placeholder="Enter your name" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-800 dark:text-white/90 dark:placeholder-gray-500 dark:focus:border-brand-400 transition-colors" />
        </div>
        {/* With Icon */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">With Icon</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input type="email" placeholder="Email address" className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-800 dark:text-white/90 dark:placeholder-gray-500 dark:focus:border-brand-400 transition-colors" />
          </div>
        </div>
        {/* Validation States */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Success State</label>
          <div className="relative">
            <input type="text" defaultValue="valid@email.com" className="w-full rounded-lg border border-success-500 bg-white px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-success-500/20 dark:border-success-500 dark:bg-gray-800 dark:text-white/90 transition-colors" />
            <CheckCircle className="absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-success-500" />
          </div>
          <p className="mt-1 text-xs text-success-500">Email is valid</p>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Error State</label>
          <div className="relative">
            <input type="text" defaultValue="invalid" className="w-full rounded-lg border border-error-500 bg-white px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-error-500/20 dark:border-error-500 dark:bg-gray-800 dark:text-white/90 transition-colors" />
            <XCircle className="absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-error-500" />
          </div>
          <p className="mt-1 text-xs text-error-500">Please enter a valid email</p>
        </div>
        {/* Disabled */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-400 dark:text-gray-500">Disabled Input</label>
          <input type="text" disabled placeholder="Cannot edit" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-400 cursor-not-allowed dark:border-white/5 dark:bg-gray-900 dark:text-gray-600" />
        </div>
        {/* With Helper Text */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">With Helper</label>
          <input type="password" placeholder="Create a password" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-800 dark:text-white/90 dark:placeholder-gray-500 dark:focus:border-brand-400 transition-colors" />
          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">Must be at least 8 characters long</p>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 29. Textareas ───────────────────── */

function TextareasSection() {
  const [text, setText] = useState('');
  const maxChars = 200;
  const remaining = maxChars - text.length;

  return (
    <SectionCard title="Textareas" sourceSlug="/source/ui-elements/textareas">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        {/* Default */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Default Textarea</label>
          <textarea rows={3} placeholder="Write your message..." className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-800 dark:text-white/90 dark:placeholder-gray-500 dark:focus:border-brand-400 resize-none transition-colors" />
        </div>
        {/* With Character Count */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">With Character Count</label>
          <textarea rows={3} value={text} onChange={(e) => setText(e.target.value.slice(0, maxChars))} placeholder="Type here..." className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-800 dark:text-white/90 dark:placeholder-gray-500 dark:focus:border-brand-400 resize-none transition-colors" />
          <div className="mt-1 flex justify-between">
            <p className="text-xs text-gray-400 dark:text-gray-500">Share your thoughts</p>
            <p className={`text-xs ${remaining < 20 ? 'text-warning-500' : remaining < 0 ? 'text-error-500' : 'text-gray-400 dark:text-gray-500'}`}>{text.length}/{maxChars}</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 30. Select Menus ───────────────────── */

function SelectMenusSection() {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const options = ['Dashboard', 'Analytics', 'Reports', 'Settings', 'Users'];
  const [multiSelected, setMultiSelected] = useState<string[]>(['Dashboard', 'Reports']);

  useEffect(() => {
    const handler = () => setOpen(false);
    if (open) document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [open]);

  return (
    <SectionCard title="Select Menus" sourceSlug="/source/ui-elements/select-menus">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        {/* Native Select */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Native Select</label>
          <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-800 dark:text-white/90 dark:focus:border-brand-400 transition-colors">
            <option value="">Select an option</option>
            <option>Dashboard</option>
            <option>Analytics</option>
            <option>Reports</option>
            <option>Settings</option>
          </select>
        </div>
        {/* Custom Select */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Custom Select</label>
          <div className="relative">
            <button onClick={(e) => { e.stopPropagation(); setOpen(!open); }} className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 dark:border-white/10 dark:bg-gray-800 dark:text-white/90 transition-colors">
              {selected || 'Choose an option'}
              <ChevronDown className={`size-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
              <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/5 dark:bg-gray-800">
                {options.map((opt) => (
                  <button key={opt} onClick={() => { setSelected(opt); setOpen(false); }} className={`flex w-full items-center px-4 py-2 text-sm transition-colors ${selected === opt ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Multi-Select Tags */}
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Multi-Select</label>
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 dark:border-white/10 dark:bg-gray-800">
            {multiSelected.map((item) => (
              <span key={item} className="inline-flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                {item}
                <button onClick={() => setMultiSelected((p) => p.filter((x) => x !== item))} className="hover:text-brand-800 dark:hover:text-brand-300"><X className="size-3" /></button>
              </span>
            ))}
            <input placeholder="Add..." className="flex-1 min-w-[80px] border-0 bg-transparent py-1 text-sm text-gray-800 placeholder-gray-400 outline-none dark:text-white/90 dark:placeholder-gray-500" onKeyDown={(e) => { if (e.key === 'Enter') { const v = e.currentTarget.value.trim(); if (v && !multiSelected.includes(v)) { setMultiSelected((p) => [...p, v]); e.currentTarget.value = ''; } e.preventDefault(); } }} />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 31. Range Sliders ───────────────────── */

function RangeSlidersSection() {
  const [value, setValue] = useState(50);

  return (
    <SectionCard title="Range Sliders" sourceSlug="/source/ui-elements/range-sliders">
      <div className="space-y-6 max-w-md">
        {/* Basic */}
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Volume</label>
            <span className="text-sm font-medium text-brand-500">{value}%</span>
          </div>
          <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-2 rounded-full bg-gray-200 dark:bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer" />
        </div>
        {/* With markers */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Brightness</label>
          <input type="range" min={0} max={100} defaultValue={65} className="w-full h-2 rounded-full bg-gray-200 dark:bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-success-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer" />
          <div className="mt-1 flex justify-between text-[10px] text-gray-400">
            <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
          </div>
        </div>
        {/* Color variants */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Temperature</label>
          <input type="range" min={0} max={100} defaultValue={40} className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-blue-light-300 via-success-300 to-error-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-300 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer" />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>Cold</span><span>Warm</span><span>Hot</span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 32. File Upload ───────────────────── */

function FileUploadSection() {
  const [files, setFiles] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = () => {
    setFiles((p) => [...p, `document_${p.length + 1}.pdf`]);
    setDragOver(false);
  };

  return (
    <SectionCard title="File Upload" sourceSlug="/source/ui-elements/file-upload">
      <div className="max-w-lg space-y-4">
        {/* Drop Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); handleDrop(); }}
          onClick={handleDrop}
          className={`flex cursor-pointer flex-col items-center rounded-lg border-2 border-dashed p-8 text-center transition-colors ${dragOver ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-gray-300 bg-gray-50 hover:border-brand-400 hover:bg-brand-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400 dark:hover:bg-brand-500/5'}`}
        >
          <Upload className={`size-10 ${dragOver ? 'text-brand-500' : 'text-gray-400'}`} />
          <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            {dragOver ? 'Drop files here' : 'Drag & drop files here'}
          </p>
          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">or click to browse (PDF, DOC, JPG up to 10MB)</p>
        </div>
        {/* File List */}
        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-brand-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{file}</span>
                </div>
                <button onClick={() => setFiles((p) => p.filter((_, j) => j !== i))} className="text-gray-400 hover:text-error-500 transition-colors">
                  <X className="size-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 33. Color Swatches ───────────────────── */

function ColorSwatchesSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const colors = [
    { name: 'Brand', shades: ['bg-brand-50', 'bg-brand-100', 'bg-brand-200', 'bg-brand-300', 'bg-brand-400', 'bg-brand-500', 'bg-brand-600', 'bg-brand-700'] },
    { name: 'Success', shades: ['bg-success-50', 'bg-success-100', 'bg-success-200', 'bg-success-300', 'bg-success-400', 'bg-success-500', 'bg-success-600', 'bg-success-700'] },
    { name: 'Warning', shades: ['bg-warning-50', 'bg-warning-100', 'bg-warning-200', 'bg-warning-300', 'bg-warning-400', 'bg-warning-500', 'bg-warning-600', 'bg-warning-700'] },
    { name: 'Error', shades: ['bg-error-50', 'bg-error-100', 'bg-error-200', 'bg-error-300', 'bg-error-400', 'bg-error-500', 'bg-error-600', 'bg-error-700'] },
  ];

  const handleCopy = (color: string) => { navigator.clipboard.writeText(color); setCopied(color); setTimeout(() => setCopied(null), 1500); };

  return (
    <SectionCard title="Color Swatches" sourceSlug="/source/ui-elements/color-swatches">
      <div className="space-y-4">
        {colors.map((group) => (
          <div key={group.name}>
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{group.name}</p>
            <div className="flex gap-1">
              {group.shades.map((shade) => (
                <button key={shade} onClick={() => handleCopy(shade)} className={`group relative flex-1 h-10 first:rounded-l-lg last:rounded-r-lg ${shade} transition-transform hover:scale-110`}>
                  {copied === shade && <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white drop-shadow"><Check className="size-3" /></span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 34. Icon Showcase ───────────────────── */

function IconShowcaseSection() {
  const [search, setSearch] = useState('');
  const icons = [
    { name: 'Home', icon: Home },
    { name: 'Search', icon: Search },
    { name: 'Settings', icon: Settings },
    { name: 'Bell', icon: Bell },
    { name: 'Mail', icon: Mail },
    { name: 'User', icon: User },
    { name: 'Heart', icon: Heart },
    { name: 'Star', icon: Star },
    { name: 'Plus', icon: Plus },
    { name: 'Trash2', icon: Trash2 },
    { name: 'Edit3', icon: Edit3 },
    { name: 'Eye', icon: Eye },
    { name: 'Download', icon: Download },
    { name: 'Upload', icon: Upload },
    { name: 'Copy', icon: Copy },
    { name: 'Check', icon: Check },
    { name: 'Info', icon: Info },
    { name: 'Alert', icon: AlertTriangle },
    { name: 'Shield', icon: Shield },
    { name: 'Globe', icon: Globe },
    { name: 'Cpu', icon: Cpu },
    { name: 'Wifi', icon: Wifi },
    { name: 'Camera', icon: Camera },
    { name: 'MapPin', icon: MapPin },
    { name: 'Calendar', icon: Calendar },
    { name: 'Phone', icon: Phone },
    { name: 'Lock', icon: Lock },
    { name: 'Tag', icon: Tag },
    { name: 'Bookmark', icon: Bookmark },
    { name: 'Layers', icon: Layers },
    { name: 'Database', icon: Database },
    { name: 'Cloud', icon: Cloud },
    { name: 'GitBranch', icon: GitBranch },
    { name: 'Terminal', icon: Terminal },
    { name: 'Zap', icon: Zap },
    { name: 'Filter', icon: Filter },
  ];

  const filtered = icons.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <SectionCard title="Icon Showcase" sourceSlug="/source/ui-elements/icon-showcase">
      <div>
        <div className="relative mb-4 max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search icons..." className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-brand-500 dark:border-white/10 dark:bg-gray-800 dark:text-white/90 dark:placeholder-gray-500 transition-colors" />
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {filtered.map((item) => (
            <div key={item.name} className="group flex flex-col items-center gap-1.5 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
              <item.icon className="size-5 text-gray-600 group-hover:text-brand-500 dark:text-gray-400 dark:group-hover:text-brand-400 transition-colors" />
              <span className="text-[9px] text-gray-400 dark:text-gray-500 truncate w-full text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 35. Data Tags ───────────────────── */

function DataTagsSection() {
  const dataTags = [
    { key: 'Status', value: 'Active', color: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500' },
    { key: 'Priority', value: 'High', color: 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500' },
    { key: 'Type', value: 'Feature', color: 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400' },
    { key: 'Assignee', value: 'Alex M.', color: 'bg-blue-light-50 text-blue-light-600 dark:bg-blue-light-500/15 dark:text-blue-light-500' },
    { key: 'Sprint', value: 'Q1-2024', color: 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-500' },
    { key: 'Estimate', value: '8 pts', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
  ];

  return (
    <SectionCard title="Data Tags" sourceSlug="/source/ui-elements/data-tags">
      <div className="space-y-4">
        {/* Key-Value Pairs */}
        <div className="flex flex-wrap gap-2">
          {dataTags.map((tag) => (
            <div key={tag.key} className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 ${tag.color}`}>
              <span className="text-[10px] font-semibold uppercase opacity-70">{tag.key}:</span>
              <span className="text-xs font-medium">{tag.value}</span>
            </div>
          ))}
        </div>
        {/* Metadata Row */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 rounded-lg border border-gray-200 p-3 dark:border-white/5">
          {[
            { key: 'Created', value: 'Jan 15, 2024' },
            { key: 'Updated', value: '2 hours ago' },
            { key: 'Author', value: 'Sarah Chen' },
            { key: 'Version', value: 'v2.4.1' },
          ].map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{item.key}</span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 36. Notification Badge ───────────────────── */

function NotificationBadgeSection() {
  const [count, setCount] = useState(5);

  return (
    <SectionCard title="Notification Badge" sourceSlug="/source/ui-elements/notification-badge">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-6">
          {/* Bell with count */}
          <button onClick={() => setCount((p) => Math.max(0, p - 1))} className="relative">
            <Bell className="size-7 text-gray-600 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors" />
            {count > 0 && <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-error-500 text-[10px] font-bold text-white">{count}</span>}
          </button>
          {/* Mail with dot */}
          <div className="relative">
            <Mail className="size-7 text-gray-600 dark:text-gray-400" />
            <span className="absolute -right-1 -top-1 size-3 rounded-full bg-brand-500" />
          </div>
          {/* Shopping cart */}
          <button className="relative">
            <ShoppingCart className="size-7 text-gray-600 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors" />
            <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white">3</span>
          </button>
          {/* Settings with dot */}
          <div className="relative">
            <Settings className="size-7 text-gray-600 dark:text-gray-400" />
            <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-warning-500 ring-2 ring-white dark:ring-gray-dark" />
          </div>
        </div>
        {/* Badge Variants */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Badge Variants</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'New', color: 'bg-error-500' },
              { label: '99+', color: 'bg-brand-500' },
              { label: 'Beta', color: 'bg-warning-500' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">Label</span>
                <span className={`rounded-full ${b.color} px-2 py-0.5 text-[10px] font-bold text-white`}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => setCount(5)} className="text-xs font-medium text-brand-500 hover:text-brand-600 transition-colors">Reset count</button>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 37. Status Indicator ───────────────────── */

function StatusIndicatorSection() {
  const statuses = [
    { label: 'Online', color: 'bg-success-500', ring: 'ring-success-500/30', text: 'text-success-500' },
    { label: 'Away', color: 'bg-warning-500', ring: 'ring-warning-500/30', text: 'text-warning-500' },
    { label: 'Busy', color: 'bg-error-500', ring: 'ring-error-500/30', text: 'text-error-500' },
    { label: 'Offline', color: 'bg-gray-400', ring: 'ring-gray-400/30', text: 'text-gray-400' },
  ];

  const users = [
    { name: 'Alex Morgan', status: 'Online', initials: 'AM' },
    { name: 'Sarah Chen', status: 'Away', initials: 'SC' },
    { name: 'Mike Ross', status: 'Busy', initials: 'MR' },
    { name: 'Jane Doe', status: 'Offline', initials: 'JD' },
  ];

  const getColor = (status: string) => statuses.find((s) => s.label === status)!;

  return (
    <SectionCard title="Status Indicator" sourceSlug="/source/ui-elements/status-indicator">
      <div className="space-y-5">
        {/* Status Dots */}
        <div className="flex flex-wrap gap-4">
          {statuses.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className={`relative flex size-3 ${s.color} rounded-full`}>
                {(s.label === 'Online' || s.label === 'Busy') && <span className={`absolute inset-0 animate-ping rounded-full ${s.color} opacity-75`} />}
              </span>
              <span className={`text-sm font-medium ${s.text}`}>{s.label}</span>
            </div>
          ))}
        </div>
        {/* With Avatars */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">With Avatars</p>
          <div className="flex flex-wrap gap-4">
            {users.map((u) => {
              const c = getColor(u.status);
              return (
                <div key={u.name} className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300">{u.initials}</div>
                    <span className={`absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-white dark:border-gray-dark ${c.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">{u.name}</p>
                    <p className={`text-xs ${c.text}`}>{u.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 38. Countdown Timer ───────────────────── */

function CountdownTimerSection() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 12);
  targetDate.setHours(targetDate.getHours() + 5);

  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);

  const diff = Math.max(0, targetDate.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <SectionCard title="Countdown Timer" sourceSlug="/source/ui-elements/countdown-timer">
      <div className="space-y-5">
        {/* Large Countdown */}
        <div className="flex items-center gap-3">
          {[
            { label: 'Days', value: pad(days) },
            { label: 'Hours', value: pad(hours) },
            { label: 'Minutes', value: pad(minutes) },
            { label: 'Seconds', value: pad(seconds) },
          ].map((unit, i) => (
            <React.Fragment key={unit.label}>
              {i > 0 && <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">:</span>}
              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white/90">{unit.value}</span>
                </div>
                <span className="mt-1 text-[10px] font-medium uppercase text-gray-400">{unit.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* Compact */}
        <div className="inline-flex items-center gap-2 rounded-lg bg-brand-50 px-4 py-2.5 dark:bg-brand-500/10">
          <Clock className="size-4 text-brand-500" />
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">{pad(days)}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s</span>
          <span className="text-xs text-brand-500/70">remaining</span>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 39. Gradient Text ───────────────────── */

function GradientTextSection() {
  return (
    <SectionCard title="Gradient Text" sourceSlug="/source/ui-elements/gradient-text">
      <div className="space-y-4">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">
          Gradient Heading
        </h2>
        <p className="text-2xl font-bold bg-gradient-to-r from-success-500 via-blue-light-500 to-brand-500 bg-clip-text text-transparent">
          Multi-Color Gradient
        </p>
        <p className="text-xl font-semibold bg-gradient-to-r from-warning-500 to-error-500 bg-clip-text text-transparent">
          Warm Gradient
        </p>
        <p className="text-lg font-medium bg-gradient-to-r from-blue-light-400 to-brand-400 bg-clip-text text-transparent">
          Cool Gradient
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-lg bg-gradient-to-r from-brand-500 to-purple-600 px-3 py-1.5 text-sm font-semibold text-white">Brand Button</span>
          <span className="rounded-lg bg-gradient-to-r from-success-500 to-blue-light-500 px-3 py-1.5 text-sm font-semibold text-white">Fresh Button</span>
          <span className="rounded-lg bg-gradient-to-r from-warning-500 to-error-500 px-3 py-1.5 text-sm font-semibold text-white">Warm Button</span>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 40. Animated Underline ───────────────────── */

function AnimatedUnderlineSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <SectionCard title="Animated Underline" sourceSlug="/source/ui-elements/animated-underline">
      <div className="space-y-6">
        {/* Hover Underline */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Hover Underline</p>
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href="#"
                onClick={(e) => e.preventDefault()}
                onMouseEnter={() => setHovered(link.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-500 transition-all duration-300 ${hovered === link.id ? 'w-full' : 'w-0'}`} />
              </a>
            ))}
          </div>
        </div>
        {/* Active Underline */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">Active Underline</p>
          <div className="flex gap-6">
            {links.map((link, i) => (
              <a key={link.id} href="#" onClick={(e) => e.preventDefault()} className="relative text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors group">
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-500 transition-all duration-300 ${i === 0 ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 41. Keyboard Keys ───────────────────── */

function KeyboardKeysSection() {
  const shortcuts = [
    { keys: ['Ctrl', 'K'], desc: 'Command palette' },
    { keys: ['Ctrl', 'S'], desc: 'Save document' },
    { keys: ['Ctrl', 'Shift', 'N'], desc: 'New project' },
    { keys: ['Ctrl', '/'], desc: 'Toggle comments' },
    { keys: ['Esc'], desc: 'Close modal' },
  ];

  return (
    <SectionCard title="Keyboard Keys" sourceSlug="/source/ui-elements/keyboard-keys">
      <div className="space-y-4">
        {/* Inline Keys */}
        <div className="flex flex-wrap gap-3">
          {['Shift', 'Ctrl', 'Alt', 'Cmd', 'Tab', 'Esc', 'Enter'].map((key) => (
            <kbd key={key} className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              {key}
            </kbd>
          ))}
        </div>
        {/* Shortcuts */}
        <div className="space-y-2">
          {shortcuts.map((s) => (
            <div key={s.desc} className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2 dark:border-white/5">
              <span className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</span>
              <div className="flex items-center gap-1">
                {s.keys.map((key, i) => (
                  <React.Fragment key={key}>
                    {i > 0 && <span className="text-xs text-gray-400">+</span>}
                    <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-semibold text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{key}</kbd>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 42. Metric Cards ───────────────────── */

function MetricCardsSection() {
  const metrics = [
    { label: 'Total Revenue', value: '$48,295', change: '+12.5%', up: true, icon: DollarSign, iconBg: 'bg-brand-50 dark:bg-brand-500/15', iconColor: 'text-brand-500' },
    { label: 'Active Users', value: '12,847', change: '+8.2%', up: true, icon: Users, iconBg: 'bg-success-50 dark:bg-success-500/15', iconColor: 'text-success-500' },
    { label: 'Bounce Rate', value: '24.3%', change: '-3.1%', up: false, icon: BarChart3, iconBg: 'bg-warning-50 dark:bg-warning-500/15', iconColor: 'text-warning-500' },
    { label: 'Conversion', value: '3.24%', change: '+1.8%', up: true, icon: TrendingUp, iconBg: 'bg-blue-light-50 dark:bg-blue-light-500/15', iconColor: 'text-blue-light-500' },
  ];

  return (
    <SectionCard title="Metric Cards" sourceSlug="/source/ui-elements/metric-cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/5 dark:bg-gray-dark">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{m.label}</p>
              <div className={`flex size-8 items-center justify-center rounded-lg ${m.iconBg}`}>
                <m.icon className={`size-4 ${m.iconColor}`} />
              </div>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-800 dark:text-white/90">{m.value}</p>
            <div className={`mt-1 flex items-center gap-1 text-xs font-medium ${m.up ? 'text-success-500' : 'text-error-500'}`}>
              {m.up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
              {m.change} from last month
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 43. Comparison Toggle ───────────────────── */

function ComparisonToggleSection() {
  const [plan, setPlan] = useState<'A' | 'B'>('A');

  return (
    <SectionCard title="Comparison Toggle" sourceSlug="/source/ui-elements/comparison-toggle">
      <div className="space-y-5">
        {/* Plan Toggle */}
        <div className="inline-flex rounded-lg bg-gray-100 p-1 dark:bg-white/5">
          {(['A', 'B'] as const).map((p) => (
            <button key={p} onClick={() => setPlan(p)} className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-all ${plan === p ? 'bg-white text-gray-800 shadow-theme-sm dark:bg-gray-700 dark:text-white/90' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
              Plan {p}
            </button>
          ))}
        </div>
        {/* Comparison Card */}
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="text-lg font-bold text-gray-800 dark:text-white/90">Plan {plan}</h4>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan === 'A' ? 'Basic features for individuals' : 'Advanced features for teams'}</p>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-800 dark:text-white/90">{plan === 'A' ? '$9' : '$29'}</span>
            <span className="text-sm text-gray-500">/month</span>
          </div>
          <ul className="mt-4 space-y-2">
            {(plan === 'A' ? ['5 Projects', 'Basic Analytics', 'Email Support'] : ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'API Access']).map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="size-4 text-success-500 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 44. Scroll Indicator ───────────────────── */

function ScrollIndicatorSection() {
  const [scrollPct, setScrollPct] = useState(0);

  return (
    <SectionCard title="Scroll Indicator" sourceSlug="/source/ui-elements/scroll-indicator">
      <div className="space-y-4">
        {/* Simulated Progress Bar */}
        <div className="relative h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-300" style={{ width: `${scrollPct}%` }} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{Math.round(scrollPct)}% read</span>
          <input type="range" min={0} max={100} value={scrollPct} onChange={(e) => setScrollPct(Number(e.target.value))} className="w-32 h-1.5 rounded-full bg-gray-200 dark:bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-500 [&::-webkit-slider-thumb]:cursor-pointer" />
        </div>
        {/* Thin variant */}
        <div className="h-1 overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
          <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${scrollPct}%` }} />
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 45. Resizable Panel ───────────────────── */

function ResizablePanelSection() {
  const [width, setWidth] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setWidth(Math.max(20, Math.min(80, pct)));
  }, [dragging]);

  const handleMouseUp = useCallback(() => { setDragging(false); }, []);

  useEffect(() => {
    if (dragging) { window.addEventListener('mousemove', handleMouseMove); window.addEventListener('mouseup', handleMouseUp); }
    return () => { window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseup', handleMouseUp); };
  }, [dragging, handleMouseMove, handleMouseUp]);

  return (
    <SectionCard title="Resizable Panel" sourceSlug="/source/ui-elements/resizable-panel">
      <div ref={containerRef} className="flex h-48 rounded-lg border border-gray-200 dark:border-white/5 overflow-hidden select-none">
        <div style={{ width: `${width}%` }} className="flex items-center justify-center bg-brand-50 dark:bg-brand-500/10 p-4 overflow-hidden">
          <div className="text-center">
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">Panel A</p>
            <p className="text-xs text-brand-500/70">{Math.round(width)}%</p>
          </div>
        </div>
        <div onMouseDown={() => setDragging(true)} className={`flex w-2 cursor-col-resize items-center justify-center bg-gray-200 hover:bg-brand-500 transition-colors ${dragging ? 'bg-brand-500' : ''} dark:bg-white/10 dark:hover:bg-brand-500`}>
          <div className={`h-8 w-0.5 rounded-full ${dragging ? 'bg-white' : 'bg-gray-400 dark:bg-gray-500'}`} />
        </div>
        <div className="flex flex-1 items-center justify-center bg-gray-50 dark:bg-white/5 p-4">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Panel B</p>
            <p className="text-xs text-gray-400">{Math.round(100 - width)}%</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 46. Collapsible Sections ───────────────────── */

function CollapsibleSectionsSection() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ general: true, advanced: false });

  const sections = [
    { id: 'general', title: 'General Settings', icon: Settings, content: 'Configure your basic application settings including language, timezone, and display preferences.' },
    { id: 'advanced', title: 'Advanced Options', icon: Cpu, content: 'Access advanced configuration options for performance tuning, caching, and debugging.' },
    { id: 'security', title: 'Security', icon: Shield, content: 'Manage security settings including two-factor authentication, session management, and IP allowlisting.' },
  ];

  const toggle = (id: string) => setOpenSections((p) => ({ ...p, [id]: !p[id] }));

  return (
    <SectionCard title="Collapsible Sections" sourceSlug="/source/ui-elements/collapsible-sections">
      <div className="max-w-md space-y-2">
        {sections.map((s) => (
          <div key={s.id} className="rounded-lg border border-gray-200 dark:border-white/5 overflow-hidden">
            <button onClick={() => toggle(s.id)} className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-800 dark:text-white/90 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-2">
                <s.icon className="size-4 text-brand-500" />
                {s.title}
              </div>
              <ChevronDown className={`size-4 text-gray-400 transition-transform ${openSections[s.id] ? 'rotate-180' : ''}`} />
            </button>
            {openSections[s.id] && (
              <div className="border-t border-gray-100 px-4 py-3 dark:border-white/5">
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 47. Drag Handle List ───────────────────── */

function DragHandleListSection() {
  const [items, setItems] = useState([
    { id: '1', title: 'Design system setup', priority: 'High' },
    { id: '2', title: 'Component library', priority: 'Medium' },
    { id: '3', title: 'API integration', priority: 'High' },
    { id: '4', title: 'Testing suite', priority: 'Low' },
    { id: '5', title: 'Documentation', priority: 'Medium' },
  ]);

  const moveItem = (from: number, to: number) => {
    const updated = [...items];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setItems(updated);
  };

  const priorityColor = (p: string) => {
    switch (p) {
      case 'High': return 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500';
      case 'Medium': return 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-500';
      default: return 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <SectionCard title="Drag Handle List" sourceSlug="/source/ui-elements/drag-handle-list">
      <div className="max-w-md space-y-2">
        {items.map((item, index) => (
          <div key={item.id} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5 dark:border-white/5 dark:bg-gray-dark">
            <GripVertical className="size-4 text-gray-400 cursor-grab" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 dark:text-white/90 truncate">{item.title}</p>
            </div>
            <span className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${priorityColor(item.priority)}`}>{item.priority}</span>
            <div className="flex gap-1">
              <button onClick={() => index > 0 && moveItem(index, index - 1)} disabled={index === 0} className="text-gray-400 hover:text-brand-500 disabled:opacity-30 transition-colors">
                <ChevronUp className="size-3.5" />
              </button>
              <button onClick={() => index < items.length - 1 && moveItem(index, index + 1)} disabled={index === items.length - 1} className="text-gray-400 hover:text-brand-500 disabled:opacity-30 transition-colors">
                <ChevronDown className="size-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 48. Tabs with Icons ───────────────────── */

function TabsWithIconsSection() {
  const [activeIconTab, setActiveIconTab] = useState(0);

  const iconTabs = [
    { label: 'Dashboard', icon: Home },
    { label: 'Analytics', icon: BarChart3 },
    { label: 'Users', icon: Users },
    { label: 'Settings', icon: Settings },
  ];

  return (
    <SectionCard title="Tabs with Icons" sourceSlug="/source/ui-elements/tabs-with-icons">
      <div className="space-y-4">
        {/* Horizontal Icon Tabs */}
        <div className="flex gap-1 rounded-lg bg-gray-100 p-1 dark:bg-white/5">
          {iconTabs.map((tab, i) => (
            <button key={tab.label} onClick={() => setActiveIconTab(i)} className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${activeIconTab === i ? 'bg-white text-brand-500 shadow-theme-sm dark:bg-gray-700 dark:text-brand-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
              <tab.icon className="size-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
          <p className="text-sm text-gray-600 dark:text-gray-400">Content for <span className="font-semibold text-gray-800 dark:text-white/90">{iconTabs[activeIconTab].label}</span> tab with icon navigation.</p>
        </div>
        {/* Icon-only Tabs */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Icon Only</p>
          <div className="flex gap-2">
            {iconTabs.map((tab, i) => (
              <button key={tab.label} onClick={() => setActiveIconTab(i)} className={`flex size-10 items-center justify-center rounded-lg transition-all ${activeIconTab === i ? 'bg-brand-500 text-white shadow-theme-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10'}`}>
                <tab.icon className="size-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 49. Vertical Nav ───────────────────── */

function VerticalNavSection() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <SectionCard title="Vertical Nav" sourceSlug="/source/ui-elements/vertical-nav">
      <div className="flex gap-6">
        {/* Full Labels */}
        <div className="w-52 rounded-lg border border-gray-200 bg-white p-2 dark:border-white/5 dark:bg-gray-dark">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveNav(item.id)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${activeNav === item.id ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/5'}`}>
              <item.icon className="size-4" />
              {item.label}
            </button>
          ))}
        </div>
        {/* Icon Only */}
        <div className="w-14 rounded-lg border border-gray-200 bg-white p-2 dark:border-white/5 dark:bg-gray-dark">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveNav(item.id)} className={`flex w-full items-center justify-center rounded-lg p-2.5 transition-colors ${activeNav === item.id ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/5'}`} title={item.label}>
              <item.icon className="size-4" />
            </button>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

/* ───────────────────── 50. Breadcrumb with Dropdown ───────────────────── */

function BreadcrumbDropdownSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handler = () => setDropdownOpen(false);
    if (dropdownOpen) document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [dropdownOpen]);

  return (
    <SectionCard title="Breadcrumb with Dropdown" sourceSlug="/source/ui-elements/breadcrumb-dropdown">
      <div className="space-y-4">
        {/* Breadcrumb with overflow dropdown */}
        <nav className="flex items-center gap-1.5 text-sm">
          <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Home</a>
          <ChevronRight className="size-3.5 text-gray-400" />
          <div className="relative">
            <button onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }} className="inline-flex items-center gap-1 text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">
              ...<ChevronDown className={`size-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-white/5 dark:bg-gray-800">
                {['Products', 'Categories', 'Inventory'].map((item) => (
                  <button key={item} className="flex w-full items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5 transition-colors">{item}</button>
                ))}
              </div>
            )}
          </div>
          <ChevronRight className="size-3.5 text-gray-400" />
          <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Electronics</a>
          <ChevronRight className="size-3.5 text-gray-400" />
          <span className="font-medium text-gray-800 dark:text-white/90">Laptops</span>
        </nav>
        {/* Compact breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm rounded-lg bg-gray-50 px-3 py-2 dark:bg-white/5">
          <Home className="size-3.5 text-gray-400" />
          <ChevronRight className="size-3 text-gray-300 dark:text-gray-600" />
          <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">Dashboard</a>
          <ChevronRight className="size-3 text-gray-300 dark:text-gray-600" />
          <span className="font-medium text-gray-800 dark:text-white/90">UI Elements</span>
        </nav>
      </div>
    </SectionCard>
  );
}

export default function UIElementsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-title-md font-bold text-gray-800 dark:text-white/90">UI Elements</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">Explore the comprehensive UI component library</p>
        </div>
        <Link href="/source/ui-elements/buttons" className="inline-flex items-center gap-2 rounded-lg bg-[#1e1e2e] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2d2d3f] transition-colors">
          <Code2 className="size-4" /> View Source Code
        </Link>
      </div>

      <div className="space-y-6">
        <AlertsSection />
        <BadgesSection />
        <ButtonsSection />
        <CardsSection />
        <DropdownsSection />
        <ModalsSection />
        <TabsSection />
        <AccordionsSection />
        <TooltipsSection />
        <ProgressBarsSection />
        <SpinnersSection />
        <SkeletonLoadersSection />
        <AvatarsSection />
        <TimelineSection />
        <PaginationSection />
        <ToastSection />
        <BreadcrumbSection />
        <EmptyStatesSection />
        <TagInputSection />
        <CodeBlockSection />
        <PopoversSection />
        <TypographySection />
        <DividersSection />
        <ChipsSection />
        <SwitchesSection />
        <RadioGroupsSection />
        <CheckboxesSection />
        <TextInputsSection />
        <TextareasSection />
        <SelectMenusSection />
        <RangeSlidersSection />
        <FileUploadSection />
        <ColorSwatchesSection />
        <IconShowcaseSection />
        <DataTagsSection />
        <NotificationBadgeSection />
        <StatusIndicatorSection />
        <CountdownTimerSection />
        <GradientTextSection />
        <AnimatedUnderlineSection />
        <KeyboardKeysSection />
        <MetricCardsSection />
        <ComparisonToggleSection />
        <ScrollIndicatorSection />
        <ResizablePanelSection />
        <CollapsibleSectionsSection />
        <DragHandleListSection />
        <TabsWithIconsSection />
        <VerticalNavSection />
        <BreadcrumbDropdownSection />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NEW UI ELEMENTS (159 additional components)
   ═══════════════════════════════════════════════════════════════ */


































































































































































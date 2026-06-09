'use client';

import React, { useState, useEffect, useRef } from 'react';
import NextLink from 'next/link';
import { hasSourceData } from '@/data/source-code/available';
import {
  Search, Command, Copy, Check, Star, Heart, Share2, Bookmark, UserPlus,
  UserMinus, Smile, AtSign, Hash, Bold, Italic, Underline, AlignLeft,
  AlignCenter, AlignRight, Link, Image as ImageIcon, Code, List, ListOrdered, Eye,
  File, Folder, ChevronRight, ChevronDown, ChevronLeft, Home, X,
  Maximize, Minimize, Printer, Sun, Moon, Bell, AlertTriangle, Info,
  Shield, Clock, Calendar, MapPin, BarChart3, TrendingUp, Users,
  Settings, Play, Pause, Volume2, SkipForward, SkipBack, Upload,
  Download, FileText, Trash2, Edit3, Plus, Minus, RefreshCw, Wifi,
  WifiOff, Circle, CheckCircle, XCircle, HelpCircle, MousePointer2,
  ArrowRight, ExternalLink, Loader2, Zap, Award, Tag, Camera, Globe,
  Keyboard, Accessibility, Move, Focus, Code2,
  MessageCircle, ShoppingCart, TrendingDown, Mail, Phone,
  SlidersHorizontal, ArrowUpDown, Filter, GripVertical, Gauge,
  PieChart, Cloud, CloudRain, Send, Target, DollarSign,
  CreditCard, Layout, ArrowUp, ArrowDown, VolumeX, Volume1,
  RotateCcw, ThumbsUp, MoreHorizontal, EyeOff, ChevronUp, Music,
} from 'lucide-react';

// ===== SHARED STYLES =====
const card = 'rounded-lg border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark';
const heading = 'mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90';
const subheading = 'mb-3 text-theme-sm font-medium text-gray-500 dark:text-gray-400';
const grid3 = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
const grid4 = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4';

// ===== SECTION CARD =====
function SectionCard({ title, sourceSlug, generated = false, children }: { title: string; sourceSlug?: string; generated?: boolean; children?: React.ReactNode }) {
  const canViewSource = hasSourceData(sourceSlug);
  const showGeneratedPreview = generated || isGeneratedPlaceholder(children);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">{title}</h3>
        {sourceSlug && canViewSource && (
          <NextLink
            href={sourceSlug}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-brand-500 transition-colors hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10"
          >
            <Code2 className="size-3.5" />
            View Source
          </NextLink>
        )}
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-white/5 dark:bg-gray-dark">
        {showGeneratedPreview ? (
          <GeneratedExtendedPreview title={title} sourceSlug={sourceSlug} />
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
    <NextLink
      href={sourceSlug}
      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-brand-500 transition-colors hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10"
    >
      <Code2 className="size-3.5" />
      View Source
    </NextLink>
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

function GeneratedExtendedPreview({ title, sourceSlug }: { title: string; sourceSlug?: string }) {
  const slug = sourceSlug?.split('/').pop() ?? title.toLowerCase().replace(/\s+/g, '-');
  const seed = hashValue(slug);
  const color = ['#465fff', '#12b76a', '#f79009', '#0ba5ec', '#9e77ed', '#f04438'][seed % 6];
  const accent = ['#12b76a', '#f79009', '#0ba5ec', '#9e77ed', '#f04438', '#465fff'][(seed + 3) % 6];
  const kind = getExtendedPreviewKind(slug);

  return (
    <div className="space-y-4" data-generated-preview-kind={kind}>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
          {renderExtendedIcon(kind, color)}
          {kind}
        </span>
        <span className="rounded-md bg-gray-50 px-2 py-1 font-mono text-[10px] text-gray-400 dark:bg-white/5">
          {slug}
        </span>
      </div>
      {renderExtendedPreview(kind, title, color, accent, seed)}
    </div>
  );
}

function getExtendedPreviewKind(slug: string) {
  if (/(chart|analytics|metric|gauge|progress|dashboard|report|heatmap|velocity)/.test(slug)) return 'Data widget';
  if (/(editor|code|json|xml|yaml|markdown|diff|log|document|wiki|review)/.test(slug)) return 'Editor tool';
  if (/(calendar|scheduler|timeline|planner|kanban|board|task|sprint|workflow|pipeline|queue|milestone)/.test(slug)) return 'Workflow view';
  if (/(form|input|selector|manager|permission|query|filter|payment|invoice|builder|wizard|tracker)/.test(slug)) return 'Control panel';
  if (/(media|audio|video|image|gallery|map|file|browser|viewer|reader)/.test(slug)) return 'Media utility';
  if (/(user|profile|account|team|org|hr|role|directory|membership|contact|address)/.test(slug)) return 'People module';
  if (/(notification|banner|alert|incident|release|changelog|announcement|feedback|message)/.test(slug)) return 'Status center';
  return 'Utility module';
}

function renderExtendedIcon(kind: string, color: string) {
  const iconClass = 'size-3.5';
  if (kind === 'Data widget') return <BarChart3 className={iconClass} style={{ color }} />;
  if (kind === 'Editor tool') return <FileText className={iconClass} style={{ color }} />;
  if (kind === 'Workflow view') return <Calendar className={iconClass} style={{ color }} />;
  if (kind === 'Control panel') return <SlidersHorizontal className={iconClass} style={{ color }} />;
  if (kind === 'Media utility') return <ImageIcon className={iconClass} style={{ color }} />;
  if (kind === 'People module') return <Users className={iconClass} style={{ color }} />;
  if (kind === 'Status center') return <Bell className={iconClass} style={{ color }} />;
  return <Settings className={iconClass} style={{ color }} />;
}

function renderExtendedPreview(kind: string, title: string, color: string, accent: string, seed: number) {
  if (kind === 'Data widget') {
    return (
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white/90">{(seed % 80) + 20}.{seed % 9}%</p>
          </div>
          <span className="rounded-md px-2 py-1 text-xs font-medium" style={{ backgroundColor: `${accent}22`, color: accent }}>
            +{(seed % 12) + 3}%
          </span>
        </div>
        <div className="flex h-20 items-end gap-1.5">
          {[38, 64, 46, 78, 58, 86, 70].map((height, index) => (
            <div key={index} className="flex-1 rounded-t" style={{ height: `${(height + seed + index * 7) % 70 + 24}%`, backgroundColor: index % 2 ? `${accent}99` : color }} />
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'Editor tool') {
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-950 dark:border-white/10">
        <div className="flex items-center gap-1 border-b border-white/10 px-3 py-2">
          {[color, accent, '#f79009'].map((dot, index) => <span key={`${dot}-${index}`} className="size-2 rounded-full" style={{ backgroundColor: dot }} />)}
          <span className="ml-2 text-[10px] text-white/40">{title}</span>
        </div>
        <div className="space-y-2 p-4 font-mono text-[11px]">
          <div className="h-2 w-5/6 rounded-full" style={{ backgroundColor: `${color}aa` }} />
          <div className="h-2 w-2/3 rounded-full bg-white/20" />
          <div className="h-2 w-3/4 rounded-full" style={{ backgroundColor: `${accent}aa` }} />
          <div className="h-2 w-1/2 rounded-full bg-white/20" />
        </div>
      </div>
    );
  }

  if (kind === 'Workflow view') {
    return (
      <div className="grid grid-cols-3 gap-2 rounded-lg bg-gray-50 p-3 dark:bg-white/5">
        {['Plan', 'Build', 'Ship'].map((label, column) => (
          <div key={label} className="rounded-md bg-white p-2 shadow-sm dark:bg-gray-900">
            <p className="mb-2 text-[10px] font-semibold text-gray-500">{label}</p>
            {[0, 1].map((item) => (
              <div key={item} className="mb-1.5 rounded border border-gray-100 p-2 dark:border-white/10">
                <div className="h-1.5 rounded-full" style={{ width: `${50 + ((seed + column + item) % 4) * 12}%`, backgroundColor: column === item ? accent : color }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (kind === 'Control panel') {
    return (
      <div className="space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-9 rounded-md border bg-white dark:border-white/10 dark:bg-gray-900" style={{ borderColor: `${color}88` }} />
          <div className="h-9 rounded-md border bg-white dark:border-white/10 dark:bg-gray-900" />
        </div>
        <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 dark:bg-gray-900">
          <span className="text-xs text-gray-500">Enabled</span>
          <span className="h-5 w-9 rounded-full p-0.5" style={{ backgroundColor: color }}>
            <span className="block size-4 rounded-full bg-white" style={{ marginLeft: seed % 2 ? 16 : 0 }} />
          </span>
        </div>
        <button className="w-full rounded-md py-2 text-xs font-semibold text-white" style={{ backgroundColor: accent }}>
          Apply changes
        </button>
      </div>
    );
  }

  if (kind === 'Media utility') {
    return (
      <div className="overflow-hidden rounded-lg bg-gray-900">
        <div className="flex h-28 items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}66, ${accent}66)` }}>
          <Play className="size-8 text-white" />
        </div>
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="h-1.5 flex-1 rounded-full bg-white/20">
            <div className="h-full rounded-full" style={{ width: `${35 + (seed % 45)}%`, backgroundColor: color }} />
          </div>
          <span className="text-[10px] text-white/50">Ready</span>
        </div>
      </div>
    );
  }

  if (kind === 'People module') {
    return (
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        {[0, 1, 2].map((index) => (
          <div key={index} className="mb-2 flex items-center gap-3 rounded-md bg-white p-2 shadow-sm last:mb-0 dark:bg-gray-900">
            <div className="flex size-8 items-center justify-center rounded-full text-xs font-semibold text-white" style={{ backgroundColor: index % 2 ? accent : color }}>
              {title.split(' ').map((part) => part[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-2/3 rounded-full bg-gray-200 dark:bg-white/10" />
              <div className="h-1.5 w-1/2 rounded-full bg-gray-100 dark:bg-white/5" />
            </div>
            <CheckCircle className="size-4" style={{ color: index === 0 ? accent : '#98a2b3' }} />
          </div>
        ))}
      </div>
    );
  }

  if (kind === 'Status center') {
    return (
      <div className="space-y-2 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        {[0, 1, 2].map((index) => (
          <div key={index} className="flex items-start gap-2 rounded-md bg-white p-2 dark:bg-gray-900">
            <span className="mt-1 size-2 rounded-full" style={{ backgroundColor: index === 0 ? color : index === 1 ? accent : '#98a2b3' }} />
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-3/4 rounded-full bg-gray-200 dark:bg-white/10" />
              <div className="h-1.5 w-1/2 rounded-full bg-gray-100 dark:bg-white/5" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-lg text-white" style={{ backgroundColor: color }}>
          <Settings className="size-5" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-2.5 w-2/3 rounded-full" style={{ backgroundColor: `${color}55` }} />
          <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: `${accent}55` }} />
        </div>
      </div>
    </div>
  );
}

// ===== 1. COMMAND PALETTE =====
function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const commands = ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Products', 'Orders', 'Customers', 'Reports'];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = commands.filter((c) => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Command Palette</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/command-palette" />
      </div>
      <div className={card}>
        <button
          onClick={() => setOpen(true)}
          className="flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500 dark:border-white/10 dark:bg-white/5"
        >
          <Search className="size-4" />
          <span className="flex-1 text-left">Search commands...</span>
          <kbd className="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-mono dark:bg-white/10">⌘K</kbd>
        </button>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
            <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
            <div className="relative z-10 w-full max-w-lg rounded-lg border border-gray-200 bg-white shadow-xl dark:border-white/5 dark:bg-gray-800">
              <div className="flex items-center border-b border-gray-200 px-4 dark:border-white/5">
                <Search className="size-4 text-gray-400" />
                <input
                  className="flex-1 bg-transparent px-3 py-3 text-sm text-gray-800 outline-none dark:text-white"
                  placeholder="Type a command..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-mono text-gray-500 dark:bg-white/10">ESC</kbd>
              </div>
              <div className="max-h-64 overflow-y-auto p-2">
                {filtered.map((cmd) => (
                  <button key={cmd} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5" onClick={() => { setOpen(false); setQuery(''); }}>
                    <Command className="size-4 text-gray-400" />
                    {cmd}
                  </button>
                ))}
                {filtered.length === 0 && <p className="px-3 py-2 text-sm text-gray-400">No results found</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== 2. COLOR PICKER =====
function ColorPicker() {
  const [selected, setSelected] = useState('#465fff');
  const colors = ['#465fff', '#12b76a', '#f79009', '#f04438', '#0ba5ec', '#9e77ed', '#f06595', '#69db7c', '#ffd43b', '#845ef7', '#e64980', '#20c997'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Color Picker</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/color-picker" />
      </div>
      <div className={card}>
        <div className="flex flex-wrap gap-2">
          {colors.map((c) => (
            <button
              key={c}
              className={`size-8 rounded-lg border-2 transition-all ${selected === c ? 'border-gray-800 scale-110 dark:border-white' : 'border-transparent'}`}
              style={{ backgroundColor: c }}
              onClick={() => setSelected(c)}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="size-6 rounded-md" style={{ backgroundColor: selected }} />
          <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{selected}</span>
        </div>
      </div>
    </div>
  );
}

// ===== 3. DATE DISPLAY =====
function DateDisplay() {
  const formatted = 'Tuesday, June 9, 2026';
  const relative = 'Jun 9, 2026';
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Date Display</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/date-display" />
      </div>
      <div className={card}>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-brand-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{formatted}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-gray-400" />
            <span className="text-sm text-gray-500">{relative}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 4. TIME DISPLAY =====
function TimeDisplay() {
  const [time, setTime] = useState({ clock: '12:00:00 PM', zone: 'UTC' });
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        clock: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        zone: now.toLocaleDateString('en-US', { timeZoneName: 'short' }).split(', ').pop() ?? 'Local',
      });
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Time Display</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/time-display" />
      </div>
      <div className={card}>
        <div className="text-center">
          <span className="text-3xl font-bold text-gray-800 dark:text-white">
            {time.clock}
          </span>
          <p className="mt-1 text-xs text-gray-500">Live • {time.zone}</p>
        </div>
      </div>
    </div>
  );
}

// ===== 5. KEYBOARD SHORTCUT =====
function KeyboardShortcut() {
  const shortcuts = [
    { keys: ['⌘', 'K'], label: 'Command Palette' },
    { keys: ['⌘', 'S'], label: 'Save' },
    { keys: ['Ctrl', 'C'], label: 'Copy' },
    { keys: ['⌘', 'Shift', 'P'], label: 'Command Panel' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Keyboard Shortcuts</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/keyboard-shortcuts" />
      </div>
      <div className={card}>
        <div className="space-y-2">
          {shortcuts.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">{s.label}</span>
              <div className="flex gap-1">
                {s.keys.map((k) => (
                  <kbd key={k} className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-mono text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
                    {k}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 6. COPY TO CLIPBOARD =====
function CopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const text = 'npm install mtverse-admin';
  const handleCopy = () => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Copy to Clipboard</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/copy-to-clipboard" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-white/10 dark:bg-white/5">
          <code className="flex-1 text-sm text-gray-700 dark:text-gray-300">{text}</code>
          <button onClick={handleCopy} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            {copied ? <Check className="size-4 text-success-500" /> : <Copy className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== 7. QR CODE PLACEHOLDER =====
function QRCodePlaceholder() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">QR Code</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/qr-code" />
      </div>
      <div className={`${card} flex flex-col items-center gap-3`}>
        <div className="grid grid-cols-7 gap-[2px]">
          {Array.from({ length: 49 }, (_, i) => {
            const isCorner = (i < 3 || (i > 3 && i < 7)) && (i % 7 < 3 || i % 7 > 3) ||
              (i > 42 && i < 46) ||
              (i % 7 === 0 && i < 21) ||
              (i % 7 === 6 && i < 21) ||
              (i > 42 && i % 7 < 3);
            const isFilled = isCorner || ((i * 17 + 11) % 7 < 3);
            return (
              <div key={i} className={`size-3 rounded-[1px] ${isFilled ? 'bg-gray-800 dark:bg-white' : 'bg-white dark:bg-gray-dark'}`} />
            );
          })}
        </div>
        <p className="text-xs text-gray-500">Scan to visit</p>
      </div>
    </div>
  );
}

// ===== 8. RATING STARS =====
function RatingStars() {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Rating Stars</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/rating-stars" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              className="transition-transform hover:scale-110"
              onMouseEnter={() => setHover(s)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(s)}
            >
              <Star className={`size-6 ${(hover || rating) >= s ? 'fill-warning-500 text-warning-500' : 'text-gray-300 dark:text-white/20'}`} />
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{rating}/5</span>
        </div>
      </div>
    </div>
  );
}

// ===== 9. LIKE BUTTON =====
function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(24);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Like Button</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/like-button" />
      </div>
      <div className={`${card} flex flex-col items-center gap-3`}>
        <button
          className="flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
          onClick={() => { setLiked(!liked); setCount(liked ? count - 1 : count + 1); }}
        >
          <Heart className={`size-5 ${liked ? 'fill-error-500 text-error-500' : 'text-gray-400'}`} />
          <span className="text-sm text-gray-700 dark:text-gray-300">{count}</span>
        </button>
      </div>
    </div>
  );
}

// ===== 10. SHARE BUTTON =====
function ShareButton() {
  const [open, setOpen] = useState(false);
  const channels = ['Twitter', 'Facebook', 'LinkedIn', 'Email', 'Copy Link'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Share Button</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/share-button" />
      </div>
      <div className={card}>
        <div className="relative inline-block">
          <button onClick={() => setOpen(!open)} className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
            <Share2 className="size-4" /> Share
          </button>
          {open && (
            <div className="absolute left-0 top-full z-10 mt-2 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-white/5 dark:bg-gray-800">
              {channels.map((ch) => (
                <button key={ch} className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5" onClick={() => setOpen(false)}>
                  <Globe className="size-3" /> {ch}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== 11. BOOKMARK BUTTON =====
function BookmarkButton() {
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Bookmark Button</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/bookmark-button" />
      </div>
      <div className={`${card} flex flex-col items-center gap-3`}>
        <button
          className={`flex items-center gap-2 rounded-lg border px-4 py-2 ${saved ? 'border-brand-500 bg-brand-50 text-brand-500 dark:bg-brand-500/20' : 'border-gray-200 text-gray-600 dark:border-white/10 dark:text-gray-400'}`}
          onClick={() => setSaved(!saved)}
        >
          <Bookmark className={`size-4 ${saved ? 'fill-brand-500' : ''}`} />
          <span className="text-sm">{saved ? 'Saved' : 'Bookmark'}</span>
        </button>
      </div>
    </div>
  );
}

// ===== 12. FOLLOW BUTTON =====
function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Follow Button</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/follow-button" />
      </div>
      <div className={`${card} flex flex-col items-center gap-3`}>
        <button
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm ${
            following ? 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400' : 'bg-brand-500 text-white'
          }`}
          onClick={() => setFollowing(!following)}
        >
          {following ? <UserMinus className="size-4" /> : <UserPlus className="size-4" />}
          {following ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
}

// ===== 13. REACTION PICKER =====
function ReactionPicker() {
  const [selected, setSelected] = useState<string | null>(null);
  const reactions = [
    { emoji: '👍', label: 'Like', count: 12 },
    { emoji: '❤️', label: 'Love', count: 8 },
    { emoji: '😂', label: 'Haha', count: 5 },
    { emoji: '😮', label: 'Wow', count: 3 },
    { emoji: '😢', label: 'Sad', count: 1 },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Reaction Picker</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/reaction-picker" />
      </div>
      <div className={card}>
        <div className="flex flex-wrap gap-2">
          {reactions.map((r) => (
            <button
              key={r.label}
              className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition-all ${
                selected === r.label ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/20' : 'border-gray-200 dark:border-white/10'
              }`}
              onClick={() => setSelected(selected === r.label ? null : r.label)}
            >
              <span>{r.emoji}</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">{r.count + (selected === r.label ? 1 : 0)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 14. MENTION INPUT =====
function MentionInput() {
  const [text, setText] = useState('');
  const users = ['alex', 'sarah', 'john', 'emma'];
  const showMentions = text.includes('@') && text.split('@').pop()?.length !== undefined;
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Mention Input</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/mention-input" />
      </div>
      <div className={card}>
        <div className="relative">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 dark:border-white/10">
            <AtSign className="size-4 text-gray-400" />
            <input
              className="flex-1 bg-transparent text-sm text-gray-700 outline-none dark:text-gray-300"
              placeholder="Type @ to mention..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          {showMentions && (
            <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-white/5 dark:bg-gray-800">
              {users.map((u) => (
                <button key={u} className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5" onClick={() => { setText(text.split('@')[0] + '@' + u + ' '); }}>
                  <div className="flex size-6 items-center justify-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-600">{u[0].toUpperCase()}</div>
                  {u}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== 15. HASHTAG INPUT =====
function HashtagInput() {
  const [tags, setTags] = useState<string[]>(['design', 'admin']);
  const [input, setInput] = useState('');
  const addTag = () => {
    if (input.trim() && !tags.includes(input.trim())) {
      setTags([...tags, input.trim()]);
      setInput('');
    }
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Hashtag Input</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/hashtag-input" />
      </div>
      <div className={card}>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
              #{t}
              <button onClick={() => setTags(tags.filter((x) => x !== t))}><X className="size-3" /></button>
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Hash className="size-4 text-gray-400" />
          <input
            className="flex-1 bg-transparent text-sm text-gray-700 outline-none dark:text-gray-300"
            placeholder="Add tag..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTag()}
          />
        </div>
      </div>
    </div>
  );
}

// ===== 16. RICH TEXT EDITOR =====
function RichTextEditor() {
  const tools = [
    { icon: Bold, label: 'Bold' },
    { icon: Italic, label: 'Italic' },
    { icon: Underline, label: 'Underline' },
    { icon: AlignLeft, label: 'Align Left' },
    { icon: AlignCenter, label: 'Align Center' },
    { icon: AlignRight, label: 'Align Right' },
    { icon: List, label: 'List' },
    { icon: ListOrdered, label: 'Ordered List' },
    { icon: Link, label: 'Link' },
    { icon: ImageIcon, label: 'Image' },
    { icon: Code, label: 'Code' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Rich Text Editor</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/rich-text-editor" />
      </div>
      <div className={card}>
        <div className="rounded-lg border border-gray-200 dark:border-white/10">
          <div className="flex flex-wrap gap-1 border-b border-gray-200 px-2 py-1.5 dark:border-white/5">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <button key={t.label} className="flex size-8 items-center justify-center rounded text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5" title={t.label}>
                  <Icon className="size-4" />
                </button>
              );
            })}
          </div>
          <div className="min-h-[80px] p-3 text-sm text-gray-700 dark:text-gray-300" contentEditable suppressContentEditableWarning>
            Start typing your content here...
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 17. MARKDOWN PREVIEW =====
function MarkdownPreview() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Markdown Preview</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/markdown-preview" />
      </div>
      <div className={card}>
        <div className="rounded-lg bg-gray-50 p-4 dark:bg-white/5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Heading</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">This is a <strong className="text-gray-800 dark:text-white">bold</strong> and <em className="text-gray-800 dark:text-white">italic</em> text.</p>
          <ul className="mt-2 list-disc pl-4 text-sm text-gray-600 dark:text-gray-400">
            <li>Item one</li>
            <li>Item two</li>
          </ul>
          <code className="mt-2 block rounded bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-white/10 dark:text-gray-300">const x = 42;</code>
        </div>
      </div>
    </div>
  );
}

// ===== 18. CODE EDITOR =====
function CodeEditor() {
  const lines = [
    { num: 1, code: 'import React from "react";', indent: 0 },
    { num: 2, code: '', indent: 0 },
    { num: 3, code: 'export default function App() {', indent: 0 },
    { num: 4, code: 'const [count, setCount] = useState(0);', indent: 1 },
    { num: 5, code: '', indent: 0 },
    { num: 6, code: 'return (', indent: 1 },
    { num: 7, code: '<div className="app">', indent: 2 },
    { num: 8, code: '<h1>Hello World</h1>', indent: 3 },
    { num: 9, code: '</div>', indent: 2 },
    { num: 10, code: ');', indent: 1 },
    { num: 11, code: '}', indent: 0 },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Code Editor</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/code-editor" />
      </div>
      <div className={card}>
        <div className="overflow-hidden rounded-lg bg-[#1e1e2e] text-sm">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
            <div className="size-3 rounded-full bg-error-500" />
            <div className="size-3 rounded-full bg-warning-500" />
            <div className="size-3 rounded-full bg-success-500" />
            <span className="ml-2 text-xs text-gray-400">app.tsx</span>
          </div>
          <div className="p-4">
            {lines.map((l) => (
              <div key={l.num} className="flex">
                <span className="mr-4 w-6 text-right text-xs text-gray-600">{l.num}</span>
                <span className="text-gray-300" style={{ paddingLeft: l.indent * 16 }}>
                  <span className="text-blue-light-400">import</span> React <span className="text-blue-light-400">from</span> <span className="text-success-400">&quot;react&quot;</span>;
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 19. DIFF VIEWER =====
function DiffViewer() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Diff Viewer</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/diff-viewer" />
      </div>
      <div className={card}>
        <div className="overflow-hidden rounded-lg bg-[#1e1e2e] text-xs">
          <div className="space-y-0 p-3 font-mono">
            <div className="bg-success-500/10 px-2 py-0.5 text-success-400">+ const greeting = &quot;Hello, World!&quot;;</div>
            <div className="bg-success-500/10 px-2 py-0.5 text-success-400">+ console.log(greeting);</div>
            <div className="bg-error-500/10 px-2 py-0.5 text-error-400">- const msg = &quot;Hi&quot;;</div>
            <div className="bg-error-500/10 px-2 py-0.5 text-error-400">- alert(msg);</div>
            <div className="px-2 py-0.5 text-gray-400">&nbsp; export default App;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 20. SYNTAX HIGHLIGHT =====
function SyntaxHighlight() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Syntax Highlight</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/syntax-highlight" />
      </div>
      <div className={card}>
        <div className="rounded-lg bg-[#1e1e2e] p-4 text-sm">
          <pre className="font-mono">
            <span className="text-blue-light-400">function</span>{' '}
            <span className="text-warning-400">greet</span>
            <span className="text-gray-400">(</span>
            <span className="text-brand-400">name</span>
            <span className="text-gray-400">)</span>{' '}
            <span className="text-gray-400">{'{'}</span>{'\n'}
            {'  '}
            <span className="text-blue-light-400">return</span>{' '}
            <span className="text-success-400">&quot;Hello, &quot;</span>{' '}
            <span className="text-brand-400">+</span>{' '}
            <span className="text-brand-400">name</span>{' '}
            <span className="text-brand-400">+</span>{' '}
            <span className="text-success-400">&quot;!&quot;</span>;{'\n'}
            <span className="text-gray-400">{'}'}</span>
          </pre>
        </div>
      </div>
    </div>
  );
}

// ===== 21. FILE TREE =====
function FileTree() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ src: true });
  const toggle = (key: string) => setExpanded({ ...expanded, [key]: !expanded[key] });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">File Tree</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/file-tree" />
      </div>
      <div className={card}>
        <div className="space-y-0.5 text-sm">
          <button className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300" onClick={() => toggle('src')}>
            {expanded.src ? <ChevronDown className="size-3" /> : <ChevronRight className="size-3" />}
            <Folder className="size-4 text-warning-500" /> src
          </button>
          {expanded.src && (
            <div className="ml-5 space-y-0.5">
              <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                <File className="size-4 text-brand-500" /> app.tsx
              </div>
              <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                <File className="size-4 text-success-500" /> utils.ts
              </div>
              <button className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300" onClick={() => toggle('components')}>
                {expanded.components ? <ChevronDown className="size-3" /> : <ChevronRight className="size-3" />}
                <Folder className="size-4 text-warning-500" /> components
              </button>
              {expanded.components && (
                <div className="ml-5 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <File className="size-4 text-brand-500" /> Header.tsx
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <File className="size-4 text-brand-500" /> Footer.tsx
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
            <File className="size-4 text-gray-400" /> package.json
          </div>
          <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
            <File className="size-4 text-gray-400" /> tsconfig.json
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 22. BREADCRUMB TRAIL =====
function BreadcrumbTrail() {
  const crumbs = [
    { label: 'Home', icon: Home },
    { label: 'Products' },
    { label: 'Electronics' },
    { label: 'Laptops' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Breadcrumb Trail</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/breadcrumb-trail" />
      </div>
      <div className={card}>
        <nav className="flex items-center gap-1 text-sm">
          {crumbs.map((c, i) => (
            <React.Fragment key={c.label}>
              {i > 0 && <ChevronRight className="size-3 text-gray-400" />}
              {i < crumbs.length - 1 ? (
                <button className="text-brand-500 hover:underline">{c.icon ? <c.icon className="size-4" /> : c.label}</button>
              ) : (
                <span className="text-gray-600 dark:text-gray-400">{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}

// ===== 23. STEPPER FORM =====
function StepperForm() {
  const [step, setStep] = useState(0);
  const steps = ['Account', 'Details', 'Confirm'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Stepper Form</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/stepper-form" />
      </div>
      <div className={card}>
        <div className="flex items-center justify-between mb-4">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold ${
                i <= step ? 'bg-brand-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-white/10'
              }`}>
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className={`h-0.5 flex-1 mx-2 ${i < step ? 'bg-brand-500' : 'bg-gray-200 dark:bg-white/10'}`} />}
            </React.Fragment>
          ))}
        </div>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Step {step + 1}: {steps[step]}
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <button onClick={() => setStep(Math.max(0, step - 1))} className="rounded-lg border px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300">Back</button>
          <button onClick={() => setStep(Math.min(2, step + 1))} className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white">Next</button>
        </div>
      </div>
    </div>
  );
}

// ===== 24. WIZARD NAV =====
function WizardNav() {
  const [active, setActive] = useState(1);
  const steps = ['Setup', 'Configure', 'Deploy', 'Complete'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Wizard Navigation</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/wizard-nav" />
      </div>
      <div className={card}>
        <div className="flex rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
          {steps.map((s, i) => (
            <button
              key={s}
              className={`flex-1 px-3 py-2 text-xs font-medium ${
                i === active ? 'bg-brand-500 text-white' : i < active ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/20' : 'bg-white text-gray-500 dark:bg-gray-dark dark:text-gray-400'
              }`}
              onClick={() => setActive(i)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 25. CAROUSEL =====
function Carousel() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { bg: 'from-brand-400 to-purple-500', title: 'Slide One' },
    { bg: 'from-success-400 to-teal-500', title: 'Slide Two' },
    { bg: 'from-warning-400 to-orange-500', title: 'Slide Three' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Carousel</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/carousel" />
      </div>
      <div className={card}>
        <div className="relative overflow-hidden rounded-lg">
          <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${slides[current].bg} text-white`}>
            <span className="text-lg font-bold">{slides[current].title}</span>
          </div>
          <button className="absolute left-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-white/20 text-white" onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}>
            <ChevronLeft className="size-4" />
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-white/20 text-white" onClick={() => setCurrent((current + 1) % slides.length)}>
            <ChevronRight className="size-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {slides.map((_, i) => (
              <button key={i} className={`size-2 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`} onClick={() => setCurrent(i)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 26. LIGHTBOX =====
function Lightbox() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Lightbox</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/lightbox" />
      </div>
      <div className={card}>
        <div
          className="flex h-32 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 text-white"
          onClick={() => setOpen(true)}
        >
          <Eye className="mr-2 size-5" /> Click to Open
        </div>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setOpen(false)}>
            <div className="relative h-96 w-[600px] max-w-[90vw] rounded-lg bg-gradient-to-br from-brand-400 to-purple-500" onClick={(e) => e.stopPropagation()}>
              <button className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/20 text-white" onClick={() => setOpen(false)}>
                <X className="size-4" />
              </button>
              <div className="flex h-full items-center justify-center text-white">
                <span className="text-xl font-bold">Lightbox Image</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== 27. GALLERY GRID =====
function GalleryGrid() {
  const images = [
    { bg: 'from-brand-400 to-purple-500', h: 'h-28' },
    { bg: 'from-success-400 to-teal-500', h: 'h-36' },
    { bg: 'from-warning-400 to-orange-500', h: 'h-24' },
    { bg: 'from-error-400 to-pink-500', h: 'h-32' },
    { bg: 'from-blue-light-400 to-cyan-500', h: 'h-28' },
    { bg: 'from-purple-400 to-indigo-500', h: 'h-36' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Gallery Grid</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/gallery-grid" />
      </div>
      <div className={card}>
        <div className="grid grid-cols-3 gap-2">
          {images.map((img, i) => (
            <div key={i} className={`${img.h} rounded-lg bg-gradient-to-br ${img.bg} flex items-center justify-center text-white text-xs`}>
              Image {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 28. IMAGE COMPARE =====
function ImageCompare() {
  const [position, setPosition] = useState(50);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Image Compare</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/image-compare" />
      </div>
      <div className={card}>
        <div className="relative h-32 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
          <div className="absolute top-0 bottom-0 z-10 w-0.5 bg-white" style={{ left: `${position}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-6 items-center justify-center rounded-full bg-white shadow">
              <Move className="size-3 text-gray-600" />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(+e.target.value)}
            className="absolute inset-0 z-20 cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </div>
  );
}

// ===== 29. AVATAR UPLOAD =====
function AvatarUpload() {
  const [preview, setPreview] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Avatar Upload</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/avatar-upload" />
      </div>
      <div className={`${card} flex flex-col items-center gap-3`}>
        <div className="relative">
          <div className={`flex size-20 items-center justify-center rounded-full ${preview ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-400 dark:bg-white/10'}`}>
            {preview ? <Check className="size-8" /> : <Camera className="size-8" />}
          </div>
          <button className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full bg-brand-500 text-white shadow" onClick={() => setPreview(!preview)}>
            <Plus className="size-3" />
          </button>
        </div>
        <p className="text-xs text-gray-500">Click to upload avatar</p>
      </div>
    </div>
  );
}

// ===== 30. DROPZONE AREA =====
function DropzoneArea() {
  const [dragging, setDragging] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Dropzone Area</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/dropzone-area" />
      </div>
      <div className={card}>
        <div
          className={`flex h-28 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${
            dragging ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-gray-300 dark:border-white/10'
          }`}
          onDragEnter={() => setDragging(true)}
          onDragLeave={() => setDragging(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => setDragging(false)}
        >
          <Upload className={`size-8 ${dragging ? 'text-brand-500' : 'text-gray-400'}`} />
          <p className="mt-2 text-sm text-gray-500">Drag & drop files here</p>
          <p className="text-xs text-gray-400">or click to browse</p>
        </div>
      </div>
    </div>
  );
}

// ===== 31. FILE LIST =====
function FileList() {
  const [files] = useState([
    { name: 'report.pdf', size: '2.4 MB', progress: 100 },
    { name: 'image.png', size: '1.1 MB', progress: 75 },
    { name: 'data.csv', size: '340 KB', progress: 45 },
  ]);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">File List</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/file-list" />
      </div>
      <div className={card}>
        <div className="space-y-3">
          {files.map((f) => (
            <div key={f.name} className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5">
                <FileText className="size-4 text-gray-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm text-gray-700 dark:text-gray-300">{f.name}</p>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
                  <div className={`h-full rounded-full ${f.progress === 100 ? 'bg-success-500' : 'bg-brand-500'}`} style={{ width: `${f.progress}%` }} />
                </div>
              </div>
              <span className="text-xs text-gray-500">{f.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 32. AUDIO PLAYER =====
function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Audio Player</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/audio-player" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-3">
          <button className="flex size-8 items-center justify-center rounded-full bg-brand-500 text-white" onClick={() => setPlaying(!playing)}>
            {playing ? <Pause className="size-4" /> : <Play className="size-4 ml-0.5" />}
          </button>
          <div className="flex-1">
            <div className="h-1.5 w-full cursor-pointer rounded-full bg-gray-200 dark:bg-white/10" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setProgress(((e.clientX - rect.left) / rect.width) * 100);
            }}>
              <div className="h-full rounded-full bg-brand-500" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-1 flex items-center justify-between text-[10px] text-gray-400">
              <span>1:23</span>
              <span>3:45</span>
            </div>
          </div>
          <Volume2 className="size-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

// ===== 33. VIDEO PLAYER =====
function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Video Player</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/video-player" />
      </div>
      <div className={card}>
        <div className="overflow-hidden rounded-lg bg-gray-900">
          <div className="flex h-36 items-center justify-center">
            <button className="flex size-12 items-center justify-center rounded-full bg-white/20 text-white" onClick={() => setPlaying(!playing)}>
              {playing ? <Pause className="size-6" /> : <Play className="size-6 ml-1" />}
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <button className="text-white">{playing ? <Pause className="size-3" /> : <Play className="size-3" />}</button>
            <div className="h-1 flex-1 rounded-full bg-white/20">
              <div className="h-full w-1/3 rounded-full bg-brand-500" />
            </div>
            <span className="text-[10px] text-white/60">2:15 / 6:30</span>
            <Volume2 className="size-3 text-white/60" />
            <Maximize className="size-3 text-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 34. MAP PLACEHOLDER =====
function MapPlaceholder() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Map Placeholder</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/map-placeholder" />
      </div>
      <div className={card}>
        <div className="relative h-36 overflow-hidden rounded-lg bg-blue-light-50 dark:bg-blue-light-500/10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-1/3 size-2 rounded-full bg-brand-500" />
            <div className="absolute left-1/2 top-1/2 size-2 rounded-full bg-error-500" />
            <div className="absolute left-2/3 top-1/4 size-2 rounded-full bg-success-500" />
          </div>
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto size-8 text-brand-500" />
              <p className="mt-1 text-xs text-gray-500">Interactive Map Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 35. CHART WIDGET =====
function ChartWidget() {
  const bars = [40, 65, 45, 80, 55, 70, 90];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Chart Widget</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/chart-widget" />
      </div>
      <div className={card}>
        <div className="flex items-end justify-between gap-1 h-24">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-brand-500 transition-all hover:bg-brand-600"
                style={{ height: `${h}%` }}
              />
              <span className="text-[9px] text-gray-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 36. STAT WIDGET =====
function StatWidget() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Stat Widget</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/stat-widget" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/20">
            <TrendingUp className="size-6 text-brand-500" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">24,580</p>
            <p className="text-xs text-success-500">+12.5% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 37. INFO BANNER =====
function InfoBanner() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Info Banner</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/info-banner" />
      </div>
      <div className={card}>
        <div className="flex items-start gap-3 rounded-lg bg-blue-light-50 p-4 dark:bg-blue-light-500/10">
          <Info className="size-5 shrink-0 text-blue-light-500" />
          <div>
            <p className="text-sm font-medium text-blue-light-600 dark:text-blue-light-400">Information</p>
            <p className="mt-0.5 text-sm text-blue-light-500/80">Your account has been verified successfully.</p>
          </div>
          <button className="ml-auto text-blue-light-400"><X className="size-4" /></button>
        </div>
      </div>
    </div>
  );
}

// ===== 38. WARNING BANNER =====
function WarningBanner() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Warning Banner</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/warning-banner" />
      </div>
      <div className={card}>
        <div className="flex items-start gap-3 rounded-lg bg-warning-50 p-4 dark:bg-warning-500/10">
          <AlertTriangle className="size-5 shrink-0 text-warning-500" />
          <div>
            <p className="text-sm font-medium text-warning-600 dark:text-warning-400">Warning</p>
            <p className="mt-0.5 text-sm text-warning-500/80">Your subscription expires in 3 days. Renew now.</p>
          </div>
          <button className="ml-auto text-warning-400"><X className="size-4" /></button>
        </div>
      </div>
    </div>
  );
}

// ===== 39. MAINTENANCE BANNER =====
function MaintenanceBanner() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Maintenance Banner</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/maintenance-banner" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-3 rounded-lg bg-gray-800 px-4 py-3 text-white dark:bg-gray-700">
          <Settings className="size-5 shrink-0 animate-spin" />
          <p className="text-sm">Scheduled maintenance on March 15, 2:00 AM – 4:00 AM UTC</p>
          <button className="ml-auto text-white/60"><X className="size-4" /></button>
        </div>
      </div>
    </div>
  );
}

// ===== 40. COOKIE BANNER =====
function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Cookie Banner Reset</h4>
      </div>
      <div className={card}>
        <button onClick={() => setVisible(true)} className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs text-gray-600 dark:bg-white/10 dark:text-gray-400">Show Cookie Banner</button>
      </div>
    </div>
  );
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Cookie Banner</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/cookie-banner" />
      </div>
      <div className={card}>
        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-start gap-3">
            <Shield className="size-5 shrink-0 text-brand-500" />
            <p className="text-sm text-gray-600 dark:text-gray-400">We use cookies to enhance your experience. By continuing, you agree to our cookie policy.</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg bg-brand-500 px-4 py-1.5 text-sm text-white" onClick={() => setVisible(false)}>Accept</button>
            <button className="rounded-lg border border-gray-200 px-4 py-1.5 text-sm text-gray-600 dark:border-white/10 dark:text-gray-400" onClick={() => setVisible(false)}>Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 41. ANNOUNCEMENT BAR =====
function AnnouncementBar() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Announcement Bar</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/announcement-bar" />
      </div>
      <div className={card}>
        <div className="flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
          <Zap className="size-4" />
          <span>New: Dark mode is now available! Check your settings.</span>
          <button className="ml-2 underline">Learn More</button>
          <button className="ml-auto"><X className="size-4" /></button>
        </div>
      </div>
    </div>
  );
}

// ===== 42. ONBOARDING TOOLTIP =====
function OnboardingTooltip() {
  const [step, setStep] = useState(0);
  const tips = [
    { title: 'Welcome!', text: 'This is your dashboard overview.' },
    { title: 'Quick Search', text: 'Use ⌘K to search anything.' },
    { title: 'Customize', text: 'Personalize your workspace.' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Onboarding Tooltip</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/onboarding-tooltip" />
      </div>
      <div className={card}>
        <div className="relative rounded-lg border border-brand-200 bg-brand-50 p-4 dark:border-brand-500/20 dark:bg-brand-500/10">
          <h5 className="text-sm font-semibold text-brand-600 dark:text-brand-400">{tips[step].title}</h5>
          <p className="mt-1 text-sm text-brand-500/80">{tips[step].text}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-1">
              {tips.map((_, i) => <div key={i} className={`size-1.5 rounded-full ${i === step ? 'bg-brand-500' : 'bg-brand-300'}`} />)}
            </div>
            <div className="flex gap-2">
              {step > 0 && <button onClick={() => setStep(step - 1)} className="text-xs text-brand-500">Back</button>}
              <button onClick={() => step < tips.length - 1 ? setStep(step + 1) : setStep(0)} className="text-xs font-medium text-brand-600 dark:text-brand-400">
                {step < tips.length - 1 ? 'Next' : 'Restart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 43. TOUR GUIDE =====
function TourGuide() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Tour Guide</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/tour-guide" />
      </div>
      <div className={card}>
        <button onClick={() => setActive(!active)} className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
          {active ? 'End Tour' : 'Start Tour'}
        </button>
        {active && (
          <div className="mt-3 rounded-lg border-2 border-dashed border-brand-300 bg-brand-50/50 p-4 dark:border-brand-500/30 dark:bg-brand-500/5">
            <div className="flex items-center gap-2">
              <MousePointer2 className="size-5 text-brand-500" />
              <div>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-400">Step 1 of 3</p>
                <p className="text-xs text-brand-500/80">This is the main content area of the tour.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== 44. KEYBOARD NAV =====
function KeyboardNav() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Keyboard Navigation</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/keyboard-nav" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3 dark:bg-white/5">
          <Keyboard className="size-5 text-gray-500" />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>Use <kbd className="rounded bg-gray-200 px-1.5 py-0.5 text-xs font-mono dark:bg-white/10">Tab</kbd> and <kbd className="rounded bg-gray-200 px-1.5 py-0.5 text-xs font-mono dark:bg-white/10">Enter</kbd> to navigate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 45. SKIP LINK =====
function SkipLink() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Skip Link</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/skip-link" />
      </div>
      <div className={card}>
        <div className="relative">
          <button
            className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
          >
            Skip to main content
          </button>
          <p className="mt-2 text-xs text-gray-500">Tab into this area to see the skip link become visible (accessibility feature).</p>
        </div>
      </div>
    </div>
  );
}

// ===== 46. FOCUS TRAP =====
function FocusTrap() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Focus Trap</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/focus-trap" />
      </div>
      <div className={card}>
        <div className="rounded-lg border border-gray-200 p-4 dark:border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <Focus className="size-4 text-brand-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trapped Focus Area</span>
          </div>
          <div className="space-y-2">
            <input className="w-full rounded-lg border border-gray-200 px-3 py-1.5 text-sm dark:border-white/10 dark:bg-gray-dark dark:text-white" placeholder="First input" />
            <input className="w-full rounded-lg border border-gray-200 px-3 py-1.5 text-sm dark:border-white/10 dark:bg-gray-dark dark:text-white" placeholder="Second input" />
          </div>
          <p className="mt-2 text-xs text-gray-500">Focus stays within this boundary in a real implementation.</p>
        </div>
      </div>
    </div>
  );
}

// ===== 47. LIVE REGION =====
function LiveRegion() {
  const [message, setMessage] = useState('');
  const messages = ['Item added to cart', 'Form saved successfully', '3 new notifications'];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Live Region (ARIA)</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/live-region" />
      </div>
      <div className={card}>
        <div className="space-y-2">
          <div className="flex gap-2">
            {messages.map((msg, i) => (
              <button key={i} onClick={() => setMessage(msg)} className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs text-gray-600 dark:bg-white/10 dark:text-gray-400">
                Action {i + 1}
              </button>
            ))}
          </div>
          <div aria-live="polite" className="min-h-[28px] rounded-lg bg-success-50 px-3 py-1.5 text-sm text-success-600 dark:bg-success-500/10 dark:text-success-400">
            {message || 'No updates yet'}
          </div>
          <p className="text-xs text-gray-500">Screen readers announce changes to the live region.</p>
        </div>
      </div>
    </div>
  );
}

// ===== 48. SCREEN READER ONLY =====
function ScreenReaderOnly() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Screen Reader Only</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/screen-reader-only" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3 dark:bg-white/5">
          <Accessibility className="size-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Visible content</p>
            <span className="sr-only">This text is only visible to screen readers for accessibility</span>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">Hidden text is announced by assistive technology but not displayed visually.</p>
      </div>
    </div>
  );
}

// ===== 49. PRINT BUTTON =====
function PrintButton() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Print Button</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/print-button" />
      </div>
      <div className={`${card} flex flex-col items-center gap-3`}>
        <button
          onClick={() => typeof window !== 'undefined' && window.print()}
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
        >
          <Printer className="size-4" /> Print Page
        </button>
      </div>
    </div>
  );
}

// ===== 50. FULLSCREEN TOGGLE =====
function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Fullscreen Toggle</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/fullscreen-toggle" />
      </div>
      <div className={`${card} flex flex-col items-center gap-3`}>
        <button
          onClick={toggle}
          className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm text-white"
        >
          {isFullscreen ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
      </div>
    </div>
  );
}

// ===== 28. AUDIO PLAYER =====
function AudioPlayerWidget() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(75);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Audio Player Widget</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/audio-player-widget" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 text-white">
            <Music className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-800 dark:text-white">Midnight Echoes</p>
            <p className="text-xs text-gray-500">Stellar Waves</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="h-1.5 rounded-full bg-gray-200 dark:bg-white/10">
            <div className="h-1.5 rounded-full bg-brand-500 transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-gray-400">
            <span>1:24</span><span>3:58</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"><SkipBack className="size-4" /></button>
          <button onClick={() => setPlaying(!playing)} className="flex size-10 items-center justify-center rounded-full bg-brand-500 text-white hover:bg-brand-600">
            {playing ? <Pause className="size-4" /> : <Play className="size-4 ml-0.5" />}
          </button>
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"><SkipForward className="size-4" /></button>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Volume2 className="size-3.5 text-gray-400" />
          <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="h-1 flex-1 appearance-none rounded-full bg-gray-200 accent-brand-500 dark:bg-white/10" />
        </div>
      </div>
    </div>
  );
}

// ===== 29. VIDEO PLAYER =====
function VideoPlayerWidget() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(45);
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Video Player Widget</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/video-player-widget" />
      </div>
      <div className={card}>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="flex h-40 items-center justify-center">
            {playing ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-600/30 to-purple-600/30">
                <div className="text-white/60 text-sm">Playing Video...</div>
              </div>
            ) : (
              <button onClick={() => setPlaying(true)} className="flex size-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30">
                <Play className="size-6 ml-0.5" />
              </button>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 px-3 pb-2 pt-6">
            <div className="h-1 rounded-full bg-white/30">
              <div className="h-1 rounded-full bg-brand-400 transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={() => setPlaying(!playing)} className="text-white">
                  {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                </button>
                <Volume2 className="size-3.5 text-white/70" />
                <span className="text-[10px] text-white/70">4:32 / 10:15</span>
              </div>
              <button onClick={() => setFullscreen(!fullscreen)} className="text-white/70 hover:text-white">
                <Maximize className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 30. CALENDAR WIDGET =====
function CalendarWidget() {
  const [selectedDate, setSelectedDate] = useState(15);
  const [currentMonth, setCurrentMonth] = useState('March 2026');
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const days = Array.from({ length: 35 }, (_, i) => {
    const day = i - 6;
    return day > 0 && day <= 31 ? day : null;
  });
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Calendar Widget</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/calendar-widget" />
      </div>
      <div className={card}>
        <div className="mb-3 flex items-center justify-between">
          <button onClick={() => setCurrentMonth('March 2026')} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"><ChevronLeft className="size-4" /></button>
          <span className="text-sm font-semibold text-gray-800 dark:text-white">{currentMonth}</span>
          <button onClick={() => setCurrentMonth('May 2026')} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"><ChevronRight className="size-4" /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {daysOfWeek.map((d) => (
            <div key={d} className="text-[10px] font-medium text-gray-400">{d}</div>
          ))}
          {days.map((d, i) => (
            <button
              key={i}
              className={`flex size-7 items-center justify-center rounded-md text-xs ${
                d === selectedDate ? 'bg-brand-500 font-semibold text-white' :
                d ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5' :
                ''
              }`}
              onClick={() => d && setSelectedDate(d)}
              disabled={!d}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 31. WEATHER WIDGET =====
function WeatherWidget() {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const temp = unit === 'C' ? '22°' : '72°';
  const forecast = [
    { day: 'Mon', icon: Sun, high: unit === 'C' ? '24°' : '75°', low: unit === 'C' ? '18°' : '64°' },
    { day: 'Tue', icon: Cloud, high: unit === 'C' ? '20°' : '68°', low: unit === 'C' ? '15°' : '59°' },
    { day: 'Wed', icon: CloudRain, high: unit === 'C' ? '17°' : '63°', low: unit === 'C' ? '12°' : '54°' },
    { day: 'Thu', icon: Sun, high: unit === 'C' ? '23°' : '73°', low: unit === 'C' ? '16°' : '61°' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Weather Widget</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/weather-widget" />
      </div>
      <div className={card}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sun className="size-8 text-warning-500" />
              <span className="text-3xl font-bold text-gray-800 dark:text-white">{temp}</span>
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Sunny • San Francisco</p>
          </div>
          <button onClick={() => setUnit(unit === 'C' ? 'F' : 'C')} className="rounded-md border border-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:border-white/10">
            °{unit}
          </button>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 border-t border-gray-200 pt-3 dark:border-white/5">
          {forecast.map((f) => (
            <div key={f.day} className="text-center">
              <p className="text-[10px] text-gray-500">{f.day}</p>
              <f.icon className="mx-auto mt-1 size-4 text-gray-400" />
              <p className="mt-1 text-xs font-medium text-gray-800 dark:text-white">{f.high}</p>
              <p className="text-[10px] text-gray-400">{f.low}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 32. STOCK TICKER =====
function StockTicker() {
  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', price: 189.84, change: 2.34, up: true },
    { symbol: 'GOOGL', price: 141.80, change: -1.12, up: false },
    { symbol: 'MSFT', price: 415.56, change: 5.67, up: true },
    { symbol: 'TSLA', price: 248.42, change: -3.89, up: false },
  ]);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Stock Ticker</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/stock-ticker" />
      </div>
      <div className={card}>
        <div className="space-y-2">
          {stocks.map((s) => (
            <div key={s.symbol} className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2 dark:border-white/5">
              <div>
                <span className="text-sm font-semibold text-gray-800 dark:text-white">{s.symbol}</span>
                <span className="ml-2 text-xs text-gray-500">${s.price.toFixed(2)}</span>
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${s.up ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}`}>
                {s.up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                {s.up ? '+' : ''}{s.change.toFixed(2)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 33. CHAT BUBBLE =====
function ChatBubble() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey, how is the project going?', sent: false, time: '10:24 AM' },
    { id: 2, text: 'Great! Almost done with the UI components.', sent: true, time: '10:26 AM' },
    { id: 3, text: 'Awesome! Can you share a preview?', sent: false, time: '10:27 AM' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sent: true, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }]);
    setInput('');
    setTyping(true);
    setTimeout(() => setTyping(false), 2000);
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Chat Bubble</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/chat-bubble" />
      </div>
      <div className={card}>
        <div className="max-h-52 space-y-2 overflow-y-auto">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sent ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                m.sent ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200'
              }`}>
                <p>{m.text}</p>
                <p className={`mt-0.5 text-[10px] ${m.sent ? 'text-white/60' : 'text-gray-400'}`}>{m.time}</p>
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="rounded-lg bg-gray-100 px-4 py-2 dark:bg-white/10">
                <div className="flex gap-1">
                  <span className="size-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0ms' }} />
                  <span className="size-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '150ms' }} />
                  <span className="size-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3 flex gap-2">
          <input
            className="flex-1 rounded-lg border border-gray-200 bg-transparent px-3 py-1.5 text-sm text-gray-700 outline-none dark:border-white/10 dark:text-gray-300"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} className="flex size-8 items-center justify-center rounded-lg bg-brand-500 text-white hover:bg-brand-600">
            <Send className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== 34. SOCIAL CARD =====
function SocialCard() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(128);
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Social Card</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/social-card" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-purple-500 text-sm font-bold text-white">JD</div>
          <div>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">Jane Doe</p>
            <p className="text-xs text-gray-500">@janedoe • 2h ago</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">Just shipped the new dashboard design! 🚀 What do you think about the new component library?</p>
        <div className="mt-3 h-32 rounded-lg bg-gradient-to-br from-brand-400/20 to-purple-500/20 dark:from-brand-400/10 dark:to-purple-500/10" />
        <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-white/5">
          <button className={`flex items-center gap-1 text-sm ${liked ? 'text-error-500' : 'text-gray-500 hover:text-error-500'}`} onClick={() => { setLiked(!liked); setLikes(liked ? likes - 1 : likes + 1); }}>
            <Heart className={`size-4 ${liked ? 'fill-error-500' : ''}`} /> {likes}
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand-500"><MessageCircle className="size-4" /> 24</button>
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-success-500"><Share2 className="size-4" /> 8</button>
          <button className={`text-gray-500 ${bookmarked ? 'text-brand-500' : 'hover:text-brand-500'}`} onClick={() => setBookmarked(!bookmarked)}>
            <Bookmark className={`size-4 ${bookmarked ? 'fill-brand-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== 35. PRODUCT CARD =====
function ProductCard() {
  const [inCart, setInCart] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Product Card</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/product-card" />
      </div>
      <div className={card}>
        <div className="relative h-36 rounded-lg bg-gradient-to-br from-warning-400/20 to-orange-500/20 dark:from-warning-400/10 dark:to-orange-500/10">
          <ShoppingCart className="absolute right-3 top-3 size-5 text-warning-500" />
          <div className="flex h-full items-center justify-center">
            <Camera className="size-10 text-warning-400" />
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-start justify-between">
            <div>
              <h5 className="text-sm font-semibold text-gray-800 dark:text-white">Pro Camera Kit</h5>
              <p className="text-xs text-gray-500">Professional grade</p>
            </div>
            <span className="text-lg font-bold text-brand-500">$299</span>
          </div>
          <div className="mt-2 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className={`size-3 ${s <= 4 ? 'fill-warning-500 text-warning-500' : 'text-gray-300 dark:text-white/20'}`} />
            ))}
            <span className="ml-1 text-xs text-gray-500">(4.0)</span>
          </div>
          <button
            onClick={() => setInCart(!inCart)}
            className={`mt-3 w-full rounded-lg py-2 text-sm font-medium transition-colors ${
              inCart ? 'bg-success-50 text-success-600 dark:bg-success-500/20 dark:text-success-400' : 'bg-brand-500 text-white hover:bg-brand-600'
            }`}
          >
            {inCart ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== 36. PROFILE CARD =====
function ProfileCard() {
  const [following, setFollowing] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Profile Card</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/profile-card" />
      </div>
      <div className={card}>
        <div className="flex flex-col items-center">
          <div className="h-16 w-full rounded-lg bg-gradient-to-r from-brand-400 to-purple-500" />
          <div className="-mt-8 flex size-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-brand-400 to-purple-500 text-lg font-bold text-white dark:border-gray-dark">AK</div>
          <h5 className="mt-2 text-sm font-semibold text-gray-800 dark:text-white">Alex Kim</h5>
          <p className="text-xs text-gray-500">@alexkim • Senior Developer</p>
          <div className="mt-3 grid grid-cols-3 gap-4 text-center">
            <div><p className="text-sm font-bold text-gray-800 dark:text-white">842</p><p className="text-[10px] text-gray-500">Posts</p></div>
            <div><p className="text-sm font-bold text-gray-800 dark:text-white">12.4k</p><p className="text-[10px] text-gray-500">Followers</p></div>
            <div><p className="text-sm font-bold text-gray-800 dark:text-white">324</p><p className="text-[10px] text-gray-500">Following</p></div>
          </div>
          <button
            onClick={() => setFollowing(!following)}
            className={`mt-3 w-full rounded-lg py-1.5 text-sm font-medium ${
              following ? 'border border-gray-200 text-gray-600 dark:border-white/10 dark:text-gray-400' : 'bg-brand-500 text-white'
            }`}
          >
            {following ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== 37. NOTIFICATION PANEL =====
function NotificationPanel() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New follower', desc: 'Sarah started following you', time: '2m ago', read: false, icon: UserPlus },
    { id: 2, title: 'Comment received', desc: 'John commented on your post', time: '15m ago', read: false, icon: MessageCircle },
    { id: 3, title: 'System update', desc: 'Version 2.4.0 is available', time: '1h ago', read: true, icon: RefreshCw },
    { id: 4, title: 'Payment received', desc: 'Invoice #1234 was paid', time: '3h ago', read: true, icon: DollarSign },
  ]);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Notification Panel</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/notification-panel" />
      </div>
      <div className={card}>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">2 unread</span>
          <button className="text-xs text-brand-500 hover:underline" onClick={() => setNotifications(notifications.map((n) => ({ ...n, read: true })))}>Mark all read</button>
        </div>
        <div className="max-h-56 space-y-1 overflow-y-auto">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div key={n.id} className={`flex items-start gap-2 rounded-lg px-2 py-2 ${n.read ? '' : 'bg-brand-50 dark:bg-brand-500/10'}`} onClick={() => setNotifications(notifications.map((x) => x.id === n.id ? { ...x, read: true } : x))}>
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
                  <Icon className="size-3.5 text-gray-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-gray-800 dark:text-white">{n.title}</p>
                  <p className="text-[10px] text-gray-500">{n.desc}</p>
                </div>
                <span className="shrink-0 text-[10px] text-gray-400">{n.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ===== 38. ACTIVITY FEED =====
function ActivityFeed() {
  const activities = [
    { id: 1, user: 'Alex', action: 'pushed a commit to', target: 'main', time: '5m ago', color: 'bg-brand-500' },
    { id: 2, user: 'Sarah', action: 'opened a pull request in', target: 'ui-kit', time: '12m ago', color: 'bg-success-500' },
    { id: 3, user: 'Mike', action: 'closed an issue in', target: 'dashboard', time: '1h ago', color: 'bg-error-500' },
    { id: 4, user: 'Emma', action: 'reviewed code in', target: 'api', time: '2h ago', color: 'bg-warning-500' },
    { id: 5, user: 'Tom', action: 'deployed', target: 'production', time: '3h ago', color: 'bg-purple-500' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Activity Feed</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/activity-feed" />
      </div>
      <div className={card}>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />
          <div className="space-y-4">
            {activities.map((a) => (
              <div key={a.id} className="relative flex gap-3 pl-8">
                <div className={`absolute left-1.5 top-1 size-3 rounded-full ${a.color} ring-2 ring-white dark:ring-gray-dark`} />
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-gray-800 dark:text-white">{a.user}</span> {a.action} <span className="font-medium text-brand-500">{a.target}</span>
                  </p>
                  <p className="text-[10px] text-gray-400">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 39. COMMENT THREAD =====
function CommentThread() {
  const [replyOpen, setReplyOpen] = useState<number | null>(null);
  const comments = [
    { id: 1, author: 'Alex', text: 'This feature looks great! Love the design.', time: '1h ago', replies: [
      { id: 11, author: 'Sarah', text: 'Thanks! Took a while to get it right.', time: '45m ago' },
    ]},
    { id: 2, author: 'Mike', text: 'Can we add dark mode support?', time: '30m ago', replies: [] },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Comment Thread</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/comment-thread" />
      </div>
      <div className={card}>
        <div className="max-h-64 space-y-3 overflow-y-auto">
          {comments.map((c) => (
            <div key={c.id}>
              <div className="flex gap-2">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">{c.author[0]}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-800 dark:text-white">{c.author}</span>
                    <span className="text-[10px] text-gray-400">{c.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{c.text}</p>
                  <button className="mt-1 text-[10px] text-brand-500 hover:underline" onClick={() => setReplyOpen(replyOpen === c.id ? null : c.id)}>Reply</button>
                </div>
              </div>
              {c.replies.map((r) => (
                <div key={r.id} className="ml-9 mt-2 flex gap-2">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success-100 text-[9px] font-bold text-success-600 dark:bg-success-500/20 dark:text-success-400">{r.author[0]}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-800 dark:text-white">{r.author}</span>
                      <span className="text-[10px] text-gray-400">{r.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{r.text}</p>
                  </div>
                </div>
              ))}
              {replyOpen === c.id && (
                <div className="ml-9 mt-2 flex gap-2">
                  <input className="flex-1 rounded-lg border border-gray-200 bg-transparent px-2 py-1 text-xs text-gray-700 outline-none dark:border-white/10 dark:text-gray-300" placeholder="Write a reply..." autoFocus />
                  <button className="rounded-lg bg-brand-500 px-2 py-1 text-[10px] text-white">Send</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 40. TAG MANAGER =====
function TagManager() {
  const [tags, setTags] = useState([
    { id: 1, label: 'React', color: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-400' },
    { id: 2, label: 'TypeScript', color: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' },
    { id: 3, label: 'Tailwind', color: 'bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-400' },
    { id: 4, label: 'Next.js', color: 'bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300' },
    { id: 5, label: 'Node.js', color: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' },
  ]);
  const [input, setInput] = useState('');
  const addTag = () => {
    if (input.trim()) {
      setTags([...tags, { id: Date.now(), label: input.trim(), color: 'bg-brand-50 text-brand-700 dark:bg-brand-500/20 dark:text-brand-400' }]);
      setInput('');
    }
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Tag Manager</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/tag-manager" />
      </div>
      <div className={card}>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t.id} className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${t.color}`}>
              <GripVertical className="size-3 opacity-50" />
              {t.label}
              <button onClick={() => setTags(tags.filter((x) => x.id !== t.id))}><X className="size-3" /></button>
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input className="flex-1 rounded-lg border border-gray-200 bg-transparent px-3 py-1.5 text-sm text-gray-700 outline-none dark:border-white/10 dark:text-gray-300" placeholder="Add tag..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTag()} />
          <button onClick={addTag} className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm text-white"><Plus className="size-4" /></button>
        </div>
      </div>
    </div>
  );
}

// ===== 41. IMAGE COMPARE WIDGET =====
function ImageCompareWidget() {
  const [position, setPosition] = useState(50);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Image Compare Widget</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/image-compare-widget" />
      </div>
      <div className={card}>
        <div className="relative h-40 overflow-hidden rounded-lg">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-warning-400 to-orange-500 text-white">
            <span className="text-sm font-bold">After</span>
          </div>
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-brand-400 to-purple-500 text-white" style={{ width: `${100 / (position / 100)}%`, minWidth: '100%' }}>
              <span className="text-sm font-bold">Before</span>
            </div>
          </div>
          <div className="absolute inset-y-0 z-10 w-0.5 bg-white" style={{ left: `${position}%` }}>
            <div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <ArrowRight className="size-3 text-gray-800" />
            </div>
          </div>
          <input type="range" min={0} max={100} value={position} onChange={(e) => setPosition(Number(e.target.value))} className="absolute inset-0 z-20 w-full cursor-ew-resize opacity-0" />
        </div>
      </div>
    </div>
  );
}

// ===== 42. MAP PLACEHOLDER WIDGET =====
function MapPlaceholderWidget() {
  const markers = [
    { x: 30, y: 40, label: 'HQ' },
    { x: 65, y: 25, label: 'Office' },
    { x: 75, y: 60, label: 'Store' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Map Placeholder Widget</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/map-placeholder-widget" />
      </div>
      <div className={card}>
        <div className="relative h-44 overflow-hidden rounded-lg bg-gradient-to-br from-green-100 via-green-50 to-blue-100 dark:from-green-900/20 dark:via-gray-800 dark:to-blue-900/20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-1/3 size-16 rounded-full bg-blue-300/50 dark:bg-blue-500/20" />
            <div className="absolute right-1/4 bottom-1/4 size-20 rounded-full bg-blue-300/50 dark:bg-blue-500/20" />
          </div>
          {markers.map((m, i) => (
            <div key={i} className="absolute flex flex-col items-center" style={{ left: `${m.x}%`, top: `${m.y}%` }}>
              <MapPin className="size-5 text-error-500" />
              <span className="mt-0.5 rounded bg-white px-1 text-[9px] font-medium text-gray-800 shadow-sm dark:bg-gray-800 dark:text-white">{m.label}</span>
            </div>
          ))}
          <div className="absolute bottom-2 right-2 rounded bg-white/80 px-2 py-0.5 text-[10px] text-gray-500 backdrop-blur-sm dark:bg-gray-800/80 dark:text-gray-400">
            🗺 Interactive Map
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 43. DATA TABLE MINI =====
function DataTableMini() {
  const [sortCol, setSortCol] = useState<string>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const data = [
    { name: 'Alice', role: 'Admin', status: 'Active' },
    { name: 'Bob', role: 'Editor', status: 'Inactive' },
    { name: 'Carol', role: 'Viewer', status: 'Active' },
    { name: 'Dave', role: 'Admin', status: 'Active' },
  ];
  const sorted = [...data].sort((a, b) => {
    const val = a[sortCol as keyof typeof a];
    const cmp = val < b[sortCol as keyof typeof b] ? -1 : val > b[sortCol as keyof typeof b] ? 1 : 0;
    return sortDir === 'asc' ? cmp : -cmp;
  });
  const toggleSort = (col: string) => {
    if (sortCol === col) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('asc'); }
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Data Table Mini</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/data-table-mini" />
      </div>
      <div className={card}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/5">
                {['name', 'role', 'status'].map((col) => (
                  <th key={col} className="cursor-pointer px-3 py-2 text-left text-xs font-medium text-gray-500" onClick={() => toggleSort(col)}>
                    <span className="flex items-center gap-1">{col.charAt(0).toUpperCase() + col.slice(1)} <ArrowUpDown className="size-3" /></span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0 dark:border-white/5">
                  <td className="px-3 py-2 text-gray-800 dark:text-gray-200">{row.name}</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{row.role}</td>
                  <td className="px-3 py-2">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${row.status === 'Active' ? 'bg-success-50 text-success-600 dark:bg-success-500/20 dark:text-success-400' : 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ===== 44. CHART PLACEHOLDER =====
function ChartPlaceholder() {
  const data = [
    { label: 'Mon', value: 65, color: 'bg-brand-500' },
    { label: 'Tue', value: 40, color: 'bg-brand-400' },
    { label: 'Wed', value: 80, color: 'bg-brand-500' },
    { label: 'Thu', value: 55, color: 'bg-brand-400' },
    { label: 'Fri', value: 90, color: 'bg-brand-500' },
    { label: 'Sat', value: 35, color: 'bg-brand-400' },
    { label: 'Sun', value: 70, color: 'bg-brand-500' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Chart Placeholder</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/chart-placeholder" />
      </div>
      <div className={card}>
        <div className="flex items-end justify-between gap-2" style={{ height: 120 }}>
          {data.map((d) => (
            <div key={d.label} className="flex flex-1 flex-col items-center gap-1">
              <div className={`w-full rounded-t-md ${d.color} transition-all`} style={{ height: `${d.value}%` }} />
              <span className="text-[10px] text-gray-500">{d.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1"><div className="size-2 rounded-sm bg-brand-500" /> This Week</div>
          <div className="flex items-center gap-1"><div className="size-2 rounded-sm bg-brand-200 dark:bg-brand-500/30" /> Last Week</div>
        </div>
      </div>
    </div>
  );
}

// ===== 45. PROGRESS DASHBOARD =====
function ProgressDashboard() {
  const metrics = [
    { label: 'Revenue', value: 78, target: '$125K', color: 'bg-brand-500' },
    { label: 'Users', value: 92, target: '45.2K', color: 'bg-success-500' },
    { label: 'Orders', value: 64, target: '1.8K', color: 'bg-warning-500' },
    { label: 'Growth', value: 45, target: '18%', color: 'bg-purple-500' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Progress Dashboard</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/progress-dashboard" />
      </div>
      <div className={card}>
        <div className="space-y-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">{m.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Target: {m.target}</span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">{m.value}%</span>
                </div>
              </div>
              <div className="mt-1 h-2 rounded-full bg-gray-200 dark:bg-white/10">
                <div className={`h-2 rounded-full ${m.color} transition-all`} style={{ width: `${m.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 46. SURVEY FORM =====
function SurveyForm() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const questions = [
    { id: 1, question: 'How satisfied are you?', options: ['Very', 'Somewhat', 'Neutral', 'Not very'] },
    { id: 2, question: 'Would you recommend us?', options: ['Definitely', 'Probably', 'Maybe', 'No'] },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Survey Form</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/survey-form" />
      </div>
      <div className={card}>
        {submitted ? (
          <div className="flex flex-col items-center py-4">
            <CheckCircle className="size-10 text-success-500" />
            <p className="mt-2 text-sm font-medium text-gray-800 dark:text-white">Thank you for your feedback!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.id}>
                <p className="mb-2 text-sm font-medium text-gray-800 dark:text-white">{q.question}</p>
                <div className="space-y-1">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      className={`flex w-full items-center gap-2 rounded-lg border px-3 py-1.5 text-sm ${
                        answers[q.id] === opt ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400' : 'border-gray-200 text-gray-600 dark:border-white/10 dark:text-gray-400'
                      }`}
                      onClick={() => setAnswers({ ...answers, [q.id]: opt })}
                    >
                      <div className={`size-3.5 rounded-full border-2 ${answers[q.id] === opt ? 'border-brand-500 bg-brand-500' : 'border-gray-300 dark:border-white/20'}`} />
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => setSubmitted(true)} className="w-full rounded-lg bg-brand-500 py-2 text-sm font-medium text-white hover:bg-brand-600">Submit Survey</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== 47. CONTACT CARD =====
function ContactCard() {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Contact Card</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/contact-card" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-success-400 to-teal-500 text-sm font-bold text-white">RM</div>
          <div>
            <h5 className="text-sm font-semibold text-gray-800 dark:text-white">Rachel Morgan</h5>
            <p className="text-xs text-gray-500">Product Designer</p>
          </div>
        </div>
        <div className="mt-3 space-y-2 border-t border-gray-200 pt-3 dark:border-white/5">
          <div className="flex items-center gap-2">
            <Mail className="size-3.5 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">rachel@company.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="size-3.5 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{showPhone ? '+1 (555) 012-3456' : '••••••••••'}</span>
            <button onClick={() => setShowPhone(!showPhone)} className="ml-auto text-xs text-brand-500 hover:underline">{showPhone ? 'Hide' : 'Show'}</button>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-3.5 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">San Francisco, CA</span>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 rounded-lg bg-brand-500 py-1.5 text-xs font-medium text-white"><Mail className="mr-1 inline size-3" />Email</button>
          <button className="flex-1 rounded-lg border border-gray-200 py-1.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:text-gray-400"><Phone className="mr-1 inline size-3" />Call</button>
        </div>
      </div>
    </div>
  );
}

// ===== 48. PRICING TOGGLE =====
function PricingToggle() {
  const [annual, setAnnual] = useState(false);
  const plans = [
    { name: 'Starter', monthly: 9, annual: 7, features: ['5 Projects', 'Basic Support', '1GB Storage'] },
    { name: 'Pro', monthly: 29, annual: 24, features: ['Unlimited Projects', 'Priority Support', '50GB Storage'] },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Pricing Toggle</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/pricing-toggle" />
      </div>
      <div className={card}>
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className={`text-sm ${!annual ? 'font-semibold text-gray-800 dark:text-white' : 'text-gray-500'}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className={`relative flex h-6 w-11 items-center rounded-full transition-colors ${annual ? 'bg-brand-500' : 'bg-gray-300 dark:bg-white/20'}`}>
            <div className={`size-4 rounded-full bg-white shadow-sm transition-transform ${annual ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
          <span className={`text-sm ${annual ? 'font-semibold text-gray-800 dark:text-white' : 'text-gray-500'}`}>Annual</span>
          {annual && <span className="rounded-full bg-success-50 px-2 py-0.5 text-[10px] font-medium text-success-600 dark:bg-success-500/20 dark:text-success-400">Save 20%</span>}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-lg border border-gray-200 p-3 dark:border-white/10">
              <p className="text-xs font-semibold text-gray-800 dark:text-white">{p.name}</p>
              <div className="mt-1">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">${annual ? p.annual : p.monthly}</span>
                <span className="text-xs text-gray-500">/mo</span>
              </div>
              <ul className="mt-2 space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-1 text-[10px] text-gray-500"><Check className="size-2.5 text-success-500" />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 49. FILTER PANEL =====
function FilterPanel() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Electronics']);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'];
  const toggleCategory = (cat: string) => {
    setSelectedCategories(selectedCategories.includes(cat) ? selectedCategories.filter((c) => c !== cat) : [...selectedCategories, cat]);
  };
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Filter Panel</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/filter-panel" />
      </div>
      <div className={card}>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-xs font-semibold text-gray-800 dark:text-white">Category</h5>
              <SlidersHorizontal className="size-3 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button key={cat} className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  selectedCategories.includes(cat) ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'
                }`} onClick={() => toggleCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h5 className="mb-2 text-xs font-semibold text-gray-800 dark:text-white">Price Range</h5>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">$0</span>
              <input type="range" min={0} max={500} value={priceRange[1]} onChange={(e) => setPriceRange([0, Number(e.target.value)])} className="h-1 flex-1 appearance-none rounded-full bg-gray-200 accent-brand-500 dark:bg-white/10" />
              <span className="text-xs text-gray-500">${priceRange[1]}</span>
            </div>
          </div>
          <div>
            <h5 className="mb-2 text-xs font-semibold text-gray-800 dark:text-white">Rating</h5>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="size-4 cursor-pointer text-warning-500" />
              ))}
            </div>
          </div>
          <button className="w-full rounded-lg bg-brand-500 py-1.5 text-xs font-medium text-white">Apply Filters</button>
        </div>
      </div>
    </div>
  );
}

// ===== 50. SEARCH RESULTS =====
function SearchResults() {
  const [query, setQuery] = useState('dashboard');
  const results = [
    { title: 'Dashboard Overview', desc: 'Main analytics dashboard with real-time metrics...', url: '/dashboard' },
    { title: 'Dashboard Settings', desc: 'Configure your dashboard layout and widgets...', url: '/settings/dashboard' },
    { title: 'Dashboard API', desc: 'RESTful API endpoints for dashboard data...', url: '/api/dashboard' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Search Results</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/search-results" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-white/10 dark:bg-white/5">
          <Search className="size-4 text-gray-400" />
          <input className="flex-1 bg-transparent text-sm text-gray-700 outline-none dark:text-gray-300" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
        </div>
        <p className="mt-2 text-xs text-gray-500">3 results for &quot;{query}&quot;</p>
        <div className="mt-2 space-y-2">
          {results.map((r, i) => (
            <div key={i} className="rounded-lg border border-gray-100 p-3 dark:border-white/5">
              <p className="text-sm font-medium text-brand-500">{r.title}</p>
              <p className="mt-0.5 text-xs text-gray-500">{r.desc.replace(new RegExp(query, 'gi'), (m) => `<mark>${m}</mark>`)}</p>
              <p className="mt-1 text-[10px] text-gray-400">{r.url}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 51. AVATAR GROUP =====
function AvatarGroup() {
  const [expanded, setExpanded] = useState(false);
  const avatars = ['AK', 'SM', 'JD', 'RL', 'MP', 'TW', 'CN', 'EB'];
  const visible = expanded ? avatars : avatars.slice(0, 4);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Avatar Group</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/avatar-group" />
      </div>
      <div className={card}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex -space-x-2">
            {visible.map((a, i) => (
              <div key={i} className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand-400 to-purple-500 text-[10px] font-bold text-white dark:border-gray-dark" style={{ zIndex: visible.length - i }}>
                {a}
              </div>
            ))}
            {!expanded && avatars.length > 4 && (
              <button onClick={() => setExpanded(true)} className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-[10px] font-bold text-gray-600 dark:border-gray-dark dark:bg-white/10 dark:text-gray-400">
                +{avatars.length - 4}
              </button>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{avatars.length} team members</p>
          {expanded && <button onClick={() => setExpanded(false)} className="text-xs text-brand-500 hover:underline">Show less</button>}
        </div>
      </div>
    </div>
  );
}

// ===== 52. KANBAN BOARD =====
function KanbanBoard() {
  const [columns] = useState([
    { title: 'To Do', color: 'bg-gray-400', cards: ['Setup project', 'Design mockups'] },
    { title: 'In Progress', color: 'bg-brand-500', cards: ['Build components', 'API integration'] },
    { title: 'Done', color: 'bg-success-500', cards: ['Plan sprint', 'Setup CI/CD'] },
  ]);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Kanban Board</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/kanban-board" />
      </div>
      <div className={card}>
        <div className="grid grid-cols-3 gap-3">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-2 flex items-center gap-2">
                <div className={`size-2 rounded-full ${col.color}`} />
                <span className="text-xs font-semibold text-gray-800 dark:text-white">{col.title}</span>
                <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-500 dark:bg-white/10">{col.cards.length}</span>
              </div>
              <div className="space-y-1.5">
                {col.cards.map((card, i) => (
                  <div key={i} className="cursor-grab rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-2 text-xs text-gray-700 dark:border-white/5 dark:bg-white/5 dark:text-gray-300">
                    <GripVertical className="mb-0.5 size-3 text-gray-300 dark:text-gray-600" />
                    <p>{card}</p>
                  </div>
                ))}
                <button className="w-full rounded-lg border border-dashed border-gray-200 py-1.5 text-[10px] text-gray-400 hover:border-brand-300 hover:text-brand-500 dark:border-white/10">+ Add card</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== 53. METRIC GAUGE =====
function MetricGauge() {
  const [value, setValue] = useState(72);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Metric Gauge</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/metric-gauge" />
      </div>
      <div className={card}>
        <div className="flex flex-col items-center">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200 dark:text-white/10" />
            <circle cx="60" cy="60" r={radius} fill="none" stroke="url(#gaugeGradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 60 60)" className="transition-all duration-500" />
            <defs><linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#465fff" /><stop offset="100%" stopColor="#9e77ed" /></linearGradient></defs>
            <text x="60" y="55" textAnchor="middle" className="fill-gray-800 dark:fill-white" fontSize="20" fontWeight="bold">{value}%</text>
            <text x="60" y="72" textAnchor="middle" className="fill-gray-400" fontSize="9">Performance</text>
          </svg>
          <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="mt-2 h-1 w-32 appearance-none rounded-full bg-gray-200 accent-brand-500 dark:bg-white/10" />
        </div>
      </div>
    </div>
  );
}

// ===== 54. DONUT CHART =====
function DonutChart() {
  const [hovered, setHovered] = useState<number | null>(null);
  const segments = [
    { label: 'Desktop', value: 45, color: '#465fff' },
    { label: 'Mobile', value: 30, color: '#12b76a' },
    { label: 'Tablet', value: 15, color: '#f79009' },
    { label: 'Other', value: 10, color: '#9e77ed' },
  ];
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  let cumulative = 0;
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Donut Chart</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/donut-chart" />
      </div>
      <div className={card}>
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <svg width="100" height="100" viewBox="0 0 100 100">
              {segments.map((seg, i) => {
                const startAngle = (cumulative / total) * 360;
                cumulative += seg.value;
                const endAngle = (cumulative / total) * 360;
                const startRad = ((startAngle - 90) * Math.PI) / 180;
                const endRad = ((endAngle - 90) * Math.PI) / 180;
                const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                const r = 35;
                const x1 = 50 + r * Math.cos(startRad);
                const y1 = 50 + r * Math.sin(startRad);
                const x2 = 50 + r * Math.cos(endRad);
                const y2 = 50 + r * Math.sin(endRad);
                return (
                  <path key={i} d={`M 50 50 L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    fill={seg.color} opacity={hovered === i ? 1 : 0.8} className="cursor-pointer transition-opacity"
                    onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                  />
                );
              })}
              <circle cx="50" cy="50" r="22" className="fill-white dark:fill-gray-dark" />
              <text x="50" y="53" textAnchor="middle" className="fill-gray-800 dark:fill-white" fontSize="10" fontWeight="bold">{total}%</text>
            </svg>
          </div>
          <div className="space-y-1.5">
            {segments.map((seg, i) => (
              <div key={i} className="flex items-center gap-2" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <div className="size-2.5 rounded-sm" style={{ backgroundColor: seg.color }} />
                <span className="text-xs text-gray-600 dark:text-gray-400">{seg.label}</span>
                <span className="text-xs font-semibold text-gray-800 dark:text-white">{seg.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 55. BADGE COLLECTION =====
function BadgeCollection() {
  const [earned, setEarned] = useState<number[]>([0, 1, 3]);
  const badges = [
    { name: 'First Login', icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { name: 'Contributor', icon: Code2, color: 'from-brand-400 to-purple-500' },
    { name: 'Mentor', icon: Users, color: 'from-success-400 to-teal-500' },
    { name: 'Achiever', icon: Award, color: 'from-pink-400 to-rose-500' },
    { name: 'Explorer', icon: Globe, color: 'from-cyan-400 to-blue-500' },
    { name: 'Champion', icon: Target, color: 'from-purple-400 to-violet-500' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Badge Collection</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/badge-collection" />
      </div>
      <div className={card}>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-gray-500">{earned.length}/{badges.length} earned</span>
          <div className="h-1.5 w-24 rounded-full bg-gray-200 dark:bg-white/10">
            <div className="h-1.5 rounded-full bg-brand-500 transition-all" style={{ width: `${(earned.length / badges.length) * 100}%` }} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((b, i) => {
            const isEarned = earned.includes(i);
            return (
              <button key={i} className={`flex flex-col items-center rounded-lg border p-2 transition-all ${isEarned ? 'border-brand-200 bg-brand-50 dark:border-brand-500/30 dark:bg-brand-500/10' : 'border-gray-200 opacity-40 dark:border-white/5'}`} onClick={() => {
                setEarned(isEarned ? earned.filter((e) => e !== i) : [...earned, i]);
              }}>
                <div className={`flex size-8 items-center justify-center rounded-full ${isEarned ? `bg-gradient-to-br ${b.color} text-white` : 'bg-gray-200 text-gray-400 dark:bg-white/10'}`}>
                  <b.icon className="size-4" />
                </div>
                <span className="mt-1 text-[9px] font-medium text-gray-700 dark:text-gray-300">{b.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ===== 56. ONBOARDING STEPS =====
function OnboardingSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { title: 'Welcome', desc: 'Get started with your new account', icon: Zap },
    { title: 'Setup Profile', desc: 'Add your name and avatar', icon: Users },
    { title: 'Invite Team', desc: 'Add team members to collaborate', icon: UserPlus },
    { title: 'All Done!', desc: 'You\'re ready to go', icon: CheckCircle },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Onboarding Steps</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/onboarding-steps" />
      </div>
      <div className={card}>
        <div className="space-y-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const done = i < currentStep;
            const active = i === currentStep;
            return (
              <div key={i} className={`flex items-center gap-3 rounded-lg border p-3 transition-all ${
                active ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' :
                done ? 'border-success-200 bg-success-50 dark:border-success-500/20 dark:bg-success-500/5' :
                'border-gray-200 dark:border-white/5'
              }`}>
                <div className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
                  done ? 'bg-success-500 text-white' :
                  active ? 'bg-brand-500 text-white' :
                  'bg-gray-200 text-gray-500 dark:bg-white/10'
                }`}>
                  {done ? <Check className="size-4" /> : <Icon className="size-4" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{s.title}</p>
                  <p className="text-[10px] text-gray-500">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} className="flex-1 rounded-lg border border-gray-200 py-1.5 text-xs text-gray-600 dark:border-white/10 dark:text-gray-400">Back</button>
          <button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} className="flex-1 rounded-lg bg-brand-500 py-1.5 text-xs text-white">Continue</button>
        </div>
      </div>
    </div>
  );
}

// ===== 57. COOKIE CONSENT =====
function CookieConsent() {
  const [visible, setVisible] = useState(true);
  const [preferences, setPreferences] = useState({ analytics: true, marketing: false, necessary: true });
  const [showPrefs, setShowPrefs] = useState(false);
  if (!visible) return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Cookie Consent Reset</h4>
      </div>
      <div className={card}>
        <button onClick={() => setVisible(true)} className="text-sm text-brand-500 hover:underline">Show Cookie Banner Again</button>
      </div>
    </div>
  );
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">Cookie Consent</h4>
        <ViewSourceLink sourceSlug="/source/extended-ui/cookie-consent" />
      </div>
      <div className={card}>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-white/5 dark:bg-white/5">
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 size-5 shrink-0 text-brand-500" />
            <div>
              <h5 className="text-sm font-semibold text-gray-800 dark:text-white">We value your privacy</h5>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">We use cookies to enhance your experience. By continuing, you agree to our cookie policy.</p>
            </div>
          </div>
          {showPrefs && (
            <div className="mt-3 space-y-2 border-t border-gray-200 pt-3 dark:border-white/5">
              {[
                { key: 'necessary' as const, label: 'Necessary', desc: 'Required for the site to function' },
                { key: 'analytics' as const, label: 'Analytics', desc: 'Help us improve the site' },
                { key: 'marketing' as const, label: 'Marketing', desc: 'Used for targeted advertising' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-800 dark:text-white">{item.label}</p>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => item.key !== 'necessary' && setPreferences({ ...preferences, [item.key]: !preferences[item.key] })}
                    className={`relative flex h-5 w-9 items-center rounded-full transition-colors ${preferences[item.key] ? 'bg-brand-500' : 'bg-gray-300 dark:bg-white/20'} ${item.key === 'necessary' ? 'cursor-not-allowed opacity-60' : ''}`}
                  >
                    <div className={`size-3.5 rounded-full bg-white shadow-sm transition-transform ${preferences[item.key] ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-3 flex gap-2">
            <button onClick={() => setShowPrefs(!showPrefs)} className="flex-1 rounded-lg border border-gray-200 py-1.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:text-gray-400">
              {showPrefs ? 'Hide Preferences' : 'Manage Preferences'}
            </button>
            <button onClick={() => setVisible(false)} className="flex-1 rounded-lg bg-brand-500 py-1.5 text-xs font-medium text-white">Accept All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== MAIN EXPORT =====
export function ExtendedUIElements() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">Extended UI Elements</h2>
          <p className="mt-1 text-sm text-gray-500">Explore 50+ additional UI components for your admin dashboard</p>
        </div>
        <NextLink href="/source/extended-ui/command-palette" className="inline-flex items-center gap-2 rounded-lg bg-[#1e1e2e] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2d2d3f] transition-colors">
          <Code2 className="size-4" /> View Source Code
        </NextLink>
      </div>

      {/* Section 1: Input & Search */}
      <div>
        <h2 className={heading}>Input & Search</h2>
        <div className={grid3}>
          <CommandPalette />
          <MentionInput />
          <HashtagInput />
        </div>
      </div>

      {/* Section 2: Actions & Interactions */}
      <div>
        <h2 className={heading}>Actions & Interactions</h2>
        <div className={grid3}>
          <CopyToClipboard />
          <RatingStars />
          <LikeButton />
          <ShareButton />
          <BookmarkButton />
          <FollowButton />
          <ReactionPicker />
        </div>
      </div>

      {/* Section 3: Date & Time */}
      <div>
        <h2 className={heading}>Date & Time</h2>
        <div className={grid3}>
          <DateDisplay />
          <TimeDisplay />
          <KeyboardShortcut />
        </div>
      </div>

      {/* Section 4: Media & Display */}
      <div>
        <h2 className={heading}>Media & Display</h2>
        <div className={grid3}>
          <QRCodePlaceholder />
          <ColorPicker />
          <Carousel />
          <Lightbox />
          <GalleryGrid />
          <ImageCompare />
        </div>
      </div>

      {/* Section 5: File Upload */}
      <div>
        <h2 className={heading}>File Upload</h2>
        <div className={grid3}>
          <AvatarUpload />
          <DropzoneArea />
          <FileList />
        </div>
      </div>

      {/* Section 6: Media Players */}
      <div>
        <h2 className={heading}>Media Players</h2>
        <div className={grid3}>
          <AudioPlayer />
          <VideoPlayer />
          <MapPlaceholder />
        </div>
      </div>

      {/* Section 7: Editor & Code */}
      <div>
        <h2 className={heading}>Editor & Code</h2>
        <div className={grid3}>
          <RichTextEditor />
          <MarkdownPreview />
          <CodeEditor />
          <DiffViewer />
          <SyntaxHighlight />
          <FileTree />
        </div>
      </div>

      {/* Section 8: Navigation */}
      <div>
        <h2 className={heading}>Navigation</h2>
        <div className={grid3}>
          <BreadcrumbTrail />
          <StepperForm />
          <WizardNav />
        </div>
      </div>

      {/* Section 9: Data Widgets */}
      <div>
        <h2 className={heading}>Data Widgets</h2>
        <div className={grid3}>
          <ChartWidget />
          <StatWidget />
        </div>
      </div>

      {/* Section 10: Banners */}
      <div>
        <h2 className={heading}>Banners</h2>
        <div className={grid3}>
          <InfoBanner />
          <WarningBanner />
          <MaintenanceBanner />
          <CookieBanner />
          <AnnouncementBar />
        </div>
      </div>

      {/* Section 11: Onboarding */}
      <div>
        <h2 className={heading}>Onboarding</h2>
        <div className={grid3}>
          <OnboardingTooltip />
          <TourGuide />
        </div>
      </div>

      {/* Section 12: Accessibility */}
      <div>
        <h2 className={heading}>Accessibility</h2>
        <div className={grid4}>
          <KeyboardNav />
          <SkipLink />
          <FocusTrap />
          <LiveRegion />
          <ScreenReaderOnly />
          <PrintButton />
          <FullscreenToggle />
        </div>
      </div>

      {/* Section 13: Social & Communication */}
      <div>
        <h2 className={heading}>Social & Communication</h2>
        <div className={grid3}>
          <ChatBubble />
          <SocialCard />
          <CommentThread />
        </div>
      </div>

      {/* Section 14: Cards */}
      <div>
        <h2 className={heading}>Cards</h2>
        <div className={grid3}>
          <ProductCard />
          <ProfileCard />
          <ContactCard />
        </div>
      </div>

      {/* Section 15: Info Widgets */}
      <div>
        <h2 className={heading}>Info Widgets</h2>
        <div className={grid3}>
          <CalendarWidget />
          <WeatherWidget />
          <StockTicker />
          <NotificationPanel />
          <ActivityFeed />
        </div>
      </div>

      {/* Section 16: Data & Charts */}
      <div>
        <h2 className={heading}>Data & Charts</h2>
        <div className={grid3}>
          <DataTableMini />
          <ChartPlaceholder />
          <ProgressDashboard />
          <MetricGauge />
          <DonutChart />
        </div>
      </div>

      {/* Section 17: Forms & Filters */}
      <div>
        <h2 className={heading}>Forms & Filters</h2>
        <div className={grid3}>
          <SurveyForm />
          <PricingToggle />
          <FilterPanel />
          <SearchResults />
        </div>
      </div>

      {/* Section 18: Organization */}
      <div>
        <h2 className={heading}>Organization</h2>
        <div className={grid3}>
          <TagManager />
          <AvatarGroup />
          <KanbanBoard />
          <BadgeCollection />
        </div>
      </div>

      {/* Section 19: Visual Tools */}
      <div>
        <h2 className={heading}>Visual Tools</h2>
        <div className={grid3}>
          <ImageCompareWidget />
          <MapPlaceholderWidget />
          <AudioPlayerWidget />
          <VideoPlayerWidget />
        </div>
      </div>

      {/* Section 20: Onboarding & Consent */}
      <div>
        <h2 className={heading}>Onboarding & Consent</h2>
        <div className={grid3}>
          <OnboardingSteps />
          <CookieConsent />
        </div>
      </div>
    </div>
  );
}

export default ExtendedUIElements;

/* ═══════════════════════════════════════════════════════════════
   NEW EXTENDED UI (155 additional components)
   ═══════════════════════════════════════════════════════════════ */






























































































































































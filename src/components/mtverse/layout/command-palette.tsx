'use client';

import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import {
  ShoppingCart,
  BarChart,
  Megaphone,
  Users,
  TrendingUp,
  Cloud,
  Truck,
  Brain,
  DollarSign,
  Wallet,
  Calendar,
  MessageSquare,
  Mail,
  CheckSquare,
  FolderOpen,
  LifeBuoy,
  Package,
  ShoppingBag,
  UserCheck,
  FileText,
  Receipt,
  Tag,
  Layout,
  Type,
  Table,
  BarChart3,
  Sparkles,
  Layers,
  User,
  Settings,
  CreditCard,
  HelpCircle,
  Key,
  Puzzle,
  LogIn,
  UserPlus,
  KeyRound,
  Search,
  Clock,
  ArrowRight,
  Hash,
} from 'lucide-react';
import { useNavigationStore, type RecentPage } from '@/lib/mtverse/stores/navigation-store';

interface CommandItem {
  label: string;
  href: string;
  group: string;
  icon: React.ElementType;
  keywords?: string;
}

const commandItems: CommandItem[] = [
  // Dashboards
  { label: 'Ecommerce', href: '/dashboards/ecommerce', group: 'Dashboard', icon: ShoppingCart },
  { label: 'Analytics', href: '/dashboards/analytics', group: 'Dashboard', icon: BarChart },
  { label: 'Marketing', href: '/dashboards/marketing', group: 'Dashboard', icon: Megaphone },
  { label: 'CRM', href: '/dashboards/crm', group: 'Dashboard', icon: Users, keywords: 'customer relationship management' },
  { label: 'Stocks', href: '/dashboards/stocks', group: 'Dashboard', icon: TrendingUp, keywords: 'trading market' },
  { label: 'SaaS', href: '/dashboards/saas', group: 'Dashboard', icon: Cloud, keywords: 'software as a service' },
  { label: 'Logistics', href: '/dashboards/logistics', group: 'Dashboard', icon: Truck, keywords: 'shipping delivery' },
  { label: 'AI', href: '/dashboards/ai', group: 'Dashboard', icon: Brain, keywords: 'artificial intelligence machine learning' },
  { label: 'Sales', href: '/dashboards/sales', group: 'Dashboard', icon: DollarSign },
  { label: 'Finance', href: '/dashboards/finance', group: 'Dashboard', icon: Wallet, keywords: 'financial banking' },

  // Apps
  { label: 'Calendar', href: '/apps/calendar', group: 'Apps', icon: Calendar, keywords: 'schedule events' },
  { label: 'Chat', href: '/apps/chat', group: 'Apps', icon: MessageSquare, keywords: 'messaging conversation' },
  { label: 'Email', href: '/apps/email', group: 'Apps', icon: Mail, keywords: 'inbox mail' },
  { label: 'Tasks', href: '/apps/tasks', group: 'Apps', icon: CheckSquare, keywords: 'todo checklist' },
  { label: 'File Manager', href: '/apps/file-manager', group: 'Apps', icon: FolderOpen, keywords: 'files documents storage' },
  { label: 'Support', href: '/apps/support', group: 'Apps', icon: LifeBuoy, keywords: 'help tickets' },

  // Ecommerce
  { label: 'Products', href: '/ecommerce/products', group: 'Ecommerce', icon: Package, keywords: 'catalog items' },
  { label: 'Orders', href: '/ecommerce/orders', group: 'Ecommerce', icon: ShoppingBag, keywords: 'purchases' },
  { label: 'Customers', href: '/ecommerce/customers', group: 'Ecommerce', icon: UserCheck },
  { label: 'Invoices', href: '/ecommerce/invoices', group: 'Ecommerce', icon: FileText, keywords: 'billing receipts' },
  { label: 'Transactions', href: '/ecommerce/transactions', group: 'Ecommerce', icon: Receipt, keywords: 'payments' },
  { label: 'Coupons', href: '/ecommerce/coupons', group: 'Ecommerce', icon: Tag, keywords: 'discounts promo codes' },

  // Components
  { label: 'UI Elements', href: '/components/ui-elements', group: 'Components', icon: Layout, keywords: 'buttons inputs cards' },
  { label: 'Forms', href: '/components/forms', group: 'Components', icon: Type, keywords: 'input textarea select' },
  { label: 'Tables', href: '/components/tables', group: 'Components', icon: Table, keywords: 'data grid' },
  { label: 'Charts', href: '/components/charts', group: 'Components', icon: BarChart3, keywords: 'graphs visualization' },
  { label: 'Advanced UI', href: '/components/advanced-ui', group: 'Components', icon: Sparkles, keywords: 'modals tooltips popover' },
  { label: 'Extended UI', href: '/components/extended-ui', group: 'Components', icon: Layers, keywords: 'carousel drawer timeline' },

  // Pages
  { label: 'Profile', href: '/pages/profile', group: 'Pages', icon: User, keywords: 'account' },
  { label: 'Settings', href: '/pages/settings', group: 'Pages', icon: Settings, keywords: 'preferences configuration' },
  { label: 'Pricing', href: '/pages/pricing', group: 'Pages', icon: CreditCard, keywords: 'plans billing' },
  { label: 'FAQ', href: '/pages/faq', group: 'Pages', icon: HelpCircle, keywords: 'questions answers' },
  { label: 'API Keys', href: '/pages/api-keys', group: 'Pages', icon: Key, keywords: 'tokens credentials' },
  { label: 'Integrations', href: '/pages/integrations', group: 'Pages', icon: Puzzle, keywords: 'connect plugins' },

  // Auth
  { label: 'Sign In', href: '/sign-in', group: 'Auth', icon: LogIn, keywords: 'login' },
  { label: 'Sign Up', href: '/sign-up', group: 'Auth', icon: UserPlus, keywords: 'register' },
  { label: 'Forgot Password', href: '/forgot-password', group: 'Auth', icon: KeyRound, keywords: 'reset password' },
];

export default function CommandPalette() {
  const router = useRouter();
  const { searchOpen, setSearchOpen, addRecentPage, recentPages, initRecentPages } = useNavigationStore();

  // Initialize recent pages from localStorage on mount
  useEffect(() => {
    initRecentPages();
  }, [initRecentPages]);

  // Global keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, setSearchOpen]);

  const navigateTo = useCallback(
    (item: CommandItem) => {
      addRecentPage({ label: item.label, href: item.href, group: item.group });
      router.push(item.href);
      setSearchOpen(false);
    },
    [addRecentPage, router, setSearchOpen]
  );

  const navigateToRecent = useCallback(
    (page: RecentPage) => {
      addRecentPage({ label: page.label, href: page.href, group: page.group });
      router.push(page.href);
      setSearchOpen(false);
    },
    [addRecentPage, router, setSearchOpen]
  );

  // Group items by category
  const groupedItems = commandItems.reduce<Record<string, CommandItem[]>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  const groupOrder = ['Dashboard', 'Apps', 'Ecommerce', 'Components', 'Pages', 'Auth'];

  return (
    <Command.Dialog
      open={searchOpen}
      onOpenChange={setSearchOpen}
      className="fixed inset-0 z-[9999]"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={() => setSearchOpen(false)}
      />

      {/* Dialog container - centered on main content area */}
      <div className="fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-8">
        <div className="mx-auto mt-[10vh] max-w-xl">
          {/* Command palette panel */}
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-gray-900">
            {/* Search input */}
            <div className="flex items-center border-b border-gray-200 px-4 dark:border-white/10">
              <Search className="size-4 shrink-0 text-gray-400" />
              <Command.Input
                placeholder="Search pages, components, apps..."
                className="flex-1 border-none bg-transparent px-3 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none dark:text-white/90 dark:placeholder:text-gray-500"
              />
              <kbd className="hidden shrink-0 rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 sm:inline-block dark:border-white/10 dark:bg-white/5 dark:text-gray-500">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <Command.List className="max-h-80 overflow-y-auto overscroll-contain p-2 custom-scrollbar">
              <Command.Empty>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Search className="mb-2 size-8 text-gray-300 dark:text-gray-600" />
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    No results found
                  </p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                    Try a different search term
                  </p>
                </div>
              </Command.Empty>

              {/* Recent pages - shown when there's no search query */}
              {recentPages.length > 0 && (
                <Command.Group
                  heading={
                    <div className="flex items-center gap-1.5 px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      <Clock className="size-3" />
                      Recent
                    </div>
                  }
                >
                  {recentPages.slice(0, 5).map((page) => (
                    <Command.Item
                      key={`recent-${page.href}`}
                      value={`recent-${page.label}`}
                      onSelect={() => navigateToRecent(page)}
                      className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 data-[selected=true]:bg-brand-50 data-[selected=true]:text-brand-600 dark:text-gray-300 dark:data-[selected=true]:bg-brand-500/10 dark:data-[selected=true]:text-brand-400"
                    >
                      <Clock className="size-4 shrink-0 text-gray-400 dark:text-gray-500" />
                      <span className="flex-1 truncate">{page.label}</span>
                      <span className="shrink-0 text-[10px] font-medium text-gray-400 dark:text-gray-600">
                        {page.group}
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}

              {/* Grouped results */}
              {groupOrder.map((group) => {
                const items = groupedItems[group];
                if (!items) return null;

                return (
                  <Command.Group
                    key={group}
                    heading={
                      <div className="flex items-center gap-1.5 px-2 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400 first:pt-1 dark:text-gray-500">
                        <Hash className="size-3" />
                        {group}
                      </div>
                    }
                  >
                    {items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Command.Item
                          key={item.href}
                          value={`${item.label} ${item.group} ${item.keywords || ''}`}
                          onSelect={() => navigateTo(item)}
                          className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 data-[selected=true]:bg-brand-50 data-[selected=true]:text-brand-600 dark:text-gray-300 dark:data-[selected=true]:bg-brand-500/10 dark:data-[selected=true]:text-brand-400"
                        >
                          <Icon className="size-4 shrink-0 text-gray-400 dark:text-gray-500" />
                          <span className="flex-1 truncate">{item.label}</span>
                          <ArrowRight className="size-3 shrink-0 text-gray-300 opacity-0 transition-opacity group-data-[selected=true]:opacity-100 dark:text-gray-600 data-[selected=true]:opacity-100" />
                        </Command.Item>
                      );
                    })}
                  </Command.Group>
                );
              })}
            </Command.List>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-200 px-4 py-2 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <kbd className="rounded border border-gray-200 bg-gray-50 px-1 py-0.5 text-[9px] font-medium text-gray-400 dark:border-white/10 dark:bg-white/5 dark:text-gray-500">
                    ↑↓
                  </kbd>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">Navigate</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="rounded border border-gray-200 bg-gray-50 px-1 py-0.5 text-[9px] font-medium text-gray-400 dark:border-white/10 dark:bg-white/5 dark:text-gray-500">
                    ↵
                  </kbd>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">Open</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="rounded border border-gray-200 bg-gray-50 px-1 py-0.5 text-[9px] font-medium text-gray-400 dark:border-white/10 dark:bg-white/5 dark:text-gray-500">
                    ESC
                  </kbd>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">Close</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 dark:text-gray-600">
                mtverse admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </Command.Dialog>
  );
}

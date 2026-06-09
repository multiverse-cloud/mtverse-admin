'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  LogOut,
  ChevronLeft,
  X,
} from 'lucide-react';
import { useNavigationStore } from '@/lib/mtverse/stores/navigation-store';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
  badgeColor?: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: 'DASHBOARD',
    items: [
      { label: 'Ecommerce', icon: ShoppingCart, href: '/dashboards/ecommerce' },
      { label: 'Analytics', icon: BarChart, href: '/dashboards/analytics' },
      { label: 'Marketing', icon: Megaphone, href: '/dashboards/marketing' },
      { label: 'CRM', icon: Users, href: '/dashboards/crm' },
      { label: 'Stocks', icon: TrendingUp, href: '/dashboards/stocks' },
      { label: 'SaaS', icon: Cloud, href: '/dashboards/saas', badge: 'New', badgeColor: 'bg-brand-500 text-white' },
      { label: 'Logistics', icon: Truck, href: '/dashboards/logistics' },
      { label: 'AI', icon: Brain, href: '/dashboards/ai', badge: 'Pro', badgeColor: 'bg-warning-500 text-white' },
      { label: 'Sales', icon: DollarSign, href: '/dashboards/sales' },
      { label: 'Finance', icon: Wallet, href: '/dashboards/finance' },
    ],
  },
  {
    title: 'APPS',
    items: [
      { label: 'Calendar', icon: Calendar, href: '/apps/calendar' },
      { label: 'Chat', icon: MessageSquare, href: '/apps/chat', badge: '3', badgeColor: 'bg-error-500 text-white' },
      { label: 'Email', icon: Mail, href: '/apps/email' },
      { label: 'Tasks', icon: CheckSquare, href: '/apps/tasks' },
      { label: 'File Manager', icon: FolderOpen, href: '/apps/file-manager' },
      { label: 'Support', icon: LifeBuoy, href: '/apps/support' },
    ],
  },
  {
    title: 'ECOMMERCE',
    items: [
      { label: 'Products', icon: Package, href: '/ecommerce/products' },
      { label: 'Orders', icon: ShoppingBag, href: '/ecommerce/orders' },
      { label: 'Customers', icon: UserCheck, href: '/ecommerce/customers' },
      { label: 'Invoices', icon: FileText, href: '/ecommerce/invoices' },
      { label: 'Transactions', icon: Receipt, href: '/ecommerce/transactions' },
      { label: 'Coupons', icon: Tag, href: '/ecommerce/coupons' },
    ],
  },
  {
    title: 'COMPONENTS',
    items: [
      { label: 'UI Elements', icon: Layout, href: '/components/ui-elements' },
      { label: 'Forms', icon: Type, href: '/components/forms' },
      { label: 'Tables', icon: Table, href: '/components/tables' },
      { label: 'Charts', icon: BarChart3, href: '/components/charts' },
      { label: 'Advanced UI', icon: Sparkles, href: '/components/advanced-ui' },
      { label: 'Extended UI', icon: Layers, href: '/components/extended-ui' },
    ],
  },
  {
    title: 'PAGES',
    items: [
      { label: 'Profile', icon: User, href: '/pages/profile' },
      { label: 'Settings', icon: Settings, href: '/pages/settings' },
      { label: 'Pricing', icon: CreditCard, href: '/pages/pricing' },
      { label: 'FAQ', icon: HelpCircle, href: '/pages/faq' },
      { label: 'API Keys', icon: Key, href: '/pages/api-keys' },
      { label: 'Integrations', icon: Puzzle, href: '/pages/integrations' },
    ],
  },
  {
    title: 'AUTH',
    items: [
      { label: 'Sign In', icon: LogIn, href: '/sign-in' },
      { label: 'Sign Up', icon: UserPlus, href: '/sign-up' },
      { label: 'Forgot Password', icon: KeyRound, href: '/forgot-password' },
    ],
  },
];

function Tooltip({ children, label, collapsed }: { children: React.ReactNode; label: string; collapsed: boolean }) {
  const [show, setShow] = useState(false);

  if (!collapsed) return <>{children}</>;

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute left-full top-1/2 z-[9999] ml-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1.5 text-xs font-medium text-white shadow-theme-lg dark:bg-gray-200 dark:text-gray-800">
          {label}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800 dark:border-r-gray-200" />
        </div>
      )}
    </div>
  );
}

function NavItemRow({
  item,
  isActive,
  collapsed,
}: {
  item: NavItem;
  isActive: boolean;
  collapsed: boolean;
}) {
  const Icon = item.icon;

  return (
    <Tooltip label={item.label} collapsed={collapsed}>
      <Link
        href={item.href}
        className={`menu-item ${isActive ? 'menu-item-active' : 'menu-item-inactive'} ${
          collapsed ? 'size-10 justify-center px-0 py-0' : ''
        }`}
        title={collapsed ? item.label : undefined}
      >
        <Icon className="size-5 shrink-0" />
        {!collapsed && (
          <>
            <span className="flex-1 truncate text-left">{item.label}</span>
            {item.badge && (
              <span
                className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none ${item.badgeColor}`}
              >
                {item.badge}
              </span>
            )}
          </>
        )}
      </Link>
    </Tooltip>
  );
}

export default function Sidebar() {
  const { sidebarCollapsed, toggleSidebarCollapsed, mobileMenuOpen, setMobileMenuOpen } =
    useNavigationStore();
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const sidebarContent = (
    <div className="flex h-full flex-col bg-white dark:bg-gray-900">
      {/* Logo */}
      <div className={`flex h-[72px] items-center border-b border-gray-200 dark:border-white/[0.05] ${sidebarCollapsed ? 'justify-center px-3' : 'px-5'}`}>
        {sidebarCollapsed ? (
          <div className="flex w-full justify-center">
            <Link href="/" className="text-xl font-bold text-brand-500">M</Link>
          </div>
        ) : (
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold text-brand-500">mtverse</span>
            <span className="text-xl font-normal text-gray-400">admin</span>
          </Link>
        )}
      </div>

      {/* Navigation */}
      <div
        className={`flex-1 ${
          sidebarCollapsed ? 'overflow-y-hidden px-3 py-3' : 'overflow-y-auto modern-scrollbar px-3.5 py-4'
        }`}
      >
        {navGroups.map((group, groupIndex) => (
          <div key={group.title} className={groupIndex > 0 ? (sidebarCollapsed ? 'mt-3' : 'mt-5') : ''}>
            {!sidebarCollapsed && (
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {group.title}
              </p>
            )}
            {sidebarCollapsed && groupIndex > 0 && (
              <div className="mx-3 my-2 border-t border-gray-200 dark:border-white/[0.05]" />
            )}
            <div className={sidebarCollapsed ? 'flex flex-col items-center gap-1' : 'flex flex-col gap-0.5'}>
              {group.items.map((item) => (
                <NavItemRow
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                  collapsed={sidebarCollapsed}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Collapse Toggle */}
      <div className={`border-t border-gray-200 dark:border-white/[0.05] ${sidebarCollapsed ? 'px-3 py-2.5' : 'px-3.5 py-3'}`}>
        {!sidebarCollapsed && (
          <button
            onClick={toggleSidebarCollapsed}
            className="menu-item menu-item-inactive w-full"
          >
            <ChevronLeft className="size-5 shrink-0" />
            <span className="flex-1 truncate text-left">Collapse Sidebar</span>
          </button>
        )}
        {sidebarCollapsed && (
          <Tooltip label="Expand Sidebar" collapsed={sidebarCollapsed}>
            <button
              onClick={toggleSidebarCollapsed}
              className="menu-item menu-item-inactive mx-auto size-10 justify-center px-0 py-0"
            >
              <ChevronLeft className="size-5 shrink-0 rotate-180" />
            </button>
          </Tooltip>
        )}
      </div>

      {/* User Info */}
      <div className={`border-t border-gray-200 dark:border-white/[0.05] ${sidebarCollapsed ? 'px-3 py-3' : 'px-3.5 py-4'}`}>
        {sidebarCollapsed ? (
          <Tooltip label="Admin User" collapsed={sidebarCollapsed}>
            <Link
              href="/pages/profile"
              className="mx-auto flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400"
            >
              AU
            </Link>
          </Tooltip>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/pages/profile"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400"
            >
              AU
            </Link>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                Admin User
              </p>
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                admin@mtverse.io
              </p>
            </div>
            <Link
              href="/sign-in"
              className="flex size-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300"
              title="Logout"
            >
              <LogOut className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="fixed left-0 top-0 z-50 hidden h-screen border-b border-r border-gray-200 transition-all duration-300 ease-in-out dark:border-white/[0.05] lg:block"
        style={{ width: sidebarCollapsed ? '72px' : '260px' }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <aside
            className="absolute left-0 top-0 z-[9999] flex h-screen w-[260px] flex-col border-r border-gray-200 bg-white shadow-theme-lg dark:border-white/[0.05] dark:bg-gray-900"
          >
            {/* Close Button */}
            <div className="flex h-[72px] items-center justify-between border-b border-gray-200 px-6 dark:border-white/[0.05]">
              <Link href="/" className="flex items-center gap-1">
                <span className="text-xl font-bold text-brand-500">mtverse</span>
                <span className="text-xl font-normal text-gray-400">admin</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex size-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto modern-scrollbar px-3.5 py-4">
              {navGroups.map((group, groupIndex) => (
                <div key={group.title} className={groupIndex > 0 ? 'mt-6' : ''}>
                  <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    {group.title}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`menu-item ${isActive ? 'menu-item-active' : 'menu-item-inactive'}`}
                        >
                          <Icon className="size-5 shrink-0" />
                          <span className="flex-1 truncate text-left">{item.label}</span>
                          {item.badge && (
                            <span
                              className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none ${item.badgeColor}`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* User Info */}
            <div className="border-t border-gray-200 px-4 py-4 dark:border-white/[0.05]">
              <div className="flex items-center gap-3">
                <Link
                  href="/pages/profile"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AU
                </Link>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                    Admin User
                  </p>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                    admin@mtverse.io
                  </p>
                </div>
                <Link
                  href="/sign-in"
                  className="flex size-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300"
                  title="Logout"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogOut className="size-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

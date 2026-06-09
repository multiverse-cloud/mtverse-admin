import { create } from 'zustand';

export type PageKey =
  | 'ecommerce' | 'analytics' | 'marketing' | 'crm' | 'stocks' | 'saas' | 'logistics' | 'ai-dashboard' | 'sales' | 'finance'
  | 'calendar' | 'chat' | 'email' | 'tasks' | 'file-manager' | 'support'
  | 'products' | 'orders' | 'customers' | 'invoices' | 'transactions'
  | 'ui-elements' | 'forms' | 'tables' | 'charts-page'
  | 'profile' | 'settings' | 'pricing' | 'faq' | 'api-keys' | 'integrations' | 'activity-log' | 'notifications' | 'team'
  | 'sign-in' | 'sign-up' | 'forgot-password' | 'reset-password' | 'two-step' | 'lock-screen'
  | 'ai-text' | 'ai-image' | 'ai-code'
  | 'component-gallery' | 'blank' | '404' | '500' | 'coming-soon' | 'maintenance'
  | 'coupons' | 'advanced-ui' | 'extended-ui';

export interface RecentPage {
  label: string;
  href: string;
  group: string;
  timestamp: number;
}

const RECENT_PAGES_KEY = 'mtverse-recent-pages';
const MAX_RECENT_PAGES = 8;

function loadRecentPages(): RecentPage[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(RECENT_PAGES_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as RecentPage[];
  } catch {
    return [];
  }
}

function saveRecentPages(pages: RecentPage[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(RECENT_PAGES_KEY, JSON.stringify(pages));
  } catch {
    // Ignore storage errors
  }
}

interface NavigationState {
  currentPage: PageKey;
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  mobileMenuOpen: boolean;
  searchOpen: boolean;
  theme: 'light' | 'dark';
  recentPages: RecentPage[];
  setPage: (page: PageKey) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebarCollapsed: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleSearch: () => void;
  setSearchOpen: (open: boolean) => void;
  toggleTheme: () => void;
  addRecentPage: (page: Omit<RecentPage, 'timestamp'>) => void;
  initRecentPages: () => void;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
  currentPage: 'ecommerce',
  sidebarOpen: true,
  sidebarCollapsed: false,
  mobileMenuOpen: false,
  searchOpen: false,
  theme: 'light',
  recentPages: [],
  setPage: (page) => set({ currentPage: page, mobileMenuOpen: false }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebarCollapsed: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen })),
  setSearchOpen: (open) => set({ searchOpen: open }),
  toggleTheme: () => set((s) => {
    const newTheme = s.theme === 'light' ? 'dark' : 'light';
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
    return { theme: newTheme };
  }),
  addRecentPage: (page) => {
    const { recentPages } = get();
    const withTimestamp = { ...page, timestamp: Date.now() };
    // Remove duplicate by href, then prepend
    const filtered = recentPages.filter((p) => p.href !== page.href);
    const updated = [withTimestamp, ...filtered].slice(0, MAX_RECENT_PAGES);
    saveRecentPages(updated);
    set({ recentPages: updated });
  },
  initRecentPages: () => {
    const loaded = loadRecentPages();
    set({ recentPages: loaded });
  },
}));

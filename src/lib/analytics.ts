/**
 * Lightweight Analytics Helper
 *
 * A provider-agnostic analytics utility that can be easily connected
 * to any analytics provider (GA4, Plausible, Umami, PostHog, etc.)
 *
 * Usage:
 *   import { analytics } from '@/lib/analytics';
 *   analytics.track('button_click', { button: 'cta', page: '/pricing' });
 */

type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean | null>;
};

type AnalyticsProvider = {
  track: (event: AnalyticsEvent) => void;
  pageView: (url: string) => void;
  identify: (userId: string, traits?: Record<string, string>) => void;
  reset: () => void;
};

// Configuration
interface AnalyticsConfig {
  enabled: boolean;
  debug: boolean;
  provider: 'ga4' | 'plausible' | 'umami' | 'posthog' | 'custom';
  measurementId?: string;
  customEndpoint?: string;
}

const defaultConfig: AnalyticsConfig = {
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development',
  provider: 'ga4',
};

let config: AnalyticsConfig = { ...defaultConfig };

/**
 * Initialize analytics with custom configuration
 */
export function initAnalytics(customConfig: Partial<AnalyticsConfig> = {}) {
  config = { ...defaultConfig, ...customConfig };
  if (config.debug) {
    console.log('[Analytics] Initialized with config:', config);
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * GA4 implementation
 */
const ga4Provider: AnalyticsProvider = {
  track({ name, properties }) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const gtag = (window as any).gtag;
      if (gtag) gtag('event', name, properties || {});
    } catch {
      if (config.debug) console.warn('[Analytics] GA4 track failed');
    }
  },
  pageView(url) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const gtag = (window as any).gtag;
      if (gtag) gtag('config', config.measurementId, { page_path: url });
    } catch {
      if (config.debug) console.warn('[Analytics] GA4 pageView failed');
    }
  },
  identify(userId, traits) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const gtag = (window as any).gtag;
      if (gtag) gtag('set', { user_id: userId, ...traits });
    } catch {
      if (config.debug) console.warn('[Analytics] GA4 identify failed');
    }
  },
  reset() {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const gtag = (window as any).gtag;
      if (gtag) gtag('set', { user_id: null });
    } catch {
      if (config.debug) console.warn('[Analytics] GA4 reset failed');
    }
  },
};

/**
 * Plausible implementation
 */
const plausibleProvider: AnalyticsProvider = {
  track({ name, properties }) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const plausible = (window as any).plausible;
      if (plausible) plausible(name, { props: properties || {} });
    } catch {
      if (config.debug) console.warn('[Analytics] Plausible track failed');
    }
  },
  pageView(url) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const plausible = (window as any).plausible;
      if (plausible) plausible('pageview', { props: { url } });
    } catch {
      if (config.debug) console.warn('[Analytics] Plausible pageView failed');
    }
  },
  identify() {
    if (config.debug) console.warn('[Analytics] Plausible does not support identify');
  },
  reset() {},
};

/**
 * Umami implementation
 */
const umamiProvider: AnalyticsProvider = {
  track({ name, properties }) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const umami = (window as any).umami;
      if (umami) umami.track(name, properties || {});
    } catch {
      if (config.debug) console.warn('[Analytics] Umami track failed');
    }
  },
  pageView(url) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const umami = (window as any).umami;
      if (umami) umami.track({ url });
    } catch {
      if (config.debug) console.warn('[Analytics] Umami pageView failed');
    }
  },
  identify() {
    if (config.debug) console.warn('[Analytics] Umami does not support identify');
  },
  reset() {},
};

/**
 * PostHog implementation
 */
const posthogProvider: AnalyticsProvider = {
  track({ name, properties }) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const posthog = (window as any).posthog;
      if (posthog) posthog.capture(name, properties || {});
    } catch {
      if (config.debug) console.warn('[Analytics] PostHog track failed');
    }
  },
  pageView(url) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const posthog = (window as any).posthog;
      if (posthog) posthog.capture('$pageview', { $current_url: url });
    } catch {
      if (config.debug) console.warn('[Analytics] PostHog pageView failed');
    }
  },
  identify(userId, traits) {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const posthog = (window as any).posthog;
      if (posthog) posthog.identify(userId, traits || {});
    } catch {
      if (config.debug) console.warn('[Analytics] PostHog identify failed');
    }
  },
  reset() {
    if (typeof window === 'undefined' || !config.enabled) return;
    try {
      const posthog = (window as any).posthog;
      if (posthog) posthog.reset();
    } catch {
      if (config.debug) console.warn('[Analytics] PostHog reset failed');
    }
  },
};

/**
 * Custom endpoint implementation
 */
const customProvider: AnalyticsProvider = {
  track(event) {
    if (!config.enabled) return;
    fetch(config.customEndpoint || '/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
      keepalive: true,
    }).catch(() => {
      if (config.debug) console.warn('[Analytics] Custom provider track failed');
    });
  },
  pageView(url) {
    customProvider.track({ name: 'page_view', properties: { url } });
  },
  identify(userId, traits) {
    customProvider.track({ name: 'identify', properties: { userId, ...traits } });
  },
  reset() {
    customProvider.track({ name: 'reset' });
  },
};

/* eslint-enable @typescript-eslint/no-explicit-any */

function getProvider(): AnalyticsProvider {
  switch (config.provider) {
    case 'ga4': return ga4Provider;
    case 'plausible': return plausibleProvider;
    case 'umami': return umamiProvider;
    case 'posthog': return posthogProvider;
    case 'custom': return customProvider;
    default: return ga4Provider;
  }
}

export const analytics = {
  track(name: string, properties?: Record<string, string | number | boolean | null>) {
    if (config.debug) console.log(`[Analytics] Track: ${name}`, properties);
    getProvider().track({ name, properties });
  },
  pageView(url: string) {
    if (config.debug) console.log(`[Analytics] PageView: ${url}`);
    getProvider().pageView(url);
  },
  identify(userId: string, traits?: Record<string, string>) {
    if (config.debug) console.log(`[Analytics] Identify: ${userId}`, traits);
    getProvider().identify(userId, traits);
  },
  reset() {
    if (config.debug) console.log('[Analytics] Reset');
    getProvider().reset();
  },
};

export const events = {
  dashboardViewed: (dashboard: string) => analytics.track('dashboard_viewed', { dashboard }),
  componentViewed: (category: string, component: string) => analytics.track('component_viewed', { category, component }),
  sourceCodeViewed: (category: string, component: string, framework: string) => analytics.track('source_code_viewed', { category, component, framework }),
  themeToggled: (theme: 'light' | 'dark') => analytics.track('theme_toggled', { theme }),
  sidebarToggled: (collapsed: boolean) => analytics.track('sidebar_toggled', { collapsed }),
  searchPerformed: (query: string, resultsCount: number) => analytics.track('search_performed', { query, resultsCount }),
  ctaClicked: (ctaName: string, location: string) => analytics.track('cta_clicked', { ctaName, location }),
  pricingViewed: (plan: string) => analytics.track('pricing_viewed', { plan }),
  authAction: (action: 'sign_in' | 'sign_up' | 'sign_out', method?: string) => analytics.track('auth_action', { action, method: method ?? null }),
  navClicked: (section: string, item: string) => analytics.track('nav_clicked', { section, item }),
  errorOccurred: (errorType: string, message: string, path: string) => analytics.track('error_occurred', { errorType, message, path }),
};

export default analytics;

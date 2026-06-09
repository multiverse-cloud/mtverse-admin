#!/usr/bin/env node
/**
 * Update Live Next.js App - Add missing pages to match 729-component catalog
 */

const fs = require('fs');
const path = require('path');

const BASE = '/home/z/my-project/src/app';

// Import the same catalog from the generator
const CATALOG = {
  dashboards: [
    'ecommerce', 'analytics', 'marketing', 'crm', 'stocks', 'saas',
    'logistics', 'ai', 'sales', 'finance',
    'hospital', 'school', 'restaurant', 'real-estate', 'crypto'
  ],
  apps: [
    'calendar', 'chat', 'email', 'tasks', 'file-manager', 'support',
    'contacts', 'projects', 'kanban', 'notes', 'bookmarks', 'weather',
    'calculator', 'music-player', 'photo-gallery', 'video-player'
  ],
  ecommerce: [
    'products', 'add-product', 'orders', 'order-detail', 'customers',
    'invoices', 'create-invoice', 'transactions', 'coupons',
    'product-detail', 'product-comparison', 'wishlist', 'reviews',
    'shipping', 'returns', 'inventory', 'vendors', 'analytics-ecom', 'shop-cart'
  ],
  ai: [
    'text-generator', 'image-generator', 'code-generator', 'prompt-history',
    'ai-chat', 'ai-assistant', 'ai-translator', 'ai-summarizer',
    'ai-code-review', 'ai-data-analysis', 'ai-workflow', 'ai-models'
  ],
  charts: [
    'line-chart', 'bar-chart', 'area-chart', 'pie-chart', 'donut-chart',
    'radial-chart', 'scatter-chart', 'mixed-chart', 'sparkline-chart',
    'funnel-chart', 'revenue-chart', 'sales-chart', 'expense-chart',
    'campaign-chart', 'conversion-chart', 'traffic-chart', 'device-chart',
    'portfolio-chart', 'cashflow-chart', 'user-growth-chart', 'token-usage-chart',
    'stacked-bar-chart', 'grouped-bar-chart', 'stacked-area-chart', 'step-chart',
    'candlestick-chart', 'bubble-chart', 'radar-chart', 'treemap-chart',
    'sunburst-chart', 'geographic-chart', 'gauge-chart', 'bullet-chart',
    'waterfall-chart', 'heatmap-chart'
  ],
  'ui-elements': [
    'accordions', 'alerts', 'avatars', 'avatar-groups', 'badges',
    'breadcrumbs', 'buttons', 'button-groups', 'cards', 'carousels',
    'code-block', 'color-swatches', 'command-palette', 'copy-button',
    'drawers', 'dropdowns', 'empty-states', 'icon-buttons', 'kbd-shortcuts',
    'metric-cards', 'modals', 'notification-panel', 'pagination', 'popovers',
    'progress', 'ribbons', 'skeletons', 'spinners', 'stat-cards',
    'status-badges', 'tabs', 'tag-input', 'timeline', 'toasts', 'tooltips',
    'dividers', 'headings', 'typography', 'lists', 'descriptions',
    'media-objects', 'scrollable', 'blockquote', 'code-highlighters',
    'count-ups', 'gradients', 'shadows', 'aspect-ratios', 'separators',
    'indicators', 'dot-indicators', 'highlight-text', 'animated-text',
    'glow-effects', 'glass-morphism'
  ],
  forms: [
    'text-input', 'email-input', 'password-input', 'number-input',
    'phone-input', 'url-input', 'search-input', 'textarea', 'select',
    'checkbox', 'radio', 'toggle-switch', 'file-input', 'dropzone',
    'date-picker', 'date-range', 'time-picker', 'multi-select',
    'input-group', 'currency-input', 'validation-states', 'horizontal-form',
    'vertical-form', 'two-column-form', 'stepper-form', 'wizard-form',
    'settings-form', 'disabled-state', 'readonly-state',
    'auto-complete', 'mask-input', 'rating-input', 'color-input',
    'percentage-input', 'tag-select', 'tree-select', 'cascader',
    'transfer-list', 'range-slider-form', 'otp-input', 'pin-input',
    'signature-input', 'barcode-input'
  ],
  tables: [
    'basic-table', 'data-table', 'responsive-table', 'compact-table',
    'sortable-table', 'filterable-table', 'paginated-table', 'selectable-table',
    'row-actions-table', 'analytics-table', 'customer-table', 'product-table',
    'orders-table', 'invoice-table', 'transaction-table', 'user-table',
    'api-keys-table', 'status-table',
    'tree-table', 'expandable-table', 'grouped-table', 'frozen-columns',
    'editable-table', 'drag-table', 'nested-table', 'hierarchy-table',
    'summary-table', 'pivot-table', 'comparison-table', 'pricing-table',
    'schedule-table', 'timeline-table', 'property-table'
  ],
  pages: [
    'profile', 'settings', 'pricing', 'faq', 'api-keys', 'integrations',
    'activity-log', 'notifications', 'team', 'blank',
    '404', '500', '503', 'coming-soon', 'maintenance', 'success',
    'component-gallery',
    'about-us', 'blog', 'blog-detail', 'contact-us', 'help-center',
    'terms', 'privacy', 'changelog', 'roadmap', 'license',
    'credits', 'style-guide', 'starter', 'onboarding', 'wizard-page'
  ],
  auth: [
    'sign-in', 'sign-up', 'forgot-password', 'reset-password',
    'lock-screen', 'two-step', 'email-verification', 'password-changed',
    'social-login', 'multi-factor', 'confirm-password', 'welcome-screen'
  ],
  extra: [
    'accordion-group', 'back-to-top', 'breadcrumb-nav', 'circular-progress',
    'collapsible-panel', 'color-picker', 'command-palette-extra', 'confirmation-dialog',
    'context-menu', 'dashboard-widget', 'data-grid', 'date-picker-extra',
    'emoji-picker', 'empty-state-extra', 'error-boundary', 'fade-in',
    'flip-card', 'floating-nav', 'gauge-chart', 'heatmap-widget',
    'kpi-widget', 'loading-overlay', 'masonry-grid', 'mention-input',
    'metric-card', 'morph-button', 'notification-stack', 'page-indicator',
    'parallax-scroll', 'progress-bar-extra', 'range-slider', 'responsive-grid',
    'rotate-in', 'scale-in', 'signature-pad', 'skeleton-loader',
    'slide-in', 'sparkline-chart-extra', 'split-pane', 'stagger-list',
    'stats-card', 'step-indicator', 'swipe-reveal', 'tab-container',
    'tag-input-extra', 'time-picker-extra', 'toast-stack', 'tooltip-wrapper',
    'trend-indicator', 'virtual-list', 'wizard-nav',
    'confetti', 'particle-bg', 'typing-effect', 'scroll-reveal',
    'tilt-card', 'magnetic-button', 'wave-progress', 'orbit-animation',
    'gradient-border', 'neon-glow', 'holographic', 'liquid-button',
    'animated-counter', 'confetti-button', 'morphing-shapes', 'elastic-input',
    'aurora-bg', 'glassmorphism-card'
  ],
  maps: [
    'world-map', 'usa-map', 'europe-map', 'asia-map', 'heatmap-map',
    'choropleth-map', 'bubble-map', 'scatter-map', 'traffic-map', 'sales-map',
    'regional-map', 'city-map', 'density-map', 'route-map', 'comparison-map',
    'timeline-map', 'interactive-map', 'dark-map', 'minimal-map', 'dashboard-map'
  ],
  icons: [
    'lucide-icons', 'heroicons', 'fontawesome-icons', 'material-icons',
    'feather-icons', 'phosphor-icons', 'tabler-icons', 'bootstrap-icons',
    'remix-icons', 'carbon-icons', 'icon-search', 'icon-colors',
    'icon-sizes', 'icon-animations', 'icon-buttons', 'icon-labels',
    'icon-badges', 'icon-groups', 'icon-toolbars', 'icon-nav',
    'icon-cards', 'icon-list', 'icon-grid', 'icon-picker', 'icon-library'
  ],
  widgets: [
    'stats-widget', 'chart-widget', 'list-widget', 'table-widget',
    'progress-widget', 'activity-widget', 'notification-widget', 'weather-widget',
    'clock-widget', 'calendar-widget', 'todo-widget', 'quick-actions-widget',
    'search-widget', 'user-widget', 'system-widget', 'feed-widget',
    'metric-widget', 'comparison-widget', 'ranking-widget', 'timeline-widget',
    'finance-widget', 'task-widget', 'social-widget', 'performance-widget',
    'health-widget', 'server-widget', 'storage-widget', 'bandwidth-widget',
    'uptime-widget', 'alert-widget'
  ],
  layouts: [
    'sidebar-layout', 'topnav-layout', 'dual-sidebar-layout', 'compact-sidebar',
    'horizontal-layout', 'boxed-layout', 'rtl-layout', 'fluid-layout',
    'fixed-header', 'fixed-sidebar', 'collapsible-sidebar', 'hidden-sidebar',
    'overlay-sidebar', 'tab-navigation', 'split-view', 'master-detail',
    'three-column', 'dashboard-grid', 'kanban-layout', 'focus-mode'
  ],
  emails: [
    'welcome-email', 'reset-password-email', 'invoice-email', 'notification-email',
    'newsletter-email', 'promotional-email', 'order-confirmation', 'shipping-update',
    'subscription-email', 'team-invite', 'report-email', 'alert-email',
    'verification-email', 'receipt-email', 'social-email'
  ],
  calendars: [
    'month-view', 'week-view', 'day-view', 'agenda-view', 'schedule-view',
    'timeline-view', 'resource-calendar', 'event-calendar', 'task-calendar',
    'booking-calendar', 'availability-calendar', 'dark-calendar'
  ],
  dataviz: [
    'treemap', 'sunburst', 'sankey', 'chord', 'network-graph', 'force-graph',
    'radar-comparison', 'bubble-chart-viz', 'scatter-matrix', 'parallel-coordinates',
    'waterfall-chart-viz', 'marimekko', 'bullet-chart-viz', 'funnel-3d',
    'pyramid-chart', 'polar-chart', 'wind-rose', 'histogram', 'box-plot',
    'violin-plot', 'contour-plot', 'surface-plot', 'ternary-plot',
    'candlestick-advanced', 'correlation-matrix'
  ],
  landing: [
    'saas-landing', 'app-landing', 'agency-landing', 'startup-landing',
    'portfolio-landing', 'product-landing', 'ebook-landing', 'event-landing',
    'course-landing', 'corporate-landing'
  ],
  editors: [
    'rich-text-editor', 'markdown-editor', 'code-editor', 'wysiwyg-editor',
    'block-editor', 'inline-editor', 'image-editor', 'table-editor',
    'formula-editor', 'content-editor'
  ],
  chat: [
    'basic-chat', 'sidebar-chat', 'full-chat', 'support-chat', 'team-chat',
    'video-chat', 'chat-bubble', 'chat-list', 'chat-widget', 'chat-embed'
  ],
  blocks: [
    'stats-block', 'cta-block', 'feature-block', 'pricing-block', 'testimonial-block',
    'hero-block', 'gallery-block', 'faq-block', 'team-block', 'contact-block',
    'newsletter-block', 'footer-block', 'header-block', 'sidebar-block', 'card-block',
    'table-block', 'form-block', 'chart-block', 'timeline-block', 'search-block'
  ],
  headers: [
    'standard-header', 'minimal-header', 'centered-header', 'mega-menu-header',
    'transparent-header', 'floating-header', 'sidebar-header', 'dual-header',
    'search-header', 'notification-header', 'profile-header', 'action-header',
    'breadcrumb-header', 'tab-header', 'contextual-header'
  ],
  footers: [
    'simple-footer', 'multi-column-footer', 'minimal-footer', 'centered-footer',
    'social-footer', 'newsletter-footer', 'sitemap-footer', 'brand-footer',
    'app-footer', 'dashboard-footer', 'corporate-footer', 'compact-footer'
  ],
  pricing: [
    'basic-pricing', 'comparison-pricing', 'toggle-pricing', 'card-pricing',
    'table-pricing', 'enterprise-pricing', 'startup-pricing', 'saas-pricing',
    'freemium-pricing', 'tiered-pricing', 'custom-pricing', 'annual-pricing'
  ],
  testimonials: [
    'card-testimonial', 'carousel-testimonial', 'grid-testimonial', 'minimal-testimonial',
    'video-testimonial', 'quote-testimonial', 'avatar-testimonial', 'company-testimonial',
    'social-proof', 'review-testimonial', 'featured-testimonial', 'inline-testimonial'
  ],
  heroes: [
    'centered-hero', 'split-hero', 'minimal-hero', 'illustration-hero',
    'video-hero', 'gradient-hero', 'dark-hero', 'product-hero',
    'app-hero', 'startup-hero', 'agency-hero', 'enterprise-hero'
  ],
  features: [
    'grid-features', 'tab-features', 'icon-features', 'card-features',
    'sidebar-features', 'comparison-features', 'animated-features', 'interactive-features',
    'media-features', 'step-features', 'checklist-features', 'showcase-features'
  ],
  faqs: [
    'accordion-faq', 'search-faq', 'categorized-faq', 'sidebar-faq',
    'minimal-faq', 'card-faq', 'tab-faq', 'sticky-faq',
    'guided-faq', 'community-faq', 'support-faq', 'product-faq'
  ],
  teams: [
    'grid-team', 'card-team', 'minimal-team', 'avatar-team',
    'detailed-team', 'department-team', 'leadership-team', 'social-team',
    'hierarchy-team', 'startup-team', 'compact-team', 'overlay-team'
  ],
  galleries: [
    'grid-gallery', 'masonry-gallery', 'carousel-gallery', 'lightbox-gallery',
    'justified-gallery', 'thumbnail-gallery', 'slider-gallery', 'filterable-gallery',
    'fullscreen-gallery', 'pinterest-gallery', 'comparison-gallery', 'stacked-gallery'
  ],
  timelines: [
    'vertical-timeline', 'horizontal-timeline', 'alternate-timeline', 'minimal-timeline',
    'card-timeline', 'icon-timeline', 'step-timeline', 'interactive-timeline',
    'company-timeline', 'project-timeline', 'history-timeline', 'process-timeline'
  ],
  notifications: [
    'toast-notifications', 'banner-notifications', 'inline-notifications', 'alert-notifications',
    'push-notifications', 'email-notifications', 'system-notifications', 'action-notifications',
    'progress-notifications', 'stacked-notifications', 'persistent-notifications', 'minimal-notifications'
  ],
  onboarding: [
    'welcome-onboarding', 'step-onboarding', 'tooltip-onboarding', 'modal-onboarding',
    'sidebar-onboarding', 'fullpage-onboarding', 'card-onboarding', 'interactive-onboarding',
    'checklist-onboarding', 'guided-onboarding', 'video-onboarding', 'progress-onboarding',
    'feature-onboarding', 'profile-onboarding', 'team-onboarding', 'setup-onboarding',
    'customization-onboarding', 'integration-onboarding', 'dashboard-onboarding', 'complete-onboarding',
    'skip-onboarding', 'return-onboarding', 'quickstart-onboarding', 'tour-onboarding',
    'walkthrough-onboarding', 'intro-onboarding', 'discovery-onboarding', 'explorer-onboarding'
  ],
  data: [
    'empty-data', 'loading-data', 'error-data', 'no-permission',
    'offline-data', 'sync-data', 'refresh-data', 'bulk-data',
    'export-data', 'import-data', 'filter-data', 'sort-data',
    'search-data', 'paginate-data', 'group-data', 'aggregate-data',
    'transform-data', 'validate-data', 'preview-data', 'archive-data',
    'backup-data', 'restore-data', 'migrate-data', 'clean-data',
    'merge-data', 'split-data', 'compare-data', 'diff-data'
  ]
};

function titleCase(str) {
  return str.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}
function pascalCase(str) {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase()).replace(/^\w/, l => l.toUpperCase());
}

let totalCreated = 0;
let totalSkipped = 0;

for (const [category, items] of Object.entries(CATALOG)) {
  if (category === 'auth') {
    // Auth pages in (auth) route group
    for (const name of items) {
      const dir = path.join(BASE, '(auth)', name);
      fs.mkdirSync(dir, { recursive: true });
      const filePath = path.join(dir, 'page.tsx');
      if (fs.existsSync(filePath)) { totalSkipped++; continue; }
      const title = titleCase(name);
      fs.writeFileSync(filePath, `export default function ${pascalCase(name)}Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <span className="text-2xl font-bold text-brand-500">mtverse</span>
          <span className="text-2xl text-gray-400">admin</span>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-white/5 dark:bg-gray-dark">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">${title}</h2>
          <p className="mt-1 text-sm text-gray-500">Enter your details to continue</p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" placeholder="you@example.com" className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input type="password" placeholder="Enter password" className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </div>
            <button className="w-full rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white hover:bg-brand-600">${title}</button>
          </div>
        </div>
      </div>
    </div>
  );
}`);
      totalCreated++;
    }
  } else if (category === 'landing') {
    for (const name of items) {
      const dir = path.join(BASE, '(landing)', name);
      fs.mkdirSync(dir, { recursive: true });
      const filePath = path.join(dir, 'page.tsx');
      if (fs.existsSync(filePath)) { totalSkipped++; continue; }
      fs.writeFileSync(filePath, `export default function ${pascalCase(name)}Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="py-24 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">${titleCase(name)}</h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">Landing page for ${titleCase(name).toLowerCase()}</p>
      </div>
    </div>
  );
}`);
      totalCreated++;
    }
  } else {
    // Dashboard pages in (dashboard)/category/name
    for (const name of items) {
      const dir = path.join(BASE, '(dashboard)', category, name);
      fs.mkdirSync(dir, { recursive: true });
      const filePath = path.join(dir, 'page.tsx');
      if (fs.existsSync(filePath)) { totalSkipped++; continue; }
      const title = titleCase(name);
      fs.writeFileSync(filePath, `export default function ${pascalCase(name)}Page() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">${title}</h2>
        <p className="mt-1 text-sm text-gray-500">Explore the ${title.toLowerCase()} component with interactive examples</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-base font-semibold text-gray-800 dark:text-white/90">Basic ${title}</h4>
          <div className="flex h-[200px] items-center justify-center rounded-lg bg-gray-50 text-gray-400 dark:bg-white/5">
            ${title} Component
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-base font-semibold text-gray-800 dark:text-white/90">Interactive ${title}</h4>
          <div className="flex h-[200px] items-center justify-center rounded-lg bg-gray-50 text-gray-400 dark:bg-white/5">
            Interactive Variant
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark lg:col-span-2">
          <h4 className="mb-4 text-base font-semibold text-gray-800 dark:text-white/90">Full ${title}</h4>
          <div className="flex h-[300px] items-center justify-center rounded-lg bg-gray-50 text-gray-400 dark:bg-white/5">
            Full-width ${title} with all features
          </div>
        </div>
      </div>
    </div>
  );
}`);
      totalCreated++;
    }
  }
}

console.log(`✅ Live Next.js app updated: ${totalCreated} new pages created, ${totalSkipped} existing pages skipped`);
console.log(`📊 Total pages in live app: ${totalCreated + totalSkipped}`);

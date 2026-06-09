'use client';

import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  AreaChart,
  Line,
  Bar,
  Pie,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts';
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  Eye,
  Clock,
  MousePointerClick,
  BarChart3,
  Megaphone,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Truck,
  Brain,
  Wallet,
  CreditCard,
  Activity,
  Cpu,
  Globe,
  CheckCircle2,
  XCircle,
  AlertCircle,
  MapPin,
  Timer,
  Star,
} from 'lucide-react';
import {
  ecommerceData,
  analyticsData,
  marketingData,
  crmData,
  stocksData,
  saasData,
  logisticsData,
  aiData,
  salesData,
  financeData,
} from '@/lib/mtverse/data/mock-data';

/* ──────────────────────── shared helpers ──────────────────────── */

const CHART_COLORS = ['#465fff', '#12b76a', '#f79009', '#f04438', '#0ba5ec'];

const tooltipStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  border: '1px solid #e4e7ec',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px -2px rgba(16,24,40,0.10),0px 2px 4px -2px rgba(16,24,40,0.06)',
  padding: '10px 14px',
};

function statusBadge(status: string) {
  const map: Record<string, string> = {
    Delivered: 'bg-success-50 text-success-600',
    Active: 'bg-success-50 text-success-600',
    Paid: 'bg-success-50 text-success-600',
    Resolved: 'bg-success-50 text-success-600',
    'In Stock': 'bg-success-50 text-success-600',
    Processing: 'bg-warning-50 text-warning-600',
    Pending: 'bg-warning-50 text-warning-600',
    'In Progress': 'bg-warning-50 text-warning-600',
    Shipped: 'bg-blue-light-50 text-blue-light-600',
    'In Transit': 'bg-blue-light-50 text-blue-light-600',
    Cancelled: 'bg-error-50 text-error-600',
    Overdue: 'bg-error-50 text-error-600',
    'Out of Stock': 'bg-error-50 text-error-600',
    'Low Stock': 'bg-gray-100 text-gray-600',
    Draft: 'bg-gray-100 text-gray-600',
    Loading: 'bg-warning-50 text-warning-600',
    Maintenance: 'bg-gray-100 text-gray-600',
  };
  return map[status] ?? 'bg-gray-100 text-gray-600';
}

function TrendIcon({ trend }: { trend: 'up' | 'down' }) {
  return trend === 'up' ? (
    <ArrowUpRight className="h-3.5 w-3.5 text-success-600" />
  ) : (
    <ArrowDownRight className="h-3.5 w-3.5 text-error-600" />
  );
}

function MetricCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  iconBg,
}: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ElementType;
  iconBg: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-theme-sm text-gray-500">{title}</p>
          <h4 className="mt-1 text-title-sm font-semibold text-gray-800 dark:text-white/90">
            {value}
          </h4>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1">
        <TrendIcon trend={trend} />
        <span
          className={`text-theme-xs font-medium ${
            trend === 'up' ? 'text-success-600' : 'text-error-600'
          }`}
        >
          {change}
        </span>
        <span className="text-theme-xs text-gray-500">vs last month</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   1. ECOMMERCE DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function EcommerceDashboard() {
  const d = ecommerceData;
  const iconMap: Record<string, { icon: React.ElementType; bg: string }> = {
    'dollar-sign': { icon: DollarSign, bg: 'bg-brand-50 text-brand-500' },
    'shopping-cart': { icon: ShoppingCart, bg: 'bg-success-50 text-success-600' },
    users: { icon: Users, bg: 'bg-warning-50 text-warning-600' },
    'trending-up': { icon: TrendingUp, bg: 'bg-blue-light-50 text-blue-light-600' },
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Ecommerce Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Track sales, orders, and customer activity
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.salesCards.map((c) => {
          const cfg = iconMap[c.icon] ?? iconMap['dollar-sign'];
          return (
            <MetricCard
              key={c.title}
              title={c.title}
              value={c.value}
              change={c.change}
              trend={c.trend}
              icon={cfg.icon}
              iconBg={cfg.bg}
            />
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Revenue Chart */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-8">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Revenue Overview
            </h4>
            <span className="text-theme-xs text-gray-500">Last 12 months</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={d.revenueChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#667085' }} />
              <YAxis tick={{ fontSize: 12, fill: '#667085' }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#465fff"
                strokeWidth={2}
                dot={false}
                name="Revenue"
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#12b76a"
                strokeWidth={2}
                dot={false}
                name="Orders"
              />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources Donut */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-4">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Traffic Sources
            </h4>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={d.trafficSources}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                dataKey="percentage"
                nameKey="source"
                paddingAngle={2}
              >
                {d.trafficSources.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-2">
            {d.trafficSources.map((s, i) => (
              <div key={s.source} className="flex items-center justify-between text-theme-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
                  />
                  <span className="text-gray-600 dark:text-gray-400">{s.source}</span>
                </div>
                <span className="font-medium text-gray-800 dark:text-white/90">
                  {s.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Recent Orders Table */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-8">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Order ID</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Customer</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Product</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Amount</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Status</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody>
                {d.recentOrders.map((o) => (
                  <tr key={o.id} className="border-b border-gray-100 dark:border-white/5">
                    <td className="px-4 py-3 text-theme-sm font-medium text-brand-500">{o.id}</td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{o.customer}</td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{o.product}</td>
                    <td className="px-4 py-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">{o.amount}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${statusBadge(o.status)}`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-500">{o.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-4">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Top Products
          </h4>
          <div className="space-y-4">
            {d.topProducts.map((p, i) => (
              <div key={p.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-theme-xs font-semibold text-brand-500 dark:bg-brand-500/20">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{p.name}</p>
                    <p className="text-theme-xs text-gray-500">{p.sales} sales</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">{p.revenue}</p>
                  <p className="text-theme-xs text-success-600">{p.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   2. ANALYTICS DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function AnalyticsDashboard() {
  const d = analyticsData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: Eye, bg: 'bg-brand-50 text-brand-500' },
    { icon: Clock, bg: 'bg-success-50 text-success-600' },
    { icon: MousePointerClick, bg: 'bg-warning-50 text-warning-600' },
    { icon: BarChart3, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Analytics Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Monitor website traffic and user engagement
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Traffic Overview */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-8">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Traffic Overview
            </h4>
            <span className="text-theme-xs text-gray-500">Last 12 months</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={d.trafficOverview}>
              <defs>
                <linearGradient id="visitorsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#465fff" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#465fff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#12b76a" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#12b76a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#667085' }} />
              <YAxis tick={{ fontSize: 12, fill: '#667085' }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#465fff"
                strokeWidth={2}
                fill="url(#visitorsGrad)"
                name="Visitors"
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stroke="#12b76a"
                strokeWidth={2}
                fill="url(#sessionsGrad)"
                name="Sessions"
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Device Breakdown Pie */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-4">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Device Breakdown
          </h4>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={d.deviceBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                dataKey="percentage"
                nameKey="device"
                paddingAngle={2}
              >
                {d.deviceBreakdown.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-2">
            {d.deviceBreakdown.map((item) => (
              <div key={item.device} className="flex items-center justify-between text-theme-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-600 dark:text-gray-400">{item.device}</span>
                </div>
                <span className="font-medium text-gray-800 dark:text-white/90">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Acquisition Channels */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-5">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Acquisition Channels
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={d.acquisitionChannels} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 12, fill: '#667085' }} />
              <YAxis
                type="category"
                dataKey="channel"
                tick={{ fontSize: 12, fill: '#667085' }}
                width={110}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="visitors" fill="#465fff" radius={[0, 4, 4, 0]} barSize={20} name="Visitors" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Pages */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-7">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Top Pages
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Page</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Views</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Unique</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Bounce Rate</th>
                </tr>
              </thead>
              <tbody>
                {d.topPages.map((p) => (
                  <tr key={p.page} className="border-b border-gray-100 dark:border-white/5">
                    <td className="px-4 py-3 text-theme-sm font-medium text-brand-500">{p.page}</td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                      {p.views.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                      {p.unique.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{p.bounce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3. MARKETING DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function MarketingDashboard() {
  const d = marketingData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: Megaphone, bg: 'bg-brand-50 text-brand-500' },
    { icon: Target, bg: 'bg-success-50 text-success-600' },
    { icon: Zap, bg: 'bg-warning-50 text-warning-600' },
    { icon: DollarSign, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Marketing Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Campaign performance and channel analytics
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* Campaign Performance Chart */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Campaign Performance
          </h4>
          <span className="text-theme-xs text-gray-500">Last 12 months</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={d.campaignPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#667085' }} />
            <YAxis tick={{ fontSize: 12, fill: '#667085' }} />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey="impressions" fill="#465fff" radius={[4, 4, 0, 0]} name="Impressions" />
            <Bar dataKey="clicks" fill="#12b76a" radius={[4, 4, 0, 0]} name="Clicks" />
            <Bar dataKey="conversions" fill="#f79009" radius={[4, 4, 0, 0]} name="Conversions" />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Channels Table */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-7">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Channel Performance
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Channel</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Spend</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Leads</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">CPL</th>
                </tr>
              </thead>
              <tbody>
                {d.channels.map((ch) => (
                  <tr key={ch.channel} className="border-b border-gray-100 dark:border-white/5">
                    <td className="px-4 py-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {ch.channel}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                      ${ch.spend.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                      {ch.leads.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                      ${ch.cpl.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Email Metrics */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-5">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Email Metrics
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Emails Sent', value: d.emailMetrics.sent.toLocaleString(), icon: Megaphone, bg: 'bg-brand-50 text-brand-500' },
              { label: 'Opened', value: d.emailMetrics.opened.toLocaleString(), icon: Eye, bg: 'bg-success-50 text-success-600' },
              { label: 'Clicked', value: d.emailMetrics.clicked.toLocaleString(), icon: MousePointerClick, bg: 'bg-warning-50 text-warning-600' },
              { label: 'Bounced', value: d.emailMetrics.bounced.toLocaleString(), icon: XCircle, bg: 'bg-error-50 text-error-600' },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-white/5 dark:bg-white/5"
              >
                <div className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${m.bg}`}>
                    <m.icon className="h-4 w-4" />
                  </div>
                  <span className="text-theme-xs text-gray-500">{m.label}</span>
                </div>
                <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-white/90">{m.value}</p>
              </div>
            ))}
            <div className="col-span-2 flex gap-4">
              <div className="flex-1 rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-white/5 dark:bg-white/5">
                <span className="text-theme-xs text-gray-500">Open Rate</span>
                <p className="mt-1 text-lg font-semibold text-success-600">{d.emailMetrics.openRate}</p>
              </div>
              <div className="flex-1 rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-white/5 dark:bg-white/5">
                <span className="text-theme-xs text-gray-500">Click Rate</span>
                <p className="mt-1 text-lg font-semibold text-brand-500">{d.emailMetrics.clickRate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   4. CRM DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function CRMDashboard() {
  const d = crmData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: Users, bg: 'bg-brand-50 text-brand-500' },
    { icon: Target, bg: 'bg-success-50 text-success-600' },
    { icon: DollarSign, bg: 'bg-warning-50 text-warning-600' },
    { icon: TrendingUp, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          CRM Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Manage leads, deals, and sales pipeline
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* Pipeline + Sales Reps */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Pipeline Stages */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-7">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Pipeline Stages
          </h4>
          <div className="space-y-4">
            {d.pipelineStages.map((stage, i) => {
              const maxCount = Math.max(...d.pipelineStages.map((s) => s.count));
              const widthPct = (stage.count / maxCount) * 100;
              return (
                <div key={stage.stage}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {stage.stage}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-theme-xs text-gray-500">{stage.count} deals</span>
                      <span className="text-theme-xs font-medium text-gray-800 dark:text-white/90">
                        {stage.value}
                      </span>
                    </div>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-white/10">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${widthPct}%`,
                        backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sales Reps */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-5">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Sales Reps
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Name</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Deals</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Revenue</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Quota</th>
                </tr>
              </thead>
              <tbody>
                {d.salesReps.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100 dark:border-white/5">
                    <td className="px-4 py-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {r.name}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{r.deals}</td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{r.revenue}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium bg-success-50 text-success-600">
                        {r.quota}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
        <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
          Recent Activities
        </h4>
        <div className="space-y-3">
          {d.recentActivities.map((a, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-500/20">
                <Activity className="h-4 w-4 text-brand-500" />
              </div>
              <div className="flex-1">
                <p className="text-theme-sm text-gray-800 dark:text-white/90">{a.action}</p>
                <p className="text-theme-xs text-gray-500">{a.contact}</p>
              </div>
              <span className="text-theme-xs text-gray-500">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   5. STOCKS DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function StocksDashboard() {
  const d = stocksData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: TrendingUp, bg: 'bg-brand-50 text-brand-500' },
    { icon: DollarSign, bg: 'bg-success-50 text-success-600' },
    { icon: ArrowUpRight, bg: 'bg-warning-50 text-warning-600' },
    { icon: Wallet, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  const portfolioData = d.holdings.map((h) => ({
    symbol: h.symbol,
    value: parseInt(h.value.replace(/[$,]/g, '')),
  }));

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Stocks Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Track your portfolio performance and market data
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* Portfolio Chart + Sector Allocation */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Portfolio Line Chart */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-8">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Portfolio Value
            </h4>
            <span className="text-theme-xs text-gray-500">Holdings value</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="symbol" tick={{ fontSize: 12, fill: '#667085' }} />
              <YAxis tick={{ fontSize: 12, fill: '#667085' }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" fill="#465fff" radius={[4, 4, 0, 0]} name="Value ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sector Allocation Pie */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-4">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Sector Allocation
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={d.sectorAllocation}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="percentage"
                nameKey="sector"
                paddingAngle={2}
              >
                {d.sectorAllocation.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-2">
            {d.sectorAllocation.map((s) => (
              <div key={s.sector} className="flex items-center justify-between text-theme-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-gray-600 dark:text-gray-400">{s.sector}</span>
                </div>
                <span className="font-medium text-gray-800 dark:text-white/90">{s.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Watchlist */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-5">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Watchlist
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Symbol</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Price</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Change</th>
                </tr>
              </thead>
              <tbody>
                {d.watchlist.map((w) => (
                  <tr key={w.symbol} className="border-b border-gray-100 dark:border-white/5">
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                          {w.symbol}
                        </p>
                        <p className="text-theme-xs text-gray-500">{w.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{w.price}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-theme-sm font-medium ${
                          w.trend === 'up' ? 'text-success-600' : 'text-error-600'
                        }`}
                      >
                        {w.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Holdings */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-7">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Holdings
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Symbol</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Shares</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Avg Cost</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Current</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Value</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Gain</th>
                </tr>
              </thead>
              <tbody>
                {d.holdings.map((h) => (
                  <tr key={h.symbol} className="border-b border-gray-100 dark:border-white/5">
                    <td className="px-4 py-3 text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                      {h.symbol}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{h.shares}</td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{h.avgCost}</td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{h.currentPrice}</td>
                    <td className="px-4 py-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {h.value}
                    </td>
                    <td className="px-4 py-3 text-theme-sm font-medium text-success-600">{h.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   6. SAAS DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function SaaSDashboard() {
  const d = saasData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: DollarSign, bg: 'bg-brand-50 text-brand-500' },
    { icon: TrendingUp, bg: 'bg-success-50 text-success-600' },
    { icon: ArrowDownRight, bg: 'bg-warning-50 text-warning-600' },
    { icon: Users, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  const planColors: Record<string, string> = {
    Basic: '#465fff',
    Pro: '#12b76a',
    Enterprise: '#f79009',
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          SaaS Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Subscription metrics, MRR, and feature analytics
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* MRR Growth + Plan Distribution */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* MRR Growth */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-8">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              MRR Growth
            </h4>
            <span className="text-theme-xs text-gray-500">Last 12 months</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={d.growth}>
              <defs>
                <linearGradient id="mrrGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#465fff" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#465fff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#667085' }} />
              <YAxis tick={{ fontSize: 12, fill: '#667085' }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area
                type="monotone"
                dataKey="mrr"
                stroke="#465fff"
                strokeWidth={2}
                fill="url(#mrrGrad)"
                name="MRR"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Plan Distribution */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-4">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Plan Distribution
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={d.planDistribution}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="percentage"
                nameKey="plan"
                paddingAngle={2}
              >
                {d.planDistribution.map((entry, i) => (
                  <Cell key={i} fill={planColors[entry.plan] ?? CHART_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-2">
            {d.planDistribution.map((p) => (
              <div key={p.plan} className="flex items-center justify-between text-theme-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: planColors[p.plan] }}
                  />
                  <span className="text-gray-600 dark:text-gray-400">{p.plan}</span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    {p.users.toLocaleString()} users
                  </span>
                  <span className="ml-2 text-gray-500">{p.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Usage */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
        <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
          Feature Usage
        </h4>
        <div className="space-y-4">
          {d.featureUsage.map((f, i) => (
            <div key={f.feature}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                  {f.feature}
                </span>
                <span className="text-theme-xs text-gray-500">{f.usage}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-gray-100 dark:bg-white/10">
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    width: `${f.usage}%`,
                    backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   7. LOGISTICS DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function LogisticsDashboard() {
  const d = logisticsData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: Package, bg: 'bg-brand-50 text-brand-500' },
    { icon: CheckCircle2, bg: 'bg-success-50 text-success-600' },
    { icon: AlertCircle, bg: 'bg-warning-50 text-warning-600' },
    { icon: Timer, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  const fleetStatusColors: Record<string, string> = {
    'In Transit': 'bg-blue-light-50 text-blue-light-600',
    Loading: 'bg-warning-50 text-warning-600',
    Delivered: 'bg-success-50 text-success-600',
    Maintenance: 'bg-gray-100 text-gray-600',
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Logistics Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Track shipments, fleet, and delivery performance
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* Fleet Status Cards */}
      <div className="mt-6">
        <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
          Fleet Status
        </h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {d.fleetStatus.map((f) => (
            <div
              key={f.vehicle}
              className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/20">
                    <Truck className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                      {f.vehicle}
                    </p>
                    <p className="text-theme-xs text-gray-500">{f.route}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${
                    fleetStatusColors[f.status] ?? 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {f.status}
                </span>
                <span className="text-theme-xs text-gray-500">
                  {f.eta !== '-' && f.eta !== 'Done' ? `ETA: ${f.eta}` : f.eta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carrier Performance */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
        <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
          Carrier Performance
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-white/5">
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Carrier</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">On-Time</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Deliveries</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Rating</th>
              </tr>
            </thead>
            <tbody>
              {d.carrierPerformance.map((c) => (
                <tr key={c.carrier} className="border-b border-gray-100 dark:border-white/5">
                  <td className="px-4 py-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {c.carrier}
                  </td>
                  <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                    {c.onTime}
                  </td>
                  <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                    {c.deliveries.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-warning-500 text-warning-500" />
                      <span className="text-theme-sm text-gray-700 dark:text-gray-300">{c.rating}</span>
                    </div>
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

/* ══════════════════════════════════════════════════════════════════
   8. AI DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function AIDashboard() {
  const d = aiData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: Cpu, bg: 'bg-brand-50 text-brand-500' },
    { icon: Globe, bg: 'bg-success-50 text-success-600' },
    { icon: Timer, bg: 'bg-warning-50 text-warning-600' },
    { icon: DollarSign, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  const tokenUsageData = d.modelUsage.map((m) => ({
    model: m.model,
    tokens: m.tokens,
    requests: m.requests,
  }));

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          AI Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Monitor token usage, model performance, and API metrics
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* Token Usage Chart + Model Usage Table */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Token Usage Area Chart */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-7">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Token Usage by Model
            </h4>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tokenUsageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="model" tick={{ fontSize: 12, fill: '#667085' }} />
              <YAxis tick={{ fontSize: 12, fill: '#667085' }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="tokens" fill="#465fff" radius={[4, 4, 0, 0]} name="Tokens" />
              <Bar dataKey="requests" fill="#12b76a" radius={[4, 4, 0, 0]} name="Requests" />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Model Usage Table */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-5">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Model Usage
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Model</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Requests</th>
                  <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Tokens</th>
                </tr>
              </thead>
              <tbody>
                {d.modelUsage.map((m) => (
                  <tr key={m.model} className="border-b border-gray-100 dark:border-white/5">
                    <td className="px-4 py-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {m.model}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                      {m.requests.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                      {m.tokens.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Prompt History */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
        <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
          Prompt History
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-white/5">
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Prompt</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Model</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Tokens</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Time</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">When</th>
              </tr>
            </thead>
            <tbody>
              {d.promptHistory.map((p) => (
                <tr key={p.id} className="border-b border-gray-100 dark:border-white/5">
                  <td className="max-w-[300px] truncate px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                    {p.prompt}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium bg-brand-50 text-brand-500 dark:bg-brand-500/20">
                      {p.model}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                    {p.tokens.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{p.time}</td>
                  <td className="px-4 py-3 text-theme-sm text-gray-500">{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   9. SALES DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function SalesDashboard() {
  const d = salesData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: DollarSign, bg: 'bg-brand-50 text-brand-500' },
    { icon: TrendingUp, bg: 'bg-success-50 text-success-600' },
    { icon: Target, bg: 'bg-warning-50 text-warning-600' },
    { icon: Clock, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Sales Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Sales performance, funnel, and team analytics
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* Sales Funnel + Top Reps */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Sales Funnel Horizontal Bars */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-7">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Sales Funnel
          </h4>
          <div className="space-y-4">
            {d.funnel.map((stage, i) => {
              const maxCount = d.funnel[0].count;
              const widthPct = (stage.count / maxCount) * 100;
              return (
                <div key={stage.stage}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {stage.stage}
                    </span>
                    <span className="text-theme-xs text-gray-500">
                      {stage.count.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-8 w-full rounded-lg bg-gray-100 dark:bg-white/10">
                    <div
                      className="flex h-8 items-center rounded-lg px-3"
                      style={{
                        width: `${Math.max(widthPct, 8)}%`,
                        backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
                      }}
                    >
                      <span className="text-theme-xs font-medium text-white">
                        {Math.round(widthPct)}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Reps */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-5">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Top Reps
          </h4>
          <div className="space-y-3">
            {d.topReps.map((rep, i) => (
              <div
                key={rep.name}
                className="flex items-center justify-between rounded-lg border border-gray-100 p-4 dark:border-white/5"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-theme-sm font-semibold text-white"
                    style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
                  >
                    {rep.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {rep.name}
                    </p>
                    <p className="text-theme-xs text-gray-500">
                      {rep.deals} deals · {rep.revenue}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${
                      rep.quota >= 100
                        ? 'bg-success-50 text-success-600'
                        : 'bg-warning-50 text-warning-600'
                    }`}
                  >
                    {rep.quota}% quota
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Sales Table */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
        <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
          Regional Sales
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-white/5">
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Region</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Revenue</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Deals</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Growth</th>
              </tr>
            </thead>
            <tbody>
              {d.regionalSales.map((r) => (
                <tr key={r.region} className="border-b border-gray-100 dark:border-white/5">
                  <td className="px-4 py-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      {r.region}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                    {r.revenue}
                  </td>
                  <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">{r.deals}</td>
                  <td className="px-4 py-3 text-theme-sm font-medium text-success-600">{r.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   10. FINANCE DASHBOARD
   ══════════════════════════════════════════════════════════════════ */

export function FinanceDashboard() {
  const d = financeData;
  const metricIcons: { icon: React.ElementType; bg: string }[] = [
    { icon: TrendingUp, bg: 'bg-brand-50 text-brand-500' },
    { icon: CreditCard, bg: 'bg-error-50 text-error-600' },
    { icon: DollarSign, bg: 'bg-success-50 text-success-600' },
    { icon: Wallet, bg: 'bg-blue-light-50 text-blue-light-600' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Finance Dashboard
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Cashflow, budget tracking, and financial overview
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.metricCards.map((c, i) => (
          <MetricCard
            key={c.title}
            title={c.title}
            value={c.value}
            change={c.change}
            trend={c.trend}
            icon={metricIcons[i].icon}
            iconBg={metricIcons[i].bg}
          />
        ))}
      </div>

      {/* Cashflow Chart + Budget Tracking */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Cashflow Area Chart */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-7">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Cashflow Overview
            </h4>
            <span className="text-theme-xs text-gray-500">Last 12 months</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={d.cashflow}>
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#465fff" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#465fff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f04438" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#f04438" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#667085' }} />
              <YAxis tick={{ fontSize: 12, fill: '#667085' }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#465fff"
                strokeWidth={2}
                fill="url(#incomeGrad)"
                name="Income"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#f04438"
                strokeWidth={2}
                fill="url(#expenseGrad)"
                name="Expenses"
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Budget Tracking */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark xl:col-span-5">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Budget Tracking
          </h4>
          <div className="space-y-4">
            {d.budgetCategories.map((cat) => {
              const isOverBudget = cat.percentage >= 85;
              const barColor = isOverBudget ? '#f04438' : '#465fff';
              return (
                <div key={cat.category}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {cat.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-theme-xs text-gray-500">
                        ${(cat.spent / 1000).toFixed(1)}k / ${(cat.budget / 1000).toFixed(1)}k
                      </span>
                      <span
                        className={`text-theme-xs font-medium ${
                          isOverBudget ? 'text-error-600' : 'text-brand-500'
                        }`}
                      >
                        {cat.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-100 dark:bg-white/10">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${cat.percentage}%`,
                        backgroundColor: barColor,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
        <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
          Recent Transactions
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-white/5">
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">ID</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Description</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Category</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Amount</th>
                <th className="px-4 py-3 text-left text-theme-xs font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody>
              {d.recentTransactions.map((t) => (
                <tr key={t.id} className="border-b border-gray-100 dark:border-white/5">
                  <td className="px-4 py-3 text-theme-sm font-medium text-brand-500">{t.id}</td>
                  <td className="px-4 py-3 text-theme-sm text-gray-700 dark:text-gray-300">
                    {t.description}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400">
                      {t.category}
                    </span>
                  </td>
                  <td
                    className={`px-4 py-3 text-theme-sm font-medium ${
                      t.type === 'income' ? 'text-success-600' : 'text-error-600'
                    }`}
                  >
                    {t.amount}
                  </td>
                  <td className="px-4 py-3 text-theme-sm text-gray-500">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

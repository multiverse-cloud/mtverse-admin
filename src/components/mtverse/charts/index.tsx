'use client';

import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  AreaChart,
  RadialBarChart,
  ComposedChart,
  ScatterChart,
  Line,
  Bar,
  Pie,
  Area,
  RadialBar,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts';

/* ──────────────────────── colors & shared ──────────────────────── */

const BRAND = '#465fff';
const SUCCESS = '#12b76a';
const WARNING = '#f79009';
const ERROR = '#f04438';
const BLUE_LIGHT = '#0ba5ec';
const BRAND_300 = '#9cb9ff';
const CHART_COLORS = [BRAND, SUCCESS, WARNING, ERROR, BLUE_LIGHT];

const tooltipStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  border: '1px solid #e4e7ec',
  borderRadius: '8px',
  boxShadow:
    '0px 4px 8px -2px rgba(16,24,40,0.10),0px 2px 4px -2px rgba(16,24,40,0.06)',
  padding: '10px 14px',
};

const axisTick = { fontSize: 12, fill: '#667085' };

/* ──────────────────────── realistic mock data ──────────────────────── */

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 1. Line Chart - Monthly revenue
const revenueData = [
  { month: 'Jan', revenue: 4200 }, { month: 'Feb', revenue: 4800 },
  { month: 'Mar', revenue: 5100 }, { month: 'Apr', revenue: 4600 },
  { month: 'May', revenue: 5800 }, { month: 'Jun', revenue: 6200 },
  { month: 'Jul', revenue: 5900 }, { month: 'Aug', revenue: 6800 },
  { month: 'Sep', revenue: 7200 }, { month: 'Oct', revenue: 6900 },
  { month: 'Nov', revenue: 7800 }, { month: 'Dec', revenue: 8400 },
];

// 2. Multi-Line - Revenue vs Expenses
const revenueVsExpenses = months.map((m) => ({
  month: m,
  revenue: 4000 + Math.floor(Math.random() * 4000),
  expenses: 2500 + Math.floor(Math.random() * 2500),
}));

// 3. Bar Chart - Monthly sales
const monthlySales = [
  { month: 'Jan', sales: 4200 }, { month: 'Feb', sales: 3800 },
  { month: 'Mar', sales: 5100 }, { month: 'Apr', sales: 4600 },
  { month: 'May', sales: 5400 }, { month: 'Jun', sales: 6200 },
  { month: 'Jul', sales: 5800 }, { month: 'Aug', sales: 6500 },
  { month: 'Sep', sales: 7100 }, { month: 'Oct', sales: 6800 },
  { month: 'Nov', sales: 7400 }, { month: 'Dec', sales: 8200 },
];

// 4. Stacked Bar - Revenue by channel
const revenueByChannel = months.map((m) => ({
  month: m,
  direct: 1000 + Math.floor(Math.random() * 1500),
  organic: 800 + Math.floor(Math.random() * 1200),
  referral: 400 + Math.floor(Math.random() * 800),
}));

// 5. Horizontal Bar - Department performance
const departmentData = [
  { department: 'Engineering', score: 92 },
  { department: 'Marketing', score: 78 },
  { department: 'Sales', score: 85 },
  { department: 'Design', score: 88 },
  { department: 'Support', score: 71 },
  { department: 'HR', score: 82 },
];

// 6. Pie Chart - Market share
const marketShareData = [
  { name: 'Company A', value: 35 },
  { name: 'Company B', value: 25 },
  { name: 'Company C', value: 18 },
  { name: 'Company D', value: 13 },
  { name: 'Others', value: 9 },
];

// 7. Donut Chart - Revenue distribution
const revenueDistribution = [
  { name: 'Product Sales', value: 42 },
  { name: 'Subscriptions', value: 28 },
  { name: 'Services', value: 18 },
  { name: 'Licensing', value: 8 },
  { name: 'Other', value: 4 },
];

// 8. Area Chart - Traffic over time
const trafficData = months.map((m) => ({
  month: m,
  traffic: 18000 + Math.floor(Math.random() * 14000),
}));

// 9. Stacked Area - Users by source
const usersBySource = months.map((m) => ({
  month: m,
  organic: 8000 + Math.floor(Math.random() * 4000),
  paid: 4000 + Math.floor(Math.random() * 3000),
  social: 2000 + Math.floor(Math.random() * 2000),
  referral: 1000 + Math.floor(Math.random() * 1500),
}));

// 10. Radial Bar - Goal completion
const goalData = [
  { name: 'Sales', value: 85, fill: BRAND },
  { name: 'Marketing', value: 72, fill: SUCCESS },
  { name: 'Development', value: 91, fill: WARNING },
  { name: 'Support', value: 68, fill: BLUE_LIGHT },
];

// 11. Composed - Revenue bars + Growth rate line
const composedData = months.map((m, i) => ({
  month: m,
  revenue: 4000 + Math.floor(Math.random() * 4000),
  growthRate: [5.2, 8.1, 3.4, -2.1, 12.5, 6.8, -1.3, 9.2, 7.5, -3.2, 10.1, 8.4][i],
}));

// 12. Sparkline data (4 series)
const sparklineData1 = [20, 35, 28, 45, 38, 52, 48, 60, 55, 68, 62, 75].map((v, i) => ({ v }));
const sparklineData2 = [50, 42, 55, 38, 60, 45, 52, 40, 58, 48, 55, 42].map((v, i) => ({ v }));
const sparklineData3 = [30, 45, 38, 52, 42, 58, 50, 65, 58, 72, 68, 80].map((v, i) => ({ v }));
const sparklineData4 = [65, 58, 70, 55, 62, 48, 55, 42, 50, 38, 45, 35].map((v, i) => ({ v }));

// 13. Revenue Chart - E-commerce revenue (area + gradient)
const ecommerceRevenue = [
  { month: 'Jan', revenue: 32000 }, { month: 'Feb', revenue: 38000 },
  { month: 'Mar', revenue: 42000 }, { month: 'Apr', revenue: 39000 },
  { month: 'May', revenue: 47000 }, { month: 'Jun', revenue: 52000 },
  { month: 'Jul', revenue: 48000 }, { month: 'Aug', revenue: 55000 },
  { month: 'Sep', revenue: 59000 }, { month: 'Oct', revenue: 62000 },
  { month: 'Nov', revenue: 68000 }, { month: 'Dec', revenue: 74000 },
];

// 14. Traffic Chart - Visitors vs Sessions (dual line)
const trafficChartData = months.map((m) => ({
  month: m,
  visitors: 18000 + Math.floor(Math.random() * 12000),
  sessions: 24000 + Math.floor(Math.random() * 16000),
}));

// 15. Sales Chart - Targets vs Actual (grouped bars)
const salesTargetData = months.map((m) => ({
  month: m,
  target: 5000 + Math.floor(Math.random() * 2000),
  actual: 4000 + Math.floor(Math.random() * 3000),
}));

// 16. Conversion Chart - Funnel conversion rates (horizontal decreasing bars)
const conversionData = [
  { stage: 'Visitors', rate: 100 },
  { stage: 'Leads', rate: 42 },
  { stage: 'Qualified', rate: 28 },
  { stage: 'Proposals', rate: 18 },
  { stage: 'Negotiations', rate: 12 },
  { stage: 'Closed Won', rate: 7 },
];

// 17. User Growth - Cumulative user growth (area + success color)
const userGrowthData = [
  { month: 'Jan', users: 2400 }, { month: 'Feb', users: 3100 },
  { month: 'Mar', users: 3800 }, { month: 'Apr', users: 4500 },
  { month: 'May', users: 5600 }, { month: 'Jun', users: 6800 },
  { month: 'Jul', users: 8200 }, { month: 'Aug', users: 9700 },
  { month: 'Sep', users: 11500 }, { month: 'Oct', users: 13800 },
  { month: 'Nov', users: 16200 }, { month: 'Dec', users: 19400 },
];

// 18. Device Chart - Desktop/Mobile/Tablet (donut)
const deviceData = [
  { name: 'Desktop', value: 58, color: BRAND },
  { name: 'Mobile', value: 32, color: SUCCESS },
  { name: 'Tablet', value: 10, color: WARNING },
];

// 19. Campaign Chart - Campaign performance (grouped bars)
const campaignData = [
  { campaign: 'Spring Sale', impressions: 120000, clicks: 8500, conversions: 420 },
  { campaign: 'Summer Promo', impressions: 95000, clicks: 7200, conversions: 380 },
  { campaign: 'Fall Launch', impressions: 140000, clicks: 9800, conversions: 510 },
  { campaign: 'Winter Deal', impressions: 110000, clicks: 6800, conversions: 350 },
  { campaign: 'Brand Awareness', impressions: 180000, clicks: 12000, conversions: 290 },
];

// 20. Funnel Chart - Sales funnel stages (decreasing horizontal bars)
const funnelData = [
  { stage: 'Prospects', count: 2400, pct: 100 },
  { stage: 'Leads', count: 1800, pct: 75 },
  { stage: 'Qualified', count: 1100, pct: 46 },
  { stage: 'Proposals', count: 680, pct: 28 },
  { stage: 'Negotiations', count: 420, pct: 18 },
  { stage: 'Closed Won', count: 252, pct: 11 },
];

/* ══════════════════════════════════════════════════════════════════
   CHARTS PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function ChartsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-title-sm font-bold text-gray-800 dark:text-white/90">
          Charts
        </h2>
        <p className="mt-1 text-theme-sm text-gray-500">
          Explore all chart components and visualization options
        </p>
      </div>

      {/* Regular chart grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 1. Line Chart — Monthly revenue */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Line Chart — Monthly Revenue
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="revenue" stroke={BRAND} strokeWidth={2} dot={false} name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 2. Multi-Line Chart — Revenue vs Expenses */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Multi-Line Chart — Revenue vs Expenses
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueVsExpenses}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="revenue" stroke={BRAND} strokeWidth={2} dot={false} name="Revenue" />
              <Line type="monotone" dataKey="expenses" stroke={ERROR} strokeWidth={2} dot={false} name="Expenses" />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Bar Chart — Monthly Sales */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Bar Chart — Monthly Sales
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="sales" fill={BRAND} radius={[4, 4, 0, 0]} name="Sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 4. Stacked Bar Chart — Revenue by Channel */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Stacked Bar Chart — Revenue by Channel
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueByChannel}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="direct" stackId="a" fill={BRAND} name="Direct" />
              <Bar dataKey="organic" stackId="a" fill={SUCCESS} name="Organic" />
              <Bar dataKey="referral" stackId="a" fill={WARNING} name="Referral" />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 5. Horizontal Bar Chart — Department Performance */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Horizontal Bar — Department Performance
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={departmentData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" horizontal={false} />
              <XAxis type="number" tick={axisTick} />
              <YAxis type="category" dataKey="department" tick={axisTick} width={100} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="score" fill={BRAND} radius={[0, 4, 4, 0]} barSize={20} name="Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 6. Pie Chart — Market Share */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Pie Chart — Market Share
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={marketShareData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                nameKey="name"
                paddingAngle={2}
              >
                {marketShareData.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 7. Donut Chart — Revenue Distribution */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Donut Chart — Revenue Distribution
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={revenueDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                nameKey="name"
                paddingAngle={2}
              >
                {revenueDistribution.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 8. Area Chart — Traffic Over Time */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Area Chart — Traffic Over Time
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="trafficGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={BRAND} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={BRAND} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="traffic" stroke={BRAND} strokeWidth={2} fill="url(#trafficGrad)" name="Traffic" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 9. Stacked Area Chart — Users by Source */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Stacked Area — Users by Source
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={usersBySource}>
              <defs>
                <linearGradient id="organicGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={BRAND} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={BRAND} stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="paidGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={SUCCESS} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={SUCCESS} stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="socialGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={WARNING} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={WARNING} stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="referralGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={BLUE_LIGHT} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={BLUE_LIGHT} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="organic" stackId="1" stroke={BRAND} fill="url(#organicGrad)" name="Organic" />
              <Area type="monotone" dataKey="paid" stackId="1" stroke={SUCCESS} fill="url(#paidGrad)" name="Paid" />
              <Area type="monotone" dataKey="social" stackId="1" stroke={WARNING} fill="url(#socialGrad)" name="Social" />
              <Area type="monotone" dataKey="referral" stackId="1" stroke={BLUE_LIGHT} fill="url(#referralGrad)" name="Referral" />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 10. Radial Bar Chart — Goal Completion */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Radial Bar — Goal Completion
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={18} data={goalData}>
              <RadialBar background dataKey="value" cornerRadius={6} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} layout="horizontal" verticalAlign="bottom" />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* 11. Composed Chart — Revenue + Growth Rate */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Composed — Revenue &amp; Growth Rate
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={composedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis yAxisId="left" tick={axisTick} />
              <YAxis yAxisId="right" orientation="right" tick={axisTick} unit="%" />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar yAxisId="left" dataKey="revenue" fill={BRAND} radius={[4, 4, 0, 0]} barSize={20} name="Revenue" />
              <Line yAxisId="right" type="monotone" dataKey="growthRate" stroke={WARNING} strokeWidth={2} dot={false} name="Growth Rate" />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* 13. Revenue Chart — E-commerce Revenue (area + gradient) */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Revenue Chart — E-Commerce Revenue
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={ecommerceRevenue}>
              <defs>
                <linearGradient id="ecomRevenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={BRAND} stopOpacity={0.25} />
                  <stop offset="100%" stopColor={BRAND} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="revenue" stroke={BRAND} strokeWidth={2} fill="url(#ecomRevenueGrad)" name="Revenue" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 14. Traffic Chart — Visitors vs Sessions */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Traffic Chart — Visitors &amp; Sessions
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trafficChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="visitors" stroke={BRAND} strokeWidth={2} dot={false} name="Visitors" />
              <Line type="monotone" dataKey="sessions" stroke={SUCCESS} strokeWidth={2} dot={false} name="Sessions" />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 15. Sales Chart — Targets vs Actual */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Sales Chart — Target vs Actual
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={salesTargetData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="target" fill={BRAND_300} radius={[4, 4, 0, 0]} name="Target" />
              <Bar dataKey="actual" fill={BRAND} radius={[4, 4, 0, 0]} name="Actual" />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 16. Conversion Chart — Funnel Conversion Rates */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Conversion Chart — Funnel Rates
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={conversionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" horizontal={false} />
              <XAxis type="number" tick={axisTick} unit="%" />
              <YAxis type="category" dataKey="stage" tick={axisTick} width={90} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="rate" fill={BRAND} radius={[0, 4, 4, 0]} barSize={18} name="Conversion Rate">
                {conversionData.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={CHART_COLORS[i % CHART_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 17. User Growth Chart — Cumulative User Growth */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            User Growth — Cumulative Growth
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={userGrowthData}>
              <defs>
                <linearGradient id="userGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={SUCCESS} stopOpacity={0.25} />
                  <stop offset="100%" stopColor={SUCCESS} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="month" tick={axisTick} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="users" stroke={SUCCESS} strokeWidth={2} fill="url(#userGrowthGrad)" name="Users" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 18. Device Chart — Desktop/Mobile/Tablet (Donut) */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Device Chart — Desktop / Mobile / Tablet
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                nameKey="name"
                paddingAngle={3}
              >
                {deviceData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 19. Campaign Chart — Campaign Performance Comparison */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Campaign Chart — Performance Comparison
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" />
              <XAxis dataKey="campaign" tick={{ ...axisTick, fontSize: 10 }} />
              <YAxis tick={axisTick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="impressions" fill={BRAND} radius={[4, 4, 0, 0]} name="Impressions" />
              <Bar dataKey="clicks" fill={SUCCESS} radius={[4, 4, 0, 0]} name="Clicks" />
              <Bar dataKey="conversions" fill={WARNING} radius={[4, 4, 0, 0]} name="Conversions" />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 20. Funnel Chart — Sales Funnel Stages */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark">
          <h4 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Funnel Chart — Sales Funnel Stages
          </h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={funnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e7ec" horizontal={false} />
              <XAxis type="number" tick={axisTick} />
              <YAxis type="category" dataKey="stage" tick={axisTick} width={90} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20} name="Count">
                {funnelData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={CHART_COLORS[i % CHART_COLORS.length]}
                  />
                ))}
              </Bar>
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </BarChart>
          </ResponsiveContainer>
          {/* Funnel labels with percentages */}
          <div className="mt-2 flex flex-wrap gap-3">
            {funnelData.map((item, i) => (
              <div key={item.stage} className="flex items-center gap-1.5 text-theme-xs">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  {item.stage}: {item.pct}% ({item.count.toLocaleString()})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 12. Sparkline Charts — 4 small inline sparklines in a 4-col row */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Revenue Trend', data: sparklineData1, color: BRAND, value: '$84,200', change: '+12.5%' },
          { title: 'Orders Trend', data: sparklineData2, color: SUCCESS, value: '2,847', change: '+8.2%' },
          { title: 'Visitors Trend', data: sparklineData3, color: WARNING, value: '58.4K', change: '+18.7%' },
          { title: 'Conversion Trend', data: sparklineData4, color: ERROR, value: '3.24%', change: '-0.4%' },
        ].map((spark) => (
          <div
            key={spark.title}
            className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/5 dark:bg-gray-dark"
          >
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-theme-sm font-medium text-gray-500">{spark.title}</h4>
              <span
                className={`text-theme-xs font-medium ${
                  spark.change.startsWith('+') ? 'text-success-600' : 'text-error-600'
                }`}
              >
                {spark.change}
              </span>
            </div>
            <p className="mb-3 text-title-sm font-bold text-gray-800 dark:text-white/90">
              {spark.value}
            </p>
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart data={spark.data}>
                <defs>
                  <linearGradient id={`spark-${spark.title}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={spark.color} stopOpacity={0.2} />
                    <stop offset="100%" stopColor={spark.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke={spark.color}
                  strokeWidth={1.5}
                  fill={`url(#spark-${spark.title})`}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

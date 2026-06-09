'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Plus,
  LayoutGrid,
  List,
  ShoppingCart,
  Eye,
  Edit3,
  Trash2,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Tag,
  Copy,
  ToggleLeft,
  ToggleRight,
  Package,
  Users,
  FileText,
  CreditCard,
  DollarSign,
} from 'lucide-react';
import {
  productData,
  ecommerceData,
  customerData,
  invoiceData,
  financeData,
} from '@/lib/mtverse/data/mock-data';

/* ──────────────────────── shared helpers ──────────────────────── */

function statusBadge(status: string) {
  const map: Record<string, string> = {
    'In Stock': 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400',
    'Out of Stock': 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-400',
    'Low Stock': 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-400',
    Delivered: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400',
    Processing: 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-400',
    Shipped: 'bg-blue-light-50 text-blue-light-600 dark:bg-blue-light-500/15 dark:bg-blue-light-400',
    Cancelled: 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-400',
    Active: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400',
    VIP: 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400',
    Inactive: 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400',
    Paid: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400',
    Pending: 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-400',
    Overdue: 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-400',
    Draft: 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400',
  };
  return map[status] ?? 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400';
}

function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">{title}</h2>
      <p className="mt-1 text-theme-sm text-gray-500">{description}</p>
    </div>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark ${className}`}>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   1. PRODUCTS PAGE
   ══════════════════════════════════════════════════════════════════ */

export function ProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', ...productData.categories.map((c) => c.name)];

  const filtered = useMemo(() => {
    return productData.products.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'All' || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div>
      <PageHeader title="Products" description="Manage your product inventory and catalog" />

      {/* Top Bar */}
      <Card className="mb-6 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500"
              />
            </div>
            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-theme-sm text-gray-800 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="flex rounded-lg border border-gray-200 dark:border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded-l-lg p-2.5 ${
                  viewMode === 'grid'
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-gray-500 hover:bg-gray-50 dark:bg-gray-dark dark:text-gray-400'
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`rounded-r-lg p-2.5 ${
                  viewMode === 'list'
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-gray-500 hover:bg-gray-50 dark:bg-gray-dark dark:text-gray-400'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
            {/* Add Product */}
            <button className="flex h-11 items-center gap-2 rounded-lg bg-brand-500 px-4 text-theme-sm font-medium text-white hover:bg-brand-600">
              <Plus className="h-4 w-4" />
              Add Product
            </button>
          </div>
        </div>
      </Card>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card key={p.id} className="overflow-hidden">
              <div className="flex h-44 items-center justify-center bg-gray-50 dark:bg-white/5">
                <span className="text-7xl">{p.image}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                      {p.name}
                    </h4>
                    <p className="text-theme-xs text-gray-500">{p.category}</p>
                  </div>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${statusBadge(p.status)}`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-theme-lg font-bold text-gray-800 dark:text-white/90">
                    {p.price}
                  </span>
                  <span className="text-theme-xs text-gray-500">
                    Stock: <span className="font-medium text-gray-700 dark:text-gray-300">{p.stock}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 dark:border-white/5">
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-theme-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5">
                    <Eye className="h-3.5 w-3.5" /> View
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-theme-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5">
                    <Edit3 className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-error-500 hover:bg-error-50 dark:border-white/10 dark:hover:bg-error-500/10">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        /* List View */
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id} className="border-b border-gray-100 dark:border-white/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{p.image}</span>
                        <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                          {p.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">
                      {p.category}
                    </td>
                    <td className="px-6 py-4 text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                      {p.price}
                    </td>
                    <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">
                      {p.stock}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${statusBadge(p.status)}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5">
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button className="rounded-lg p-1.5 text-gray-400 hover:bg-error-50 hover:text-error-500 dark:hover:bg-error-500/10">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   2. ORDERS PAGE
   ══════════════════════════════════════════════════════════════════ */

export function OrdersPage() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const filtered = useMemo(() => {
    if (activeTab === 'All') return ecommerceData.recentOrders;
    return ecommerceData.recentOrders.filter((o) => o.status === activeTab);
  }, [activeTab]);

  return (
    <div>
      <PageHeader title="Orders" description="Track and manage customer orders" />

      <Card>
        {/* Filter Tabs */}
        <div className="border-b border-gray-100 px-6 pt-4 dark:border-white/5">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 text-theme-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-brand-500 text-white'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-white/5">
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id} className="border-b border-gray-100 dark:border-white/5">
                  <td className="px-6 py-4 text-theme-sm font-medium text-brand-500">{o.id}</td>
                  <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">
                    {o.customer}
                  </td>
                  <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">
                    {o.product}
                  </td>
                  <td className="px-6 py-4 text-theme-sm text-gray-500">{o.date}</td>
                  <td className="px-6 py-4 text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                    {o.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${statusBadge(o.status)}`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3. CUSTOMERS PAGE
   ══════════════════════════════════════════════════════════════════ */

export function CustomersPage() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return customerData.customers.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  function getInitials(name: string) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  const avatarColors = [
    'bg-brand-500',
    'bg-success-500',
    'bg-warning-500',
    'bg-error-500',
    'bg-blue-light-500',
  ];

  return (
    <div>
      <PageHeader title="Customers" description="View and manage your customer base" />

      <Card>
        {/* Search */}
        <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-white/5">
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={c.id} className="border-b border-gray-100 dark:border-white/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-theme-xs font-semibold text-white ${avatarColors[i % avatarColors.length]}`}
                      >
                        {getInitials(c.name)}
                      </div>
                      <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                        {c.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">
                    {c.email}
                  </td>
                  <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">
                    {c.orders}
                  </td>
                  <td className="px-6 py-4 text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                    {c.spent}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${statusBadge(c.status)}`}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   4. INVOICES PAGE
   ══════════════════════════════════════════════════════════════════ */

export function InvoicesPage() {
  const invoices = invoiceData.invoices;

  return (
    <div>
      <PageHeader title="Invoices" description="Manage billing and invoices" />

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-white/5">
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Invoice ID
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase tracking-wider text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-b border-gray-100 dark:border-white/5">
                  <td className="px-6 py-4 text-theme-sm font-medium text-brand-500">{inv.id}</td>
                  <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">
                    {inv.customer}
                  </td>
                  <td className="px-6 py-4 text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                    {inv.amount}
                  </td>
                  <td className="px-6 py-4 text-theme-sm text-gray-500">{inv.date}</td>
                  <td className="px-6 py-4 text-theme-sm text-gray-500">{inv.due}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${statusBadge(inv.status)}`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// Download icon for Invoices
function Download({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════
   5. TRANSACTIONS PAGE
   ══════════════════════════════════════════════════════════════════ */

export function TransactionsPage() {
  const [filter, setFilter] = useState<'All' | 'Income' | 'Expense'>('All');
  const transactions = financeData.recentTransactions;

  const filtered = useMemo(() => {
    if (filter === 'All') return transactions;
    return transactions.filter((t) => t.type === filter.toLowerCase());
  }, [filter, transactions]);

  const categoryColor: Record<string, string> = {
    Infrastructure: 'bg-blue-light-50 text-blue-light-600 dark:bg-blue-light-500/15 dark:text-blue-light-400',
    Income: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400',
    HR: 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-400',
    Marketing: 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400',
  };

  return (
    <div>
      <PageHeader title="Transactions" description="Track all financial transactions" />

      {/* Filter Tabs */}
      <div className="mb-6 flex gap-2">
        {(['All', 'Income', 'Expense'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`rounded-lg px-4 py-2 text-theme-sm font-medium transition-colors ${
              filter === tab
                ? 'bg-brand-500 text-white'
                : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 dark:bg-gray-dark dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Card>
        <div className="divide-y divide-gray-100 dark:divide-white/5">
          {filtered.map((t) => (
            <div key={t.id} className="flex items-center gap-4 px-6 py-4">
              {/* Icon */}
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                  t.type === 'income'
                    ? 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400'
                    : 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-400'
                }`}
              >
                {t.type === 'income' ? (
                  <ArrowUpRight className="h-5 w-5" />
                ) : (
                  <ArrowDownRight className="h-5 w-5" />
                )}
              </div>

              {/* Description */}
              <div className="flex-1 min-w-0">
                <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90 truncate">
                  {t.description}
                </p>
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-theme-xs font-medium ${
                    categoryColor[t.category] ?? 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'
                  }`}
                >
                  {t.category}
                </span>
              </div>

              {/* Amount */}
              <span
                className={`text-theme-sm font-semibold ${
                  t.type === 'income' ? 'text-success-600' : 'text-error-600'
                }`}
              >
                {t.amount}
              </span>

              {/* Date */}
              <span className="text-theme-xs text-gray-500 shrink-0">{t.date}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   6. COUPONS PAGE
   ══════════════════════════════════════════════════════════════════ */

interface Coupon {
  code: string;
  discount: string;
  description: string;
  expiry: string;
  usage: number;
  maxUsage: number;
  active: boolean;
}

const mockCoupons: Coupon[] = [
  { code: 'SAVE20', discount: '20% off', description: '20% off on all orders', expiry: '2024-03-31', usage: 342, maxUsage: 500, active: true },
  { code: 'FLAT50', discount: '$50 off', description: 'Flat $50 off on orders above $200', expiry: '2024-02-28', usage: 128, maxUsage: 300, active: true },
  { code: 'FREESHIP', discount: 'Free shipping', description: 'Free shipping on any order', expiry: '2024-04-15', usage: 891, maxUsage: 1000, active: true },
  { code: 'BUNDLE15', discount: '15% off', description: '15% off on bundle purchases', expiry: '2024-05-01', usage: 56, maxUsage: 200, active: false },
];

export function CouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>(mockCoupons);

  const toggleCoupon = (code: string) => {
    setCoupons((prev) =>
      prev.map((c) => (c.code === code ? { ...c, active: !c.active } : c))
    );
  };

  const copyCode = (code: string) => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(code);
    }
  };

  return (
    <div>
      <PageHeader title="Coupons" description="Create and manage discount coupons" />

      {/* Create Button */}
      <div className="mb-6">
        <button className="flex h-11 items-center gap-2 rounded-lg bg-brand-500 px-4 text-theme-sm font-medium text-white hover:bg-brand-600">
          <Plus className="h-4 w-4" />
          Create Coupon
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {coupons.map((coupon) => (
          <Card key={coupon.code} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-brand-500" />
                  <span className="text-theme-lg font-bold text-gray-800 dark:text-white/90">
                    {coupon.code}
                  </span>
                </div>
                <p className="mt-1 text-theme-sm text-gray-500">{coupon.description}</p>
              </div>
              {/* Status Toggle */}
              <button
                onClick={() => toggleCoupon(coupon.code)}
                className="shrink-0"
                title={coupon.active ? 'Deactivate' : 'Activate'}
              >
                {coupon.active ? (
                  <ToggleRight className="h-8 w-8 text-success-500" />
                ) : (
                  <ToggleLeft className="h-8 w-8 text-gray-400" />
                )}
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex rounded-lg bg-brand-50 px-3 py-1 text-theme-sm font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                {coupon.discount}
              </span>
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${
                  coupon.active
                    ? 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400'
                    : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'
                }`}
              >
                {coupon.active ? 'Active' : 'Inactive'}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              {/* Usage */}
              <div>
                <div className="flex items-center justify-between text-theme-xs text-gray-500">
                  <span>
                    Usage: {coupon.usage} / {coupon.maxUsage}
                  </span>
                  <span>{Math.round((coupon.usage / coupon.maxUsage) * 100)}%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-100 dark:bg-white/10">
                  <div
                    className="h-2 rounded-full bg-brand-500 transition-all"
                    style={{ width: `${(coupon.usage / coupon.maxUsage) * 100}%` }}
                  />
                </div>
              </div>

              {/* Expiry */}
              <div className="flex items-center justify-between text-theme-xs text-gray-500">
                <span>Expires: {coupon.expiry}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 dark:border-white/5">
              <button
                onClick={() => copyCode(coupon.code)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-theme-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5"
              >
                <Copy className="h-3.5 w-3.5" /> Copy Code
              </button>
              <button className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5">
                <Edit3 className="h-3.5 w-3.5" />
              </button>
              <button className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-error-500 hover:bg-error-50 dark:border-white/10 dark:hover:bg-error-500/10">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

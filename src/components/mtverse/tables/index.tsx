'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Download,
  X,
} from 'lucide-react';
import { invoiceData, ecommerceData } from '@/lib/mtverse/data/mock-data';

// Sort icon component (declared outside render)
function SortIcon({
  col,
  sortCol,
  sortDir,
}: {
  col: string;
  sortCol: string | null;
  sortDir: 'asc' | 'desc';
}) {
  return (
    <span className="ml-1 inline-flex flex-col">
      <ChevronUp
        className={`size-3 -mb-0.5 ${
          sortCol === col && sortDir === 'asc'
            ? 'text-brand-500'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
      <ChevronDown
        className={`size-3 -mt-0.5 ${
          sortCol === col && sortDir === 'desc'
            ? 'text-brand-500'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    </span>
  );
}

// Table styling constants
const thClass =
  'px-6 py-3 text-left text-theme-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400';

const tdClass =
  'px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300';

const trHoverClass =
  'hover:bg-gray-50 dark:hover:bg-white/5 transition-colors';

const cardClass =
  'rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark';

const cardHeaderClass =
  'flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-white/5';

const searchInputClass =
  'h-9 w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500 dark:focus:border-brand-500';

// Status badge helper
function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Delivered: 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-500',
    Processing: 'bg-blue-light-50 text-blue-light-600 dark:bg-blue-light-500/10 dark:text-blue-light-500',
    Shipped: 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
    Cancelled: 'bg-error-50 text-error-600 dark:bg-error-500/10 dark:text-error-500',
    Paid: 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-500',
    Pending: 'bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-500',
    Overdue: 'bg-error-50 text-error-600 dark:bg-error-500/10 dark:text-error-500',
    Draft: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
    'In Stock': 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-500',
    'Out of Stock': 'bg-error-50 text-error-600 dark:bg-error-500/10 dark:text-error-500',
    'Low Stock': 'bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-500',
    Active: 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-500',
    Inactive: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
    VIP: 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${
        colors[status] || 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
      }`}
    >
      {status}
    </span>
  );
}

// Product data for Data Table
const products = [
  { id: 1, name: 'MacBook Pro 14"', category: 'Laptops', price: '$1,999', stock: 156, status: 'In Stock' as const },
  { id: 2, name: 'iPhone 15 Pro', category: 'Phones', price: '$999', stock: 342, status: 'In Stock' as const },
  { id: 3, name: 'AirPods Pro', category: 'Audio', price: '$249', stock: 0, status: 'Out of Stock' as const },
  { id: 4, name: 'iPad Air', category: 'Tablets', price: '$599', stock: 89, status: 'In Stock' as const },
  { id: 5, name: 'Apple Watch Ultra', category: 'Wearables', price: '$799', stock: 12, status: 'Low Stock' as const },
  { id: 6, name: 'Samsung Galaxy S24', category: 'Phones', price: '$899', stock: 234, status: 'In Stock' as const },
  { id: 7, name: 'Dell XPS 15', category: 'Laptops', price: '$1,499', stock: 67, status: 'In Stock' as const },
  { id: 8, name: 'Sony WH-1000XM5', category: 'Audio', price: '$349', stock: 5, status: 'Low Stock' as const },
  { id: 9, name: 'Nintendo Switch OLED', category: 'Gaming', price: '$349', stock: 0, status: 'Out of Stock' as const },
  { id: 10, name: 'Kindle Paperwhite', category: 'E-Readers', price: '$149', stock: 421, status: 'In Stock' as const },
];

// Customer data for Paginated Table
const customers = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: [
    'Sarah Johnson', 'Mike Peters', 'Emily Chen', 'David Wilson', 'Lisa Brown',
    'James Taylor', 'Emma Garcia', 'Ryan Martinez', 'Olivia Anderson', 'Noah Thomas',
    'Ava Jackson', 'William White', 'Sophia Harris', 'Benjamin Clark', 'Isabella Lewis',
    'Lucas Robinson', 'Mia Walker', 'Henry Young', 'Charlotte King', 'Alexander Scott',
    'Amelia Green', 'Daniel Adams', 'Harper Baker', 'Matthew Nelson', 'Evelyn Carter',
  ][i],
  email: [
    'sarah@example.com', 'mike@example.com', 'emily@example.com', 'david@example.com', 'lisa@example.com',
    'james@example.com', 'emma@example.com', 'ryan@example.com', 'olivia@example.com', 'noah@example.com',
    'ava@example.com', 'william@example.com', 'sophia@example.com', 'benjamin@example.com', 'isabella@example.com',
    'lucas@example.com', 'mia@example.com', 'henry@example.com', 'charlotte@example.com', 'alexander@example.com',
    'amelia@example.com', 'daniel@example.com', 'harper@example.com', 'matthew@example.com', 'evelyn@example.com',
  ][i],
  orders: Math.floor(Math.random() * 30) + 1,
  spent: `$${(Math.floor(Math.random() * 9000) + 500).toLocaleString()}`,
  status: (['Active', 'Inactive', 'VIP'] as const)[i % 3],
  joinDate: `2024-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
}));

// Analytics data
const analyticsRows = [
  { page: '/home', views: 45200, unique: 32000, bounce: '32%', avgSession: '3m 24s', sparkline: [60, 80, 45, 90, 70, 85] },
  { page: '/products', views: 28300, unique: 21400, bounce: '28%', avgSession: '4m 12s', sparkline: [40, 65, 80, 55, 70, 60] },
  { page: '/blog', views: 19700, unique: 15600, bounce: '41%', avgSession: '2m 48s', sparkline: [50, 40, 70, 60, 45, 55] },
  { page: '/pricing', views: 12800, unique: 10200, bounce: '35%', avgSession: '5m 10s', sparkline: [30, 50, 40, 65, 80, 75] },
  { page: '/contact', views: 8400, unique: 6900, bounce: '52%', avgSession: '1m 55s', sparkline: [20, 35, 25, 40, 30, 45] },
  { page: '/about', views: 6100, unique: 4800, bounce: '38%', avgSession: '3m 02s', sparkline: [45, 55, 40, 60, 50, 35] },
];

export default function TablesPage() {
  // Data Table state
  const [productSearch, setProductSearch] = useState('');
  const [productFilter, setProductFilter] = useState('all');

  // Sortable Table state
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  // Paginated Table state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Selectable Table state
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [actionOpen, setActionOpen] = useState<string | null>(null);

  // Filtered products
  const filteredProducts = useMemo(() => {
    let result = products;
    if (productSearch) {
      const q = productSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (productFilter !== 'all') {
      result = result.filter((p) => p.status === productFilter);
    }
    return result;
  }, [productSearch, productFilter]);

  // Sorted data for Sortable Table
  const sortableData = useMemo(() => {
    const data = [...products];
    if (!sortCol) return data;
    data.sort((a, b) => {
      let cmp = 0;
      if (sortCol === 'name') cmp = a.name.localeCompare(b.name);
      else if (sortCol === 'category') cmp = a.category.localeCompare(b.category);
      else if (sortCol === 'price')
        cmp = parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      else if (sortCol === 'stock') cmp = a.stock - b.stock;
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return data;
  }, [sortCol, sortDir]);

  const handleSort = (col: string) => {
    if (sortCol === col) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortCol(col);
      setSortDir('asc');
    }
  };

  // Pagination
  const totalPages = Math.ceil(customers.length / rowsPerPage);
  const pagedCustomers = customers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, customers.length);

  // Selectable rows
  const allSelected =
    selectedRows.size === products.length && products.length > 0;
  const toggleAll = () => {
    if (allSelected) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(products.map((p) => p.id)));
    }
  };
  const toggleRow = (id: number) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Orders data
  const orders = ecommerceData.recentOrders;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Tables
        </h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
          Various table styles with sorting, filtering, pagination, and more
        </p>
      </div>

      {/* 1. Basic Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Basic Table
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className={thClass}>#</th>
                <th className={thClass}>Name</th>
                <th className={thClass}>Email</th>
                <th className={thClass}>Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {[
                { id: 1, name: 'Alex Morgan', email: 'alex@mtverse.com', role: 'Admin' },
                { id: 2, name: 'Sarah Chen', email: 'sarah@mtverse.com', role: 'Editor' },
                { id: 3, name: 'Mike Johnson', email: 'mike@mtverse.com', role: 'Developer' },
                { id: 4, name: 'Emily Davis', email: 'emily@mtverse.com', role: 'Designer' },
                { id: 5, name: 'David Wilson', email: 'david@mtverse.com', role: 'Marketing' },
              ].map((row) => (
                <tr key={row.id} className={trHoverClass}>
                  <td className={tdClass}>{row.id}</td>
                  <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                    {row.name}
                  </td>
                  <td className={tdClass}>{row.email}</td>
                  <td className={tdClass}>{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Data Table with Search */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Product Data
          </h4>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className={searchInputClass}
                placeholder="Search products..."
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
              />
            </div>
            <select
              className="h-9 rounded-lg border border-gray-300 bg-white px-3 text-theme-sm text-gray-700 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className={thClass}>Product</th>
                <th className={thClass}>Category</th>
                <th className={thClass}>Price</th>
                <th className={thClass}>Stock</th>
                <th className={thClass}>Status</th>
                <th className={thClass}>Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-theme-sm text-gray-500">
                    No products found
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr key={p.id} className={trHoverClass}>
                    <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                      {p.name}
                    </td>
                    <td className={tdClass}>{p.category}</td>
                    <td className={tdClass}>{p.price}</td>
                    <td className={tdClass}>{p.stock}</td>
                    <td className={tdClass}>
                      <StatusBadge status={p.status} />
                    </td>
                    <td className={tdClass}>
                      <div className="flex items-center gap-1">
                        <button className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300">
                          <Eye className="size-4" />
                        </button>
                        <button className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300">
                          <Edit className="size-4" />
                        </button>
                        <button className="rounded-md p-1 text-gray-400 hover:bg-error-50 hover:text-error-500 dark:hover:bg-error-500/10">
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Sortable Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Sortable Table
          </h4>
          <span className="text-theme-xs text-gray-500 dark:text-gray-400">
            Click column headers to sort
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th
                  className={`${thClass} cursor-pointer select-none`}
                  onClick={() => handleSort('name')}
                >
                  <span className="inline-flex items-center">
                    Product
                    <SortIcon col="name" sortCol={sortCol} sortDir={sortDir} />
                  </span>
                </th>
                <th
                  className={`${thClass} cursor-pointer select-none`}
                  onClick={() => handleSort('category')}
                >
                  <span className="inline-flex items-center">
                    Category
                    <SortIcon col="category" sortCol={sortCol} sortDir={sortDir} />
                  </span>
                </th>
                <th
                  className={`${thClass} cursor-pointer select-none`}
                  onClick={() => handleSort('price')}
                >
                  <span className="inline-flex items-center">
                    Price
                    <SortIcon col="price" sortCol={sortCol} sortDir={sortDir} />
                  </span>
                </th>
                <th
                  className={`${thClass} cursor-pointer select-none`}
                  onClick={() => handleSort('stock')}
                >
                  <span className="inline-flex items-center">
                    Stock
                    <SortIcon col="stock" sortCol={sortCol} sortDir={sortDir} />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {sortableData.map((p) => (
                <tr key={p.id} className={trHoverClass}>
                  <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                    {p.name}
                  </td>
                  <td className={tdClass}>{p.category}</td>
                  <td className={tdClass}>{p.price}</td>
                  <td className={tdClass}>{p.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Paginated Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Customer List
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className={thClass}>#</th>
                <th className={thClass}>Name</th>
                <th className={thClass}>Email</th>
                <th className={thClass}>Orders</th>
                <th className={thClass}>Spent</th>
                <th className={thClass}>Status</th>
                <th className={thClass}>Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {pagedCustomers.map((c) => (
                <tr key={c.id} className={trHoverClass}>
                  <td className={tdClass}>{c.id}</td>
                  <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                    {c.name}
                  </td>
                  <td className={tdClass}>{c.email}</td>
                  <td className={tdClass}>{c.orders}</td>
                  <td className={tdClass}>{c.spent}</td>
                  <td className={tdClass}>
                    <StatusBadge status={c.status} />
                  </td>
                  <td className={tdClass}>{c.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 px-6 py-4 dark:border-white/5 sm:flex-row">
          <span className="text-theme-sm text-gray-500 dark:text-gray-400">
            Showing {startEntry} to {endEntry} of {customers.length} entries
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex size-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/5"
            >
              <ChevronLeft className="size-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex size-8 items-center justify-center rounded-lg text-theme-sm font-medium ${
                  page === currentPage
                    ? 'bg-brand-500 text-white'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex size-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/5"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5. Selectable Rows Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Selectable Rows
          </h4>
        </div>
        {/* Bulk actions bar */}
        {selectedRows.size > 0 && (
          <div className="flex items-center gap-3 border-b border-brand-100 bg-brand-50 px-6 py-2.5 dark:border-brand-500/20 dark:bg-brand-500/10">
            <span className="text-theme-sm font-medium text-brand-600 dark:text-brand-400">
              {selectedRows.size} selected
            </span>
            <button className="rounded-md px-3 py-1 text-theme-xs font-medium text-brand-600 hover:bg-brand-100 dark:text-brand-400 dark:hover:bg-brand-500/20">
              Export
            </button>
            <button className="rounded-md px-3 py-1 text-theme-xs font-medium text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10">
              Delete
            </button>
            <button
              onClick={() => setSelectedRows(new Set())}
              className="ml-auto rounded-md p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="size-4" />
            </button>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className={`${thClass} w-10`}>
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-600"
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                </th>
                <th className={thClass}>Product</th>
                <th className={thClass}>Category</th>
                <th className={thClass}>Price</th>
                <th className={thClass}>Stock</th>
                <th className={thClass}>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {products.map((p) => (
                <tr
                  key={p.id}
                  className={`${trHoverClass} ${
                    selectedRows.has(p.id)
                      ? 'bg-brand-50/50 dark:bg-brand-500/5'
                      : ''
                  }`}
                >
                  <td className={tdClass}>
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-600"
                      checked={selectedRows.has(p.id)}
                      onChange={() => toggleRow(p.id)}
                    />
                  </td>
                  <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                    {p.name}
                  </td>
                  <td className={tdClass}>{p.category}</td>
                  <td className={tdClass}>{p.price}</td>
                  <td className={tdClass}>{p.stock}</td>
                  <td className={tdClass}>
                    <StatusBadge status={p.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Orders Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h4>
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5">
            <Download className="size-4" />
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className={thClass}>Order ID</th>
                <th className={thClass}>Customer</th>
                <th className={thClass}>Product</th>
                <th className={thClass}>Date</th>
                <th className={thClass}>Amount</th>
                <th className={thClass}>Status</th>
                <th className={thClass}>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {orders.map((order) => (
                <tr key={order.id} className={trHoverClass}>
                  <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                    {order.id}
                  </td>
                  <td className={tdClass}>{order.customer}</td>
                  <td className={tdClass}>{order.product}</td>
                  <td className={tdClass}>{order.date}</td>
                  <td className={tdClass}>{order.amount}</td>
                  <td className={tdClass}>
                    <StatusBadge status={order.status} />
                  </td>
                  <td className={tdClass}>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setActionOpen(
                            actionOpen === order.id ? null : order.id
                          )
                        }
                        className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300"
                      >
                        <MoreVertical className="size-4" />
                      </button>
                      {actionOpen === order.id && (
                        <div className="absolute right-0 top-full z-50 mt-1 w-36 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                          <button className="flex w-full items-center gap-2 px-3 py-2 text-theme-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5">
                            <Eye className="size-3.5" /> View
                          </button>
                          <button className="flex w-full items-center gap-2 px-3 py-2 text-theme-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5">
                            <Edit className="size-3.5" /> Edit
                          </button>
                          <button className="flex w-full items-center gap-2 px-3 py-2 text-theme-sm text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10">
                            <Trash2 className="size-3.5" /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 7. Invoice Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Invoices
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className={thClass}>Invoice ID</th>
                <th className={thClass}>Customer</th>
                <th className={thClass}>Amount</th>
                <th className={thClass}>Date</th>
                <th className={thClass}>Due Date</th>
                <th className={thClass}>Status</th>
                <th className={thClass}>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {invoiceData.invoices.map((inv) => (
                <tr key={inv.id} className={trHoverClass}>
                  <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                    {inv.id}
                  </td>
                  <td className={tdClass}>{inv.customer}</td>
                  <td className={tdClass}>{inv.amount}</td>
                  <td className={tdClass}>{inv.date}</td>
                  <td className={tdClass}>{inv.due}</td>
                  <td className={tdClass}>
                    <StatusBadge status={inv.status} />
                  </td>
                  <td className={tdClass}>
                    <button className="rounded-md px-3 py-1 text-theme-xs font-medium text-brand-500 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 8. Compact Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Compact Table
          </h4>
          <span className="text-theme-xs text-gray-500 dark:text-gray-400">
            Dense data display
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className="px-4 py-2 text-left text-theme-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  SKU
                </th>
                <th className="px-4 py-2 text-left text-theme-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Item
                </th>
                <th className="px-4 py-2 text-left text-theme-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Qty
                </th>
                <th className="px-4 py-2 text-left text-theme-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-theme-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {[
                { sku: 'SKU-001', item: 'Widget A', qty: 100, price: '$5.00', total: '$500.00' },
                { sku: 'SKU-002', item: 'Widget B', qty: 250, price: '$3.50', total: '$875.00' },
                { sku: 'SKU-003', item: 'Gadget C', qty: 50, price: '$12.00', total: '$600.00' },
                { sku: 'SKU-004', item: 'Gadget D', qty: 75, price: '$8.25', total: '$618.75' },
                { sku: 'SKU-005', item: 'Part E', qty: 500, price: '$1.50', total: '$750.00' },
                { sku: 'SKU-006', item: 'Part F', qty: 200, price: '$2.75', total: '$550.00' },
                { sku: 'SKU-007', item: 'Component G', qty: 30, price: '$22.00', total: '$660.00' },
              ].map((row) => (
                <tr key={row.sku} className={trHoverClass}>
                  <td className="px-4 py-2 text-theme-xs text-gray-700 dark:text-gray-300">
                    {row.sku}
                  </td>
                  <td className="px-4 py-2 text-theme-xs font-medium text-gray-800 dark:text-white/90">
                    {row.item}
                  </td>
                  <td className="px-4 py-2 text-theme-xs text-gray-700 dark:text-gray-300">
                    {row.qty}
                  </td>
                  <td className="px-4 py-2 text-theme-xs text-gray-700 dark:text-gray-300">
                    {row.price}
                  </td>
                  <td className="px-4 py-2 text-theme-xs font-medium text-gray-800 dark:text-white/90">
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 9. Responsive Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Responsive Table
          </h4>
          <span className="text-theme-xs text-gray-500 dark:text-gray-400">
            Horizontal scroll on mobile
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className={thClass}>Employee</th>
                <th className={thClass}>Department</th>
                <th className={thClass}>Position</th>
                <th className={thClass}>Salary</th>
                <th className={thClass}>Start Date</th>
                <th className={thClass}>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {[
                { name: 'Alex Morgan', dept: 'Engineering', pos: 'Senior Dev', salary: '$120K', start: '2021-03-15', status: 'Active' },
                { name: 'Sarah Chen', dept: 'Design', pos: 'Lead Designer', salary: '$105K', start: '2020-08-01', status: 'Active' },
                { name: 'Mike Johnson', dept: 'Engineering', pos: 'Full Stack Dev', salary: '$95K', start: '2022-01-10', status: 'Active' },
                { name: 'Emily Davis', dept: 'Marketing', pos: 'Content Lead', salary: '$85K', start: '2021-11-20', status: 'Inactive' },
                { name: 'David Wilson', dept: 'Sales', pos: 'Sales Manager', salary: '$110K', start: '2019-06-05', status: 'Active' },
              ].map((row) => (
                <tr key={row.name} className={trHoverClass}>
                  <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-brand-50 text-theme-xs font-semibold text-brand-500 dark:bg-brand-500/10 dark:text-brand-400">
                        {row.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      {row.name}
                    </div>
                  </td>
                  <td className={tdClass}>{row.dept}</td>
                  <td className={tdClass}>{row.pos}</td>
                  <td className={tdClass}>{row.salary}</td>
                  <td className={tdClass}>{row.start}</td>
                  <td className={tdClass}>
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 10. Analytics Table */}
      <div className={cardClass}>
        <div className={cardHeaderClass}>
          <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
            Page Analytics
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5">
                <th className={thClass}>Page</th>
                <th className={thClass}>Views</th>
                <th className={thClass}>Unique Visitors</th>
                <th className={thClass}>Bounce Rate</th>
                <th className={thClass}>Avg. Session</th>
                <th className={thClass}>Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {analyticsRows.map((row) => {
                const maxVal = Math.max(...row.sparkline);
                return (
                  <tr key={row.page} className={trHoverClass}>
                    <td className={`${tdClass} font-medium text-gray-800 dark:text-white/90`}>
                      {row.page}
                    </td>
                    <td className={tdClass}>{row.views.toLocaleString()}</td>
                    <td className={tdClass}>{row.unique.toLocaleString()}</td>
                    <td className={tdClass}>{row.bounce}</td>
                    <td className={tdClass}>{row.avgSession}</td>
                    <td className={tdClass}>
                      <div className="flex items-end gap-0.5">
                        {row.sparkline.map((val, i) => (
                          <div
                            key={i}
                            className="w-2 rounded-t-sm bg-brand-500/70 dark:bg-brand-400/70"
                            style={{
                              height: `${Math.max(4, (val / maxVal) * 24)}px`,
                            }}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

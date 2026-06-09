'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Edit3,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Bell,
  CreditCard,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Plus,
  Trash2,
  Key,
  Zap,
  Search,
  Home,
  RefreshCw,
  Wrench,
  Timer,
  Globe,
  Monitor,
  Smartphone,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Settings,
  Activity,
  ExternalLink,
  MoreHorizontal,
  ShoppingCart,
} from 'lucide-react';
import { pricingData, teamData } from '@/lib/mtverse/data/mock-data';

// Shared styles
const inputClass =
  'h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500 dark:focus:border-brand-500';

const labelClass =
  'mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300';

const cardClass =
  'rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark';

// ─── ProfilePage ─────────────────────────────────────────────────────────────
export function ProfilePage() {
  const [notifPrefs, setNotifPrefs] = useState({
    email: true,
    push: true,
    sms: false,
  });

  const toggleNotif = (key: keyof typeof notifPrefs) => {
    setNotifPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">Profile</h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Manage your personal information and preferences</p>
      </div>

      {/* Profile Header Card */}
      <div className={cardClass}>
        <div className="h-40 rounded-t-xl bg-gradient-to-r from-brand-500 to-brand-700" />
        <div className="relative px-6 pb-6">
          <div className="-mt-14 flex flex-col items-center gap-4 sm:flex-row sm:items-end">
            <div className="flex size-24 items-center justify-center rounded-full border-4 border-white bg-brand-100 text-2xl font-bold text-brand-600 dark:border-gray-dark dark:bg-brand-500/20 dark:text-brand-400">
              AM
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Alex Morgan</h2>
              <p className="text-theme-sm text-gray-500 dark:text-gray-400">Admin &middot; San Francisco, CA</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5 transition-colors">
              <Edit3 className="size-4" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* User Info */}
        <div className={cardClass}>
          <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
            <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">User Info</h3>
          </div>
          <div className="space-y-4 p-6">
            {[
              { icon: Mail, label: 'Email', value: 'alex@mtverse.com' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
              { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
              { icon: Calendar, label: 'Joined', value: 'Jan 15, 2024' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5">
                  <Icon className="size-4 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-theme-xs text-gray-500 dark:text-gray-400">{label}</p>
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className={cardClass}>
          <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
            <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Address</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-theme-xs text-gray-500 dark:text-gray-400">Street</p>
              <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">123 Market Street, Suite 400</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400">City</p>
                <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">San Francisco</p>
              </div>
              <div>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400">State</p>
                <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">California</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400">ZIP</p>
                <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">94105</p>
              </div>
              <div>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400">Country</p>
                <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className={cardClass}>
          <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
            <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Activity</h3>
          </div>
          <div className="p-6">
            <div className="relative space-y-6">
              <div className="absolute left-[9px] top-2 h-[calc(100%-24px)] w-px bg-gray-200 dark:bg-white/5" />
              {[
                { color: 'bg-brand-500', title: 'Updated profile photo', time: '2 min ago' },
                { color: 'bg-success-500', title: 'Completed 2FA setup', time: '1 hour ago' },
                { color: 'bg-warning-500', title: 'Changed password', time: '3 hours ago' },
                { color: 'bg-blue-light-500', title: 'Logged in from new device', time: 'Yesterday' },
                { color: 'bg-error-500', title: 'Failed login attempt', time: '2 days ago' },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-4">
                  <div className={`mt-1 size-[18px] shrink-0 rounded-full ${item.color} ring-4 ring-white dark:ring-gray-dark`} />
                  <div>
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{item.title}</p>
                    <p className="text-theme-xs text-gray-500 dark:text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Security & Notifications */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Change Password */}
        <div className={cardClass}>
          <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
            <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Change Password</h3>
          </div>
          <div className="space-y-4 p-6">
            <div>
              <label className={labelClass}>Current Password</label>
              <input type="password" className={inputClass} placeholder="Enter current password" />
            </div>
            <div>
              <label className={labelClass}>New Password</label>
              <input type="password" className={inputClass} placeholder="Enter new password" />
            </div>
            <div>
              <label className={labelClass}>Confirm New Password</label>
              <input type="password" className={inputClass} placeholder="Confirm new password" />
            </div>
            <button className="rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors">
              Update Password
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className={cardClass}>
          <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
            <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Notification Preferences</h3>
          </div>
          <div className="p-6 space-y-5">
            {[
              { key: 'email' as const, icon: Mail, title: 'Email Notifications', desc: 'Receive updates via email' },
              { key: 'push' as const, icon: Bell, title: 'Push Notifications', desc: 'Receive push notifications' },
              { key: 'sms' as const, icon: Phone, title: 'SMS Notifications', desc: 'Receive SMS alerts' },
            ].map(({ key, icon: Icon, title, desc }) => (
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5">
                    <Icon className="size-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{title}</p>
                    <p className="text-theme-xs text-gray-500 dark:text-gray-400">{desc}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleNotif(key)}
                  className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                    notifPrefs[key] ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block size-4 rounded-full bg-white transition-transform ${
                      notifPrefs[key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SettingsPage ────────────────────────────────────────────────────────────
export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [twoFactor, setTwoFactor] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'billing', label: 'Billing' },
  ];

  const notifSettings = [
    { title: 'Security Alerts', desc: 'Get notified about security events', on: true },
    { title: 'Email Notifications', desc: 'Receive email updates', on: true },
    { title: 'Push Notifications', desc: 'Browser push notifications', on: false },
    { title: 'SMS Alerts', desc: 'Text message alerts', on: false },
    { title: 'Weekly Reports', desc: 'Weekly activity summary', on: true },
    { title: 'Marketing Updates', desc: 'Product news and offers', on: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">Settings</h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 dark:border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-theme-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-brand-500 text-brand-500'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* General Tab */}
      {activeTab === 'general' && (
        <div className={cardClass}>
          <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
            <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Profile Information</h3>
          </div>
          <div className="space-y-4 p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className={labelClass}>First Name</label>
                <input type="text" className={inputClass} defaultValue="Alex" />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input type="text" className={inputClass} defaultValue="Morgan" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" className={inputClass} defaultValue="alex@mtverse.com" />
            </div>
            <div>
              <label className={labelClass}>Bio</label>
              <textarea rows={3} className={`${inputClass} h-auto py-3`} defaultValue="Admin at mtverse" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className={labelClass}>Timezone</label>
                <select className={inputClass} defaultValue="pst">
                  <option value="pst">Pacific Time (PST)</option>
                  <option value="mst">Mountain Time (MST)</option>
                  <option value="cst">Central Time (CST)</option>
                  <option value="est">Eastern Time (EST)</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Language</label>
                <select className={inputClass} defaultValue="en">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/5">
                Cancel
              </button>
              <button className="rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className={cardClass}>
            <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Change Password</h3>
            </div>
            <div className="space-y-4 p-6">
              <div>
                <label className={labelClass}>Current Password</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} className={`${inputClass} pr-10`} placeholder="Enter current password" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className={labelClass}>New Password</label>
                <input type="password" className={inputClass} placeholder="Enter new password" />
              </div>
              <div>
                <label className={labelClass}>Confirm Password</label>
                <input type="password" className={inputClass} placeholder="Confirm new password" />
              </div>
              <button className="rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600">
                Update Password
              </button>
            </div>
          </div>

          {/* Two-factor Auth */}
          <div className={cardClass}>
            <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Two-Factor Authentication</h3>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/20">
                  <Shield className="size-5 text-brand-500 dark:text-brand-400" />
                </div>
                <div>
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">Enable 2FA</p>
                  <p className="text-theme-xs text-gray-500 dark:text-gray-400">Add extra security to your account</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTwoFactor(!twoFactor)}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                  twoFactor ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block size-4 rounded-full bg-white transition-transform ${
                    twoFactor ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Active Sessions */}
          <div className={cardClass}>
            <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Active Sessions</h3>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {[
                { device: 'MacBook Pro — Chrome', location: 'San Francisco, US', time: 'Current session', icon: Monitor, current: true },
                { device: 'iPhone 15 — Safari', location: 'San Francisco, US', time: '2 hours ago', icon: Smartphone, current: false },
                { device: 'Windows PC — Firefox', location: 'New York, US', time: '1 day ago', icon: Monitor, current: false },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5">
                      <session.icon className="size-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{session.device}</p>
                      <p className="text-theme-xs text-gray-500 dark:text-gray-400">{session.location} &middot; {session.time}</p>
                    </div>
                  </div>
                  {session.current ? (
                    <span className="rounded-full bg-success-50 px-2.5 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/20 dark:text-success-500">
                      Current
                    </span>
                  ) : (
                    <button className="text-theme-sm font-medium text-error-500 hover:text-error-600">Revoke</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className={cardClass}>
          <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
            <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Notification Settings</h3>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-white/5">
            {notifSettings.map((item, i) => (
              <NotifToggle key={i} title={item.title} desc={item.desc} defaultOn={item.on} />
            ))}
          </div>
        </div>
      )}

      {/* Billing Tab */}
      {activeTab === 'billing' && (
        <div className="space-y-6">
          {/* Current Plan */}
          <div className={cardClass}>
            <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Current Plan</h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Premium Plan</h4>
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-theme-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">Active</span>
                  </div>
                  <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">$149/month &middot; Renews on Feb 15, 2024</p>
                </div>
                <button className="rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className={cardClass}>
            <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Payment Method</h3>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5">
                  <CreditCard className="size-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">Visa ending in 4242</p>
                  <p className="text-theme-xs text-gray-500 dark:text-gray-400">Expires 12/2025</p>
                </div>
              </div>
              <button className="text-theme-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">Edit</button>
            </div>
          </div>

          {/* Billing History */}
          <div className={cardClass}>
            <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Billing History</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/5">
                    <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Invoice</th>
                    <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Date</th>
                    <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Amount</th>
                    <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                  {[
                    { invoice: 'INV-001', date: 'Jan 15, 2024', amount: '$149.00', status: 'Paid' },
                    { invoice: 'INV-002', date: 'Dec 15, 2023', amount: '$149.00', status: 'Paid' },
                    { invoice: 'INV-003', date: 'Nov 15, 2023', amount: '$149.00', status: 'Paid' },
                    { invoice: 'INV-004', date: 'Oct 15, 2023', amount: '$149.00', status: 'Paid' },
                  ].map((row) => (
                    <tr key={row.invoice} className="hover:bg-gray-50 dark:hover:bg-white/5">
                      <td className="px-6 py-4 text-theme-sm font-medium text-brand-500 dark:text-brand-400">{row.invoice}</td>
                      <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">{row.date}</td>
                      <td className="px-6 py-4 text-theme-sm text-gray-700 dark:text-gray-300">{row.amount}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-success-50 px-2.5 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/20 dark:text-success-500">{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NotifToggle({ title, desc, defaultOn }: { title: string; desc: string; defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div>
        <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{title}</p>
        <p className="text-theme-xs text-gray-500 dark:text-gray-400">{desc}</p>
      </div>
      <button
        type="button"
        onClick={() => setOn(!on)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
          on ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
        }`}
      >
        <span
          className={`inline-block size-4 rounded-full bg-white transition-transform ${
            on ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

// ─── PricingPage ─────────────────────────────────────────────────────────────
export function PricingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">Pricing Plans</h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Choose the plan that fits your needs</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingData.plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-lg border bg-white p-6 dark:bg-gray-dark ${
              plan.highlighted
                ? 'border-brand-500 shadow-theme-md dark:border-brand-500'
                : 'border-gray-200 dark:border-white/5'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-brand-500 px-3 py-1 text-theme-xs font-semibold text-white">Popular</span>
              </div>
            )}
            <div className="mb-6 text-center">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">{plan.name}</h3>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="text-title-md font-bold text-gray-800 dark:text-white/90">{plan.price}</span>
                <span className="text-theme-sm text-gray-500 dark:text-gray-400">{plan.period}</span>
              </div>
              <p className="mt-2 text-theme-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
            </div>
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-theme-sm text-gray-700 dark:text-gray-300">
                  <Check className="size-4 shrink-0 text-success-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`h-11 w-full rounded-lg text-theme-sm font-medium transition-colors ${
                plan.highlighted
                  ? 'bg-brand-500 text-white hover:bg-brand-600'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-white/5'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── FAQPage ─────────────────────────────────────────────────────────────────
export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    { category: 'General', q: 'What is mtverse admin?', a: 'mtverse admin is a comprehensive admin dashboard template built with modern web technologies. It includes 500+ highly customizable components, 10+ dashboard variants, and support for multiple frameworks.' },
    { category: 'General', q: 'What frameworks are supported?', a: 'mtverse admin supports HTML, React, Next.js, Vue.js, Angular, and Laravel. Each framework bundle comes with ready-to-use components and layouts.' },
    { category: 'Licensing', q: 'What license options are available?', a: 'We offer three license tiers: Basic for individual use, Premium for teams with source files and Figma designs, and Enterprise for large organizations with white-label and custom development options.' },
    { category: 'Licensing', q: 'Can I use mtverse admin for commercial projects?', a: 'Yes, all license tiers allow commercial use. The Basic license covers single-project use, while Premium and Enterprise licenses allow unlimited projects.' },
    { category: 'Support', q: 'What kind of support is included?', a: 'Basic includes community support via Discord. Premium includes priority email support with 24-hour response time. Enterprise includes dedicated support with a guaranteed SLA and team training.' },
    { category: 'Support', q: 'How do I report bugs or request features?', a: 'You can report bugs through our GitHub repository or email support. Feature requests can be submitted through our feedback portal. Premium and Enterprise users get priority handling.' },
    { category: 'Technical', q: 'Is TypeScript supported?', a: 'Yes, all React and Next.js components are written in TypeScript with full type definitions. Vue.js components use TypeScript-compatible definitions as well.' },
    { category: 'Technical', q: 'How do I customize the theme?', a: 'mtverse admin uses Tailwind CSS with CSS variables for theming. You can customize colors, typography, spacing, and more through the configuration file. Dark mode is built-in.' },
    { category: 'Technical', q: 'Does it support dark mode?', a: 'Yes, dark mode is fully supported across all components and dashboards. It can be toggled manually or set to follow system preferences.' },
  ];

  const categories = ['All', ...Array.from(new Set(faqItems.map((f) => f.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? faqItems : faqItems.filter((f) => f.category === activeCategory);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">FAQ</h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Frequently asked questions about mtverse admin</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-3 py-1.5 text-theme-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-brand-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {filtered.map((item, i) => (
          <div key={i} className={cardClass}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-brand-50 px-2 py-0.5 text-theme-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">{item.category}</span>
                <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{item.q}</span>
              </div>
              <ChevronRight className={`size-4 shrink-0 text-gray-400 transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="border-t border-gray-100 px-6 py-4 dark:border-white/5">
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APIKeysPage ─────────────────────────────────────────────────────────────
export function APIKeysPage() {
  const [showModal, setShowModal] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const apiKeys = [
    { name: 'Production Key', key: 'api_live_sample_000000000000', created: 'Jan 15, 2024', status: 'Active' },
    { name: 'Staging Key', key: 'api_test_sample_000000000000', created: 'Dec 20, 2023', status: 'Active' },
    { name: 'Development Key', key: 'api_dev_sample_000000000000', created: 'Nov 5, 2023', status: 'Inactive' },
    { name: 'Analytics Key', key: 'api_anly_sample_000000000000', created: 'Oct 12, 2023', status: 'Active' },
  ];

  const copyKey = (key: string) => {
    navigator.clipboard.writeText(key).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const maskKey = (key: string) => key.slice(0, 10) + '••••••••' + key.slice(-4);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">API Keys</h1>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Manage your API keys and access</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600"
        >
          <Plus className="size-4" />
          Generate New Key
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: 'Total Keys', value: '4', icon: Key, color: 'bg-brand-50 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400' },
          { title: 'Active Keys', value: '3', icon: CheckCircle2, color: 'bg-success-50 text-success-600 dark:bg-success-500/20 dark:text-success-500' },
          { title: 'API Calls (30d)', value: '142,500', icon: Activity, color: 'bg-blue-light-50 text-blue-light-600 dark:bg-blue-light-500/20 dark:text-blue-light-500' },
        ].map(({ title, value, icon: Icon, color }) => (
          <div key={title} className={cardClass}>
            <div className="flex items-center gap-4 p-6">
              <div className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${color}`}>
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Keys Table */}
      <div className={cardClass}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/5">
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Key Name</th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Key</th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Created</th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-theme-xs font-medium uppercase text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {apiKeys.map((apiKey) => (
                <tr key={apiKey.key} className="hover:bg-gray-50 dark:hover:bg-white/5">
                  <td className="px-6 py-4 text-theme-sm font-medium text-gray-800 dark:text-white/90">{apiKey.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <code className="text-theme-sm text-gray-600 dark:text-gray-400">{maskKey(apiKey.key)}</code>
                      <button
                        onClick={() => copyKey(apiKey.key)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {copiedKey === apiKey.key ? <Check className="size-4 text-success-500" /> : <Copy className="size-4" />}
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-theme-sm text-gray-600 dark:text-gray-400">{apiKey.created}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${
                      apiKey.status === 'Active'
                        ? 'bg-success-50 text-success-600 dark:bg-success-500/20 dark:text-success-500'
                        : 'bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400'
                    }`}>
                      {apiKey.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-error-500 hover:text-error-600">
                      <Trash2 className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="w-full max-w-md rounded-lg bg-white p-6 dark:bg-gray-dark" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Generate New API Key</h3>
            <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Create a new API key for your application</p>
            <div className="mt-4 space-y-4">
              <div>
                <label className={labelClass}>Key Name</label>
                <input type="text" className={inputClass} placeholder="e.g., Production API Key" />
              </div>
              <div>
                <label className={labelClass}>Permissions</label>
                <select className={inputClass}>
                  <option>Read Only</option>
                  <option>Read & Write</option>
                  <option>Full Access</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button onClick={() => setShowModal(false)} className="rounded-lg border border-gray-300 px-4 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/5">Cancel</button>
                <button onClick={() => setShowModal(false)} className="rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600">Generate Key</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── IntegrationsPage ────────────────────────────────────────────────────────
export function IntegrationsPage() {
  const [connected, setConnected] = useState<Record<string, boolean>>({
    slack: true,
    github: true,
    stripe: false,
  });

  const integrations = [
    { id: 'slack', name: 'Slack', desc: 'Team communication and notifications', color: 'bg-[#4A154B]', initial: 'S' },
    { id: 'github', name: 'GitHub', desc: 'Code repository and CI/CD', color: 'bg-gray-800', initial: 'G' },
    { id: 'jira', name: 'Jira', desc: 'Project management and tracking', color: 'bg-[#0052CC]', initial: 'J' },
    { id: 'stripe', name: 'Stripe', desc: 'Payment processing and billing', color: 'bg-[#635BFF]', initial: 'S' },
    { id: 'aws', name: 'AWS', desc: 'Cloud infrastructure and services', color: 'bg-[#FF9900]', initial: 'A' },
    { id: 'analytics', name: 'Google Analytics', desc: 'Website analytics and insights', color: 'bg-[#E37400]', initial: 'G' },
    { id: 'zapier', name: 'Zapier', desc: 'Workflow automation platform', color: 'bg-[#FF4A00]', initial: 'Z' },
    { id: 'salesforce', name: 'Salesforce', desc: 'CRM and sales automation', color: 'bg-[#00A1E0]', initial: 'S' },
  ];

  const toggleConnected = (id: string) => {
    setConnected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">Integrations</h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Connect with your favorite tools and services</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {integrations.map((intg) => {
          const isConnected = connected[intg.id];
          return (
            <div key={intg.id} className={cardClass}>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex size-11 shrink-0 items-center justify-center rounded-lg text-white ${intg.color}`}>
                    <span className="text-lg font-bold">{intg.initial}</span>
                  </div>
                  <div>
                    <h3 className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">{intg.name}</h3>
                    <p className="text-theme-xs text-gray-500 dark:text-gray-400">{intg.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleConnected(intg.id)}
                  className={`h-9 w-full rounded-lg text-theme-sm font-medium transition-colors ${
                    isConnected
                      ? 'border border-success-500 bg-success-50 text-success-600 dark:bg-success-500/20 dark:text-success-500'
                      : 'bg-brand-500 text-white hover:bg-brand-600'
                  }`}
                >
                  {isConnected ? 'Connected' : 'Connect'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── ActivityLogPage ─────────────────────────────────────────────────────────
export function ActivityLogPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Auth', 'Data', 'Settings', 'API'];

  const activities = [
    { type: 'Auth', icon: Shield, color: 'text-brand-500 bg-brand-50 dark:bg-brand-500/20 dark:text-brand-400', action: 'User logged in', user: 'Alex Morgan', time: '2 min ago' },
    { type: 'Data', icon: Edit3, color: 'text-success-500 bg-success-50 dark:bg-success-500/20 dark:text-success-500', action: 'Updated product catalog', user: 'Sarah Chen', time: '15 min ago' },
    { type: 'Settings', icon: Settings, color: 'text-warning-500 bg-warning-50 dark:bg-warning-500/20 dark:text-warning-500', action: 'Changed notification settings', user: 'Mike Johnson', time: '1 hour ago' },
    { type: 'API', icon: Key, color: 'text-blue-light-500 bg-blue-light-50 dark:bg-blue-light-500/20 dark:text-blue-light-500', action: 'Generated new API key', user: 'Emily Davis', time: '2 hours ago' },
    { type: 'Auth', icon: Shield, color: 'text-brand-500 bg-brand-50 dark:bg-brand-500/20 dark:text-brand-400', action: 'Password changed', user: 'Alex Morgan', time: '3 hours ago' },
    { type: 'Data', icon: Edit3, color: 'text-success-500 bg-success-50 dark:bg-success-500/20 dark:text-success-500', action: 'Exported customer data', user: 'David Wilson', time: '4 hours ago' },
    { type: 'API', icon: Key, color: 'text-blue-light-500 bg-blue-light-50 dark:bg-blue-light-500/20 dark:text-blue-light-500', action: 'API rate limit reached', user: 'System', time: '5 hours ago' },
    { type: 'Settings', icon: Settings, color: 'text-warning-500 bg-warning-50 dark:bg-warning-500/20 dark:text-warning-500', action: 'Enabled 2FA', user: 'Sarah Chen', time: '6 hours ago' },
    { type: 'Auth', icon: Shield, color: 'text-brand-500 bg-brand-50 dark:bg-brand-500/20 dark:text-brand-400', action: 'Failed login attempt', user: 'Unknown', time: '8 hours ago' },
    { type: 'Data', icon: Edit3, color: 'text-success-500 bg-success-50 dark:bg-success-500/20 dark:text-success-500', action: 'Created backup', user: 'System', time: '12 hours ago' },
  ];

  const filtered = activeFilter === 'All' ? activities : activities.filter((a) => a.type === activeFilter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">Activity Log</h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Track all system activities and changes</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-lg px-3 py-1.5 text-theme-sm font-medium transition-colors ${
              activeFilter === f
                ? 'bg-brand-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className={cardClass}>
        <div className="divide-y divide-gray-100 dark:divide-white/5">
          {filtered.map((activity, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4">
              <div className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${activity.color}`}>
                <activity.icon className="size-4" />
              </div>
              <div className="flex-1">
                <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{activity.action}</p>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400">by {activity.user}</p>
              </div>
              <span className="text-theme-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── NotificationsPage ───────────────────────────────────────────────────────
export function NotificationsPage() {
  const [filter, setFilter] = useState('All');

  const initialNotifs = [
    { id: 1, icon: ShoppingCart, title: 'New Order', message: 'Order #7892 from Sarah Johnson — $1,999', time: '2 min ago', read: false, color: 'text-brand-500 bg-brand-50 dark:bg-brand-500/20 dark:text-brand-400' },
    { id: 2, icon: CreditCard, title: 'Payment Received', message: '$12,500 from Acme Corp', time: '15 min ago', read: false, color: 'text-success-500 bg-success-50 dark:bg-success-500/20 dark:text-success-500' },
    { id: 3, icon: AlertCircle, title: 'Server Alert', message: 'CPU usage above 85% on production', time: '1 hour ago', read: false, color: 'text-error-500 bg-error-50 dark:bg-error-500/20 dark:text-error-500' },
    { id: 4, icon: User, title: 'New User', message: 'emily.chen@example.com registered', time: '2 hours ago', read: true, color: 'text-blue-light-500 bg-blue-light-50 dark:bg-blue-light-500/20 dark:text-blue-light-500' },
    { id: 5, icon: CheckCircle2, title: 'Report Ready', message: 'Q4 revenue report is ready to download', time: '3 hours ago', read: true, color: 'text-success-500 bg-success-50 dark:bg-success-500/20 dark:text-success-500' },
    { id: 6, icon: Settings, title: 'System Update', message: 'Dashboard v2.4.1 deployed successfully', time: '5 hours ago', read: true, color: 'text-gray-500 bg-gray-100 dark:bg-white/5 dark:text-gray-400' },
    { id: 7, icon: Shield, title: 'Security Alert', message: 'New login from Chrome on Windows', time: '6 hours ago', read: true, color: 'text-warning-500 bg-warning-50 dark:bg-warning-500/20 dark:text-warning-500' },
  ];

  const [notifications, setNotifications] = useState(initialNotifs);

  const filtered = filter === 'All' ? notifications : filter === 'Unread' ? notifications.filter((n) => !n.read) : notifications.filter((n) => n.read);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">Notifications</h1>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Stay updated with the latest activity</p>
        </div>
        <button
          onClick={markAllRead}
          className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5"
        >
          <CheckCircle2 className="size-4" />
          Mark All as Read
        </button>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {['All', 'Unread', 'Read'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-lg px-3 py-1.5 text-theme-sm font-medium transition-colors ${
              filter === f
                ? 'bg-brand-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className={cardClass}>
        <div className="divide-y divide-gray-100 dark:divide-white/5">
          {filtered.map((n) => (
            <div key={n.id} className={`flex items-start gap-4 px-6 py-4 ${!n.read ? 'bg-brand-50/50 dark:bg-brand-500/5' : ''}`}>
              <div className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg ${n.color}`}>
                <n.icon className="size-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">{n.title}</p>
                  {!n.read && <span className="size-2 rounded-full bg-brand-500" />}
                </div>
                <p className="text-theme-sm text-gray-600 dark:text-gray-400">{n.message}</p>
                <p className="mt-1 text-theme-xs text-gray-400 dark:text-gray-500">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TeamPage ────────────────────────────────────────────────────────────────
export function TeamPage() {
  const statusColor: Record<string, string> = {
    Active: 'bg-success-50 text-success-600 dark:bg-success-500/20 dark:text-success-500',
    'On Leave': 'bg-warning-50 text-warning-600 dark:bg-warning-500/20 dark:text-warning-500',
    Inactive: 'bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">Team</h1>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Manage your team members and roles</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600">
          <Plus className="size-4" />
          Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamData.members.map((member) => {
          const initials = member.name.split(' ').map((n) => n[0]).join('');
          return (
            <div key={member.id} className={cardClass}>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">{member.name}</h3>
                      <p className="text-theme-xs text-gray-500 dark:text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Edit3 className="size-4" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-theme-xs text-gray-500 dark:text-gray-400">{member.email}</p>
                  <span className={`rounded-full px-2.5 py-0.5 text-theme-xs font-medium ${statusColor[member.status] || statusColor.Inactive}`}>
                    {member.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── ComponentGalleryPage ────────────────────────────────────────────────────
export function ComponentGalleryPage() {
  const [activeFramework, setActiveFramework] = useState('React');
  const [activeCategory, setActiveCategory] = useState('All');

  const frameworks = ['HTML', 'React', 'Next.js', 'Vue.js', 'Angular', 'Laravel'];
  const categories = ['All', 'Dashboards', 'Apps', 'Forms', 'Tables', 'Pages', 'Charts', 'UI Elements', 'Auth'];

  const components = [
    { title: 'Ecommerce Dashboard', desc: 'Full-featured sales and analytics dashboard', category: 'Dashboards', gradient: 'from-brand-500 to-brand-700', tags: ['React', 'Next.js', 'Vue.js'] },
    { title: 'Analytics Dashboard', desc: 'Traffic and visitor analytics with charts', category: 'Dashboards', gradient: 'from-blue-light-500 to-blue-light-600', tags: ['React', 'HTML', 'Angular'] },
    { title: 'CRM Dashboard', desc: 'Customer relationship management overview', category: 'Dashboards', gradient: 'from-success-500 to-success-600', tags: ['React', 'Next.js'] },
    { title: 'Chat Application', desc: 'Real-time messaging with contacts sidebar', category: 'Apps', gradient: 'from-brand-400 to-brand-600', tags: ['React', 'Vue.js', 'Laravel'] },
    { title: 'Email Client', desc: 'Full-featured email with folders and composer', category: 'Apps', gradient: 'from-warning-500 to-warning-600', tags: ['React', 'Next.js', 'HTML'] },
    { title: 'Task Board', desc: 'Kanban-style task management board', category: 'Apps', gradient: 'from-success-500 to-brand-500', tags: ['React', 'Angular'] },
    { title: 'Form Elements', desc: 'Complete form component library', category: 'Forms', gradient: 'from-brand-500 to-purple-600', tags: ['React', 'Vue.js', 'HTML'] },
    { title: 'Wizard Form', desc: 'Multi-step form with validation', category: 'Forms', gradient: 'from-purple-500 to-brand-500', tags: ['React', 'Next.js'] },
    { title: 'Data Tables', desc: 'Sortable, searchable, paginated tables', category: 'Tables', gradient: 'from-blue-light-500 to-brand-500', tags: ['React', 'Angular', 'Laravel'] },
    { title: 'Pricing Table', desc: 'Responsive pricing plan comparison', category: 'Tables', gradient: 'from-success-500 to-blue-light-500', tags: ['React', 'HTML', 'Vue.js'] },
    { title: 'Profile Page', desc: 'User profile with settings and activity', category: 'Pages', gradient: 'from-brand-500 to-success-500', tags: ['React', 'Next.js'] },
    { title: 'FAQ Page', desc: 'Accordion-style frequently asked questions', category: 'Pages', gradient: 'from-warning-500 to-brand-500', tags: ['React', 'HTML'] },
    { title: 'Line Charts', desc: 'Interactive line and area charts', category: 'Charts', gradient: 'from-brand-500 to-blue-light-500', tags: ['React', 'Vue.js', 'Angular'] },
    { title: 'Bar Charts', desc: 'Vertical and horizontal bar charts', category: 'Charts', gradient: 'from-success-500 to-warning-500', tags: ['React', 'HTML'] },
    { title: 'Pie Charts', desc: 'Donut and pie chart components', category: 'Charts', gradient: 'from-warning-500 to-error-500', tags: ['React', 'Next.js'] },
    { title: 'Alerts & Badges', desc: 'Notification alerts and badge variants', category: 'UI Elements', gradient: 'from-blue-light-500 to-brand-500', tags: ['React', 'HTML', 'Vue.js'] },
    { title: 'Buttons & Cards', desc: 'Button styles and card components', category: 'UI Elements', gradient: 'from-brand-500 to-warning-500', tags: ['React', 'Angular', 'Laravel'] },
    { title: 'Modals & Tooltips', desc: 'Dialog, modal, and tooltip components', category: 'UI Elements', gradient: 'from-purple-500 to-brand-500', tags: ['React', 'Next.js', 'HTML'] },
    { title: 'Progress & Spinners', desc: 'Progress bars and loading indicators', category: 'UI Elements', gradient: 'from-success-500 to-brand-500', tags: ['React', 'Vue.js'] },
    { title: 'Sign In Page', desc: 'Login page with social auth options', category: 'Auth', gradient: 'from-brand-500 to-brand-700', tags: ['React', 'Next.js', 'HTML', 'Vue.js'] },
    { title: 'Sign Up Page', desc: 'Registration with validation', category: 'Auth', gradient: 'from-success-500 to-success-600', tags: ['React', 'HTML'] },
    { title: 'Forgot Password', desc: 'Password reset flow pages', category: 'Auth', gradient: 'from-warning-500 to-warning-600', tags: ['React', 'Next.js'] },
    { title: 'Two-Step Verification', desc: 'OTP verification page', category: 'Auth', gradient: 'from-brand-400 to-purple-500', tags: ['React', 'Angular'] },
    { title: 'Lock Screen', desc: 'Screen lock with time display', category: 'Auth', gradient: 'from-gray-700 to-gray-900', tags: ['React', 'HTML', 'Vue.js'] },
  ];

  const filtered = components.filter((c) => {
    const catMatch = activeCategory === 'All' || c.category === activeCategory;
    const fwMatch = c.tags.includes(activeFramework);
    return catMatch && fwMatch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">500+ Highly Customizable Tailwind CSS Dashboard Components</h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Browse our extensive component library across frameworks</p>
      </div>

      {/* Framework Filter */}
      <div className="flex flex-wrap gap-2">
        {frameworks.map((fw) => (
          <button
            key={fw}
            onClick={() => setActiveFramework(fw)}
            className={`rounded-lg px-3 py-1.5 text-theme-sm font-medium transition-colors ${
              activeFramework === fw
                ? 'bg-brand-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10'
            }`}
          >
            {fw}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-3 py-1.5 text-theme-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-gray-800 text-white dark:bg-white/10'
                : 'border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((comp, i) => (
          <div key={i} className={`${cardClass} overflow-hidden`}>
            <div className={`h-32 bg-gradient-to-br ${comp.gradient} flex items-center justify-center`}>
              <span className="text-lg font-semibold text-white/80">{comp.title}</span>
            </div>
            <div className="p-4">
              <h3 className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">{comp.title}</h3>
              <p className="mt-1 text-theme-xs text-gray-500 dark:text-gray-400">{comp.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {comp.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-gray-100 px-2 py-0.5 text-theme-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 py-16 dark:border-white/5">
          <Search className="mb-3 size-8 text-gray-400" />
          <p className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">No components found for this combination</p>
          <p className="mt-1 text-theme-xs text-gray-400 dark:text-gray-500">Try selecting a different framework or category</p>
        </div>
      )}
    </div>
  );
}

// ─── BlankPage ───────────────────────────────────────────────────────────────
export function BlankPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">Blank Page</h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">A clean slate for your content</p>
      </div>
      <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-gray-200 dark:border-white/5">
        <p className="text-theme-sm text-gray-400 dark:text-gray-500">Start building your page here</p>
      </div>
    </div>
  );
}

// ─── NotFoundPage ────────────────────────────────────────────────────────────
export function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-title-2xl font-bold text-gray-200 dark:text-white/10">404</h1>
        <h2 className="-mt-4 text-title-md font-semibold text-gray-800 dark:text-white/90">Page Not Found</h2>
        <p className="mt-3 text-theme-sm text-gray-500 dark:text-gray-400">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors">
          <Home className="size-4" />
          Go Home
        </button>
      </div>
    </div>
  );
}

// ─── ServerErrorPage ─────────────────────────────────────────────────────────
export function ServerErrorPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-title-2xl font-bold text-gray-200 dark:text-white/10">500</h1>
        <h2 className="-mt-4 text-title-md font-semibold text-gray-800 dark:text-white/90">Internal Server Error</h2>
        <p className="mt-3 text-theme-sm text-gray-500 dark:text-gray-400">
          Something went wrong on our end. Please try again later.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors">
          <RefreshCw className="size-4" />
          Retry
        </button>
      </div>
    </div>
  );
}

// ─── ComingSoonPage ──────────────────────────────────────────────────────────
export function ComingSoonPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-500/20">
            <Timer className="size-7 text-brand-500 dark:text-brand-400" />
          </div>
        </div>
        <h1 className="text-title-md font-semibold text-gray-800 dark:text-white/90">Coming Soon</h1>
        <p className="mt-3 text-theme-sm text-gray-500 dark:text-gray-400">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>

        {/* Countdown Placeholder */}
        <div className="mt-8 grid grid-cols-4 gap-3">
          {[
            { label: 'Days', value: '12' },
            { label: 'Hours', value: '08' },
            { label: 'Minutes', value: '45' },
            { label: 'Seconds', value: '30' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-gray-200 bg-white p-3 dark:border-white/5 dark:bg-gray-dark">
              <p className="text-title-sm font-bold text-gray-800 dark:text-white/90">{value}</p>
              <p className="text-theme-xs text-gray-500 dark:text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Notify Me */}
        <div className="mt-8 flex gap-2">
          <input
            type="email"
            className={inputClass}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="shrink-0 rounded-lg bg-brand-500 px-5 py-2 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MaintenancePage ─────────────────────────────────────────────────────────
export function MaintenancePage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-warning-50 dark:bg-warning-500/20">
            <Wrench className="size-7 text-warning-500 dark:text-warning-400" />
          </div>
        </div>
        <h1 className="text-title-md font-semibold text-gray-800 dark:text-white/90">Under Maintenance</h1>
        <p className="mt-3 text-theme-sm text-gray-500 dark:text-gray-400">
          We&apos;re performing scheduled maintenance. We&apos;ll be back soon!
        </p>
        <p className="mt-2 text-theme-xs text-gray-400 dark:text-gray-500">
          Estimated downtime: 2 hours
        </p>
      </div>
    </div>
  );
}

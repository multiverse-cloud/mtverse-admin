'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useNavigationStore } from '@/lib/mtverse/stores/navigation-store';
import { notificationsData } from '@/lib/mtverse/data/mock-data';
import CommandPalette from '@/components/mtverse/layout/command-palette';
import {
  PanelLeft,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Sun,
  Moon,
  Bell,
  User,
  Settings,
  CreditCard,
  LogOut,
  ChevronDown,
} from 'lucide-react';

export default function Header() {
  const {
    toggleSidebarCollapsed,
    setMobileMenuOpen,
    toggleTheme,
    theme,
    sidebarCollapsed,
    setSearchOpen,
  } = useNavigationStore();

  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  // Click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        notifRef.current &&
        !notifRef.current.contains(e.target as Node)
      ) {
        setNotifOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const last5Notifications = notificationsData.slice(0, 5);
  const unreadCount = last5Notifications.filter((n) => !n.read).length;

  return (
    <header
      className="sticky top-0 z-999 flex h-[72px] shrink-0 items-center border-b border-gray-200 bg-white px-4 dark:border-white/5 dark:bg-gray-dark sm:px-6 lg:px-8"
    >
      {/* Left side */}
      <div className="flex min-w-0 items-center gap-2">
        {/* Sidebar toggle - desktop */}
        <button
          onClick={toggleSidebarCollapsed}
          className="hidden size-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-theme-xs transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:border-brand-500/30 dark:hover:bg-brand-500/10 dark:hover:text-brand-400 lg:flex"
          aria-label="Toggle sidebar"
        >
          {sidebarCollapsed ? <PanelLeftOpen className="size-5" /> : <PanelLeftClose className="size-5" />}
        </button>

        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-theme-xs transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:border-brand-500/30 dark:hover:bg-brand-500/10 dark:hover:text-brand-400 lg:hidden"
          aria-label="Open mobile menu"
        >
          <PanelLeft className="size-5" />
        </button>

        {/* Search input - opens command palette */}
        <button
          onClick={() => setSearchOpen(true)}
          className="relative ml-1 flex h-10 w-[min(40vw,20rem)] max-w-xs cursor-pointer items-center rounded-lg border border-transparent bg-gray-100 pl-9 pr-12 text-sm text-gray-400 transition-colors hover:border-gray-200 dark:bg-white/5 dark:text-gray-500 dark:hover:border-white/10 sm:ml-2 sm:max-w-md sm:w-[min(42vw,28rem)]"
          aria-label="Open search"
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <span className="truncate">Search or type command...</span>
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="size-5" />
          ) : (
            <Sun className="size-5" />
          )}
        </button>

        {/* Notification bell */}
        <div ref={notifRef} className="relative">
          <button
            onClick={() => {
              setNotifOpen((prev) => !prev);
              setUserOpen(false);
            }}
            className="relative flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
            aria-label="Notifications"
          >
            <Bell className="size-5" />
            {unreadCount > 0 && (
              <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-error-500" />
            )}
          </button>

          {/* Notification dropdown */}
          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="border-b border-gray-100 px-4 py-3 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                  Notifications
                </h3>
              </div>
              <div className="max-h-96 overflow-y-auto custom-scrollbar">
                {last5Notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-3 border-b border-gray-50 px-4 py-3 transition-colors last:border-b-0 hover:bg-gray-50 dark:border-gray-700/50 dark:hover:bg-white/5 ${
                      !notif.read ? 'bg-brand-25/50 dark:bg-brand-500/5' : ''
                    }`}
                  >
                    {/* Unread indicator */}
                    <div className="mt-1.5 flex-shrink-0">
                      {!notif.read ? (
                        <span className="block size-2 rounded-full bg-brand-500" />
                      ) : (
                        <span className="block size-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                        {notif.title}
                      </p>
                      <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                        {notif.message}
                      </p>
                      <p className="mt-1 text-[10px] text-gray-400 dark:text-gray-500">
                        {notif.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700">
                <button className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-brand-500 hover:bg-gray-50 dark:text-brand-400 dark:hover:bg-white/5">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User avatar dropdown */}
        <div ref={userRef} className="relative">
          <button
            onClick={() => {
              setUserOpen((prev) => !prev);
              setNotifOpen(false);
            }}
            className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-white/5"
            aria-label="User menu"
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
              AM
            </div>
            <ChevronDown className="hidden size-4 text-gray-400 sm:block" />
          </button>

          {/* User dropdown */}
          {userOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              {/* User info */}
              <div className="border-b border-gray-100 px-4 py-3 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
                    AM
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-800 dark:text-white/90">
                      Alex Morgan
                    </p>
                    <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                      alex@mtverse.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu items */}
              <div className="py-1">
                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">
                  <User className="size-4" />
                  My Profile
                </button>
                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">
                  <Settings className="size-4" />
                  Settings
                </button>
                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">
                  <CreditCard className="size-4" />
                  Billing
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 dark:border-gray-700" />

              {/* Sign out */}
              <div className="py-1">
                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-error-500 hover:bg-gray-100 dark:text-error-500 dark:hover:bg-white/5">
                  <LogOut className="size-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Command Palette */}
      <CommandPalette />
    </header>
  );
}

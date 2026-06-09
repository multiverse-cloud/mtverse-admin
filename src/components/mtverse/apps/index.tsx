'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  calendarEvents,
  chatContacts,
  emailData,
  taskData,
  supportData,
} from '@/lib/mtverse/data/mock-data';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Phone,
  Video,
  MoreVertical,
  Send,
  Paperclip,
  Star,
  Folder,
  FileText,
  Image as ImageIcon,
  File,
  Upload,
  Grid3X3,
  List,
  ArrowUpRight,
  Home,
  ChevronDown,
  MessageSquare,
  Clock,
  User,
  X,
  Archive,
  Trash2,
  Edit3,
  Filter,
  LayoutGrid,
  Columns3,
  AlertCircle,
  CheckCircle2,
  Circle,
  HardDrive,
  FileSpreadsheet,
  FileImage,
  FileType,
  Smile,
} from 'lucide-react';

/* ─────────────── shared card wrapper ─────────────── */
function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark ${className}`}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   1. CalendarPage
   ═══════════════════════════════════════════════════════ */
export function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1));
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    type: 'meeting' as 'meeting' | 'review' | 'call',
  });
  const [events, setEvents] = useState(calendarEvents);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const days = useMemo(() => {
    const d: { day: number; current: boolean }[] = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      d.push({ day: prevMonthDays - i, current: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      d.push({ day: i, current: true });
    }
    const remaining = 42 - d.length;
    for (let i = 1; i <= remaining; i++) {
      d.push({ day: i, current: false });
    }
    return d;
  }, [firstDay, daysInMonth, prevMonthDays]);

  const prev = () => setCurrentDate(new Date(year, month - 1, 1));
  const next = () => setCurrentDate(new Date(year, month + 1, 1));

  const today = new Date();
  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const eventTypeColors: Record<string, string> = {
    meeting: 'bg-brand-50 text-brand-500 dark:bg-brand-500/10',
    review: 'bg-warning-50 text-warning-500 dark:bg-warning-500/10',
    call: 'bg-success-50 text-success-500 dark:bg-success-500/10',
  };

  const handleAddEvent = () => {
    if (!newEvent.title) return;
    setEvents((prev) => [
      ...prev,
      { id: prev.length + 1, ...newEvent, duration: '1h' },
    ]);
    setNewEvent({ title: '', date: '', time: '', type: 'meeting' });
    setShowModal(false);
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            Calendar
          </h1>
          <p className="text-theme-sm text-gray-500 dark:text-gray-400">
            Manage your schedule and events
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
        >
          <Plus className="size-4" /> Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Calendar Grid */}
        <div className="xl:col-span-8">
          <Card className="p-6">
            {/* Month Navigation */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
                {monthName} {year}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={next}
                  className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>

            {/* Week day headers */}
            <div className="grid grid-cols-7 gap-px">
              {weekDays.map((d) => (
                <div
                  key={d}
                  className="py-2 text-center text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-px">
              {days.map((d, i) => {
                const dayEvents =
                  d.current && d.day <= events.length
                    ? [events[d.day - 1]]
                    : [];
                return (
                  <div
                    key={i}
                    className={`min-h-[80px] border-t border-gray-100 p-1.5 dark:border-white/5 ${
                      !d.current
                        ? 'opacity-40'
                        : ''
                    }`}
                  >
                    <span
                      className={`inline-flex size-7 items-center justify-center rounded-full text-sm ${
                        isToday(d.day) && d.current
                          ? 'bg-brand-500 font-semibold text-white'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {d.day}
                    </span>
                    <div className="mt-0.5 space-y-0.5">
                      {dayEvents.slice(0, 2).map((ev) => (
                        <div
                          key={ev.id}
                          className={`truncate rounded px-1.5 py-0.5 text-[10px] font-medium ${
                            eventTypeColors[ev.type]
                          }`}
                        >
                          {ev.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="xl:col-span-4">
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
              Upcoming Events
            </h3>
            <div className="space-y-3">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 p-3 dark:border-white/5"
                >
                  <div
                    className={`mt-0.5 flex size-8 flex-shrink-0 items-center justify-center rounded-lg ${
                      eventTypeColors[ev.type]
                    }`}
                  >
                    <Clock className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                      {ev.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {ev.time} · {ev.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Create Event Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="mx-4 w-full max-w-md p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Create Event
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent((p) => ({ ...p, title: e.target.value }))
                  }
                  className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  placeholder="Event title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date
                  </label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) =>
                      setNewEvent((p) => ({ ...p, date: e.target.value }))
                    }
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Time
                  </label>
                  <input
                    type="time"
                    value={newEvent.time}
                    onChange={(e) =>
                      setNewEvent((p) => ({ ...p, time: e.target.value }))
                    }
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Type
                </label>
                <select
                  value={newEvent.type}
                  onChange={(e) =>
                    setNewEvent((p) => ({
                      ...p,
                      type: e.target.value as 'meeting' | 'review' | 'call',
                    }))
                  }
                  className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                >
                  <option value="meeting">Meeting</option>
                  <option value="review">Review</option>
                  <option value="call">Call</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddEvent}
                  className="flex-1 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
                >
                  Create
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   2. ChatPage
   ═══════════════════════════════════════════════════════ */
const chatMessagesData: Record<
  number,
  { text: string; time: string; sent: boolean }[]
> = {
  1: [
    { text: 'Hey Sarah, did you get the report?', time: '10:00 AM', sent: true },
    { text: "Yes, I'm reviewing it now.", time: '10:02 AM', sent: false },
    { text: 'Great, let me know if you have questions.', time: '10:03 AM', sent: true },
    { text: "Sure, I'll send the report by EOD", time: '10:05 AM', sent: false },
  ],
  2: [
    { text: 'How is the deployment going?', time: '9:30 AM', sent: true },
    { text: 'The deployment is done!', time: '9:45 AM', sent: false },
    { text: 'Awesome, any issues?', time: '9:46 AM', sent: true },
    { text: 'Nope, all smooth 🎉', time: '9:47 AM', sent: false },
  ],
  3: [
    { text: 'Can we schedule a call?', time: '8:00 AM', sent: false },
    { text: 'Sure, when works for you?', time: '8:15 AM', sent: true },
  ],
  4: [
    { text: 'Thanks for the update', time: '7:00 AM', sent: false },
    { text: 'You are welcome!', time: '7:05 AM', sent: true },
  ],
  5: [
    { text: "I've reviewed the PR", time: '6:00 AM', sent: false },
    { text: 'Any changes needed?', time: '6:10 AM', sent: true },
    { text: 'Just minor formatting, approved!', time: '6:15 AM', sent: false },
  ],
};

export function ChatPage() {
  const [selected, setSelected] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [typing, setTyping] = useState(false);
  const [localMessages, setLocalMessages] = useState(chatMessagesData);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const contacts = chatContacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeContact = chatContacts.find((c) => c.id === selected);
  const messages = selected ? localMessages[selected] || [] : [];

  const handleSend = () => {
    if (!message.trim() || !selected) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    setLocalMessages((prev) => ({
      ...prev,
      [selected]: [
        ...(prev[selected] || []),
        { text: message, time: timeStr, sent: true },
      ],
    }));
    setMessage('');

    // Simulate typing indicator then reply
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const replies = [
        'Got it!',
        'Thanks for letting me know.',
        'I will look into this.',
        'Sounds good 👍',
        'Will get back to you shortly.',
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setLocalMessages((prev) => ({
        ...prev,
        [selected!]: [
          ...(prev[selected!] || []),
          { text: reply, time: timeStr, sent: false },
        ],
      }));
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">
          Chat
        </h1>
        <p className="text-theme-sm text-gray-500 dark:text-gray-400">
          Communicate with your team in real-time
        </p>
      </div>

      <Card className="flex h-[600px] overflow-hidden">
        {/* Contact List */}
        <div className="flex w-80 flex-shrink-0 flex-col border-r border-gray-200 dark:border-white/5">
          {/* Search */}
          <div className="border-b border-gray-100 p-4 dark:border-white/5">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search contacts..."
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-white/5 dark:text-white/90"
              />
            </div>
          </div>

          {/* Contact items */}
          <div className="flex-1 overflow-y-auto">
            {contacts.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50 dark:hover:bg-white/5 ${
                  selected === c.id
                    ? 'bg-brand-50 dark:bg-brand-500/10'
                    : ''
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {c.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  {c.online && (
                    <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-success-500 dark:border-gray-dark" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                      {c.name}
                    </span>
                    <span className="flex-shrink-0 text-[10px] text-gray-400">
                      {c.time}
                    </span>
                  </div>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                    {c.message}
                  </p>
                </div>
                {c.unread > 0 && (
                  <span className="flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-[10px] font-semibold text-white">
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">
          {activeContact ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {activeContact.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                      {activeContact.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activeContact.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5">
                    <Phone className="size-4" />
                  </button>
                  <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5">
                    <Video className="size-4" />
                  </button>
                  <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5">
                    <MoreVertical className="size-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg px-4 py-2.5 text-sm ${
                          msg.sent
                            ? 'bg-brand-500 text-white'
                            : 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white/90'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p
                          className={`mt-1 text-[10px] ${
                            msg.sent
                              ? 'text-white/70'
                              : 'text-gray-400 dark:text-gray-500'
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Typing indicator */}
                  {typing && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-1 rounded-lg bg-gray-100 px-4 py-3 dark:bg-white/10">
                        <span className="size-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0ms]" />
                        <span className="size-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
                        <span className="size-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Composer */}
              <div className="border-t border-gray-100 px-6 py-3 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <button className="flex-shrink-0 rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5">
                    <Paperclip className="size-5" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message..."
                    className="h-10 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-white/5 dark:text-white/90"
                  />
                  <button className="flex-shrink-0 rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5">
                    <Smile className="size-5" />
                  </button>
                  <button
                    onClick={handleSend}
                    className="flex-shrink-0 rounded-lg bg-brand-500 p-2 text-white hover:bg-brand-600"
                  >
                    <Send className="size-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-gray-400">
              <div className="text-center">
                <MessageSquare className="mx-auto size-12 text-gray-300 dark:text-gray-600" />
                <p className="mt-3 text-sm">Select a contact to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   3. EmailPage
   ═══════════════════════════════════════════════════════ */
export function EmailPage() {
  const [activeFolder, setActiveFolder] = useState('Inbox');
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [showCompose, setShowCompose] = useState(false);
  const [composeData, setComposeData] = useState({
    to: '',
    subject: '',
    body: '',
  });
  const [starredEmails, setStarredEmails] = useState<Set<number>>(() => {
    const set = new Set<number>();
    emailData.emails.forEach((e) => {
      if (e.starred) set.add(e.id);
    });
    return set;
  });
  const [readEmails, setReadEmails] = useState<Set<number>>(() => {
    const set = new Set<number>();
    emailData.emails.forEach((e) => {
      if (e.read) set.add(e.id);
    });
    return set;
  });

  const emails = emailData.emails;
  const activeEmail = emails.find((e) => e.id === selectedEmail);

  const toggleStar = (id: number) => {
    setStarredEmails((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectEmail = (id: number) => {
    setSelectedEmail(id);
    setReadEmails((prev) => new Set(prev).add(id));
  };

  const handleSend = () => {
    setComposeData({ to: '', subject: '', body: '' });
    setShowCompose(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            Email
          </h1>
          <p className="text-theme-sm text-gray-500 dark:text-gray-400">
            Manage your inbox and messages
          </p>
        </div>
        <button
          onClick={() => setShowCompose(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
        >
          <Plus className="size-4" /> Compose
        </button>
      </div>

      <Card className="flex h-[600px] overflow-hidden">
        {/* Folders Sidebar */}
        <div className="flex w-64 flex-shrink-0 flex-col border-r border-gray-200 dark:border-white/5">
          <div className="border-b border-gray-100 p-4 dark:border-white/5">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">
              Folders
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {emailData.folders.map((f) => (
              <button
                key={f.name}
                onClick={() => setActiveFolder(f.name)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  activeFolder === f.name
                    ? 'bg-brand-50 font-medium text-brand-500 dark:bg-brand-500/10'
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Folder className="size-4" />
                  {f.name}
                </span>
                {f.count > 0 && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      activeFolder === f.name
                        ? 'bg-brand-500 text-white'
                        : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'
                    }`}
                  >
                    {f.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Email List */}
        <div className="flex w-96 flex-shrink-0 flex-col border-r border-gray-200 dark:border-white/5">
          <div className="border-b border-gray-100 p-4 dark:border-white/5">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search emails..."
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-white/5 dark:text-white/90"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {emails.map((email) => (
              <button
                key={email.id}
                onClick={() => selectEmail(email.id)}
                className={`flex w-full flex-col gap-1 border-b border-gray-50 px-4 py-3 text-left transition-colors hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/5 ${
                  selectedEmail === email.id
                    ? 'bg-brand-50 dark:bg-brand-500/10'
                    : ''
                } ${
                  !readEmails.has(email.id)
                    ? 'bg-brand-25/30 dark:bg-brand-500/5'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm ${
                      !readEmails.has(email.id)
                        ? 'font-semibold text-gray-800 dark:text-white/90'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {email.from}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400">
                      {email.time}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStar(email.id);
                      }}
                      className="text-gray-300 hover:text-warning-500 dark:text-gray-600"
                    >
                      <Star
                        className={`size-4 ${
                          starredEmails.has(email.id)
                            ? 'fill-warning-500 text-warning-500'
                            : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <p
                  className={`truncate text-sm ${
                    !readEmails.has(email.id)
                      ? 'font-semibold text-gray-800 dark:text-white/90'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {email.subject}
                </p>
                <p className="truncate text-xs text-gray-400 dark:text-gray-500">
                  {email.preview}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Email Detail */}
        <div className="flex flex-1 flex-col">
          {activeEmail ? (
            <>
              <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                  {activeEmail.subject}
                </h2>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-500 dark:bg-brand-500/20">
                    {activeEmail.from
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {activeEmail.from}
                    </p>
                    <p className="text-xs text-gray-400">{activeEmail.time}</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
                  <p>Hi team,</p>
                  <p>{activeEmail.preview}</p>
                  <p>
                    Please review the attached documents and let me know if you
                    have any questions or concerns. We need to finalize this by
                    end of the week.
                  </p>
                  <p>
                    Looking forward to your feedback and suggestions on how we
                    can improve the current workflow.
                  </p>
                  <p className="mt-4">
                    Best regards,
                    <br />
                    {activeEmail.from}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-gray-100 px-6 py-3 dark:border-white/5">
                <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5">
                  Reply
                </button>
                <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5">
                  Forward
                </button>
                <div className="flex-1" />
                <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5">
                  <Archive className="size-4" />
                </button>
                <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5">
                  <Trash2 className="size-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-gray-400">
              <div className="text-center">
                <FileText className="mx-auto size-12 text-gray-300 dark:text-gray-600" />
                <p className="mt-3 text-sm">Select an email to read</p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Compose Modal */}
      {showCompose && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center">
          <Card className="mx-4 mb-4 w-full max-w-lg p-6 sm:mb-0">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                New Message
              </h3>
              <button
                onClick={() => setShowCompose(false)}
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  To
                </label>
                <input
                  type="email"
                  value={composeData.to}
                  onChange={(e) =>
                    setComposeData((p) => ({ ...p, to: e.target.value }))
                  }
                  className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  placeholder="recipient@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  value={composeData.subject}
                  onChange={(e) =>
                    setComposeData((p) => ({ ...p, subject: e.target.value }))
                  }
                  className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Body
                </label>
                <textarea
                  value={composeData.body}
                  onChange={(e) =>
                    setComposeData((p) => ({ ...p, body: e.target.value }))
                  }
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  placeholder="Write your message..."
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowCompose(false)}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  Discard
                </button>
                <button
                  onClick={handleSend}
                  className="flex-1 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
                >
                  Send
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   4. TasksPage
   ═══════════════════════════════════════════════════════ */
export function TasksPage() {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    priority: 'medium' as 'high' | 'medium' | 'low',
    assignee: '',
    due: '',
    tags: '',
  });
  const [columns, setColumns] = useState(taskData.columns);

  const priorityColors: Record<string, string> = {
    high: 'bg-error-50 text-error-500 dark:bg-error-500/10',
    medium: 'bg-warning-50 text-warning-500 dark:bg-warning-500/10',
    low: 'bg-success-50 text-success-500 dark:bg-success-500/10',
  };

  const handleAddTask = () => {
    if (!newTask.title) return;
    const updatedColumns = columns.map((col) => {
      if (col.id === 'todo') {
        return {
          ...col,
          tasks: [
            ...col.tasks,
            {
              id: Date.now(),
              title: newTask.title,
              priority: newTask.priority,
              assignee: newTask.assignee || 'Unassigned',
              due: newTask.due || 'TBD',
              tags: newTask.tags ? newTask.tags.split(',').map((t) => t.trim()) : ['New'],
            },
          ],
        };
      }
      return col;
    });
    setColumns(updatedColumns);
    setNewTask({ title: '', priority: 'medium', assignee: '', due: '', tags: '' });
    setShowAddTask(false);
  };

  const moveTask = (taskId: number, fromColId: string, toColId: string) => {
    const fromCol = columns.find((c) => c.id === fromColId);
    const task = fromCol?.tasks.find((t) => t.id === taskId);
    if (!task) return;
    setColumns((prev) =>
      prev.map((col) => {
        if (col.id === fromColId) {
          return { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) };
        }
        if (col.id === toColId) {
          return { ...col, tasks: [...col.tasks, task] };
        }
        return col;
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            Tasks
          </h1>
          <p className="text-theme-sm text-gray-500 dark:text-gray-400">
            Manage and track your project tasks
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* View toggle */}
          <div className="flex rounded-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setViewMode('kanban')}
              className={`flex items-center gap-1.5 rounded-l-lg px-3 py-2 text-sm ${
                viewMode === 'kanban'
                  ? 'bg-brand-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/5'
              }`}
            >
              <Columns3 className="size-4" /> Kanban
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 rounded-r-lg px-3 py-2 text-sm ${
                viewMode === 'list'
                  ? 'bg-brand-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/5'
              }`}
            >
              <List className="size-4" /> List
            </button>
          </div>
          <button
            onClick={() => setShowAddTask(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
          >
            <Plus className="size-4" /> Add Task
          </button>
        </div>
      </div>

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.id}>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                  {col.title}
                  <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-white/10 dark:text-gray-400">
                    {col.tasks.length}
                  </span>
                </h3>
              </div>
              <div className="space-y-3">
                {col.tasks.map((task) => (
                  <Card key={task.id} className="p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {task.title}
                      </h4>
                      <span
                        className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${priorityColors[task.priority]}`}
                      >
                        {task.priority}
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap gap-1">
                      {task.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-white/10 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex size-6 items-center justify-center rounded-full bg-brand-100 text-[10px] font-semibold text-brand-500 dark:bg-brand-500/20">
                          {task.assignee
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {task.assignee}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">{task.due}</span>
                    </div>
                    {/* Move buttons */}
                    <div className="mt-2 flex gap-1 border-t border-gray-100 pt-2 dark:border-white/5">
                      {col.id !== 'todo' && (
                        <button
                          onClick={() =>
                            moveTask(
                              task.id,
                              col.id,
                              col.id === 'in-progress' ? 'todo' : 'in-progress'
                            )
                          }
                          className="rounded px-2 py-1 text-[10px] text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5"
                        >
                          ← Move Back
                        </button>
                      )}
                      {col.id !== 'done' && (
                        <button
                          onClick={() =>
                            moveTask(
                              task.id,
                              col.id,
                              col.id === 'todo' ? 'in-progress' : 'done'
                            )
                          }
                          className="rounded px-2 py-1 text-[10px] text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
                        >
                          Move Forward →
                        </button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/5">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                    Task
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                    Assignee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                    Due
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {columns.flatMap((col) =>
                  col.tasks.map((task) => (
                    <tr
                      key={task.id}
                      className="hover:bg-gray-50 dark:hover:bg-white/5"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-white/90">
                        {task.title}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                            col.id === 'todo'
                              ? 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'
                              : col.id === 'in-progress'
                                ? 'bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/10'
                                : 'bg-success-50 text-success-500 dark:bg-success-500/10'
                          }`}
                        >
                          {col.title}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${priorityColors[task.priority]}`}
                        >
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {task.assignee}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {task.due}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Add Task Modal */}
      {showAddTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="mx-4 w-full max-w-md p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Add Task
              </h3>
              <button
                onClick={() => setShowAddTask(false)}
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask((p) => ({ ...p, title: e.target.value }))
                  }
                  className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  placeholder="Task title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Priority
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) =>
                      setNewTask((p) => ({
                        ...p,
                        priority: e.target.value as 'high' | 'medium' | 'low',
                      }))
                    }
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Due Date
                  </label>
                  <input
                    type="text"
                    value={newTask.due}
                    onChange={(e) =>
                      setNewTask((p) => ({ ...p, due: e.target.value }))
                    }
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                    placeholder="e.g. Jan 20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Assignee
                  </label>
                  <input
                    type="text"
                    value={newTask.assignee}
                    onChange={(e) =>
                      setNewTask((p) => ({ ...p, assignee: e.target.value }))
                    }
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                    placeholder="Assignee name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tags
                  </label>
                  <input
                    type="text"
                    value={newTask.tags}
                    onChange={(e) =>
                      setNewTask((p) => ({ ...p, tags: e.target.value }))
                    }
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                    placeholder="Design, Dev"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowAddTask(false)}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTask}
                  className="flex-1 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
                >
                  Add Task
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   5. FileManagerPage
   ═══════════════════════════════════════════════════════ */
const fileFolders = [
  { name: 'Documents', items: 24, icon: Folder },
  { name: 'Images', items: 156, icon: ImageIcon },
  { name: 'Spreadsheets', items: 18, icon: FileSpreadsheet },
  { name: 'Presentations', items: 12, icon: FileText },
];

const fileItems = [
  { name: 'Q4_Report.pdf', type: 'pdf', size: '2.4 MB', date: 'Jan 15, 2024' },
  { name: 'Design_System.fig', type: 'design', size: '18.7 MB', date: 'Jan 14, 2024' },
  { name: 'Budget_2024.xlsx', type: 'spreadsheet', size: '1.2 MB', date: 'Jan 13, 2024' },
  { name: 'Team_Photo.jpg', type: 'image', size: '4.8 MB', date: 'Jan 12, 2024' },
  { name: 'Project_Proposal.docx', type: 'document', size: '856 KB', date: 'Jan 11, 2024' },
  { name: 'Presentation.pptx', type: 'presentation', size: '5.2 MB', date: 'Jan 10, 2024' },
  { name: 'Invoice_Template.pdf', type: 'pdf', size: '320 KB', date: 'Jan 9, 2024' },
  { name: 'Screenshot_01.png', type: 'image', size: '1.1 MB', date: 'Jan 8, 2024' },
];

const fileTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  pdf: FileText,
  design: FileImage,
  spreadsheet: FileSpreadsheet,
  image: FileImage,
  document: FileType,
  presentation: FileText,
};

const fileTypeColors: Record<string, string> = {
  pdf: 'bg-error-50 text-error-500 dark:bg-error-500/10',
  design: 'bg-brand-50 text-brand-500 dark:bg-brand-500/10',
  spreadsheet: 'bg-success-50 text-success-500 dark:bg-success-500/10',
  image: 'bg-warning-50 text-warning-500 dark:bg-warning-500/10',
  document: 'bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/10',
  presentation: 'bg-brand-50 text-brand-500 dark:bg-brand-500/10',
};

export function FileManagerPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filteredFiles = fileItems
    .filter((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'size') return a.size.localeCompare(b.size);
      return a.date.localeCompare(b.date);
    });

  const filteredFolders = fileFolders.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const usedGB = 24.7;
  const totalGB = 50;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            File Manager
          </h1>
          <p className="text-theme-sm text-gray-500 dark:text-gray-400">
            Manage your files and documents
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600">
          <Upload className="size-4" /> Upload File
        </button>
      </div>

      {/* Toolbar */}
      <Card className="p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <Home className="size-4 text-gray-400" />
            <ChevronRight className="size-3 text-gray-300" />
            <span className="text-gray-500">Documents</span>
            <ChevronRight className="size-3 text-gray-300" />
            <span className="font-medium text-gray-800 dark:text-white/90">
              Projects
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search files..."
                className="h-9 w-48 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-white/5 dark:text-white/90"
              />
            </div>

            {/* Sort */}
            <div ref={sortRef} className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex h-9 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
              >
                <Filter className="size-4" />
                Sort
                <ChevronDown className="size-3" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full z-10 mt-1 w-36 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  {['name', 'size', 'date'].map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSortBy(s);
                        setSortOpen(false);
                      }}
                      className={`flex w-full items-center px-3 py-2 text-sm capitalize ${
                        sortBy === s
                          ? 'bg-brand-50 text-brand-500 dark:bg-brand-500/10'
                          : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex rounded-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded-l-lg p-2 ${
                  viewMode === 'grid'
                    ? 'bg-brand-500 text-white'
                    : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <Grid3X3 className="size-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`rounded-r-lg p-2 ${
                  viewMode === 'list'
                    ? 'bg-brand-500 text-white'
                    : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <List className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Folders */}
      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-800 dark:text-white/90">
          Folders
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredFolders.map((folder) => (
            <Card key={folder.name} className="p-4 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                  <folder.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {folder.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {folder.items} items
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Files */}
      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-800 dark:text-white/90">
          Files
        </h2>
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filteredFiles.map((file) => {
              const Icon = fileTypeIcons[file.type] || File;
              return (
                <Card
                  key={file.name}
                  className="p-4 transition-shadow hover:shadow-md"
                >
                  <div
                    className={`mb-3 flex size-12 items-center justify-center rounded-lg ${fileTypeColors[file.type]}`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <p className="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                    {file.name}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{file.size}</span>
                    <span className="text-xs text-gray-400">{file.date}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/5">
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                  {filteredFiles.map((file) => {
                    const Icon = fileTypeIcons[file.type] || File;
                    return (
                      <tr
                        key={file.name}
                        className="hover:bg-gray-50 dark:hover:bg-white/5"
                      >
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex size-8 items-center justify-center rounded-lg ${fileTypeColors[file.type]}`}
                            >
                              <Icon className="size-4" />
                            </div>
                            <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                              {file.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">
                          {file.size}
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-400">
                          {file.date}
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-2">
                            <button className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5">
                              <ArrowUpRight className="size-4" />
                            </button>
                            <button className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5">
                              <Edit3 className="size-4" />
                            </button>
                            <button className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-error-500 dark:hover:bg-white/5">
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>

      {/* Storage Usage */}
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <HardDrive className="size-5 text-gray-400" />
          <div className="flex-1">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                Storage Usage
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {usedGB} GB of {totalGB} GB used
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-brand-500"
                style={{ width: `${(usedGB / totalGB) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   6. SupportPage
   ═══════════════════════════════════════════════════════ */
const ticketConversations: Record<
  string,
  { sender: string; message: string; time: string; isAgent: boolean }[]
> = {
  'TKT-001': [
    { sender: 'John Smith', message: 'I cannot login to my account. It says invalid credentials.', time: '2h ago', isAgent: false },
    { sender: 'Support Agent', message: 'Hi John, let me check your account. Can you confirm your email address?', time: '1h 50m ago', isAgent: true },
    { sender: 'John Smith', message: 'My email is john.smith@example.com', time: '1h 45m ago', isAgent: false },
    { sender: 'Support Agent', message: 'I found the issue. Your account was temporarily locked due to multiple failed attempts. I have unlocked it now. Please try logging in again.', time: '1h 30m ago', isAgent: true },
  ],
  'TKT-002': [
    { sender: 'Lisa Brown', message: 'My payment of $49.99 failed but the amount was deducted from my bank.', time: '4h ago', isAgent: false },
    { sender: 'Support Agent', message: 'I am sorry to hear that, Lisa. Let me check the payment records for you.', time: '3h 50m ago', isAgent: true },
  ],
  'TKT-003': [
    { sender: 'Mike Peters', message: 'Would love to see a dark mode option in the app!', time: '1d ago', isAgent: false },
    { sender: 'Support Agent', message: 'Thank you for the suggestion, Mike! I have forwarded this to our product team.', time: '23h ago', isAgent: true },
  ],
  'TKT-004': [
    { sender: 'Emily Chen', message: 'The export to CSV feature is not working. It shows an error every time.', time: '2d ago', isAgent: false },
    { sender: 'Support Agent', message: 'Could you share a screenshot of the error?', time: '2d ago', isAgent: true },
    { sender: 'Emily Chen', message: 'Yes, here is the screenshot. It says "Export failed: timeout".', time: '2d ago', isAgent: false },
    { sender: 'Support Agent', message: 'This is a known issue with large datasets. We have deployed a fix. Please try again.', time: '1d 23h ago', isAgent: true },
    { sender: 'Emily Chen', message: 'It works now! Thank you!', time: '1d 22h ago', isAgent: false },
  ],
  'TKT-005': [
    { sender: 'David Wilson', message: 'The dashboard takes 30+ seconds to load. This started happening yesterday.', time: '3d ago', isAgent: false },
    { sender: 'Support Agent', message: 'We are investigating a performance issue on our servers. I will keep you updated.', time: '3d ago', isAgent: true },
  ],
};

const ticketNotes: Record<string, { text: string; author: string; time: string }[]> = {
  'TKT-001': [{ text: 'Account was locked due to brute force protection. Unlocked manually.', author: 'Agent Sarah', time: '1h 30m ago' }],
  'TKT-002': [{ text: 'Payment gateway returned error 502. Escalated to finance team.', author: 'Agent Mike', time: '3h ago' }],
  'TKT-003': [{ text: 'Feature request added to backlog. Priority: Low.', author: 'Agent Emily', time: '23h ago' }],
  'TKT-004': [{ text: 'Root cause: query timeout on large datasets. Fixed with pagination.', author: 'Agent David', time: '1d 23h ago' }],
  'TKT-005': [{ text: 'Server load spike due to database migration. Monitoring.', author: 'Agent Lisa', time: '2d ago' }],
};

export function SupportPage() {
  const [filter, setFilter] = useState<'all' | 'open' | 'in-progress' | 'resolved'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [noteText, setNoteText] = useState('');
  const [showNotes, setShowNotes] = useState(false);

  const filteredTickets = supportData.tickets.filter((t) => {
    const matchesFilter = filter === 'all' || t.status === filter;
    const matchesSearch =
      t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeTicket = supportData.tickets.find((t) => t.id === selectedTicket);

  const priorityColors: Record<string, string> = {
    high: 'bg-error-50 text-error-500 dark:bg-error-500/10',
    medium: 'bg-warning-50 text-warning-500 dark:bg-warning-500/10',
    low: 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400',
  };

  const statusColors: Record<string, string> = {
    open: 'bg-warning-50 text-warning-500 dark:bg-warning-500/10',
    'in-progress': 'bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/10',
    resolved: 'bg-success-50 text-success-500 dark:bg-success-500/10',
    closed: 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400',
  };

  const statusLabels: Record<string, string> = {
    open: 'Open',
    'in-progress': 'In Progress',
    resolved: 'Resolved',
    closed: 'Closed',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            Support
          </h1>
          <p className="text-theme-sm text-gray-500 dark:text-gray-400">
            Manage customer support tickets
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <Card className="p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1">
            {(['all', 'open', 'in-progress', 'resolved'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3 py-2 text-sm capitalize transition-colors ${
                  filter === f
                    ? 'bg-brand-500 font-medium text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5'
                }`}
              >
                {f === 'all' ? 'All' : statusLabels[f] || f}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tickets..."
              className="h-10 w-64 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-white/5 dark:text-white/90"
            />
          </div>
        </div>
      </Card>

      {/* Ticket List */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/5">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {filteredTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  <td className="px-6 py-4 text-sm font-medium text-brand-500">
                    {ticket.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-white/90">
                    {ticket.subject}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {ticket.customer}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium capitalize ${priorityColors[ticket.priority]}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColors[ticket.status]}`}
                    >
                      {statusLabels[ticket.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {ticket.date}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedTicket(ticket.id)}
                      className="rounded-lg px-3 py-1.5 text-xs font-medium text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Ticket Detail Drawer */}
      {selectedTicket && activeTicket && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setSelectedTicket(null);
              setShowNotes(false);
            }}
          />
          <div className="flex w-full max-w-lg flex-col bg-white shadow-xl dark:bg-gray-dark">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                  {activeTicket.id}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activeTicket.subject}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedTicket(null);
                  setShowNotes(false);
                }}
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Ticket Info */}
            <div className="border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <User className="size-4 text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {activeTicket.customer}
                  </span>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium capitalize ${priorityColors[activeTicket.priority]}`}
                >
                  {activeTicket.priority}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColors[activeTicket.status]}`}
                >
                  {statusLabels[activeTicket.status]}
                </span>
                <span className="text-xs text-gray-400">
                  {activeTicket.date}
                </span>
              </div>
            </div>

            {/* Conversation */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <h4 className="mb-3 text-sm font-semibold text-gray-800 dark:text-white/90">
                Conversation
              </h4>
              <div className="space-y-4">
                {(ticketConversations[activeTicket.id] || []).map(
                  (msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.isAgent ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg px-4 py-3 ${
                          msg.isAgent
                            ? 'bg-brand-50 dark:bg-brand-500/10'
                            : 'bg-gray-50 dark:bg-white/5'
                        }`}
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-800 dark:text-white/90">
                            {msg.sender}
                          </span>
                          {msg.isAgent && (
                            <span className="rounded bg-brand-500 px-1 py-0.5 text-[8px] font-medium text-white">
                              AGENT
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {msg.message}
                        </p>
                        <p className="mt-1 text-[10px] text-gray-400">
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Internal Notes */}
              {showNotes && (
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold text-gray-800 dark:text-white/90">
                    Internal Notes
                  </h4>
                  {(ticketNotes[activeTicket.id] || []).map((note, i) => (
                    <div
                      key={i}
                      className="mb-3 rounded-lg border border-dashed border-warning-300 bg-warning-50/50 p-3 dark:border-warning-500/30 dark:bg-warning-500/5"
                    >
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {note.text}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-[10px] text-gray-400">
                        <span>{note.author}</span>
                        <span>·</span>
                        <span>{note.time}</span>
                      </div>
                    </div>
                  ))}
                  {/* Add Note */}
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      placeholder="Add internal note..."
                      className="h-9 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-white/5 dark:text-white/90"
                    />
                    <button
                      onClick={() => {
                        if (noteText.trim()) setNoteText('');
                      }}
                      className="rounded-lg bg-warning-500 px-3 py-2 text-xs font-medium text-white hover:bg-warning-600"
                    >
                      Add Note
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Reply Area */}
            <div className="border-t border-gray-100 px-6 py-4 dark:border-white/5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className={`rounded-lg px-3 py-2 text-xs font-medium ${
                    showNotes
                      ? 'bg-warning-50 text-warning-500 dark:bg-warning-500/10'
                      : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  <Edit3 className="inline size-3 mr-1" />
                  Notes
                </button>
                <div className="flex-1" />
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && replyText.trim()) {
                      setReplyText('');
                    }
                  }}
                  placeholder="Type your reply..."
                  className="h-10 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-white/5 dark:text-white/90"
                />
                <button
                  onClick={() => {
                    if (replyText.trim()) setReplyText('');
                  }}
                  className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
                >
                  <Send className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Shared mock data for all dashboards

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// E-commerce Dashboard
export const ecommerceData = {
  salesCards: [
    { title: 'Total Sales', value: '$45,231', change: '+20.9%', trend: 'up' as const, icon: 'dollar-sign' },
    { title: 'Total Orders', value: '2,345', change: '+15.2%', trend: 'up' as const, icon: 'shopping-cart' },
    { title: 'Total Customers', value: '1,243', change: '+8.4%', trend: 'up' as const, icon: 'users' },
    { title: 'Conversion Rate', value: '3.24%', change: '-0.4%', trend: 'down' as const, icon: 'trending-up' },
  ],
  revenueChart: months.map((m, i) => ({ month: m, revenue: 2800 + Math.random() * 2000, orders: 120 + Math.random() * 80 })),
  recentOrders: [
    { id: 'ORD-7892', customer: 'Sarah Johnson', product: 'MacBook Pro 14"', amount: '$1,999', status: 'Delivered' as const, date: '2024-01-15' },
    { id: 'ORD-7891', customer: 'Mike Peters', product: 'iPhone 15 Pro', amount: '$999', status: 'Processing' as const, date: '2024-01-15' },
    { id: 'ORD-7890', customer: 'Emily Chen', product: 'AirPods Pro', amount: '$249', status: 'Shipped' as const, date: '2024-01-14' },
    { id: 'ORD-7889', customer: 'David Wilson', product: 'iPad Air', amount: '$599', status: 'Delivered' as const, date: '2024-01-14' },
    { id: 'ORD-7888', customer: 'Lisa Brown', product: 'Apple Watch', amount: '$399', status: 'Cancelled' as const, date: '2024-01-13' },
    { id: 'ORD-7887', customer: 'James Taylor', product: 'Samsung S24', amount: '$899', status: 'Processing' as const, date: '2024-01-13' },
  ],
  topProducts: [
    { name: 'MacBook Pro 14"', sales: 432, revenue: '$863,568', growth: '+12%' },
    { name: 'iPhone 15 Pro', sales: 891, revenue: '$890,109', growth: '+24%' },
    { name: 'AirPods Pro', sales: 1243, revenue: '$309,507', growth: '+8%' },
    { name: 'iPad Air', sales: 567, revenue: '$339,633', growth: '+15%' },
  ],
  trafficSources: [
    { source: 'Direct', percentage: 35, visits: 12500 },
    { source: 'Organic Search', percentage: 28, visits: 10000 },
    { source: 'Social Media', percentage: 20, visits: 7140 },
    { source: 'Referral', percentage: 12, visits: 4280 },
    { source: 'Email', percentage: 5, visits: 1785 },
  ],
};

// Analytics Dashboard
export const analyticsData = {
  metricCards: [
    { title: 'Total Visitors', value: '284,532', change: '+12.5%', trend: 'up' as const },
    { title: 'Avg. Session Duration', value: '4m 32s', change: '+8.2%', trend: 'up' as const },
    { title: 'Bounce Rate', value: '34.2%', change: '-2.4%', trend: 'down' as const },
    { title: 'Page Views', value: '1.2M', change: '+18.7%', trend: 'up' as const },
  ],
  trafficOverview: months.map((m) => ({ month: m, visitors: 18000 + Math.random() * 12000, sessions: 24000 + Math.random() * 16000 })),
  deviceBreakdown: [
    { device: 'Desktop', percentage: 58, color: '#465fff' },
    { device: 'Mobile', percentage: 34, color: '#12b76a' },
    { device: 'Tablet', percentage: 8, color: '#f79009' },
  ],
  acquisitionChannels: [
    { channel: 'Organic Search', visitors: 84200, percentage: 35 },
    { channel: 'Direct', visitors: 56800, percentage: 24 },
    { channel: 'Social Media', visitors: 45200, percentage: 19 },
    { channel: 'Paid Search', visitors: 28600, percentage: 12 },
    { channel: 'Referral', visitors: 19200, percentage: 8 },
    { channel: 'Email', visitors: 5500, percentage: 2 },
  ],
  topPages: [
    { page: '/home', views: 45200, unique: 32000, bounce: '32%' },
    { page: '/products', views: 28300, unique: 21400, bounce: '28%' },
    { page: '/blog', views: 19700, unique: 15600, bounce: '41%' },
    { page: '/pricing', views: 12800, unique: 10200, bounce: '35%' },
    { page: '/contact', views: 8400, unique: 6900, bounce: '52%' },
  ],
};

// Marketing Dashboard
export const marketingData = {
  metricCards: [
    { title: 'Total Ad Spend', value: '$24,780', change: '+5.3%', trend: 'up' as const },
    { title: 'ROAS', value: '4.2x', change: '+0.8x', trend: 'up' as const },
    { title: 'Leads Generated', value: '1,847', change: '+22.1%', trend: 'up' as const },
    { title: 'Cost Per Lead', value: '$13.41', change: '-8.2%', trend: 'down' as const },
  ],
  campaignPerformance: months.map((m) => ({
    month: m,
    impressions: 120000 + Math.random() * 80000,
    clicks: 8000 + Math.random() * 4000,
    conversions: 200 + Math.random() * 300,
  })),
  channels: [
    { channel: 'Google Ads', spend: 8500, leads: 680, cpl: 12.5 },
    { channel: 'Facebook Ads', spend: 5200, leads: 410, cpl: 12.68 },
    { channel: 'LinkedIn Ads', spend: 4800, leads: 290, cpl: 16.55 },
    { channel: 'Twitter Ads', spend: 3200, leads: 245, cpl: 13.06 },
    { channel: 'Email', spend: 1800, leads: 180, cpl: 10.0 },
    { channel: 'Content', spend: 1280, leads: 42, cpl: 30.48 },
  ],
  emailMetrics: {
    sent: 24500,
    opened: 12250,
    clicked: 4900,
    bounced: 735,
    openRate: '50%',
    clickRate: '20%',
  },
};

// CRM Dashboard
export const crmData = {
  metricCards: [
    { title: 'Total Leads', value: '3,482', change: '+14.2%', trend: 'up' as const },
    { title: 'Active Deals', value: '847', change: '+8.7%', trend: 'up' as const },
    { title: 'Closed Won', value: '$2.4M', change: '+21.3%', trend: 'up' as const },
    { title: 'Avg. Deal Size', value: '$18,450', change: '+3.2%', trend: 'up' as const },
  ],
  pipelineStages: [
    { stage: 'Prospecting', count: 245, value: '$2.1M' },
    { stage: 'Qualification', count: 189, value: '$3.2M' },
    { stage: 'Proposal', count: 134, value: '$2.8M' },
    { stage: 'Negotiation', count: 87, value: '$1.9M' },
    { stage: 'Closed Won', count: 62, value: '$1.4M' },
  ],
  salesReps: [
    { name: 'Alex Morgan', deals: 24, revenue: '$432K', quota: '87%' },
    { name: 'Sarah Chen', deals: 31, revenue: '$567K', quota: '94%' },
    { name: 'Mike Johnson', deals: 18, revenue: '$298K', quota: '72%' },
    { name: 'Emily Davis', deals: 27, revenue: '$489K', quota: '91%' },
  ],
  recentActivities: [
    { action: 'Deal moved to Negotiation', contact: 'Acme Corp', time: '5 min ago' },
    { action: 'New lead created', contact: 'TechStart Inc', time: '12 min ago' },
    { action: 'Meeting scheduled', contact: 'Global Solutions', time: '1 hr ago' },
    { action: 'Proposal sent', contact: 'DataFlow Ltd', time: '2 hrs ago' },
    { action: 'Deal closed won', contact: 'CloudBase Inc', time: '3 hrs ago' },
  ],
};

// Stocks Dashboard
export const stocksData = {
  metricCards: [
    { title: 'Portfolio Value', value: '$284,532', change: '+5.2%', trend: 'up' as const },
    { title: 'Today\'s Gain/Loss', value: '+$3,245', change: '+1.14%', trend: 'up' as const },
    { title: 'Total Return', value: '+18.7%', change: '+2.3%', trend: 'up' as const },
    { title: 'Dividend Yield', value: '2.4%', change: '+0.1%', trend: 'up' as const },
  ],
  watchlist: [
    { symbol: 'AAPL', name: 'Apple Inc.', price: '$185.42', change: '+2.34%', trend: 'up' as const },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: '$378.91', change: '+1.87%', trend: 'up' as const },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$141.80', change: '-0.52%', trend: 'down' as const },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$178.25', change: '+3.12%', trend: 'up' as const },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: '$248.42', change: '-1.89%', trend: 'down' as const },
  ],
  holdings: [
    { symbol: 'AAPL', shares: 150, avgCost: '$165.20', currentPrice: '$185.42', value: '$27,813', gain: '+12.2%' },
    { symbol: 'MSFT', shares: 80, avgCost: '$310.50', currentPrice: '$378.91', value: '$30,313', gain: '+22.0%' },
    { symbol: 'GOOGL', shares: 200, avgCost: '$125.30', currentPrice: '$141.80', value: '$28,360', gain: '+13.2%' },
    { symbol: 'AMZN', shares: 120, avgCost: '$142.10', currentPrice: '$178.25', value: '$21,390', gain: '+25.4%' },
  ],
  sectorAllocation: [
    { sector: 'Technology', percentage: 45, color: '#465fff' },
    { sector: 'Healthcare', percentage: 18, color: '#12b76a' },
    { sector: 'Finance', percentage: 15, color: '#f79009' },
    { sector: 'Consumer', percentage: 12, color: '#0ba5ec' },
    { sector: 'Energy', percentage: 10, color: '#f04438' },
  ],
};

// SaaS Dashboard
export const saasData = {
  metricCards: [
    { title: 'Monthly Recurring Revenue', value: '$128,450', change: '+12.3%', trend: 'up' as const },
    { title: 'Annual Run Rate', value: '$1.54M', change: '+12.3%', trend: 'up' as const },
    { title: 'Churn Rate', value: '2.4%', change: '-0.8%', trend: 'down' as const },
    { title: 'Active Users', value: '12,847', change: '+18.2%', trend: 'up' as const },
  ],
  subscriptions: { basic: 4200, pro: 5800, enterprise: 2847 },
  planDistribution: [
    { plan: 'Basic', users: 4200, revenue: '$33,600', percentage: 33 },
    { plan: 'Pro', users: 5800, revenue: '$57,800', percentage: 45 },
    { plan: 'Enterprise', users: 2847, revenue: '$37,050', percentage: 22 },
  ],
  featureUsage: [
    { feature: 'Dashboard', usage: 95 },
    { feature: 'Analytics', usage: 78 },
    { feature: 'Reports', usage: 62 },
    { feature: 'API Access', usage: 45 },
    { feature: 'Custom Integrations', usage: 32 },
    { feature: 'White Label', usage: 18 },
  ],
  growth: months.map((m) => ({ month: m, mrr: 80000 + Math.random() * 50000, users: 8000 + Math.random() * 5000 })),
};

// Logistics Dashboard
export const logisticsData = {
  metricCards: [
    { title: 'Active Shipments', value: '1,284', change: '+8.4%', trend: 'up' as const },
    { title: 'Delivered Today', value: '347', change: '+12.1%', trend: 'up' as const },
    { title: 'Delayed Orders', value: '23', change: '-15.2%', trend: 'down' as const },
    { title: 'Avg. Delivery Time', value: '2.4 days', change: '-0.3', trend: 'down' as const },
  ],
  fleetStatus: [
    { vehicle: 'Truck #101', status: 'In Transit' as const, route: 'NYC → Boston', eta: '2h 30m' },
    { vehicle: 'Truck #102', status: 'Loading' as const, route: 'LA → SF', eta: '-' },
    { vehicle: 'Truck #103', status: 'Delivered' as const, route: 'Chicago → Detroit', eta: 'Done' },
    { vehicle: 'Truck #104', status: 'Maintenance' as const, route: '-', eta: '-' },
  ],
  carrierPerformance: [
    { carrier: 'FedEx', onTime: '96.2%', deliveries: 1240, rating: 4.8 },
    { carrier: 'UPS', onTime: '94.8%', deliveries: 980, rating: 4.6 },
    { carrier: 'DHL', onTime: '92.1%', deliveries: 760, rating: 4.4 },
    { carrier: 'USPS', onTime: '89.5%', deliveries: 1520, rating: 4.2 },
  ],
};

// AI Dashboard
export const aiData = {
  metricCards: [
    { title: 'Token Usage', value: '2.4M', change: '+34.2%', trend: 'up' as const },
    { title: 'API Requests', value: '142,500', change: '+22.8%', trend: 'up' as const },
    { title: 'Avg. Response Time', value: '1.2s', change: '-0.3s', trend: 'down' as const },
    { title: 'Revenue', value: '$48,250', change: '+28.4%', trend: 'up' as const },
  ],
  modelUsage: [
    { model: 'GPT-4', requests: 52000, tokens: 980000 },
    { model: 'GPT-3.5', requests: 45000, tokens: 720000 },
    { model: 'Claude', requests: 28000, tokens: 450000 },
    { model: 'DALL-E 3', requests: 12500, tokens: 150000 },
    { model: 'Whisper', requests: 5000, tokens: 100000 },
  ],
  promptHistory: [
    { id: 1, prompt: 'Generate marketing copy for SaaS product', model: 'GPT-4', tokens: 1240, time: '2.3s', date: '2 min ago' },
    { id: 2, prompt: 'Analyze customer sentiment data', model: 'GPT-4', tokens: 890, time: '1.8s', date: '8 min ago' },
    { id: 3, prompt: 'Create product description for headphones', model: 'GPT-3.5', tokens: 450, time: '0.9s', date: '15 min ago' },
    { id: 4, prompt: 'Generate Python REST API code', model: 'GPT-4', tokens: 2100, time: '3.1s', date: '22 min ago' },
    { id: 5, prompt: 'Summarize quarterly report', model: 'Claude', tokens: 670, time: '1.5s', date: '35 min ago' },
  ],
};

// Sales Dashboard
export const salesData = {
  metricCards: [
    { title: 'Total Sales', value: '$842,530', change: '+16.8%', trend: 'up' as const },
    { title: 'Avg. Deal Size', value: '$24,500', change: '+8.2%', trend: 'up' as const },
    { title: 'Win Rate', value: '34.2%', change: '+2.1%', trend: 'up' as const },
    { title: 'Sales Cycle', value: '28 days', change: '-3 days', trend: 'down' as const },
  ],
  regionalSales: [
    { region: 'North America', revenue: '$342,000', deals: 145, growth: '+14%' },
    { region: 'Europe', revenue: '$268,000', deals: 98, growth: '+22%' },
    { region: 'Asia Pacific', revenue: '$145,000', deals: 67, growth: '+31%' },
    { region: 'Latin America', revenue: '$87,530', deals: 42, growth: '+8%' },
  ],
  topReps: [
    { name: 'Alex Morgan', deals: 24, revenue: '$128K', quota: 115 },
    { name: 'Sarah Chen', deals: 31, revenue: '$145K', quota: 128 },
    { name: 'Mike Johnson', deals: 18, revenue: '$89K', quota: 92 },
    { name: 'Emily Davis', deals: 27, revenue: '$134K', quota: 118 },
  ],
  funnel: [
    { stage: 'Leads', count: 2400 },
    { stage: 'Qualified', count: 1800 },
    { stage: 'Proposal', count: 840 },
    { stage: 'Negotiation', count: 420 },
    { stage: 'Closed', count: 252 },
  ],
};

// Finance Dashboard
export const financeData = {
  metricCards: [
    { title: 'Total Income', value: '$128,450', change: '+12.3%', trend: 'up' as const },
    { title: 'Total Expenses', value: '$84,200', change: '+5.1%', trend: 'up' as const },
    { title: 'Net Profit', value: '$44,250', change: '+22.4%', trend: 'up' as const },
    { title: 'Cash Balance', value: '$542,800', change: '+8.7%', trend: 'up' as const },
  ],
  cashflow: months.map((m) => ({
    month: m,
    income: 9000 + Math.random() * 5000,
    expenses: 6000 + Math.random() * 3000,
  })),
  budgetCategories: [
    { category: 'Marketing', budget: 25000, spent: 18500, percentage: 74 },
    { category: 'Operations', budget: 35000, spent: 28200, percentage: 81 },
    { category: 'R&D', budget: 45000, spent: 38700, percentage: 86 },
    { category: 'HR', budget: 30000, spent: 22400, percentage: 75 },
    { category: 'Infrastructure', budget: 20000, spent: 14800, percentage: 74 },
  ],
  recentTransactions: [
    { id: 'TXN-001', description: 'AWS Infrastructure', category: 'Infrastructure', amount: '-$4,250', date: '2024-01-15', type: 'expense' as const },
    { id: 'TXN-002', description: 'Client Payment - Acme', category: 'Income', amount: '+$12,500', date: '2024-01-14', type: 'income' as const },
    { id: 'TXN-003', description: 'Team Lunch', category: 'HR', amount: '-$340', date: '2024-01-14', type: 'expense' as const },
    { id: 'TXN-004', description: 'Google Ads', category: 'Marketing', amount: '-$2,800', date: '2024-01-13', type: 'expense' as const },
    { id: 'TXN-005', description: 'Subscription Revenue', category: 'Income', amount: '+$8,900', date: '2024-01-13', type: 'income' as const },
  ],
};

// Calendar events
export const calendarEvents = [
  { id: 1, title: 'Team Standup', time: '09:00 AM', duration: '30m', type: 'meeting' as const },
  { id: 2, title: 'Product Review', time: '10:30 AM', duration: '1h', type: 'review' as const },
  { id: 3, title: 'Client Call - Acme Corp', time: '01:00 PM', duration: '45m', type: 'call' as const },
  { id: 4, title: 'Sprint Planning', time: '03:00 PM', duration: '1h', type: 'meeting' as const },
  { id: 5, title: 'Design Review', time: '04:30 PM', duration: '30m', type: 'review' as const },
];

// Chat contacts
export const chatContacts = [
  { id: 1, name: 'Sarah Johnson', message: 'Sure, I\'ll send the report by EOD', time: '2m ago', online: true, unread: 2 },
  { id: 2, name: 'Mike Peters', message: 'The deployment is done!', time: '15m ago', online: true, unread: 0 },
  { id: 3, name: 'Emily Chen', message: 'Can we schedule a call?', time: '1h ago', online: false, unread: 1 },
  { id: 4, name: 'David Wilson', message: 'Thanks for the update', time: '2h ago', online: true, unread: 0 },
  { id: 5, name: 'Lisa Brown', message: 'I\'ve reviewed the PR', time: '3h ago', online: false, unread: 0 },
];

// Task data
export const taskData = {
  columns: [
    { id: 'todo', title: 'To Do', tasks: [
      { id: 1, title: 'Update landing page copy', priority: 'medium' as const, assignee: 'Sarah J.', due: 'Jan 18', tags: ['Marketing'] },
      { id: 2, title: 'Fix navigation bug', priority: 'high' as const, assignee: 'Mike P.', due: 'Jan 16', tags: ['Bug'] },
      { id: 3, title: 'Design new icons', priority: 'low' as const, assignee: 'Emily C.', due: 'Jan 20', tags: ['Design'] },
    ]},
    { id: 'in-progress', title: 'In Progress', tasks: [
      { id: 4, title: 'Implement auth flow', priority: 'high' as const, assignee: 'David W.', due: 'Jan 17', tags: ['Dev'] },
      { id: 5, title: 'Write API docs', priority: 'medium' as const, assignee: 'Lisa B.', due: 'Jan 19', tags: ['Docs'] },
    ]},
    { id: 'done', title: 'Done', tasks: [
      { id: 6, title: 'Setup CI/CD pipeline', priority: 'high' as const, assignee: 'Mike P.', due: 'Jan 15', tags: ['DevOps'] },
    ]},
  ],
};

// Email data
export const emailData = {
  folders: [
    { name: 'Inbox', count: 24, active: true },
    { name: 'Starred', count: 5, active: false },
    { name: 'Sent', count: 0, active: false },
    { name: 'Drafts', count: 2, active: false },
    { name: 'Trash', count: 0, active: false },
  ],
  emails: [
    { id: 1, from: 'Alex Morgan', subject: 'Q4 Revenue Report', preview: 'Hi team, please find the Q4 revenue report attached...', time: '10:24 AM', starred: true, read: false },
    { id: 2, from: 'Sarah Chen', subject: 'Design System Updates', preview: 'I\'ve updated the design tokens and added new components...', time: '9:15 AM', starred: false, read: false },
    { id: 3, from: 'DevOps Team', subject: 'Server Maintenance Notice', preview: 'Scheduled maintenance window this Saturday from 2AM-6AM...', time: '8:30 AM', starred: false, read: true },
    { id: 4, from: 'Marketing Team', subject: 'Campaign Launch Plan', preview: 'The new campaign is ready to launch next Monday...', time: 'Yesterday', starred: true, read: true },
    { id: 5, from: 'HR Department', subject: 'Team Building Event', preview: 'Join us for the quarterly team building event...', time: 'Yesterday', starred: false, read: true },
  ],
};

// Support tickets
export const supportData = {
  tickets: [
    { id: 'TKT-001', subject: 'Cannot login to account', customer: 'John Smith', priority: 'high' as const, status: 'open' as const, date: '2h ago' },
    { id: 'TKT-002', subject: 'Payment failed', customer: 'Lisa Brown', priority: 'high' as const, status: 'in-progress' as const, date: '4h ago' },
    { id: 'TKT-003', subject: 'Feature request: Dark mode', customer: 'Mike Peters', priority: 'low' as const, status: 'open' as const, date: '1d ago' },
    { id: 'TKT-004', subject: 'Export not working', customer: 'Emily Chen', priority: 'medium' as const, status: 'resolved' as const, date: '2d ago' },
    { id: 'TKT-005', subject: 'Slow dashboard loading', customer: 'David Wilson', priority: 'medium' as const, status: 'in-progress' as const, date: '3d ago' },
  ],
};

// Products
export const productData = {
  products: [
    { id: 1, name: 'MacBook Pro 14"', category: 'Laptops', price: '$1,999', stock: 156, status: 'In Stock' as const, image: '💻' },
    { id: 2, name: 'iPhone 15 Pro', category: 'Phones', price: '$999', stock: 342, status: 'In Stock' as const, image: '📱' },
    { id: 3, name: 'AirPods Pro', category: 'Audio', price: '$249', stock: 0, status: 'Out of Stock' as const, image: '🎧' },
    { id: 4, name: 'iPad Air', category: 'Tablets', price: '$599', stock: 89, status: 'In Stock' as const, image: '📲' },
    { id: 5, name: 'Apple Watch Ultra', category: 'Wearables', price: '$799', stock: 12, status: 'Low Stock' as const, image: '⌚' },
    { id: 6, name: 'Samsung Galaxy S24', category: 'Phones', price: '$899', stock: 234, status: 'In Stock' as const, image: '📱' },
  ],
  categories: [
    { name: 'Laptops', count: 24, products: 156 },
    { name: 'Phones', count: 18, products: 342 },
    { name: 'Audio', count: 12, products: 89 },
    { name: 'Tablets', count: 8, products: 45 },
    { name: 'Wearables', count: 15, products: 67 },
  ],
};

// Customer data
export const customerData = {
  customers: [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', orders: 12, spent: '$4,580', status: 'Active' as const },
    { id: 2, name: 'Mike Peters', email: 'mike@example.com', orders: 8, spent: '$2,190', status: 'Active' as const },
    { id: 3, name: 'Emily Chen', email: 'emily@example.com', orders: 24, spent: '$8,920', status: 'VIP' as const },
    { id: 4, name: 'David Wilson', email: 'david@example.com', orders: 3, spent: '$890', status: 'Inactive' as const },
    { id: 5, name: 'Lisa Brown', email: 'lisa@example.com', orders: 15, spent: '$5,670', status: 'Active' as const },
  ],
};

// Invoice data
export const invoiceData = {
  invoices: [
    { id: 'INV-001', customer: 'Acme Corp', amount: '$12,500', status: 'Paid' as const, date: '2024-01-15', due: '2024-02-15' },
    { id: 'INV-002', customer: 'TechStart Inc', amount: '$8,200', status: 'Pending' as const, date: '2024-01-12', due: '2024-02-12' },
    { id: 'INV-003', customer: 'Global Solutions', amount: '$24,000', status: 'Overdue' as const, date: '2023-12-15', due: '2024-01-15' },
    { id: 'INV-004', customer: 'DataFlow Ltd', amount: '$5,800', status: 'Paid' as const, date: '2024-01-10', due: '2024-02-10' },
    { id: 'INV-005', customer: 'CloudBase Inc', amount: '$15,300', status: 'Draft' as const, date: '2024-01-14', due: '2024-02-14' },
  ],
};

// Team members
export const teamData = {
  members: [
    { id: 1, name: 'Alex Morgan', role: 'CEO', email: 'alex@mtverse.com', status: 'Active' as const },
    { id: 2, name: 'Sarah Chen', role: 'CTO', email: 'sarah@mtverse.com', status: 'Active' as const },
    { id: 3, name: 'Mike Johnson', role: 'Lead Developer', email: 'mike@mtverse.com', status: 'Active' as const },
    { id: 4, name: 'Emily Davis', role: 'Designer', email: 'emily@mtverse.com', status: 'On Leave' as const },
    { id: 5, name: 'David Wilson', role: 'Marketing', email: 'david@mtverse.com', status: 'Active' as const },
  ],
};

// Pricing plans
export const pricingData = {
  plans: [
    {
      name: 'Basic',
      price: '$49',
      period: '/month',
      description: 'For individuals and small teams',
      features: ['5 Dashboard Variants', 'HTML + Tailwind CSS Bundle', 'Basic Components', 'Community Support', '6 Months Updates'],
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$149',
      period: '/month',
      description: 'For teams and businesses',
      features: ['All 10 Dashboard Variants', 'All 6 Framework Bundles', '500+ Components', 'Priority Support', '12 Months Updates', 'Source Files', 'Figma Design Files', 'Free Customization'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: ['Everything in Premium', 'Custom Branding', 'White Label License', 'Dedicated Support', 'Lifetime Updates', 'Custom Development', 'SLA Guarantee', 'Team Training'],
      highlighted: false,
    },
  ],
};

// Notifications
export const notificationsData = [
  { id: 1, title: 'New order received', message: 'Order #7892 from Sarah Johnson', time: '2 min ago', read: false },
  { id: 2, title: 'Payment processed', message: '$12,500 from Acme Corp', time: '15 min ago', read: false },
  { id: 3, title: 'Server alert', message: 'CPU usage above 85%', time: '1 hr ago', read: true },
  { id: 4, title: 'New user registered', message: 'emily.chen@example.com', time: '2 hrs ago', read: true },
  { id: 5, title: 'Report ready', message: 'Q4 revenue report is ready', time: '3 hrs ago', read: true },
];

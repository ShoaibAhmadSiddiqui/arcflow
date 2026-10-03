export const site = {
  name: 'Arcflow',
  legalName: 'Arcflow Studio',
  email: 'studio@arcflow.co',
  phone: '+31 20 712 3480',
  phoneHref: '+31207123480',
  address: '',
  tagline: 'Websites, custom software, and AI agents for companies that outgrew the spreadsheet.',
};

export const contactConfig = {
  targetEmail: 'studio@arcflow.co',
  web3FormsKey: '',
  formspreeEndpoint: '',
};

export const nav = [
  { label: 'SERVICES', href: '/services' },
  { label: 'WORK', href: '/work' },
  { label: 'STUDIO', href: '/studio' },
];

export const projects = [
  {
    slug: 'yummy-bites',
    client: 'YUMMY BITES',
    sector: 'BAKERY & CONFECTIONERY',
    summary: 'Artisan bakery and dessert platform with online ordering and automated kitchen dispatch.',
    detail:
      'A boutique bakery and gourmet confectionary brand needing a high-converting digital storefront paired with automated kitchen order routing and real-time inventory synchronization.',
    url: 'https://yummybites.pages.dev/',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Artisan croissants and gourmet bakery pastry display',
    metrics: [
      { value: '3.2x', label: 'ONLINE ORDERS' },
      { value: '15 min', label: 'AVG PREP DISPATCH' },
      { value: '99.4%', label: 'SATISFACTION RATE' },
    ],
  },
  {
    slug: 'cafe-de-grace',
    client: 'CAFÉ DE GRACE',
    sector: 'SPECIALTY BISTRO',
    summary: 'Parisian-inspired bistro web experience with table reservations and digital menu curation.',
    detail:
      'An elegant Parisian bistro looking to streamline guest reservations, showcase seasonal chef specials, and deliver a frictionless mobile table booking experience.',
    url: 'https://cafe-de-grace.pages.dev/',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Specialty espresso cup and Parisian bistro table interior',
    metrics: [
      { value: '82%', label: 'ONLINE RESERVATIONS' },
      { value: '4.9/5', label: 'GUEST RATING' },
      { value: '12 min', label: 'SAVED PER TABLE' },
    ],
  },
  {
    slug: 'oxygen-gym',
    client: 'OXYGEN GYM',
    sector: 'FITNESS & ATHLETICS',
    summary: 'High-performance fitness portal with class scheduling, member access, and automated billing.',
    detail:
      'A state-of-the-art strength and conditioning facility requiring a sleek digital hub for instant class bookings, member QR check-ins, and automated trainer schedules.',
    url: 'https://oxygengym.pages.dev/',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern high-performance gym floor and strength training equipment',
    metrics: [
      { value: '1.4k+', label: 'ACTIVE MEMBERS' },
      { value: '99.9%', label: 'PORTAL UPTIME' },
      { value: '24/7', label: 'MEMBER SELF SERVICE' },
    ],
  },
  {
    slug: 'erp-pos',
    client: 'ERP POS PLATFORM',
    sector: 'ENTERPRISE RETAIL',
    summary: 'Cloud-native POS and ERP management system with live multi-store inventory synchronization.',
    detail:
      'A complete retail management and point-of-sale platform unifying multi-location stock controls, real-time sales analytics, and fiscal compliance.',
    url: 'https://erppos1.pages.dev/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Enterprise ERP data analytics and POS telemetry dashboard',
    metrics: [
      { value: '12', label: 'STORES SYNCED' },
      { value: '0.2s', label: 'SYNC LATENCY' },
      { value: '100%', label: 'FISCAL ACCURACY' },
    ],
  },
];

export const services = [
  {
    slug: 'website-development',
    index: '01',
    titleLines: ['WEBSITE', 'DEVELOPMENT'],
    short: 'Marketing sites, web apps, and the APIs behind them. Fast to load, easy to rank, editable by your own team.',
    stack: ['NEXT.JS', 'FASTAPI', 'SANITY'],
    points: [
      'Marketing sites and campaign pages that load fast and rank',
      'APIs and backends your own apps and third parties can build against',
      'Web applications where an off-the-shelf product will not do',
      'A CMS your marketing team can use without a developer',
    ],
  },
  {
    slug: 'custom-software',
    index: '02',
    titleLines: ['CUSTOM', 'SOFTWARE'],
    short: 'Internal tools, portals, integrations. The workflow no off-the-shelf product gets right.',
    stack: ['TYPESCRIPT', 'PYTHON', 'POSTGRES'],
    points: [
      'Internal tools that match how your team already works',
      'Customer and partner portals over systems you cannot replace',
      'Integrations between systems that were never meant to talk',
      'Reporting layers that give you numbers you can trust',
    ],
  },
  {
    slug: 'agentic-systems',
    index: '03',
    titleLines: ['AGENTIC', 'SYSTEMS'],
    short: 'AI agents that do the work, not just answer questions. Wired into your real systems, with a human in the loop where it counts.',
    stack: ['CLAUDE', 'LANGGRAPH', 'PYTHON'],
    points: [
      'Agents that read, decide, and act inside the tools you already run',
      'Retrieval over your own documents, contracts, and ticket history',
      'Human approval on anything that spends money or touches a customer',
      'Evaluation and logging, so you can see why an agent did what it did',
    ],
  },
];

export const processSteps = [
  { title: 'SCOPE', body: 'Two weeks inside your operation. You get a fixed plan and a real number.' },
  { title: 'BUILD', body: 'Working software every two weeks, in your hands, not in a deck.' },
  { title: 'MIGRATE', body: 'Both systems run in parallel until the numbers reconcile, then we switch.' },
  { title: 'SUPPORT', body: 'A support line that reaches the engineers who wrote the code.' },
];

export const stats = [
  { value: '48', label: 'SYSTEMS SHIPPED' },
  { value: '12', label: 'PEOPLE IN THE STUDIO' },
  { value: '2025', label: 'FOUNDED' },
  { value: '100%', label: 'ON TIME DELIVERY' },
];

export const marqueeItems = [
  'WEB DEVELOPMENT',
  'CUSTOM SOFTWARE',
  'AGENTIC SYSTEMS',
  'INTEGRATIONS',
];


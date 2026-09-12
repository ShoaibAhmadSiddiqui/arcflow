// PLACEHOLDER FILE
// The studio name is settled: Arcflow. Everything still marked PLACEHOLDER
// below is invented and must be replaced before deploying.
// See PLACEHOLDERS.md in the project root for the full checklist.

export const site = {
  name: 'Arcflow',
  legalName: 'Arcflow B.V.',     // PLACEHOLDER: confirm the legal entity suffix
  email: 'studio@arcflow.co',    // PLACEHOLDER: domain not registered yet
  phone: '+31 20 712 3480',      // PLACEHOLDER
  phoneHref: '+31207123480',     // PLACEHOLDER
  address: 'Keizersgracht 241, Amsterdam', // PLACEHOLDER
  tagline: 'Websites, custom software, and AI agents for companies that outgrew the spreadsheet.',
};

export const nav = [
  { label: 'SERVICES', href: '/services' },
  { label: 'WORK', href: '/work' },
  { label: 'STUDIO', href: '/studio' },
];

// PLACEHOLDER: all four are invented companies with invented outcomes.
export const projects = [
  {
    slug: 'hartvig-logistics',
    client: 'HARTVIG LOGISTICS',
    sector: 'FREIGHT AND WAREHOUSING',
    summary: 'Six warehouses onto one platform, with agents triaging exceptions no human had time for.',
    detail:
      'A freight operator running six sites on spreadsheets and phone calls. We replaced the lot with a single platform, migrated four decades of records, and added agents that flag delayed loads and draft the customer email before anyone asks.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warehouse racking filled with pallets',
    metrics: [
      { value: '9 mo', label: 'FULL ROLLOUT' },
      { value: '312', label: 'STAFF TRAINED' },
      { value: '4.7 hrs', label: 'SAVED PER SHIFT' },
    ],
  },
  {
    slug: 'veldkamp-instruments',
    client: 'VELDKAMP INSTRUMENTS',
    sector: 'INDUSTRIAL EQUIPMENT',
    summary: 'Offline-first field service app for 84 travelling engineers.',
    detail:
      'Engineers worked in basements and plant rooms with no signal. The app holds a full job queue offline, syncs when it can, and never loses a signature.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engineer working with instrumentation',
    metrics: [
      { value: '84', label: 'ENGINEERS LIVE' },
      { value: '0', label: 'PAPER JOB SHEETS' },
      { value: '11 min', label: 'SAVED PER JOB' },
    ],
  },
  {
    slug: 'brekke-finance',
    client: 'BREKKE FINANCE',
    sector: 'FINANCIAL SERVICES',
    summary: 'Client portal and reporting over a core banking system.',
    detail:
      'The core system could not be touched for compliance reasons. We built alongside it, reading through a controlled integration layer, so clients got a modern portal without a core migration.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    alt: 'Finance team reviewing printed reports',
    metrics: [
      { value: '0', label: 'CORE CHANGES' },
      { value: '3.1k', label: 'CLIENTS ONBOARD' },
      { value: '2 wk', label: 'TO FIRST SLICE' },
    ],
  },
  {
    slug: 'sundby-foods',
    client: 'SUNDBY FOODS',
    sector: 'FOOD PRODUCTION',
    summary: 'Production planning and traceability across three plants.',
    detail:
      'Their previous system lost vendor support in 2019. We moved planning and traceability onto a maintained platform without stopping production at any of the three plants.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Food production line equipment',
    metrics: [
      { value: '3', label: 'PLANTS LIVE' },
      { value: '11 mo', label: 'TO FINAL CUTOVER' },
      { value: '6.2%', label: 'LESS BATCH WASTE' },
    ],
  },
];

export const services = [
  {
    slug: 'website-development',
    index: '01',
    titleLines: ['WEBSITE', 'DEVELOPMENT'],
    short: 'Marketing sites, ecommerce, and web apps. Fast to load, easy to rank, editable by your own team.',
    stack: ['NEXT.JS', 'SHOPIFY', 'SANITY'],
    points: [
      'Marketing sites and campaign pages that load fast and rank',
      'Ecommerce on Shopify or headless, with the integrations your ops team needs',
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

// PLACEHOLDER: invented figures.
export const stats = [
  { value: '61', label: 'SYSTEMS SHIPPED' },
  { value: '14', label: 'PEOPLE IN THE STUDIO' },
  { value: '2016', label: 'FOUNDED' },
  { value: '7 yr', label: 'LONGEST CLIENT' },
];

export const marqueeItems = [
  'WEB DEVELOPMENT',
  'CUSTOM SOFTWARE',
  'AGENTIC SYSTEMS',
  'INTEGRATIONS',
];

import type { DeveloperInfo, Experience, SkillGroup, AiTool, Service } from '@/types';

export const developer: DeveloperInfo = {
  name: 'Md. Al-Shahreyar',
  shortName: 'Shahreyar',
  role: 'Senior Software Engineer',
  tagline: 'AI-Driven Architect · WordPress Expert',
  heroLine1: 'AI-powered engineering for',
  heroLine2: 'WordPress at scale.',
  intro:
    'Senior Software Engineer & Architect at WPPOOL. I build WordPress plugins and SaaS products serving 50,000+ active installs, engineered with OOP PHP, React/Vue, and an AI-assisted workflow that ships faster without sacrificing clean code or test coverage.',
  bio: `I'm a Dhaka-based Senior Software Engineer with 5+ years of experience architecting high-impact WordPress and WooCommerce products. As Architect & Planner at WPPOOL, I lead development on flagship products including WP Dark Mode (20,000+ active installs), ArchiveMaster, FlexMeeting (Jitsi) and EchoRewards.

My work sits at the intersection of traditional CMS engineering and modern AI-assisted development. I lean on Claude, Cursor, ChatGPT, Antigravity, Lovable, Qwen and Copilot to move faster, while keeping a strong discipline around clean code, OOP architecture, automated test coverage and QA automation.

I've contributed to plugins used by thousands of businesses globally, optimised databases for high-volume WooCommerce stores, and engineered seamless third-party integrations with Jitsi, Zoom, Google APIs and WhatsApp Business.`,
  philosophy:
    'Great software is invisible. It just works. I write code that other engineers will thank me for, ship features users actually adopt, and treat performance, tests and AI leverage as features, not afterthoughts.',
  email: 'shahreyar.shimul15@gmail.com',
  phone: '+8801746894046',
  location: 'Mirpur 12, Dhaka 1216, Bangladesh',
  yearsOfExperience: 5,
  pluginsShipped: 10,
  productionUsers: '50K+',
  cvUrl: '/Md-Al-Shahreyar-CV.pdf',
  social: {
    github: 'https://github.com/Shahreyar46',
    linkedin: 'https://linkedin.com/in/shahreyar46',
    wordpress: 'https://profiles.wordpress.org/shahreyar46/',
  },
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: 'Code2',
    items: ['PHP (OOP)', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'Boxes',
    items: ['React.js', 'Vue.js', 'Laravel', 'Tailwind CSS', 'jQuery', 'SCSS'],
  },
  {
    category: 'WordPress Stack',
    icon: 'Wordpress',
    items: [
      'Plugin Architecture',
      'WooCommerce',
      'Gutenberg Blocks',
      'Elementor Add-ons',
      'WP REST API',
      'SVN / Git Releases',
    ],
  },
  {
    category: 'AI-Assisted Development',
    icon: 'Sparkles',
    items: [
      'Claude · Cursor · ChatGPT',
      'Antigravity · Lovable · Qwen',
      'GitHub Copilot · Agent workflows',
      'AI-driven feature scoping',
      'Prompt-engineered code review',
      'AI-powered UX (e.g. WP Dark Mode)',
    ],
  },
  {
    category: 'Clean Code & Testing',
    icon: 'ShieldCheck',
    items: [
      'Unit & integration tests',
      'QA automation',
      'WordPress Coding Standards',
      'Code review discipline',
      'Regression coverage',
      'OOP refactoring',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: 'Server',
    items: [
      'REST API design',
      'AJAX & async PHP',
      'Jitsi · Zoom · Google APIs',
      'WhatsApp Business · SMTP',
      'Webhooks',
      'Third-party integrations',
    ],
  },
  {
    category: 'Database & Performance',
    icon: 'Database',
    items: [
      'MySQL optimisation',
      'Query profiling',
      'Caching strategies',
      'Large-scale order archival',
      'Schema design',
      'Amazon RDS workflows',
    ],
  },
  {
    category: 'Tooling & Practice',
    icon: 'GitBranch',
    items: [
      'Git / GitHub flow · SVN',
      'Agile delivery & planning',
      'SaaS architecture',
      'Technical mentoring',
      'Code reviews',
    ],
  },
];

export const aiTools: AiTool[] = [
  { name: 'Claude', use: 'Architecture reviews & refactors' },
  { name: 'Cursor', use: 'In-IDE pair programming' },
  { name: 'ChatGPT', use: 'Spec drafting & debugging' },
  { name: 'Antigravity', use: 'Agent-driven workflows' },
  { name: 'Lovable', use: 'Rapid product prototyping' },
  { name: 'Qwen', use: 'Code generation & analysis' },
  { name: 'GitHub Copilot', use: 'Inline completions' },
  { name: 'Gemini', use: 'Multimodal research' },
];

export const services: Service[] = [
  {
    title: 'WordPress Plugin Architecture',
    description:
      'Design and build production-grade plugins from scratch: clean OOP PHP, modular structure, REST API, modern admin UI in React/Vue.',
    icon: 'Boxes',
  },
  {
    title: 'WooCommerce Engineering',
    description:
      'Custom extensions, performance tuning and large-scale data workflows for stores processing tens of thousands of orders.',
    icon: 'ShoppingCart',
  },
  {
    title: 'AI-Assisted Delivery',
    description:
      'Bring AI tooling (Claude, Cursor, Copilot, agents) into your team workflow to ship features faster without compromising code quality.',
    icon: 'Sparkles',
  },
  {
    title: 'QA & Test Automation',
    description:
      'Introduce unit, integration and regression tests, plus QA automation, into legacy plugin codebases to catch bugs before they ship.',
    icon: 'ShieldCheck',
  },
];

export const experience: Experience[] = [
  {
    id: 'wppool',
    company: 'WPPOOL',
    role: 'Senior Software Engineer · Architect & Planner',
    period: 'June 2022 — Present',
    current: true,
    location: 'Remote · Dhaka',
    achievements: [
      'Lead architecture & planning for flagship WordPress products serving 50,000+ active installs across multiple plugins.',
      'Key contributor to WP Dark Mode (20,000+ active installs), shipped AI-Powered Dark Theme generation for intelligent palette switching.',
      'Architected ArchiveMaster: WooCommerce DB optimiser with one-click local & Amazon RDS order archiving, slashing wp_posts bloat and improving query times for high-volume stores.',
      'Engineered FlexMeeting on the Jitsi Meet API with native webinar/video conferencing and deep WooCommerce, LMS and BuddyPress integration.',
      'Built EchoRewards referral & loyalty engine with automated coupon generation, social sharing (WhatsApp, X, Facebook) and ROI analytics dashboard, designed to lower customer acquisition cost.',
      'Pioneered AI-assisted development workflows (Claude, Cursor, ChatGPT, Antigravity, Lovable) that measurably improved team velocity.',
      'Drove QA automation, code reviews and clean-code culture across the team.',
    ],
    stack: ['PHP (OOP)', 'React', 'Vue', 'WP REST API', 'WooCommerce', 'MySQL', 'Jitsi', 'AI Tooling'],
  },
  {
    id: 'wpcommerz',
    company: 'WPCommerz',
    role: 'Software Engineer',
    period: 'December 2021 — June 2022',
    achievements: [
      'Developed and maintained production WordPress plugins, themes and WooCommerce add-ons.',
      'Built reusable OOP base classes adopted across the team\'s plugin suite.',
      'Created Elementor add-ons and an SMTP-based transactional email layer.',
      'Integrated multiple third-party APIs and provided technical debugging support.',
    ],
    stack: ['PHP', 'WooCommerce', 'Elementor', 'JavaScript', 'MySQL'],
  },
  {
    id: 'chilidevs',
    company: 'ChiliDevs',
    role: 'Software Engineer',
    period: 'February 2021 — November 2021',
    achievements: [
      'Built object-oriented PHP plugins for WordPress and WooCommerce serving international clients.',
      'Designed and shipped new features for existing client plugins.',
      'Developed contact-form and e-commerce workflow plugins.',
      'Provided technical support and troubleshooting to clients across time zones.',
    ],
    stack: ['PHP (OOP)', 'WooCommerce', 'jQuery'],
  },
  {
    id: 'preneur',
    company: 'Preneur Lab Limited',
    role: 'Frontend Developer',
    period: 'September 2020 — December 2020',
    achievements: [
      'Built responsive templates with modern CSS and JS libraries.',
      'Converted HTML/CSS designs into custom WordPress themes for e-commerce clients.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'jQuery'],
  },
  {
    id: 'lumans',
    company: 'Lumans Lab',
    role: 'Backend Developer (Laravel)',
    period: 'January 2020 — May 2020',
    achievements: [
      'Developed Laravel backend modules and designed database structures.',
      'Worked on bug fixing, performance improvements and feature updates.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL'],
  },
];

export const education = {
  institution: 'Daffodil International University',
  degree: 'B.Eng in Software Engineering',
  faculty: 'Faculty of Information Technology',
  period: '2015 — 2019',
  cgpa: '3.21',
};

export const stats = [
  { value: '5+', label: 'Years shipping WP products' },
  { value: '50K+', label: 'Active installs supported' },
  { value: '10+', label: 'Plugins in production' },
  { value: 'AI-first', label: 'Development workflow' },
];

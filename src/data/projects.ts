import type { DevProject } from '@/types';

export const projects: DevProject[] = [
  {
    id: '1',
    slug: 'wp-dark-mode',
    title: 'WP Dark Mode',
    tagline: 'AI-powered dark theme generator · 20,000+ active installs',
    category: 'plugin',
    year: '2023 — Present',
    role: 'Senior Developer & Architect',
    description:
      'Key contributor to the world\'s leading dark-mode plugin for WordPress, used on 20,000+ active sites. I helped design and ship the AI-Powered Dark Theme generator, intelligently switching color palettes based on site content, alongside performance optimisation, OS-level preference detection, and cross-browser UI consistency improvements.',
    highlights: [
      'Powering 20,000+ active WordPress sites globally',
      'Shipped AI-Powered Dark Theme generation for intelligent palette switching',
      'Refactored settings panel into a Vue-based admin experience',
      'Optimised CSS injection pipeline for faster front-end render',
      'Improved compatibility across themes, builders and Gutenberg',
    ],
    tech: ['PHP', 'Vue.js', 'AI Integration', 'CSS Variables', 'Gutenberg', 'WP REST API'],
    url: 'https://wordpress.org/plugins/wp-dark-mode/',
    featured: true,
  },
  {
    id: '2',
    slug: 'archive-master',
    title: 'ArchiveMaster',
    tagline: 'WooCommerce database optimizer with Amazon RDS archiving',
    category: 'ecommerce',
    year: '2023',
    role: 'Architect & Lead Developer',
    description:
      'High-volume WooCommerce stores suffer from database bloat as orders pile up. ArchiveMaster solves it with a robust local + remote (Amazon RDS) order-archiving system. One-click archiving with visual insights (pie charts), automated multi-format export (CSV, JSON, XML, PDF), and smart Order ID conflict handling that guarantees zero data loss during restoration.',
    highlights: [
      'Architected from scratch: full data model, OOP structure and UI',
      'Local + Amazon RDS archival pipeline with batch processing',
      'Multi-format export: CSV, JSON, XML, PDF',
      'Smart Order ID conflict handling for zero-data-loss restore',
      'Reduced wp_posts bloat and improved query times for stores with 100K+ orders',
    ],
    tech: ['PHP (OOP)', 'WooCommerce', 'MySQL', 'Amazon RDS', 'Cron', 'React'],
    url: 'https://wordpress.org/plugins/archive-master/',
    featured: true,
  },
  {
    id: '3',
    slug: 'flexmeeting',
    title: 'FlexMeeting',
    tagline: 'Native WordPress webinars on Jitsi Meet',
    category: 'integration',
    year: '2023',
    role: 'Senior Developer',
    description:
      'Engineered a seamless bridge between WordPress and the Jitsi Meet API, enabling native webinars and video conferencing without leaving the WP dashboard. Deep integrations with WooCommerce, LMS platforms and BuddyPress let users monetise meetings, run online classes and host live sessions inside their existing site.',
    highlights: [
      'Native Jitsi Meet integration with custom JWT auth',
      'Deep WooCommerce, LMS and BuddyPress integration',
      'React-based meeting room UI inside WordPress frontend',
      'Improved system stability and concurrent-room handling',
      'Branded meeting experience without third-party redirects',
    ],
    tech: ['PHP', 'Jitsi Meet API', 'React', 'JWT', 'WP REST API', 'WooCommerce'],
    url: 'https://wordpress.org/plugins/webinar-and-video-conference-with-jitsi-meet/',
    featured: true,
  },
  {
    id: '4',
    slug: 'echo-rewards',
    title: 'EchoRewards',
    tagline: 'Customer-to-customer referral & loyalty engine',
    category: 'ecommerce',
    year: '2024',
    role: 'Lead Contributor',
    description:
      'A complete WooCommerce referral and loyalty system designed to lower customer acquisition cost and lift LTV. Customers earn unique coupons by inviting friends; store owners get a comprehensive analytics dashboard to track ROI. Built with fraud-aware tracking and one-click sharing to WhatsApp, X and Facebook.',
    highlights: [
      'Built customer-to-customer referral engine from scratch',
      'Automated unique coupon generation with attribution tracking',
      'One-click social sharing to WhatsApp, X, Facebook',
      'React analytics dashboard for ROI tracking',
      'Hardened against self-referral and abuse',
    ],
    tech: ['PHP (OOP)', 'WooCommerce', 'React', 'WP REST API', 'MySQL', 'AJAX'],
    url: 'https://wordpress.org/plugins/echo-rewards/',
    featured: true,
  },
  {
    id: '5',
    slug: 'formychat',
    title: 'FormyChat (Social Contact Form)',
    tagline: 'WhatsApp lead-gen for CF7, WPForms & Gravity Forms',
    category: 'plugin',
    year: '2022',
    role: 'Developer & Integration Expert',
    description:
      'A lead-generation plugin that connects WordPress form submissions (Contact Form 7, WPForms, Gravity Forms) directly to WhatsApp and WhatsApp Business. Floating chat widget, multi-agent support and a hardened submission pipeline improve real-time customer engagement and conversion.',
    highlights: [
      'Multi-form integration: CF7, WPForms, Gravity Forms',
      'WhatsApp & WhatsApp Business native handoff',
      'Floating chat widget with multi-agent routing',
      'Hardened against spam with multi-layer verification',
    ],
    tech: ['PHP', 'JavaScript', 'AJAX', 'WhatsApp API', 'WP REST API'],
    url: 'https://wordpress.org/plugins/social-contact-form/',
  },
  {
    id: '6',
    slug: 'woocommerce-addons',
    title: 'WooCommerce Add-ons Suite',
    tagline: 'Custom commerce extensions for client agencies',
    category: 'ecommerce',
    year: '2022',
    role: 'Engineer',
    description:
      'A collection of WooCommerce add-ons and business-logic extensions developed at WPCommerz, covering checkout customisations, pricing rules, Elementor add-ons and SMTP-based transactional email delivery. Reusable OOP base classes were adopted across the team\'s plugin suite.',
    highlights: [
      'Built reusable OOP base classes adopted across plugins',
      'Shipped Elementor add-ons used by client agencies',
      'Created SMTP-based transactional email delivery layer',
      'Custom pricing rules and checkout customisations',
    ],
    tech: ['PHP', 'WooCommerce', 'Elementor', 'SMTP', 'OOP'],
  },
];

export const getProjectBySlug = (slug: string): DevProject | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): DevProject[] =>
  projects.filter((p) => p.featured);

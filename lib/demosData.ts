import { DemoType } from '@/components/DemoPreviewModal'

export interface DemoItem {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  type: DemoType
  url?: string
  tags: string[]
  isFeatured?: boolean
}

export const DEMOS_DATA: DemoItem[] = [
  {
    id: 'littiwale',
    title: 'Littiwale',
    subtitle: 'Cloud Kitchen / Restaurant Ordering Platform',
    description: 'Full-stack food ordering platform built for a cloud kitchen, featuring a custom menu, cart system, and direct ordering without third-party commissions.',
    image: 'bg-gradient-to-br from-orange-600 to-red-600',
    type: 'simulated-image',
    url: 'https://littiwale-beta.vercel.app',
    tags: ['Restaurant', 'E-Commerce', 'Full-Stack'],
    isFeatured: true
  },
  {
    id: 'chaiwale',
    title: 'Chaiwale',
    subtitle: 'WhatsApp Integrated Café Website',
    description: 'A vibrant café website with direct WhatsApp ordering integration, menu showcase, and lead generation for catering orders.',
    image: 'bg-gradient-to-br from-amber-500 to-orange-600',
    type: 'simulated-image',
    url: 'https://chaiwale.vercel.app',
    tags: ['Café', 'WhatsApp Order', 'Landing Page']
  },
  {
    id: 'influencer',
    title: 'Influencer Campaign Manager',
    subtitle: 'Marketing Automation Platform',
    description: 'Find and collaborate with top creators for your brand. Real-time ROI analytics, automated outreach, and budget management.',
    image: 'bg-gradient-to-br from-pink-600 to-rose-600',
    type: 'tool-influencer',
    tags: ['SaaS', 'Marketing', 'AI Tool'],
    isFeatured: true
  },
  {
    id: 'dinerush',
    title: 'DineRush POS',
    subtitle: 'Restaurant Billing & Management Software',
    description: 'Cloud-based Point of Sale (POS) system for restaurants to manage tables, billing, inventory, and kitchen orders in real-time.',
    image: 'bg-gradient-to-br from-indigo-600 to-blue-600',
    type: 'simulated-image',
    url: 'https://dine-rush.web.app/',
    tags: ['SaaS', 'POS', 'Restaurant']
  },
  {
    id: 'mrmisu',
    title: 'Mr. Misu',
    subtitle: 'Premium Café Landing Page',
    description: 'Aesthetic, high-converting landing page designed for a premium café to showcase ambiance, menu, and reserve tables.',
    image: 'bg-gradient-to-br from-yellow-700 to-amber-900',
    type: 'simulated-image',
    url: 'https://mrmisu-one.vercel.app/',
    tags: ['Café', 'Landing Page', 'Design']
  },
  {
    id: 'jobsearch',
    title: 'HireConnect',
    subtitle: 'Modern Job Search Platform',
    description: 'A functional job portal connecting candidates with startups. Features advanced filtering, one-click apply, and employer dashboards.',
    image: 'bg-gradient-to-br from-blue-600 to-cyan-600',
    type: 'tool-job',
    tags: ['Portal', 'Marketplace', 'SaaS']
  },
  {
    id: 'ecommerce',
    title: 'B2B Marketplace',
    subtitle: 'Enterprise E-Commerce',
    description: 'Secure, multi-vendor marketplace handling complex B2B transactions with identity protection and automated payouts.',
    image: 'bg-gradient-to-br from-green-600 to-emerald-600',
    type: 'simulated-image',
    url: 'Confidential Project',
    tags: ['E-Commerce', 'B2B', 'Enterprise']
  },
  {
    id: 'interviewcrack',
    title: 'InterviewCrack AI',
    subtitle: 'Live AI Interview Assistant',
    description: 'Custom AI tool that listens to live interview questions and generates optimized, tailored responses in real-time.',
    image: 'bg-gradient-to-br from-violet-600 to-purple-600',
    type: 'tool-interview',
    tags: ['AI Tool', 'Automation', 'Custom Software']
  },
  {
    id: 'trustscan',
    title: 'TrustScan (Cheating Daddy)',
    subtitle: 'Digital Trust Monitor Concept',
    description: 'A specialized novelty app demonstrating complex behavioral pattern analysis and digital footprint scanning.',
    image: 'bg-gradient-to-br from-red-900 to-black',
    type: 'tool-cheating',
    tags: ['Concept', 'Mobile App', 'Analytics']
  },
  {
    id: 'informatic',
    title: 'Corporate Solutions',
    subtitle: 'B2B Service Landing Page',
    description: 'High-performance corporate website designed for lead generation, featuring case studies, service breakdowns, and consultation booking.',
    image: 'bg-gradient-to-br from-slate-700 to-slate-900',
    type: 'simulated-image',
    url: 'Generic Business Template',
    tags: ['Corporate', 'Lead Gen', 'Design']
  },
  {
    id: 'aiagents',
    title: 'Workflow AI Agents',
    subtitle: 'Business Automation Dashboard',
    description: 'Internal tooling dashboard where custom AI agents automate customer support, data entry, and email marketing workflows.',
    image: 'bg-gradient-to-br from-teal-600 to-cyan-700',
    type: 'simulated-image',
    url: 'Automation Concept',
    tags: ['AI Agents', 'SaaS', 'Automation']
  },
  {
    id: 'kashmiri-organic',
    title: 'Kashmiri Organic Nuts',
    subtitle: 'Commercial AI Brand Ad',
    description: 'Cinematic AI commercial video ad crafted to showcase premium quality. Published as an official brand collaboration with Aly Goni.',
    image: 'bg-gradient-to-br from-amber-600 to-yellow-800',
    type: 'iframe',
    url: 'https://www.instagram.com/p/DN7jMkjEqY7/embed',
    tags: ['Video Ad', 'AI Generated', 'Social Media'],
    isFeatured: true
  }
]

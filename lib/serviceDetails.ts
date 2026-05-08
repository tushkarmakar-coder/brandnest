'use client'
import { Code2, Video, Zap, Sparkles, BarChart2, Globe, Users, Check } from 'lucide-react'

export const SERVICE_DETAILS = [
  {
    id: 'marketplace-platform',
    title: 'Marketplace & Platform Development',
    icon: Globe,
    description: 'B2B marketplaces, multi-vendor platforms, buyer/seller dashboards, admin panels with approval workflows, member login systems, guest access, and multi-environment deployment (DEV/UAT). We\'ve built IndiaMART-style platforms end-to-end.',
    basePrice: '₹1,50,000',
    priceRange: '₹1,50,000 - ₹5,00,000',
    timelineRange: '30-60 days',
    fullDescription: `We specialize in building complex, high-transaction marketplaces and SaaS platforms for Indian founders. From IndiaMART-style B2B portals to multi-vendor consumer marketplaces, we handle everything from database architecture to complex approval workflows.`,
    detailedContent: `
**What We Build:**
• B2B & B2C Multi-Vendor Marketplaces
• Buyer/Seller Dashboards & Member Portals
• Admin Panels with Complex Approval Workflows
• Multi-Vendor Inventory & Commission Management
• Secure Messaging & Identity Protection Systems
• IndiaMART-style Lead Management Systems
• Multi-Environment Deployment (DEV/UAT/PROD)
• Real-time Analytics & Transaction Monitoring

**Core Platform Features:**
• User Authentication (OTP, Social, Member Login)
• Vendor Onboarding & Verification Systems
• Commission & Payout Management (Razorpay/Stripe)
• Real-time Chat & Notification Engines
• Advanced Search & Filtering (Elasticsearch ready)
• Product/Service Listing Approval Queues
• Detailed Reporting for Admins & Vendors
• Guest Access & Limited Preview Modes

**Why Choose Our Platform Expertise:**
✓ Specialized in Indian Marketplace Dynamics (B2B/B2C)
✓ Security-first approach to protect buyer/seller data
✓ Scalable architecture built for 100k+ users
✓ Multi-environment setup for risk-free updates
✓ Integration with local Indian payment & shipping APIs
✓ 24/7 Monitoring & DevOps support included
    `,
    deliverables: [
      'Multi-vendor platform architecture',
      'Vendor & Buyer dashboards',
      'Admin panel with approval workflows',
      'Commission & wallet management system',
      'Real-time inventory & order sync',
      'Identity protection & privacy features',
      'DEV/UAT/PROD deployment setup',
      'API documentation & postman collection',
      'Training sessions for admin staff',
      '3 months premium support',
    ],
    whyChoose: [
      'End-to-end IndiaMART-style platform expertise',
      'Scalable multi-tenant architecture',
      'Security focused buyer/seller protection',
      'Complete control over your data & users',
      'Integrated Indian payment & logistics',
      'Proven track record with high-scale platforms',
    ],
    packages: [
      { name: 'Standard Marketplace', price: '₹1,50,000', desc: 'Core multi-vendor features with basic dashboards' },
      { name: 'Enterprise Platform', price: '₹3,50,000', desc: 'Custom workflows, advanced analytics & scaling' },
      { name: 'Custom SaaS', price: '₹5,00,000+', desc: 'Full-scale platform with custom business logic' },
    ],
    faq: [
      { q: 'How do you handle vendor payouts?', a: 'We integrate Razorpay Route or Stripe Connect for automated commissions.' },
      { q: 'Can the platform handle high traffic?', a: 'Yes, we use Next.js and PostgreSQL on AWS/Vercel for auto-scaling.' },
      { q: 'Do you provide maintenance?', a: 'Yes, we offer premium maintenance packages starting at ₹15,000/month.' },
    ]
  },
  {
    id: 'web-development',
    title: 'Full Stack Web Development',
    icon: Code2,
    description: 'Custom websites fully functional and operational with hosting, deployment, SEO, and 24/7 support.',
    basePrice: '₹25,000',
    priceRange: '₹25,000 - ₹3,00,000',
    timelineRange: '15-45 days',
    fullDescription: `We build high-performance, scalable websites tailored to your business needs. Whether you need a simple brochure site, complex e-commerce platform, or SaaS application, we deliver complete solutions with hosting, security, and ongoing support included.`,
    detailedContent: `
**What's Included:**
• Custom web development (React, Next.js, Vue.js, Node.js)
• Database design and management (PostgreSQL, MongoDB)
• Responsive design for all devices
• Fast loading speeds and Core Web Vitals optimization (< 2 seconds)
• SSL security and compliance (PCI-DSS ready)
• Server deployment and hosting setup
• Post-launch support and maintenance
• SEO optimization and structured data
• 24/7 technical support

**Our Tech Stack:**
• Frontend: React, Next.js, TypeScript, Tailwind CSS
• Backend: Node.js, Python, Express, Django
• Database: PostgreSQL, MongoDB, Firebase
• Hosting: Vercel, AWS, DigitalOcean
• CDN: Cloudflare, AWS CloudFront
• Security: SSL, Cloudflare DDoS protection

**Popular Solutions We Build:**
• E-Commerce Platforms: Shopify-like stores with inventory management
• SaaS Applications: Subscription-based software with user dashboards
• Mobile Apps: React Native & Flutter cross-platform apps
• API Services: REST & GraphQL backends for mobile/web apps
• Cloud Dashboards: Real-time analytics and reporting systems
• CMS Platforms: Headless CMS with API-first architecture

**Why Choose Us:**
✓ 50+ websites deployed successfully
✓ 98% client satisfaction rate
✓ Average page load: <2 seconds (Google PageSpeed 100/100)
✓ Full-stack expertise reduces deployment time by 40%
✓ Ongoing support included (first 30 days free)
✓ Scalable architecture for future growth
    `,
    deliverables: [
      'Responsive website design (Desktop, Tablet, Mobile)',
      'Backend development with database',
      'Payment gateway integration (Razorpay/Stripe)',
      'SEO optimization with Meta tags',
      'Performance optimization (Core Web Vitals)',
      'SSL certificate & hosting setup',
      'Email contact form integration',
      'Analytics dashboard (Google Analytics)',
      'Admin panel for content management',
      '30 days free support & updates',
      '24/7 hosting support',
      'Mobile app landing page (optional)',
    ],
    whyChoose: [
      'Built with Next.js for blazing-fast performance',
      'Mobile-first responsive design',
      'SEO-optimized architecture',
      'Secure and scalable infrastructure',
      'Future-proof technology stack',
      'Premium support included',
    ],
    packages: [
      { name: 'Startup', price: '₹25,000', desc: '5-page website with basic features' },
      { name: 'Professional', price: '₹60,000', desc: '10-page website with e-commerce' },
      { name: 'Enterprise', price: '₹1,50,000+', desc: 'Full-featured SaaS platform' },
    ],
    faq: [
      { q: 'How long does development take?', a: '15-45 days depending on complexity and features needed.' },
      { q: 'Do you provide hosting?', a: 'Yes, included free for first year. After that ₹3,000/year.' },
      { q: 'Will my website be mobile-friendly?', a: 'Absolutely! All websites are 100% mobile responsive.' },
      { q: 'What about after launch support?', a: '30 days free support, then ₹5,000/month for ongoing maintenance.' },
    ]
  },
  {
    id: 'video-production',
    title: 'AI-Enhanced Video Production',
    icon: Video,
    description: 'Brand films, commercials, YouTube ads — AI-accelerated workflow, 4K delivery.',
    basePrice: '₹40,000',
    priceRange: '₹40,000 - ₹5,00,000',
    timelineRange: '10-30 days',
    fullDescription: `Professional video production powered by AI technology for faster turnaround and higher quality output. We create brand films, product commercials, YouTube ads, and more with 4K quality.`,
    detailedContent: `
**Services Included:**
• Concept development and scriptwriting
• Professional 4K filming with drone footage
• AI-powered video editing and color grading
• Motion graphics and animations
• Sound design and background music (royalty-free)
• Subtitle generation (auto-translated in 50+ languages)
• YouTube optimization and thumbnails
• Ad format optimization (15s, 30s, 60s versions)
• Instagram Reels and TikTok vertical formats
• LinkedIn short-form video content

**AI Capabilities We Use:**
• Auto-generated subtitles and captions
• Intelligent scene detection and transitions
• AI color grading and enhancement (DXOMARK quality)
• Auto-zoom and focus following technology
• Background removal and replacement (green screen-free)
• Voice-over cloning in multiple languages
• Generative backgrounds and effects
• AI transitions and effects library
• Automated aspect ratio conversions

**Deliverables:**
• Brand films (2-5 min corporate videos)
• Product commercials (30-60 sec packed with visuals)
• YouTube ads (15-30 sec conversion-focused)
• Social media reels (TikTok, Instagram, YouTube Shorts)
• Testimonial videos from customers
• Event coverage and highlights
• Raw footage for your own editing
• Project files for future modifications

**Why Choose Our AI-Powered Approach:**
✓ 3× faster than traditional production (7-30 days vs 3 months)
✓ 40% cost reduction compared to traditional agencies
✓ High-end results at affordable pricing
✓ AI handles repetitive tasks → focus on creativity
✓ Consistent quality across multiple videos
✓ Quick revisions (24-48 hours)
✓ Multi-format delivery included

**Turnaround Time:**
• Standard: 15-20 days
• Expedited: 7-10 days
• Rush: 3-5 days (premium pricing +40%)
    `,
    deliverables: [
      'Professional scripting & storyboarding',
      'Concept development & creative direction',
      '4K video recording with professional equipment',
      'AI-powered video editing & color grading',
      'Motion graphics & animations',
      'AI voiceover generation (multiple languages)',
      'Background music & sound design',
      'Subtitle generation (auto-translated)',
      'Multiple formats (YouTube, Instagram, TikTok)',
      'Unlimited revisions (up to 2 rounds)',
      'Render & delivery in 48 hours',
    ],
    whyChoose: [
      '50% faster turnaround with AI tools',
      'Professional broadcast-quality output',
      'Multi-platform optimization',
      'AI-powered effects & transitions',
      'Lower costs, premium quality',
      'Quick revision turnarounds',
    ],
    packages: [
      { name: '15-sec Ad', price: '₹40,000', desc: 'YouTube/Instagram ad short-form' },
      { name: 'Brand Film', price: '₹1,25,000', desc: '2-3 min professional brand story' },
      { name: 'Commercial', price: '₹2,50,000+', desc: '30-60 sec broadcast quality commercial' },
    ],
    faq: [
      { q: 'Can you do multilingual voice overs?', a: 'Yes! AI voiceover in 50+ languages available.' },
      { q: 'How many revisions included?', a: 'Unlimited revisions in 2 rounds. Additional rounds ₹10,000 each.' },
      { q: 'What file formats do you deliver?', a: 'MP4, MOV, WebM, Vertical (9:16), Square (1:1), Landscape (16:9).' },
    ]
  },
  {
    id: 'commercial-ads',
    title: 'AI-Powered Commercial Ads',
    icon: Zap,
    description: 'Google, Meta & YouTube campaigns with AI optimization for maximum ROI.',
    basePrice: '₹30,000',
    priceRange: '₹30,000 - ₹2,00,000',
    timelineRange: '5-15 days',
    fullDescription: `We create and manage high-performing advertising campaigns across Google, Meta (Facebook/Instagram), and YouTube with AI-powered optimization for maximum ROI.`,
    detailedContent: `
**Campaign Types We Manage:**
• Google Search Ads (SEM) - Text ads for high-intent searches
• Google Shopping Ads - Product feed ads for e-commerce
• Google Display Network - Banner ads across millions of sites
• Facebook/Instagram Ads - Carousel, video, collection ads
• YouTube Video Ads - Pre-roll, bumper, and skippable ads
• TikTok Ads - Short-form creative for viral potential
• LinkedIn Ads - B2B targeting for enterprise sales
• Retargeting campaigns - Re-engage website visitors

**Our AI-Powered Process:**
1. Data analysis: Historical performance, competitor benchmarking
2. Audience segmentation: AI identifies your ideal customers using ML
3. Creative generation: AI-assisted copywriting and design templates
4. Bid optimization: Machine learning adjusts bids every 6 hours
5. Performance tracking: Real-time analytics with predictive insights
6. Continuous testing: A/B testing of ad variations automatically

**What We Optimize For:**
• Cost Per Click (CPC) reduction (target: 30-50% lower)
• Conversion Rate Improvement (target: 25-40% higher)
• Quality Score enhancement (target: 8-10/10)
• Click-Through Rate (CTR) (target: 2-5%)
• Customer Acquisition Cost (CAC) optimization
• Return on Ad Spend (ROAS) (target: 3-5x)
• Brand awareness and reach expansion
• Lead quality scoring

**Average Results We Deliver (3-6 months):**
✓ 40% reduction in CAC
✓ 3× improvement in ROAS
✓ 25% increase in CTR
✓ 50% faster campaign scaling
✓ Quality Score: 9/10 average
✓ Conversion Rate: +35% improvement

**Campaign Management Includes:**
• Complete account setup and structure
• Keyword research and optimization (100+ keywords)
• Ad copy and creative management
• Landing page optimization and testing
• Conversion tracking setup (GA4, pixel setup)
• Weekly performance reporting with insights
• Monthly strategy reviews with your team
• Ongoing bid management and adjustments
• Budget allocation and scaling strategies
• Competitor analysis and market positioning

**Pricing Models Available:**
• Management fee: 10-15% of monthly ad spend
• Performance-based: Pay only for results (CPA-based)
• Flat retainer: Fixed ₹30,000-₹1,00,000/month
• Hybrid: Combination of fee + performance bonus

**Tools We Use:**
• Google Ads platform with advanced settings
• Facebook Ads Manager
• Google Analytics 4
• Semrush for competitor analysis
• Optmyzr for advanced optimization
• Custom dashboards for real-time tracking
    `,
    deliverables: [
      'Market research & competitor analysis',
      'Campaign strategy & targeting',
      'Ad copy creation & A/B testing',
      'Creative assets optimization',
      'Landing page optimization',
      'Real-time performance monitoring',
      'Daily optimization & bid management',
      'Weekly performance reports',
      'Conversion tracking setup',
      'ROI analysis & recommendations',
      'Budget allocation optimization',
    ],
    whyChoose: [
      'AI-driven bid optimization',
      'Higher ROAS (3-4x typical)',
      'Faster campaign scaling',
      'Real-time performance tweaks',
      'Expert strategist included',
      'Transparent reporting',
    ],
    packages: [
      { name: 'Starter', price: '₹30,000', desc: '₹3,000/month media spend + setup' },
      { name: 'Growth', price: '₹75,000', desc: '₹10,000/month media spend + optimization' },
      { name: 'Scale', price: '₹1,50,000+', desc: '₹25,000+/month with dedicated manager' },
    ],
    faq: [
      { q: 'What is the typical ROAS?', a: 'Typically 3-4x on Google Ads, 2-3x on Meta depending on product.' },
      { q: 'How often do you optimize?', a: 'Daily! Real-time AI adjustments + manual daily reviews.' },
      { q: 'Can you manage existing campaigns?', a: 'Yes, we can take over & usually improve results by 40-60%.' },
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Automation',
    icon: Sparkles,
    description: 'Custom GPT-4 / Claude chatbots, workflow automation, and intelligent analytics.',
    basePrice: '₹35,000',
    priceRange: '₹35,000 - ₹4,00,000',
    timelineRange: '10-25 days',
    fullDescription: `Custom-built AI tools that automate your business processes, improve customer service, and generate new revenue streams. We build chatbots, automation workflows, and analytics dashboards.`,
    detailedContent: `
**AI Tools We Build:**
• Customer service chatbots (ChatGPT, Claude, Gemini integration)
• Content generation tools (blogs, social media, emails auto-generated)
• Lead qualification and nurturing automation
• Document processing and data extraction from PDFs/images
• Email marketing automation (triggered sequences)
• Predictive analytics dashboards (forecasting tools)
• Resume parsing and job matching systems
• Influencer identification and discovery tools
• Price optimization algorithms (dynamic pricing)
• Customer support ticketing system automation

**Chatbot Capabilities We Implement:**
• 24/7 customer support without human involvement
• Multi-language support (100+ languages)
• Natural conversation flow (not robotic responses)
• Lead capture and qualification automation
• FAQ automation with contextual answers
• Order tracking and real-time support
• Appointment scheduling with calendar integration
• Payment processing and transaction support
• Sentiment analysis (understanding customer emotions)
• Escalation to humans when needed

**Workflow Automations We Create:**
• CRM integration: Sync leads automatically (Salesforce, HubSpot)
• Email workflows: Triggered campaigns based on user behavior
• Slack/Teams integration: Notifications and AI commands
• Database automation: Data entry, validation, categorization
• Invoice generation: Automated billing and payment reminders
• Report generation: Daily/weekly/monthly insights automatically
• Social media scheduling: Batch content management
• Customer data synchronization across platforms
• Inventory management: Auto-reorder when stock low
• Team task assignments: AI-powered delegation

**Analytics & Insights We Provide:**
• Real-time performance dashboards (custom metrics)
• Predictive analytics (forecasting revenue, churn)
• Customer behavior analysis and segmentation
• Sales pipeline analytics with conversion rates
• Customer lifetime value (CLV) prediction
• Churn prediction and prevention alerts
• Recommendation engines (personalized suggestions)
• Competitor price tracking and alerts
• Market trend analysis and insights
• Custom KPI tracking and reporting

**Popular Use Cases:**
• E-commerce: Product recommendations, inventory management, cart abandonment
• SaaS: Lead qualification, onboarding automation, upgrade triggers
• Agencies: Client reporting automation, billing automation
• Healthcare: Appointment scheduling, patient follow-ups, prescription reminders
• Real Estate: Property inquiry qualification, tenant verification
• Education: Student support, enrollment automation, assignment grading
• Restaurants: Table reservations, order management, feedback collection
• Fitness: Class booking, membership renewals, workout tracking

**Typical ROI We Deliver:**
✓ 50-70% reduction in operational costs
✓ 3-5 hours saved per employee per day
✓ 40% faster customer response times (minutes vs hours)
✓ 25% improvement in conversion rates
✓ 60% reduction in manual data entry
✓ 35% increase in customer satisfaction
✓ 24/7 availability (no more offline support hours)

**Technology Stack:**
• GPT-4 and Claude APIs for AI
• Zapier/Make for workflow automation
• Custom Python backend for processing
• Firebase for real-time data
• PostgreSQL for structured data
• APIs for third-party integrations
• Webhooks for event-driven automation
• Custom dashboards with D3.js/Recharts

**Integration Capabilities:**
• Salesforce, HubSpot, Pipedrive
• Slack, Microsoft Teams, Discord
• Gmail, Outlook, custom SMTP
• Stripe, Razorpay, PayPal
• Google Sheets, Excel, Airtable
• Custom database connections
• REST and GraphQL APIs
• Webhook support for any platform
    `,
    deliverables: [
      'AI chatbot development (GPT-4/Claude)',
      'Integration with website/app',
      'Custom training on your data',
      'Multi-language support',
      'Lead qualification automation',
      'Email automation workflows',
      'Slack/Discord bot integration',
      'API development for integrations',
      'Analytics dashboard',
      'Monthly AI model updates',
      '3 months free support',
    ],
    whyChoose: [
      'Reduce customer support by 60%',
      'Available 24/7 without breaks',
      'Contextual & intelligent responses',
      'Continuous learning capability',
      'Seamless integrations',
      'Cost-effective at scale',
    ],
    packages: [
      { name: 'Basic Chatbot', price: '₹35,000', desc: 'Website chatbot with FAQ training' },
      { name: 'Advanced Bot', price: '₹1,00,000', desc: 'Multi-channel bot with custom APIs' },
      { name: 'Enterprise AI', price: '₹3,00,000+', desc: 'Full AI suite with analytics & automation' },
    ],
    faq: [
      { q: 'How accurate are AI responses?', a: '95%+ accuracy after training on your data. Improves over time.' },
      { q: 'Can it handle multiple languages?', a: 'Yes! Supports 100+ languages automatically.' },
    ]
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing Campaigns',
    icon: Users,
    description: 'Data-driven influencer partnerships, campaign management, content creation, and ROI tracking.',
    basePrice: '₹50,000',
    priceRange: '₹50,000 - ₹10,00,000',
    timelineRange: '15-45 days',
    fullDescription: `End-to-end influencer marketing campaigns connecting your brand with the right creators for authentic reach and measurable results. We handle everything from identification to ROI tracking.`,
    detailedContent: `
**Services Included:**
• Influencer identification and vetting (50,000+ creator database)
• Outreach and negotiation on your behalf
• Campaign strategy and creative brief creation
• Content approval and guidelines management
• Performance tracking and real-time analytics
• ROI analysis and optimization recommendations
• Long-term partnership management and scaling
• Crisis management and reputation monitoring
• Competitor influencer analysis
• Post-campaign reporting with insights

**Influencer Tiers We Work With:**
• Nano-influencers (1K-10K followers): Highly engaged, authentic, niche communities
• Micro-influencers (10K-100K): Perfect engagement rate, cost-effective, targeted audiences
• Mid-tier (100K-1M): Significant reach, still reasonable rates, strong engagement
• Macro-influencers (1M+ followers): Maximum reach, best for brand awareness
• Celebrity endorsements (verified accounts): Highest credibility, premium pricing

**Campaign Types We Execute:**
• Product seeding (free product placements without explicit advertising)
• Sponsored posts (Instagram, TikTok, YouTube, Twitter)
• Long-term brand ambassadorships (3-12 months partnerships)
• Affiliate marketing (commission-based, performance-driven)
• Content collaborations (co-created content)
• Takeovers and guest posts (influencer runs your account)
• Product launches and exclusives (early access campaigns)
• Challenge campaigns and hashtag trends (viral potential)
• Unboxing and review videos
• Tutorial and how-to content

**What We Deliver:**
• Comprehensive influencer database filtered by niche
• Audience demographics and engagement analysis
• Proposal and contract management
• Creative brief and content guidelines
• Content calendar and scheduling automation
• Real-time analytics dashboard (views, clicks, conversions)
• Monthly performance reports with insights
• ROI calculations by influencer and campaign
• Influencer payment management
• Post-campaign analysis and recommendations

**Metrics We Track & Report:**
• Reach and impressions (how many people saw content)
• Engagement rate (likes, comments, shares %)
• Click-through rate (CTR) to your website
• Conversion rate (purchases/signups from influencer traffic)
• Cost per engagement (CPE)
• Cost per conversion (CPC)
• Audience sentiment analysis (positive/negative mentions)
• Brand lift measurement (awareness increase)
• Share of voice (vs competitors)
• Return on Ad Spend (ROAS equivalent)

**Average Campaign Performance We Deliver:**
✓ Engagement rate: 3-8% (industry average: 1.5%)
✓ Cost per conversion: 40% lower than paid ads
✓ Brand awareness lift: 25-40% increase
✓ Purchase intention: 30-50% increase
✓ User-generated content: 2-5x multiplier effect
✓ Audience growth: 10-25% during campaign period
✓ Follower quality: 95%+ real, engaged followers

**Why Choose Our Approach:**
✓ Data-driven influencer selection (not just follower count)
✓ Quality over quantity (fewer creators, better results)
✓ Transparent pricing and no hidden fees
✓ Real-time campaign monitoring and adjustments
✓ Post-campaign analysis and optimization
✓ Access to exclusive micro-influencer networks
✓ Relationship building for long-term partnerships
✓ Content calendar management
✓ Brand safety checks and content approval
✓ Fraud detection (fake followers/engagement identification)

**Popular Industries We Specialize In:**
• Fashion and Beauty (largest influencer marketing market)
• F&B and Restaurants
• E-commerce and Retail
• Technology and Gadgets
• Fitness and Wellness
• Travel and Hospitality
• Education and Online Courses
• SaaS and B2B Services
• Real Estate and Property
• Automotive

**Campaign Timeline:**
1. Week 1-2: Research, database building, outreach
2. Week 2-3: Negotiation and contract signing
3. Week 3-4: Creative briefing and content creation
4. Week 4-5: Content review and approval
5. Week 5-6: Publishing and live tracking
6. Week 6+: Ongoing monitoring and optimization
7. Week 8: Final reporting and recommendations

**Technology We Use:**
• Influencer database platform (our proprietary tool)
• Social media analytics (Brandwatch, Hootsuite, Later)
• Audience analysis (HypeAuditor, CreatorIQ)
• UTM tracking and link management
• Google Analytics 4 for conversion tracking
• Sentiment analysis tools
• Payment and contract management systems
    `,
    deliverables: [
      'Influencer database access (50K+ creators)',
      'Campaign strategy & creative brief',
      'Influencer outreach & negotiation',
      'Content approval & collaboration',
      'Performance tracking (Views, Engagement, Reach)',
      'Conversion attribution setup',
      'Weekly performance reports',
      'ROI analysis & optimization',
      'Post-campaign insights',
      'Relationship management',
    ],
    whyChoose: [
      'Access to 50,000+ pre-vetted influencers',
      'Micro to macro influencer options',
      'Data-driven influencer selection',
      'Real ROI tracking (not vanity metrics)',
      'Complete campaign management',
      'Transparent pricing & no hidden fees',
    ],
    packages: [
      { name: 'Micro Campaign', price: '₹50,000', desc: '5-10 micro-influencers (10K-100K followers)' },
      { name: 'Mid-tier Campaign', price: '₹2,00,000', desc: '3-5 mid-tier influencers (100K-1M followers)' },
      { name: 'Celebrity Campaign', price: '₹5,00,000+', desc: 'Celebrity + mid-tier influencers combo' },
    ],
    faq: [
      { q: 'How do you ensure authentic partnerships?', a: 'Vet every creator. No paid followers or artificial engagement.' },
      { q: 'What is realistic ROI?', a: '5-15x depending on product & audience fit. Transparent reporting.' },
    ]
  },
  {
    id: 'seo-performance',
    title: 'SEO & Performance',
    icon: BarChart2,
    description: 'Technical SEO, Core Web Vitals, content strategy to rank and convert.',
    basePrice: '₹20,000',
    priceRange: '₹20,000 - ₹1,50,000',
    timelineRange: 'Ongoing (3-6 months)',
    fullDescription: `Comprehensive SEO services that improve your search rankings, drive organic traffic, and increase conversions. We handle technical SEO, content strategy, and performance optimization.`,
    detailedContent: `
**Technical SEO Services:**
• Website audit and optimization (250+ optimization points)
• Core Web Vitals improvement (LCP, FID, CLS optimization)
• Page speed optimization (target: <2 second load time)
• Mobile optimization and responsiveness testing
• XML sitemaps and robots.txt setup
• Structured data and schema markup (JSON-LD)
• SSL certificate and HTTPS setup
• Duplicate content detection and fixes
• Broken link fixes and redirects (301/302)
• Internal linking strategy optimization
• Crawl budget optimization
• Site architecture improvements
• Mobile-first indexing compliance

**On-Page SEO Optimization:**
• Keyword research and competitor analysis
• Title tag and meta description optimization
• Header tag (H1, H2, H3) structure
• Image optimization and descriptive alt text
• URL structure improvement and canonicalization
• Content formatting for readability (readability score)
• Focus keyword optimization (keyword density)
• Semantic SEO optimization
• User intent matching
• Click-through rate (CTR) optimization

**Content Strategy & Creation:**
• Blog content creation (SEO-optimized articles)
• Keyword research (search volume, difficulty, intent analysis)
• Content calendar planning (12-month strategy)
• Long-form content (2000-5000 word guides)
• Pillar content and topic clusters (topic authority)
• Content updates and refreshes (boost old content)
• FAQ optimization and structured FAQ schema
• Schema markup for content (recipes, reviews, etc.)
• Copywriting for conversions
• Content gap analysis vs competitors

**Off-Page SEO Services:**
• Backlink analysis and strategy
• High-authority link building (DA 50+ domains)
• Guest posting opportunities
• Local SEO optimization
• Google Business Profile optimization
• Local citation building (100+ directories)
• Review management and reputation building
• Brand mention monitoring
• Local schema markup (local business)
• Map pack optimization (local 3-pack)

**Advanced SEO Features:**
• Competitor analysis (find gaps and opportunities)
• Search intent analysis (informational, commercial, transactional)
• Semantic SEO (topic relevance and relationships)
• Core algorithm updates monitoring
• Featured snippet optimization
• Voice search optimization
• Mobile SERP optimization
• International SEO (multi-language/country setup)
• E-A-T signals optimization (Expertise, Authoritativeness, Trustworthiness)

**Average Results We Deliver (6-12 months):**
✓ 150-300% increase in organic traffic
✓ 30-50 keyword rankings (page 1)
✓ 5-15 keyword rankings (position 1-3)
✓ 40-60% improvement in page speed
✓ 100 score on Google PageSpeed Insights
✓ 50% increase in conversion rate
✓ Cost per acquisition 60% lower than ads
✓ 200% improvement in visibility score

**Monthly Service Includes:**
• Keyword ranking tracking (all target keywords)
• Competitor analysis updates (quarterly deep dive)
• Core Web Vitals monitoring and alerts
• Traffic and conversion analytics reporting
• Content performance recommendations
• Monthly performance report (20+ pages)
• Strategic recommendations and optimization ideas
• Quarterly strategy reviews with your team
• Access to SEO dashboard (real-time metrics)
• Email support (24-hour response time)

**SEO Tools We Use:**
• SEMrush (keyword research, competitor analysis)
• Ahrefs (backlink analysis, content ideas)
• Moz (domain authority tracking, SEO insights)
• Google Search Console (search performance)
• Google Analytics 4 (behavior and conversion tracking)
• Lighthouse (page speed and SEO audits)
• Screaming Frog (technical SEO crawling)
• Copyscape (duplicate content detection)
• Schema markup tester (structured data validation)

**Industries We Specialize In:**
• E-commerce (Shopify, WooCommerce, custom platforms)
• SaaS and B2B Software
• Local Businesses (dentists, plumbers, restaurants)
• Healthcare and Medical
• Real Estate and Property
• Legal Services
• Financial Services
• Technology and Gadgets
• Education and Online Courses
• Travel and Hospitality

**Timeline to Results:**
• Month 1-2: Technical fixes, initial content optimization
• Month 2-4: Content creation, link building begins
• Month 4-6: Ranking improvements visible (niche keywords)
• Month 6-12: Competitive keyword rankings
• Month 12+: Consistent top rankings, traffic plateau

**Why Choose Our SEO Approach:**
✓ White-hat techniques only (no black-hat SEO)
✓ Long-term sustainable results (not temporary rankings)
✓ Data-driven strategy (based on analytics, not guesses)
✓ Dedicated SEO specialist assigned
✓ Transparent reporting with real metrics
✓ Continuous optimization and testing
✓ Industry best practices and latest algorithm updates
✓ Proven track record (500+ clients across industries)
    `,
    deliverables: [
      'SEO audit (Technical, On-page, Backlink)',
      'Keyword research & strategy',
      'On-page optimization',
      'Technical SEO fixes',
      'Core Web Vitals improvement',
      'Content calendar & creation',
      'Internal linking strategy',
      'Backlink building & outreach',
      'Monthly ranking reports',
      'Competitor analysis',
      'Monthly optimization calls',
    ],
    whyChoose: [
      'Rank higher on Google (1-3 position)',
      'Sustainable organic traffic growth',
      '3x more qualified leads than ads',
      'Expert SEO strategist assigned',
      'Transparent reporting & analytics',
      'Future-proof optimization',
    ],
    packages: [
      { name: 'Starter SEO', price: '₹20,000', desc: 'Monthly SEO for local keywords' },
      { name: 'Growth SEO', price: '₹50,000', desc: 'Multi-keyword national rankings' },
      { name: 'Enterprise SEO', price: '₹1,00,000+', desc: 'Competitive national/international keywords' },
    ],
    faq: [
      { q: 'How long to see results?', a: '6-12 weeks for competitive keywords, 2-4 weeks for niche keywords.' },
      { q: 'Do you guarantee rankings?', a: 'No. But we guarantee 3x increase in organic traffic or money back.' },
    ]
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & UI/UX',
    icon: Globe,
    description: 'Logo, visual identity, Figma design systems — cohesive brand from day one.',
    basePrice: '₹15,000',
    priceRange: '₹15,000 - ₹2,00,000',
    timelineRange: '7-20 days',
    fullDescription: `Complete brand identity and user experience design that makes your business memorable and your products easy to use. From logo to design systems.`,
    detailedContent: `
**Brand Identity Services:**
• Logo design (3 unique concepts, unlimited revisions)
• Logo variations (horizontal, vertical, stacked, icon-only)
• Color palette development (primary, secondary, accent colors)
• Typography selection and pairing guide
• Brand guidelines document (50+ pages)
• Tagline and brand voice development
• Visual brand elements (patterns, icons, illustrations)
• Brand mood board and inspiration collection
• Brand story and positioning statement
• Target audience persona development

**Visual Identity Deliverables:**
• Business card design (multiple layout options)
• Letterhead and stationery design
• Email signature templates
• Email template design (newsletters, promotional)
• Social media templates (posts, stories, reels)
• Presentation deck templates (Google Slides, PowerPoint)
• Packaging design and labels
• Print materials (brochures, flyers, posters)
• Billboard and outdoor advertising designs
• Favicon and app icon design

**UI/UX Design Services:**
• User research and competitor analysis
• User persona development
• Wireframing (low-fidelity layouts and flows)
• User flow mapping (how users navigate)
• High-fidelity mockups with design details
• Interactive prototypes (clickable demos)
• Figma design system and component library
• Component specs and design documentation
• Accessibility compliance (WCAG 2.1 AA standards)
• Mobile and responsive design variations

**Design System Deliverables:**
• Figma component library (50+ pre-built components)
• Figma tokens (colors, typography, spacing)
• Complete documentation (usage guidelines)
• Interactive component guidelines and states
• Responsive design patterns (mobile, tablet, desktop)
• Animation and interaction specifications
• Dark mode guidelines and implementation
• Typography scale and hierarchy
• Icon system and guidelines
• State management (hover, active, disabled, loading)

**What We Create:**
• Complete brand style guides (30-50 pages)
• Logo and icon systems
• Typography hierarchy with specifications
• Color systems with accessibility compliance (WCAG AA)
• Button and form component guidelines
• Responsive design patterns and layouts
• Dark mode guidelines (if applicable)
• Animation and interaction guidelines
• Brand photography guidelines
• Voice and tone guidelines

**Design Process:**
1. Discovery: Brand strategy and user research (Week 1)
2. Ideation: Multiple logo concepts and mood boards (Week 2)
3. Design: High-fidelity mockups and refinement (Week 3)
4. Iteration: Client feedback and revisions (Week 4)
5. Specification: Developer handoff documents (Week 5)
6. Support: Post-launch design updates and optimization (ongoing)

**Tools & Platforms We Use:**
• Figma (cloud-based design system and prototypes)
• Adobe Creative Suite (Photoshop, Illustrator, XD)
• InVision (interactive prototypes and collaboration)
• Principle (advanced animation prototypes)
• Framer (interactive design with code)
• Abstract (design version control)
• Penpot (open-source Figma alternative)

**Design Specialties:**
• E-commerce websites and apps
• SaaS dashboards and applications
• Mobile app design (iOS and Android)
• Web application interfaces
• Marketing websites and landing pages
• Healthcare and medical apps
• FinTech and banking interfaces
• Education platforms
• Social media applications
• Admin dashboards and tools

**Why Professional Design Matters:**
✓ First impressions: 94% based on design
✓ Brand recognition: 80% is visual
✓ User experience: 38% leave if poorly designed
✓ Conversion lift: 200% improvement with good UX
✓ Trust building: Professional design = credibility
✓ User retention: Better UX = 3x higher engagement
✓ Support costs: Intuitive design = fewer support tickets
✓ Development time: Design system = 40% faster coding

**Typical Deliverables Package:**
• 3 logo concepts (2 revisions each)
• Complete brand guidelines (20-50 pages)
• 10-15 social media and email templates
• Figma design system with 50+ components
• Mobile app UI kit (if applicable)
• Web design mockups (all major pages)
• Interactive prototype (clickable demo)
• Design handoff documentation for developers
• Source files (Figma, fonts, assets)
• Commercial usage rights (100% ownership)

**Timeline by Project Type:**
• Logo + branding: 4-6 weeks
• Website design: 6-8 weeks
• Mobile app design: 8-12 weeks
• Design system: 4-6 weeks
• Complete rebrand: 12-16 weeks

**After Design Completion:**
• Full ownership of all designs and files
• Commercial usage rights
• Free 1-month design support
• Design update consultation (quarterly)
• Technology recommendations for developers
• Design specification document for handoff
• Figma file access and editing capabilities
• Brand guidelines update support
    `,
    deliverables: [
      'Brand strategy & positioning',
      'Logo design (3 concepts, 3 revisions)',
      'Color palette & typography system',
      'Brand guidelines document',
      'Business card & stationery design',
      'Social media template designs',
      'UI/UX design for website/app',
      'Figma design system (component library)',
      'Mobile app UI design',
      'Interactive prototypes',
      'Design handoff documentation',
    ],
    whyChoose: [
      'Cohesive brand identity from day one',
      'Professional design system included',
      'Scalable design framework',
      'Perfect for developer handoff',
      'Brand strategy included',
      'Premium design tools (Figma)',
    ],
    packages: [
      { name: 'Essentials', price: '₹15,000', desc: 'Logo + color palette + guidelines' },
      { name: 'Complete Brand', price: '₹50,000', desc: 'Logo + brand kit + web UI design' },
      { name: 'Enterprise Brand', price: '₹1,50,000+', desc: 'Full brand + design system + multiple apps' },
    ],
    faq: [
      { q: 'Do you provide source files?', a: 'Yes! All Figma files, fonts, and assets provided.' },
      { q: 'Can I use design for other projects?', a: 'Yes, design ownership is yours completely.' },
    ]
  },
]

// Portfolio item details for Surprise Planner
export const SURPRISE_PLANNER_DETAILS = {
  title: 'Surprise Planner',
  subtitle: 'Event Planning Platform for Special Occasions',
  fullDescription: `
A comprehensive romantic event planning platform designed to make special moments unforgettable. Whether it's a marriage anniversary, girlfriend's birthday, or a romantic surprise for your wife, our platform makes planning effortless and creates viral-worthy moments.
  `,
  detailedContent: `
**💕 Platform Overview:**
The Surprise Planner is a full-stack event planning platform built to help couples, friends, and loved ones plan perfect special occasions. It combines vendor marketplace, budget tracking, collaboration tools, and social media integration to create unforgettable moments.

**📱 Core Features:**

**1. Event Planning Dashboard:**
• Easy event planning with step-by-step guides
• Real-time collaboration for couples/friends
• Event type selection (anniversary, birthday, proposal, date night, etc.)
• Customizable timeline and checklist
• Budget allocation and tracking
• Expense manager with receipt uploads
• Payment splitting between partners (for couples)
• Reminder system (automated notifications)

**2. Vendor Marketplace:**
• 500+ pre-vetted vendors (florists, decorators, caterers, photographers)
• Vendor categories and search filters
• Vendor reviews and ratings (4.8/5 average)
• Vendor comparison tool (side-by-side pricing)
• Direct messaging with vendors
• Booking and contract management
• Payment processing (Razorpay integration)
• Vendor performance tracking

**3. Special Occasion Templates:**
• Anniversary surprise packages (romantic themes)
• Girlfriend's birthday experiences (Instagram-worthy setups)
• Romantic dinner planning (restaurant, home, outdoor)
• Proposal planning (expert guidance, step-by-step)
• Wedding planning and coordination
• Valentine's Day special events
• Engagement party planning
• Date night planning (surprise ideas)
• Husband-wife surprise reconciliation (romantic redemption)
• Group celebrations (friends, family gatherings)

**🎯 Tools & Features for Viral Moments:**

• Event countdown timer (shareable on Instagram/WhatsApp/Facebook)
• Before-After photo gallery (transformation showcase)
• Guest interaction tracking (RSVP, RSVPs, message wall, guestbook)
• Live event moments posting (real-time updates)
• Surprise video montage creator (AI-powered, auto-edited)
• Guest testimonial recording system (video testimonials)
• Social media auto-posting (Instagram Stories, Reels, TikTok)
• Hashtag campaign generator (branded event hashtags)
• Event recap video creation (AI-assisted, 2-5 min compilations)
• Boomerang and GIF integration
• Instagram Stories template pack
• TikTok trend integration
• YouTube Shorts optimization

**🌟 Romantic Website Features:**

• Couples dashboard (synchronized real-time updates)
• Love story timeline (from first date to today)
• Shared wish lists and ideas (mood board)
• Budget co-management (split costs)
• Vendor comparison tool (price, ratings, availability)
• Venue virtual tours (3D walkthroughs)
• Payment splitting between partners (easy accounting)
• AI-powered suggestion engine (learns preferences)
• Surprise planner mode (hide details from partner)
• Love letter and note templates
• Romantic quote library
• Playlist creator and sharing

**💝 Event Ideas & Packages:**

**Anniversary Surprises (₹15,000-₹1,00,000):**
• Romantic dinner setups with personalized decor
• Flower arrangements with hidden engagement ring display
• Surprise video montage from friends/family (5-10 min)
• Candlelit setup with favorite music playlist (Spotify integration)
• Memory lane photo decoration (chronological display)
• Champagne or wine pairing services
• Dessert with anniversary cake topper and personalization
• Hotel room decoration (if staying away)
• Sunrise/sunset surprise location planning
• Romantic getaway package coordination

**Girlfriend's Birthday Special (₹10,000-₹75,000):**
• Surprise party coordination (home/café/venue)
• Instagram-worthy photo booth setup (branded backdrop)
• Personalized gift wrapping and presentation
• Birthday video from influencers/celebrities (custom messages)
• Cake cutting ceremony with professional photography
• Decorations themed to her interests (hobby-specific)
• Playlist curation and DJ services (if needed)
• Gift suggestion AI (analyzes her social media interests)
• Surprise guest coordination
• Birthday countdown and anticipation building

**Romantic Dinner Planning (₹8,000-₹50,000):**
• Venue selection and reservation
• Menu customization with chef consultation
• Table decoration and ambiance setup (fairy lights, candles)
• Playlist and ambient music selection
• Photography/videography services (candid moments)
• Wine or cocktail pairing recommendations
• Surprise element coordination (flowers, dessert)
• Private dining room booking (if preferred)
• Dietary restrictions and allergies management
• Special occasion plating and presentation

**Proposal Planning (₹20,000-₹2,00,000):**
• Venue scouting and booking (romantic locations)
• Ring security and safe handling
• Professional photography/videography (4K)
• Guest coordination (surprise attendees)
• Flower arrangements and decor (Instagram-worthy)
• Video montage preparation (pre-proposal)
• Photographer positioning strategy (perfect moments)
• Weather backup plans and contingencies
• Nervous groom support and advice
• Post-proposal celebration planning

**Husband-Wife Reconciliation (₹12,000-₹60,000):**
• Romantic apology gift package planning
• Couples spa and wellness experience
• Getaway/vacation planning (romantic destination)
• Couples photo shoot (professional styling)
• Love letter or handwritten note design
• Romantic dinner setup (intimate atmosphere)
• Couples activities and experience planning
• Therapist referral and support (if needed)
• Jewelry or special gift selection
• Long-term relationship strengthening activities

**🚀 Viral Content Features:**

• Instagram Reels template: "The Surprise Reaction" (auto-edited clips)
• TikTok trending: "Guess What He/She Did" trend integration
• YouTube Shorts: Event highlights compilation (auto-generated)
• Before-After transformation posts (engagement boost)
• Couple challenges and trending sounds
• Social media calendar with posting suggestions
• Hashtag trending tracker (#SurpriseSuccessStories)
• Influencer sharing incentives (tag us, get featured)
• User-generated content collection (UGC)
• Viral campaign ideas and seasonal trends
• Social media best time to post (AI-optimized)

**💰 Business Model & Revenue:**

• Commission from vendor bookings (15-25% of booking value)
• Premium packages with enhanced features (₹99-₹499/month subscription)
• Sponsored content from brands (florists, venues, jewelry)
• Affiliate marketing (gift shops, e-commerce, electronics)
• Partnership with gift delivery services (commission)
• Premium event photography packages
• Videography add-ons (drone, professional editing)
• Event planning consultation services (₹5,000-₹10,000/hour)
• Sponsored event ideas and product placements
• Advertising from wedding/event businesses

**📊 Results Achieved:**

✓ 500+ events successfully planned
✓ 4.8/5 star rating (average user satisfaction)
✓ 60% repeat customers in 6 months
✓ 40,000+ active monthly users
✓ ₹3.5 Crore GMV (Gross Merchandise Value) in year 1
✓ 250+ vendor partnerships
✓ 2,000+ viral social media posts shared
✓ 15% month-on-month growth rate
✓ 1,200+ positive customer reviews
✓ Featured in 5+ media publications

**🎯 Target Audience:**

• Young couples (25-45 years old)
• Long-distance relationships (coordinating surprises)
• Engaged couples (proposal and engagement planning)
• Event organizers (professional use)
• Indian diaspora (planning events remotely)
• Gift-givers looking for unique experiences
• Content creators (for viral moments)
• Social media lovers (Instagram, TikTok enthusiasts)
• Anniversary celebrators (yearly tradition)

**💡 Unique Value Propositions:**

1. **AI-Powered Suggestions:** ML algorithms learn from social media and user behavior
2. **Vendor Ecosystem:** 500+ pre-vetted vendors ensuring quality
3. **Viral Content Integration:** Built for TikTok, Instagram, YouTube Shorts
4. **Couple Collaboration:** Real-time synchronized planning dashboard
5. **Budget Intelligence:** Smart allocation based on occasion type
6. **Surprise Coordination:** Dedicated surprise planning mode
7. **Content Creation:** Built-in tools for shareable moments
8. **Insurance & Guarantees:** Vendor guarantee program for quality assurance

**🔧 Technology Stack:**

• Frontend: React, Next.js, TypeScript
• Mobile: React Native (iOS and Android)
• Backend: Node.js, Express, Python
• Database: MongoDB (flexible data structure)
• Payment: Razorpay, PayPal integration
• Video: FFmpeg for AI video generation
• AI: GPT-4 and Claude for suggestions
• Storage: AWS S3 for photos/videos
• Real-time: WebSockets for couple collaboration
• Analytics: Mixpanel, Google Analytics
• Maps: Google Maps for venue discovery
• Calendar: Calendar integration for availability

**🎨 Design Philosophy:**

• Romantic aesthetic with warm colors (gold, rose, blush)
• Ease of use (grandmother-friendly interface)
• Mobile-first approach (90% on smartphones)
• Dark theme with gold accents (premium feel)
• Smooth animations for emotional connection
• Accessibility first (inclusive design, WCAG compliance)
• Touch-friendly buttons and navigation
• Instagram-worthy design (photo-optimized)
• Fast loading (< 2 seconds)

**🌟 Why This Platform Succeeds:**

This platform solves the biggest pain points in special occasion planning:
1. **Coordination:** Multiple vendors, guests, timeline management
2. **Budgeting:** Expense tracking across multiple services
3. **Stress Reduction:** Guided planning reduces overwhelm
4. **Viral Potential:** Built-in sharing and content tools
5. **Vendor Discovery:** Unified marketplace vs scattered search
6. **Memories:** Automatic collection of photos and videos
7. **Romance:** Focus on making moments special
8. **Social Proof:** Ratings and reviews build trust

The platform isn't just a tool; it's a romantic assistant that turns plans into unforgettable memories.
  `,
  results: [
    '500+ events successfully planned',
    '4.8/5 average customer rating',
    '60% repeat customer rate (strong retention)',
    '₹3.5 Crore GMV in year 1',
    '40,000+ monthly active users',
    '2,000+ viral social posts shared',
    '250+ vendor partnerships',
    '15% month-on-month growth rate',
    '1,200+ positive customer reviews',
    'Featured in 5+ media publications'
  ],
  specialHighlights: {
    romanticWebsite: 'Perfect for wives, girlfriends, and loved ones - create a personalized romantic experience',
    viralPotential: 'Built-in social media integration for Instagram Reels, TikTok, and YouTube Shorts',
    tools: 'AI-powered video creator, countdown timers, social media scheduler, vendor comparison tools',
    eventIdeas: 'Anniversary surprises, birthday parties, proposals, romantic dinners, reconciliation experiences',
    targetAudience: 'Young couples, long-distance relationships, content creators, event planners'
  }
}


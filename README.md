# BrandNest — AI-Powered Digital Agency Website

**Production-ready Next.js 14 website for BrandNest**, a premium AI-powered digital agency in Delhi NCR offering full-stack web development, AI-enhanced video production, commercial ads, and AI integration services.

## 🚀 Features

- **Three.js Animated Hero** — Interactive 3D particles, wireframe shapes, and smooth mouse parallax
- **SEO-Optimized** — JSON-LD structured data, comprehensive meta tags, Sitemap, Robots.txt
- **AI-Powered Design System** — Premium warm white + gold color palette, elegant typography
- **Lead Generation** — Integrated contact form with Resend email API + WhatsApp CTA
- **Responsive & Fast** — Mobile-first, optimized images, Core Web Vitals ready
- **Framer Motion Animations** — Smooth scroll animations and micro-interactions throughout
- **Dark & Light Modes** — Professional dark hero with light service sections

## 📋 Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| 3D Graphics | Three.js (r165) |
| Animations | Framer Motion v11 |
| Email | Resend API |
| Icons | Lucide React |
| Typography | Cormorant Garamond + DM Sans |
| Deployment | Vercel (India region: bom1) |
| Language | TypeScript 5.4 |

## 📁 Project Structure

```
brandnest/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Home page with JSON-LD schema
│   ├── globals.css             # Global styles & animations
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API endpoint
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # Robots.txt configuration
├── components/
│   ├── Navbar.tsx              # Fixed navigation with mobile menu
│   ├── HeroThree.tsx           # Three.js animated hero section
│   ├── LeadForm.tsx            # Contact form component
│   ├── TrustBar.tsx            # Trusted brands section
│   ├── Services.tsx            # 4 main service offerings
│   ├── WhyUs.tsx               # 6 key differentiators
│   ├── AISection.tsx           # AI benefits (3x faster, 2x ROI)
│   ├── Process.tsx             # 6-step workflow visualization
│   ├── Testimonials.tsx        # Client success stories
│   ├── FAQ.tsx                 # 6 FAQ items with accordion
│   ├── CTABanner.tsx           # Final call-to-action section
│   └── Footer.tsx              # 5-column footer with social links
├── public/
│   ├── favicon.ico             # Placeholder
│   ├── og-image.jpg            # Placeholder for social sharing
│   └── grain.svg               # Subtle grain texture overlay
├── .env.local                  # Environment variables (not committed)
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind design system
├── postcss.config.js           # PostCSS with Tailwind & Autoprefixer
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── vercel.json                 # Vercel deployment config

```

## 🎨 Design System

### Colors
```css
--bg: #FAFAF8           /* Warm white background */
--surface: #F4F2ED      /* Cream card surfaces */
--border: #E8E4DC       /* Subtle borders */
--text: #1A1814         /* Near-black text */
--muted: #6B6560        /* Secondary text */
--gold: #B8965A         /* Primary accent (only color) */
--gold-light: #D4B483   /* Hover state */
--gold-dark: #8A6E3E    /* Pressed state */
--dark: #0C0A07         /* Hero + footer background */
```

### Typography
- **Display**: Cormorant Garamond (700 italic, 48–72px)
- **Body**: DM Sans (400, 15px, 1.8 line-height)
- **Labels**: DM Sans 500, uppercase, 0.12em tracking

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm 9+
- Vercel account (for deployment)
- Resend account for email API

### Local Development

1. **Clone and install**:
   ```bash
   cd BrandNest
   npm install
   ```

2. **Configure environment**:
   Edit `.env.local`:
   ```bash
   RESEND_API_KEY=re_xxxxx...          # Your Resend API key
   CONTACT_EMAIL=hello@brandnest.in    # Receive form submissions here
   NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX   # WhatsApp number (without +)
   NEXT_PUBLIC_PHONE=+91XXXXXXXXXX     # Display phone number
   NEXT_PUBLIC_SITE_URL=https://brandnest.in
   ```

3. **Start dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build      # Create optimized production build
npm start          # Start production server
npm run lint       # Run ESLint
```

## 📝 Pages & Sections

### Homepage (`/`)
1. **Hero with 3D Animation** — Particles, wireframes, pulsing sphere, mouse parallax
2. **Trust Bar** — Brand logos (Google, Meta, Amazon, etc.)
3. **Services** — 4 main offerings: Web Dev, Video, Ads, AI Integration
4. **Why Us** — 6 unique value propositions
5. **AI Stack Section** — 3x faster, 2x ROI, ∞ scalability
6. **Process** — 6-step workflow from discovery to growth
7. **Testimonials** — 4 client success stories with 5-star ratings
8. **FAQ** — 6 common questions with accordion UI
9. **CTA Banner** — Final conversion push with WhatsApp + email CTAs
10. **Footer** — Links, social icons, contact info, copyright

## 🔗 Key Components

### `HeroThree.tsx` — Three.js 3D Hero
- **1800 gold particles** with additive blending
- **900 white micro-particles** for depth
- **4 wireframe geometries**: Icosahedron, Octahedron, 2 Torus rings, pulsing sphere
- **Mouse parallax** tracking with smooth easing
- **Network connecting lines** (40 line segments)
- Responsive canvas with auto-resize
- Smooth animations at 60fps

### `LeadForm.tsx` — Contact Form
- Name, Phone, Company, Service dropdown, Message (optional)
- Real-time form state management
- Success/error messages
- Disabled submit while loading
- Connects to `/api/contact` endpoint

### `Footer.tsx` — 5-Column Layout
- Logo + about + social icons
- Quick Links (7 items)
- Services (6 offerings)
- Support (5 policy links)
- Contact Info (phone, email, address)

## 📧 Email Integration (Resend)

Contact form submissions trigger an email to your inbox with:
- Sender name, phone, company, service interest
- Quick action buttons (WhatsApp + Call)
- Professional HTML template with BrandNest branding
- India Standard Time (IST) timestamp

**API Route**: `POST /api/contact`
**Request Body**:
```json
{
  "name": "Rajesh Patel",
  "phone": "+91-98765-43210",
  "company": "TechVenture",
  "service": "Website Development",
  "message": "Looking to build a Next.js SaaS..."
}
```

## 🔍 SEO Features

✓ **JSON-LD Schema** — LocalBusiness + FAQPage structured data
✓ **Meta Tags** — Title, description, keywords, OG tags, Twitter card
✓ **Robots.txt** — Allow all, with sitemap link
✓ **Sitemap** — Auto-generated on build
✓ **Google Fonts** — Via `next/font` (no external CDN)
✓ **Canonical URL** — Prevents duplicate content
✓ **Mobile-Friendly** — Responsive design passes Core Web Vitals
✓ **Keywords** — 12 high-intent Delhi/Noida/India local terms

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/brandnest.git
   git push -u origin main
   ```

2. Connect to Vercel:
   - Import project from GitHub
   - Set environment variables in Vercel dashboard
   - Select India region (bom1)
   - Deploy!

3. Custom domain:
   - Add `brandnest.in` in Vercel settings
   - Update DNS records

### Environment Variables (Vercel)

Set these in your Vercel project settings:
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_WHATSAPP`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_SITE_URL`

## 📱 Responsive Breakpoints

- **Mobile**: 360px – 639px
- **Tablet**: 640px – 1023px
- **Desktop**: 1024px+

All components use Tailwind's `md:` and `lg:` prefixes for responsive behavior.

## 🎯 Performance

- **First Load JS**: ~270 kB (optimized)
- **Route (/)**: 183 kB
- **Shared chunks**: 87.3 kB
- **Three.js loads client-side only** (no server rendering)
- **Images**: Use `next/image` with srcset for optimization

## 🔐 Security

- **X-Content-Type-Options**: nosniff
- **X-Frame-Options**: DENY
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin
- **No hardcoded secrets** (all in .env.local)

## 📚 Customization Guide

### Change Colors
Edit `tailwind.config.js` in the `colors` extend section, or directly in `app/globals.css` CSS variables.

### Update Copy
Edit text directly in component files:
- Hero: [HeroThree.tsx](components/HeroThree.tsx#L130)
- Services: [Services.tsx](components/Services.tsx#L8)
- Footer: [Footer.tsx](components/Footer.tsx#L30)

### Add New Section
1. Create component in `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to JSX in proper order

### Change Fonts
Edit `app/layout.tsx`:
```tsx
const cormorant = Cormorant_Garamond({ ... })
const dmSans = DM_Sans({ ... })
```

## 🐛 Troubleshooting

### Build Fails with ESLint Errors
→ Check for unescaped quotes in JSX. Use `{`'`}` for apostrophes.

### Three.js not rendering
→ Ensure `HeroThree.tsx` has `'use client'` at top. Three.js must render client-side.

### Emails not sending
→ Verify `RESEND_API_KEY` is valid and `CONTACT_EMAIL` exists in Resend dashboard.

### Fonts not loading
→ Check `.env.local` is set. Fonts load via `next/font/google` automatically.

### WhatsApp links not working
→ Verify `NEXT_PUBLIC_WHATSAPP` is a valid number without + (e.g., `919876543210`).

## 📖 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Three.js Docs](https://threejs.org/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Resend Email API](https://resend.com)
- [Vercel Deployment](https://vercel.com/docs)

## 📄 License

This website template is for BrandNest. All rights reserved.

---

**Built with ♥ using Next.js 14, Three.js, Tailwind CSS, and Framer Motion**

**Questions?** Contact: hello@brandnest.in | WhatsApp: [+91 XXXXXXXXXX](https://wa.me/91XXXXXXXXXX)

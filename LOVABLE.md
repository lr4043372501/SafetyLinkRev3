# SafetyLink — Lovable Build Brief

> **How to use this document:** Copy the prompt in the **"Lovable Prompt"** section below and paste it directly into [lovable.dev](https://lovable.dev) to start a new project. The sections that follow are supplemental design reference to paste in follow-up messages as needed.

---

## Lovable Prompt

Paste this entire block into Lovable to initiate the build:

---

```
Build a complete, production-quality marketing website for SafetyLink — an OSHA compliance 
and safety management SaaS platform for small and mid-sized businesses.

USE THIS AS YOUR WIREFRAME AND NAVIGATION REFERENCE:
https://sf3.lr4043372501.workers.dev/

Analyze that live site for:
- Page structure and navigation menu layout
- Footer structure (3-column)
- Section order on each page
- Form layout on the consultation page
- Overall information hierarchy

Then build a NEW, visually upgraded version of that site with the following requirements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Product name: SafetyLink
Tagline: Compliance, made human.
Brand promise: The calm, expert partner that turns OSHA's rulebook into something 
               a busy operator can actually run.

Three core promises:
1. Expertise on call — OSHA-authorized humans, not just software
2. Built for the field — bilingual, mobile-first, designed for hard hats and gloves
3. Provably safer, provably cheaper — measurable injury reduction, hard ROI

Target audience: Safety managers and operations leads at SMBs in construction, 
manufacturing, logistics, and healthcare.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAL DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COLOR PALETTE:
Primary navy:   #14375B  (buttons, headlines, nav background)
Darkest navy:   #0B2238  (hero backgrounds, footer)
Accent green:   #28B432  (CTA buttons, success states, highlights)
Hover green:    #1FA12F
Body text:      #0E1620
Muted text:     #475467
Light gray:     #F8FAFC  (alternating section backgrounds)
Border:         #E4E7EC
White:          #FFFFFF

SAFETY STATUS COLORS:
Success:  #28B432 background #E8F8E9
Warning:  #F59E0B background #FEF3C7
Danger:   #D92D20 background #FEE4E2

TYPOGRAPHY:
Primary font:   Source Sans 3 (Google Fonts) — weights 300, 400, 600, 700, 800
Monospace:      IBM Plex Mono — for IDs, codes, audit references only

Import URL:
https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap

Headlines:  Source Sans 3, weight 800, -0.02em letter-spacing, sentence case
Body copy:  Source Sans 3, weight 400, 16px, 1.5 line-height
Buttons:    Source Sans 3, weight 600, sentence case

CASING RULES — STRICTLY ENFORCED:
- Sentence case for ALL headlines, buttons, nav items, labels ("Start an inspection")
- NEVER title case except for the brand name "SafetyLink" and legal document titles
- ALL CAPS only for eyebrow micro-labels (e.g. "TRUSTED BY SAFETY PROS")
- No emoji anywhere in the UI

SPACING: 4pt base grid — use 8/16/24/32/48/64/96px increments
BORDER RADIUS: 10px default (cards, buttons, inputs), 999px for badge pills
SHADOWS: Navy-tinted, subtle — rgba(11,34,56,0.08) — never harsh black shadows

ICONS: Use Lucide React icons exclusively — no emoji, no unicode arrows
Key icons: shield-check, clipboard-check, hard-hat, alert-triangle, 
           file-warning, check-circle, users, building, truck, 
           stethoscope, calendar, bell, arrow-right, menu, x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGES TO BUILD (match wireframe URL structure)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. / — Homepage
2. /platform — Platform features
3. /services — Services overview
4. /industries — Industries served
5. /resources — Resource library / blog
6. /consultation — Request a free consultation (lead form)
7. /privacy — Privacy policy
8. /terms — Terms of service
9. /contact — Contact support
10. /accessibility — Accessibility statement

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NAVIGATION (persistent across all pages)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEADER:
- Sticky on scroll, glassmorphism: white at 90% opacity + backdrop-filter blur(12px)
- Left: SafetyLink logo (text wordmark styled in navy #14375B, weight 800)
- Center-right: nav links — Platform | Services | Industries | Resources
- Far right: "Request a free consultation" — filled green button (#28B432, white text)
- Mobile: hamburger menu that slides in from right as a full-height drawer
- Active page: green underline indicator on nav link

FOOTER (3 columns):
- Column 1: Logo + tagline "Compliance, made human." + copyright
- Column 2: Product links — Platform, Services, Industries, Resources, Request a consultation
- Column 3: Legal + support — Privacy Policy, Terms of Service, Accessibility, Contact Support
- Background: navy-900 (#0B2238), white text
- Bottom bar: thin separator + "© 2025 SafetyLink. All rights reserved."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOMEPAGE SECTION STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1 — HERO
- Full-viewport height (100vh)
- Background: dark navy (#0B2238) with a high-quality construction/worksite photograph 
  layered beneath at 35% opacity (overlay effect, not replacing the dark background)
- Use Unsplash image: https://images.unsplash.com/photo-1504307651254-35680f356dfd 
  (construction site, workers in PPE) as the hero background
- Eyebrow: "OSHA-AUTHORIZED SAFETY MANAGEMENT" in green (#28B432), all caps, tracking wide
- H1 headline (white, 60px bold):
  "Stop chasing OSHA paperwork.
   Start running a safer site."
- Sub-headline (white, 20px, 70% opacity):
  "SafetyLink combines expert guidance with powerful software for audits, 
   inspections, and training — built for the field."
- Two CTA buttons side by side:
  1. "Request a free consultation" — filled green (#28B432)
  2. "See how it works" — outlined white border, white text
- Scroll indicator arrow bouncing gently at bottom

SECTION 2 — TRUST BAR
- White background, centered logos / text
- Title: "Trusted by safety professionals across"
- Show 4 industry icons with labels: Construction · Manufacturing · Logistics · Healthcare
- Subtle top and bottom 1px borders (#E4E7EC)

SECTION 3 — CORE FEATURES (3-column card grid)
- Light gray background (#F8FAFC)
- Eyebrow: "WHAT SAFETYLINK DOES"
- Section headline: "Everything your safety program needs, in one place"
- 3 cards with Lucide icon, headline, and 2-sentence description:
  Card 1: shield-check icon — "OSHA-authorized expertise" — Real safety pros, not just AI
  Card 2: clipboard-check icon — "Digital audits & inspections" — Replace paper, go mobile
  Card 3: hard-hat icon — "Bilingual training" — Spanish + English, field-ready

SECTION 4 — HOW IT WORKS (3 steps)
- White background, alternating layout or numbered steps
- Eyebrow: "THE PROCESS"
- Headline: "From signup to safer site in 3 steps"
- Step 1: "We assess your site" — icon: search
- Step 2: "We build your program" — icon: file-text
- Step 3: "You run with it" — icon: check-circle

SECTION 5 — INDUSTRIES
- Dark navy background (#0B2238), white text
- Eyebrow: "INDUSTRIES WE SERVE"
- Headline: "Built for how your industry actually works"
- 4 cards (white on navy, or navy-700 background):
  Construction, Manufacturing, Logistics, Healthcare
  Each with an Unsplash worksite image as background

SECTION 6 — SOCIAL PROOF / STATS
- White background
- 3 large stat numbers with labels:
  "47%" — Fewer recordable incidents on average
  "2×" — Faster audit completion
  "100%" — OSHA-authorized compliance programs
- Source Sans 3, weight 800, 72px, green color

SECTION 7 — TESTIMONIAL
- Light gray background (#F8FAFC)
- One featured pull-quote in large italic text
- Name, title, company below
- SafetyLink chain-link decorative mark in background at 5% opacity

SECTION 8 — FINAL CTA
- Navy background (#0B2238)
- Headline (white): "Ready to protect your crew and your business?"
- Sub: "Start with a free site walkthrough — no commitment required."
- Button: "Request a free consultation" — green fill

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCROLL ANIMATIONS — CRITICAL REQUIREMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use Intersection Observer + CSS transitions (or Framer Motion) for:

1. HERO: Text slides up 30px and fades in on load (staggered: eyebrow first, then H1, 
   then sub-headline, then buttons — 150ms apart)

2. SECTION ENTRANCES: Every section headline and card fades up 20px as it enters viewport
   - Cards: staggered reveal left-to-right, 100ms apart

3. STATS COUNTER: Numbers count up from 0 when they scroll into view
   (47%, 2×, 100% animate up)

4. PARALLAX HERO: Hero background image scrolls at 0.5× speed for depth effect

5. NAV: Transition from transparent to frosted-glass as user scrolls past the hero

6. FEATURE CARDS: Subtle lift (shadow increase) on hover with 180ms ease transition

7. MOBILE: Reduce motion — respect prefers-reduced-motion media query

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONSULTATION PAGE (/consultation)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two-column layout (desktop), single column (mobile):

LEFT: Value proposition panel (dark navy background)
- Headline: "See SafetyLink in action"
- 4 bullet points with check icons:
  ✓ Free 30-minute site walkthrough with an OSHA expert
  ✓ Custom safety program outline for your business
  ✓ No commitment, no pressure
  ✓ Available in English and Spanish

RIGHT: Lead capture form (white card, shadow, 24px padding)
- Form title: "Request your free consultation"
- Fields:
  - Full name (required)
  - Company name (required)
  - Work email (required)
  - Phone number
  - Industry (select: Construction / Manufacturing / Logistics / Healthcare / Other)
  - Number of employees (select ranges: 1–10 / 11–50 / 51–200 / 201+)
  - What's your biggest safety challenge? (textarea, optional)
- Submit button: "Request my free consultation" — full-width, green
- Privacy note below button: small gray text, lock icon

After submit: replace form with success confirmation — 
  check-circle icon (green), "We'll be in touch within one business day."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PLATFORM PAGE (/platform)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero: dark navy, headline "The compliance platform built for real worksites"
Features grid: 6 feature cards with icons and descriptions covering:
- Digital inspection forms
- Corrective action tracking
- Training record management
- Safety program builder
- Audit scheduling
- Real-time reporting dashboard

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVICES PAGE (/services)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero: dark navy, headline "Expert OSHA guidance — not just software"
Service cards:
- Site-specific safety programs (IIPP)
- OSHA 10 & 30 hour training
- Compliance audits & inspections
- Incident investigation support
- Regulatory update alerts
- Bilingual safety communication

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INDUSTRIES PAGE (/industries)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero: dark navy, headline "Built for how your industry actually works"
4 full-width industry sections (alternating image/text layout):

Construction — workers on site, scaffold, PPE; focus on fall protection, IIPP
Manufacturing — factory floor, machinery guards; focus on lockout/tagout, ergonomics
Logistics — warehouse, forklifts; focus on vehicle safety, loading dock protocols
Healthcare — back-of-house, housekeeping; focus on BBP, ergonomics, violence prevention

Each section: industry name, 3-sentence description, 3 key OSHA concerns, 
"Learn more" link to consultation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESOURCES PAGE (/resources)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero: light background, headline "Safety resources from people who know OSHA"
Resource card grid (3 columns):
- Mix of: guides, checklists, webinars, blog posts
- Each card: category badge (pill), title, excerpt, "Read more" link
- 6 placeholder resource cards with realistic OSHA-related titles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMAGES TO USE (Unsplash — free, no attribution needed in UI)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these specific Unsplash URLs or search Unsplash for similar:
- Hero: https://images.unsplash.com/photo-1504307651254-35680f356dfd (construction workers)
- Construction: https://images.unsplash.com/photo-1581092921461-eab62e97a780
- Manufacturing: https://images.unsplash.com/photo-1581092160607-ee22621dd758
- Logistics: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d
- Healthcare: https://images.unsplash.com/photo-1576091160399-112ba8d25d1d
- Field worker: https://images.unsplash.com/photo-1540575467063-178a50c2df87

All images: apply a dark navy overlay (rgba(11,34,56,0.60)) for text legibility.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mobile (< 768px):
- Hamburger nav with slide-in drawer
- Single column layout for all grids
- Hero: 48px headline (not 60px)
- Stats stacked vertically
- Footer columns stack vertically

Tablet (768–1024px):
- 2-column grids
- Nav links visible (no hamburger)

Desktop (> 1024px):
- Full layout as described above
- Max content width: 1200px, centered
- Hero canvas: full-width to 1440px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK FOR LOVABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- React + TypeScript
- Tailwind CSS for styling
- Lucide React for all icons
- Framer Motion for scroll animations and entrance transitions
- React Router for page navigation
- No backend required — consultation form can use console.log or a toast notification

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HARD RULES — NEVER VIOLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. No emoji anywhere in the UI or copy
2. Sentence case for ALL headlines, buttons, labels, nav items
3. No gradients outside navy (#0B2238) ↔ green (#28B432) color family
4. Lucide icons only — no other icon libraries
5. Focus rings always visible (green, 4px, 0.35 opacity) — never remove keyboard focus
6. All animations must respect prefers-reduced-motion
7. No bouncy spring animations — motion should feel controlled and professional
8. No frosted glass on internal app elements — only on the sticky marketing nav
9. Photography must have a dark overlay for text legibility
10. The wireframe at https://sf3.lr4043372501.workers.dev/ is the navigation 
    and content structure reference — not the visual target. Build something 
    significantly more polished and animated.
```

---

## Supplemental context for follow-up Lovable messages

If Lovable asks for more detail or you want to refine sections, use these follow-up prompts:

### For animation refinement:
```
Refine the scroll animations:
- Use Framer Motion's useInView hook for all entrance animations
- Entrance: y: 30 → 0, opacity: 0 → 1, duration 0.5s, ease "easeOut"
- Stagger children: 0.12s apart
- Cards hover: scale 1.0 → 1.02, shadow increases, 0.2s ease
- Nav: transparent → frosted glass when scrolled past 80px
- Stat numbers: use a counting animation with useEffect + setInterval
- Hero text: animate on mount, not scroll (already visible)
- Always wrap animations in: if (prefersReducedMotion) skip animation
```

### For color corrections:
```
Ensure these exact hex values are used:
- Primary buttons (brand): background #14375B, hover #102C49, text #FFFFFF
- CTA buttons (accent): background #28B432, hover #1FA12F, text #FFFFFF
- Hero/footer backgrounds: #0B2238
- Alternating light sections: #F8FAFC
- Body text: #0E1620
- Muted text: #475467
- Borders: #E4E7EC
- Card background: #FFFFFF with border 1px solid #E4E7EC
- Success badge: background #E8F8E9, text #1A8429
```

### For typography corrections:
```
Fix typography to match brand spec:
- Import Source Sans 3 from Google Fonts (weights 300,400,600,700,800)
- All headlines: font-weight 800, letter-spacing -0.02em, sentence case
- Body: font-weight 400, font-size 16px, line-height 1.5
- Eyebrow labels: font-weight 600, font-size 14px, letter-spacing 0.08em, text-transform uppercase
- Buttons: font-weight 600, sentence case (not title case)
- Never use emoji. Use Lucide icons instead.
```

### For the consultation form:
```
Build the consultation form with these exact fields:
1. Full name — text input, required
2. Company name — text input, required  
3. Work email — email input, required, validate format
4. Phone number — tel input, optional
5. Industry — select: "Construction" | "Manufacturing" | "Logistics" | "Healthcare" | "Other"
6. Company size — select: "1–10 employees" | "11–50" | "51–200" | "201+" 
7. Biggest safety challenge — textarea, optional, max 500 chars

On submit: 
- Validate required fields, show inline errors
- Success state: replace form with centered check-circle icon (green, 64px),
  heading "Request received", body "We'll reach out within one business day."
- No actual API call needed — just handle the success state locally
```

---

## Reference architecture (from the live wireframe)

> Wireframe URL: **https://sf3.lr4043372501.workers.dev/**

Use this URL to understand:

| What to copy | What to improve |
|---|---|
| Navigation menu structure and links | Visual design, colors, polish |
| Page routes and URL structure | Add real imagery (not placeholders) |
| Footer column layout | Add scroll animations throughout |
| Section order on homepage | Add parallax hero effect |
| Form fields on /consultation | Make form two-column with value prop panel |
| Content hierarchy on each page | Increase visual density and premium feel |

The wireframe is your **content and structure reference**. The visual output should look like a premium, modern SaaS marketing site — significantly more polished than the wireframe.

---

## Brand voice cheat sheet

| Do | Don't |
|---|---|
| "Stop chasing OSHA paperwork. Start running a safer site." | "Welcome to the future of compliance! 🚀" |
| "Schedule one for this site, or pull from the template library." | "Oops! You haven't created any inspections yet!" |
| "We couldn't sync. Check your connection and try again." | "ERROR: Sync failed (code 0x42)" |
| "Tap each item. Add a photo if something's wrong." | "Please complete all required fields before proceeding." |
| Short sentences. Action verbs first. | Throat-clearing. Passive voice. Exclamation points. |

**Voice:** Senior safety professional. Calm. Direct. Never a cheerleader, never a bureaucrat.

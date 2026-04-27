# SafetyLink — Design System for Stitch

> Use this file as the design context when starting a new SafetyLink project in Stitch (stitch.google.com). Paste the relevant sections into Stitch's prompt or design brief field.

---

## Product overview

**SafetyLink** is an OSHA compliance and safety management platform for small and mid-sized businesses. It combines OSHA-authorized expert guidance with software for audits, inspections, and training. It scales from single-site construction crews to multi-site enterprises in construction, manufacturing, logistics, and healthcare.

**Tagline:** Compliance, made human.

**Hero headline:** Stop chasing OSHA paperwork. Start running a safer site.

**Core promises:**
1. Expertise on call — OSHA-authorized humans, not just software
2. Built for the field — bilingual, mobile-first, designed for hard hats and gloves
3. Provably safer, provably cheaper — measurable injury reduction, hard ROI

**Three surfaces:**
- **Marketing site** — public-facing for safety managers and ops leads
- **Web app / dashboard** — daily compliance workspace (audits, inspections, training)
- **Mobile field app** — bilingual checklist + inspection tool for frontline workers

---

## Brand voice

| Attribute | Guideline |
|---|---|
| Tone | Trustworthy, calm, plainspoken — like a senior safety pro |
| Jargon | None. We know OSHA cold; we explain it like a foreman would |
| Stress | Reduce it, never add to it |
| Sentences | Short. Action verbs first. No throat-clearing |
| Bilingual | Spanish + English are both first-class |
| Reader | Address as "you" (the safety manager, operator, supervisor) |
| Brand | Refer to as "SafetyLink" in marketing, "we" in conversational moments |
| Emoji | Never. Use real icons (Lucide) instead |

**Casing rules:**
- **Sentence case** for all headlines, buttons, nav, and UI labels
- Title Case only for the wordmark itself (SafetyLink) and legal document titles
- ALL CAPS only for eyebrow micro-labels and OSHA standard references (e.g. "OSHA 1926.501")

---

## Color palette

### Primary brand colors

| Token | Hex | Usage |
|---|---|---|
| Navy 900 | `#0B2238` | Deepest navy — hero backgrounds, footer |
| Navy 800 | `#102C49` | Dark sections, sidebar |
| Navy 700 | `#14375B` | **Primary brand color** — headlines, primary buttons, nav |
| Navy 600 | `#1F4A74` | Active states, info accents |
| Navy 500 | `#2E6196` | Links on light backgrounds |
| Navy 400 | `#5C84B0` | Subtle brand accents |
| Navy 300 | `#8FAACB` | Disabled states |
| Navy 200 | `#C5D3E3` | Light borders |
| Navy 100 | `#E3EAF3` | Info surface background |
| Navy 050 | `#F2F5F9` | Very subtle surface tint |

| Token | Hex | Usage |
|---|---|---|
| Green 900 | `#0F5E1D` | Deep accent |
| Green 700 | `#1FA12F` | Hover on green CTA |
| Green 600 | `#28B432` | **Safety green / accent** — primary CTAs, success, completed states |
| Green 500 | `#3FC548` | Lighter success |
| Green 200 | `#D0F1D2` | Success surface |
| Green 100 | `#E8F8E9` | Success background |

### Neutrals (cool slate — never warm beige)

| Token | Hex | Usage |
|---|---|---|
| Ink 900 | `#0E1620` | Body text |
| Ink 700 | `#2C394B` | Strong secondary text |
| Ink 600 | `#475467` | Muted foreground |
| Ink 500 | `#667085` | Secondary / caption text |
| Ink 400 | `#98A2B3` | Placeholders, disabled |
| Ink 200 | `#E4E7EC` | Default borders |
| Ink 100 | `#F2F4F7` | Subtle surface |
| Ink 050 | `#F8FAFC` | Page background tint |
| White | `#FFFFFF` | Cards, page base |

### Safety semantic colors

| State | Main | Light surface |
|---|---|---|
| Success / Safe | `#28B432` | `#E8F8E9` |
| Warning / Expiring | `#F59E0B` | `#FEF3C7` |
| Danger / Violation | `#D92D20` | `#FEE4E2` |
| Info | `#2E6196` | `#E3EAF3` |
| Hi-vis yellow (badges only) | `#F5D300` | — |
| Hi-vis orange (badges only) | `#FF7A1A` | — |

**Gradient rule:** Stay inside the navy ↔ green axis only. Never drift to teal, purple, or pink.

---

## Typography

### Fonts

| Role | Family | Weights | Import |
|---|---|---|---|
| Display + UI | **Source Sans 3** | 300, 400, 500, 600, 700, 800 | Google Fonts |
| Monospace / Data | **IBM Plex Mono** | 400, 500, 600 | Google Fonts |

```
https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap
```

> The logo wordmark is a custom/licensed humanist sans. Always use the PNG logo files — never recreate the wordmark in HTML text.

### Type scale

| Class | Size | Weight | Line height | Letter spacing | Usage |
|---|---|---|---|---|---|
| `.sl-display` / H1 | 60px | 800 | 1.15 | −0.02em | Hero headlines |
| H2 | 38px | 700 | 1.15 | −0.02em | Section headlines |
| H3 | 24px | 700 | 1.3 | — | Card/subsection titles |
| H4 | 20px | 600 | 1.3 | — | Component labels |
| H5 | 18px | 600 | 1.3 | — | Small labels |
| `.sl-eyebrow` | 14px | 600 | 1 | +0.08em | ALL CAPS micro-labels |
| `.sl-lede` | 20px | 400 | 1.65 | — | Hero subheadlines |
| `.sl-body` | 16px | 400 | 1.5 | — | Body copy |
| `.sl-body-sm` | 14px | 400 | 1.5 | — | Secondary body |
| `.sl-caption` | 12px | 400 | 1.5 | — | Captions, timestamps |
| `.sl-label` | 14px | 600 | 1.2 | — | Form labels |
| `.sl-mono` | 0.92em | 400 | — | — | IDs, codes, tabular data |

---

## Spacing system (4pt base grid)

| Token | Value |
|---|---|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-5 | 20px |
| space-6 | 24px — default card padding |
| space-7 | 32px — mobile section rhythm |
| space-8 | 40px |
| space-9 | 56px |
| space-10 | 72px |
| space-11 | 96px — desktop section rhythm |
| space-12 | 128px |

---

## Border radius

| Token | Value | Usage |
|---|---|---|
| xs | 4px | Micro elements |
| sm | 6px | Small tags |
| md | 10px | **Default** — cards, inputs, buttons |
| lg | 14px | Hero panels, modals |
| xl | 20px | Large surfaces |
| pill | 999px | Status badges, filter chips |

---

## Shadows (navy-tinted, low-key)

| Token | Value |
|---|---|
| xs | `0 1px 2px rgba(11,34,56,0.06)` |
| sm | `0 1px 3px rgba(11,34,56,0.08), 0 1px 2px rgba(11,34,56,0.04)` |
| md | `0 4px 12px rgba(11,34,56,0.08), 0 2px 4px rgba(11,34,56,0.04)` |
| lg | `0 12px 28px rgba(11,34,56,0.12), 0 4px 8px rgba(11,34,56,0.06)` |
| xl | `0 24px 48px rgba(11,34,56,0.16)` |
| focus | `0 0 0 4px rgba(40,180,50,0.35)` — green ring |

---

## Component patterns

### Cards
- Background: white
- Border: `1px solid #E4E7EC`
- Radius: 10px
- Shadow: sm resting, md on hover
- Padding: 24px
- Hover: border tightens to `#CBD2DC`, shadow lifts — **no scale, no translate**

### Buttons
- **Primary (brand):** navy-700 fill, white text, hover → navy-800, press → navy-900, shadow removed on press
- **Accent (CTA):** green-600 fill, white text, hover → green-700, press → green-800
- **Outline:** transparent fill, navy-700 border + text
- **Ghost:** no border, navy-500 text, hover background ink-100
- Radius: 10px (default), pill available for tag-style
- All states: 180ms transition on color + shadow

### Inputs / forms
- Border: `1px solid #E4E7EC`, radius 10px
- Focus: green focus ring (`0 0 0 4px rgba(40,180,50,0.35)`)
- Error: red-500 border + error text below
- Disabled: 50% opacity, `cursor: not-allowed`

### Navigation (marketing)
- Sticky top nav
- Background: white at 90% opacity, `backdrop-filter: blur(12px)`
- Logo left, nav links center/right, "Request a free consultation" CTA button (green)
- Z-index: 100

### Status badges
- Pill radius (999px)
- Compliant: green-100 background, green-700 text
- Warning: amber-100, amber-700
- Violation: danger-100, danger-700
- Use hi-vis yellow/orange sparingly, only for active alarm states

---

## Motion

| Property | Value |
|---|---|
| Easing (default) | `cubic-bezier(0.2, 0.0, 0.0, 1)` |
| Easing (incoming) | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Fast (toggles) | 120ms |
| Base (most transitions) | 180ms |
| Slow (sheets, modals) | 280ms |

- Page entrance: subtle 8px translate-up + fade-in
- No bouncy springs — this is regulated software, motion must feel controlled
- Hover on cards/buttons: 180ms color + shadow transition

---

## Layout

| Surface | Max width | Gutters | Notes |
|---|---|---|---|
| Marketing hero | 1440px canvas | — | Full-bleed dark sections |
| Marketing content | 1200px | — | Centered |
| Web app | 1280px+ | — | 240px fixed sidebar, fluid content |
| Mobile | 390px design width | 16px | Safe-area-aware top/bottom |

---

## Imagery & backgrounds

### Hero sections
- Background: navy-900 (`#0B2238`) solid
- Optional: worksite photography at 30–45% opacity underneath, darkened toward navy
- Optional texture: chain-link line pattern at 4–8% opacity (derived from logo mark)
- Never use synthetic gradients as the primary hero treatment

### Photography style
- Documentary worksite: construction sites, warehouse floors, healthcare back-of-house, logistics docks
- Real workers in correct PPE
- Color grade: slightly cool, true-to-life. No orange-teal Hollywood grade
- Hero sections: wide environmental shots
- Feature blocks: close-up hands-at-work shots
- Placeholder: navy-tinted rectangle with chain-link mark centered (never blank)

### Frosted glass / blur
- Allowed ONLY for: sticky marketing nav (blur 12px + white 90% opacity)
- Never use for app-internal cards or modals

---

## Iconography

- **Library:** [Lucide](https://lucide.dev) — 1.5px stroke, clean line icons
- **CDN:** `https://unpkg.com/lucide@latest`
- **Stroke:** 1.5px default, 2px in mobile contexts
- **Size ladder:** 16 / 20 / 24px standard; 32px+ for empty states and feature blocks
- **Color:** `currentColor` — inherits surrounding text color. Status icons use semantic colors
- **No emoji.** No unicode glyphs used as icons (e.g. never `→` — use `arrow-right` from Lucide)

**Key Lucide icons for SafetyLink:**
`shield-check`, `clipboard-check`, `hard-hat`, `alert-triangle`, `file-warning`, `check-circle`, `siren`, `flame`, `wrench`, `users`, `building`, `truck`, `stethoscope`, `calendar`, `bell`

---

## Page structure (marketing site)

### Navigation
- Logo (left) + nav links + "Request a free consultation" green CTA button
- Pages: Platform, Services, Industries, Resources

### Homepage sections (in order)
1. **Hero** — dark navy background, headline, sub-headline, two CTAs (primary + outline)
2. **Trust bar** — industry logos / certifications
3. **Feature highlights** — 3-column card grid (icons + short descriptions)
4. **How it works** — numbered steps or alternating image/text layout
5. **Industry selector** — Construction, Manufacturing, Logistics, Healthcare
6. **Testimonials / social proof** — quote cards with name, title, company
7. **Stats** — big numbers section (e.g. "47% fewer incidents on average")
8. **CTA section** — navy background, headline, "Request a free consultation" button
9. **Footer** — 3-column: company/logo + links columns + contact info

### Footer columns
- Column 1: Logo + tagline + copyright
- Column 2: Platform, Services, Industries, Resources (quick links)
- Column 3: Privacy Policy, Terms of Service, Accessibility, Contact Support

---

## Stitch prompt starter

Use this prompt when creating a new project in Stitch:

```
Create a professional marketing website for SafetyLink, an OSHA compliance and safety 
management SaaS platform for small and mid-sized businesses.

Design language:
- Color palette: deep navy (#14375B primary, #0B2238 darkest) + safety green (#28B432 accent)
- Typography: Source Sans 3 (800 for headlines, 400 for body). Sentence case everywhere.
- Style: clean, authoritative, professional. No gradients outside navy↔green axis. No emoji.
- Cards: white, 10px radius, 1px slate border, subtle navy-tinted shadow
- Buttons: navy fill (primary), green fill (CTA accent), 10px radius
- Icons: Lucide icon set throughout
- Hero sections: dark navy background (#0B2238), white text, optional worksite photography overlay

Voice: Calm and expert. Like a senior safety professional. Short sentences. Action verbs first.
Tagline: "Compliance, made human."
Hero headline: "Stop chasing OSHA paperwork. Start running a safer site."

Pages needed:
1. Homepage (hero + features + industries + stats + CTA + footer)
2. Platform (product features overview)
3. Services (OSHA consulting, training, audits)
4. Industries (Construction, Manufacturing, Logistics, Healthcare)
5. Resources (blog/guides)
6. Request a free consultation (lead capture form)
7. Privacy Policy
8. Terms of Service
9. Contact Support

Navigation: Logo left + links center-right + "Request a free consultation" green CTA button.
Footer: 3-column layout with logo + navigation links + legal links.
```

---

## Hard rules (never violate)

1. **No emoji** anywhere in the UI or copy
2. **Sentence case** for all headlines, buttons, labels, and nav items
3. **No gradients** outside the navy ↔ green color family
4. **Never recreate the logo in HTML text** — always use the PNG asset
5. **Address the reader as "you"** — never "users" in copy frontline workers will see
6. **Focus rings always visible** — never remove keyboard focus styles
7. **Spanish + English are first-class** — never machine-translate field app copy
8. **Documentary photography only** — no AI-generated stock that looks like stock
9. **No bouncy animations** — motion must feel controlled and professional
10. **No frosted glass on app-internal elements** — only allowed on sticky marketing nav

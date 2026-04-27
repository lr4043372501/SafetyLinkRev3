# SafetyLink Design System

A brand + UI system for **SafetyLink**, a safety-management platform that helps small and mid-sized businesses stay OSHA compliant. SafetyLink combines site-specific safety programs, bilingual support, OSHA-authorized expert guidance, and software for audits, inspections, and training. It scales from single-site operations to multi-site enterprises across construction, manufacturing, logistics, and healthcare.

This system is the source of truth for visual design, voice, and component patterns across SafetyLink's three core surfaces:

- **Marketing site** — public-facing site for buyers (safety managers, ops leads at SMBs).
- **Web app / dashboard** — the daily-driver compliance workspace (audits, inspections, programs, training).
- **Mobile field app** — bilingual checklist + inspection tool for frontline workers.

## Source material

The user provided:
- `uploads/logo.png` — the SafetyLink primary lockup (chain-link mark + wordmark, navy + green on white).
- A product description summary covering target audience, core capabilities, and category positioning.

No codebase, Figma, or live site URL was attached. Everything below is **invented from the logo + product description** to give SafetyLink a coherent system. Treat color tokens, type, component shapes, and copy patterns as a strong v1 — not a recreation. When the team produces real production assets, swap them in and re-baseline the tokens.

---

## Index

Top-level files:
- `README.md` — this file.
- `SKILL.md` — instructions for using this system as an Agent Skill.
- `colors_and_type.css` — CSS custom properties for colors, typography, spacing, radii, shadows, motion. Import this in every UI kit and slide.
- `assets/` — logo, derived marks, photography placeholders, illustrations.
- `preview/` — design-system tab cards (colors, type, spacing, components, brand).
- `ui_kits/`
  - `marketing/` — homepage, features, pricing, customer story, signup.
  - `webapp/` — dashboard, audits list, inspection detail, training, settings.
  - `mobile/` — field worker app: login, today screen, inspection flow, issue report.
- `slides/` — presentation templates: title, section, content, big-number, comparison, quote.

---

## Brand essence

> **Compliance, made human.**
> SafetyLink is the calm, expert partner that turns OSHA's rulebook into something a busy operator can actually run.

Three core promises:

1. **Expertise on call** — OSHA-authorized humans, not just software.
2. **Built for the field** — bilingual, mobile-first, designed for hard hats and gloves.
3. **Provably safer, provably cheaper** — measurable injury reduction, hard ROI.

---

## Content fundamentals

Voice is **trustworthy, calm, plainspoken**. SafetyLink is the senior safety pro on the team — never the cheerleader, never the bureaucrat.

### Tone descriptors
- **Authoritative without jargon.** We know OSHA cold; we explain it like a foreman would.
- **Reassuring.** Safety work is high-stakes. Copy should reduce stress, not add to it.
- **Direct.** Short sentences. Action verbs first. No throat-clearing.
- **Inclusive.** Bilingual by default. Accessible reading level (~grade 8) in marketing copy.

### Pronouns & POV
- Address the reader as **"you"** (the safety manager, the operator, the supervisor).
- Refer to the brand as **"SafetyLink"** in marketing, **"we"** in conversational moments and emails.
- Refer to the workforce as **"your team,"** **"workers,"** or **"crews"** — never "users" in product copy that field workers will read.

### Casing
- **Sentence case** for headlines, buttons, nav, and UI labels. ("Start an inspection", not "Start An Inspection".)
- **Title Case** only in the wordmark itself ("SafetyLink") and in legal/document titles ("Master Services Agreement").
- **ALL CAPS** is reserved for the eyebrow micro-label and for genuine standards references (e.g. "OSHA 1926.501").

### Punctuation
- Oxford comma. Em-dashes welcome — they mirror the spoken voice.
- One exclamation point per page, max. Usually zero.
- Numbers ≥10 in numerals. Spell out one through nine in body copy unless it's a metric or quantity.

### Emoji
- **Not used.** Emoji feel out of register for a regulated, occupational-safety brand. Use real iconography (Lucide) instead.

### Examples

**Marketing headline (do)**
> Stop chasing OSHA paperwork. Start running a safer site.

**Marketing headline (don't)**
> 🦺 Welcome to the future of compliance! Let's get you super safe!! 🚀

**Empty state (do)**
> No inspections yet. Schedule one for this site, or pull from the template library.

**Empty state (don't)**
> Oops! It looks like you haven't created any inspections. Why don't you go ahead and create your very first inspection?

**Error message (do)**
> We couldn't sync to the field tablet. Check the device's connection and try again.

**Error message (don't)**
> ERROR: Sync failed (code 0x42). Please contact your system administrator.

**Field-worker microcopy (do)**
> Tap each item. Add a photo if something's wrong.

**Bilingual pattern**
- Spanish copy is **first-class**, not an afterthought. In the field app, language is a profile-level preference. Never machine-translate; ship copy reviewed by a native bilingual safety pro. Code-switching ("PPE" stays "PPE") is fine when it matches site usage.

---

## Visual foundations

The system is built on the logo: deep navy + safety green on clean white. It reads as **professional**, **dependable**, and **field-ready**. Visuals lean documentary, not editorial — real worksites, real workers, in good light.

### Color
- **Brand navy** (`--sl-navy-700` `#14375B`) is the primary brand color. Used for headlines, primary buttons, sidebars, and brand surfaces.
- **Safety green** (`--sl-green-600` `#28B432`) is the accent. Used for primary CTAs in marketing, success states, completed checks, and the chain-link mark itself.
- **Neutrals** are cool slate grays — never warm beige — keeping the palette tight and industrial.
- **Safety semantics** map directly to OSHA-adjacent meaning: green = safe/compliant, amber = warning/expiring, red = danger/violation, navy = informational. Hi-vis yellow and orange exist as accents but should be used **only** for status badges that mirror real PPE colors (e.g. an active alarm).
- Avoid: teal/turquoise, purple, pink, gradients that drift from navy → purple. Keep the gradient family inside the navy ↔ green axis.

### Type
- **Source Sans 3** is the system sans. Humanist, legible at small sizes, ships in weights 300–800. It's a close cousin of the wordmark.
- **IBM Plex Mono** is the numeric / monospace face — used for audit IDs, timestamps, OSHA reference codes, and tabular data.
- Headlines use **Source Sans 3 800/700**, tracked tightly (`-0.02em`).
- Body copy uses **400** at 16px with `1.5` line height.
- **Substitution flag:** the wordmark itself appears to be a custom or licensed humanist sans. Source Sans 3 is the closest free Google Fonts substitute and ships with the system for UI/body text. **Never typeset the brand name in Source Sans as a logo replacement** — always use `assets/logo-full.png` or `assets/wordmark.png` for the lockup. Please supply the licensed wordmark family if you need to set it as text in production.nsed font files** (or confirm the actual wordmark family) so we can swap it in. Until then, the wordmark renders from the PNG only — never recreate it in HTML text.

### Spacing & rhythm
- 4pt base grid. Component padding lives on the 8/12/16/24 ladder.
- Cards typically use `--sl-space-6` (24px) padding, `--sl-radius-md` (10px), and `--sl-shadow-sm`.
- Marketing sections use `--sl-space-11` (96px) vertical rhythm; mobile `--sl-space-7` (32px).

### Backgrounds
- Default page: clean white (`--sl-bg`) or page tint (`--sl-bg-subtle` `#F8FAFC`).
- Hero / brand surfaces: `--sl-navy-900` solid, sometimes with a **photographic underlay at 30–45% opacity** (worksite imagery), darkened toward the navy. Never use synthetic gradients as the primary hero treatment.
- One subtle pattern motif allowed: a **chain-link line pattern** derived from the logo mark, at 4–8% opacity, on dark hero backgrounds. SVG-tileable.

### Imagery & photography
- **Documentary worksite photography**: construction sites, warehouse floors, healthcare back-of-house, logistics docks. Real workers in correct PPE.
- Color grading: **slightly cool, true-to-life**. Avoid orange-teal Hollywood grade. Avoid heavy desaturation. Slight grain (film 800-style) is welcome.
- Compositions favor **wide environmental shots** for hero sections and **close-up hands-at-work** shots for feature blocks.
- Never AI-generated stock that looks like stock. If unavailable, use a navy-tinted placeholder with the chain-link mark centered.

### Iconography
See the **Iconography** section below.

### Borders & corners
- Default border: `1px solid var(--sl-border)` (`#E4E7EC`). On dark surfaces: `1px solid rgba(255,255,255,0.12)`.
- Default radius: `--sl-radius-md` (10px) for cards, inputs, buttons. Pills (`--sl-radius-pill`) for status badges and filter chips. `--sl-radius-lg` (14px) for hero panels and modals.

### Shadows
A **two-layer**, low-key shadow system. Shadows are tuned with a navy tint (not pure black) to feel cohesive on light surfaces.
- `--sl-shadow-xs` — hairline elevation (toggles, hover lift).
- `--sl-shadow-sm` — default cards.
- `--sl-shadow-md` — raised cards, dropdowns.
- `--sl-shadow-lg` — modals, popovers.
- `--sl-shadow-xl` — full-screen sheets.
- `--sl-shadow-focus` — 4px green-tinted ring for keyboard focus.

### Hover & press states
- **Buttons**: hover darkens by one step (`--sl-brand-hover` etc.); press darkens another step **and** removes the elevation shadow (no scale transform — feels more substantial).
- **Cards**: hover lifts to `--sl-shadow-md` and tightens border to `--sl-border-strong`.
- **Links**: hover changes color to `--sl-accent-hover` and adds underline; press color goes to `--sl-accent-press`.
- **Disabled**: 50% opacity, no shadow, `cursor: not-allowed`.

### Focus
- Visible always. 4px green focus ring (`--sl-shadow-focus`) on inputs, buttons, links, and any interactive surface. Never remove it.

### Motion
- Easing: `--sl-ease-standard` for most state changes, `--sl-ease-out` for incoming elements.
- Durations: 120ms (small toggles), 180ms (most transitions), 280ms (sheets, modals).
- **No bouncy springs** — this is regulated software; motion should feel controlled.
- Page transitions: subtle 8px translate-up + fade, never large slides.
- Hover transitions on cards/buttons: 180ms color + shadow.

### Transparency & blur
- Used **sparingly**, only for two cases: (1) the sticky top nav on the marketing site (`backdrop-filter: blur(12px)` over a white-with-90%-opacity background), (2) photo overlays on hero sections (navy at 65% opacity).
- Never use frosted blur for app-internal cards or modals — it reads as too consumer-y.

### Cards
- Background: `--sl-white`.
- Border: `1px solid var(--sl-border)`.
- Radius: `--sl-radius-md`.
- Shadow: `--sl-shadow-sm` resting, `--sl-shadow-md` hover.
- Padding: `--sl-space-6`.
- Hover: 1px border tightens to `--sl-border-strong`, shadow lifts. **No scale**, no translate.

### Layout rules
- Marketing max-width: 1200px content, 1440px hero canvas.
- Web app: 1280px+ optimized, sidebar 240px fixed, content fluid.
- Mobile: 390px design width, 16px gutters, safe-area-aware on top/bottom.
- Sticky elements: top nav (marketing + app), bottom CTA on mobile flow screens.

---

## Iconography

SafetyLink uses **[Lucide](https://lucide.dev)** as its primary icon set — clean 1.5px line icons that match the calm, professional tone. Lucide also has good coverage for safety-relevant glyphs (`hard-hat`, `shield-check`, `clipboard-check`, `alert-triangle`, `siren`, `flame`, `wrench`, `check-circle`, `file-warning`).

- **Source**: loaded from CDN (`https://unpkg.com/lucide@latest`). No local font/sprite shipped.
- **Stroke**: 1.5px default, 2px in mobile contexts where touch targets are large.
- **Size**: 16/20/24 default ladder; 32+ for empty-states and feature blocks.
- **Color**: matches surrounding text color via `currentColor`. Status icons take semantic colors directly (`--sl-success-500`, etc.).
- **Decorative motif**: the SafetyLink mark itself is the only decorative pattern. We tile `assets/mark-white.png` (the original mark knocked out to white) over the navy gradient backgrounds at low opacity (~.10–.18) so it reads as quiet tonal texture rather than a bright graphic overlay. We never substitute generic chain-link or geometric SVGs for the real logomark.
- **Emoji**: not used.
- **Unicode glyphs as icons**: not used (e.g. no `→` in lieu of an arrow icon — use Lucide `arrow-right`).

If a glyph is missing from Lucide, the fallback order is: (1) Phosphor Regular, (2) custom SVG matching Lucide's 24×24 / 1.5px / round-cap style.

**Substitution flag:** This icon choice is invented (no original system was provided). Confirm or replace if SafetyLink already standardizes on a different set.

---

## Asset inventory

All assets are derived from the user-provided original `uploads/logo.png`. **Never redraw the mark or wordmark in SVG — always use these PNGs.**

In `assets/`:
- `logo.png` — the original full-resolution lockup as supplied by the user (1920×1080, mostly transparent).
- `logo-full.png` — trimmed full lockup (mark + wordmark, full color). Default for nav, sidebar, slide footers, on light backgrounds.
- `logo-full-white.png` — all-white knockout of the full lockup. Use on navy or photographic dark backgrounds.
- `mark.png` — just the chain-link mark, full color (navy + green). Use when space is tight (favicon, app icon, compact contexts).
- `mark-white.png` — all-white knockout of the mark. Reserved for cases where you genuinely need the mark to read brightly on dark imagery.
- `mark-navy-tint.png` — mark recolored to `#1F4A74` (a slightly lifted navy). **This is the default decorative tile** over navy gradients — same hue family as the background, so it blends as texture rather than a graphic overlay.
- `wordmark.png` / `wordmark-white.png` — wordmark alone, in case you need to typeset it on its own.
- `placeholder-worksite-1.svg` / `placeholder-worksite-2.svg` — navy-tinted photo placeholders with the real mark embedded. Replace with real worksite photography in production.

If you have actual photography, drop it into `assets/photography/` and reference it directly.

---

## Working with this system

1. Always import `colors_and_type.css` at the top of every HTML file.
2. Reach for tokens (`var(--sl-...)`) over raw hex / px values.
3. Use the semantic typography classes (`.sl-h1`, `.sl-body`, etc.) instead of styling sizes ad-hoc.
4. When in doubt: more whitespace, less color. SafetyLink earns trust by feeling calm.

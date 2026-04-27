---
name: safetylink-design
description: Use this skill to generate well-branded interfaces and assets for SafetyLink, an OSHA compliance + safety management platform for SMBs. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping marketing pages, web app screens, mobile field-worker flows, and slide decks.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. Key reading order:

1. `README.md` — brand essence, voice, visual foundations, iconography.
2. `colors_and_type.css` — every token you should be using.
3. `ui_kits/<surface>/README.md` and component JSX — for component-level patterns.
4. `slides/` — for presentation work.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view. Always link `colors_and_type.css` and use its CSS variables instead of inventing new colors. Use Lucide icons via CDN (no emoji).

If working on production code, read the rules here to become an expert in designing with this brand: voice is calm and authoritative, sentence case everywhere, navy + green palette, Source Sans 3 type, photographic worksite imagery, no gradients beyond the navy↔green axis, low-key navy-tinted shadows, 10px default radius.

If the user invokes this skill without any other guidance, ask them what they want to build (marketing page? web app screen? mobile flow? slide deck?), confirm the surface, ask any disambiguating questions, then act as an expert designer who outputs HTML artifacts or production code, depending on the need.

**Hard rules:**
- Never use emoji. Never use unicode arrows in lieu of icons.
- Sentence case for all UI copy and headlines.
- Address the reader as "you"; refer to the brand as "SafetyLink".
- Spanish + English are both first-class; never machine-translate.
- Photography is documentary, not stock-y. Use placeholders if real imagery is unavailable.

PROJECT EXECUTION PLAN — Hebrew RTL Landing Page for Earthworks Contractor

You are working as a senior frontend engineer, SEO-focused landing page builder, and conversion-oriented product designer.

Use this plan as the source of truth for building the page step by step!

Project goal:
Build a small, polished, fast, Hebrew RTL landing page for an earthworks and excavation contractor.

This page replaces the current B144 business page and will be used for paid ads and organic SEO.

Primary business goal:
Generate leads through:

1. Phone calls
2. WhatsApp messages
3. Contact form submissions

Priorities:

1. Conversion rate
2. Mobile UX
3. SEO
4. Fast loading
5. Trustworthy visual design
6. Simple maintainable code

Do not over-engineer.
This is a small landing page that should be completed within a few hours.

Tech stack:

- React
- TypeScript
- MUI
- Emotion
- RTL support
- Vite or existing React setup

Business details:

- Business name: אבנא קבלן עבודות עפר
- Location: ירושלים
- Phone / WhatsApp: 076-8005948
- Facebook: configurable placeholder link

Service areas:

- ירושלים והסביבה
- מודיעין והשפלה
- תל אביב והמרכז

Services:

- עבודות עפר
- חפירות
- תשתיות
- הריסות
- מחפרונים
- מיני מחפרון
- עבודות בובקט
- פיתוח שטח
- יישור שטח

Important content rule:
Do not invent years of experience, licenses, certifications, guarantees, or claims that were not provided.

Every section must do at least one of these:

1. Build trust
2. Explain the service
3. Push the user toward calling or sending WhatsApp

Recommended structure:

src/
components/
AccessibilityWidget.tsx
AreasSection.tsx
ContactForm.tsx
FAQSection.tsx
FloatingActions.tsx
GallerySection.tsx
HeroSection.tsx
ServicesSection.tsx
VideosSection.tsx
WhyChooseUsSection.tsx
Footer.tsx
data/
landingPageData.ts
theme/
theme.ts
rtlCache.ts
utils/
tracking.ts
whatsapp.ts
App.tsx
main.tsx

public/
robots.txt
sitemap.xml
images/
hero.jpg
gallery-1.jpg
gallery-2.jpg
gallery-3.jpg
gallery-4.jpg

PHASE 1 — Project foundation

Tasks:

1. Verify React + TypeScript setup.
2. Install or verify:
   - @mui/material
   - @mui/icons-material
   - @emotion/react
   - @emotion/styled
   - stylis
   - stylis-plugin-rtl
3. Configure RTL:
   - document.documentElement.dir = "rtl"
   - document.documentElement.lang = "he"
   - MUI theme direction = "rtl"
   - Emotion RTL cache with stylis-plugin-rtl
4. Create centralized MUI theme (premium contractor palette):
   - Primary: `#111827` / dark `#0B1120` — grounded charcoal
   - Secondary: `#D6C7A1` / dark `#B8A06F` — sand / earth tone
   - Accent: `#B7791F` — restrained gold/amber for CTAs (not flashy orange)
   - Background: `#F7F3EA` default, white paper
   - Text: `#111827` primary, `#4B5563` secondary
   - Success / WhatsApp: `#16A34A`
   - Typography suitable for Hebrew
5. Add global basics:
   - no horizontal overflow
   - smooth scrolling
   - readable line height
   - mobile-first spacing

Acceptance criteria:

- App renders correctly in Hebrew RTL.
- MUI components align correctly in RTL.
- No horizontal scroll on mobile.
- Theme is centralized.

PHASE 2 — Data and content layer

Create `landingPageData.ts`.

Include:

- business name
- phone
- WhatsApp URL
- Facebook URL placeholder
- services
- service areas
- gallery items
- video items/placeholders
- FAQ items
- SEO keywords
- CTA labels

Reason:
Keep the page easy to update without editing JSX everywhere.

Suggested core copy:

Hero H1:
קבלן עבודות עפר וחפירות בירושלים והמרכז

Hero subtitle:
עבודות עפר, חפירות, תשתיות, בובקט ומחפרונים — ביצוע מקצועי, זמינות מהירה והצעת מחיר ללא התחייבות.

Primary CTA:
התקשרו עכשיו

Secondary CTA:
שלחו WhatsApp

Form CTA:
השאירו פרטים ונחזור אליכם בהקדם

PHASE 3 — Hero section

Build `HeroSection.tsx`.

Requirements:

- One clear H1
- Short subtitle
- 3–4 trust bullets
- Call button
- WhatsApp button
- Contact form above the fold
- Strong background image or visual block
- High contrast
- Mobile-first layout

Trust bullets:

- זמינות מהירה
- ציוד מקצועי
- עבודות עפר, חפירה ותשתיות
- הצעת מחיר ללא התחייבות

Mobile order:

1. H1
2. Subtitle
3. CTA buttons
4. Contact form
5. Trust bullets

Desktop layout:

- Text and CTA on one side
- Contact form card on the other side

Acceptance criteria:

- User can call or send WhatsApp without scrolling.
- Contact form is visible immediately.
- H1 includes main SEO keyword.
- Hero feels premium, strong, and trustworthy.

PHASE 4 — Contact form

Build `ContactForm.tsx`.

Fields:

- שם מלא
- טלפון
- הודעה

Validation:

- Name required
- Phone required
- Message optional
- Basic Israeli phone validation if simple

Fast MVP behavior:
On submit, open WhatsApp with prefilled message.

Prefilled message:
שלום, אני רוצה לקבל הצעת מחיר לעבודות עפר/חפירה.
שם:
טלפון:
הודעה:

Also show a short success/transition message.

No backend is required unless explicitly requested.

Acceptance criteria:

- Form works without backend.
- WhatsApp opens with user details.
- User gets clear feedback.
- Mobile keyboard UX is comfortable.

PHASE 5 — Tracking placeholders

Create `utils/tracking.ts`.

Add simple placeholder functions:

- trackPhoneClick()
- trackWhatsAppClick()
- trackFormSubmit()
- trackFacebookClick()

For now:

- console.log is enough
- keep functions ready for future GA4 / Meta Pixel integration

Use tracking on:

- phone buttons
- WhatsApp buttons
- form submit
- Facebook link

Acceptance criteria:

- All conversion actions pass through tracking helpers.
- Easy to replace later with analytics.

PHASE 6 — Services section

Build `ServicesSection.tsx`.

Use MUI cards.

Services:

- עבודות עפר
- חפירות
- תשתיות
- הריסות
- מחפרונים
- מיני מחפרון
- עבודות בובקט
- פיתוח שטח
- יישור שטח

Each card:

- icon
- title
- short description
- natural keyword usage

Do not keyword-stuff.

Acceptance criteria:

- Services are scannable.
- Cards look good on mobile.
- Section includes SEO-relevant H2.

PHASE 7 — Why choose us

Build `WhyChooseUsSection.tsx`.

Purpose:
Build trust quickly.

Items:

- זמינות גבוהה
- עבודה מקצועית ובטיחותית
- ציוד מתאים למגוון עבודות שטח
- שירות בירושלים, מודיעין והמרכז

Keep it short and punchy.

Acceptance criteria:

- Builds confidence.
- No long generic paragraphs.
- Clear visual rhythm.

PHASE 8 — About section

Build compact About / קצת עלינו section.

Suggested copy:
אבנא קבלן עבודות עפר מספקת שירותי חפירה, עבודות עפר, פיתוח שטח, תשתיות והריסות ללקוחות פרטיים, עסקיים וקבלנים. אנו מקפידים על עבודה מקצועית, התאמת הכלי הנכון לכל פרויקט ומתן מענה מהיר באזורי השירות.

Important:
Do not invent seniority, certifications, or claims.

Acceptance criteria:

- Short
- Credible
- SEO-friendly
- Trust-building

PHASE 9 — Gallery and videos

Build:

- `GallerySection.tsx`
- `VideosSection.tsx`

Gallery:

- 4–6 images max
- Use real images if available
- If not available, use placeholders with stable filenames
- Every image must have Hebrew alt text
- Lazy-load images
- Use responsive image sizing

Videos:

- 1–2 local HTML5 `<video>` elements from `public/videos/` (e.g. `excavation-1.mp4`, `excavation-2.mp4`)
- No YouTube/Vimeo iframes or third-party embed scripts
- `preload="metadata"` so the browser can show the first frame as preview — no separate poster/thumbnail images required
- Native controls, `playsInline`, no autoplay; videos are below the fold

Acceptance criteria:

- Page has visual proof.
- Media does not hurt initial performance.
- Images/videos are easy to replace later.

PHASE 10 — Service areas

Build `AreasSection.tsx`.

Areas:

- ירושלים והסביבה
- מודיעין והשפלה
- תל אביב והמרכז

Suggested copy:
מחפשים קבלן עבודות עפר בירושלים, במודיעין או באזור המרכז? אבנא מספקת שירותי חפירה, בובקט, מחפרון, תשתיות, פיתוח שטח ויישור שטח במגוון אזורים.

Acceptance criteria:

- Helps local SEO.
- Makes service coverage clear.
- Includes relevant local keywords naturally.

PHASE 11 — FAQ section

Build `FAQSection.tsx`.

Purpose:
Improve SEO and answer objections.

Recommended FAQs:

1. האם אתם מבצעים עבודות עפר בירושלים והסביבה?
2. האם ניתן להזמין עבודות בובקט או מחפרון?
3. אילו סוגי עבודות אתם מבצעים?
4. איך מקבלים הצעת מחיר?
5. האם אתם עובדים גם באזור מודיעין והמרכז?

Keep answers short and practical.

Add FAQ schema only if the FAQ section exists.

Acceptance criteria:

- FAQ is short.
- Helps SEO.
- Helps users decide to contact.

PHASE 12 — Floating actions

Build `FloatingActions.tsx`.

Include:

- Floating WhatsApp button
- Optional floating call button on mobile
- Accessibility button/widget on opposite side

Rules:

- WhatsApp should always be visible.
- Do not cover form buttons.
- Respect mobile safe areas.
- Keep z-index controlled.

Acceptance criteria:

- WhatsApp works from anywhere.
- Buttons do not block content.
- Mobile UX is comfortable.

PHASE 13 — Accessibility widget

Build `AccessibilityWidget.tsx`.

MVP functionality:

- Open/close panel
- Increase font size
- Decrease font size
- High contrast
- Highlight links
- Reset

Keep it simple.
Use localStorage only if quick.

Accessibility basics:

- Buttons have aria-labels
- Panel is keyboard usable
- Focus states are visible
- Color contrast is strong

Acceptance criteria:

- Widget exists and works.
- Does not break layout.
- Usable on mobile.

PHASE 14 — SEO implementation

SEO is extremely important.

Implement:

1. One H1 only.
2. Proper H2 hierarchy.
3. Semantic HTML:
   - header
   - main
   - section
   - footer
4. Meta title:
   אבנא קבלן עבודות עפר | חפירות, בובקט ותשתיות בירושלים והמרכז
5. Meta description:
   אבנא קבלן עבודות עפר מספקת עבודות חפירה, תשתיות, בובקט, מחפרונים, פיתוח ויישור שטח בירושלים, מודיעין והמרכז. התקשרו להצעת מחיר.
6. OpenGraph title/description/image.
7. Canonical URL placeholder.
8. robots.txt.
9. sitemap.xml.
10. LocalBusiness JSON-LD.
11. Organization JSON-LD.
12. FAQ JSON-LD if FAQ exists.
13. Image alt text.
14. Lazy loading for images.
15. Mobile SEO best practices.
16. Fast Core Web Vitals.

Target keywords:

- קבלן עבודות עפר
- עבודות עפר בירושלים
- קבלן חפירות
- עבודות בובקט
- עבודות מחפרון
- מיני מחפרון
- עבודות תשתית
- פיתוח שטח
- יישור שטח
- קבלן עפר
- עבודות עפר במרכז
- עבודות עפר במודיעין

Important:
Use keywords naturally.
Do not create spammy copy.
Do not add inaccurate schema data.

Acceptance criteria:

- SEO tags exist.
- JSON-LD is valid.
- Heading structure is clean.
- Page has strong local SEO relevance.

PHASE 15 — Footer

Footer should include:

- Business name
- Phone
- WhatsApp
- Facebook link
- Service areas
- Quick anchor links
- Copyright

Acceptance criteria:

- Simple and professional.
- Gives one more chance to convert.

PHASE 16 — Visual design rules

Design direction:

- Earthworks / construction feel
- Dark charcoal / black
- Sand / earth tones
- Orange or yellow accent
- Large CTA buttons
- Strong Hebrew typography
- Clear cards
- Large spacing
- Minimal animation

The page should feel:

- Professional
- Reliable
- Local
- Practical
- Premium enough to build trust

Avoid:

- Too many colors
- Long paragraphs
- Generic stock-photo feeling
- Tiny buttons
- Overly complex animations
- Cluttered layout

PHASE 17 — QA checklist

Before finishing, verify:

Mobile:

- Looks good around 360px width
- No horizontal scroll
- CTA buttons are easy to tap
- Form is usable
- Floating WhatsApp does not cover content
- Accessibility button does not block CTA

Desktop:

- Hero is balanced
- Form card looks good
- Services cards align nicely
- Gallery is clean

Functionality:

- Phone link works
- WhatsApp link works
- Form submit opens WhatsApp
- Facebook link is configurable
- Accessibility widget opens
- Tracking placeholders are called

SEO:

- One H1
- H2 sections are logical
- Title and description exist
- Alt text exists
- LocalBusiness JSON-LD exists
- FAQ schema exists only if FAQ exists
- robots.txt exists
- sitemap.xml exists

Performance:

- Images are lazy-loaded
- Video is not loaded above the fold unnecessarily
- No unnecessary libraries
- No heavy animation
- No layout shift from images

Accessibility:

- Good color contrast
- Buttons have aria-labels
- Keyboard focus is visible
- Forms have labels
- RTL is correct

PHASE 18 — Recommended execution order

Implement in this exact order:

1. RTL + theme setup
2. data file
3. Hero section
4. Contact form
5. WhatsApp/call links
6. Tracking placeholders
7. Floating actions
8. Services section
9. Why choose us
10. About section
11. Areas section
12. FAQ section
13. Gallery section
14. Videos section
15. Footer
16. SEO meta/schema/robots/sitemap
17. Accessibility widget
18. Mobile QA
19. SEO QA
20. Final polish

PHASE 19 — What to skip if time is tight

Skip:

- Backend form handling
- CMS
- Admin panel
- Blog
- Routing / multiple pages
- Advanced animations
- Image lightbox
- Complex accessibility system
- Advanced analytics integration
- Complex video optimization

Do not skip:

- Mobile responsiveness
- Hero CTA
- WhatsApp
- Click-to-call
- Basic SEO
- Alt text
- LocalBusiness schema
- Fast loading

Final expected result:
A small, clean, professional Hebrew RTL landing page that looks better than the current B144 page, loads fast, ranks better, and pushes visitors to call, send WhatsApp, or leave details.

---

## Implementation Status (updated)

This section tracks what has actually been built in the repo vs. what remains.

### Completed — Steps 1–20

| Step | Scope | Status | Notes |
| ---- | ----- | ------ | ----- |
| 1 | Vite + React + TS scaffold; MUI, Emotion, RTL, Resend deps | Done | |
| 2 | Theme, RTL cache, Heebo, global CSS (incl. sticky CTA padding) | Done | |
| 3 | `landingPageData.ts` — all copy, testimonials, areas, CTA blocks | Done | |
| 4 | GA4-ready `tracking.ts` (silent fallback when gtag absent) | Done | gtag snippet not in `index.html` yet |
| 5 | `PhoneButton`, `WhatsAppButton`, `phone.ts`, `whatsapp.ts` | Done | |
| 6 | `ContactForm` — validation, honeypot, tracking, string phone `type="tel"` | Done | |
| 7 | `HeroSection` — H1, subtitle, trust bullets, CTAs, form above fold | Done | |
| 8 | `api/contact.ts` + Resend POST + `.env.example` | Done | Needs `vercel dev` or deploy to test email |
| 9 | `StickyMobileCTA` — mobile-only fixed bottom bar | Done | |
| 10 | `App.tsx` one-page shell in correct section order | Done | Full page through Footer + FloatingActions |
| 11 | `ServicesSection`, `WhyChooseUsSection`, `AboutSection` | Done | Data-driven; 1/2/3-col services grid |
| 12 | `CTASection` — reusable block from `ctaBlocks` by id/location | Done | All 3 placements wired |
| 13 | `GallerySection`, `TestimonialsSection` | Done | Lazy images, aspect-ratio; generic "לקוח" labels; star visual only (no schema) |
| 14 | `VideosSection` — local HTML5 videos from `public/videos/` | Done | Native `<video>` with controls; `preload="metadata"` for first-frame preview; no YouTube/Vimeo |
| 15 | `AreasSection`, `FAQSection` | Done | Local SEO cards/chips; MUI Accordion; no map (`googleMapsUrl` is null) |
| 16 | `Footer` (NAP), third `CTASection` (`before-footer`) | Done | Facebook placeholder shows disabled text; anchor links wired |
| 17 | `FloatingActions` — desktop WhatsApp FAB only | Done | `location="floating_desktop"`; hidden xs/sm; z-index `fab` (below modals) |
| 18 | SEO package — `PageMeta`, `JsonLd`, `robots.txt`, `sitemap.xml`, `index.html` fallbacks | Done | See production TODOs below |
| 19 | Build-time prerender for `/` — SSR render + post-build HTML injection | Done | Custom pipeline (see Prerender section); `vite-prerender-plugin` incompatible with Vite 8 Rolldown |
| 20 | `accessibility` npm package — Hebrew labels, mid-left position, client-only init | Done | `src/config/accessibility.ts`; initialized from `main.tsx` only |

### App.tsx render order (current)

1. `PageMeta` (react-helmet-async)
2. `JsonLd` (GeneralContractor + FAQPage JSON-LD)
3. `HeroSection`
4. `ServicesSection`
5. `CTASection` (`location="after-services"`)
6. `WhyChooseUsSection`
7. `AboutSection`
8. `GallerySection`
9. `TestimonialsSection`
10. `VideosSection`
11. `CTASection` (`location="after-gallery-testimonials"`)
12. `AreasSection`
13. `FAQSection`
14. `CTASection` (`location="before-footer"`)
15. `Footer`
16. `StickyMobileCTA`
17. `FloatingActions`

### Files added in step 19 (prerender)

- `src/prerender.tsx` — SSR prerender entry (`prerender()` export)
- `scripts/apply-prerender.mts` — post-build HTML injection
- `src/main.tsx` (updated — `hydrateRoot` when prerendered markup exists)
- `vite.config.ts` (updated — `ssr.noExternal: true`)
- `package.json` (updated — build script, `@emotion/server`, `tsx` devDep)

### Files added in step 18 (SEO)

- `src/components/seo/PageMeta.tsx` — title, description, canonical, robots, OpenGraph, Twitter
- `src/components/seo/JsonLd.tsx` — GeneralContractor + FAQPage structured data
- `src/components/seo/seoHelpers.ts` — URL/canonical/placeholder helpers
- `public/robots.txt`
- `public/sitemap.xml`
- `src/App.tsx` (updated — PageMeta + JsonLd at top)
- `index.html` (updated — fallback meta, theme-color, og fallbacks)

### SEO production TODOs (before deploy)

1. Replace `business.canonicalUrl` in `landingPageData.ts` with the real production domain
2. Update `public/sitemap.xml` `<loc>` and `public/robots.txt` `Sitemap:` to match production URL
3. Replace `seo.ogImage` with a real absolute URL (or ensure `/og-image.jpg` exists at 1200×630 on production)
4. Verify `business.facebookUrl` is the real page URL before it is included in JSON-LD `sameAs`
5. Validate JSON-LD in [Google Rich Results Test](https://search.google.com/test/rich-results) after deploy

### Prerender (Step 19 — implemented)

Build-time prerender is **implemented** via a custom post-build pipeline (not `vite-plugin-prerender` / `vite-prerender-plugin`, which fail under Vite 8 + Rolldown when executing the bundled prerender entry in Node).

**How it works:**

1. `vite build` — normal client SPA bundle to `dist/`
2. `vite build --ssr src/prerender.tsx --outDir dist-ssr` — SSR bundle with `ssr.noExternal: true`
3. `tsx scripts/apply-prerender.mts` — runs `prerender()`, injects rendered HTML into `dist/index.html` `#root` and Helmet/Emotion tags into `<head>`

**Key files:**

- `src/prerender.tsx` — `renderToString` with MUI + Emotion RTL + Helmet; extracts head tags from SSR body
- `scripts/apply-prerender.mts` — merges prerender output into built `index.html`
- `src/main.tsx` — uses `hydrateRoot` when `#root` has prerendered children
- `vite.config.ts` — `ssr.noExternal: true` for standalone SSR bundle

**Build output (verified):**

- `dist/index.html` ~158 KB with ~70 KB prerendered body HTML (sections, form, footer)
- Exactly one `<h1>` in prerendered body
- Helmet meta, canonical, OpenGraph, Twitter, JSON-LD (GeneralContractor + FAQPage) in `<head>`
- Emotion critical CSS inlined in `<head>`

**Follow-up / risks:**

- SSR bundle (`dist-ssr/`, ~2 MB) is a build artifact only — gitignored, not deployed
- Build adds ~1–2 s for SSR + prerender steps
- Runtime hydration verified via `hydrateRoot`; smoke-test in browser after deploy recommended

**Step 19 cleanup (index.html fallbacks):**

Removed duplicate static SEO tags from `index.html` now that prerender injects Helmet tags into `dist/index.html`. Kept only minimal fallbacks: `charset`, `viewport`, `theme-color`, short `title`, favicon. Removed static `description`, `robots`, and OpenGraph fallbacks to avoid duplication with prerendered Helmet output.

### Files added in steps 15–17

- `src/components/sections/AreasSection.tsx`
- `src/components/sections/FAQSection.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/conversion/FloatingActions.tsx`
- `src/App.tsx` (updated — full section order)
- `src/components/sections/HeroSection.tsx` (updated — `id="contact"` for footer anchor)

### Files added in steps 10–14

- `src/App.tsx` (updated)
- `src/components/conversion/CTASection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/WhyChooseUsSection.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/GallerySection.tsx`
- `src/components/sections/TestimonialsSection.tsx`
- `src/components/sections/VideosSection.tsx`
- `src/utils/iconMap.tsx` (MUI icon lookup for service/why-choose-us data)

### Missing assets (placeholders in data, not yet in `public/`)

- `/images/hero.webp`
- `/images/gallery-1.webp` … `/images/gallery-6.webp`
- `/og-image.jpg`
- `/videos/excavation-1.mp4`, `/videos/excavation-2.mp4` — add client footage to `public/videos/`; section renders safely if files are missing (Hebrew fallback text inside `<video>`)

### Files added in step 20 (accessibility)

- `src/config/accessibility.ts` — Hebrew labels from `landingPageData`, `he-IL` speech langs, mid-left icon/menu CSS vars, singleton init
- `src/main.tsx` (updated — calls `initAccessibility()` after hydrate/render; client entry only)
- `src/data/landingPageData.ts` (updated — `hotkeyPrefix` on `accessibilityLabels`)

**Init guards:** `typeof window/document`, `import.meta.env.SSR`, module-level singleton (StrictMode-safe when called outside React effects).

**Widget position:** mid-left (`top: calc(50% - 25px)`, `left: 16px`) — avoids StickyMobileCTA (bottom), FloatingActions (bottom-left desktop), and hero form submit area.

**Package notes:** No native Hebrew locale file; labels overridden manually. Package detects `dir="rtl"` on body for menu text-indent. TTS/STT browser-dependent (auto-disabled on unsupported browsers).

### Not started — Steps 21+
- GA4 gtag in `index.html`
- `vercel.json`, deploy, Resend DNS, full QA / Lighthouse

### Visual Polish Pass — completed

Final visual-only polish pass applied. No changes to functionality, SEO, JSON-LD, prerender, Resend, GA4, tracking, accessibility, or routing.

**Hero branding:**
- Company logo (`/logo-abna.png`, converted from client PDF) placed above H1 — ~100px mobile, ~170px desktop, no border/background
- Richer dark gradient overlay (`#0F172A` → `#111827` → `#1F2937`)
- Subtle radial accent glow behind content
- Tighter vertical rhythm; CTAs closer to trust bullets

**Color system cleanup:**
- Primary: `#0F172A` | Accent: `#C47A1A` | WhatsApp: `#16A34A` | Background: `#FFFFFF` | Muted text: `#475569`
- Removed beige (`#F3F0E7`) page and section backgrounds — white sections with spacing-based separation

**Cards:**
- White background, `rgba(15,23,42,.08)` border, 16px radius, `0 14px 40px rgba(15,23,42,.08)` shadow

**Icons:**
- Unified circular navy (`#0F172A`) chips with sand icon color (`#D8C7A3`) across Services, Why Choose Us, Areas cards, Footer

**Typography:**
- Section H2s: weight 800, slightly reduced size, negative letter-spacing, improved vertical rhythm

**Section rhythm:**
- All content sections white; dark `#0F172A` CTA bands and footer provide alternation via spacing/composition

**CTA buttons:**
- Phone: `#C47A1A`, hover `#D08923`, shadow `0 10px 24px rgba(196,122,26,.25)`
- WhatsApp: `#16A34A`, darker hover, premium shadow — shared via `surfaces.ts`

**Gallery:**
- Borderless image cards, stronger shadow, 16px radius, subtle hover lift — images dominate

**Testimonials:**
- Increased section padding and card spacing for a less cramped, elegant layout

**Footer:**
- Logo, 3-column grid, unified icon chips, clearer CTA hierarchy with divider, cleaner copyright row

**Files modified:**
- `public/logo-abna.png` (new)
- `src/theme/theme.ts`, `src/theme/surfaces.ts`, `src/index.css`
- `src/data/landingPageData.ts` (hero logo fields)
- `src/components/sections/HeroSection.tsx`, `ServicesSection.tsx`, `WhyChooseUsSection.tsx`, `AboutSection.tsx`, `GallerySection.tsx`, `TestimonialsSection.tsx`, `VideosSection.tsx`, `AreasSection.tsx`, `FAQSection.tsx`
- `src/components/conversion/PhoneButton.tsx`, `CTASection.tsx`, `ContactForm.tsx`, `StickyMobileCTA.tsx`
- `src/components/layout/Footer.tsx`
- `docs/plan.md`

### Section rhythm / final visual polish pass — completed

Final visual-only pass: section surface alternation, intentional dark CTA bands, and clearly disabled form submit styling. No functionality, copy meaning, SEO, Resend, prerender, accessibility, or routing changes.

**Three section surface types** (shared via `src/theme/surfaces.ts`):

| Type | Background | Usage |
|------|------------|-------|
| White | `#FFFFFF` | Light content blocks |
| Soft | `#F8FAFC` + `rgba(15,23,42,.06)` top/bottom border | Content-heavy separators |
| Dark CTA | `#0F172A` | Conversion bands + footer |

**Section rhythm (top → bottom):**

| Section | Surface |
|---------|---------|
| HeroSection | dark |
| ServicesSection | soft |
| CTASection (after-services) | dark |
| WhyChooseUsSection | white |
| AboutSection | soft |
| GallerySection | white |
| TestimonialsSection | soft |
| VideosSection | white |
| CTASection (after-gallery-testimonials) | dark |
| AreasSection | white |
| FAQSection | soft |
| CTASection (before-footer) | dark |
| Footer | dark |

**Shared tokens:** `sectionPadding` (`py: { xs: 7, md: 10 }`), `whiteSectionSx`, `softSectionSx`, `darkCtaSectionSx`

**Disabled submit button:** `contactFormSubmitSx` disabled state uses neutral gray (`#D1D5DB` bg, `#6B7280` text, no shadow) instead of muted bronze — clearly inactive while form validation logic is unchanged.

**Footer:** reduced top padding so it connects cleanly from the preceding dark CTA band.

**Files modified:** `src/theme/surfaces.ts`, `src/App.tsx`, `ServicesSection.tsx`, `WhyChooseUsSection.tsx`, `AboutSection.tsx`, `GallerySection.tsx`, `TestimonialsSection.tsx`, `VideosSection.tsx`, `AreasSection.tsx`, `FAQSection.tsx`, `CTASection.tsx`, `Footer.tsx`, `docs/plan.md`

### Assumptions

- Section H2 headings use concise Hebrew titles defined in each component (not duplicated in `landingPageData.ts`).
- `CTASection` tracking `location` matches `ctaBlocks[].location` (e.g. `after-services`, `after-gallery-testimonials`, `before-footer`).
- Gallery broken image URLs are acceptable until client supplies WebP assets.
- Video files must be placed in `public/videos/` (`excavation-1.mp4`, `excavation-2.mp4`); no separate poster images — preview comes from video metadata/first frame.
- `googleMapsUrl` is null — no map embed in AreasSection.
- Facebook URL contains `placeholder` — Footer shows "עמוד פייסבוק — יעודכן בקרוב" instead of a link until real URL is provided.
- `HeroSection` given `id="contact"` so footer anchor `#contact` resolves correctly.
- FloatingActions uses WhatsApp green FAB at bottom-left on md+; does not use `WhatsAppButton` component (custom Fab styling) but same `buildWhatsAppUrl` + tracking.

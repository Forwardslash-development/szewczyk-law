# Conrad Szewczyk & Associates — Brand Style Guide

**Version:** 1.0  
**Practice:** Civil / Personal Injury  
**Languages:** English · Español · Polski · Français · العربية  
**Last Updated:** April 2026

---

## 1. Brand Identity

### Firm Name
- **Full name:** Conrad Szewczyk and Associates
- **Short form:** Szewczyk Law
- **Logo mark:** CS Law
- **Domain:** szewczyk.law
- **Tagline:** *Injured? We Fight For You.*

### Brand Personality
Three adjectives: **Trustworthy. Tenacious. Human.**

This is a personal injury firm serving real people in crisis. The brand should feel immediate, warm, and confident — not cold, corporate, or intimidating. Every design and copy decision should ask: *does this make an injured person feel safe reaching out?*

### Note on "Associates"
Solo practitioners using "and Associates" should verify this is permitted under Illinois Rules of Professional Conduct Rule 7.5. The name may be updated based on bar compliance review.

---

## 2. Logo & Wordmark

### Variants
| Variant | Usage |
|---------|-------|
| **CS Law** (mark only) | Favicon, app icon, small contexts |
| **Conrad Szewczyk** + *& Associates · Attorney at Law* | Full letterhead, website header |
| Light version | On cream/white backgrounds |
| Dark version | On navy backgrounds |

### Rules
- Minimum size: 24px height for the mark, 160px for the full wordmark
- Clear space: equal to the cap-height of "CS" on all sides
- Never distort, rotate, recolor, or add effects to the logo
- Never place the light logo on a light background or the dark logo on a dark background
- The gold accent (`#C9A84C`) in the wordmark must always be present — it is not optional

---

## 3. Color Palette

### Primary Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Brand Navy** | `#1B2E4B` | `--color-brand-navy` | Headers, nav, primary text headings |
| **Brand Gold** | `#C9A84C` | `--color-brand-gold` | Accents, logo mark, trust badges |
| **Brand Crimson** | `#C0392B` | `--color-brand-crimson` | Primary CTA buttons, urgency elements |
| **Brand Cream** | `#F8F5F0` | `--color-brand-cream` | Page background, warm surfaces |
| **Charcoal** | `#2C2C2C` | `--color-brand-charcoal` | Body text |

### Secondary Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Muted Gray** | `#6B7280` | `--color-brand-muted` | Secondary text, captions |
| **Warm Border** | `#E5E0D8` | — | Dividers, card borders |
| **Warm Tint** | `#F0EBE3` | — | Icon backgrounds, callout boxes |
| **White** | `#FFFFFF` | `--color-brand-white` | Card surfaces |

### Color Usage Rules
- **Navy** is for trust and authority — headers, nav, footers, secondary buttons
- **Gold** is for value — "no fee unless we win," trust signals, logo accent. Use sparingly.
- **Crimson** is for action — one primary CTA per section maximum. Never use for decorative purposes.
- **Cream** is the page background — warm and approachable, not clinical white
- Never use more than 3 brand colors in a single component

### Accessibility
All color combinations must meet WCAG 2.1 AA contrast ratios (4.5:1 for body text, 3:1 for large text).

| Combination | Contrast | Pass |
|-------------|----------|------|
| White text on Navy | 10.4:1 | ✅ AAA |
| White text on Crimson | 5.1:1 | ✅ AA |
| Charcoal on Cream | 12.2:1 | ✅ AAA |
| Navy on Cream | 8.9:1 | ✅ AAA |

---

## 4. Typography

### Font Families
| Role | Font | Fallback |
|------|------|---------|
| **Headings** | Playfair Display | Georgia, serif |
| **Body** | Inter | system-ui, sans-serif |

Load from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

### Type Scale

| Style | Font | Size | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|-------|
| Display | Playfair Display | 56px | 700 | 1.1 | Hero headline |
| H1 | Playfair Display | 40px | 600 | 1.2 | Page titles |
| H2 | Playfair Display | 28px | 500 | 1.2 | Section headings |
| H3 | Playfair Display | 20px | 500 | 1.3 | Card titles, sub-sections |
| H4 | Playfair Display | 18px | 500 | 1.3 | Minor headings |
| Body | Inter | 16px | 400 | 1.7 | All paragraph text |
| Body Small | Inter | 14px | 400 | 1.6 | Captions, supporting text |
| Overline/Label | Inter | 11px | 600 | 1.4 | Section labels (ALL CAPS, tracked) |
| Legal | Inter | 12px | 400 | 1.6 | Disclaimers (italic, muted) |

### Typography Rules
- **Headings only in Playfair Display** — never use Inter for headings
- **Body only in Inter** — never use Playfair Display for paragraph text
- **Maximum two font sizes per component** — don't create visual noise
- **Overlines:** always uppercase, `letter-spacing: 0.12em`
- **Legal/disclaimer text:** always italic, `color: #6B7280`

---

## 5. Buttons & Interactive Elements

### Button Variants

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| **Primary** | `#C0392B` (Crimson) | White | None | Main CTA — "Get a Free Consultation" |
| **Secondary** | `#1B2E4B` (Navy) | White | None | Supporting actions |
| **Ghost** | Transparent | Navy | 1.5px Navy | Tertiary actions, nav links |
| **Gold** | `#C9A84C` (Gold) | White | None | Trust moments — "No fee unless we win" |

### Button Sizes
| Size | Padding | Font Size |
|------|---------|-----------|
| Small | `7px 16px` | 13px |
| Default | `10px 22px` | 14px |
| Large | `14px 32px` | 16px |

### Button Rules
- **One primary CTA per section** — never two crimson buttons side by side
- Border radius: `4px` — intentionally modest, professional not playful
- Never disable hover states
- All buttons need visible focus rings for accessibility (`outline: 2px solid #1B2E4B; outline-offset: 2px`)

---

## 6. Components

### Cards
- Background: `#FFFFFF`
- Border: `1px solid #E5E0D8`
- Border radius: `8px`
- Padding: `1.25rem`
- Shadow: `0 4px 24px rgba(27, 46, 75, 0.08)` (on hover only)

### Forms
- Input height: `40px`
- Input border: `1.5px solid #D1CBC1` (default), `1.5px solid #1B2E4B` (focus)
- Input background: `#FAFAF9`
- Border radius: `4px`
- Label: Inter 12px, 600 weight, `#2C2C2C`
- Error text: Inter 11px, `#C0392B`
- Hint text: Inter 11px, `#9CA3AF`
- Required fields marked with `*`

### Navigation
- Background: `#1B2E4B` (Navy)
- Height: `60px` desktop, `56px` mobile
- Logo: white wordmark, gold accent
- Nav links: `rgba(255,255,255,0.75)`, Inter 13px
- Active link: `#FFFFFF`
- CTA button: Crimson, always visible
- Language switcher: outlined, top-right of nav links

### Footer
- Background: `#1B2E4B`
- Text: `rgba(255,255,255,0.7)`
- Accent links: Gold on hover
- Must include: disclaimer text, bar admission, copyright
- Sections: Contact info, Practice areas, Languages available

### Trust Badges
Used in hero section and CTAs:
- "✓ No fee unless we win" — Gold badge
- "Free Consultation" — Crimson badge
- "Available 24/7" — Navy badge
- "Licensed in Illinois" — Ghost/outline badge

---

## 7. Spacing & Layout

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro gaps |
| `--space-2` | 8px | Tight spacing |
| `--space-3` | 12px | Compact elements |
| `--space-4` | 16px | Default component padding |
| `--space-6` | 24px | Comfortable gap |
| `--space-8` | 32px | Spacious padding |
| `--space-12` | 48px | Section sub-gap |
| `--space-section` | 80px | Between page sections |

### Layout Grid
- Max content width: `1200px`
- Gutter: `24px` mobile, `32px` desktop
- Column grid: 12-column
- Common layouts: 1-col (mobile), 2-col (tablet), 3-col or 4-col (desktop)

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Buttons, inputs |
| `--radius-md` | 8px | Cards, modals |
| `--radius-lg` | 16px | Large containers |
| `--radius-full` | 9999px | Pills, badges |

---

## 8. Iconography

Use **Lucide React** exclusively for UI icons. Do not mix icon sets.

### Rules
- Size: `16px` inline, `20px` standard, `24px` feature icons
- Color: inherits from parent text color
- Stroke width: `1.5` (Lucide default)
- Never use filled icons alongside stroke icons in the same component

### Recommended Icons
| Context | Icon |
|---------|------|
| Phone / Contact | `Phone` |
| Email | `Mail` |
| Location | `MapPin` |
| Free consultation | `Calendar` |
| Case / Legal | `Scale` |
| Car accident | `Car` |
| Medical | `HeartPulse` |
| Workplace | `HardHat` |
| Check / Success | `CheckCircle` |
| Language | `Globe` |
| Menu (mobile) | `Menu` |
| Close | `X` |
| Arrow / CTA | `ArrowRight` |

---

## 9. Multilingual Support

### Supported Languages

| Language | Code | Direction | Notes |
|----------|------|-----------|-------|
| English | `en` | LTR | Default / fallback |
| Spanish | `es` | LTR | Large US PI client base |
| Polish | `pl` | LTR | Has diacritics — verify font coverage |
| French | `fr` | LTR | Canadian + US francophone clients |
| Arabic | `ar` | **RTL** | Requires `dir="rtl"` |

### RTL Implementation (Arabic)
- Set `dir="rtl"` on `<html>` when `ar` is active
- Use Tailwind `rtl:` variant classes throughout all components
- Text alignment, padding, margins, flex direction all flip — build RTL-first for `ar`
- Test every component in RTL before shipping

### Translation File Structure
```
public/locales/
  en/translation.json
  es/translation.json
  pl/translation.json
  fr/translation.json
  ar/translation.json
```

### Translation Key Convention
```
nav.home
nav.services
nav.contact
hero.headline
hero.cta_primary
trust.no_fee
intake.step1.title
intake.step1.case_type
errors.required
```

### Copy Guidelines
- Match register across languages — if English is plain-spoken, Spanish/Polish/French/Arabic must be too
- Legal translations must be reviewed by a native speaker familiar with legal terminology
- "No fee unless we win" must be translated accurately — this is a legal commitment
- Avoid idioms that don't translate (e.g., "slam dunk case")

---

## 10. Tone of Voice

### Brand Voice: Confident, Empathetic, Plain-Spoken

The firm speaks like a knowledgeable friend, not a distant institution.

### Do ✅
- "Injured? We fight for you."
- "No fee unless we win your case."
- "Call us — we're available 24/7."
- "You have rights. We'll protect them."
- "Get the compensation you deserve."

### Don't ❌
- "Pursuant to applicable statutes..."
- "Our firm specializes in litigation of personal injury matters..."
- "Please be advised that..."
- "Our attorneys possess extensive qualifications..."
- Excessive legal jargon in public-facing copy

### Writing Rules
- Short sentences. Active voice.
- Address the reader as "you" — not "clients" or "individuals"
- Lead with benefit, not credential
- "Free consultation" before "20 years of experience"
- Empathy before urgency — acknowledge the person is in a difficult situation

---

## 11. Legal & Compliance

### Required Disclaimer
Every page must include in the footer:

> *This website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by visiting this site or submitting a contact form. Past results do not guarantee future outcomes. Conrad Szewczyk is licensed to practice law in the State of Illinois.*

### Bar Advertising Rules
Illinois Rules of Professional Conduct govern lawyer advertising. Before launch, review:
- Rule 7.1 — Communications about services
- Rule 7.2 — Advertising
- Rule 7.3 — Solicitation
- Rule 7.5 — Firm names and letterheads ("and Associates" usage)

### Privacy Policy
Required before accepting any form submissions. Must cover:
- What data is collected (name, phone, email, case details)
- How it is stored and used
- Third-party services (Formspree/EmailJS, Calendly, Analytics)
- GDPR / CCPA compliance if applicable

### Accessibility
Target: **WCAG 2.1 AA**
- All images need descriptive `alt` text
- All form inputs need associated `<label>` elements
- Focus states must be visible on all interactive elements
- Color is never the sole indicator of meaning
- Minimum touch target: `44px × 44px`
- Test with axe-core before each release

---

## 12. PWA Manifest

```json
{
  "name": "Conrad Szewczyk & Associates",
  "short_name": "Szewczyk Law",
  "description": "Personal injury law for the people of Illinois",
  "theme_color": "#1B2E4B",
  "background_color": "#F8F5F0",
  "display": "standalone",
  "start_url": "/",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icons/icon-512-maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

---

## 13. File & Asset Conventions

### Image Formats
- **Photos:** WebP with JPEG fallback
- **Icons:** SVG or Lucide React components
- **Logo:** SVG (never raster for logo)
- **PWA icons:** PNG at required sizes

### Naming Convention
```
kebab-case for all files
hero-image.webp
car-accident-illustration.svg
icon-192.png
```

### CSS Variable Naming
```css
--color-brand-{name}
--font-{role}
--font-size-{scale}
--spacing-{token}
--radius-{size}
--shadow-{context}
```

---

*This style guide is a living document. Update it as the design system evolves. All contributors to the szewczyk-law project are expected to follow these guidelines.*

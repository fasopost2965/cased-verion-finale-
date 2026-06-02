---
name: Sovereign Strategy
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4e5e81'
  primary: '#031635'
  on-primary: '#ffffff'
  primary-container: '#1a2b4b'
  on-primary-container: '#8293b8'
  inverse-primary: '#b6c6ef'
  secondary: '#3b6934'
  on-secondary: '#ffffff'
  secondary-container: '#b9eeab'
  on-secondary-container: '#3f6d38'
  tertiary: '#211500'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a2800'
  on-tertiary-container: '#b18d48'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#b6c6ef'
  on-primary-fixed: '#081b3a'
  on-primary-fixed-variant: '#364768'
  secondary-fixed: '#bcf0ae'
  secondary-fixed-dim: '#a1d494'
  on-secondary-fixed: '#002201'
  on-secondary-fixed-variant: '#23501e'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  institutional-navy: '#1A2B4B'
  sovereign-gold: '#C5A059'
  growth-green: '#2D5A27'
  pure-white: '#FFFFFF'
  ink-black: '#0F172A'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
---

## Brand & Style

The design system is built on the philosophy of **Sovereign Institutionalism**. It merges the rigorous, data-driven aesthetic of global management consulting with a modern African identity. The brand personality is technical, ambitious, and patriotic—positioning the product not just as a service provider, but as a laboratory of sovereign ideas.

The visual style is **Corporate / Modern** with a focus on **Strategic Minimalism**. It prioritizes high-contrast layouts, generous white space, and a structured Bento-grid architecture to organize complex multisectoral expertise into digestible, authoritative modules. The UI must feel like a "Badge of Credibility," grounding high-level strategy in legal and institutional reality.

## Colors

The palette uses a triad of colors that communicate different facets of the brand:
- **Institutional Navy (#1A2B4B):** Used for trust, authority, and primary structural elements like headers and navigation.
- **Growth Green (#2D5A27):** A vibrant but serious green representing development, land, and the African landscape.
- **Sovereign Gold (#C5A059):** Inspired by mineral wealth and prestige, reserved for high-value accents and call-to-actions.

### Color Modes
In **Light Mode**, the system uses pure white and light gray backgrounds to maintain a "scientific" clarity. In **Dark Mode**, the Navy deepens to a near-black (#0F172A) to emphasize the luminous quality of the Gold and Green accents, creating a high-end, executive feel.

## Typography

The system utilizes **Inter** exclusively for its neutral, highly legible, and institutional character. 

- **Headlines:** Use tight letter-spacing and bold weights to convey a sense of urgency and power.
- **Body Text:** Prioritizes readability with generous line heights and standard weights.
- **Labels:** The `label-caps` style is used for technical metadata and legal identifiers (CNSS, RCCM, IFU) to create a distinct "stamped" or "certified" appearance.

## Layout & Spacing

The layout is based on a **12-column fixed grid** for desktop, ensuring that information feels structured and rigid. On mobile, the system transitions to a single-column fluid layout with 16px margins.

### Spacing Philosophy
- **Generous Voids:** Significant vertical gaps (120px) are used between major sections to isolate complex ideas and prevent cognitive overload.
- **Bento Hierarchy:** Content blocks utilize standardized padding (32px) to maintain a consistent rhythm within grid layouts.
- **Strategic Alignment:** Elements should align strictly to the grid edges to reflect the "technical precision" of the brand.

## Elevation & Depth

To maintain institutional seriousness, the system avoids heavy drop shadows and instead uses **Tonal Layering** and **Low-Contrast Outlines**.

- **Surfaces:** Use 1px borders in a slightly darker or lighter shade of the background color to define card boundaries.
- **Subtle Elevation:** For interactive states (hover), apply a very diffused, low-opacity shadow (4% opacity, 20px blur) to suggest the element is lifting off the surface without breaking the minimalist aesthetic.
- **Glassmorphism:** Reserved for sticky navigation bars and mobile menus, using a high backdrop blur (12px) and 80% background opacity to create a sense of modern, layered depth.

## Shapes

The shape language is **Soft (Level 1)**. Elements use a 4px (0.25rem) base radius. This minimal rounding provides a modern touch while maintaining the "hard" edges associated with traditional institutional and governmental documents. 

- **Cards:** 8px radius (rounded-lg) for Bento grid blocks.
- **Buttons:** 4px radius (rounded) for a crisp, professional appearance.
- **Status Chips:** Full pill-shape to distinguish them from structural elements.

## Components

### Buttons
- **Primary:** Sovereign Gold background with Pure White text. Use for main conversion points.
- **Secondary:** Institutional Navy borders with Navy text. Used for administrative actions.
- **Tertiary/Ghost:** Growth Green text for informative links.

### Bento-Grid Cards
- The primary vehicle for expertise pillars. 
- Cards should feature a monochromatic icon in the top left, a bold headline, and a short descriptive paragraph.
- Hover states should trigger a subtle border-color change to Growth Green.

### Input Fields
- Clean, 1px borders with Institutional Navy labels. 
- Focus states should use a 2px Sovereign Gold stroke.

### Metadata Badges
- Small, uppercase labels for legal identifiers (RCCM, IFU) styled with a light gray background and navy text, resembling a government seal or stamp.

### Lists
- Use Growth Green checkmarks for "Scientific Methodology" lists to reinforce the narrative of progress and success.
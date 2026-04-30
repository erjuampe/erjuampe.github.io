---
name: Humo con Solera
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#ffb3ad'
  on-secondary: '#65080d'
  secondary-container: '#882423'
  on-secondary-container: '#ff9e97'
  tertiary: '#ffffff'
  on-tertiary: '#31302f'
  tertiary-container: '#e5e2e0'
  on-tertiary-container: '#656463'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#852221'
  tertiary-fixed: '#e5e2e0'
  tertiary-fixed-dim: '#c9c6c4'
  on-tertiary-fixed: '#1c1c1b'
  on-tertiary-fixed-variant: '#474745'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Noto Serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Noto Serif
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Noto Serif
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  section-padding: 120px
---

## Brand & Style
The brand personality is **Ancestral, Artisanal, and Hedonistic**. It targets the high-end culinary enthusiast who views grilling not as a chore, but as a ritual. The UI must evoke the sensory experience of a centuries-old Sherry bodega: the smell of damp oak, the warmth of a flickering hearth, and the deep, light-absorbing qualities of aged wood.

The design style is **Tactile & Skeuomorphic**, utilizing rich textures and physical metaphors to ground the digital experience in the physical world. This is achieved through subtle wood-grain backgrounds, burlap-textured overlays, and high-contrast lighting that mimics "Chiaroscuro" painting—where elements emerge from deep shadows into stark, brilliant light.

## Colors
The palette is rooted in the "Solera" aging process, now emphasized by high-contrast illumination.
- **Pure White (#FFFFFF)**: Represents the brightest point of the flame and clean precision. Use this for primary actions and critical highlights to provide maximum contrast against the dark base.
- **Deep Charcoal (#0A0A0A)**: Serves as the infinite depth of the cellar walls.
- **Wine Red (#7F1D1D)**: A muted, sophisticated accent used sparingly to reference the Sherry heritage.
- **Burlap Beige (#D6D3D1)**: Used for secondary typography and dividers, providing a natural, organic contrast to the dark base.

Apply **radial gradients** (using the #D97706 seed color to transparent) behind key products to simulate a spotlight or firelight effect.

## Typography
We use **Noto Serif** across all levels to maintain a classic, editorial feel. 

Headlines should be treated like **vintage stamps**: always uppercase, with slightly increased letter spacing to evoke a hand-pressed woodblock aesthetic. Large display type should use a "knockout" effect or a subtle textured mask to allow the background wood grain or burlap to show through the letterforms. Body text remains high-legibility but retains the serif's warmth for storytelling.

## Layout & Spacing
The layout follows a **Fixed Grid** model to mirror the structured, orderly nature of a barrel cellar. We use a 12-column grid with generous gutters to allow the photography to breathe. 

Spacing is intentionally expansive. High-end products require "distance" to be perceived as premium. Vertical rhythm is driven by large 120px gaps between sections, ensuring each "chapter" of the landing page—from the heritage to the product specs—is consumed in isolation.

## Elevation & Depth
Depth is not created with shadows, but through **Tonal Layering and Light Falloff**. 
- **The Base**: Deep charcoal texture.
- **The Mid-ground**: Product cards or containers use a slightly lighter, desaturated oak tone with a very soft "inner glow" to suggest they are being lit from the front by a fire.
- **The Foreground**: Buttons and active elements use **Pure White** to create a sharp, focal point of light.

Use **Backdrop Blurs** on navigation bars to create a "smoky glass" effect, hinting at the product's purpose without obscuring the rich background textures.

## Shapes
We utilize **Sharp (0px)** corners. The products—cask staves and wood blocks—are raw, cut materials. Rounded corners would feel too "digital" and soft for this brand. Every container, button, and image frame should be a crisp rectangle, reinforcing the architectural feel of the barrels and crates. 

Small exceptions can be made for **Circular Seals**: use these for "Limited Edition" badges or "Sherry Certified" stamps, mimicking the wax seals found on vintage bottles.

## Components
- **Primary Buttons**: Sharp edges, **Pure White** background, Black uppercase text. Add a subtle "noise" texture to the button surface to make it look like branded material.
- **Product Cards**: No borders. Use a dark-to-light vertical gradient. The product image should "break" the top boundary of the card to create a 3D effect.
- **Dividers**: Instead of lines, use a thin, repeating pattern of a "rope" or a subtle burlap texture strip.
- **Input Fields**: Underlined only (Burlap Beige), no box. Labels should be small and uppercase.
- **Image Treatment**: All photography must have a heavy vignette and warm color grading. Highlights should be pushed towards Pure White to align with the primary brand color.
# Schnappix Design System für Shopify Theme

Dieses Dokument beschreibt das vollständige Design-System, das aus dem [Create Brand Styleguide](https://github.com/mudzhiri/Createbrandstyleguide.git) Repository integriert wurde.

## Farbpalette

### Primärfarben

- **Schnappix Orange** `#F15A29` - Primäre Markenfarbe, CTAs, Highlights
- **Deep Black** `#000000` - Hintergründe, Text, primäre Oberflächen
- **Pure White** `#FFFFFF` - Text auf dunklem Hintergrund, Karten, saubere Oberflächen

### Sekundärfarben

- **Urban Night Grey** `#121212` - Hover-Zustände, subtile Hintergründe
- **Soft Asphalt** `#1E1E1E` - Karten, Container, erhöhte Oberflächen
- **Concrete Grey** `#2F2F2F` - Rahmen, Trennlinien, sekundäre Elemente
- **Steel Grey** `#9D9D9D` - Deaktivierte Zustände, sekundärer Text
- **Neon Ember** `#FF6A3E` - Hover-Glow, Verläufe, Akzente
- **Energy Yellow** `#FFBD2E` - Warnungen, Sonderangebote, Badges
- **Mint Signal** `#3CFFDD` - Erfolgszustände, Tech-Akzente

## Typografie

### Headline Font – Montserrat Alternates

- **H1**: 64px / 72px, Weight: 800, Letter-spacing: -1%
- **H2**: 48px / 56px, Weight: 700
- **H3**: 32px / 40px, Weight: 600
- **H4**: 24px / 32px, Weight: 600

### Body Font – Inter

- **Body Large**: 18px / 28px, Weight: 400
- **Body**: 16px / 24px, Weight: 400 (Standard)
- **Body Small**: 14px / 20px, Weight: 400

### Font Stack

```css
/* Headlines */
font-family: 'Montserrat Alternates', 'Helvetica Neue', Arial, sans-serif;

/* Body Text */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

## Buttons

### Primary Button

- **Background**: `#F15A29` (Default), `#FF6A3E` (Hover), `#D94D1F` (Pressed)
- **Text**: `#FFFFFF`
- **Border**: 2px solid `#F15A29`
- **Border Radius**: 10px
- **Padding**: 12px vertical, 24px horizontal
- **Font Weight**: 600
- **Hover Effect**: Glow mit `box-shadow: 0 0 30px rgba(255, 106, 62, 0.5)`

### Secondary Button

- **Background**: Transparent (Default), `#121212` (Hover)
- **Border**: 2px solid `#F15A29`
- **Text**: `#F15A29`
- **Border Radius**: 10px
- **Padding**: 12px vertical, 24px horizontal

### Disabled State

- **Background**: `#9D9D9D`
- **Text**: `#121212`
- **Opacity**: 0.5
- **Cursor**: not-allowed

## Badge System

### NEU Badge

- **Verwendung**: Neue Produkte, Launches
- **Background**: `#F15A29`
- **Text**: `#FFFFFF`
- **Form**: Pill / Rounded Full
- **Padding**: 4px 12px
- **Font Size**: 12px
- **Font Weight**: 600
- **Text Transform**: Uppercase

### TOP DEAL Badge

- **Verwendung**: Sonderangebote, Rabatte
- **Background**: `#FFBD2E`
- **Text**: `#000000`
- **Form**: Pill / Rounded Full
- **Padding**: 4px 12px
- **Font Size**: 12px
- **Font Weight**: 600
- **Text Transform**: Uppercase

### SNACK DROP Badge

- **Verwendung**: Limitierte Releases, Exklusivprodukte
- **Background**: Transparent
- **Border**: 2px solid `#F15A29`
- **Text**: `#F15A29`
- **Form**: Pill / Rounded Full
- **Padding**: 4px 12px
- **Font Size**: 12px
- **Font Weight**: 600
- **Text Transform**: Uppercase

## Icon System

### Spezifikationen

- **Stroke Width**: 2–2.5px
- **Style**: Outline, rounded caps & joins
- **Default Size**: 24×24px

### Größen

- **XS**: 16px
- **SM**: 20px
- **MD**: 24px (Standard)
- **LG**: 32px
- **XL**: 48px

### Farben

- **White**: Für dunkle Hintergründe
- **Orange**: Für Akzente und Hover-Zustände
- **Yellow**: Für spezielle Markierungen

### Hover States

- Icons ändern zu `#FF6A3E` mit 80% Opacity
- Smooth Transition: 0.25s ease

## Product Cards

- **Background**: `#1E1E1E`
- **Border**: 1px solid `#2F2F2F`
- **Hover**: Transform translateY(-2px) + Glow-Effekt
- **Border Radius**: 10px

## Form Elements

### Inputs / Textareas / Selects

- **Background**: `#FFFFFF`
- **Text**: `#000000`
- **Border**: 1px solid `#2F2F2F`
- **Hover Background**: `#F5F5F5`
- **Border Radius**: 8px

## CSS Variablen

Alle Farben und Werte sind als CSS-Variablen definiert:

```css
:root {
  --s-orange: #F15A29;
  --s-orange-glow: #FF6A3E;
  --s-black: #000000;
  --s-white: #FFFFFF;
  --s-grey-dark: #121212;
  --s-grey-mid: #1E1E1E;
  --s-grey-border: #2F2F2F;
  --s-grey-steel: #9D9D9D;
  --s-yellow: #FFBD2E;
  --s-mint: #3CFFDD;
  --font-headline: 'Montserrat Alternates', ...;
  --font-body: 'Inter', ...;
  --border-radius-button: 10px;
  --border-radius-badge: 9999px;
}
```

## Verwendung

Das Design-System ist in `assets/schnappix-theme-global.css` implementiert und wird automatisch über `snippets/stylesheets.liquid` geladen.

### Beispiel: Badge verwenden

```html
<span class="badge--neu">NEU</span>
<span class="badge--top-deal">TOP DEAL</span>
<span class="badge--snack-drop">SNACK DROP</span>
```

### Beispiel: Icon verwenden

```html
<svg class="icon icon-md icon--orange">...</svg>
```

## Quellen

- Original Design System: [Create Brand Styleguide](https://github.com/mudzhiri/Createbrandstyleguide.git)
- Figma Design: https://www.figma.com/design/RZ4wJ8yledyvo2YpPH7nJp/Create-Brand-Styleguide


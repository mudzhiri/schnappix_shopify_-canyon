# Commit Log - Schnappix Shopify Theme

Diese Datei dokumentiert alle Commits mit Branch, Datum, Änderungen und betroffenen Dateien.

---

## 2025-11-29

### Commit: `5b417d2` - Fix pipeline: Add error handling, verify token, install @shopify/theme, and improve working directory handling
**Branch:** `dev`  
**Datum:** 2025-11-29 (aktuell)  
**Autor:** mudzhiri (mudzhirime@googlemail.com)  
**Status:** ✅ Gepusht zu `origin/dev`

**Beschreibung:**
Pipeline-Fehler behoben: Fehlerbehandlung hinzugefügt, Token-Verifizierung, @shopify/theme Installation und verbesserte working-directory Behandlung.

**Geänderte Dateien:**
- `.github/workflows/deploy.yml` (34 Zeilen hinzugefügt, 8 entfernt)

**Änderungen:**
- **@shopify/theme Package hinzugefügt:** `npm install -g @shopify/cli @shopify/theme`
- **Token-Verifizierung:** Prüfung ob `SHOPIFY_CLI_THEME_TOKEN` gesetzt ist
- **Working Directory Verifizierung:** Prüfung ob das Verzeichnis existiert
- **Fehlerbehandlung:** Exit-Code 1 bei fehlendem Token
- **Environment Variables:** Token wird jetzt als Environment Variable übergeben
- **Shopify CLI Version Check:** `shopify version` nach Installation

**Häufige Fehler behoben:**
- Fehlende @shopify/theme Installation
- Token nicht als Environment Variable übergeben
- Keine Fehlerbehandlung bei fehlendem Token
- Working directory mit Leerzeichen im Pfad

---

## 2025-11-29

### Commit: `0d115d6` - Add scheme-7 (schnappix-light) color scheme with brand colors
**Branch:** `dev`  
**Datum:** 2025-11-29 12:46:47 +0100  
**Autor:** mudzhiri (mudzhirime@googlemail.com)  
**Status:** ✅ Gepusht zu `origin/dev`

**Beschreibung:**
Hinzufügen des neuen Color Schemes "scheme-7" (schnappix-light) mit allen Schnappix Brand-Farben gemäß Brand Styleguide.

**Geänderte Dateien:**
- `config/settings_data.json` (78 Zeilen hinzugefügt)

**Änderungen:**
- Neues Color Scheme `scheme-7` im `current` Bereich hinzugefügt
- Neues Color Scheme `scheme-7` im `presets` Bereich hinzugefügt
- Farben konfiguriert:
  - Primary: `#F15A29` (Schnappix Orange)
  - Primary Hover: `#FF6A3E` (Neon Ember)
  - Borders: `#2F2F2F` (Concrete Grey)
  - Background: `#FFFFFF` (Pure White)
  - Text: `#000000` (Deep Black)
  - Secondary Button: Transparent mit Orange Border
  - Variants: Dark Hover mit Orange Accents

---

### Commit: `1767d2d` - Integrate Schnappix Brand Styleguide: Update scheme-6 colors and add brand fonts
**Branch:** `dev`  
**Datum:** 2025-11-29 12:29:15 +0100  
**Autor:** mudzhiri (mudzhirime@googlemail.com)  
**Status:** ✅ Gepusht zu `origin/dev`

**Beschreibung:**
Integration der Corporate Identity aus dem Brand Styleguide (Figma). Aktualisierung der Farben in scheme-6 und Hinzufügen der Brand-Fonts.

**Geänderte Dateien:**
- `assets/base.css` (Font-Imports hinzugefügt)
- `config/settings_data.json` (scheme-6 Farben aktualisiert)

**Änderungen:**
- **Fonts hinzugefügt:**
  - Montserrat Alternates (Headlines) - Google Fonts Import
  - Inter (Body Text) - Google Fonts Import
- **scheme-6 Farben aktualisiert:**
  - Primary: `#5D2B09` → `#F15A29` (Schnappix Orange)
  - Primary Hover: `#98591B` → `#FF6A3E` (Neon Ember)
  - Borders: `#F7F1ED` → `#2F2F2F` (Concrete Grey)
  - Foreground: `#170B02` → `#000000` (Deep Black)
  - Secondary Button: Orange Text mit Orange Border
  - Variants: Dark Theme mit Orange Accents

---

## 2025-11-28

### Commit: `f99e414` - Update header: hamburger menu left, logo center, black menu drawer with white text and hover effects
**Branch:** `main`  
**Datum:** 2025-11-28 18:23:43 +0100  
**Autor:** mudzhiri (mudzhirime@googlemail.com)  
**Status:** ✅ Gepusht zu `origin/main`

**Beschreibung:**
Header-Layout angepasst: Hamburger-Menü links, Logo in der Mitte, Icons rechts. Schwarzer Menü-Drawer mit weißem Text und Hover-Effekten.

**Geänderte Dateien:**
- `sections/header-group.json`
- `sections/header.liquid`
- `snippets/header-drawer.liquid`
- `snippets/header-row.liquid`

**Änderungen:**
- Logo Position: `center`
- Menu Position: `left`
- Hamburger-Menü: Schwarzer Hintergrund, weißer Text
- Hover-Effekte: Beleuchtung und Vergrößerung
- CSS Grid Layout für gleichmäßige Verteilung

---

### Commit: `796ff9a` - Fix pipeline: correct Shopify CLI syntax (--theme, --password) and add working-directory
**Branch:** `main`  
**Datum:** 2025-11-28 17:57:39 +0100  
**Autor:** mudzhiri (mudzhirime@googlemail.com)  
**Status:** ✅ Gepusht zu `origin/main`

**Beschreibung:**
GitHub Actions Pipeline korrigiert: Shopify CLI Syntax angepasst und working-directory hinzugefügt.

**Geänderte Dateien:**
- `.github/workflows/deploy.yml`

**Änderungen:**
- `--theme-id` → `--theme`
- `--token` → `--password`
- `working-directory` hinzugefügt
- `--path .` entfernt

---

### Commit: `07f53df` - Fix accordion-custom.js class declaration and add script files
**Branch:** `development_v1`  
**Datum:** 2025-11-28 16:58:12 +0100  
**Autor:** mudzhiri (mudzhirime@googlemail.com)  
**Status:** ✅ Gepusht zu `origin/development_v1`

**Beschreibung:**
Klasse-Deklaration in accordion-custom.js korrigiert (Kommentar entfernt).

**Geänderte Dateien:**
- `assets/accordion-custom.js`

**Änderungen:**
- Kommentierte Klasse-Deklaration entfernt
- `class AccordionCustom extends HTMLElement {` korrigiert

---

## Automatische Updates von Shopify

### Commit: `7e4287b` - Update from Shopify for theme schnappix_shopify_-canyon/dev
**Branch:** `dev`  
**Datum:** 2025-11-28 17:31:36 +0000  
**Autor:** shopify[bot]  
**Status:** ✅ Automatischer Sync von Shopify

**Beschreibung:**
Automatische Synchronisation vom Shopify Theme Editor.

---

### Commit: `edb3a8c` - Update from Shopify for theme schnappix_shopify_-canyon/live
**Branch:** `live`  
**Datum:** 2025-11-29 08:50:04 +0000  
**Autor:** shopify[bot]  
**Status:** ✅ Automatischer Sync von Shopify

**Geänderte Dateien:**
- `locales/de.json`

---

## Branch-Übersicht

### Aktive Branches:
- **dev** - Development Branch (aktuell: `0d115d6`)
- **live** - Live Production Branch (aktuell: `edb3a8c`)
- **main** - Main Branch (aktuell: `f99e414`)

### Verwendung:
- `dev` → Development Theme (ID: 148524400836)
- `live` → Live Theme (ID: 148518502596)
- `main` → Main Theme (ID: 148524433604)

---

## Nächste Schritte

1. **Fonts konfigurieren:** Montserrat Alternates und Inter müssen in den Theme-Einstellungen für Headlines und Body-Text konfiguriert werden
2. **Scheme-7 testen:** Neues Color Scheme im Theme Editor testen
3. **Brand Assets:** Logo und weitere Assets aus dem Styleguide integrieren

---

*Letzte Aktualisierung: 2025-11-29 12:46:47 +0100*


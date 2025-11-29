# Shopify Setup Guide - Wo finde ich was?

Diese Anleitung zeigt dir, wo du in Shopify Admin alle benötigten Informationen findest.

---

## 1. Store-URL finden

**Wo:**
- Shopify Admin → **Settings** (unten links) → **Store details**
- Oder einfach in der Browser-URL: `https://[dein-store].myshopify.com/admin`
- **Deine Store-URL:** `p1pmt1-zi.myshopify.com` ✅

---

## 2. Themes finden und Theme IDs

**Wo:**
1. Shopify Admin → **Online Store** (linkes Menü)
2. Klicke auf **Themes**
3. Du siehst alle deine Themes:
   - **Live Theme** (aktuell veröffentlicht)
   - **Development Themes** (für Entwicklung)
   - **Unpublished Themes** (noch nicht veröffentlicht)

**Theme IDs finden:**
1. In der Themes-Übersicht: **Theme-Name** anklicken
2. Oder: **...** (drei Punkte) → **Edit code**
3. In der Browser-URL siehst du die Theme ID:
   - URL Format: `https://[store].myshopify.com/admin/themes/[THEME_ID]/editor`
   - Beispiel: `.../themes/148524400836/editor` → Theme ID: `148524400836`

**Deine Theme IDs:**
- **DEV Theme:** `148524400836` (schnappix_shopify_-canyon/dev)
- **MAIN Theme:** `148524433604`
- **LIVE Theme:** `148518502596`

---

## 3. Theme Access Token erstellen/finden

**Option A: Über Shopify CLI (Empfohlen)**

1. **Terminal öffnen** und in dein Theme-Verzeichnis wechseln
2. **Shopify CLI Login:**
   ```bash
   shopify auth login
   ```
3. **Token wird automatisch gespeichert** in:
   - `~/.config/shopify/config.yml`
   - Oder: `~/.config/shopify/cli.yml`

**Option B: Über Shopify Admin (Theme Access App)**

1. Shopify Admin → **Settings** → **Apps and sales channels**
2. Klicke auf **Develop apps** (oder "App development")
3. **Neue App erstellen** oder bestehende App öffnen
4. Unter **API credentials** → **Theme access token**
5. **Token kopieren** (beginnt mit `shpat_` oder `shpss_`)

**Option C: Über Shopify Partner Dashboard**

1. Gehe zu: https://partners.shopify.com
2. Wähle dein Store aus
3. **Apps** → **Create app** (oder bestehende App)
4. Unter **API credentials** → **Theme access token**

**Wichtig:**
- Der Token muss **Theme Access** Berechtigung haben
- Token-Format: `shpat_...` (Admin API) oder `shpss_...` (App Shared Secret)
- **Deine Tokens:** (In deinen persönlichen Notizen gespeichert - füge sie hier manuell ein)

---

## 4. Theme-Informationen über Shopify CLI abrufen

**Alle Themes auflisten:**
```bash
shopify theme list --store p1pmt1-zi.myshopify.com
```

**Theme-Details anzeigen:**
```bash
shopify theme info --store p1pmt1-zi.myshopify.com --theme [THEME_ID]
```

**Aktuelles Theme anzeigen:**
```bash
shopify theme info --store p1pmt1-zi.myshopify.com
```

---

## 5. GitHub Secret setzen

**Wo:**
1. GitHub Repository: https://github.com/mudzhiri/schnappix_shopify_-canyon
2. **Settings** (oben rechts) → **Secrets and variables** → **Actions**
3. **New repository secret** klicken
4. **Name:** `SHOPIFY_CLI_THEME_TOKEN`
5. **Value:** Einen deiner Tokens einfügen (aus deinen persönlichen Notizen)
   - Format: `shpat_...` oder `shpss_...`
6. **Add secret** klicken

---

## 6. Pipeline-Status prüfen

**Wo:**
1. GitHub Repository → **Actions** Tab
2. Wähle **"Deploy to Shopify"** Workflow
3. Klicke auf den neuesten Run
4. Sieh dir die Logs an:
   - ✅ **Grün** = Erfolgreich
   - ❌ **Rot** = Fehler (siehe Logs)

---

## 7. Theme im Browser testen

**Development Theme Preview:**
- URL: `https://p1pmt1-zi.myshopify.com?preview_theme_id=148524400836`
- Oder: Shopify Admin → Themes → Theme öffnen → **Preview**

**Live Theme:**
- URL: `https://p1pmt1-zi.myshopify.com`
- Oder: Shopify Admin → Themes → **Publish** klicken

---

## Schnellzugriff-Links

- **Shopify Admin:** https://p1pmt1-zi.myshopify.com/admin
- **Themes:** https://p1pmt1-zi.myshopify.com/admin/themes
- **GitHub Actions:** https://github.com/mudzhiri/schnappix_shopify_-canyon/actions
- **GitHub Secrets:** https://github.com/mudzhiri/schnappix_shopify_-canyon/settings/secrets/actions

---

*Erstellt: 2025-11-29*


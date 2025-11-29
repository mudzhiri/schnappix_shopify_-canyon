# Pipeline Setup - GitHub Secrets Konfiguration

## Problem
Die Pipeline schlägt fehl, weil das GitHub Secret `SHOPIFY_CLI_THEME_TOKEN` nicht gesetzt ist.

## Lösung: GitHub Secret hinzufügen

### Schritt 1: GitHub Repository öffnen
1. Gehe zu: https://github.com/mudzhiri/schnappix_shopify_-canyon
2. Klicke auf **Settings** (oben rechts im Repository)

### Schritt 2: Secrets öffnen
1. Im linken Menü: **Secrets and variables** → **Actions**
2. Klicke auf **New repository secret**

### Schritt 3: Secret hinzufügen
1. **Name:** `SHOPIFY_CLI_THEME_TOKEN`
2. **Value:** Dein Shopify CLI Theme Token
   - **WICHTIG:** Verwende einen **Theme Access Token** (nicht Admin API Token)
   - Token-Format: Beginnt normalerweise mit `shpat_` oder `shpss_`
   - Du kannst einen neuen Token erstellen in Shopify Admin (siehe unten)
3. Klicke auf **Add secret**

### Schritt 4: Pipeline erneut ausführen
1. Gehe zu **Actions** im Repository
2. Wähle den fehlgeschlagenen Workflow-Run
3. Klicke auf **Re-run jobs** → **Re-run failed jobs**

## Token-Informationen

**Wichtige Hinweise:**
- Der Token muss ein **Theme Access Token** sein (nicht Admin API Token)
- Du kannst einen neuen Token erstellen in Shopify Admin:
  - Online Store → Themes → ... (drei Punkte) → Edit code
  - Oder über die Theme Access App

## Verifizierung

Nach dem Setzen des Secrets sollte die Pipeline:
1. ✅ Das Secret erfolgreich lesen
2. ✅ Sich bei Shopify authentifizieren
3. ✅ Das Theme erfolgreich pushen

## Troubleshooting

**Wenn die Pipeline weiterhin fehlschlägt:**
1. Prüfe, ob der Token korrekt ist (Theme Access Token, nicht Admin Token)
2. Prüfe, ob der Token noch gültig ist
3. Prüfe die GitHub Actions Logs für spezifische Fehlermeldungen

---

*Erstellt: 2025-11-29*


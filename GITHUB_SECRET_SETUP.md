# GitHub Secret Setup - Schritt für Schritt

Diese Anleitung zeigt dir genau, wie du das `SHOPIFY_CLI_THEME_TOKEN` Secret in GitHub setzt.

---

## Schritt 1: GitHub Repository öffnen

1. Öffne deinen Browser
2. Gehe zu: **https://github.com/mudzhiri/schnappix_shopify_-canyon**
3. Stelle sicher, dass du eingeloggt bist

---

## Schritt 2: Zu Settings navigieren

1. Klicke auf den **"Settings"** Tab (oben rechts im Repository)
   - Der Tab befindet sich in der oberen Navigationsleiste
   - Zwischen "Insights" und "Security" (oder am Ende der Tabs)

---

## Schritt 3: Secrets and variables öffnen

1. Im **linken Menü** (Seitenleiste) findest du verschiedene Einstellungen
2. Scrolle nach unten zu **"Secrets and variables"**
3. Klicke darauf
4. Wähle **"Actions"** aus dem Dropdown-Menü

**Alternativer direkter Link:**
- https://github.com/mudzhiri/schnappix_shopify_-canyon/settings/secrets/actions

---

## Schritt 4: Neues Secret erstellen

1. Klicke auf den Button **"New repository secret"** (oben rechts)
   - Der Button ist grün/blau gefärbt

---

## Schritt 5: Secret konfigurieren

### Name:
- **Feld:** `Name`
- **Wert eingeben:** `SHOPIFY_CLI_THEME_TOKEN`
- ⚠️ **Wichtig:** Genau so schreiben, keine Leerzeichen, Groß-/Kleinschreibung beachten

### Secret:
- **Feld:** `Secret`
- **Wert eingeben:** Einen deiner Shopify Tokens (aus deinen persönlichen Notizen)
  - **Option 1 (Empfohlen):** Admin API Token (beginnt mit `shpat_`)
  - **Option 2:** App Shared Secret (beginnt mit `shpss_`)
- ⚠️ **Wichtig:** 
  - Token **genau** kopieren (keine Leerzeichen am Anfang/Ende)
  - Der Token wird nach dem Speichern **nicht mehr sichtbar** sein
  - **Hinweis:** Die Tokens sind in deinen persönlichen Notizen gespeichert

---

## Schritt 6: Secret speichern

1. Klicke auf **"Add secret"** (grüner Button unten)
2. Das Secret wird jetzt gespeichert

---

## Schritt 7: Verifizierung

Nach dem Speichern siehst du:
- ✅ Eine Erfolgsmeldung
- ✅ Das Secret in der Liste unter "Repository secrets"
- ⚠️ **Hinweis:** Der Token-Wert wird als `••••••••` angezeigt (aus Sicherheitsgründen)

---

## Schritt 8: Pipeline testen

1. Gehe zu **"Actions"** Tab im Repository
2. Wähle den **"Deploy to Shopify"** Workflow
3. Klicke auf **"Run workflow"** (rechts oben) → **"Run workflow"**
   - Oder warte, bis ein Push automatisch die Pipeline auslöst
4. Prüfe die Logs:
   - ✅ **Grün** = Secret wurde gefunden und Pipeline läuft
   - ❌ **Rot** = Prüfe die Fehlermeldung

---

## Visuelle Hilfe

### Wo finde ich Settings?
```
Repository Header:
[Code] [Issues] [Pull requests] [Actions] [Projects] [Wiki] [Security] [Insights] [Settings] ← HIER
```

### Wo finde ich Secrets?
```
Settings Seite (linkes Menü):
├── General
├── Access
├── Secrets and variables ← HIER
│   └── Actions ← HIER
├── Actions
└── ...
```

---

## Troubleshooting

### Problem: "New repository secret" Button ist nicht sichtbar
**Lösung:** 
- Stelle sicher, dass du **Repository-Admin** bist
- Prüfe, ob du die richtigen Berechtigungen hast

### Problem: Secret wird nicht erkannt
**Lösung:**
- Prüfe, ob der Name **genau** `SHOPIFY_CLI_THEME_TOKEN` ist
- Keine Leerzeichen, keine Tippfehler
- Groß-/Kleinschreibung beachten

### Problem: Token funktioniert nicht
**Lösung:**
- Prüfe, ob der Token noch gültig ist
- Versuche den anderen Token (shpat_ vs shpss_)
- Erstelle einen neuen Token in Shopify Admin

### Problem: Secret ist gesetzt, aber Pipeline schlägt trotzdem fehl
**Lösung:**
- Prüfe die GitHub Actions Logs für spezifische Fehlermeldungen
- Stelle sicher, dass der Token die richtigen Berechtigungen hat
- Prüfe, ob der Token für den richtigen Store ist

---

## Schnellzugriff-Links

- **GitHub Repository:** https://github.com/mudzhiri/schnappix_shopify_-canyon
- **Settings:** https://github.com/mudzhiri/schnappix_shopify_-canyon/settings
- **Secrets:** https://github.com/mudzhiri/schnappix_shopify_-canyon/settings/secrets/actions
- **Actions:** https://github.com/mudzhiri/schnappix_shopify_-canyon/actions

---

## Zusammenfassung

1. ✅ Repository öffnen
2. ✅ Settings → Secrets and variables → Actions
3. ✅ New repository secret
4. ✅ Name: `SHOPIFY_CLI_THEME_TOKEN`
5. ✅ Secret: Deinen Token einfügen
6. ✅ Add secret
7. ✅ Pipeline testen

**Fertig!** 🎉

---

*Erstellt: 2025-11-29*


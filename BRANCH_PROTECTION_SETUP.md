# Branch Protection Setup - PR Required für Live Deployments

Diese Anleitung zeigt dir, wie du Branch Protection Rules für deine GitHub Repository einrichtest, um sicherzustellen, dass Live-Deployments nur über Pull Requests erfolgen.

---

## Warum Branch Protection?

**Sicherheit:**
- ✅ Verhindert direkte Pushes auf `live` Branch
- ✅ Erfordert Code Review vor Live-Deployment
- ✅ Schützt vor versehentlichen Live-Deployments
- ✅ Erstellt automatisch einen Audit-Trail

**Workflow:**
```
dev → (PR) → main → (PR) → live
```

---

## Schritt 1: GitHub Repository öffnen

1. Öffne deinen Browser
2. Gehe zu: **https://github.com/mudzhiri/schnappix_shopify_-canyon**
3. Stelle sicher, dass du eingeloggt bist und **Repository-Admin** bist

---

## Schritt 2: Zu Branch Settings navigieren

1. Klicke auf **"Settings"** Tab (oben rechts im Repository)
2. Im **linken Menü** → **"Branches"** (unter "Code and automation")
   - Direkter Link: https://github.com/mudzhiri/schnappix_shopify_-canyon/settings/branches

---

## Schritt 3: Branch Protection Rule für `live` erstellen

1. Scrolle nach unten zu **"Branch protection rules"**
2. Klicke auf **"Add rule"** (oder **"Add branch protection rule"**)

---

## Schritt 4: Branch Pattern konfigurieren

1. **Branch name pattern:** `live`
   - Tipp: Du kannst auch `live*` verwenden, um alle Branches zu schützen, die mit "live" beginnen

---

## Schritt 5: Protection Settings aktivieren

Aktiviere folgende Optionen:

### ✅ Required Settings:

1. **☑ Require a pull request before merging**
   - **Required approvals:** `1` (mindestens 1 Reviewer)
   - **☑ Dismiss stale pull request approvals when new commits are pushed**
   - **☑ Require review from Code Owners** (optional, falls du Code Owners definiert hast)

2. **☑ Require status checks to pass before merging**
   - **☑ Require branches to be up to date before merging**
   - **Status checks:** Wähle **"Deploy to Shopify"** Workflow aus (optional)

3. **☑ Require conversation resolution before merging**
   - Alle Kommentare müssen beantwortet werden

4. **☑ Do not allow bypassing the above settings**
   - Selbst Admins müssen die Regeln befolgen

### ⚠️ Optional (Empfohlen):

5. **☑ Restrict who can push to matching branches**
   - Erlaubt nur bestimmten Teams/Personen, direkt zu pushen
   - **Hinweis:** Wenn aktiviert, können nur die ausgewählten Personen direkt pushen (auch ohne PR)

6. **☑ Require linear history**
   - Verhindert Merge Commits, erfordert Rebase

7. **☑ Include administrators**
   - Auch Admins müssen die Regeln befolgen (empfohlen!)

---

## Schritt 6: Regel speichern

1. Scrolle nach unten
2. Klicke auf **"Create"** (oder **"Save changes"**)

---

## Schritt 7: Optional - Branch Protection für `main`

Wiederhole die Schritte für den `main` Branch:

1. **Branch name pattern:** `main`
2. Gleiche Settings wie für `live` (oder weniger restriktiv)
3. **Empfohlen:** Mindestens 1 Reviewer, aber nicht so strikt wie `live`

---

## Schritt 8: Testen

### Test 1: Direkter Push auf `live` (sollte fehlschlagen)

```bash
git checkout live
git push origin live
```

**Erwartetes Ergebnis:** ❌ Push wird abgelehnt mit Fehlermeldung

### Test 2: Pull Request Workflow (sollte funktionieren)

1. Erstelle einen neuen Branch: `git checkout -b feature/test`
2. Mache eine Änderung
3. Committe: `git commit -m "Test PR"`
4. Pushe: `git push origin feature/test`
5. Erstelle einen Pull Request von `feature/test` → `live`
6. **Erwartetes Ergebnis:** ✅ PR wird erstellt, aber kann nicht ohne Review gemerged werden

---

## Workflow nach Branch Protection

### Vorher (ohne Protection):
```bash
git checkout live
git push origin live  # ⚠️ Direktes Deployment - gefährlich!
```

### Nachher (mit Protection):
```bash
# 1. Feature Branch erstellen
git checkout -b feature/new-feature

# 2. Änderungen machen und committen
git add .
git commit -m "Add new feature"

# 3. Push zu Feature Branch
git push origin feature/new-feature

# 4. Pull Request erstellen (GitHub UI)
# feature/new-feature → live

# 5. Code Review durch Team
# ✅ Approve

# 6. Merge PR (nur nach Review möglich)
# → Automatisches Deployment durch Pipeline
```

---

## Branch Protection Rules Übersicht

| Branch | Protection Level | PR Required | Approvals | Status Checks |
|--------|-----------------|-------------|-----------|---------------|
| `dev` | ⚠️ Optional | ❌ Nein | - | - |
| `main` | ⚠️ Empfohlen | ✅ Ja | 1 | Optional |
| `live` | 🔒 **Erforderlich** | ✅ Ja | 1+ | ✅ Ja |

---

## Troubleshooting

### Problem: "Push declined - branch is protected"
**Lösung:** 
- Erstelle einen Pull Request statt direkt zu pushen
- Oder verwende einen Feature Branch

### Problem: "Required status check is pending"
**Lösung:**
- Warte, bis die GitHub Actions Pipeline durchgelaufen ist
- Prüfe die "Actions" Tab für den Status

### Problem: "Required review from Code Owners"
**Lösung:**
- Stelle sicher, dass ein Code Owner den PR reviewed hat
- Oder deaktiviere diese Option in den Branch Protection Settings

### Problem: "Conversation must be resolved"
**Lösung:**
- Beantworte alle offenen Kommentare im PR
- Oder markiere sie als "resolved"

---

## Best Practices

1. **✅ Immer Feature Branches verwenden**
   - Niemals direkt auf `live` pushen
   - Immer über PRs arbeiten

2. **✅ Code Review vor Live-Deployment**
   - Mindestens 1 Person sollte den Code reviewen
   - Besonders wichtig für Live-Deployments

3. **✅ Status Checks aktivieren**
   - Pipeline muss erfolgreich sein, bevor gemerged werden kann
   - Verhindert Deployment von fehlerhaftem Code

4. **✅ Administrators einschließen**
   - Auch Admins müssen die Regeln befolgen
   - Verhindert versehentliche Bypasses

---

## Schnellzugriff-Links

- **Branch Settings:** https://github.com/mudzhiri/schnappix_shopify_-canyon/settings/branches
- **Repository:** https://github.com/mudzhiri/schnappix_shopify_-canyon
- **Actions:** https://github.com/mudzhiri/schnappix_shopify_-canyon/actions

---

## Zusammenfassung

1. ✅ Settings → Branches
2. ✅ Add rule → Branch pattern: `live`
3. ✅ Require pull request before merging
4. ✅ Require status checks
5. ✅ Include administrators
6. ✅ Create rule
7. ✅ Test mit PR Workflow

**Fertig!** 🎉

Deine `live` Branch ist jetzt geschützt und erfordert Pull Requests für alle Änderungen.

---

*Erstellt: 2025-11-29*


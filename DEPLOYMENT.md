# Deployment Anleitung - GitHub Pages

## Voraussetzungen

1. GitHub Account (du hast bereits einen)
2. Git installiert auf deinem Mac

## Schritt-für-Schritt Anleitung

### 1. Git Repository initialisieren (falls noch nicht geschehen)

```bash
# Im Projektordner ausführen:
git init
git add .
git commit -m "Initial commit - Wasserhunde Website"
```

### 2. GitHub Repository erstellen

1. Gehe zu GitHub.com und logge dich ein
2. Klicke auf das "+" Icon oben rechts → "New repository"
3. Repository Name: `wasserhunde-website`
4. Beschreibung: "Website für Born to Win Hearts - Portugiesische Wasserhunde Zucht"
5. **WICHTIG**: Wähle "Public" (nicht Private, sonst funktioniert GitHub Pages nicht kostenlos)
6. **NICHT** "Initialize with README" anklicken
7. Klicke "Create repository"

### 3. Lokales Repository mit GitHub verbinden

```bash
# Ersetze "timfahje" mit deinem GitHub Username falls anders:
git remote add origin https://github.com/timfahje/wasserhunde-website.git
git branch -M main
git push -u origin main
```

### 4. Website deployen

```bash
# Einfach diesen Befehl ausführen:
npm run deploy
```

Das war's! Der Befehl macht folgendes:
- Baut die Website (`npm run build`)
- Erstellt einen `gh-pages` Branch
- Lädt die Website zu GitHub hoch
- GitHub Pages wird automatisch aktiviert

### 5. GitHub Pages Einstellungen prüfen

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf "Settings" (oben rechts)
3. Scrolle zu "Pages" (linke Sidebar)
4. Unter "Source" sollte "Deploy from a branch" ausgewählt sein
5. Branch sollte "gh-pages" sein
6. Folder sollte "/ (root)" sein
7. Klicke "Save"

### 6. Website aufrufen

Nach ca. 1-2 Minuten ist deine Website live unter:

**https://timfahje.github.io/wasserhunde-website/**

## Updates veröffentlichen

Wenn du Änderungen an der Website machst:

```bash
# 1. Änderungen committen
git add .
git commit -m "Beschreibung der Änderungen"
git push

# 2. Neue Version deployen
npm run deploy
```

Nach 1-2 Minuten sind die Änderungen online!

## Eigene Domain verwenden (Optional)

Falls du später eine eigene Domain (z.B. www.borntowinhearts.de) verwenden möchtest:

1. Kaufe Domain bei einem Domain-Anbieter
2. Erstelle Datei `CNAME` im `public/` Ordner mit dem Inhalt: `www.borntowinhearts.de`
3. Stelle DNS-Einträge bei deinem Domain-Anbieter ein:
   ```
   Type: CNAME
   Name: www
   Value: timfahje.github.io
   ```
4. Deploy erneut: `npm run deploy`

## Troubleshooting

**Problem: "Failed to deploy"**
- Lösung: Stelle sicher, dass du `git push` gemacht hast bevor du `npm run deploy` ausführst

**Problem: "404 Not Found" auf Unterseiten**
- Lösung: Das ist normal bei GitHub Pages. Die .htaccess funktioniert dort nicht.
- Alternative: Verwende HashRouter statt BrowserRouter (falls nötig)

**Problem: Website zeigt alte Version**
- Lösung: Warte 2-3 Minuten und lösche Browser-Cache (Cmd + Shift + R)

## Support

Bei Problemen:
1. Prüfe GitHub Actions Tab im Repository
2. Schaue in die Browser Console (F12) für Fehler
3. Kontaktiere mich oder schau in die GitHub Pages Dokumentation

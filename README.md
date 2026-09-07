# SitSanus

Next.js-Website mit statischem Export für GitHub Pages.

## Veröffentlichen

1. Diese Dateien auf dem Branch `main` committen und zu GitHub pushen.
2. Im GitHub-Repository unter **Settings → Pages → Build and deployment → Source** die Option **GitHub Actions** wählen.
3. Unter **Actions → Deploy to GitHub Pages → Run workflow** den Workflow für `main` starten. Falls Pages bereits vor dem Push aktiviert war, startet der Workflow automatisch.

Die Website erscheint unter **https://demkadse.github.io/sitsanus/**. Nach der Einrichtung veröffentlicht jeder weitere Push auf `main` automatisch die neue Version. Ein vor der Pages-Aktivierung fehlgeschlagener Lauf kann anschließend erneut gestartet werden.

Der Workflow installiert mit der vorhandenen `pnpm-lock.yaml`, baut die Website und veröffentlicht ausschließlich `out/`. GitHub stellt die benötigten Berechtigungen über das Workflow-Token bereit; eigene Secrets sind nicht nötig. URL und Unterpfad kommen aus der Pages-Konfiguration, auch bei einer später eingerichteten eigenen Domain.

## Lokal entwickeln

Node.js 24 installieren, dann im Repository:

```sh
npx pnpm@10 install --frozen-lockfile
npm run dev
```

Die Website läuft unter http://localhost:3000. Nach der Installation funktioniert unter Windows auch `start-website.cmd`.

## Statischen Export prüfen

```sh
npm run build
```

Der fertige Export liegt in `out/`. Für einen lokalen Build mit den GitHub-Pages-Pfaden in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/sitsanus'
$env:NEXT_PUBLIC_SITE_URL = 'https://demkadse.github.io/sitsanus'
npm run build
```

Die Variablen vor normaler lokaler Entwicklung wieder entfernen oder ein neues Terminal öffnen. `npm run typecheck` prüft TypeScript nach dem Build.

## Technik

- `output: "export"` erzeugt HTML, CSS und JavaScript ohne Next.js-Server.
- `trailingSlash: true` ermöglicht direkte Aufrufe verschachtelter Seiten auf GitHub Pages.
- Lokale Bilder berücksichtigen den Unterpfad; serverseitige Bildoptimierung ist deaktiviert.
- Externe Unsplash-Bilder werden weiterhin direkt von Unsplash geladen.
- Die Marketing-Zentrale bleibt eine öffentlich erreichbare Demo ohne Backend oder dauerhafte Speicherung.
- Abhängigkeiten, lokale Werkzeuge und generierte Dateien werden nicht eingecheckt.

Referenzen: [Next.js Static Export](https://nextjs.org/docs/app/guides/static-exports), [GitHub Pages mit Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

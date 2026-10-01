# Arthur C. Vaelen – Publikációs Blog

Arthur C. Vaelen hivatalos kutatói és szerkesztői blogja. Letisztult, figyelemelterelés-mentes, neurodivergens-barát minimalista felület mélyenszántó esszék, rendszerszemléletű elemzések és szolgálói reflexiók publikálására.

## 🛠 Technológiai Stack

- **Keretrendszer:** [Astro](https://astro.build/) (Static Site Generation – SSG)
- **Stílus és Tipográfia:** [Tailwind CSS](https://tailwindcss.com/) & `@tailwindcss/typography`
- **Tartalomkezelés:** Astro Content Collections típusbiztos Zod sémával
- **Dizájn:** Meleg pergamen világos mód (`#fbfbfa`), mély pala sötét mód (`#121316`), mély erdőzöld hangsúly (`#2d5a43`), Merriweather serif címek, Inter szövegtörzs, manuális és automatikus téma-váltó

---

## 🚀 Helyi Fejlesztés

1. **Függőségek telepítése:**
   ```bash
   npm install
   ```

2. **Fejlesztői szerver indítása:**
   ```bash
   npm run dev
   ```
   A weboldal elérhető a `http://localhost:4321` címen.

3. **Produkciós build és előnézet:**
   ```bash
   npm run build
   npm run preview
   ```

---

## ✍️ Új cikk hozzáadása

Hozz létre egy új `.md` fájlt az `src/content/blog/` könyvtárban a következő struktúrával:

```markdown
---
title: "A cikk címe"
description: "Rövid, 1-2 mondatos leírás az előnézethez és a keresőmotorokhoz."
pubDate: 2026-10-01
author: "Arthur C. Vaelen"
tags: ["kutatás", "rendszerszemlélet"]
coverImage: "/images/uj-cikk-cover.png"
imagePrompt: "Detailed atmospheric prompt for Imagen/Midjourney. Negative: no text, no typography, no letters."
slug: "a-cikk-slugja"
draft: false
---

![Borítókép](/images/uj-cikk-cover.png)

A cikk kidolgozott tartalma...
```

---

## 🌐 Üzembe helyezés (GitHub + Cloudflare Pages)

Kövesd ezt a pontos, 3 lépéses útmutatót az oldal ingyenes publikálásához a Cloudflare globális CDN hálózatán:

### 1. lépés: Kód feltöltése GitHubra
Ha még nem hoztál létre GitHub tárolót, hozz létre egy új publikus vagy privát repót a GitHubon (pl. `arthur-c-vaelen-blog`), majd futtasd a terminálban:

```bash
git add .
git commit -m "feat: Arthur C. Vaelen blog weboldal elindítása"
git branch -M main
git remote add origin https://github.com/FELHASZNALONEV/arthur-c-vaelen-blog.git
git push -u origin main
```

### 2. lépés: Cloudflare Pages projekt létrehozása
1. Jelentkezz be a [Cloudflare Dashboard](https://dash.cloudflare.com/)-ra.
2. A bal oldali menüben kattints a **Workers & Pages** menüpontra, majd az **Overview** > **Create application** > **Pages** fülre.
3. Válaszd a **Connect to Git** opciót, és kapcsold össze a GitHub fiókodat, majd jelöld ki az `arthur-c-vaelen-blog` tárolót.

### 3. lépés: Build beállítások és aktiválás
Add meg az alábbi beállításokat (a Cloudflare automatikusan felismeri az Astro sablont):
- **Project name:** `arthur-c-vaelen` (vagy tetszőleges)
- **Production branch:** `main`
- **Framework preset:** `Astro`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variables (Környezeti változók):**
  - `NODE_VERSION`: `20` (vagy újabb)

Kattints a **Save and Deploy** gombra. A Cloudflare 1 percen belül lefordítja az oldalt, és kapsz egy ingyenes, villámgyors `*.pages.dev` domaint SSL tanúsítvánnyal. Ezt követően minden `git push` automatikusan és azonnal frissíti a blogot!

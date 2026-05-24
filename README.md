# Learn Claude

A **static**, self-contained HTML course for Claude, Claude Code, MCP, skills, hooks, and agent workflows. No build step, no backend, no `package.json`.

| Page | File |
|------|------|
| Landing | [`index.html`](index.html) |
| Full course (15 modules) | [`course.html`](course.html) |
| Slash commands reference | [`slash-commands.html`](slash-commands.html) |

## Local preview

```powershell
cd c:\githunb\MayankAggarwal\claude-tutorial
python -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Portfolio integration

Linked to [mayankchugh-learning.github.io](https://mayankchugh-learning.github.io/) (Portfolio, Learning hub, Book a call).  
See **[INTEGRATION.md](INTEGRATION.md)** to add the course card on your profile site.

## Deploy

See **[DEPLOY.md](DEPLOY.md)** for GitHub Pages, Cloudflare Pages, Netlify, Render, and Vercel.

**Live URL (GitHub Pages):** `https://mayankchugh-learning.github.io/claude-tutorial/`

**Fastest path:** push to GitHub → enable **GitHub Pages** (workflow in `.github/workflows/pages.yml`) or connect the repo to any host with **publish directory = root** (`.`).

## Project structure

```
├── index.html, course.html, slash-commands.html
├── 404.html, favicon.svg, robots.txt
├── css/main.css, js/main.js
├── assets/*.svg
├── .nojekyll              # GitHub Pages
├── netlify.toml, vercel.json, render.yaml
└── .github/workflows/pages.yml
```

Curated by Mayank Chugh.

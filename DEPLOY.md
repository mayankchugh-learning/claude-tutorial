# Deploying Learn Claude (static site)

This workspace is a **static website**: HTML, CSS, JavaScript, and SVG assets. There is no backend, database, or build step. Any host that serves files over HTTPS works.

| Setting | Value |
|---------|--------|
| **Publish directory** | Repository root (`.`) |
| **Entry point** | `index.html` |
| **Build command** | *(none — leave empty)* |

Host-specific config files are already in the repo: `netlify.toml`, `vercel.json`, `render.yaml`, `.github/workflows/pages.yml`, `.nojekyll`, `404.html`, `robots.txt`.

---

## Quick start (recommended: GitHub Pages)

### 1. Initialize Git and push to GitHub

```powershell
cd c:\githunb\MayankAggarwal\claude-tutorial

git init
git add .
git commit -m "Initial commit: Learn Claude static course"

# Create a new empty repo on GitHub (e.g. claude-tutorial), then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/claude-tutorial.git
git push -u origin main
```

Replace `YOUR_USERNAME` and the repo name with yours.

### 2. Enable GitHub Pages (GitHub Actions)

1. On GitHub: **Repository → Settings → Pages**.
2. Under **Build and deployment**:
   - **Source:** **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` — the workflow `.github/workflows/pages.yml` deploys the site automatically.
4. After 1–3 minutes, the site is live at:
   - `https://YOUR_USERNAME.github.io/claude-tutorial/`

**Alternative (branch deploy):** Source = **Deploy from a branch**, branch `main`, folder **`/ (root)`**. The Actions workflow is still recommended for clearer deploy history.

### 3. Smoke-test locally (optional)

```powershell
python -m http.server 8080
```

Open `http://localhost:8080` and verify:

- [ ] `index.html`, `course.html`, `slash-commands.html` load
- [ ] `css/main.css` and `js/main.js` apply on the course page
- [ ] At least one diagram under `assets/` on `course.html`
- [ ] Favicon appears in the browser tab

---

## Option A — GitHub Pages

| Item | Value |
|------|--------|
| Cost | Free (public repos) |
| Build | None |
| Publish path | `/` (root) |

See **Quick start** above. The repo includes `.nojekyll` so GitHub does not run Jekyll on these files.

### Custom domain (optional)

**Settings → Pages → Custom domain** — then add DNS records per GitHub’s instructions. Add a `CNAME` file in the repo root only if you use a custom domain (e.g. `learn.example.com`).

---

## Option B — Cloudflare Pages

| Item | Value |
|------|--------|
| Cost | Free tier |
| Build command | *(empty)* |
| Build output directory | `/` |

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the repository.
3. **Framework preset:** None · **Build command:** empty · **Output directory:** `/`
4. Deploy. Optional: **Custom domains**.

---

## Option C — Netlify

| Item | Value |
|------|--------|
| Publish directory | `.` (root) |
| Build command | *(empty)* |

`netlify.toml` in the repo sets `publish = "."` automatically.

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → import from GitHub.
2. Confirm publish directory is `.` and build command is blank.
3. Deploy.

**Drag-and-drop (no Git):** zip the project folder and use Netlify Drop — fine for a one-off demo.

---

## Option D — Render static site

| Item | Value |
|------|--------|
| Build command | `echo "Static HTML — no build"` |
| Publish path | `.` |

**Dashboard:** **New +** → **Static Site** → connect repo → use the settings above.

**Blueprint:** connect the repo and use `render.yaml` in the root.

**Render MCP (Cursor):** after the repo is on GitHub and MCP is authenticated, call `create_static_site` with `publishPath: ./` and the same build command.

---

## Option E — Vercel

| Item | Value |
|------|--------|
| Framework | Other / None |
| Output | root (`.`) |

`vercel.json` sets an empty build and root output. Import the GitHub repo and deploy.

---

## Comparison

| Host | Best for | Custom domain | Auto-deploy on push |
|------|----------|---------------|---------------------|
| GitHub Pages | Repo already on GitHub | Yes | Yes (Actions workflow) |
| Cloudflare Pages | CDN + preview URLs | Yes | Yes |
| Netlify | Simple UI + `netlify.toml` | Yes | Yes |
| Render | Render stack / MCP | Yes | Yes |
| Vercel | Hobby static sites | Yes | Yes |

**Recommendation:** **GitHub Pages** with the included Actions workflow if the repo lives on GitHub. **Cloudflare Pages** if you want the strongest CDN and PR previews.

---

## After deploy — checklist

- [ ] `index.html` loads at the site root (not 404).
- [ ] `course.html` and `slash-commands.html` open from navigation.
- [ ] Styles and course sidebar search work (`css/main.css`, `js/main.js`).
- [ ] SVG diagrams under `assets/` render on `course.html`.
- [ ] Unknown URLs show `404.html` (where the host supports custom 404).
- [ ] Google Fonts load (outbound HTTPS).

---

## Updating the live site

```powershell
git add .
git commit -m "Describe your change"
git push
```

Wait 1–3 minutes (GitHub Pages can take up to 10 minutes on first publish).

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---------|----------------|-----|
| 404 on home | Wrong publish directory | Set publish path to **root** `.`, not `public` or `dist` |
| 404 only on GitHub Pages | Pages source not enabled | Use **GitHub Actions** source or branch `main` + `/ (root)` |
| Unstyled pages | CSS path broken | Keep `href="css/main.css"` relative to each HTML file |
| Broken images | `assets/` not in Git | `git add assets/` and push |
| GitHub URL includes repo name | Project site URL | Use `https://user.github.io/REPO_NAME/` (expected) |
| Render build fails | Empty build rejected | Use `echo "Static HTML — no build"` |
| Workflow not running | Wrong branch | Workflow triggers on `main`; rename branch or edit `pages.yml` |

---

## Security

- Do not commit secrets (`.env`, API keys). This site has none by design.
- All listed hosts provide HTTPS by default.
- Public documentation only — no authentication required.

---

## Project layout

```
claude-tutorial/
├── index.html              # Landing
├── course.html             # Full course (uses js/main.js)
├── slash-commands.html     # Command reference (self-contained)
├── 404.html                # Custom not-found page
├── favicon.svg, robots.txt
├── css/main.css
├── js/main.js
├── assets/*.svg
├── .nojekyll
├── netlify.toml, vercel.json, render.yaml
├── .github/workflows/pages.yml
├── DEPLOY.md               # This file
└── README.md
```

No `package.json`, Node build, or server runtime is required.

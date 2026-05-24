# Integrate Learn Claude with your portfolio

Your portfolio: [mayankchugh-learning.github.io](https://mayankchugh-learning.github.io/)  
This course (after GitHub Pages deploy): **https://mayankchugh-learning.github.io/claude-tutorial/**

## How it works

| Direction | Behavior |
|-----------|----------|
| Portfolio → Course | Visitor clicks a **Learning** card → course opens (stays on course site) |
| Course → Portfolio | **Portfolio**, **Learning hub**, **Book a call** links → your profile sections |

The course does **not** auto-redirect to your profile on load (that would block learning). Links are in the header, strip, and footer on every page.

---

## Step 1 — Deploy this repo to GitHub Pages

Repo: `mayankchugh-learning/claude-tutorial` (already on GitHub).

1. **Settings → Pages → Source:** GitHub Actions (workflow in `.github/workflows/pages.yml`).
2. Push to `main` and wait ~2 minutes.
3. Confirm: **https://mayankchugh-learning.github.io/claude-tutorial/** loads `index.html`.

See [DEPLOY.md](DEPLOY.md) for other hosts.

---

## Step 2 — Add / update a card on your portfolio

In your **mayankchugh-learning.github.io** repo, find the **Learning Resources** section (where “Claude Code Tutorial” already appears).

Point that card to the full course:

```html
<!-- Example learning card — match your existing markup/classes -->
<a class="learning-card" href="https://mayankchugh-learning.github.io/claude-tutorial/" target="_blank" rel="noopener">
  <span class="learning-tag">Tooling</span>
  <h3>Learn Claude — Full Course</h3>
  <p>15 modules: agentic loop, MCP, skills, hooks, sub-agents, slash commands, and capstone.</p>
  <span class="learning-cta">Open course →</span>
</a>
```

Use your site’s real CSS classes so the card matches the others.

---

## Step 3 — Optional: redirect an old tutorial URL

If you have an old page (e.g. `/claude-code-tutorial.html`) that should send people to the new course, add at the top of that file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=https://mayankchugh-learning.github.io/claude-tutorial/" />
  <link rel="canonical" href="https://mayankchugh-learning.github.io/claude-tutorial/" />
  <title>Redirecting to Learn Claude…</title>
</head>
<body>
  <p>Moved to <a href="https://mayankchugh-learning.github.io/claude-tutorial/">Learn Claude — Full Course</a>.</p>
</body>
</html>
```

---

## Same domain (advanced)

To use `https://mayankchugh-learning.github.io/learn-claude/` instead of a separate repo URL:

1. Copy this project into a folder `learn-claude/` in the **portfolio** repo.
2. Enable Pages from that repo’s root (course lives at `/learn-claude/`).
3. Update `js/site-config.js` → `courseSite` to the new path.
4. Update portfolio Learning card `href` to `/learn-claude/`.

---

## Edit profile URLs in one place

Change links site-wide in:

```js
// js/site-config.js
window.LEARN_CLAUDE_LINKS = {
  profile: 'https://mayankchugh-learning.github.io/',
  learning: 'https://mayankchugh-learning.github.io/#learning',
  consulting: 'https://mayankchugh-learning.github.io/#consulting',
  courseSite: 'https://mayankchugh-learning.github.io/claude-tutorial/'
};
```

If your portfolio uses different section IDs (e.g. `#connect` instead of `#consulting`), update `consulting` here and in `slash-commands.html` nav.

---

## Checklist

- [ ] Course live at `…/claude-tutorial/`
- [ ] Portfolio Learning card links to course URL
- [ ] Course header “Portfolio” opens [mayankchugh-learning.github.io](https://mayankchugh-learning.github.io/)
- [ ] “Book a call” opens your consulting section
- [ ] Old tutorial page redirects (optional)

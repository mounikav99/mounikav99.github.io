# Mounika Veeramachaneni — Portfolio

Personal portfolio website. Skills-first positioning for a Data Analyst / BI Engineer.

**Stack:** React 18 · Vite · Tailwind CSS · Lucide Icons

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Production build
npm run build

# 4. Preview production build
npm run preview
```

---

## Using Claude Code (VS Code)

This project includes Claude Code agent prompt files in the `agents/` directory.
Each agent is scoped to a specific section of the site and sized to fit within
Claude Code's context window.

### Setup
1. Install the [Claude Code VS Code extension](https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code)
2. Open this folder in VS Code: `code mounika-portfolio`
3. Claude Code will automatically read `CLAUDE.md` for project context

### Running an Agent

In VS Code, open the Command Palette (`Cmd+Shift+P`) and run:
```
Claude: Open Chat
```

Then paste the contents of the relevant agent file as your first message.
Or run Claude Code from the terminal:

```bash
# From the project root
claude agents/agent-02-hero.md
```

### Agent Execution Order

Run these agents **in sequence** — each builds on the previous:

| Agent | File | Scope | Status |
|-------|------|-------|--------|
| Agent 1 | _(scaffold — done)_ | Project setup, deps, data layer | ✅ Done |
| Agent 2 | `agents/agent-02-hero.md` | Hero section polish + animations | ⬜ TODO |
| Agent 3 | `agents/agent-03-skills.md` | Skills section polish + tab animations | ⬜ TODO |
| Agent 4 | `agents/agent-04-experience.md` | Experience timeline polish | ⬜ TODO |
| Agent 5 | `agents/agent-05-projects.md` | Projects cards polish | ⬜ TODO |
| Agent 6 | `agents/agent-06-certs-contact.md` | Certifications + Contact | ⬜ TODO |
| Agent 7 | `agents/agent-07-navbar-layout.md` | Navbar active states + layout | ⬜ TODO |
| Agent 8 | `agents/agent-08-qa-perf.md` | QA, a11y, performance, build | ⬜ TODO |

Mark agents done as you complete them.

---

## Content Updates

All site content lives in **one file**: `src/data/resumeData.js`

To update anything:
- Personal info, email, LinkedIn → `personal` object
- Skills → `skillDomains` array
- Work history → `experience` array
- Featured projects → `projects` array
- Certifications → `certifications` array
- Education → `education` array (no graduation year)

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to netlify.com/drop
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/your-repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0f1e` | Page background |
| Card BG | `#0f172a` | Component backgrounds |
| Teal accent | `#2dd4bf` | Primary CTA, teal domains |
| Amber accent | `#fbbf24` | Secondary accent, amber domains |
| Text primary | `#f1f5f9` | Headings |
| Text muted | `#94a3b8` | Body, descriptions |
| Border | `#1e293b` | Default borders |

---

## Rules (do not break)
- **No graduation year** in any rendered output
- **Skills section before Experience** — do not reorder
- **resumeData.js is the source of truth** — never hardcode content in components

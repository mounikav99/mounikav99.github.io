# Agent 8 — QA, Accessibility & Performance

## Context
Read CLAUDE.md first. This is the final pass — all components should exist and work before running this agent.

## Your Scope
All files under `src/` — read-only audit + targeted fixes only. Do not rewrite components.

---

## Tasks

### Task 8.1 — Graduation year audit
Search every `.jsx` and `.js` file for: `2025`, `2023`, `graduation`, `graduated`
Command: `grep -rn "2025\|2023\|graduation\|graduated" src/`
Report any matches. If found in data or rendered text, remove the year.
(Years in code comments referencing libraries/versions are acceptable.)

### Task 8.2 — Accessibility audit
Check each component for:
- [ ] All interactive elements (`<button>`, `<a>`) have accessible text or `aria-label`
- [ ] Images (if any) have `alt` attributes
- [ ] Form inputs have associated `<label>` elements (via `htmlFor` or wrapping label)
- [ ] Color contrast: teal-400 (#2dd4bf) on slate-950 (#0a0f1e) → passes AA (7.9:1 ✓)
- [ ] No `tabIndex` issues — interactive elements reachable by keyboard
- [ ] Decorative icons have `aria-hidden="true"`

Fix any issues found. Add `aria-label` where missing.

### Task 8.3 — Console error check
Run `npm run build` and confirm:
- Zero build errors
- Zero TypeScript/prop-type warnings (or document acceptable ones with inline comments)
- No missing import warnings

Fix all errors. For warnings from third-party libs, add `// eslint-disable-next-line` with a reason.

### Task 8.4 — Lazy loading
Add React.lazy + Suspense for below-fold sections to improve initial load:
```jsx
// In App.jsx
import { lazy, Suspense } from 'react'
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))

// Wrap in App:
<Suspense fallback={<div className="h-24" />}>
  <Skills />
  {/* etc */}
</Suspense>
```
Keep Hero, Navbar, Footer as eager imports.

### Task 8.5 — OG meta tag audit
Check `index.html` for:
- [ ] `<title>` — present and correct
- [ ] `<meta name="description">` — present
- [ ] `<meta property="og:title">` — present
- [ ] `<meta property="og:description">` — present
- [ ] `<link rel="canonical">` — add if missing (use placeholder `https://mounika.dev`)
- [ ] Favicon — create a minimal `public/favicon.svg` if missing

Minimal favicon SVG:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#0a0f1e" rx="6"/>
  <text x="5" y="23" font-family="monospace" font-size="16" font-weight="700" fill="#2dd4bf">M</text>
  <text x="16" y="23" font-family="monospace" font-size="16" font-weight="700" fill="#fbbf24">V</text>
</svg>
```

### Task 8.6 — Mobile viewport QA checklist
Using browser devtools simulation, verify these breakpoints:
- **375px** (iPhone SE): No horizontal scroll, all text readable, no overlapping elements
- **768px** (iPad): 2-col grid works, nav collapses properly
- **1280px** (desktop): 3-col project grid, timeline visible, full nav

Document any issues found as GitHub-style issues in a new file: `QA_NOTES.md`

### Task 8.7 — Final build
Run `npm run build` and confirm `dist/` folder is generated.
Run `npm run preview` and do a final visual check.
Output the dist folder size summary.

## Acceptance Criteria
- [ ] Zero graduation years in any rendered output
- [ ] All interactive elements accessible
- [ ] Build completes with zero errors
- [ ] Lazy loading implemented for below-fold sections
- [ ] OG tags complete, favicon exists
- [ ] No horizontal scroll on mobile
- [ ] `QA_NOTES.md` created documenting findings
- [ ] Production build succeeds

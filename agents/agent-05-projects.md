# Agent 5 — Projects Section

## Context
Read CLAUDE.md first for design tokens, rules, and project conventions.

## Your Scope
**File to edit:** `src/components/Projects.jsx`
**Data source:** `src/data/resumeData.js` (projects array — do not modify)

## Tasks (complete all in one session)

### Task 5.1 — SVG visual thumbnail per card
Add a decorative SVG abstract shape to each card header as a visual texture.
Place it in the top-right corner of the card, partially overlapping the card edge (`overflow: hidden` on card).

For teal cards, use this pattern:
```jsx
<svg className="absolute top-0 right-0 opacity-10" width="120" height="80" viewBox="0 0 120 80">
  <circle cx="100" cy="10" r="60" fill="#2dd4bf" />
  <circle cx="110" cy="60" r="30" fill="#2dd4bf" />
</svg>
```
For amber cards:
```jsx
<svg className="absolute top-0 right-0 opacity-10" width="120" height="80" viewBox="0 0 120 80">
  <circle cx="100" cy="10" r="60" fill="#fbbf24" />
  <circle cx="110" cy="60" r="30" fill="#fbbf24" />
</svg>
```
Add `position: relative; overflow: hidden` to the card div.

### Task 5.2 — Scroll animation
Add the standard IntersectionObserver pattern from CLAUDE.md to each `ProjectCard`.
Each card should slide up individually when it enters the viewport.
Stagger: `style={{ transitionDelay: \`${index * 100}ms\` }}`

Pass `index` prop to `ProjectCard` and use it for the delay.

### Task 5.3 — Hover lift refinement
Enhance the hover state on cards:
- Current: `hover:-translate-y-1`
- Replace with: `hover:-translate-y-2 hover:shadow-lg`
- For teal cards: `hover:shadow-teal-400/10`
- For amber cards: `hover:shadow-amber-400/10`
- Add `shadow-none` as the default so shadow transitions cleanly

### Task 5.4 — GitHub/case study placeholder links
Add a disabled placeholder link row at the bottom of each card (below stack badges):
```jsx
<div className="flex gap-4 mt-4 pt-4 border-t border-slate-800">
  <span className="text-xs text-slate-700 font-mono cursor-not-allowed">
    GitHub (coming soon)
  </span>
  <span className="text-xs text-slate-700 font-mono cursor-not-allowed">
    Case Study (coming soon)
  </span>
</div>
```
Style clearly as disabled — no hover effects. 
TODO comment: `// TODO: Replace with real links when available`

### Task 5.5 — Section heading underline
Match the Skills section: add `<div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 rounded" />` under the "Projects" h2.

## Acceptance Criteria
- [ ] SVG thumbnail visible in card header for all 3 cards
- [ ] Cards animate in on scroll with stagger
- [ ] Hover lift + shadow transition works
- [ ] Placeholder links appear but are clearly disabled
- [ ] Gradient underline on heading
- [ ] Card layout: 1 col mobile, 2 col tablet, 3 col desktop
- [ ] No console errors

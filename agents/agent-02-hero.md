# Agent 2 — Hero Section

## Context
You are working on a portfolio website for Mounika Veeramachaneni, a Data Analyst / BI Engineer.
Read CLAUDE.md first for design tokens, rules, and project conventions.

## Your Scope
**File to edit:** `src/components/Hero.jsx`
**Data source:** `src/data/resumeData.js` (personal object — do not modify this file)

## Tasks (complete all in one session)

### Task 2.1 — Dot-grid background
Add a subtle dot-grid SVG background pattern to the Hero section.
- Use an inline SVG `<pattern>` or CSS `background-image: radial-gradient(circle, rgba(45,212,191,0.12) 1px, transparent 1px)` with `background-size: 32px 32px`
- Pattern should fade out toward the bottom (use a CSS mask-image gradient)
- Apply as `position: absolute, inset-0, pointer-events-none, z-index: 0` so it doesn't block clicks
- Wrap all Hero content in a `relative z-10` div

### Task 2.2 — Staggered entrance animations
Add CSS animation-delay staggered entrance for:
1. Eyebrow label → delay 0ms
2. Name h1 → delay 100ms
3. Rotating tagline → delay 200ms
4. Summary paragraph → delay 300ms
5. CTA buttons → delay 400ms
6. Meta pills → delay 500ms

Each element starts `opacity-0 translate-y-4` and transitions to `opacity-100 translate-y-0`.
Use `animation: fadeIn 0.6s ease-out forwards` with the existing `fadeIn` keyframe in index.css.
Add inline style `animationDelay: 'Xms'` to each element.

### Task 2.3 — Smoother tagline crossfade
Replace the current `opacity` toggle with absolute-positioned overlapping spans:
- Wrapper: `position: relative, height: 2.5rem, overflow: hidden`
- Both spans `position: absolute`, current one fades in, previous fades out simultaneously
- Transition: `opacity 0.4s ease-in-out`
- This eliminates the layout jump caused by the current approach

### Task 2.4 — Scroll-fade on the ArrowDown indicator
Add an effect that hides the scroll arrow after the user scrolls past 80px:
- `useEffect` with scroll event listener
- State: `showArrow` boolean
- Apply `opacity-0 pointer-events-none` class when scrolled

### Task 2.5 — Verify no graduation year
Grep the component and confirm the word "year", "graduated", "2025", "2023" do not appear.

## Acceptance Criteria
- [ ] Dot-grid background visible and fades at bottom edge
- [ ] All elements animate in with stagger on page load
- [ ] Tagline crossfades smoothly with no layout jump
- [ ] Scroll arrow fades on scroll
- [ ] No graduation year anywhere
- [ ] Component renders without errors (`npm run dev`)
- [ ] Looks correct on 375px and 1280px viewport widths

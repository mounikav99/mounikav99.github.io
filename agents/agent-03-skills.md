# Agent 3 — Skills Section

## Context
Read CLAUDE.md first for design tokens, rules, and project conventions.

## Your Scope
**File to edit:** `src/components/Skills.jsx`
**Data source:** `src/data/resumeData.js` (skillDomains array — do not modify)

## Tasks (complete all in one session)

### Task 3.1 — Animated teal underline on heading
After the "Skills & Technologies" h2, add a decorative underline:
```jsx
<div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 rounded" />
```

### Task 3.2 — Tab change animation
When the active tab changes, animate the pills re-appearing:
- On tab change: set a `transitioning` state to `true`, wait 150ms, set it to `false`
- While transitioning: pills wrapper has `opacity-0 scale-98`
- On resolve: pills wrapper has `opacity-100 scale-100 transition-all duration-200`

### Task 3.3 — Stagger pill entrance
When pills appear (on mount + tab change), stagger each pill:
- Map over skills with index `i`
- Apply `style={{ animationDelay: \`${i * 30}ms\` }}` 
- Use `animation: fadeIn 0.4s ease-out forwards` + initial `opacity-0`

### Task 3.4 — Skill count display
Add a small stat line under the section heading:
- Format: "{totalCount} skills across {skillDomains.length} domains"
- Style: `text-sm text-slate-600 font-mono mt-1`
- When a tab is active: update to show "{domain.skills.length} skills in {domain.label}"

### Task 3.5 — Scroll animation
Wrap the entire section content (not the `<section>` tag itself) in a ref div.
Use the standard IntersectionObserver pattern from CLAUDE.md to slide it up on scroll.

## Acceptance Criteria
- [ ] Gradient underline appears under heading
- [ ] Switching tabs animates pills in/out cleanly
- [ ] Pills stagger-in with delay
- [ ] Skill count updates correctly per tab
- [ ] Section slides in on scroll
- [ ] All 6 domains render correctly with correct colors
- [ ] "All" tab shows all domains with their headers
- [ ] No errors in console

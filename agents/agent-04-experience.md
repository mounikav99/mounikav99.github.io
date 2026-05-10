# Agent 4 — Experience Section

## Context
Read CLAUDE.md first for design tokens, rules, and project conventions.

## Your Scope
**File to edit:** `src/components/Experience.jsx`
**Data source:** `src/data/resumeData.js` (experience array — do not modify)

## Tasks (complete all in one session)

### Task 4.1 — Fix IntersectionObserver stagger
The current stub adds the observer but stagger via `transitionDelay` on the element itself
won't work because the observer fires individually per card. Fix:
- Set initial classes `opacity-0 translate-y-6` on each card via a `data-animate` attribute
- In the observer callback, also check `transitionDelay` is applied before adding classes
- Alternative: use a single observer on the section, then stagger children with a forEach + setTimeout

### Task 4.2 — Show more / Show less toggle
Each job has 4-6 highlights. Show the first 3 by default:
- Add `const [expanded, setExpanded] = useState(false)` inside `ExperienceCard`
- Slice highlights: `job.highlights.slice(0, expanded ? job.highlights.length : 3)`
- If `job.highlights.length > 3`, show a "Show {job.highlights.length - 3} more" button below the list
- Button style: `text-xs text-slate-600 hover:text-teal-400 font-mono mt-2 transition-colors`
- When expanded: button text becomes "Show less"

### Task 4.3 — Timeline dot pulse on current role
For the most recent role (where `job.period.includes('Present')`):
- Add a pulsing ring behind the timeline dot using CSS `animate-ping`
- Implementation:
  ```jsx
  {isCurrent && (
    <span className="absolute -left-0.5 top-1.5 w-4 h-4 rounded-full bg-teal-400/20 animate-ping" />
  )}
  ```
  (position it behind the dot using z-index)

### Task 4.4 — Verify no graduation year
Ensure the strings "2025", "2023", "graduated", "degree" do not appear in rendered UI text.
Education data is in Certifications.jsx — just make sure Experience has no leakage.

### Task 4.5 — Responsive timeline
On mobile (< 768px), reduce left padding from `pl-8` to `pl-6` and adjust dot position.
Ensure company name + period stack vertically (not side-by-side) on screens < 480px.

## Acceptance Criteria
- [ ] Cards animate in on scroll with stagger
- [ ] "Show more / less" toggle works on all 3 experience cards
- [ ] Current role dot has pulse animation
- [ ] No graduation year in any rendered text
- [ ] Timeline looks correct on 375px mobile
- [ ] Stack badges visible on all cards
- [ ] No console errors

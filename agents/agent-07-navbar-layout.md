# Agent 7 — Navbar, Layout Shell & Polish

## Context
Read CLAUDE.md first for design tokens, rules, and project conventions.

## Your Scope
**Files to edit:**
- `src/components/Navbar.jsx`
- `src/components/ScrollToTop.jsx`
- `src/App.jsx`
- `src/index.css` (additions only)

---

## Tasks

### Task 7.1 — Active section tracking (Navbar)
Implement IntersectionObserver on all section IDs to track which section is visible:
```js
const sectionIds = ['hero', 'skills', 'experience', 'projects', 'certifications', 'contact']
const [activeSection, setActiveSection] = useState('hero')

useEffect(() => {
  const observers = sectionIds.map((id) => {
    const el = document.getElementById(id)
    if (!el) return null
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return obs
  })
  return () => observers.forEach((o) => o?.disconnect())
}, [])
```
Use `activeSection` to apply active styles to the matching nav link:
- Active: `text-teal-400` + `border-b border-teal-400`
- Inactive: `text-slate-400 hover:text-teal-400`

### Task 7.2 — Smooth scroll handler
Replace bare `<a href="#section">` with a click handler:
```js
const handleNavClick = (e, href) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  setMobileOpen(false)
}
```
Apply to all nav links: `onClick={(e) => handleNavClick(e, link.href)}`

### Task 7.3 — Mobile drawer animation
Add CSS transition to the mobile drawer so it slides down instead of snapping:
```jsx
<div
  className={`md:hidden bg-slate-900 border-t border-slate-800 px-6 overflow-hidden transition-all duration-300 ease-in-out ${
    mobileOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
  }`}
>
```
Remove the `{mobileOpen && ...}` conditional — use CSS height instead.

### Task 7.4 — ScrollToTop fade animation
Add CSS transitions to ScrollToTop so it fades in/out instead of snapping:
```jsx
<button
  className={`fixed bottom-8 right-8 z-50 p-3 bg-slate-800 border border-slate-700 rounded-full text-slate-400 
    hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300
    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
>
```
Remove the `if (!visible) return null` early return — render always, control with opacity.

### Task 7.5 — App.jsx section spacing audit
Check all sections have consistent `pt-20 pb-16` or `py-24` padding.
Add `className="space-y-0"` to the `<main>` tag if sections have inconsistent gaps.
Ensure the Hero section has `pt-20` to clear the fixed navbar (60px = 15 = `pt-[60px]` → safer: `pt-24`).

### Task 7.6 — Add page-wide selection style
Confirm `index.css` has the `::selection` custom style (it should already — verify and add if missing):
```css
::selection {
  background: rgba(45, 212, 191, 0.25);
  color: #f1f5f9;
}
```

## Acceptance Criteria
- [ ] Active nav link highlights as user scrolls through sections
- [ ] Clicking a nav link smooth-scrolls to the correct section
- [ ] Mobile drawer animates open/close
- [ ] ScrollToTop fades in/out (no snap)
- [ ] Hero content not hidden behind navbar
- [ ] All sections have consistent vertical rhythm
- [ ] Custom text selection color works in browser
- [ ] Nav tested on 375px and 1280px

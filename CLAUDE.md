# Mounika Veeramachaneni — Portfolio Website

## Project Overview
Personal portfolio site for a Data Analyst / BI Engineer. Skills-first positioning — not tied to a single job role. Built with React + Vite + Tailwind CSS.

**Live design direction:** Dark editorial tech aesthetic. Slate-950 base, teal-400 + amber-400 accents, Space Mono for code elements, DM Sans for body.

## Critical Rules (Never Break These)
- **NO graduation year anywhere** — not in Education, not in comments, not in placeholders
- **Skills-first** — Skills section appears before Experience in all layouts
- **No role-specific language** — copy should reflect breadth (analytics, engineering, ITSM, ML) not one company
- **Responsive always** — every component must work on 375px mobile and 1440px desktop

## Project Structure
```
src/
  data/resumeData.js     ← SINGLE SOURCE OF TRUTH — all content lives here
  components/
    Navbar.jsx           ← Agent 7
    Hero.jsx             ← Agent 2
    Skills.jsx           ← Agent 3
    Experience.jsx       ← Agent 4
    Projects.jsx         ← Agent 5
    Certifications.jsx   ← Agent 6
    Contact.jsx          ← Agent 6
    Footer.jsx           ← Agent 7
    ScrollToTop.jsx      ← Agent 7
  App.jsx
  index.css
  main.jsx
agents/                  ← Claude Code agent prompt files
.claude/
  settings.json          ← Claude Code settings
```

## Design Tokens (from tailwind.config.js + index.css)
- **BG Primary:** `bg-slate-950` (#0a0f1e)
- **BG Cards:** `bg-slate-900` (#0f172a)
- **BG Elevated:** `bg-slate-800` (#1e293b)
- **Accent Teal:** `text-teal-400` / `bg-teal-400` (#2dd4bf)
- **Accent Amber:** `text-amber-400` / `bg-amber-400` (#fbbf24)
- **Text Primary:** `text-slate-100`
- **Text Muted:** `text-slate-400` / `text-slate-500`
- **Borders:** `border-slate-800` (default), `border-slate-700` (hover)
- **Font Display/Mono:** `font-mono` = Space Mono
- **Font Body:** `font-sans` = DM Sans

## Gradient utility
Use `className="text-gradient"` for teal→amber gradient text (defined in index.css).

## Animation Pattern (IntersectionObserver)
All scroll-triggered animations follow this pattern:
```jsx
const ref = useRef(null)
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-6')
      }
    },
    { threshold: 0.15 }
  )
  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [])
// Initial: className="opacity-0 translate-y-6 transition-all duration-500"
```

## Stack Badges
Reuse this pattern consistently:
```jsx
<span className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">
  {tech}
</span>
```

## Development Commands
```bash
npm install       # install deps
npm run dev       # dev server at localhost:5173
npm run build     # production build
npm run preview   # preview production build
```

## Agent Execution Order
Run agents in this sequence to avoid dependency issues:
1. Agent 1 (scaffold) — already done, project exists
2. Agent 2 (Hero)
3. Agent 3 (Skills)
4. Agent 4 (Experience)
5. Agent 5 (Projects)
6. Agent 6 (Certifications + Contact)
7. Agent 7 (Navbar + Layout + Polish)
8. Agent 8 (QA + Performance)

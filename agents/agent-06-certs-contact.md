# Agent 6 — Certifications & Contact

## Context
Read CLAUDE.md first for design tokens, rules, and project conventions.

## Your Scope
**Files to edit:** 
- `src/components/Certifications.jsx`
- `src/components/Contact.jsx`
**Data source:** `src/data/resumeData.js` (certifications, education, personal objects)

---

## Certifications Tasks

### Task 6.1 — Verified badge with checkmark
Replace the current `Award` icon + "Certified" text with a proper verified badge:
```jsx
<div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-1.5">
  <div className="w-4 h-4 rounded-full bg-teal-400/15 flex items-center justify-center">
    <Check size={10} className="text-teal-400" />
  </div>
  <span className="text-xs text-slate-600">Verified credential</span>
</div>
```
Import `Check` from lucide-react.

### Task 6.2 — Cert card hover glow
The current `hover:shadow-teal-400/5` is too subtle. Increase to:
- Teal cards: `hover:shadow-[0_0_24px_rgba(45,212,191,0.08)]`
- Amber cards: `hover:shadow-[0_0_24px_rgba(251,191,36,0.08)]`
Also add `hover:border-slate-700` for a visible border brightening.

### Task 6.3 — Education section — confirm no graduation year
Audit the rendered Education entries in `Certifications.jsx`.
Confirm `education` data from `resumeData.js` has no year fields rendered.
The stub already excludes years — verify this is correct and add a comment:
`{/* NOTE: graduation year intentionally omitted */}`

### Task 6.4 — Section scroll animation
Add IntersectionObserver (CLAUDE.md pattern) to both the cert grid and the education div.

---

## Contact Tasks

### Task 6.5 — Formspree integration comment
Add a detailed TODO block at the top of the form's `handleSubmit` function:
```js
// TODO: Formspree integration
// 1. Sign up at https://formspree.io and create a new form
// 2. Copy your form ID (looks like: xpzgkwrq)
// 3. Replace the mailto fallback below with:
//
// const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
// })
// if (res.ok) setSent(true)
// else setErrors({ submit: 'Something went wrong. Try emailing directly.' })
```

### Task 6.6 — Form field focus styling
Add a visible focus ring on form inputs using Tailwind:
- Replace `focus:border-teal-400/50` with `focus:ring-1 focus:ring-teal-400/40 focus:border-teal-400/50`
- Add `focus:bg-slate-800/50` to slightly lighten the input on focus

### Task 6.7 — Loading state on form submit
Add a submitting state so the button shows "Sending..." while the mailto opens:
```jsx
const [submitting, setSubmitting] = useState(false)
// In handleSubmit, before action: setSubmitting(true)
// After: setTimeout(() => { setSent(true); setSubmitting(false) }, 800)
```
Button when submitting:
```jsx
<button disabled={submitting} className="... opacity-75 cursor-not-allowed">
  {submitting ? 'Sending...' : 'Send Message'}
</button>
```

### Task 6.8 — Background accent
Add a subtle teal radial gradient behind the Contact section:
```jsx
<section className="relative py-24 ...">
  <div className="absolute inset-0 pointer-events-none"
    style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(45,212,191,0.04) 0%, transparent 70%)' }}
  />
  {/* rest of content */}
</section>
```

## Acceptance Criteria
- [ ] Checkmark verified badge on all 4 cert cards
- [ ] Hover glow visible on cert cards
- [ ] No graduation year in education entries (comment added)
- [ ] Scroll animations on both sections
- [ ] Formspree TODO comment complete and accurate
- [ ] Input focus ring visible on all form fields
- [ ] Button loading state works
- [ ] Background gradient visible behind Contact
- [ ] No console errors

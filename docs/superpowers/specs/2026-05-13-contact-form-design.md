# Contact Form Design

**Date:** 2026-05-13
**Status:** Approved

## Overview

Replace the three social cards on `/contact` with a Formspree-powered contact form. Keep LinkedIn and GitHub links below the form as secondary CTAs. The form matches the existing dark zinc palette and applies Figma CTA principles for conversion.

## Architecture

- **Page:** `app/contact/page.tsx` — remains a client component (`"use client"`) to manage form state (loading, success, error) without a redirect
- **Backend:** [Formspree](https://formspree.io) — form posts to `https://formspree.io/f/{FORM_ID}` via `fetch`. No API routes needed.
- **No new dependencies** — plain `fetch`, React `useState`

## Component Design

### Form fields
| Field | Type | Required |
|-------|------|----------|
| Name | text input | yes |
| Email | email input | yes |
| Message | textarea | yes |

Name and email sit side by side in a two-column grid. Message spans full width.

### States
- **Idle** — form visible, send button enabled
- **Submitting** — button shows "Sending…", disabled, inputs disabled
- **Success** — form replaced with a thank-you message: "Message sent! I'll be in touch soon."
- **Error** — inline error below the button: "Something went wrong. Try emailing me directly."

### Layout (top to bottom)
1. Centered heading: **"Say hello"**
2. Sub-copy: *"Open to new opportunities, collaborations, and interesting conversations."*
3. Form (name + email row, message textarea)
4. Pill send button: **"Send message →"**
5. Direct email fallback: *"or email me at filipmorris@duck.com"*
6. Divider
7. LinkedIn + GitHub text links

## Styling

Follows existing zinc dark palette:
- Field background: `zinc-900` (`#18181b`) with `zinc-800` border
- Field focus: `zinc-700` border ring
- Send button: white background, black text, `rounded-full` (matches homepage CTA)
- Sub-copy and fallback text: `zinc-500`
- Email link: `zinc-400` with underline

## Formspree Setup (one-time, done by user)

1. Create account at formspree.io
2. Create a new form — get the form ID (e.g. `xpzgkqab`)
3. Add `NEXT_PUBLIC_FORMSPREE_ID=xpzgkqab` to `.env.local`
4. Formspree free tier: 50 submissions/month, spam filtering included

## Data Flow

```
User fills form → clicks Send
  → fetch POST https://formspree.io/f/{FORM_ID}
  → on 200: show success state
  → on error: show inline error message
```

## Out of Scope

- CRM integration
- File attachments
- Subject line field
- Rate limiting (handled by Formspree)
- Email notifications beyond Formspree's default forwarding

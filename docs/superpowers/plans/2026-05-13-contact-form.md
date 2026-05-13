# Contact Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the three social cards on `/contact` with a Formspree-powered contact form that posts submissions to Filip's email.

**Architecture:** Single client component (`app/contact/page.tsx`) manages form state (idle → submitting → success/error) using `useState`. Form POSTs to Formspree via `fetch` — no API routes, no new dependencies. LinkedIn and GitHub links remain as secondary CTAs below the form.

**Tech Stack:** Next.js 13 App Router, React `useState`, Formspree (external service), Tailwind CSS, TypeScript

---

## File Map

| Action | File | What changes |
|--------|------|--------------|
| Modify | `app/contact/page.tsx` | Full replacement — form replaces social cards |
| Create | `.env.local` | Add `NEXT_PUBLIC_FORMSPREE_ID` (if file doesn't exist) |

---

## Task 1: Create Formspree form and configure env var

**Files:**
- Create/modify: `.env.local`

- [ ] **Step 1: Sign up and create a form on Formspree**

  Go to https://formspree.io, create a free account, click "New Form", name it "Portfolio Contact". You'll get a form ID like `xpzgkqab`.

- [ ] **Step 2: Add the form ID to your env file**

  Check if `.env.local` exists:
  ```bash
  ls .env.local 2>/dev/null && echo "exists" || echo "not found"
  ```

  If it doesn't exist, create it. Either way, add this line:
  ```
  NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
  ```
  Replace `your_form_id_here` with the actual ID from Formspree (e.g. `xpzgkqab`).

- [ ] **Step 3: Verify the env var loads**

  Start the dev server and confirm no errors:
  ```bash
  pnpm dev
  ```
  Expected: server starts on http://localhost:3000 with no errors.

---

## Task 2: Rewrite the contact page

**Files:**
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Replace the file contents**

  Open `app/contact/page.tsx` and replace the entire file with:

  ```tsx
  "use client";
  import Link from "next/link";
  import { Github, Linkedin } from "lucide-react";
  import { Navigation } from "../components/nav";
  import { useState } from "react";

  type FormState = "idle" | "submitting" | "success" | "error";

  export default function Contact() {
  	const [state, setState] = useState<FormState>("idle");

  	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  		e.preventDefault();
  		setState("submitting");

  		const form = e.currentTarget;
  		const data = {
  			name: (form.elements.namedItem("name") as HTMLInputElement).value,
  			email: (form.elements.namedItem("email") as HTMLInputElement).value,
  			message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  		};

  		try {
  			const res = await fetch(
  				`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
  				{
  					method: "POST",
  					headers: { "Content-Type": "application/json", Accept: "application/json" },
  					body: JSON.stringify(data),
  				},
  			);
  			if (res.ok) {
  				setState("success");
  			} else {
  				setState("error");
  			}
  		} catch {
  			setState("error");
  		}
  	}

  	return (
  		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
  			<Navigation />
  			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
  				<div className="w-full max-w-md mx-auto mt-32 sm:mt-0">
  					{state === "success" ? (
  						<div className="text-center py-16">
  							<p className="text-zinc-200 text-lg font-medium">Message sent!</p>
  							<p className="text-zinc-500 text-sm mt-2">I'll be in touch soon.</p>
  						</div>
  					) : (
  						<>
  							<div className="text-center mb-8">
  								<h1 className="text-white text-2xl font-semibold tracking-tight mb-2 font-display">
  									Say hello
  								</h1>
  								<p className="text-zinc-500 text-sm leading-relaxed">
  									Open to new opportunities, collaborations,
  									<br />
  									and interesting conversations.
  								</p>
  							</div>

  							<form onSubmit={handleSubmit} className="flex flex-col gap-3">
  								<div className="grid grid-cols-2 gap-3">
  									<input
  										name="name"
  										type="text"
  										placeholder="Name"
  										required
  										disabled={state === "submitting"}
  										className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 disabled:opacity-50"
  									/>
  									<input
  										name="email"
  										type="email"
  										placeholder="Email"
  										required
  										disabled={state === "submitting"}
  										className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 disabled:opacity-50"
  									/>
  								</div>
  								<textarea
  									name="message"
  									placeholder="What's on your mind?"
  									required
  									rows={5}
  									disabled={state === "submitting"}
  									className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 disabled:opacity-50 resize-none"
  								/>

  								<button
  									type="submit"
  									disabled={state === "submitting"}
  									className="w-full bg-white text-black text-sm font-semibold py-3 rounded-full hover:bg-zinc-200 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
  								>
  									{state === "submitting" ? "Sending…" : "Send message →"}
  								</button>

  								{state === "error" && (
  									<p className="text-center text-xs text-red-400">
  										Something went wrong. Try emailing me directly.
  									</p>
  								)}
  							</form>

  							<div className="text-center mt-4">
  								<span className="text-zinc-500 text-sm">or email me at </span>
  								<a
  									href="mailto:filipmorris@duck.com"
  									className="text-zinc-400 text-sm underline underline-offset-2 hover:text-zinc-200 duration-300"
  								>
  									filipmorris@duck.com
  								</a>
  							</div>

  							<div className="border-t border-zinc-800 mt-6 pt-6 flex justify-center gap-6">
  								<Link
  									href="https://www.linkedin.com/in/filip-muntean-54bb247b/"
  									target="_blank"
  									className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 duration-300"
  								>
  									<Linkedin size={14} />
  									LinkedIn
  								</Link>
  								<Link
  									href="https://github.com/filipmuntean"
  									target="_blank"
  									className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 duration-300"
  								>
  									<Github size={14} />
  									GitHub
  								</Link>
  							</div>
  						</>
  					)}
  				</div>
  			</div>
  		</div>
  	);
  }
  ```

- [ ] **Step 2: Verify the page compiles**

  ```bash
  pnpm build
  ```
  Expected: build completes with no TypeScript or lint errors. If Rome complains about formatting, run `pnpm fmt` first.

---

## Task 3: Manual smoke test

**Files:** none — verification only

- [ ] **Step 1: Start dev server**

  ```bash
  pnpm dev
  ```

- [ ] **Step 2: Check idle state**

  Open http://localhost:3000/contact. Verify:
  - "Say hello" heading and sub-copy are visible
  - Two-column name/email row renders correctly
  - Message textarea is present
  - "Send message →" pill button is white on dark
  - "or email me at filipmorris@duck.com" appears below the button
  - LinkedIn and GitHub links are present below the divider

- [ ] **Step 3: Check submitting state**

  Fill in the form fields with test data. Click Send. Verify:
  - Button text changes to "Sending…" and becomes disabled
  - Inputs become disabled (opacity drops)

- [ ] **Step 4: Check success state**

  After a real submission (requires Formspree ID configured), verify:
  - Form is replaced with "Message sent! I'll be in touch soon."
  - Check your email — Formspree should have forwarded the submission

- [ ] **Step 5: Check error state**

  Temporarily break the Formspree URL (change one character in the ID), submit the form, verify:
  - Error message appears: "Something went wrong. Try emailing me directly."
  - Restore the correct ID afterward

- [ ] **Step 6: Check homepage "Get in touch" button**

  Open http://localhost:3000 and click the "Get in touch" button. Verify it navigates to `/contact` and the form is visible.

---

## Task 4: Commit

- [ ] **Step 1: Commit the changes**

  ```bash
  git add app/contact/page.tsx
  git commit -m "feat: replace contact cards with Formspree contact form"
  ```

  Note: do **not** commit `.env.local` — it contains your private Formspree ID.

- [ ] **Step 2: Verify .env.local is gitignored**

  ```bash
  git status
  ```
  Expected: `.env.local` does not appear in the output. If it does, add it to `.gitignore` before committing.

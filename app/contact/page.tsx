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
			message: (form.elements.namedItem("message") as HTMLTextAreaElement)
				.value,
		};

		try {
			const res = await fetch(
				`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
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
							<p className="text-zinc-500 text-sm mt-2">
								I'll be in touch soon.
							</p>
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
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 duration-300"
								>
									<Linkedin size={14} />
									LinkedIn
								</Link>
								<Link
									href="https://github.com/filipmuntean"
									target="_blank"
									rel="noopener noreferrer"
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

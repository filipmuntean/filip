import { Navigation } from "../components/nav";

export const metadata = {
	title: "About",
	description: "AI Engineer in Amsterdam. MSc in Artificial Intelligence at VU Amsterdam.",
};


export default function About() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="px-6 pt-24 mx-auto max-w-3xl md:pt-32 pb-16">

				<section className="mb-16">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display mb-2">
						About
					</h1>
					<p className="text-zinc-400 mb-8">A bit about me.</p>
					<div className="space-y-4 text-zinc-400 leading-relaxed">
						<p>
							I'm Filip, an AI Engineer based in Amsterdam. I recently completed my MSc in Artificial Intelligence at VU Amsterdam, where my research focused on simulating persuasion dynamics using LLMs — work that was published at LREC 2026 in Palma de Mallorca.
						</p>
						<p>
							I also co-author <a href="https://pypi.org/project/c4fairness/0.1.2" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline underline-offset-4 decoration-zinc-700 hover:text-white duration-200">c4fairness</a>, an open-source Python package for locating prediction-error disparities in machine learning models — built at VU Amsterdam, co-funded by University of Twente, and presented as a poster at VPH 2026 in Milan.
						</p>
						<p>
							My background sits at the intersection of NLP, agent-based systems, and full-stack engineering. I enjoy building things that are both technically rigorous and actually useful.
						</p>
					</div>
				</section>

				<section className="mb-16">
					<h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6">
						Volunteering
					</h2>

					<div className="space-y-8">
						<div>
							<div className="border-l-2 border-zinc-700 pl-4 space-y-6">
								<div>
									<div className="flex justify-between items-start mb-1">
										<h4 className="font-medium text-zinc-100">Study Association STORM — VU Amsterdam</h4>
										<span className="text-sm text-zinc-500">Feb 2022 – Feb 2023</span>
									</div>
									<ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside mt-2">
										<li>Secured new sponsors, leading to a 700% increase in sponsorship revenue.</li>
										<li>Organised workshops (+35% attendance) and a Career Fair with 250 attendees.</li>
										<li>Ran marketing across email, Instagram, Facebook, and Canvas — 50% boost in engagement.</li>
										<li>Built partnerships with Uber, KPN, Adyen, and others.</li>
									</ul>
								</div>
								<div>
									<div className="flex justify-between items-start mb-1">
										<h4 className="font-medium text-zinc-100">Study Association STORM — VU Amsterdam</h4>
										<span className="text-sm text-zinc-500">Oct 2019 – Feb 2022</span>
									</div>
									<ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside mt-2">
										<li>Ran promotion campaigns to drive event attendance.</li>
										<li>Co-managed hospitality operations through HoReCa Committee leadership.</li>
										<li>Organised sports and social activities; served as team Secretary.</li>
									</ul>
								</div>
								<div>
									<div className="flex justify-between items-start mb-1">
										<h4 className="font-medium text-zinc-100">Benelux Algorithm Programming Competition 2021</h4>
										<span className="text-sm text-zinc-500">30/10/2021</span>
									</div>
									<ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside mt-2">
										<li>Configured and deployed coding environments for competition participants.</li>
										<li>Coordinated catering, scheduling, and event logistics.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6">Languages</h2>
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b border-zinc-700">
								<th className="text-left py-2 pr-4 text-zinc-200 font-medium">Language</th>
								<th className="text-left py-2 text-zinc-200 font-medium">Level</th>
							</tr>
						</thead>
						<tbody>
							{[
								["Romanian", "Native"],
								["French", "Native"],
								["English", "C2"],
								["Spanish", "B2"],
								["Dutch", "A2"],
							].map(([lang, level]) => (
								<tr key={lang} className="border-b border-zinc-800 last:border-0">
									<td className="py-2 pr-4 text-zinc-400">{lang}</td>
									<td className="py-2 text-zinc-400">{level}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>

			</div>
		</div>
	);
}

import { Navigation } from "../components/nav";
import Link from "next/link";

const papers = [
	{
		title: "Green Bots versus Red Bots",
		description:
			"Evaluating Large Language Models for Simulating Persuasion Dynamics in Online Influence Campaigns",
		venue: "LREC-COLING 2025",
		date: "May 2026",
		url: "https://filipmuntean.github.io/greenbots-redbots/",
	},
];

const talks = [
	{
		title: "VU AI in Education",
		description:
			"Presented the Rolo-Tutor chatbot project and its contribution to educational activities within courses at VU.",
		location: "Amsterdam, The Netherlands",
		date: "16/04/2025",
	},
	{
		title: "Kooy Symposium 2025",
		description:
			"Presented a demo of the simulation tool and research progress made at TNO in the context of my MSc thesis.",
		location: "Stroe, The Netherlands",
		date: "16/04/2025",
	},
];

export default function Publications() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="px-6 pt-24 mx-auto max-w-3xl md:pt-32 pb-16">
				<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display mb-2">
					Publications
				</h1>
				<p className="text-zinc-400 mb-12">Research papers and academic work.</p>

				<section className="mb-12">
					<h2 className="text-lg font-semibold text-zinc-200 mb-4">Papers</h2>
					<div className="flex flex-col gap-4">
						{papers.map((pub) => (
							<Link
								key={pub.url}
								href={pub.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group block border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 duration-200 bg-zinc-900/30"
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-zinc-100 font-semibold group-hover:text-white duration-200">
											{pub.title}
										</h3>
										<p className="text-zinc-400 text-sm mt-1">{pub.description}</p>
										<p className="text-zinc-500 text-xs mt-2">{pub.venue}</p>
									</div>
									<span className="text-zinc-500 text-xs whitespace-nowrap pt-1">
										{pub.date}
									</span>
								</div>
							</Link>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-lg font-semibold text-zinc-200 mb-4">Talks & Presentations</h2>
					<div className="border-l-2 border-zinc-700 pl-4 flex flex-col gap-5">
						{talks.map((talk) => (
							<div key={talk.title}>
								<div className="flex items-start justify-between gap-4 mb-1">
									<h3 className="font-medium text-zinc-100">{talk.title}</h3>
									<span className="text-zinc-500 text-xs whitespace-nowrap">{talk.date}</span>
								</div>
								<p className="text-zinc-500 text-xs mb-1">{talk.location}</p>
								<p className="text-zinc-400 text-sm">{talk.description}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

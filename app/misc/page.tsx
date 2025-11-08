export default function MiscPage() {
	return (
		<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
			<div className="max-w-2xl mx-auto lg:mx-0">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
					Misc
				</h2>
				<p className="mt-4 text-zinc-400">
					Various things I'm involved with or have worked on.
				</p>
			</div>

			<section className="space-y-8">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h3 className="text-2xl font-bold tracking-tight text-zinc-100">
						Volunteering
					</h3>
					<div className="mt-4 space-y-6">
						<div className="space-y-4">
							<h4 className="text-lg font-semibold text-zinc-200">Conferences and Seminars</h4>
							
							<div className="border-l-2 border-zinc-700 pl-4 space-y-4">
								<div>
									<div className="flex justify-between items-start mb-2">
										<h5 className="font-medium text-zinc-100">VU AI in Education</h5>
										<span className="text-sm text-zinc-500">16/04/2025</span>
									</div>
									<p className="text-sm text-zinc-400 mb-1">Amsterdam, The Netherlands</p>
									<p className="text-zinc-400">
										In this conference I presented the Rolo-Tutor chatbot project and how this contributes to educational activities within courses at VU.
									</p>
								</div>

								<div>
									<div className="flex justify-between items-start mb-2">
										<h5 className="font-medium text-zinc-100">Kooy Symposium 2025</h5>
										<span className="text-sm text-zinc-500">16/04/2025</span>
									</div>
									<p className="text-sm text-zinc-400 mb-1">Stroe, The Netherlands</p>
									<p className="text-zinc-400">
										I presented a demo of the simulation tool and progress we made at TNO in the context of my MSc thesis.
									</p>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-lg font-semibold text-zinc-200">Volunteering</h4>
							
							<div className="border-l-2 border-zinc-700 pl-4 space-y-6">
								<div>
									<div className="flex justify-between items-start mb-2">
										<h5 className="font-medium text-zinc-100">Study Association STORM - VU Amsterdam</h5>
										<span className="text-sm text-zinc-500">01/02/2022 – 21/02/2023</span>
									</div>
									<ul className="text-zinc-400 space-y-1 list-disc list-inside">
										<li>Conducted market research and secured new sponsors, leading to a 700% increase in sponsorship revenue.</li>
										<li>Organized events such as workshops, with an increased attendance of 35%, and a Career Fair, which had 250 attendees.</li>
										<li>Implemented marketing campaigns across email, Instagram, Facebook, and Canvas, resulting in a 50% boost in social media engagement.</li>
										<li>Established partnerships with companies like Uber, KPN, Adyen, and others to foster long-term collaboration.</li>
										<li>Successfully led the annual Career Fair, managing event logistics and negotiating partnerships with top-tier companies.</li>
									</ul>
								</div>

								<div>
									<div className="flex justify-between items-start mb-2">
										<h5 className="font-medium text-zinc-100">Study Association STORM - VU Amsterdam</h5>
										<span className="text-sm text-zinc-500">01/10/2019 – 01/02/2022</span>
									</div>
									<ul className="text-zinc-400 space-y-1 list-disc list-inside">
										<li>Developed and executed marketing campaigns as part of the promotion team to drive event attendance</li>
										<li>Co-managed hospitality operations through HoReCa Committee leadership, ensuring seamless event experiences</li>
										<li>Organized and coordinated sports and social activities while maintaining detailed records and communications as team Secretary</li>
									</ul>
								</div>

								<div>
									<div className="flex justify-between items-start mb-2">
										<h5 className="font-medium text-zinc-100">Benelux Algorithm Programming Competition 2021</h5>
										<span className="text-sm text-zinc-500">30/10/2021</span>
									</div>
									<ul className="text-zinc-400 space-y-1 list-disc list-inside">
										<li>Configured and deployed coding environments for competition participants, ensuring seamless technical operations during the event</li>
										<li>Coordinated logistical operations including catering, scheduling, and event flow management</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-lg font-semibold text-zinc-200">Languages</h4>
							
							<div className="overflow-x-auto">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-zinc-700">
											<th className="text-left py-2 pr-4 text-zinc-200 font-medium">Language</th>
											<th className="text-left py-2 text-zinc-200 font-medium">Level</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-zinc-800">
											<td className="py-2 pr-4 text-zinc-400">Romanian</td>
											<td className="py-2 text-zinc-400">Native</td>
										</tr>
										<tr className="border-b border-zinc-800">
											<td className="py-2 pr-4 text-zinc-400">French</td>
											<td className="py-2 text-zinc-400">Native</td>
										</tr>
										<tr className="border-b border-zinc-800">
											<td className="py-2 pr-4 text-zinc-400">English</td>
											<td className="py-2 text-zinc-400">C2</td>
										</tr>
										<tr className="border-b border-zinc-800">
											<td className="py-2 pr-4 text-zinc-400">Spanish</td>
											<td className="py-2 text-zinc-400">B2</td>
										</tr>
										<tr>
											<td className="py-2 pr-4 text-zinc-400">Dutch</td>
											<td className="py-2 text-zinc-400">A2</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
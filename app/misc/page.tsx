"use client";
import { Navigation } from "../components/nav";

export default function Misc() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="w-full max-w-4xl mx-auto mt-32 mb-16">
					<h1 className="text-4xl font-bold text-zinc-100 mb-8">Miscellaneous</h1>

					<div className="mt-16">
						<h2 className="text-2xl font-semibold text-zinc-200 mb-6">Languages</h2>
						<div className="overflow-x-auto">
							<table className="w-full border-collapse border border-zinc-700">
								<thead>
									<tr className="bg-zinc-800">
										<th className="border border-zinc-700 px-4 py-2 text-left text-zinc-200">Language</th>
										<th className="border border-zinc-700 px-4 py-2 text-left text-zinc-200">Proficiency</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-zinc-900/50">
										<td className="border border-zinc-700 px-4 py-2 text-zinc-300">Python</td>
										<td className="border border-zinc-700 px-4 py-2 text-zinc-300">Advanced</td>
									</tr>
									<tr className="bg-zinc-900/30">
										<td className="border border-zinc-700 px-4 py-2 text-zinc-300">JavaScript/TypeScript</td>
										<td className="border border-zinc-700 px-4 py-2 text-zinc-300">Advanced</td>
									</tr>
									<tr className="bg-zinc-900/50">
										<td className="border border-zinc-700 px-4 py-2 text-zinc-300">Java</td>
										<td className="border border-zinc-700 px-4 py-2 text-zinc-300">Intermediate</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import { Navigation } from "../components/nav";
import Link from "next/link";

const publications = [
  {
    title: "Green Bots versus Red Bots",
    description:
      "Evaluating Large Language Models for Simulating Persuasion Dynamics in Online Influence Campaigns",
    date: "May 2026",
    url: "https://filipmuntean.github.io/greenbots-redbots/",
  },
];

export default function Publications() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container px-6 pt-24 mx-auto max-w-3xl md:pt-32">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display mb-2">
          Publications
        </h1>
        <p className="text-zinc-400 mb-12">Research papers and academic work.</p>

        <div className="flex flex-col gap-6">
          {publications.map((pub) => (
            <Link
              key={pub.url}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 duration-200 bg-zinc-900/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-zinc-100 font-semibold group-hover:text-white duration-200">
                    {pub.title}
                  </h2>
                  <p className="text-zinc-400 text-sm mt-1">{pub.description}</p>
                </div>
                <span className="text-zinc-500 text-xs whitespace-nowrap pt-1">
                  {pub.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

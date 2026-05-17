import { MetadataRoute } from "next";
import { allProjects } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
	const projectUrls = allProjects
		.filter((p) => p.published)
		.map((p) => ({
			url: `https://filipmuntean.com/projects/${p.slug}`,
			lastModified: p.date ? new Date(p.date) : new Date(),
		}));

	return [
		{ url: "https://filipmuntean.com", lastModified: new Date() },
		{ url: "https://filipmuntean.com/projects", lastModified: new Date() },
		{ url: "https://filipmuntean.com/publications", lastModified: new Date() },
		{ url: "https://filipmuntean.com/about", lastModified: new Date() },
		{ url: "https://filipmuntean.com/contact", lastModified: new Date() },
		...projectUrls,
	];
}

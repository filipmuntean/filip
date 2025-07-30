"use client";

export function Analytics() {
	const beamToken = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

	return (
		<>
			{beamToken && (
				<script
					src="https://beamanalytics.b-cdn.net/beam.min.js"
					data-token={beamToken}
					async
				/>
			)}
			{gaId && (
				<>
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${gaId}');
							`,
						}}
					/>
				</>
			)}
		</>
	);
}

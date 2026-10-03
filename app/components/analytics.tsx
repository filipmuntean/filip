import Script from "next/script";

export function Analytics() {
	const beamToken = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-E6LVRFMS0K";

	return (
		<>
			{beamToken && (
				<Script
					src="https://beamanalytics.b-cdn.net/beam.min.js"
					data-token={beamToken}
					strategy="afterInteractive"
				/>
			)}
			{gaId && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
						strategy="afterInteractive"
					/>
					<Script id="ga-init" strategy="afterInteractive">
						{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
					</Script>
				</>
			)}
		</>
	);
}

import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://filipmuntean.vercel.app/'),
  title: {
    default: "Filip Muntean",
    template: "%s | filipmuntean.com",
  },
  description: "Second year AI MSc student and software developer",
  openGraph: {
    title: "Filip Muntean",
    description:
      "Second year AI MSc student and software developer",
    url: "https://filipmuntean.com",
    siteName: "filipmuntean.com",
    images: [
      {
        url: "https://filipmuntean.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-NL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon-32x32.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="e0b5fdf0-ded1-4ee6-b59d-150e1b0fc8b9" type="text/javascript" async></script>
        {/* <Analytics /> */}
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

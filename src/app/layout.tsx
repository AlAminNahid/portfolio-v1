import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
// @ts-ignore: allow importing CSS module without type declarations
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://alamin-nahid.is-a.dev";
const DESCRIPTION =
  "Portfolio of Al Amin Hossain Nahid, a full-stack web and mobile developer building React, Next.js, backend, and Android applications.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Al Amin Hossain Nahid",
  description: DESCRIPTION,
  keywords: [
    "Al Amin Hossain Nahid",
    "full-stack developer",
    "Next.js",
    "React",
    "NestJS",
    "FastAPI",
    "Android developer",
    "Bangladesh",
  ],
  authors: [{ name: "Al Amin Hossain Nahid", url: SITE_URL }],
  creator: "Al Amin Hossain Nahid",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Al Amin Hossain Nahid",
    title: "Al Amin Hossain Nahid — Full-Stack Developer",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Amin Hossain Nahid — Full-Stack Developer",
    description: DESCRIPTION,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-canvas text-fg overflow-x-hidden transition-colors duration-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

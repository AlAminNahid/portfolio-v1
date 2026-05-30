import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Al Amin Hossain Nahid",
  description:
    "Portfolio of Al Amin Hossain Nahid, a full-stack web and mobile developer building React, Next.js, backend, and Android applications.",
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
      <body
        className={`${outfit.className} ${ovo.className} bg-white text-gray-950 antialiased leading-8 overflow-x-hidden transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${inter.className} antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 overflow-x-hidden transition-colors duration-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

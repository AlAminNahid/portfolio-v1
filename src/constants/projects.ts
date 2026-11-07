import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Relgari",
    category: "Full-stack",
    summary:
      "A redesign of Bangladesh Railway's ticket booking, built to be faster and friendlier in Bangla and English. A concept project: no real tickets are sold. Search, login and registration are built; seat selection, payment and tickets come next.",
    highlights: [
      "Search in a single row: type the stations, pick a date on a small calendar, choose a class",
      "Fully bilingual in Bangla and English, with the language saved in a cookie and rendered on the server so the page never flashes the wrong language",
      "Login and registration in one boarding-pass-style popup instead of separate pages",
      "NestJS API with argon2id password hashing and HttpOnly session cookies; only a hash of each session token is stored",
      "NID never stored as plain text: a keyed hash blocks duplicate accounts, and an AES-256-GCM copy is shown only to its owner",
      "Rate-limited sign-in, with the same Zod rules checked in the browser and on the server, and PostgreSQL tables added feature by feature with Prisma migrations",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "next-intl",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live site", href: "https://relgari.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AlAminNahid/relgari" },
    ],
  },
  {
    title: "Bilimbi Studio",
    category: "Production website",
    summary:
      "A content-driven marketing website for a small software studio in Dhaka, built and deployed with a hand-authored design-token system.",
    highlights: [
      "Two-tier design tokens: brand primitives and semantic roles, with hand-written CSS",
      "All copy lives in typed constants, never inside components",
      "Validated contact-form API using Zod and an external email service",
      "Deployed on Vercel with preview deployments on pull requests",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    links: [
      { label: "Live site", href: "https://bilimbi-studio.is-a.dev" },
      {
        label: "GitHub",
        href: "https://github.com/AlAminNahid/bilimbi_studio",
      },
    ],
  },
  {
    title: "AI Chat",
    category: "AI + Full-stack",
    summary:
      "A multi-conversation AI chat application with persistent history, powered by Google Gemini through server-side API routes with streamed responses.",
    highlights: [
      "Gemini integrated server-side with streamed responses",
      "Conversations persisted with Prisma 7 and PostgreSQL on Neon",
      "Sidebar history to resume or delete any conversation",
      "REST endpoints for chat completion and conversation management",
      "Reusable React components, Next.js App Router, Tailwind CSS",
    ],
    tags: ["Next.js", "Gemini API", "Prisma", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "Live site", href: "https://ai-nova-chat.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AlAminNahid/ai-chat" },
    ],
  },
  {
    title: "MessMaster",
    category: "Mobile + Backend",
    summary:
      "A native Android app for student messes, hostels and shared apartments, with a NestJS backend. Tracks meals, utilities and monthly expenses and calculates each member's bill.",
    highlights: [
      "Manager and Member roles: a manager creates the mess, records meals, manages utilities and posts notices",
      "Meal rate calculated automatically as total monthly expense ÷ total meals",
      "Utility tracking for electricity, water, internet, grocery and more",
      "JWT auth with access and refresh tokens, bcrypt password hashing, validated APIs",
      "Android client built with MVVM, Kotlin Coroutines, Retrofit and Material Design",
      "NestJS and PostgreSQL backend with TypeORM, in internal testing on Google Play",
    ],
    tags: ["Kotlin", "Android SDK", "NestJS", "PostgreSQL", "TypeORM", "JWT"],
    links: [
      {
        label: "App repository",
        href: "https://github.com/AlAminNahid/MessMasterApp",
      },
      {
        label: "Backend repository",
        href: "https://github.com/AlAminNahid/MessMasterApp_Backend",
      },
    ],
  },
];

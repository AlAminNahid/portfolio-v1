import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Relgari",
    category: "Full-stack",
    status: "In progress",
    summary:
      "A train ticket booking concept inspired by Bangladesh Railway, in Bangla and English. It is a personal concept project: no real tickets are sold.",
    highlights: [
      "Train search in a single row: stations, date and class",
      "Bilingual in Bangla and English, rendered on the server",
      "Login and registration in one boarding-pass-style popup",
      "NestJS API with argon2id password hashing and HttpOnly session cookies",
      "NID stored encrypted, with a keyed hash to block duplicate accounts",
      "Rate-limited sign-in, with the same Zod rules in the browser and on the server",
      "Real railway data: 225 stations and 122 intercity trains",
    ],
    upcoming: ["Seat selection", "Tickets"],
    tags: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live site", href: "https://relgari.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AlAminNahid/relgari" },
    ],
  },
  {
    title: "Nirapod Fine",
    category: "AI + Full-stack",
    role: "Thesis project · Co-developed",
    summary:
      "A web app that checks Bangladeshi traffic fine receipts against Road Transport Act 2018 rules. An AI model reads the receipt and writes the explanation; a deterministic rule engine makes every legal decision.",
    highlights: [
      "AI reads a receipt photo or PDF and the user reviews every field before analysis",
      "A plain-Python rule engine picks the section, checks the fine amount and chooses the result",
      "42 offence rules and 15 exception rules stored in PostgreSQL as versioned datasets",
      "A hash of each result is recorded on a smart contract so it can be verified later",
      "FastAPI backend with Clerk sign-in and a Next.js frontend",
    ],
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Clerk",
      "Hardhat",
      "Solidity",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/AxisAkash/Nirapod_Fine.." },
    ],
  },
  {
    title: "AI Chat",
    category: "AI + Full-stack",
    summary:
      "A multi-conversation AI chat application with persistent history, using Google Gemini through server-side API routes with streamed responses.",
    highlights: [
      "Gemini integrated server-side with streamed responses",
      "Conversations saved with Prisma and PostgreSQL on Neon",
      "Sidebar history to resume or delete any conversation",
      "REST endpoints for chat completion and conversation management",
      "Reusable React components with the Next.js App Router",
    ],
    tags: ["Next.js", "Gemini API", "Prisma", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "Live site", href: "https://ai-nova-chat.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AlAminNahid/ai-chat" },
    ],
  },
  {
    title: "Bilimbi Studio",
    category: "Marketing website",
    summary:
      "A marketing website for a small software studio in Dhaka, built with Next.js and deployed on Vercel.",
    highlights: [
      "Two-tier design tokens: brand primitives and semantic roles, with hand-written CSS",
      "All copy lives in typed constants, not inside components",
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
];

import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Nirapod Fine",
    category: "AI + Full-stack + Blockchain",
    summary:
      "A web app that checks Bangladeshi traffic fine receipts against the Road Transport Act 2018. An AI model reads the receipt, a deterministic rule engine makes every legal decision, and case audits are anchored on-chain for tamper evidence.",
    highlights: [
      "Rule engine built from the Road Transport Act 2018 — 42 offence rules and 15 exception rules, seeded and versioned",
      "AI-powered receipt reading with dual-read disagreement flagging; user always reviews and confirms",
      "Deterministic legal decisions — the AI never decides status, the rule engine does",
      "Solidity smart contract (AuditRegistry) anchors case and dataset fingerprints on-chain with no personal data",
      "Clerk authentication with role-based access and rate-limited AI reads",
      "Admin dataset versioning: clone, edit, and activate rule sets",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Solidity",
      "Hardhat",
      "Clerk",
      "Docker",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AxisAkash/Nirapod_Fine",
      },
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

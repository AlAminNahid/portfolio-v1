import { type ExperienceEntry } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    role: "Software Engineering Intern",
    company: "AuraDev LTD",
    companyUrl: "https://www.auradev.co.uk/",
    period: "June 2026 – Present",
    badge: "Intern",
    summary:
      "Built GrantOS — an AI-powered grant management platform for nonprofits — across a Next.js 16 frontend and FastAPI backend, shipping a dual-LLM proposal editor, SSE streaming chat assistant, and a full grant lifecycle pipeline.",
    highlights: [
      "Designed a dual-LLM strategy: Claude (claude-sonnet-4-6) for all structured generation tasks — RFP parsing from PDF, DOCX, or URL; per-section proposal drafting; compliance scoring; and six-mode inline rewrites — while Gemini flash-lite drives a real-time SSE streaming chat assistant.",
      "Wired a Hono-based JWT-injecting proxy inside Next.js App Router that intercepts every API call, attaches the Clerk bearer token, and forwards to FastAPI — keeping the backend unreachable directly from the browser.",
      "Built a Plate.js rich-text proposal editor with 60-second autosave, optimistic locking (409 on concurrent edits), version history with diff view across snapshots, and one-click DOCX export.",
      "Shipped a dnd-kit kanban grant pipeline (7 stages, 4 priority levels), a Cloudflare R2 document vault with presigned download URLs, and a deterministic grant-match scoring algorithm across sector, geography, budget, org-size, and keyword dimensions — no LLM involved.",
      "Implemented plan gating across FREE/PRO/TEAM tiers; built Zustand slice-pattern state with 10+ domain slices and a SQLAlchemy async + asyncpg data layer with Alembic migrations, deployed on Railway.",
    ],
    tags: [
      "Next.js 16",
      "FastAPI",
      "Zustand",
      "Clerk Auth",
      "Claude API",
      "Google Gemini",
      "SSE Streaming",
      "Plate.js",
      "Hono",
      "SQLAlchemy",
      "Cloudflare R2",
      "dnd-kit",
      "TypeScript",
      "Python",
    ],
  },
  {
    role: "Software Engineer",
    company: "Bilimbi Studio",
    companyUrl: "https://bilimbi-studio.is-a.dev",
    period: "2025 – Present",
    badge: "Founding Team",
    summary:
      "Part of the founding engineering team at Bilimbi Studio, a small software studio in Dhaka, Bangladesh. Built the studio's marketing site and engineered MessMaster — an Android app for shared student messes, backed by a NestJS API.",
    highlights: [
      "Built the studio's marketing site (Next.js 16 App Router, React 19) with a hand-authored two-tier CSS design token system — brand primitives composed into semantic roles via CSS color-mix() — zero Tailwind utility classes.",
      "Kept the page RSC-first with targeted client boundaries: mobile nav drawer (useDisclosure), an animated ProcessFlow (IntersectionObserver + setInterval, respects prefers-reduced-motion), and the contact form.",
      "Implemented dual-layer Zod validation — client-side field errors before fetch and server-side safeParse in a Next.js Route Handler — forwarding validated submissions to a custom mail relay via API key.",
      "Engineered and shipped MessMaster — an Android app for tracking monthly meal and bazaar costs in shared student messes — backed by a NestJS REST API deployed on Render.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Zod",
      "React Server Components",
      "Android",
      "Kotlin",
      "Vercel",
    ],
  },
];

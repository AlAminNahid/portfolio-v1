import messOne from "@/public/projects/two/One.jpg";
import messTwo from "@/public/projects/two/Two.jpg";
import messThree from "@/public/projects/two/Three.jpg";
import messFour from "@/public/projects/two/Four.jpg";
import messFive from "@/public/projects/two/Five.jpg";
import messSix from "@/public/projects/two/Six.jpg";
import messSeven from "@/public/projects/two/Seven.jpg";
import aiChatBotOne from "@/public/projects/four/one.png";
import medicareOne from "@/public/projects/one/one.png";
import medicareTwo from "@/public/projects/one/two.png";
import medicareThree from "@/public/projects/one/three.png";
import medicareFour from "@/public/projects/one/four.png";
import billimbiOne from "@/public/projects/three/One.png";
import billimbiTwo from "@/public/projects/three/Two.png";
import billimbiThree from "@/public/projects/three/Three.png";
import billimbiFour from "@/public/projects/three/Four.png";
import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Bilimbi Studio",
    type: "Marketing Site",
    category: "Frontend · Design",
    year: "2026",
    status: "Completed",
    tech: "Next.js, TypeScript, Custom CSS",
    image: billimbiOne,
    images: [billimbiOne, billimbiTwo, billimbiThree, billimbiFour],
    previewType: "web",
    github: "https://github.com/AlAminNahid/bilimbi_studio.git",
    liveUrl: "https://bilimbi-studio.is-a.dev",
    summary:
      "Marketing site for Bilimbi Studio — a small software studio based in Dhaka, Bangladesh.",
    details:
      "Bilimbi Studio is a fully hand-crafted marketing site for a focused software studio in Dhaka. Built with Next.js App Router and TypeScript, the site is styled entirely with custom CSS using a two-tier design-token system — brand primitives (raw colour values) and semantic roles (what each colour is for) — with zero utility-class frameworks. Sections cover the studio's projects, process, team, and a contact form, all driven from typed constants so content never lives inside components.",
    highlights: [
      "Hand-authored CSS with a two-tier design-token system (no Tailwind utilities)",
      "Content-driven architecture — all copy lives in typed constants, not components",
      "Sections: hero, projects, how-we-build process, team, and contact form",
      "Deployed on Vercel with automatic preview deployments on pull requests",
    ],
  },
  {
    title: "AI Chat",
    type: "Full-Stack Web App",
    category: "AI · Full-Stack",
    year: "2026",
    status: "Completed",
    tech: "Next.js, Gemini API, Prisma, PostgreSQL",
    image: aiChatBotOne,
    images: [aiChatBotOne],
    previewType: "web",
    github: "https://github.com/AlAminNahid/ai-chat.git",
    liveUrl: "https://ai-nova-chat.vercel.app/",
    summary:
      "Conversational AI app powered by Gemini with persistent chat history stored in PostgreSQL via Prisma.",
    details:
      "AI Chat is a full-stack conversational AI application built with Next.js App Router and Google's Gemini API. Every conversation is persisted in a PostgreSQL database hosted on Neon, accessed through Prisma 7 with the native Postgres adapter. Users can start new chats, continue previous ones from a sidebar, and delete conversations — all backed by a clean REST API with dedicated endpoints for chat completions and conversation management.",
    highlights: [
      "Google Gemini API for AI chat completions",
      "Conversation persistence with Prisma 7 and PostgreSQL (Neon)",
      "Sidebar with full conversation history — resume or delete any chat",
      "REST API: POST /chat, GET/DELETE /conversations/[id]",
      "Next.js App Router with Tailwind CSS v4",
    ],
  },
  {
    title: "MediCare",
    type: "Full-Stack Web App",
    category: "Full-Stack · SaaS",
    year: "2026",
    status: "In Progress",
    tech: "Next.js, NestJS, PostgreSQL, TypeORM",
    image: medicareOne,
    images: [medicareOne, medicareTwo, medicareThree, medicareFour],
    previewType: "web",
    github: "https://github.com/AlAminNahid/MediCare.git",
    liveUrl: "https://medi-care-nine-flax.vercel.app",
    summary:
      "Medical chamber management SaaS — doctors run their chambers, patients book serial-based appointments online.",
    details:
      "MediCare is a full-stack medical chamber management platform with three distinct portals: Admin, Doctor, and Patient. Doctors manage their private chambers (locations, schedules, fees) and handle a daily serial-ordered appointment queue. Patients browse doctors, pick a chamber, and receive a serial number instead of a fixed time slot. The admin oversees the platform — managing medicines, users, and backups. Built with Next.js and NestJS, backed by PostgreSQL via TypeORM, and secured with JWT auth.",
    highlights: [
      "Three-role system: Admin, Doctor, and Patient portals",
      "Serial-based appointment booking per chamber per day",
      "Doctor chamber management with schedules, locations, and fees",
      "Digital prescriptions and shared medicine reference list",
      "JWT-secured NestJS REST API with PostgreSQL and TypeORM",
    ],
  },
  {
    title: "MessMaster",
    type: "Native Android App",
    category: "Mobile · Full-Stack",
    year: "2026",
    status: "Completed",
    tech: "Kotlin, XML, NestJS, PostgreSQL",
    image: messOne,
    images: [
      messOne,
      messTwo,
      messThree,
      messFour,
      messFive,
      messSix,
      messSeven,
    ],
    previewType: "mobile",
    github: "https://github.com/AlAminNahid/MessMasterApp.git",
    githubLinks: [
      {
        label: "App Repo",
        href: "https://github.com/AlAminNahid/MessMasterApp.git",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/AlAminNahid/MessMasterApp_Backend.git",
      },
    ],
    downloadUrl:
      "https://play.google.com/apps/internaltest/4700604083528970813",
    summary:
      "Smart mess management app for shared living — tracks meals, utilities, and monthly expenses with automatic bill calculation.",
    details:
      "MessMaster is a full-stack Android application built for student messes, hostels, and shared apartments. After login, users either create a mess (becoming the Manager) or join one as a Member. The Manager records daily meals, manages utility costs (electricity, water, internet, grocery), posts notices, and generates monthly bills. Members view their meal history, utility shares, and calculated rates. The meal rate is computed automatically as total monthly expense divided by total meals, giving everyone a fair, transparent bill. The backend is a NestJS REST API with JWT (access + refresh tokens) and PostgreSQL via TypeORM.",
    highlights: [
      "Currently in internal testing on Google Play — request early access via the link",
      "Role-based system: Manager creates/manages the mess, Members track their share",
      "Automatic meal rate calculation: total expense ÷ total meals",
      "Utility cost tracking — electricity, water, internet, grocery, and more",
      "Notice board for manager announcements and member shopping requests",
      "JWT auth with access + refresh tokens, bcrypt password hashing",
      "NestJS REST API backed by PostgreSQL with TypeORM",
    ],
  },
];

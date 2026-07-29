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
import billimbiOne from "@/public/projects/three/One.png";
import billimbiTwo from "@/public/projects/three/Two.png";
import billimbiThree from "@/public/projects/three/Three.png";
import billimbiFour from "@/public/projects/three/Four.png";
import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "MessMaster",
    type: "Native Android App",
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
    downloadUrl: "#",
    summary:
      "Full-stack mess management system with a native Android client and a NestJS/PostgreSQL backend.",
    details:
      "MessMaster helps mess managers and members handle daily mess operations from Android, backed by a dedicated NestJS API and PostgreSQL database. It supports authentication, mess creation/joining, manager/member flows, meal tracking, utilities, notices, and dashboard summaries — all built as a self-contained full-stack system.",
    highlights: [
      "Native Android UI built with Kotlin and XML",
      "NestJS + PostgreSQL REST API backend",
      "Manager/member workflows for real mess operations",
      "Dashboard screens for meals, costs, notices, and utility data",
    ],
  },
  {
    title: "Billimbi-Studio",
    type: "Frontend Web App",
    status: "Completed",
    tech: "NextJS, TypeScript, TailwindCSS",
    image: billimbiOne,
    images: [billimbiOne, billimbiTwo, billimbiThree, billimbiFour],
    previewType: "web",
    github: "https://github.com/AlAminNahid/bilimbi_studio.git",
    liveUrl: "https://bilimbi-studio.vercel.app/",
    summary: "A modern frontend studio app built with Next.js and TailwindCSS.",
    details:
      "Billimbi-Studio is a frontend web application that showcases modern design and development practices using Next.js and TailwindCSS. It serves as a portfolio and studio platform for creative projects.",
    highlights: [
      "Modern frontend design with Next.js",
      "Responsive layouts with TailwindCSS",
      "TypeScript for type safety and maintainability",
      "Showcase of creative projects and portfolio",
    ],
  },
  {
    title: "AI-ChatBot",
    type: "Full-Stack Web App",
    status: "In Progress",
    tech: "NextJS, Gemini API",
    image: aiChatBotOne,
    images: [aiChatBotOne],
    previewType: "web",
    github: "https://github.com/AlAminNahid/ai-chat.git",
    liveUrl: "https://ai-aluboss-chat.vercel.app/",
    summary:
      "AI chat system built with Next.js and the Gemini API, with RAG support in progress.",
    details:
      "AI-ChatBot is a conversational AI application built with Next.js and Google's Gemini API. It's currently being extended with Retrieval-Augmented Generation (RAG) to ground responses in external knowledge sources.",
    highlights: [
      "Chat interface built with Next.js",
      "Powered by Google's Gemini API",
      "RAG integration in progress for context-aware responses",
    ],
  },
  {
    title: "MediCare",
    type: "Full-Stack Web App",
    status: "In Progress",
    tech: "NextJS, NestJS, PostgreSQL, TypeORM",
    image: medicareOne,
    images: [medicareOne, medicareTwo, medicareThree],
    previewType: "web",
    github: "https://github.com/AlAminNahid/MediCare.git",
    summary:
      "Clinic workflow app for managing patients, doctors, appointments, and records.",
    details:
      "A full-stack clinic management system built with a modern stack. It includes patient and doctor management, appointment handling, and database-backed records using NestJS and PostgreSQL with TypeORM.",
    highlights: [
      "Patient and doctor management",
      "Appointment workflow support",
      "PostgreSQL with TypeORM data layer",
      "Next.js frontend with NestJS REST API",
    ],
  },
];

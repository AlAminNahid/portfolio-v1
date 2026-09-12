import { type Service } from "@/types";

export const services: Service[] = [
  {
    num: "01",
    title: "AI Engineering",
    desc: "LLM-powered agents that do real work — multi-step tool-calling loops, structured extraction from PDFs and the open web, retrieval over private document sets, and token-level cost accounting. Built on a provider-agnostic inference layer with SSE streaming and durable session state.",
  },
  {
    num: "02",
    title: "Full-Stack Engineering",
    desc: "End-to-end web products with Next.js and React Server Components, NestJS and FastAPI backends, Zod-validated APIs, Clerk auth, and cloud deployments on Vercel and Render — from design tokens to database schema.",
  },
  {
    num: "03",
    title: "Mobile Engineering",
    desc: "Native Android apps in Kotlin with XML layouts, and cross-platform apps with React Native — backed by NestJS REST APIs and PostgreSQL across the full mobile stack.",
  },
  {
    num: "04",
    title: "Applied AI Research",
    desc: "Research at the applied end of AI — image processing and computer vision with convolutional models, and the behaviour of large language models inside real systems. Framing a problem as a learning task, training against it, and measuring what holds up outside the benchmark.",
  },
];

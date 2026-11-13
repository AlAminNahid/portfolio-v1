import { type CtaLink } from "@/types";

export const hero = {
  role: "Software Engineer | Full-Stack Development & Applied AI",
  location: "Dhaka, Bangladesh",
  name: "Al Amin Hossain Nahid",
  headline: "builds full-stack products and",
  rotatingWords: [
    "AI-powered apps.",
    "agentic AI features.",
    "knowledge retrieval.",
  ],
  intro:
    "I'm an early-career software engineer at Kolpo LTD. I work on frontend features, backend APIs and AI workflows such as agentic chat, tool calling and knowledge retrieval.",
  specialisations:
    "Full-stack development · Agentic chat · Knowledge retrieval · Cloud deployment",
  current: "Software Engineer, Kolpo LTD",
} as const;

export const ctaLinks: CtaLink[] = [
  { label: "View projects", href: "#projects", variant: "primary" },
  { label: "Get in touch", href: "#contact", variant: "secondary" },
];

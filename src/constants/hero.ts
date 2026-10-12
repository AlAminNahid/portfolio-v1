import { type CtaLink } from "@/types";

export const hero = {
  role: "Software Engineer | Full-Stack & AI Systems",
  location: "Dhaka, Bangladesh",
  name: "Al Amin Hossain Nahid",
  headline: "builds full-stack products and",
  rotatingWords: ["AI systems.", "agentic workflows.", "retrieval pipelines."],
  intro:
    "Agentic workflows, custom knowledge retrieval, and production applications, from interface architecture to backend services and cloud deployment.",
  specialisations:
    "Full-stack engineering · Agentic AI · Agentic Harness · Knowledge retrieval",
  current: "Software Engineer, Kolpo LTD",
} as const;

export const ctaLinks: CtaLink[] = [
  { label: "View projects", href: "#projects", variant: "primary" },
  { label: "Get in touch", href: "#contact", variant: "secondary" },
];

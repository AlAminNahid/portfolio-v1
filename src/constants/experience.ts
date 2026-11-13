import { type ExperienceEntry } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    company: "Kolpo LTD",
    role: "Software Engineer",
    period: "Oct 2026 – Present",
    current: true,
    summary:
      "I work as part of the engineering team on the company's enterprise AI application. My work covers the frontend, backend services, the agent behind the chat, knowledge retrieval and deployment.",
    tags: [
      "TypeScript",
      "Python",
      "Pydantic AI",
      "Pydantic",
      "E2B",
      "Google Cloud Run",
    ],
    items: [
      {
        title: "Frontend development",
        text: "I work on the application's user interface, building and refining features so the product stays consistent and easy to use. Most of these features also need backend changes, so I work on both sides.",
      },
      {
        title: "Agentic chat system",
        text: "I develop conversational AI features using Pydantic AI agents with tool calling. Pydantic models validate the structured data that passes between the agent and its tools.",
      },
      {
        title: "Knowledge retrieval",
        text: "I work on the retrieval workflow that finds relevant organisational information in the knowledge base and passes it to the agent, so its answers draw on the organisation's own content.",
      },
      {
        title: "Sandboxed code execution",
        text: "I use E2B to run Python scripts in isolated sandboxes. The results go back into the agent workflow, so the agent can use them in its response.",
      },
      {
        title: "Cloud deployment",
        text: "I deploy the application's services to Google Cloud Run.",
      },
    ],
    link: {
      label: "Company website",
      href: "https://www.kolpo.xyz/",
    },
  },
  {
    company: "AuraDev LTD",
    role: "Software Engineering Intern",
    period: "Jun 2026 – Sep 2026",
    summary:
      "My first engineering role. I contributed to the Next.js frontend and FastAPI backend of AuraScout, an AI-powered grant management platform.",
    tags: [
      "Next.js",
      "shadcn/ui",
      "Zustand",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "Cloudflare R2",
      "Clerk",
      "Plate.js",
    ],
    items: [
      {
        title: "Agentic proposal generation",
        text: "Worked on a tool-driven chat workflow that guides users from grant analysis and requirement extraction to proposal drafting. The user approves the output at key stages before the workflow continues.",
      },
      {
        title: "Custom knowledge retrieval",
        text: "Implemented a retrieval approach based on document summaries. Short descriptions stored in PostgreSQL identify the relevant files in Cloudflare R2 and only those files are read in full.",
      },
      {
        title: "Backend development",
        text: "Built authenticated async APIs with FastAPI, SQLAlchemy, Alembic and PostgreSQL, using Clerk JWT authentication and organisation-based access control.",
      },
      {
        title: "Document editing",
        text: "Integrated Plate.js commenting into the proposal editor so reviewers can leave feedback and contributed to PDF/DOCX processing and version history.",
      },
    ],
    link: { label: "Company website", href: "https://www.auradev.co.uk/" },
  },
];

import { type ExperienceEntry } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    company: "Kolpo LTD",
    role: "Software Engineer",
    period: "Oct 2026 – Present",
    current: true,
    summary:
      "Working on an enterprise AI application for a client, contributing across frontend development, backend services, agent orchestration, knowledge retrieval, and cloud deployment.",
    items: [
      {
        title: "Frontend architecture",
        text: "Redesigned the application's user interface and built full-stack features to improve usability and give the product a more consistent experience.",
      },
      {
        title: "Agentic chat system",
        text: "Built a conversational AI system with custom Python orchestration and Pydantic-based models for structured validation and agent interactions.",
      },
      {
        title: "Knowledge retrieval",
        text: "Developed a custom knowledge-base retrieval workflow that connects relevant organisational information to the agent for context-aware responses.",
      },
      {
        title: "Sandboxed code execution",
        text: "Integrated E2B to run Python scripts in isolated sandboxes and feed the results back into the agent workflow.",
      },
      {
        title: "Cloud deployment",
        text: "Deployed and operated the application on Google Cloud Run in a production environment.",
      },
    ],
    note: "Client and implementation details are confidential and intentionally omitted.",
    link: {
      label: "Company record",
      href: "https://find-and-update.company-information.service.gov.uk/company/16795993",
    },
  },
  {
    company: "AuraDev LTD",
    role: "Software Engineering Intern",
    period: "Jun 2026 – Sep 2026",
    summary:
      "Worked across a Next.js frontend and an asynchronous FastAPI backend on an AI-powered grant management platform, building AI-assisted proposal workflows and knowledge management features.",
    items: [
      {
        title: "Agentic proposal generation",
        text: "Built a tool-driven workflow that guides users from grant source analysis and requirement extraction to proposal drafting, with human approval at key stages.",
      },
      {
        title: "Conversational agent and state",
        text: "Implemented an agentic chat experience with multi-step workflow orchestration, contextual interactions, and conversation state management.",
      },
      {
        title: "Custom knowledge retrieval",
        text: "Developed summary-guided retrieval: short document descriptions in PostgreSQL identify the relevant files in Cloudflare R2, and only then are full contents retrieved for deeper analysis.",
      },
      {
        title: "Collaborative editing",
        text: "Integrated Plate.js commenting into the proposal editor to support review and feedback.",
      },
      {
        title: "Backend and data",
        text: "Built authenticated, asynchronous APIs with FastAPI, SQLAlchemy, Alembic and PostgreSQL, using Clerk JWT authentication and organisation-based access control.",
      },
      {
        title: "Document workflows",
        text: "Contributed to PDF/DOCX processing, proposal version history, and persistent document workflows.",
      },
    ],
    link: { label: "Company website", href: "https://www.auradev.co.uk/" },
  },
];

import messOne from "@/public/projects/two/One.jpg";
import messTwo from "@/public/projects/two/Two.jpg";
import messThree from "@/public/projects/two/Three.jpg";
import messFour from "@/public/projects/two/Four.jpg";
import messFive from "@/public/projects/two/Five.jpg";
import messSix from "@/public/projects/two/Six.jpg";
import messSeven from "@/public/projects/two/Seven.jpg";
import medicareOne from "@/public/projects/one/one.png";
import medicareTwo from "@/public/projects/one/two.png";
import medicareThree from "@/public/projects/one/three.png";
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

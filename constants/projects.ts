import workTwo from "@/public/projects/two.png";
import workThree from "@/public/projects/three.png";
import medicareOne from "@/public/projects/one/one.png";
import medicareTwo from "@/public/projects/one/two.png";
import medicareThree from "@/public/projects/one/three.png";
import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "MessMaster Mobile App",
    type: "Native Android App",
    status: "In Progress",
    tech: "Kotlin, XML, NestJS, PostgreSQL",
    image: workThree,
    previewType: "mobile",
    github: "https://github.com/AlAminNahid/MessMasterApp.git",
    summary:
      "Android client for MessMaster, built with Kotlin and XML on top of the shared NestJS backend.",
    details:
      "MessMaster Mobile helps mess managers and members handle daily mess operations from Android. It supports authentication, mess creation/joining, manager/member flows, meal tracking, utilities, notices, and dashboard summaries while reusing the same backend as the web version.",
    highlights: [
      "Native Android UI built with Kotlin and XML",
      "Connects to the shared NestJS REST API",
      "Manager/member workflows for real mess operations",
      "Dashboard screens for meals, costs, notices, and utility data",
    ],
  },
  {
    title: "Mess Management System",
    type: "Full-Stack Web App",
    status: "In Progress",
    tech: "NextJS, NestJS, PostgreSQL, Tailwind-CSS",
    image: workTwo,
    previewType: "web",
    github: "https://github.com/AlAminNahid/Mess_Management_System.git",
    summary:
      "Web version of MessMaster for managing shared living expenses, meals, notices, and members.",
    details:
      "The web app demonstrates the full-stack side of MessMaster. It uses a Next.js frontend with a NestJS backend and PostgreSQL database to manage mess members, meal records, utility costs, notices, and shared operational workflows.",
    highlights: [
      "Next.js frontend for the web experience",
      "NestJS backend shared with the Android app",
      "PostgreSQL data model for mess operations",
      "Role-based manager and member workflows",
    ],
  },
  {
    title: "MediCare",
    type: "Full-Stack Web App",
    status: "Completed",
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

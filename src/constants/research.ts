import { type ResearchPaper } from "@/types";

export const SELF_AUTHOR = "Al Amin Hossain Nahid";

export const researchPapers: ResearchPaper[] = [
  {
    title:
      "An AI-Based Legal Advisory System for Traffic Violation Verification Using Official Traffic Regulations",
    authors: [
      SELF_AUTHOR,
      "Chowdhury Shakil Hasan",
      "Rakibul Islam Akash",
      "Abdullah Al Rafe Ayon",
      "Kazi Sadia",
      "Md Imamul Islam",
      "Ahmed Al Mansur",
    ],
    abstract:
      "A framework for AI-assisted legal verification of traffic violation notices. It retrieves the relevant provisions from official traffic regulations and produces citation-backed explanations with RAG, deferring to human review when evidence or law is insufficient. A blockchain layer protects the integrity of the verification reports.",
    status: "Accepted",
    statusNote: "To be presented · 1–3 Nov 2026",
    conference: "IEEE CSDE 2026",
    conferenceFullName:
      "11th IEEE Asia-Pacific Conference on Computer Science and Data Engineering",
    location: "Cox's Bazar, Bangladesh",
    tags: [
      "RAG",
      "Large language models",
      "Legal reasoning",
      "Blockchain verification",
    ],
    links: [{ label: "Conference", href: "https://ieee-csde.org/" }],
  },
  {
    title:
      "Intelligent Waste Classification for Sustainable Urban Development: A MobileNetV3-Based Deep Learning Approach Using the BDWaste Dataset",
    authors: [
      SELF_AUTHOR,
      "Ferdus Hossain",
      "Tariful Islam Fahim",
      "Salman Zzoha",
    ],
    abstract:
      "A MobileNetV3-based deep learning approach to classifying waste images from the BDWaste dataset, aimed at smarter and more sustainable urban waste-management workflows.",
    status: "Published",
    statusNote: "IEEE Xplore · 2026",
    conference: "PECCII 2026",
    conferenceFullName:
      "Intl. Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure",
    location: "Jhenaidah, Bangladesh",
    tags: [
      "MobileNetV3",
      "BDWaste dataset",
      "Deep learning",
      "Urban sustainability",
    ],
    links: [
      {
        label: "Read on IEEE Xplore",
        href: "https://ieeexplore.ieee.org/document/11661911",
      },
      { label: "Conference", href: "https://peccii.pust.ac.bd/" },
    ],
  },
];

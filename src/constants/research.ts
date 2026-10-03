import { type ResearchPaper } from "@/types";

export const researchPapers: ResearchPaper[] = [
  {
    title:
      "An AI-Based Legal Advisory System for Traffic Violation Verification Using Official Traffic Regulations",
    conference: "IEEE CSDE 2026",
    conferenceFullName:
      "11th IEEE Asia-Pacific Conference on Computer Science and Data Engineering",
    location: "Cox's Bazar, Bangladesh",
    description:
      "A proposed framework for AI-assisted legal verification of traffic violation notices, covering both AI-camera notices and police-issued receipts. It extracts violation details, retrieves the relevant provisions from official traffic regulations, and produces citation-backed explanations with RAG, abstaining and deferring to human review when evidence or law is insufficient. A blockchain layer secures the integrity of the resulting verification reports.",
    coAuthors:
      "Co-authored with Chowdhury Shakil Hasan, Rakibul Islam Akash, Abdullah Al Rafe Ayon, Kazi Sadia, Md Imamul Islam, and Ahmed Al Mansur. To be presented at IEEE CSDE 2026, 1–3 November 2026.",
    highlights: [
      "RAG",
      "Large Language Models",
      "Legal Reasoning",
      "Blockchain Verification",
    ],
    status: "Accepted",
    year: 2026,
    conferenceUrl: "https://ieee-csde.org/",
  },
  {
    title: "Intelligent Waste Classification for Sustainable Urban Development",
    conference: "PECCII 2026",
    conferenceFullName:
      "International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure",
    location: "Jhenaidah, Bangladesh",
    description:
      "A MobileNetV3-based deep learning approach using the BDWaste dataset, focused on classifying waste images for smarter and more sustainable urban waste-management workflows.",
    coAuthors:
      "Co-authored with Ferdus Hossain, Tariful Islam Fahim, and Salman Zzoha. Presented at the International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure, and indexed in the IEEE Xplore Digital Library.",
    highlights: [
      "MobileNetV3",
      "BDWaste Dataset",
      "Deep Learning",
      "Urban Sustainability",
    ],
    status: "Published",
    year: 2026,
    conferenceUrl: "https://peccii.pust.ac.bd/",
    publisher: "IEEE Xplore",
    publisherUrl: "https://ieeexplore.ieee.org/document/11661911",
  },
];

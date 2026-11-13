import { Award, Lightbulb, Presentation } from "lucide-react";
import { type Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    title: "Software Engineering Internship",
    type: "Completion",
    issuer: "AuraDev LTD",
    date: "September 2026",
    href: "https://drive.google.com/file/d/1GIc4AEeTDS-p3HnL25o2ek5V9gBHi_2b/view?usp=sharing",
    icon: Award,
  },
  {
    title: "Design Thinking 101: How Real Apps Are Built",
    type: "Workshop",
    issuer: "Office of Placement & Alumni, AIUB",
    date: "August 2026",
    detail: "Credential ID: AIUB/OPA/26-0827352",
    href: "",
    icon: Lightbulb,
  },
  {
    title: "PECCII 2026 Paper Presentation",
    type: "Presentation",
    issuer: "PECCII 2026, Pabna University of Science and Technology",
    date: "June 2026",
    href: "",
    icon: Presentation,
  },
];

import { Award, Lightbulb, Presentation } from "lucide-react";
import { type Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    title: "Software Engineering Internship",
    type: "Completion",
    issuer: "AuraDev LTD",
    date: "September 2026",
    icon: Award,
  },
  {
    title: "PECCII 2026 Paper Presentation",
    type: "Presentation",
    issuer:
      "Pabna University of Science and Technology, technically co-sponsored by IEEE Bangladesh Section",
    date: "June 2026",
    icon: Presentation,
  },
  {
    title: "Design Thinking 101: How Real Apps Are Built",
    type: "Workshop",
    issuer: "Office of Placement & Alumni, AIUB",
    date: "27 August 2026",
    detail: "ID AIUB/OPA/26-0827352",
    icon: Lightbulb,
  },
];

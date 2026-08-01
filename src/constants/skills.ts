import {
  SiCplusplus,
  SiKotlin,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiNestjs,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiSqlalchemy,
  SiGit,
  SiDocker,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiAndroidstudio,
} from "react-icons/si";
import { DiJava, DiDotnet } from "react-icons/di";
import { FiDatabase } from "react-icons/fi";
import CSharpIcon from "@/components/ui/CSharpIcon";
import { type SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: DiJava },
      { name: "C#", icon: CSharpIcon },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    label: "Backend & DB",
    skills: [
      { name: "NestJS", icon: SiNestjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "ASP .NET", icon: DiDotnet },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "TypeORM", icon: FiDatabase },
      { name: "Entity Framework", icon: FiDatabase },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Firebase", icon: SiFirebase },
      { name: "Vercel", icon: SiVercel },
      { name: "Android Studio", icon: SiAndroidstudio },
    ],
  },
];

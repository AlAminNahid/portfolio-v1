import {
  SiKotlin,
  SiPython,
  SiCplusplus,
  SiSharp,
  SiOpenjdk,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
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
import { DiDotnet } from "react-icons/di";
import { FiDatabase } from "react-icons/fi";
import { type SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: SiOpenjdk },
      { name: "C#", icon: SiSharp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "NestJS", icon: SiNestjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "ASP .NET", icon: DiDotnet },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "TypeORM", icon: FiDatabase },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
    ],
  },
  {
    label: "Mobile",
    skills: [
      { name: "Android", icon: SiAndroidstudio },
      { name: "Kotlin", icon: SiKotlin },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    label: "Infrastructure",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Firebase", icon: SiFirebase },
      { name: "Postman", icon: SiPostman },
      { name: "Android Studio", icon: SiAndroidstudio },
    ],
  },
];

import { type StaticImageData } from "next/image";
import { type ComponentType } from "react";
import { type IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  type: string;
  status: "In Progress" | "Completed";
  tech: string;
  image: StaticImageData;
  images?: StaticImageData[];
  previewType: "web" | "mobile";
  github: string;
  githubLinks?: { label: string; href: string }[];
  downloadUrl?: string;
  liveUrl?: string;
  summary: string;
  details: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export interface Service {
  num: string;
  title: string;
  desc: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  badge: string;
  description: string;
  tags: readonly string[];
}

export interface ResearchPaper {
  title: string;
  conference: string;
  location: string;
  description: string;
  coAuthors: string;
  highlights: readonly string[];
  status: string;
  year: number;
  conferenceUrl: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  website?: string;
}

export interface FormFields {
  name: string;
  email: string;
  message: string;
  website: string;
}

export interface Feedback {
  type: "success" | "error";
  message: string;
}

export interface MailPayload {
  name: string;
  email: string;
  message: string;
}

export interface BgIconConfig {
  Icon: IconType;
  className: string;
  size: number;
  rotate: number;
}

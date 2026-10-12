import { type LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  category: string;
  summary: string;
  highlights: readonly string[];
  tags: readonly string[];
  links: readonly ExternalLink[];
}

export interface SkillGroup {
  label: string;
  skills: readonly string[];
}

export interface ExperienceItem {
  title: string;
  text: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  items: readonly ExperienceItem[];
  note?: string;
  link: ExternalLink;
}

export interface ResearchPaper {
  title: string;
  authors: readonly string[];
  abstract: string;
  status: "Published" | "Accepted";
  statusNote: string;
  conference: string;
  conferenceFullName: string;
  location: string;
  tags: readonly string[];
  links: readonly ExternalLink[];
}

export interface Certificate {
  title: string;
  type: string;
  issuer: string;
  date: string;
  detail?: string;
  icon: LucideIcon;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  grade: string;
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

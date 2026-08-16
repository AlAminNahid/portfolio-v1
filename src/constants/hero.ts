import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiKotlin,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { type SocialLink, type CtaLink } from "@/types";
import { BgIconConfig } from "@/types/index";

export const bgIcons: BgIconConfig[] = [
  { Icon: SiReact, className: "top-[8%] left-[3%]", size: 56, rotate: -12 },
  { Icon: SiJavascript, className: "top-[20%] left-[8%]", size: 36, rotate: 8 },
  {
    Icon: SiTypescript,
    className: "top-[6%] right-[4%]",
    size: 48,
    rotate: 10,
  },
  { Icon: SiKotlin, className: "top-[22%] right-[9%]", size: 38, rotate: -8 },
  { Icon: SiPython, className: "top-[45%] left-[2%]", size: 52, rotate: 15 },
  { Icon: SiGit, className: "top-[42%] right-[3%]", size: 44, rotate: -10 },
  { Icon: SiDocker, className: "bottom-[22%] left-[5%]", size: 48, rotate: -6 },
  {
    Icon: SiTailwindcss,
    className: "bottom-[8%] left-[14%]",
    size: 40,
    rotate: 12,
  },
  {
    Icon: SiNextdotjs,
    className: "bottom-[20%] right-[5%]",
    size: 52,
    rotate: 6,
  },
  {
    Icon: SiPostgresql,
    className: "bottom-[8%] right-[15%]",
    size: 38,
    rotate: -14,
  },
];

export const ctaLinks: CtaLink[] = [
  { label: "View My Work", href: "#work", variant: "primary" },
  { label: "Get in Touch", href: "#contact", variant: "secondary" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/AlAminNahid" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/",
  },
];

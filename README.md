<div align="center">

# Al Amin Hossain Nahid — Portfolio

**Full-Stack Developer · Computer Science Student · Open to Opportunities**

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-Visit%20Now-0A66C2?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-v1-lime-one.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js%2016-Framework-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-Styling-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Overview

A production-ready personal portfolio built with **Next.js 16 App Router**, **React 19**, and **TypeScript** — architected with a clean separation of concerns so it's as easy to maintain as it is to read.

Every section of the site — hero, about, services, experience, research, works, and contact — is driven by structured data constants, keeping the UI components free of hardcoded content and making updates a one-line change.

**Live site →** https://portfolio-v1-lime-one.vercel.app/

---

## Features

- **Dark / light mode** — persisted to `localStorage`, applied on first paint to prevent flash
- **Skeleton loading UI** — full-page, section-accurate skeleton that mirrors the real layout
- **Working contact form** — client-side Zod validation, server-side API route, Gmail SMTP via Nodemailer
- **Responsive design** — mobile-first, tested across all breakpoints
- **Performance first** — `next/image` for all images, font optimization via `next/font`, Vercel Analytics

---

## Tech Stack

| Layer       | Technology                 |
| ----------- | -------------------------- |
| Framework   | Next.js 16 (App Router)    |
| UI Library  | React 19                   |
| Language    | TypeScript 5 (strict mode) |
| Styling     | Tailwind CSS v4            |
| Icons       | react-icons v5             |
| Validation  | Zod v4                     |
| HTTP Client | Axios                      |
| Email       | Nodemailer + Gmail SMTP    |
| Deployment  | Vercel                     |

---

## Project Structure

```
portfolio-v1/
│
├── app/                          # Next.js App Router — routing concerns only
│   ├── api/contact/route.ts      # Contact form API endpoint
│   ├── layout.tsx                # Root layout (font, metadata, analytics)
│   ├── page.tsx                  # Main landing page — composes all sections
│   ├── error.tsx                 # Next.js error boundary wrapper
│   ├── loading.tsx               # Next.js loading wrapper
│   └── globals.css               # Global base styles
│
├── components/                   # UI component library
│   ├── features/                 # Section-level components (one per page section)
│   │   ├── header.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── experience.tsx
│   │   ├── works.tsx
│   │   ├── research.tsx
│   │   └── contact.tsx
│   ├── layouts/                  # Persistent layout components
│   │   ├── navBar.tsx
│   │   └── footer.tsx
│   └── ui/                       # Primitive / reusable UI components
│       ├── SkeletonView.tsx
│       ├── ErrorView.tsx
│       └── CSharpIcon.tsx
│
├── constants/                    # All static data — edit here to update content
│   ├── hero.ts                   # Background icons, CTA links, social links
│   ├── navigation.ts             # Nav link labels and anchors
│   ├── skills.ts                 # Skill groups with icons
│   ├── services.ts               # Services offered
│   ├── experience.ts             # Work experience entries
│   ├── research.ts               # Research papers
│   └── projects.ts               # Portfolio projects
│
├── hooks/                        # Custom React hooks
│   ├── useTheme.ts               # Dark / light mode toggle and persistence
│   ├── useScrolled.ts            # Scroll position detection
│   └── useContactForm.ts         # Contact form state, validation, submission
│
├── services/                     # External API communication layer
│   └── contactService.ts         # Sends contact payload to /api/contact
│
├── types/                        # Shared TypeScript interfaces
│   └── index.ts
│
├── validation/                   # Zod schemas (shared between client and server)
│   └── contactSchema.ts
│
├── lib/                          # Server-side utilities (pure functions)
│   ├── mailer.ts                 # sendMail — orchestrates transporter + templates
│   ├── emailTemplates.ts         # buildHtmlEmail / buildTextEmail
│   └── escapeHtml.ts             # XSS-safe HTML escaping
│
├── config/                       # Initialised singletons and configuration
│   └── transporter.ts            # Nodemailer SMTP transporter instance
│
└── public/                       # Static assets served at /
    ├── assets/                   # Images and icons
    └── projects/                 # Project screenshots
```

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) (for the contact form)

### 1 — Clone

```bash
git clone https://github.com/AlAminNahid/portfolio-v1.git
cd portfolio-v1
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Configure environment

Create a `.env.local` file in the project root:

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_character_app_password
```

> The contact form sends mail through Gmail SMTP. `EMAIL_PASS` must be a **Google App Password** — not your account password. Follow [Google's guide](https://support.google.com/accounts/answer/185833) to generate one with 2-Step Verification enabled.

### 4 — Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customisation Guide

All site content is driven by files in `constants/` — no component edits required for content changes.

| What to change             | File to edit                           |
| -------------------------- | -------------------------------------- |
| Name, bio, university      | `components/features/about.tsx`        |
| Hero CTAs and social links | `constants/hero.ts`                    |
| Navigation links           | `constants/navigation.ts`              |
| Skills and technologies    | `constants/skills.ts`                  |
| Services / offerings       | `constants/services.ts`                |
| Work experience            | `constants/experience.ts`              |
| Research papers            | `constants/research.ts`                |
| Projects                   | `constants/projects.ts`                |
| Contact email recipient    | `config/transporter.ts` + `.env.local` |

---

## Deployment

This project is optimised for [Vercel](https://vercel.com). To deploy:

1. Push to GitHub
2. Import the repository in your Vercel dashboard
3. Add the `EMAIL_USER` and `EMAIL_PASS` environment variables under **Settings → Environment Variables**
4. Deploy — Vercel handles the build automatically

---

## Contributing

Issues and pull requests are welcome. If you're using this as a template for your own portfolio, a credit or star is appreciated but not required.

---

<div align="center">

Built by [Al Amin Hossain Nahid](https://github.com/AlAminNahid) — feel free to reach out via the contact form on the live site.

</div>

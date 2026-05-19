export interface ExperienceLink {
  label: string;
  href: string;
}

export interface Experience {
  year: string;
  title: string;
  description: string;
  date?: string;
  links?: ExperienceLink[];
}

export const experiences: Experience[] = [
  {
    year: "May 2026 — Present",
    title: "Full-Stack Developer Intern — Galeries L'Original (Next.js)",
    description:
      "Contributing to two production platforms serving Montréal's art community: a custom art product (artur.art) with live previews and personalization, and a flagship marketplace (loriginal.org) covering artist discovery, murals, and originals. Working across Next.js App Router, TypeScript, and server-side integrations — shipping UI improvements, resolving bugs blocking real users, and maintaining a bilingual FR/EN experience optimized for performance, accessibility, and SEO.",
    links: [
      { label: "artur.art", href: "https://www.artur.art/fr/home" },
      { label: "loriginal.org", href: "https://www.loriginal.org/fr" },
    ],
    date: "Present",
  },
  { year: "February 2026", title: "Conference Volunteer ConFoo Montréal", description: "Volunteered at ConFoo, a major software development conference, assisting with event setup, technical checks, and on-site coordination to ensure sessions and equipment ran smoothly for speakers and attendees.", date: "2026" },
  {
    year: "January 2026 — April 2026",
    title: "Freelance Full-Stack Developer — E-commerce Platform for M. Dave",
    description:
      "Designed and built a complete custom fashion e-commerce platform from scratch for an independent client. Handled the full project lifecycle solo — from requirements gathering and UI design to backend logic, database integration, and deployment. Delivered a live production site with real paying customers, built with Next.js, Tailwind CSS, and Supabase.",
    date: "2026",
  },
  {
    year: "December 2025",
    title: "Database Instructor — SQL & Relational Databases",
    description:
      "Designed and delivered a multi-session online revision program in SQL and relational databases for a group of ~20 students, covering core concepts through Oracle Database. Structured sessions around exam preparation with progressive exercises and project-oriented examples, adapting explanations in real time to a remote audience.",
    date: "2025",
  },
  {
    year: "September 2025",
    title: "Programming Instructor — Web, JavaScript & Java Fundamentals",
    description:
      "Designed and delivered a multi-session online revision program in web and Java fundamentals for a group of ~20 students. Structured sessions around core programming concepts, covering HTML/CSS, JavaScript, Java syntax, and object-oriented principles, with hands-on exercises tailored for exam preparation.",
    date: "2025",
  },
  {
    year: "March 2026",
    title: "Hackathon Co-organizer — New CS Students Initiative (UQAM)",
    description:
      "Helped organize a hackathon for incoming computer science students at UQAM, contributing to logistics, participant coordination, and creating a welcoming environment for first-year students getting into tech.",
    date: "2026",
  },
  {
    year: "March 2025",
    title: "Founder & Project Lead Codyssey (Micro Club IT)",
    description:
      "Founded Codyssey, an educational initiative within Micro Club — the largest IT club in Algeria — creating a dedicated branch where students produce and explain technical course content to support peer learning. Worked closely with the Head of the IT Department to structure the project, coordinate contributors, and guide its growth.",
    date: "2023",
  },
  {
    year: "November 2023",
    title: "Ideathon Winner — Disaster Aid Platform",
    description:
      "Led a team to first place in a university ideathon, pitching a community-based platform to help locate and assist disaster-affected individuals with essential aid. Competed against multiple teams, presenting a functional concept with a defined technical architecture and real-world impact potential.",
    date: "2023",
  },
];

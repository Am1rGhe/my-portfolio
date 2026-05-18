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
  { year: "January 2026 to April 2026", title: "Full-Stack Developer Fashion E-commerce Startup", description: "Currently leading the ongoing development and maintenance of the startup’s e-commerce platform, working across the frontend, backend logic, and database integration. Responsible for continuously improving features, performance, and overall user experience to support online sales and brand growth.", date: "Present" },
  { year: "23 December 2025", title: "Database Tutor SQL & Relational Databases", description: "Led a complete end-to-end revision program covering SQL and relational database concepts (from A to Z) using Oracle Database, helping students prepare for exams through structured explanations, practice exercises, and project-oriented examples.", date: "Present" },
  { year: "September 2025", title: "Programming Tutor Web & Java Fundamentals", description: "Delivered database courses covering SQL and relational database concepts using Oracle Database, while supporting students in understanding data modeling, queries, and database-driven projects.", date: "Present" },
  { year: "September 2025", title: "Hackathon Organizer New Students (UQAM)", description: "Assisted in organizing a hackathon for new computer science students, contributing to event coordination, participant support, and creating a collaborative learning environment.", date: "2024" },
  { year: "March 2025", title: "Founder & Project Lead Codyssey (Micro Club IT)", description: "Founded Codyssey, an educational initiative within Micro Club (the largest IT club in Algeria), creating a dedicated branch where students produce content and explain technical courses to support peer learning. Worked closely with the Head of the IT Department to structure the project, coordinate contributors, and guide its growth. \n Currently leading the development of a dedicated web platform, with an expected public release in summer 2026.", date: "2023" },
  { year: "November 2023", title: "Ideathon Winner with my team", description: "Built a winning app idea enabling communities to locate and assist disaster affected individuals with essential aid.", date: "2023" },
];

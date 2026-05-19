export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  highlighted: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Note taking web app",
    description:
      "A production-ready note-taking application built for daily use with a clean, distraction-free interface. Developed end-to-end with React and Supabase, it features secure user authentication, real-time synchronization across devices through PostgreSQL, and a responsive three-column layout inspired by professional tools like Notion. Users can organize their workflow with tags, full-text search, and archive functionality, while font customization keeps notes readable on any screen. Protected routes and thoughtful state management ensure data stays private while the experience feels fast and reliable — a complete demonstration of full-stack auth, database design, and modern React patterns in one cohesive product.",
    image: "/images/projects/note-taking-app.jpg",
    githubUrl: "https://github.com/Am1rGhe/note-taking-app",
    demoUrl: "https://note-taking-app-two-blond.vercel.app/",
    highlighted: true,
  },
  {
    id: "dydy",
    title: "Dydy Custom",
    description:
      "A full-stack fashion e-commerce platform built from scratch for an independent client — covering the entire project lifecycle solo, from requirements gathering and UI design to backend logic and deployment. Powered by Next.js and Tailwind CSS, the site delivers a polished brand experience with dedicated Shop, About, and Contact pages, plus user authentication tailored to a custom clothing business. Supabase handles accounts and data persistence, while Vercel hosts the live production deployment serving real paying customers. This project represents end-to-end ownership of a commercial product: performance-conscious architecture, responsive design, and business-ready UX built for a startup brand entering the market.",
    image: "/images/projects/dydycustom.png",
    githubUrl: "https://github.com/Am1rGhe/dydy-custom",
    demoUrl: "https://dydy-custom-6kj8.vercel.app/",
    highlighted: true,
  },
  {
    id: "explain-repo",
    title: "Explain My Repo",
    description:
      "A developer tool that transforms any public GitHub repository into an interactive, conversational knowledge base — simply paste a URL and ask Google's Gemini what the codebase does, how a specific feature works, or where to start as a new contributor. No local clone is required: the application fetches and processes repository context server-side, making onboarding and code exploration dramatically faster. Two modes serve different needs — anonymous users get focused one-off sessions for quick questions, while GitHub OAuth unlocks persistent chat history with search across past analyses. Built with Next.js 16, NextAuth, Prisma on PostgreSQL, and a ChatGPT-style interface with full Markdown rendering, it showcases AI integration, secure authentication, and polished developer UX in a tool built for real workflows.",
    image: "/images/projects/explain-my-repo.png",
    githubUrl: "https://github.com/Am1rGhe/explain-my-repo-web-app",
    demoUrl: "https://explain-my-repo-web-app.vercel.app/",
    highlighted: true,
  },
  {
    id: "8",
    title: "Gmail Agent",
    description:
      "An intelligent inbox assistant that connects directly to Gmail through Google OAuth, letting users read, triage, and respond to emails without switching contexts. Google Gemini generates context-aware draft replies in three selectable tones — Professional, Casual, or Friendly — so responses match the situation while saving drafting time. Replies send straight through the Gmail API, turning the app into a true productivity layer rather than a read-only viewer. Persistent user sessions and data are managed with Prisma on PostgreSQL, built on Next.js 16 with NextAuth and Tailwind CSS. The project demonstrates practical OAuth2 scope handling, third-party API integration, and AI-assisted workflows in a production-style architecture.",
    image: "/images/projects/gmail-ai-agent.png",
    githubUrl: "https://github.com/Am1rGhe/gmail-ai-agent",
    demoUrl: "https://gmail-ai-agent-app.vercel.app/",
    highlighted: false,
  },
  {
    id: "2",
    title: "Sprindo – Gestion de Projet Agile",
    description:
      "A full-stack agile project management platform designed for teams to plan sprints, assign tasks, and track progress in one place — built as part of the Codyssey initiative. I led development of the Java backend with Maven, establishing a CI/CD pipeline and comprehensive JUnit test coverage for REST APIs handling projects, sprint planning, task assignment, and real-time statistics. The React frontend delivers a modern interface with reusable components wired to the backend, while a teammate integrated Spring Boot to connect both layers cleanly. Deployed on Vercel, Sprindo mirrors how real teams ship software: clear separation of concerns, testing discipline, and collaborative full-stack delivery across multiple contributors.",
    image: "/images/projects/codyssey-sprindo.png",
    demoUrl: "https://sprindo-codyssey.vercel.app/",
    highlighted: false,
  },
  {
    id: "3",
    title: "AMIR – E-Commerce Website",
    description:
      "A fully functional e-commerce storefront built with React and Vite, designed to simulate a complete online shopping experience from browsing to checkout. The catalog supports category filtering, sorting, and search so users can navigate products efficiently, while a persistent shopping cart survives page refreshes through localStorage. Authentication, a multi-step checkout flow, order confirmation, and order history tracking round out the buyer journey with validation at every step. Context API centralizes application state without external dependencies, making this an ideal foundation for understanding React architecture before scaling to full-stack solutions with databases and payment gateways. Responsive across devices with a clean, conversion-focused UI.",
    image: "/images/projects/amir-website.png",
    githubUrl: "https://github.com/Am1rGhe/ecommerce-app",
    demoUrl: "https://mellifluous-salmiakki-eb31d6.netlify.app/",
    highlighted: false,
  },
  {
    id: "4",
    title: "Galleria – Art Gallery Slideshow",
    description:
      "An interactive art gallery experience built entirely with vanilla HTML, CSS, and JavaScript as a Frontend Mentor challenge — deliberately avoiding frameworks to demonstrate deep fundamentals. Fifteen famous artworks are presented in a striking bento-style masonry grid, with a dedicated slideshow mode featuring next/back navigation, a visual progress indicator, and a full-screen image overlay that updates titles and artist metadata dynamically. The layout is mobile-first and responsive, powered by CSS Grid, event delegation for efficient DOM handling, and smooth keyframe animations. A strong portfolio piece proving mastery of layout systems, accessible interactions, and ES6 JavaScript without leaning on React abstractions.",
    image: "/images/projects/galleria-slideshow.png",
    githubUrl: "https://github.com/Am1rGhe/galleria-slideshow-site",
    demoUrl: "https://am1rghe.github.io/galleria-slideshow-site/",
    highlighted: false,
  },
  {
    id: "5",
    title: "Aureus Bank",
    description:
      "A modern, interactive banking web application crafted with vanilla HTML, CSS, and JavaScript — simulating core fintech flows in the browser without a backend. Users can sign up and log in with auto-generated usernames, then perform deposits, withdrawals, and peer-to-peer transfers while viewing a complete transaction history. The standout UI includes a 3D credit card with a hover-to-flip animation, a bento-grid dashboard layout, and a live USD-to-EUR currency converter. Smooth modal notifications, form validation, and real-time balance updates create a polished, app-like feel. This project highlights creative CSS craft, client-side state management, and imaginative product design using only web fundamentals.",
    image: "/images/projects/aureus-bank.png",
    githubUrl: "https://github.com/Am1rGhe/Amadeus-bank-site",
    demoUrl: "https://am1rghe.github.io/Amadeus-bank-site/",
    highlighted: false,
  },
  {
    id: "6",
    title: "Bento Grid – Social Media Management Showcase",
    description:
      "A modern, responsive marketing landing page built as a Frontend Mentor challenge — showcasing an AI-powered social media management tool through a visually striking bento grid layout. Seven asymmetric content boxes highlight key value propositions: AI-driven content creation, post scheduling, multi-platform management, and audience growth analytics. Implemented with pure HTML and CSS using custom grid areas, Flexbox, CSS custom properties, and carefully tuned breakpoints for desktop, tablet, and mobile. The purple-and-yellow brand system paired with DM Sans typography creates a cohesive, professional aesthetic. Demonstrates pixel-perfect responsive design and design-system thinking without any JavaScript dependencies.",
    image: "/images/projects/bento-grid.png",
    githubUrl: "https://github.com/Am1rGhe/Bento-grid",
    demoUrl: "https://am1rghe.github.io/Bento-grid/",
    highlighted: false,
  },
  {
    id: "7",
    title: "Simulation d'Usine de Production",
    description:
      "An object-oriented Java simulation modeling a complete production factory floor — conveyor belts, processing machines, and specialized stations working together to transform raw materials through a manufacturing pipeline. Products such as ores, powders, and ingots move from extraction through stations including mines, mills, furnaces, and vendors, each governed by configurable recipes. A logistic system manages belt flow and routing, while abstract Station and Machine classes provide extensibility through inheritance and polymorphism. Backed by JUnit tests, the project demonstrates rigorous OOP design, domain modeling, and test-driven structure in a non-UI context — ideal for showing computer science fundamentals beyond web development.",
    image: "https://placehold.co/600x352/1e3a5f/94a3b8?text=Java+Factory+Simulation",
    githubUrl: "https://github.com/Am1rGhe/simulation-usine-production",
    highlighted: false,
  },
];

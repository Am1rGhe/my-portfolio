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
    description: "A modern full-stack note-taking app built with React and Supabase. Features user authentication, tags, search, archive functionality, and a responsive three-column layout. Includes font customization, protected routes, and real-time sync with PostgreSQL via Supabase.",
    image: "/images/projects/note-taking-app.jpg",
    githubUrl: "https://github.com/Am1rGhe/note-taking-app",
    demoUrl: "https://note-taking-app-two-blond.vercel.app/",
    highlighted: true,
  },
  {
    id: "2",
    title: "Sprindo – Gestion de Projet Agile",
    description: "A full-stack web application for managing agile projects, sprints, tasks, and team members. Developed the Java backend with Maven integration, CI/CD pipeline, and comprehensive test coverage. Built the React frontend with modern UI components and integrated it with the backend. A teammate handled the Spring Boot framework integration to connect both layers. Features include project creation, sprint planning, task assignment, and real-time statistics tracking.",
    image: "/images/projects/codyssey-sprindo.png",
    demoUrl: "https://sprindo-codyssey.vercel.app/",
    highlighted: true,
  },
  {
    id: "3",
    title: "AMIR – E-Commerce Website",
    description: "A fully functional e-commerce website built with React and Vite. Features product browsing with category filtering and sorting, search functionality, shopping cart with persistent storage, user authentication, and complete checkout flow. Includes order management with confirmation page, track order history, responsive design, and comprehensive form validation. Uses Context API for state management and localStorage for data persistence.",
    image: "/images/projects/amir-website.png",
    githubUrl: "https://github.com/Am1rGhe/ecommerce-app",
    demoUrl: "https://mellifluous-salmiakki-eb31d6.netlify.app/",
    highlighted: false,
  },
  {
    id: "4",
    title: "Galleria – Art Gallery Slideshow",
    description: "An interactive art gallery slideshow site built with vanilla HTML, CSS, and JavaScript as a Frontend Mentor challenge. Displays 15 famous artworks in a bento-style masonry grid. Features slideshow mode with next/back navigation, progress indicator, full-screen image overlay, and dynamic content updates. Responsive design with mobile-first approach, CSS Grid layouts, event delegation, and keyframe animations. No frameworks—pure DOM manipulation and ES6 JavaScript.",
    image: "/images/projects/galleria-slideshow.png",
    githubUrl: "https://github.com/Am1rGhe/galleria-slideshow-site",
    demoUrl: "https://am1rghe.github.io/galleria-slideshow-site/",
    highlighted: false,
  },
  {
    id: "5",
    title: "Aureus Bank",
    description: "A modern, interactive banking web application built with vanilla HTML, CSS, and JavaScript. Features login and signup with auto-generated usernames, deposits, withdrawals, transfers between users, and transaction history. Includes a 3D credit card with hover-to-flip animation, bento grid dashboard layout, USD to EUR currency converter, and responsive design. Smooth animations, modal notifications, form validation, and real-time balance tracking.",
    image: "/images/projects/aureus-bank.png",
    githubUrl: "https://github.com/Am1rGhe/Amadeus-bank-site",
    demoUrl: "https://am1rghe.github.io/Amadeus-bank-site/",
    highlighted: false,
  },
  {
    id: "6",
    title: "Bento Grid – Social Media Management Showcase",
    description: "A modern, responsive bento grid layout showcasing a social media management tool powered by AI. Frontend Mentor challenge built with pure HTML and CSS. Features seven content boxes in an asymmetric grid pattern highlighting AI content creation, scheduling, multi-platform management, and audience growth. Uses CSS Grid with custom grid areas, Flexbox, CSS custom properties, and responsive breakpoints for desktop, tablet, and mobile. Clean purple and yellow design with DM Sans typography.",
    image: "/images/projects/bento-grid.png",
    githubUrl: "https://github.com/Am1rGhe/Bento-grid",
    demoUrl: "https://am1rghe.github.io/Bento-grid/",
    highlighted: false,
  },
  {
    id: "7",
    title: "Simulation d'Usine de Production",
    description: "A Java simulation of a production factory that models a manufacturing system with conveyor belts, processing machines, and production stations. Products (ores, powders, ingots) are extracted and transformed through stations like mines, mills, furnaces, and venders. Features logistic system for belt management, abstract Station and Machine classes with recipes, JUnit tests, and object-oriented architecture with inheritance and polymorphism.",
    image: "https://placehold.co/600x352/1e3a5f/94a3b8?text=Java+Factory+Simulation",
    githubUrl: "https://github.com/Am1rGhe/simulation-usine-production",
    highlighted: false,
  },
  // {
  //   id: "2",
  //   title: "AMIR e-commerce frontend website",
  //   description: "A fully responsive React e-commerce app featuring product browsing, search, shopping cart, checkout, and order tracking, with a clean UI and client-side data persistence.",
  //   image: "/images/projects/amir-website.png",
  //   githubUrl: "https://github.com/Am1rGhe/ecommerce-app",
  //   demoUrl : "https://mellifluous-salmiakki-eb31d6.netlify.app/",
  //   highlighted: true,
  // },
  // {
  //   id: "3",
  //   title: "Project Three",
  //   description: "Portfolio website with dark theme, animations, and starry background. Built with React and Tailwind.",
  //   image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
  //   githubUrl: "https://github.com",
  //   demoUrl: "https://example.com",
  //   highlighted: true,
  // },
  // {
  //   id: "4",
  //   title: "Project Four",
  //   description: "REST API with Java Spring Boot. JWT authentication and MongoDB integration.",
  //   image: "https://picsum.photos/seed/project4/600/400",
  //   githubUrl: "https://github.com",
  //   highlighted: false,
  // },
  // {
  //   id: "5",
  //   title: "Project Five",
  //   description: "CLI tool for database migrations. Written in C with SQLite support.",
  //   image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
  //   githubUrl: "https://github.com",
  //   highlighted: false,
  // },
  // {
  //   id: "6",
  //   title: "Project Six",
  //   description: "Real-time chat application with WebSockets. React frontend, Node.js backend.",
  //   image: "https://picsum.photos/seed/project6/600/400",
  //   githubUrl: "https://github.com",
  //   demoUrl: "https://example.com",
  //   highlighted: false,
  // },
];

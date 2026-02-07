export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  highlighted: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Note taking web app",
    description: "A full-stack application built with Next.js and PostgreSQL. Features authentication, real-time updates, and responsive design.",
    image: "/images/projects/note-taking-app.jpg",
    githubUrl: "https://github.com/Am1rGhe/note-taking-app",
    demoUrl: "https://note-taking-app-two-blond.vercel.app/",
    highlighted: true,
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

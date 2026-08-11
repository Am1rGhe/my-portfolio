export interface Project {
  id: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  highlighted: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    image: "/images/projects/note-taking-app.jpg",
    githubUrl: "https://github.com/Am1rGhe/note-taking-app",
    demoUrl: "https://note-taking-app-two-blond.vercel.app/",
    highlighted: true,
  },
  {
    id: "dydy",
    image: "/images/projects/dydycustom.png",
    githubUrl: "https://github.com/Am1rGhe/dydy-custom",
    demoUrl: "https://dydy-custom-6kj8.vercel.app/",
    highlighted: true,
  },
  {
    id: "explain-repo",
    image: "/images/projects/explain-my-repo.png",
    githubUrl: "https://github.com/Am1rGhe/explain-my-repo-web-app",
    demoUrl: "https://explain-my-repo-web-app.vercel.app/",
    highlighted: true,
  },
  {
    id: "8",
    image: "/images/projects/gmail-ai-agent.png",
    githubUrl: "https://github.com/Am1rGhe/gmail-ai-agent",
    demoUrl: "https://gmail-ai-agent-app.vercel.app/",
    highlighted: false,
  },
  {
    id: "2",
    image: "/images/projects/codyssey-sprindo.png",
    demoUrl: "https://sprindo-codyssey.vercel.app/",
    highlighted: false,
  },
  {
    id: "3",
    image: "/images/projects/amir-website.png",
    githubUrl: "https://github.com/Am1rGhe/ecommerce-app",
    demoUrl: "https://mellifluous-salmiakki-eb31d6.netlify.app/",
    highlighted: false,
  },
  {
    id: "4",
    image: "/images/projects/galleria-slideshow.png",
    githubUrl: "https://github.com/Am1rGhe/galleria-slideshow-site",
    demoUrl: "https://am1rghe.github.io/galleria-slideshow-site/",
    highlighted: false,
  },
  {
    id: "5",
    image: "/images/projects/aureus-bank.png",
    githubUrl: "https://github.com/Am1rGhe/Amadeus-bank-site",
    demoUrl: "https://am1rghe.github.io/Amadeus-bank-site/",
    highlighted: false,
  },
  {
    id: "6",
    image: "/images/projects/bento-grid.png",
    githubUrl: "https://github.com/Am1rGhe/Bento-grid",
    demoUrl: "https://am1rghe.github.io/Bento-grid/",
    highlighted: false,
  },
  {
    id: "7",
    image: "https://placehold.co/600x352/1e3a5f/94a3b8?text=Java+Factory+Simulation",
    githubUrl: "https://github.com/Am1rGhe/simulation-usine-production",
    highlighted: false,
  },
];

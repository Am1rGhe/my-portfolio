export interface ExperienceLink {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  links?: ExperienceLink[];
}

export const experiences: Experience[] = [
  {
    id: "galeries",
    links: [
      { label: "artur.art", href: "https://www.artur.art/fr/home" },
      { label: "loriginal.org", href: "https://www.loriginal.org/fr" },
    ],
  },
  { id: "confoo" },
  { id: "dave" },
  { id: "database-instructor" },
  { id: "programming-instructor" },
  { id: "hackathon" },
  { id: "codyssey" },
  { id: "ideathon" },
];

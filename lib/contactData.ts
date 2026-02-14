export interface ContactLink {
  label: string;
  href: string;
  icon: "email" | "github" | "linkedin" | "twitter";
}

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:amir.ghouari2004@gmail.com", icon: "email" },
  { label: "GitHub", href: "https://github.com/Am1rGhe", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amir-ghouari-395a5b3b0", icon: "linkedin" },
];

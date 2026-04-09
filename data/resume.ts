export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ResumeData = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  links: {
    label: string;
    href: string;
  }[];
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
};

export const resume: ResumeData = {
  name: "Roman Burkivskiy",
  title: "Frontend developer",
  tagline: "Trainee / Junior web developer",
  location: "Kyiv, Ukraine",
  email: "r.burkivskiy@protonmail.com",
  phone: "@f1nery (Telegram)",
  links: [
    { label: "GitHub", href: "https://github.com/F1nery" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/roman-burkivskiy-591178268/",
    },
    { label: "Portfolio", href: "https://example.com" },
  ],
  summary:
    "I'm an aspiring web developer interested in building fast, accessible web apps that care about clear architecture, observability, and maintainable code. Recent focus: web design systems, Next.js, AI agents.",
  experience: [
    {
      company: "Romterm.od.ua",
      role: "Web Content & E-Commerce Assistant ",
      period: "2025 - 2026",
      location: "Remote",
      bullets: [
        "Worked in an assistant capacity managing a commercial website for a total of 8 months, was responsible for helping to maintain and update both site content and the product catalog. ",
        "The role involved assistance in executing regular updates to website pages and product listings, ensuring consistency and accuracy. ",
        "Worked with Next.js, TypeScript, Tailwind CSS, REST APIs, Git. In addition, supported day-to-day operational workflows related to website maintenance and digital content management. ",
      ],
    },
  ],
  education: [
    {
      school: "Taras Shevchenko National University of Kyiv",
      degree: "Software Engineering (121)",
      period: "2021 — 2025",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Accessibility",
      ],
    },
    {
      title: "Backend & data",
      items: ["Node.js", "PostgreSQL", "REST API'S"],
    },
    {
      title: "Practices",
      items: ["CI/CD", "Testing", "Code review", "System design"],
    },
  ],
};

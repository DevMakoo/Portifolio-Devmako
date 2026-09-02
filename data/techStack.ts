export type TechCategory = {
  label: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Angular",
    ],
  },
  {
    label: "Backend",
    items: ["Java", "Node.js", "Python", "REST APIs"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma"],
  },
];

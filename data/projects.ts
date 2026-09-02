export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  imageAlt: string;
  placeholder?: boolean;
  liveUrl: string;
  codeUrl: string;
};

// NOTE: liveUrl / codeUrl are placeholders ("#") until real deployment
// and repository URLs are available — update before publishing.
export const projects: Project[] = [
  {
    id: "apex-fitness",
    index: "01",
    title: "Apex Fitness",
    description:
      "A cinematic premium fitness experience focused on motion, interaction, and high-end visual design.",
    stack: ["Next.js", "React", "TypeScript", "GSAP", "Three.js", "Lenis"],
    image: "/projects/apex-fitness.png",
    imageAlt: "Apex Fitness website hero section on a dark background",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "clinic-landing",
    index: "02",
    title: "Clinic Landing Page",
    description:
      "A responsive healthcare landing page designed around clarity, accessibility, conversion, and professional presentation.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/clinic-landing.png",
    imageAlt: "Clinic landing page hero section on a light background",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "fullstack-application",
    index: "03",
    title: "Full-Stack Application",
    description:
      "A full-stack application demonstrating frontend development, REST APIs, backend architecture, and database integration.",
    stack: ["Java", "REST API", "Database", "React"],
    imageAlt: "Abstract representation of a full-stack Java application",
    placeholder: true,
    liveUrl: "#",
    codeUrl: "#",
  },
];

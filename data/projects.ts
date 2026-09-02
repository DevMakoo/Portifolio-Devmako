export type ProjectStatus = "completed" | "planned";

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  image?: string;
  imageAlt: string;
  placeholder?: boolean;
  status: ProjectStatus;
  liveUrl: string;
  codeUrl: string;
};

// NOTE: liveUrl / codeUrl are placeholders ("#") until real deployment
// and repository URLs are available — update before publishing.
//
// Only real, completed work is listed here. Two more directions
// (a full-stack app and an auth API) are planned but not yet built —
// add them as new entries with status: "planned" once they exist.
export const projects: Project[] = [
  {
    id: "apex-fitness",
    index: "01",
    title: "Apex Fitness",
    category: "Frontend / Creative Engineering",
    description:
      "A cinematic premium fitness experience focused on motion, interaction, and high-end visual design.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Three.js", "Lenis"],
    image: "/projects/apex-fitness.png",
    imageAlt: "Apex Fitness website hero section on a dark background",
    status: "completed",
    liveUrl: "#",
    codeUrl: "#",
  },
];

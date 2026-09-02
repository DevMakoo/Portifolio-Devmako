import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "./ProjectShowcase";

export function SelectedWork() {
  return (
    <section id="work" className="py-28 md:py-36 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          title="Selected Work"
          subtitle="Projects built across design, frontend engineering, backend systems, and interactive experiences."
        />

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

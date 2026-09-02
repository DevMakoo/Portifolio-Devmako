import { experience, education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { TimelineEntry } from "@/data/experience";

function TimelineRow({ entry, kind }: { entry: TimelineEntry; kind: "work" | "education" }) {
  return (
    <Reveal className="relative pl-10 py-8 border-b border-border last:border-b-0">
      <span
        className="absolute left-0 top-[2.6rem] w-2 h-2 rounded-full bg-accent"
        aria-hidden
      />
      <div className="grid md:grid-cols-[10rem_1fr] gap-2 md:gap-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-dim">
          {entry.period}
        </span>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            {entry.title}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {entry.org}
          </p>
          <p className="mt-3 text-muted max-w-xl text-balance">
            {entry.description}
          </p>
          {kind === "education" && (
            <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim border border-border px-2.5 py-1">
              Education
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading title="Experience" />

        <div className="mt-16 border-l border-border">
          {experience.map((entry) => (
            <TimelineRow key={entry.title} entry={entry} kind="work" />
          ))}
          <TimelineRow entry={education} kind="education" />
        </div>
      </div>
    </section>
  );
}

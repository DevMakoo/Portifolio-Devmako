import { techStack } from "@/data/techStack";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function TechStack() {
  return (
    <section id="stack" className="py-28 md:py-36 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading title="Tools I Build With" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {techStack.map((category) => (
            <Reveal key={category.label} className="bg-bg p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
                {category.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted hover:text-fg transition-colors duration-300 border-b border-transparent hover:border-border pb-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

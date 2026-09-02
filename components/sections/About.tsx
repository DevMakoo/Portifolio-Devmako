import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <SectionHeading title="About Devmako" />

          <div className="flex flex-col gap-6 text-lg text-muted text-balance">
            <Reveal>
              <p>
                I&apos;m a Software Engineering student focused on building
                modern applications and continuously expanding my skills
                across frontend, backend, databases, and software
                architecture.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                My approach centers on solving real problems with clean,
                maintainable code — learning new tools and patterns as
                projects demand them, and working well within a team to
                ship things that actually work. I care about the
                fundamentals: readable architecture, thoughtful trade-offs,
                and applications built for real people to use.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

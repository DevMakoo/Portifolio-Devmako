import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-semibold tracking-tight leading-[0.95] uppercase text-5xl sm:text-6xl md:text-7xl text-balance">
            Let&apos;s build
            <br />
            <span className="text-accent">something great.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-lg text-lg text-muted text-balance">
            Open to opportunities, collaborations, and projects where
            technology can solve meaningful problems.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href={`mailto:${site.email}`}
              variant="primary"
              icon={<ArrowUpRight size={16} />}
            >
              Get In Touch
            </Button>
            <Button href={site.github} variant="secondary" icon={<GithubIcon size={16} />}>
              GitHub
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14 flex flex-col sm:flex-row gap-6 sm:gap-12 border-t border-border pt-8">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300"
            >
              <LinkedinIcon size={16} aria-hidden />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300"
            >
              <Mail size={16} aria-hidden />
              <span className="font-mono text-sm">{site.email}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

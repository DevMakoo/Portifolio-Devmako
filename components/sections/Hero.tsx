"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { HeroGrid } from "./HeroGrid";

const headlineWords = ["Build.", "Create.", "Solve."];

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      gsap.set(
        root.querySelectorAll("[data-hero-animate]"),
        { opacity: 1, y: 0 },
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-eyebrow]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          "[data-hero-line]",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          "-=0.3",
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          "[data-hero-actions]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.35",
        )
        .fromTo(
          "[data-hero-scroll]",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2",
        );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden border-b border-border"
    >
      <HeroGrid />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 pt-28 pb-24">
        <p
          data-hero-eyebrow
          data-hero-animate
          className="font-mono text-xs uppercase tracking-[0.35em] text-accent mb-8"
          style={{ opacity: 0 }}
        >
          Software Developer
        </p>

        <h1 className="font-semibold tracking-tight leading-[0.95] text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          {headlineWords.map((word) => (
            <span
              key={word}
              data-hero-line
              data-hero-animate
              className="block overflow-hidden"
              style={{ opacity: 0 }}
            >
              {word}
            </span>
          ))}
        </h1>

        <div className="mt-10 max-w-md md:ml-auto md:mr-0 md:text-right">
          <p
            data-hero-sub
            data-hero-animate
            className="text-base sm:text-lg text-muted text-balance"
            style={{ opacity: 0 }}
          >
            Developer focused on building modern digital experiences, web
            applications, and full-stack solutions.
          </p>
        </div>

        <div
          data-hero-actions
          data-hero-animate
          className="mt-12 flex flex-wrap items-center gap-4"
          style={{ opacity: 0 }}
        >
          <Button href="#work" variant="primary" icon={<ArrowUpRight size={16} />}>
            View My Work
          </Button>
          <Button href={site.cvPath} variant="secondary" download>
            Download CV
          </Button>

          <div className="flex items-center gap-4 ml-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devmako on GitHub"
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              <GithubIcon size={20} aria-hidden />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devmako on LinkedIn"
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              <LinkedinIcon size={20} aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div
        data-hero-scroll
        className="relative pb-10 flex flex-col items-center gap-3"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-dim">
          Scroll to explore
        </span>
        <ArrowDown
          size={14}
          className="text-muted-dim animate-bounce motion-reduce:animate-none"
          aria-hidden
        />
      </div>
    </section>
  );
}

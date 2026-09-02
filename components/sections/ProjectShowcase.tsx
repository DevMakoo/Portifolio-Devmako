"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Code2, Terminal } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectShowcase({
  project,
  reverse,
  total,
}: {
  project: Project;
  reverse: boolean;
  total: number;
}) {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const wrap = imageWrapRef.current;
    const img = imageRef.current;
    if (!wrap || !img || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div
        ref={imageWrapRef}
        className={cn(
          "relative aspect-[4/3] overflow-hidden border border-border bg-surface",
          reverse && "md:order-2",
        )}
      >
        {project.placeholder ? (
          <PlaceholderArt index={project.index} title={project.title} />
        ) : (
          <div ref={imageRef} className="absolute inset-0 -top-[8%] h-[116%]">
            <Image
              src={project.image!}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        )}
      </div>

      <div className={cn(reverse && "md:order-1")}>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-dim">
              {project.index} / {String(total).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {project.category}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-muted text-balance max-w-md">
            {project.description}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Chip label={tech} />
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={project.liveUrl} variant="primary" icon={<ArrowUpRight size={16} />}>
              View Project
            </Button>
            <Button href={project.codeUrl} variant="secondary" icon={<Code2 size={16} />}>
              View Code
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function PlaceholderArt({ index, title }: { index: string; title: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-8">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div className="relative flex items-center justify-between">
        <Terminal className="text-muted-dim" size={20} aria-hidden />
        <span className="font-mono text-xs text-muted-dim">{index}</span>
      </div>
      <p className="relative font-mono text-2xl sm:text-3xl text-muted leading-tight">
        {title}
      </p>
    </div>
  );
}

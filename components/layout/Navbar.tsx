"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    if (menuOpen) {
      el.style.display = "flex";
      if (reducedMotion) {
        gsap.set(el, { opacity: 1, clearProps: "transform" });
        return;
      }
      gsap.fromTo(
        el,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      );
    } else if (el.style.display === "flex") {
      if (reducedMotion) {
        el.style.display = "none";
        return;
      }
      gsap.to(el, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          el.style.display = "none";
        },
      });
    }
  }, [menuOpen, reducedMotion]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-bg/90 backdrop-blur-sm border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#"
          aria-label="Devmako, back to top"
          className="font-mono text-sm tracking-[0.05em] focus-visible:outline-2 focus-visible:outline-accent"
        >
          DEV<span className="text-accent">Mako</span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-fg transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex font-mono text-xs uppercase tracking-[0.15em] border border-border-strong px-5 py-2.5 hover:border-accent hover:text-accent transition-colors duration-300"
        >
          Contact
        </a>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-fg"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="md:hidden hidden flex-col gap-1 bg-bg border-b border-border px-6 pb-8 pt-2"
        style={{ opacity: 0 }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-mono text-sm uppercase tracking-[0.15em] text-muted hover:text-fg py-4 border-b border-border transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="font-mono text-sm uppercase tracking-[0.15em] text-accent py-4"
        >
          Contact
        </a>
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs text-muted-dim pt-2"
        >
          {site.email}
        </a>
      </div>
    </header>
  );
}

import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const socials = [
  { label: "GitHub", href: site.github, icon: GithubIcon },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-mono text-sm tracking-[0.05em]">
            DEV<span className="text-accent">Mako</span>
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-dim">
            Software Developer
          </p>
        </div>

        <ul className="flex items-center gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300"
              >
                <Icon size={16} aria-hidden />
                <span className="font-mono text-xs uppercase tracking-[0.15em]">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-dim font-mono">
          © {new Date().getFullYear()} Devmako
        </p>
      </div>
    </footer>
  );
}

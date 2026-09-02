import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  className?: string;
  download?: boolean;
};

const baseStyles =
  "group inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-[0.15em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent";

const variantStyles = {
  primary: "bg-fg text-bg hover:bg-accent hover:text-bg",
  secondary:
    "border border-border-strong text-fg hover:border-accent hover:text-accent",
};

export function Button({
  children,
  href,
  variant = "primary",
  icon,
  className,
  download,
}: ButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      download={download}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </a>
  );
}

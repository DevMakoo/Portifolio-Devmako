export function Chip({ label }: { label: string }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted border border-border px-3 py-1.5 transition-colors duration-300 hover:border-accent hover:text-accent">
      {label}
    </span>
  );
}

// PLACEHOLDER lockup. Swap for the real KK monogram SVG from Karen's brand files.
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-serif font-medium leading-none tracking-[-0.12em] ${className}`}
    >
      KK
    </span>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "light" ? "text-linen" : "text-petrol";
  const sub = tone === "light" ? "text-taupe" : "text-slate";
  return (
    <a href="#top" className={`flex items-center gap-4 whitespace-nowrap ${color}`} aria-label="Karen Knab, LMFT, home">
      <Monogram className="text-4xl" />
      <span className="hidden h-8 w-px bg-taupe/60 sm:block" aria-hidden="true" />
      <span className="flex flex-col">
        <span className="font-serif text-lg uppercase tracking-[0.18em] sm:text-xl">
          Karen Knab, LMFT
        </span>
        <span className={`font-serif text-[0.62rem] uppercase tracking-[0.3em] ${sub}`}>
          Therapy for Leaders
        </span>
      </span>
    </a>
  );
}

import { MONOGRAM_PATH, MONOGRAM_VIEWBOX } from "./monogramPath";

export function Monogram({ className = "" }: { className?: string }) {
  // Size with the font-size utilities (text-4xl etc.): height is 0.64em, color follows text color.
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={MONOGRAM_VIEWBOX}
      className={`inline-block h-[0.64em] w-auto shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d={MONOGRAM_PATH} />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "light" ? "text-linen" : "text-petrol";
  const sub = tone === "light" ? "text-taupe" : "text-slate";
  return (
    <a href="#top" className={`flex items-center gap-4 whitespace-nowrap ${color}`} aria-label="Karen Knab, LMFT, home">
      <Monogram className="text-6xl" />
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

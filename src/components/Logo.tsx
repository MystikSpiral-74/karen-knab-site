import Link from "next/link";
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
    <Link href="/" className={`flex items-center gap-3 whitespace-nowrap sm:gap-4 ${color}`} aria-label="Karen Knab, LMFT, home">
      <Monogram className="text-4xl sm:text-6xl" />
      <span className="hidden h-8 w-px bg-taupe/60 sm:block" aria-hidden="true" />
      <span className="flex flex-col max-[359px]:hidden">
        <span className="font-serif text-sm uppercase tracking-[0.1em] sm:text-xl sm:tracking-[0.18em] xl:tracking-[0.14em]">
          Karen Knab, LMFT
        </span>
        <span className={`hidden font-serif text-[0.62rem] uppercase tracking-[0.3em] sm:block ${sub}`}>
          Therapy for Leaders
        </span>
      </span>
    </Link>
  );
}

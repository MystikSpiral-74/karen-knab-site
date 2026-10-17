import { site } from "@/content/copy";

type Props = {
  label?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
};

const styles = {
  solid: "bg-petrol text-linen hover:bg-slate border border-petrol hover:border-slate",
  outline: "border border-linen/70 text-linen hover:bg-linen hover:text-petrol",
  light: "bg-linen text-petrol hover:bg-paper border border-linen",
};

export function CtaButton({ label = site.ctaLabel, variant = "solid", className = "" }: Props) {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 px-7 py-3.5 font-serif text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${styles[variant]} ${className}`}
    >
      {label}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

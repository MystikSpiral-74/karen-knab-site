import Link from "next/link";
import { site } from "@/content/copy";
import { ctaBase, ctaStyles } from "./ctaStyles";

type Props = {
  label?: string;
  variant?: keyof typeof ctaStyles;
  className?: string;
};

export function CtaButton({ label = site.ctaLabel, variant = "solid", className = "" }: Props) {
  const cls = `${ctaBase} ${ctaStyles[variant]} ${className}`;
  const inner = (
    <>
      {label}
      <span aria-hidden="true">&rarr;</span>
    </>
  );
  // Form mode stays on the site. Calendly mode opens the booking page in a new tab.
  if (site.ctaExternal) {
    return (
      <a href={site.ctaHref} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={site.ctaHref} className={cls}>
      {inner}
    </Link>
  );
}

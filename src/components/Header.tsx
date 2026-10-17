import { nav, site } from "@/content/copy";
import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-petrol/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-serif text-sm uppercase tracking-[0.16em] text-linen/85 hover:text-linen"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <CtaButton label={site.headerCtaLabel} variant="outline" className="shrink-0 whitespace-nowrap !gap-2 !px-4 !py-2.5 !text-xs !tracking-[0.14em] max-sm:[&>span]:hidden sm:!gap-3 sm:!px-5 sm:!tracking-[0.2em]" />
      </div>
    </header>
  );
}

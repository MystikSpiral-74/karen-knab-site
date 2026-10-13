import { nav } from "@/content/copy";
import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-petrol/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
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
        <CtaButton label="Connect" variant="outline" className="!px-5 !py-2.5 !text-xs" />
      </div>
    </header>
  );
}

import Link from "next/link";
import { site, footer } from "@/content/copy";

export function Footer() {
  return (
  <footer className="grain-band [--grain-opacity:0.4] bg-ink text-linen/80">
    <div className="mx-auto max-w-6xl space-y-4 px-5 py-12 text-sm leading-relaxed sm:px-8">
      <p className="font-serif text-lg uppercase tracking-[0.18em] text-linen">{site.name}</p>
      <p>{footer.licensure}</p>
      <ul className="space-y-1">
        {footer.licenses.map((l) => (
          <li key={l.label}>
            {l.label}.{" "}
            <a
              className="underline underline-offset-4 hover:text-linen focus-visible:outline-linen"
              href={l.verifyHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${footer.verifyLabel} ${l.label} (opens in a new tab)`}
            >
              {footer.verifyLabel}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5">
        <a
          className="underline underline-offset-4 hover:text-linen focus-visible:outline-linen"
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Karen Knab on LinkedIn (opens in a new tab)"
          className="inline-flex text-linen/80 hover:text-linen focus-visible:outline-linen"
        >
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1">
      {footer.links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="underline underline-offset-4 hover:text-linen focus-visible:outline-linen"
        >
          {l.label}
        </Link>
      ))}
    </nav>
    <p className="max-w-3xl">{footer.crisis}</p>
      <p className="pt-4 text-xs text-linen/50">
        &copy; 2026 {site.name}. All rights reserved.
      </p>
    </div>
  </footer>
  );
}

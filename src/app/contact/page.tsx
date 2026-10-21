import Link from "next/link";
import type { Metadata } from "next";
import { contact } from "@/content/copy";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: contact.metaTitle,
  description: contact.metaDescription,
  // Dormant page: reachable by address, hidden from search engines.
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header showCta={false} />
      <main id="top" className="grain-band bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="font-serif text-sm uppercase tracking-[0.3em] text-slate">{contact.eyebrow}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-petrol sm:text-5xl">{contact.heading}</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">{contact.intro}</p>
            <p className="mt-6 leading-relaxed text-ink/70">{contact.privacyNote}</p>
            <p className="mt-3">
              <Link href="/privacy" className="underline underline-offset-4 text-petrol hover:text-slate">
                {contact.privacyLinkLabel}
              </Link>
            </p>
            <p className="mt-8 border-t border-taupe/50 pt-6 text-sm leading-relaxed text-ink/70">{contact.crisis}</p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

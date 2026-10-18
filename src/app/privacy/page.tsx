import type { Metadata } from "next";
import { privacy } from "@/content/copy";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: privacy.metaTitle,
  description: privacy.metaDescription,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="top" className="grain-band bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
          <h1 className="font-serif text-4xl text-petrol sm:text-5xl">{privacy.heading}</h1>
          <p className="mt-3 text-sm text-ink/60">Last updated {privacy.updated}</p>
          <div className="mt-10 space-y-8">
            {privacy.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-serif text-2xl text-petrol">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 leading-relaxed text-ink/80">{p}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

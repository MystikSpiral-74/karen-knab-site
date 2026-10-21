import {
  site,
  recognition,
  who,
  approach,
  method,
  how,
  about,
  faq,
  closing,
} from "@/content/copy";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaButton } from "@/components/CtaButton";
import { Monogram } from "@/components/Logo";
import { HeroCopy } from "@/components/HeroCopy";
import { GroupIcon } from "@/components/GroupIcons";

function Portrait({
  src,
  alt,
  preload = false,
  className = "",
}: {
  src: string;
  alt: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-petrol ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        preload={preload}
        sizes="(min-width: 1024px) 460px, (min-width: 640px) 60vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>;
}

function Rule({ light = false }: { light?: boolean }) {
  return <div className={`my-6 h-px w-14 ${light ? "bg-taupe" : "bg-taupe"}`} aria-hidden="true" />;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.metaDescription,
  url: site.url,
  email: site.email,
  sameAs: [site.linkedinUrl, site.psychologyTodayUrl],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Virginia" },
    { "@type": "AdministrativeArea", name: "New York" },
  ],
};

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="grain-band [--grain-opacity:0.4] bg-petrol text-linen">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Eyebrow light>{site.descriptor}</Eyebrow>
              <HeroCopy />
              <div className="mt-9 flex flex-col items-start gap-3">
                <CtaButton variant="light" />
                <p className="text-sm text-linen/70">{site.ctaNote}</p>
              </div>
            </div>
            <Portrait
              src="/images/karen-hero.jpg"
              alt="Karen Knab smiling and leaning forward on a bench, hands clasped, facing the camera"
              preload
              className="aspect-[4/5] w-full"
            />
          </div>
        </section>

        {/* RECOGNITION */}
        <section className="grain-band bg-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr] lg:gap-y-0">
            <div className="lg:col-start-1 lg:row-start-1">
              <Eyebrow>{recognition.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-petrol sm:text-5xl">
                {recognition.heading}
              </h2>
            </div>
            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate">{recognition.intro}</p>
              <ul className="divide-y divide-taupe/40 border-y border-taupe/40">
                {recognition.items.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4 text-lg leading-relaxed text-ink/90">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      className="mt-[0.4rem] h-6 w-6 shrink-0 text-petrol"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12h15" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-start-1 lg:row-start-2">
              <Rule />
              <p className="max-w-md font-serif text-2xl italic text-slate">{recognition.close}</p>
              <p className="mt-10 max-w-md text-base leading-relaxed text-ink/80">
                <span className="font-semibold text-petrol">{recognition.concernsLabel}: </span>
                {recognition.concerns}
              </p>
            </div>
          </div>
        </section>

        {/* WHO I WORK WITH */}
        <section id="who" className="grain-band scroll-mt-20 bg-linen">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="max-w-3xl">
              <Eyebrow>{who.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium text-balance leading-tight text-petrol sm:text-5xl">
                {who.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/90">{who.body}</p>
            </div>
            <ul className="mt-12 grid gap-px bg-taupe/40 sm:grid-cols-2 lg:grid-cols-3">
              {who.groups.map((g, i) => (
                <li key={g} className="grain-band flex items-center gap-5 bg-linen p-6 font-serif text-xl leading-snug text-petrol">
                  <GroupIcon index={i} />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="grain-band [--grain-opacity:0.4] scroll-mt-20 bg-slate text-linen">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <Eyebrow light>{approach.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  {approach.heading}
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-linen">
                {approach.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="mt-14 grid gap-px bg-linen/20 sm:grid-cols-2 lg:grid-cols-4">
              {approach.pillars.map((p) => (
                <div key={p.title} className="grain-band [--grain-opacity:0.4] bg-slate p-6">
                  <h3 className="font-serif text-2xl text-linen">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-linen/95">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW I WORK */}
        <section id="method" className="grain-band scroll-mt-20 bg-linen">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Eyebrow>{method.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-petrol sm:text-5xl">
                  {method.heading}
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-ink/90">
                {method.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <ul className="mt-14 grid gap-px bg-taupe/40 md:grid-cols-3">
              {method.influences.map((i) => (
                <li key={i.title} className="grain-band bg-linen p-6">
                  <h3 className="font-serif text-2xl text-petrol">{i.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/85">{i.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="grain-band scroll-mt-20 bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <Eyebrow>{how.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-tight text-petrol sm:text-5xl">
              {how.heading}
            </h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {how.steps.map((s, i) => (
                <li key={s.title} className="border-t border-taupe pt-6">
                  <span className="font-serif text-5xl text-taupe">{i + 1}</span>
                  <h3 className="mt-3 font-serif text-2xl text-petrol">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/85">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 flex flex-col items-start gap-3">
              <CtaButton />
              <p className="text-sm text-sage">{site.ctaNote}</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="grain-band scroll-mt-20 bg-linen">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Portrait
                src="/images/karen-about.jpg"
                alt="Karen Knab seated on a bench, smiling and looking off to the side"
                className="aspect-[4/5] w-full"
              />
              <ul className="mt-6 space-y-2 border-t border-taupe/50 pt-5 font-serif text-lg text-petrol">
                {about.facts.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      className="mt-[0.62rem] h-[11px] w-[11px] shrink-0 text-taupe"
                      fill="currentColor"
                    >
                      <path d="M12 1l11 11-11 11L1 12z" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-petrol sm:text-5xl">
                {about.heading}
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/90">
                {about.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="grain-band scroll-mt-20 bg-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>{faq.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-petrol sm:text-5xl">
                {faq.heading}
              </h2>
            </div>
            <div className="divide-y divide-taupe/50 border-y border-taupe/50">
              {faq.items.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl text-petrol">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="mt-1 text-taupe transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/85">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="grain-band [--grain-opacity:0.4] bg-petrol text-linen">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-28">
            <Monogram className="text-7xl text-taupe" />
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              {closing.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-linen/85">
              {closing.body}
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <CtaButton variant="light" />
              <p className="text-sm text-linen/70">{site.ctaNote}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

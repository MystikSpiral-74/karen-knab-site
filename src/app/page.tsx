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
  footer,
} from "@/content/copy";
import Image from "next/image";
import { Header } from "@/components/Header";
import { CtaButton } from "@/components/CtaButton";
import { Monogram } from "@/components/Logo";
import { HeroCopy } from "@/components/HeroCopy";

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
  return <p className={`eyebrow ${light ? "!text-taupe" : ""}`}>{children}</p>;
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
  areaServed: [
    { "@type": "AdministrativeArea", name: "Virginia" },
    { "@type": "AdministrativeArea", name: "New York" },
  ],
};

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
        <section className="bg-petrol text-linen">
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
        <section className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>{recognition.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-petrol sm:text-5xl">
                {recognition.heading}
              </h2>
              <Rule />
              <p className="max-w-md font-serif text-2xl italic text-slate">{recognition.close}</p>
            </div>
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-sage">{recognition.intro}</p>
              <ul className="divide-y divide-taupe/40 border-y border-taupe/40">
                {recognition.items.map((item) => (
                  <li key={item} className="py-4 text-lg leading-relaxed text-ink/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHO I WORK WITH */}
        <section id="who" className="scroll-mt-20 bg-linen">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="max-w-3xl">
              <Eyebrow>{who.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-petrol sm:text-5xl">
                {who.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/90">{who.body}</p>
            </div>
            <ul className="mt-12 grid gap-px bg-taupe/40 sm:grid-cols-2 lg:grid-cols-3">
              {who.groups.map((g) => (
                <li key={g} className="bg-linen p-6 font-serif text-xl text-petrol">
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink/80">
              <span className="font-semibold text-petrol">{who.concernsLabel}: </span>
              {who.concerns}
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="scroll-mt-20 bg-forest text-linen">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <Eyebrow light>{approach.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  {approach.heading}
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-linen/90">
                {approach.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="mt-14 grid gap-px bg-linen/20 sm:grid-cols-2 lg:grid-cols-4">
              {approach.pillars.map((p) => (
                <div key={p.title} className="bg-forest p-6">
                  <h3 className="font-serif text-2xl text-linen">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-linen/80">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW I WORK */}
        <section id="method" className="scroll-mt-20 bg-linen">
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
                <li key={i.title} className="bg-linen p-6">
                  <h3 className="font-serif text-2xl text-petrol">{i.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/85">{i.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="scroll-mt-20 bg-paper">
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
        <section id="about" className="scroll-mt-20 bg-linen">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Portrait
                src="/images/karen-about.jpg"
                alt="Karen Knab seated on a bench, smiling and looking off to the side"
                className="aspect-[4/5] w-full"
              />
              <ul className="mt-6 space-y-2 border-t border-taupe/50 pt-5 font-serif text-lg text-petrol">
                {about.facts.map((f) => (
                  <li key={f}>{f}</li>
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
        <section id="faq" className="scroll-mt-20 bg-paper">
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
        <section className="bg-petrol text-linen">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-28">
            <Monogram className="text-7xl text-taupe" />
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              {closing.heading}
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

      <footer className="bg-ink text-linen/80">
        <div className="mx-auto max-w-6xl space-y-4 px-5 py-12 text-sm leading-relaxed sm:px-8">
          <p className="font-serif text-lg uppercase tracking-[0.18em] text-linen">{site.name}</p>
          <p>{footer.licensure}</p>
          <p>
            <a className="underline underline-offset-4 hover:text-linen" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="max-w-3xl">{footer.note}</p>
          <p className="max-w-3xl">{footer.crisis}</p>
          <p className="pt-4 text-xs text-linen/50">
            &copy; 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

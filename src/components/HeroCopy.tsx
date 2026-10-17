"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { heroOptions, defaultHeroIndex } from "@/content/copy";

function Copy({ index }: { index: number }) {
  const hero = heroOptions[index];
  return (
    <>
      <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
        {hero.headline}
      </h1>
      <div className="my-6 h-px w-14 bg-taupe" aria-hidden="true" />
      <p className="max-w-xl font-serif text-xl italic leading-relaxed text-linen/90 sm:text-2xl">
        {hero.subhead}
      </p>
    </>
  );
}

// /?h=1, /?h=2 or /?h=3 swaps the headline. With no (or an invalid) value the default applies.
function Switcher() {
  const params = useSearchParams();
  const n = parseInt(params.get("h") ?? "", 10);
  const index = Number.isNaN(n)
    ? defaultHeroIndex
    : Math.min(Math.max(n, 1), heroOptions.length) - 1;
  return <Copy index={index} />;
}

export function HeroCopy() {
  return (
    <Suspense fallback={<Copy index={defaultHeroIndex} />}>
      <Switcher />
    </Suspense>
  );
}

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { heroOptions } from "@/content/copy";

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

// Review aid: /?h=1, /?h=2 or /?h=3 swaps the headline. Defaults to option 1.
function Switcher() {
  const params = useSearchParams();
  const n = parseInt(params.get("h") ?? "1", 10);
  const index = Math.min(Math.max(Number.isNaN(n) ? 1 : n, 1), heroOptions.length) - 1;
  return <Copy index={index} />;
}

export function HeroCopy() {
  return (
    <Suspense fallback={<Copy index={0} />}>
      <Switcher />
    </Suspense>
  );
}

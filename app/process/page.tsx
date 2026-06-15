import Image from "next/image";
import type { Metadata } from "next";
import { processSteps } from "@/data/process";

export const metadata: Metadata = {
  title: "Process | Timber & Trims",
  description:
    "How a Timber & Trims pair comes together -- from choosing the wood and designing an inlay to hand-shaping, finishing, and fitting each temple to its frame.",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
          Process
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
          How it&rsquo;s made
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Every pair moves through the same five stages on its way from raw
          wood to finished frame. Nothing is automated &mdash; each step is
          done by hand, one temple at a time.
        </p>
      </div>

      <div className="mt-16 space-y-16 sm:space-y-24">
        {processSteps.map((step, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={step.title}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                  reversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                <h2 className="font-serif text-2xl font-semibold text-walnut sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import { makerPortrait, aboutGallery } from "@/data/about";

export const metadata: Metadata = {
  title: "About | Timber & Trims",
  description:
    "The story behind Timber & Trims -- handmade wooden eyeglass temples, fitted to upcycled material frames, made one pair at a time.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:order-2">
            <Image
              src={makerPortrait.src}
              alt={makerPortrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
              About
            </p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
              It started with a plank for grilling fish
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              I&rsquo;m an optometrist by training. Early in my career I
              worked for Dresden Vision, an optical store built around a
              simple modular idea: every frame front and temple is held
              together by a single pin, and the parts are fully
              interchangeable. Spending my days around frames that came
              apart that easily got me thinking &mdash; what if the temples
              were wood?
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              The first attempt was carved from a scrap of cedar &mdash; the
              kind of plank you&rsquo;d use to grill a fish, not build a
              frame. The curves weren&rsquo;t quite right and the fit was far
              from perfect, but it held together, and it did the one thing
              that actually mattered: it held a pair of lenses in front of
              my eyes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              From there, I focused on improving one piece at a time
              &mdash; the fit, the curve, the finish. I started collecting
              woodworking tools in the basement of one of my offices, and
              that corner became my first real workshop. The more time I
              spent shaping wood, the more I wanted to be doing it, so I
              eventually moved the workshop home &mdash; and started
              bringing these temples to other people.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream-dark py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
            Why wood + glasses
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-walnut sm:text-4xl">
            Two materials that were never supposed to meet
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Upcycled material frame fronts are great at what they do &mdash; color,
            pattern, durability, and decades of established shapes. Wood is
            great at something else entirely: grain that&rsquo;s different on
            every single piece, a warmth you can feel against your skin, and
            the kind of patina that only comes from being carried and worn.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Putting them together means every pair is genuinely one of a
            kind. Two frames built from the same plastic front and the same
            species of wood will still come out looking like siblings, not
            twins &mdash; and that&rsquo;s exactly how I like it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Every temple is shaped, inlaid, sanded, and oiled by hand before
            it&rsquo;s fitted to a frame. I test the fit, the flex, and the
            balance &mdash; because a beautiful pair of glasses that
            doesn&rsquo;t sit right on your face isn&rsquo;t actually
            beautiful at all.
          </p>
        </div>
      </section>

      {/* Detail gallery */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
            In the workshop
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-walnut sm:text-4xl">
            A closer look
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {aboutGallery.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

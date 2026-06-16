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
              I&rsquo;m an optometrist by training. Early in my career, I
              worked for Dresden Vision, an optical company built around a
              simple modular idea: every frame front and temple is held
              together by a single pin, making every part fully
              interchangeable. Spending my days around frames that came
              apart so easily got me thinking: what if the temples were
              made of wood?
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              My first attempt was carved from a scrap of cedar &mdash; the
              kind of plank you&rsquo;d use to grill a fish, not build a
              pair of glasses. The curves weren&rsquo;t quite right, and
              the fit was far from perfect, but it held together. More
              importantly, it did the one thing that mattered: it held a
              pair of lenses in front of my eyes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              From there, I focused on improving one detail at a time
              &mdash; the fit, the shape, the finish. I started collecting
              woodworking tools and setting up a small workshop in the
              basement of one of my clinics. Before long, that corner
              became the place where I spent most of my free time.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              The more time I spent shaping wood, the more I wanted to
              keep doing it. Eventually, the workshop moved home, the tools
              multiplied, and what began as a curiosity turned into
              something I could share with other people.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream-dark py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/products/black-acetate-walnut-mosaic-inlay-side.jpg"
                alt="Side view of walnut wood temples with a colorful checkerboard mosaic inlay on black frames"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
                Why wood + glasses
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-walnut sm:text-4xl">
                Two materials that were never supposed to meet
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Wood and TR-90 nylon each bring something different to a frame.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                The recycled TR-90 nylon front provides the shape, color,
                durability, and everyday practicality that make for a great pair
                of glasses. Wood brings something else entirely. No two pieces
                have exactly the same grain, it feels warm against the skin, and
                it develops character over time as it&rsquo;s worn and handled.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                When combined, they create frames that are genuinely one of a
                kind. Even if I start with the same frame front and the same
                species of wood, no two finished pairs will ever be exactly
                alike. They&rsquo;ll share the same foundation, but each pair
                ends up with its own unique character.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Every wooden temple is cut, shaped, inlaid, sanded, and finished
                by hand before being fitted to a recycled frame front. I
                personally adjust and inspect every pair, checking the fit,
                balance, splay angle, and pantoscopic tilt to make sure they sit
                comfortably and naturally on the face. No matter how beautiful a
                frame looks on the workbench, it isn&rsquo;t finished until it
                feels right when you put it on.
              </p>
            </div>
          </div>
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

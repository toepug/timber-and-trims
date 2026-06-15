import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import { featuredProducts } from "@/data/products";
import { processSteps } from "@/data/process";
import ProductCard from "@/components/ProductCard";

const heroImage = img(
  "/images/hero/hero-maple-mahogany-medallion-duo.jpg",
  "Two pairs of handmade eyeglasses with wood temples and brass medallions, one in pale maple and one in dark mahogany, displayed side by side"
);

const processFeature = processSteps[3];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/40 to-walnut/10" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak-light">
            Individually Handmade
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
            Wood-grain temples, fitted by hand to every frame.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            Timber &amp; Trims pairs hand-shaped wooden eyeglass temples
            &mdash; walnut, oak, maple, beech, zebrawood &mdash; with TR-90
            nylon and recycled plastic fronts, inlaid and finished one pair
            at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/gallery"
              className="rounded-full bg-oak px-6 py-3 text-sm font-semibold uppercase tracking-wide text-walnut transition-colors hover:bg-oak-light"
            >
              View the Gallery
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              My Story
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
          What I make
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-walnut sm:text-4xl">
          Real wood grain, built for everyday glasses
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          Every pair starts as a raw block of walnut, oak, maple, beech,
          mahogany, or rosewood. I shape, inlay, and finish each temple by
          hand, then hinge it onto an upcycled material frame front &mdash; matching
          grain, color, and hardware so the wood and the frame feel like they
          were made for each other. The result is eyewear with the warmth and
          character of a handmade object, built to be worn every day.
        </p>
      </section>

      {/* Signature pieces */}
      <section className="bg-cream-dark py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
                Signature pieces
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-walnut sm:text-4xl">
                A few favorites
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-semibold uppercase tracking-wide text-walnut transition-colors hover:text-oak"
            >
              View full gallery &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={processFeature.image.src}
              alt={processFeature.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
              How it&rsquo;s made
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-walnut sm:text-4xl">
              From rough blank to finished frame
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Choosing the wood, laying out an inlay, hand-setting every
              piece, shaping and finishing the temple, then fitting it to the
              frame &mdash; each pair moves through five hands-on stages
              before it&rsquo;s ready to wear.
            </p>
            <Link
              href="/process"
              className="mt-6 inline-block rounded-full bg-walnut px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-walnut-light"
            >
              See the full process
            </Link>
          </div>
        </div>
      </section>

      {/* Custom order CTA */}
      <section className="bg-walnut py-20 text-cream">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Have something in mind?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/80">
            I take custom orders for wood species, finish, inlay patterns,
            and frame colors. Tell me what you&rsquo;re picturing and
            I&rsquo;ll help bring it to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-oak px-8 py-3 text-sm font-semibold uppercase tracking-wide text-walnut transition-colors hover:bg-oak-light"
          >
            Start a custom order
          </Link>
        </div>
      </section>
    </>
  );
}

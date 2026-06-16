import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Timber & Trims`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const [primary, ...rest] = product.images;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/gallery"
        className="text-sm font-semibold uppercase tracking-wide text-walnut transition-colors hover:text-oak"
      >
        &larr; Back to gallery
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={primary.src}
              alt={primary.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {rest.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {rest.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 17vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
            {product.category === "wood-temples"
              ? "Wood Temples"
              : product.category === "signature-series"
                ? "Signature Series"
                : product.category === "full-wood-frame"
                  ? "Full Wood Frame"
                  : "Wood / Metal Hybrid"}
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-ink-muted">{product.tagline}</p>

          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {product.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-oak-light/40 pt-6 text-sm">
            <div>
              <dt className="font-semibold uppercase tracking-wide text-ink-muted">
                Tone
              </dt>
              <dd className="mt-1 capitalize text-walnut">{product.tone}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-ink-muted">
                Frame
              </dt>
              <dd className="mt-1 text-walnut">{product.frameColor}</dd>
            </div>
            {product.accents.length > 0 && (
              <div className="col-span-2">
                <dt className="font-semibold uppercase tracking-wide text-ink-muted">
                  Details
                </dt>
                <dd className="mt-1 text-walnut">
                  {product.accents.join(", ")}
                </dd>
              </div>
            )}
          </dl>

          <div className="mt-8 rounded-2xl bg-cream-dark p-6">
            <p className="font-serif text-lg font-semibold text-walnut">
              Like this one?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Each piece is made in small batches, so availability varies.
              Reach out and I can let you know what&rsquo;s possible &mdash;
              whether that&rsquo;s this exact pairing or a custom variation in
              your own wood and frame combination.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-walnut px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-walnut-light"
            >
              Ask about this piece
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

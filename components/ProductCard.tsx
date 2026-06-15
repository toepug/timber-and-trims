import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const cover = product.images[0];

  return (
    <Link
      href={`/gallery/${product.slug}`}
      className="group block overflow-hidden rounded-2xl bg-paper ring-1 ring-walnut/10 transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="font-serif text-lg font-semibold text-walnut">
          {product.name}
        </p>
        <p className="mt-1 text-sm text-ink-muted">{product.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-oak-light/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-walnut">
            {product.wood}
          </span>
          <span className="rounded-full bg-cream-dark px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink-muted">
            {product.frameColor}
          </span>
        </div>
      </div>
    </Link>
  );
}

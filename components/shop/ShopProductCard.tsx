import Image from "next/image";
import Link from "next/link";
import type { ShopProduct } from "@/lib/shop-types";
import { formatPrice } from "@/lib/format";

export default function ShopProductCard({
  product,
  inStock,
}: {
  product: ShopProduct;
  inStock: boolean;
}) {
  const cover = product.images[0];

  return (
    <Link
      href={`/shop/${product.slug}`}
      className={`group block overflow-hidden rounded-2xl ring-1 ring-walnut/10 transition-shadow ${
        inStock ? "hover:shadow-xl" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        {cover && (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover transition-transform duration-500 ${
              inStock ? "group-hover:scale-[1.05]" : "grayscale opacity-60"
            }`}
          />
        )}
        {!inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-walnut px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
            Sold
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-base font-semibold text-walnut">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-ink-muted">
          {inStock ? formatPrice(product.price) : "Sold"}
        </p>
      </div>
    </Link>
  );
}

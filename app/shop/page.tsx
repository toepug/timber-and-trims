import type { Metadata } from "next";
import { shopProducts } from "@/data/shop-products";
import { getSoldSlugs } from "@/lib/inventory";
import ShopGrid from "@/components/shop/ShopGrid";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop | Timber & Trims",
  description:
    "Purchase one-of-a-kind handmade wood eyewear from Timber & Trims. Each piece is unique -- once it's gone, it's gone.",
};

export default async function ShopPage() {
  const soldSlugs = await getSoldSlugs(shopProducts.map((p) => p.slug));

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
          Shop
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
          One-of-a-kind, ready to wear
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Every piece below is a single, finished pair &mdash; not a sample.
          Once it sells, it&rsquo;s gone for good.
        </p>
      </div>

      <ShopGrid products={shopProducts} soldSlugs={Array.from(soldSlugs)} />
    </div>
  );
}

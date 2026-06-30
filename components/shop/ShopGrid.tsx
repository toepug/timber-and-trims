import type { ShopProduct } from "@/lib/shop-types";
import ShopProductCard from "@/components/shop/ShopProductCard";

export default function ShopGrid({
  products,
  soldSlugs,
}: {
  products: ShopProduct[];
  soldSlugs: string[];
}) {
  if (products.length === 0) {
    return (
      <p className="mt-16 text-center text-ink-muted">
        New pieces are on the way &mdash; check back soon.
      </p>
    );
  }

  const sold = new Set(soldSlugs);

  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ShopProductCard
          key={product.slug}
          product={product}
          inStock={product.inStock && !sold.has(product.slug)}
        />
      ))}
    </div>
  );
}

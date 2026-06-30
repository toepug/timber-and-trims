import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getShopProductBySlug } from "@/data/shop-products";
import { isSold } from "@/lib/inventory";
import { formatPrice } from "@/lib/format";
import ProductImageSlider from "@/components/shop/ProductImageSlider";
import AddToCartButton from "@/components/shop/AddToCartButton";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getShopProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Timber & Trims Shop`,
    description: product.description,
  };
}

export default async function ShopProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getShopProductBySlug(slug);
  if (!product) notFound();

  const sold = !product.inStock || (await isSold(slug));
  const cover = product.images[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <ProductImageSlider images={product.images} />

        <div>
          <h1 className="font-serif text-3xl font-semibold text-walnut sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-oak">
            {sold ? "Sold" : formatPrice(product.price)}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {product.description}
          </p>

          <div className="mt-8">
            {sold ? (
              <span className="inline-block rounded-full bg-cream-dark px-8 py-3 text-sm font-semibold uppercase tracking-wide text-ink-muted">
                This piece has sold
              </span>
            ) : (
              <AddToCartButton
                slug={product.slug}
                name={product.name}
                price={product.price}
                image={cover?.src ?? ""}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

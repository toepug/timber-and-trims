import type { ShopProduct } from "@/lib/shop-types";

/**
 * Purchasable catalog for /shop, separate from the gallery's data/products.ts.
 * Add an entry here for each product after its photos land in
 * public/shop/[slug]/.
 */
export const shopProducts: ShopProduct[] = [];

export function getShopProductBySlug(slug: string): ShopProduct | undefined {
  return shopProducts.find((p) => p.slug === slug);
}

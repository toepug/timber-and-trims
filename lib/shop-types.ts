export interface ShopProductImage {
  src: string;
  alt: string;
}

export interface ShopProduct {
  /** URL-friendly unique identifier, used for /shop/[slug] and the image folder name */
  slug: string;
  name: string;
  description: string;
  /** Price in cents (USD), shipping included */
  price: number;
  /**
   * Baseline availability. The live availability shown to visitors also
   * checks Redis (see lib/inventory.ts) so a completed sale is reflected
   * immediately without redeploying.
   */
  inStock: boolean;
  images: ShopProductImage[];
}

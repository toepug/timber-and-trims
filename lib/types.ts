export type ProductCategory = "eyeglasses" | "sunglasses";

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Product {
  /** URL-friendly unique identifier, used for /gallery/[slug] product pages */
  slug: string;
  /** Display name */
  name: string;
  /** Short one-line descriptor shown on cards */
  tagline: string;
  /** Longer description for product detail views */
  description: string;
  category: ProductCategory;
  /** Wood species/finish used for the temples */
  wood: string;
  /** Color/finish of the acetate (or full wood) frame front */
  frameColor: string;
  /** Notable decorative details, e.g. medallions, inlay, studs */
  accents: string[];
  /** Free-form keywords for filtering/search */
  tags: string[];
  images: ProductImage[];
  /** Highlight on the homepage */
  featured?: boolean;
  /**
   * Future e-commerce fields. Left undefined for made-to-order/showcase
   * items; populate once pricing & inventory are ready.
   */
  price?: number;
  available?: boolean;
}

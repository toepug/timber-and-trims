import manifest from "@/data/image-manifest.json";
import type { ProductImage } from "@/lib/types";

type Manifest = Record<string, { width: number; height: number }>;

const sizes = manifest as Manifest;

/**
 * Look up the processed dimensions for an image under /public/images and
 * pair them with the given alt text. Throws at build time if the path is
 * missing from the manifest, so typos surface immediately.
 */
export function img(src: string, alt: string): ProductImage {
  const dims = sizes[src];
  if (!dims) {
    throw new Error(`Missing image-manifest entry for "${src}"`);
  }
  return { src, alt, width: dims.width, height: dims.height };
}

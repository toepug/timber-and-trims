import type { Metadata } from "next";
import { products } from "@/data/products";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Timber & Trims",
  description:
    "Browse handmade wood-temple eyeglasses and full-wood sunglasses in walnut, oak, maple, beech, mahogany, and rosewood -- each with its own inlay and frame pairing.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
          Gallery
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
          The full collection
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Every piece is shaped from a different blank, so no two are exactly
          alike. Filter by frame type or wood species to see how each one
          takes on color, grain, and inlay.
        </p>
      </div>

      <div className="mt-10">
        <GalleryGrid products={products} />
      </div>
    </div>
  );
}

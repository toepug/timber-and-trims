import type { Metadata } from "next";
import { products } from "@/data/products";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Timber & Trims",
  description:
    "Browse handmade wood eyewear from Timber & Trims -- Wood Temples, Signature Series with inlay and medallion details, and Full Wood Frames. Each pair is shaped and finished by hand.",
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
          alike. Filter by style or wood tone to find your pairing.
        </p>
      </div>

      <div className="mt-10">
        <GalleryGrid products={products} />
      </div>
    </div>
  );
}

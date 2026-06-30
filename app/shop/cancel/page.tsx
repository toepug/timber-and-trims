import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Canceled | Timber & Trims",
};

export default function ShopCancelPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
        Checkout canceled
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut">
        No charge was made
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-muted">
        Your cart is still saved if you&rsquo;d like to pick up where you left
        off.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-full bg-walnut px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-walnut-light"
      >
        Back to Shop
      </Link>
    </div>
  );
}

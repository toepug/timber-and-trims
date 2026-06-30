import type { Metadata } from "next";
import Link from "next/link";
import ClearCartOnLoad from "@/components/shop/ClearCartOnLoad";

export const metadata: Metadata = {
  title: "Order Confirmed | Timber & Trims",
};

export default function ShopSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <ClearCartOnLoad />
      <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
        Thank you
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut">
        Your order is confirmed
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-muted">
        You&rsquo;ll receive a confirmation email shortly. Since each piece is
        one-of-a-kind, it&rsquo;s now reserved just for you and will ship
        soon.
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

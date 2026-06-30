"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/shop/CartProvider";
import { formatPrice } from "@/lib/format";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, total } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slugs: items.map((i) => i.slug) }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Checkout failed");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <div className="relative flex h-full w-full max-w-sm flex-col bg-cream p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl font-semibold text-walnut">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="text-ink-muted hover:text-walnut"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <p className="mt-8 text-ink-muted">Your cart is empty.</p>
        ) : (
          <div className="mt-6 flex-1 space-y-4 overflow-y-auto">
            {items.map((item) => (
              <div key={item.slug} className="flex gap-3">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-paper">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-walnut">
                    {item.name}
                  </p>
                  <p className="text-sm text-ink-muted">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.slug)}
                  aria-label={`Remove ${item.name}`}
                  className="text-xs text-mahogany hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-6 border-t border-oak-light/40 pt-4">
            <div className="flex items-center justify-between text-base font-semibold text-walnut">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            {error && <p className="mt-2 text-sm text-mahogany">{error}</p>}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={loading}
              className="mt-4 w-full rounded-full bg-walnut px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-walnut-light disabled:opacity-60"
            >
              {loading ? "Redirecting…" : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

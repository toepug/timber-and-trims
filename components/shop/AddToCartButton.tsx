"use client";

import { useCart } from "@/components/shop/CartProvider";

export default function AddToCartButton({
  slug,
  name,
  price,
  image,
}: {
  slug: string;
  name: string;
  price: number;
  image: string;
}) {
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(slug);

  return (
    <button
      type="button"
      onClick={() => addItem({ slug, name, price, image })}
      disabled={inCart}
      className={`rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
        inCart
          ? "cursor-not-allowed bg-oak-light text-walnut/60"
          : "bg-walnut text-cream hover:bg-walnut-light"
      }`}
    >
      {inCart ? "In Cart" : "Add to Cart"}
    </button>
  );
}

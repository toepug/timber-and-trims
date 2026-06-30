"use client";

import { useState } from "react";
import { useCart } from "@/components/shop/CartProvider";
import CartDrawer from "@/components/shop/CartDrawer";

export default function CartBar() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 border-b border-oak-light/40 bg-cream-dark/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-2 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-walnut transition-colors hover:bg-oak-light/40"
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.98-4.804 2.523-7.43.139-.673-.353-1.32-1.041-1.32H5.106M7.5 14.25L5.106 5.272M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Cart
            {items.length > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-walnut text-xs font-semibold text-cream">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </div>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}

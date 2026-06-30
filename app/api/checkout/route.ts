import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getShopProductBySlug } from "@/data/shop-products";
import { getSoldSlugs } from "@/lib/inventory";
import type { ShopProduct } from "@/lib/shop-types";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const slugs: string[] = Array.isArray(body?.slugs) ? body.slugs : [];

  if (slugs.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const products = slugs
    .map((slug) => getShopProductBySlug(slug))
    .filter((p): p is ShopProduct => p !== undefined);

  if (products.length !== slugs.length) {
    return NextResponse.json(
      { error: "One or more items no longer exist" },
      { status: 400 }
    );
  }

  const sold = await getSoldSlugs(slugs);
  const unavailable = products.filter((p) => !p.inStock || sold.has(p.slug));
  if (unavailable.length > 0) {
    return NextResponse.json(
      {
        error: "One or more items already sold",
        slugs: unavailable.map((p) => p.slug),
      },
      { status: 409 }
    );
  }

  const origin = request.headers.get("origin") ?? new URL(request.url).origin;
  const useImages = origin.startsWith("https://");

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: products.map((product) => ({
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: product.price,
        product_data: {
          name: product.name,
          ...(useImages && product.images[0]
            ? { images: [`${origin}${product.images[0].src}`] }
            : {}),
        },
      },
    })),
    metadata: {
      slugs: products.map((p) => p.slug).join(","),
    },
    success_url: `${origin}/shop/success`,
    cancel_url: `${origin}/shop/cancel`,
  });

  return NextResponse.json({ url: session.url });
}

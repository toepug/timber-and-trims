import { CartProvider } from "@/components/shop/CartProvider";
import CartBar from "@/components/shop/CartBar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <CartBar />
      {children}
    </CartProvider>
  );
}

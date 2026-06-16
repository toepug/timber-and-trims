import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timber & Trims | Handmade Wood Eyewear",
  description:
    "Handcrafted wooden eyeglass temples paired with upcycled material frame fronts. One-of-a-kind, made-to-order eyewear from Timber & Trims.",
  icons: {
    icon: [
      { url: "/favicon16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/logo-square.jpg", type: "image/jpeg" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

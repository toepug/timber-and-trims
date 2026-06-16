import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/gallery", label: "Gallery" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Custom Orders" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-oak-light/40 bg-walnut text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo-square.jpg"
              alt=""
              width={581}
              height={581}
              className="h-8 w-8 rounded-md"
            />
            <Image
              src="/logo-text-only.png"
              alt="Timber and Trims"
              width={769}
              height={239}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/75">
            Hand-carved wooden eyeglass temples, fitted to upcycled material
            frame fronts and finished one pair at a time.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-oak-light">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-oak-light">
            Custom Orders
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
            Have a wood, frame color, or inlay in mind? Reach out through the
            contact page and I&apos;ll talk through what&apos;s possible.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-xs text-cream/60">
            &copy; {year} Timber &amp; Trims. All pieces handmade to order.
          </p>
          <div className="flex gap-4 text-xs text-cream/60">
            <Link
              href="/privacy"
              className="transition-colors hover:text-cream/90"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-cream/90"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

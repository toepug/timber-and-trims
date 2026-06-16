import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Timber & Trims",
  description: "Terms of service for the Timber & Trims website and custom orders.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
        Legal
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-ink-muted">
        Last updated: June 16, 2026
      </p>

      <p className="mt-8 text-lg leading-relaxed text-ink-muted">
        These terms apply to your use of the Timber &amp; Trims website and
        any custom order you place with me.
      </p>

      <Section title="The Products">
        <p>
          Every piece of eyewear from Timber &amp; Trims is made by hand, one
          pair at a time. Wood is a natural material &mdash; grain pattern,
          tone, and texture vary from piece to piece. Photos on this site show
          real pieces I&rsquo;ve made, but your pair will be unique and may
          differ in those details. That&rsquo;s not a defect; it&rsquo;s the
          nature of the material.
        </p>
      </Section>

      <Section title="Custom Orders">
        <p>Every piece is made to order. The process works like this:</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-lg leading-relaxed text-ink-muted">
          <li>
            You submit an inquiry through the{" "}
            <Link href="/contact" className="text-walnut underline underline-offset-2 hover:text-oak">
              contact page
            </Link>
            , describing the wood, frame, inlay, or any other details you have
            in mind.
          </li>
          <li>
            I confirm what&rsquo;s possible, provide pricing, and we agree on
            the specifics in writing.
          </li>
          <li>I build the piece.</li>
          <li>You pay before shipment.</li>
        </ol>
        <p className="mt-4">
          A custom order is not confirmed until we&rsquo;ve both agreed on the
          details. I reserve the right to decline any order.
        </p>
      </Section>

      <Section title="Pricing and Payment">
        <p>
          Prices are quoted on a per-order basis, depending on the wood species,
          inlay complexity, and frame front chosen. All prices are in Canadian
          dollars unless otherwise noted. Payment is due in full before the
          piece ships.
        </p>
      </Section>

      <Section title="Returns and Exchanges">
        <p>
          Because every piece is custom-made to order, I don&rsquo;t accept
          returns or exchanges except in these situations:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink-muted">
          <li>The piece arrives damaged in transit, or</li>
          <li>It differs materially from what we agreed on in writing.</li>
        </ul>
        <p className="mt-4">
          If something goes wrong, reach out within 7 days of receiving your
          order and I&rsquo;ll make it right.
        </p>
      </Section>

      <Section title="Shipping">
        <p>
          I ship to customers in Canada and the United States. Risk of loss
          passes to you once the package is handed to the carrier. A tracking
          number will be provided for every shipment. I&rsquo;m not responsible
          for delays caused by the carrier or customs.
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          All photos, designs, and written content on this site are mine. You
          may share links or images for personal, non-commercial use (social
          media, personal reference) with credit to Timber &amp; Trims. You
          may not reproduce, sell, or use them commercially without my written
          permission.
        </p>
      </Section>

      <Section title="Disclaimer">
        <p>
          This site and its content are provided &ldquo;as is.&rdquo; I make
          no warranties, express or implied, about the accuracy of the
          information on this site. Product descriptions and photos are as
          accurate as I can make them, but handmade items may vary.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          Timber &amp; Trims is a one-person workshop. My total liability for
          any order is limited to the amount paid for that specific piece. I am
          not liable for indirect, incidental, or consequential damages of any
          kind.
        </p>
      </Section>

      <Section title="Changes to These Terms">
        <p>
          I may update these terms from time to time. The date at the top of
          this page reflects the most recent revision. Continued use of the site
          or placing an order after an update means you accept the revised terms.
        </p>
      </Section>

      <Section title="Questions">
        <p>
          Questions about these terms can be sent through the{" "}
          <Link href="/contact" className="text-walnut underline underline-offset-2 hover:text-oak">
            contact page
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-xl font-semibold text-walnut">{title}</h2>
      <div className="mt-3 text-lg leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}

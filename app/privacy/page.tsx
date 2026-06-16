import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Timber & Trims",
  description: "Privacy policy for the Timber & Trims website and contact form.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
        Legal
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-ink-muted">
        Last updated: June 16, 2026
      </p>

      <p className="mt-8 text-lg leading-relaxed text-ink-muted">
        Timber &amp; Trims is a one-person workshop. This policy explains what
        information I collect when you visit this site or reach out through the
        contact form, and what I do with it.
      </p>

      <Section title="Information I Collect">
        <p>
          <strong className="font-semibold text-ink">Contact form.</strong>{" "}
          When you submit a message through the{" "}
          <Link href="/contact" className="text-walnut underline underline-offset-2 hover:text-oak">
            contact page
          </Link>
          , I collect your name, email address, and the message you write.
          No account is created and no password is stored.
        </p>
        <p className="mt-4">
          <strong className="font-semibold text-ink">Server logs.</strong>{" "}
          This site is hosted on Vercel. Like all web hosts, Vercel automatically
          logs standard request data (IP address, browser type, pages visited,
          time of visit). I don&rsquo;t separately store or process these
          logs &mdash; they are governed by{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-walnut underline underline-offset-2 hover:text-oak"
          >
            Vercel&rsquo;s privacy policy
          </a>
          .
        </p>
      </Section>

      <Section title="How I Use Your Information">
        <p>
          I use your name and email only to respond to your inquiry or custom
          order request. I don&rsquo;t add you to any mailing list, send
          marketing emails, or share your contact information with anyone else.
        </p>
      </Section>

      <Section title="What I Don't Do">
        <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink-muted">
          <li>I don&rsquo;t sell or rent your information.</li>
          <li>I don&rsquo;t share your information with advertisers or data brokers.</li>
          <li>
            I don&rsquo;t use third-party analytics (no Google Analytics, no
            tracking pixels, no ad retargeting).
          </li>
        </ul>
      </Section>

      <Section title="Fonts and Third-Party Resources">
        <p>
          The fonts on this site (Fraunces and Inter) are downloaded and served
          from this server at build time. Your browser does not make requests
          to Google Fonts or any other external font service when you visit.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          I keep contact form messages for as long as needed to complete the
          conversation or order. If you&rsquo;d like your information removed,
          reach out and I&rsquo;ll take care of it.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>You can ask me to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink-muted">
          <li>Confirm what information I hold about you</li>
          <li>Correct or update it</li>
          <li>Delete it</li>
        </ul>
        <p className="mt-4">
          Just reach out through the{" "}
          <Link href="/contact" className="text-walnut underline underline-offset-2 hover:text-oak">
            contact page
          </Link>{" "}
          and I&rsquo;ll respond promptly.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          If I make meaningful changes to this policy, I&rsquo;ll update the
          date at the top of this page. Your continued use of the site after
          any update means you accept the revised policy.
        </p>
      </Section>

      <Section title="Questions">
        <p>
          Privacy questions can be sent through the{" "}
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

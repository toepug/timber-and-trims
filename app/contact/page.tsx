import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Timber & Trims",
  description:
    "Get in touch about a custom order, repair, or general question -- tell me about the wood, frame color, and details you have in mind.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-serif text-sm uppercase tracking-[0.25em] text-oak">
        Contact
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
        Custom orders &amp; inquiries
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-muted">
        Whether you&rsquo;re after one of the pieces in the gallery, a custom
        wood-and-frame pairing of your own, or just have a question about
        materials and fit, send me a note. I read every message and reply
        myself.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}

"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { inquiryTypes } from "@/lib/contact";

const initialState: ContactFormState = { status: "idle" };

const fieldClasses =
  "mt-1 block w-full rounded-lg border border-oak-light/60 bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted/60 focus:border-walnut focus:outline-none focus:ring-2 focus:ring-walnut/20";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-cream-dark p-8 text-center">
        <p className="font-serif text-xl font-semibold text-walnut">
          Thanks for reaching out!
        </p>
        <p className="mt-2 text-ink-muted">
          I&rsquo;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold uppercase tracking-wide text-ink-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold uppercase tracking-wide text-ink-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="inquiryType"
          className="text-sm font-semibold uppercase tracking-wide text-ink-muted"
        >
          What&rsquo;s this about?
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          defaultValue=""
          className={fieldClasses}
        >
          <option value="" disabled>
            Select one
          </option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-semibold uppercase tracking-wide text-ink-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about the wood, frame color, inlay, or anything else you have in mind."
          className={fieldClasses}
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm font-medium text-mahogany">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-walnut px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-walnut-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

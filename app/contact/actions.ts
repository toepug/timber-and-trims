"use server";

import { inquiryTypes } from "@/lib/contact";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const inquiryType = formData.get("inquiryType")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and message.",
    };
  }

  if (!inquiryTypes.includes(inquiryType as (typeof inquiryTypes)[number])) {
    return {
      status: "error",
      message: "Please choose what your message is about.",
    };
  }

  // NOTE: no email/notification provider is wired up yet. Before launch,
  // send this through a service such as Resend or Formspree so submissions
  // actually reach an inbox.
  console.log("New contact form submission:", {
    name,
    email,
    inquiryType,
    message,
  });

  return { status: "success" };
}

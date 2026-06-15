export const inquiryTypes = [
  "General question",
  "Custom order",
  "Repair or adjustment",
  "Wholesale / press",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

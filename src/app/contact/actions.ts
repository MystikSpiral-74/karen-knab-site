"use server";

import { headers } from "next/headers";
import { contact } from "@/content/copy";
import type { ContactState, ContactValues } from "@/lib/contactTypes";
import { allow } from "@/lib/rateLimit";
import { sendInquiry } from "@/lib/inquiry";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL = /[\u0000-\u001f\u007f]/g;

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const str = (k: string) => (typeof formData.get(k) === "string" ? (formData.get(k) as string) : "");

  // Honeypot: real visitors never see this field. Pretend it worked.
  if (str("hp_company").trim() !== "") return { status: "success" };

  const values: ContactValues = {
    name: str("name").replace(CONTROL, " ").trim().slice(0, 100),
    email: str("email").trim().slice(0, 254),
    reason: str("reason").replace(/\r\n/g, "\n").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, 1000),
  };

  const started = Number(str("t"));
  // Compared as a plain number sent by the page; a missing or too-recent value reads as a bot.
  if (!started || Date.now() - started < 2000) {
    return { status: "error", message: contact.errorTooFast, values };
  }

  const fieldErrors: NonNullable<Extract<ContactState, { status: "error" }>["fieldErrors"]> = {};
  if (values.name.length < 1) fieldErrors.name = contact.fields.name.error;
  if (!EMAIL_RE.test(values.email)) fieldErrors.email = contact.fields.email.error;
  if (values.reason.length < 10) fieldErrors.reason = contact.fields.reason.error;
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors, values };

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (!allow(`ip:${ip}`, 3, 10 * 60_000) || !allow("global", 20, 60 * 60_000)) {
    return { status: "error", message: contact.errorRateLimit, values };
  }

  try {
    await sendInquiry(values);
  } catch {
    return { status: "error", message: contact.errorGeneric, values };
  }
  return { status: "success" };
}

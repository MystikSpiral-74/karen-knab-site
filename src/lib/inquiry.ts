import type { ContactValues } from "./contactTypes";

// Sends the inquiry to a Google Apps Script web app (see docs/contact-form-apps-script.gs),
// which emails Karen from her own Google account. Swap this one function to change vendors.
export async function sendInquiry(v: ContactValues): Promise<void> {
  const url = process.env.CONTACT_WEBHOOK_URL;
  const secret = process.env.CONTACT_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("Contact form is not configured (CONTACT_WEBHOOK_URL / CONTACT_WEBHOOK_SECRET).");
    throw new Error("not configured");
  }
  const u = new URL(url);
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(u.hostname);
  if (u.protocol !== "https:" && !(local && u.protocol === "http:")) {
    console.error("CONTACT_WEBHOOK_URL must be https.");
    throw new Error("bad url");
  }
  const timeout = Number(process.env.CONTACT_WEBHOOK_TIMEOUT_MS) || 12000;
  // Apps Script answers a POST with a redirect to the result, so follow it.
  const res = await fetch(u, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ secret, ...v }),
    redirect: "follow",
    cache: "no-store",
    signal: AbortSignal.timeout(timeout),
  });
  if (!res.ok) throw new Error(`webhook status ${res.status}`);
  let data: unknown;
  try {
    data = await res.json();
  } catch {
    throw new Error("webhook returned non-JSON");
  }
  if (!data || (data as { ok?: unknown }).ok !== true) throw new Error("webhook rejected");
}

"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContact } from "@/app/contact/actions";
import type { ContactState } from "@/lib/contactTypes";
import { contact } from "@/content/copy";
import { ctaBase, ctaStyles } from "./ctaStyles";

const field =
  "mt-2 block w-full border border-taupe/60 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 focus:border-petrol aria-[invalid=true]:border-error";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });
  const tRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);

  // React clears the form after each submit, so stamp the load time again each time.
  useEffect(() => {
    if (tRef.current) tRef.current.value = String(Date.now());
    if (state.status === "success") doneRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div role="status" className="border border-taupe/50 bg-paper p-8">
        <h2 ref={doneRef} tabIndex={-1} className="font-serif text-3xl text-petrol outline-none">
          {contact.successHeading}
        </h2>
        <p className="mt-4 leading-relaxed text-ink/80">{contact.successBody}</p>
      </div>
    );
  }

  const err = state.status === "error" ? state : null;
  const v = err?.values ?? { name: "", email: "", reason: "" };
  const fe = err?.fieldErrors ?? {};

  return (
    <form action={action} className="space-y-6 border border-taupe/50 bg-linen/60 p-6 sm:p-8" noValidate>
      {err?.message && (
        <p role="alert" className="border border-error/50 bg-paper px-4 py-3 text-error">
          {err.message}
        </p>
      )}

      <div>
        <label htmlFor="name" className="font-serif text-sm uppercase tracking-[0.16em] text-petrol">
          {contact.fields.name.label}
        </label>
        <input
          id="name" name="name" type="text" required maxLength={100} autoComplete="name"
          defaultValue={v.name} className={field}
          aria-invalid={fe.name ? true : undefined} aria-describedby={fe.name ? "name-err" : undefined}
        />
        {fe.name && <p id="name-err" role="alert" className="mt-2 text-sm text-error">{fe.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="font-serif text-sm uppercase tracking-[0.16em] text-petrol">
          {contact.fields.email.label}
        </label>
        <input
          id="email" name="email" type="email" required maxLength={254} autoComplete="email"
          defaultValue={v.email} className={field}
          aria-invalid={fe.email ? true : undefined} aria-describedby={fe.email ? "email-err" : undefined}
        />
        {fe.email && <p id="email-err" role="alert" className="mt-2 text-sm text-error">{fe.email}</p>}
      </div>

      <div>
        <label htmlFor="reason" className="font-serif text-sm uppercase tracking-[0.16em] text-petrol">
          {contact.fields.reason.label}
        </label>
        <textarea
          id="reason" name="reason" required rows={5} maxLength={1000}
          defaultValue={v.reason} className={field}
          aria-invalid={fe.reason ? true : undefined}
          aria-describedby={fe.reason ? "reason-hint reason-err" : "reason-hint"}
        />
        <p id="reason-hint" className="mt-2 text-sm text-ink/60">{contact.fields.reason.hint}</p>
        {fe.reason && <p id="reason-err" role="alert" className="mt-1 text-sm text-error">{fe.reason}</p>}
      </div>

      {/* Spam traps: hidden from people, filled in by simple bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="hp_company" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input ref={tRef} type="hidden" name="t" defaultValue="" />

      <button
        type="submit" disabled={pending}
        className={`${ctaBase} ${ctaStyles.solid} w-full cursor-pointer disabled:cursor-wait disabled:opacity-60 sm:w-auto`}
      >
        {pending ? contact.sending : contact.submit}
        <span aria-hidden="true">&rarr;</span>
      </button>
    </form>
  );
}

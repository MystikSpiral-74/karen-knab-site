# Karen Knab, LMFT: single-page site (draft v0.1)

Next.js (App Router, TypeScript, Tailwind) deployed on Vercel. Fully static.

## Source material
- Alignment coaching page (structure and voice donor, coming down): https://www.workwithalignment.com/coaching
- Karen's bio and About drafts (PDF), brand board (PDF), and the "Draft Messaging" Google Doc live in the Claude project "Karen's New Website".

## Run locally
```
npm install
npm run dev      # http://localhost:3000
npm run build    # static build check
```

## Review aids
- Headline options: `/?h=1`, `/?h=2`, `/?h=3`. With no parameter the page shows option 3 (`defaultHeroIndex` in `copy.ts`). The canonical tag points to the root, so variants are not separate pages. There is no analytics, so the variants are for sharing preferences, not measuring.
  1. You're the one everyone relies on. Who do you rely on?
  2. Successful on paper. Overwhelmed in private.
  3. You can handle everything. That's part of the problem.
- All copy is in `src/content/copy.ts`. Layout is in `src/app/page.tsx` and `src/components/`.
- Brand colors are tokens in `src/app/globals.css`. Warm Taupe fails text contrast on light backgrounds, so it is used only for rules, numerals and accents.

## Before launch
1. **Calendly:** the default in `copy.ts` is `https://calendly.com/karenknab/introductory-call` (free, 20 minutes). `NEXT_PUBLIC_CALENDLY_URL` in Vercel overrides it if ever needed.
2. **Logo:** the KK monogram and lockups are rebuilt as SVG (`public/brand/`, `src/components/`). Karen's original vector, if she has it, is better than the rebuild.
3. **Photos:** hero and About are real photos (see Photos below).
4. **Email:** `karen@karenknab.com` comes from the brand board mockup. Confirm it exists.
5. **Fonts:** Cormorant Garamond is a stand-in for the brand board serif. Confirm or identify the real typeface.
6. **Favicon and share image:** done (`src/app/icon.*`, `apple-icon.png`, `opengraph-image.jpg`, `twitter-image.jpg`).
7. **Go live:** set `NEXT_PUBLIC_ALLOW_INDEXING=true`, attach karenknab.com, add a privacy policy page.

## Compliance and content checks (Karen)
- Virginia Board of Counseling advertising rules (titles, claims). New York equivalent if applicable.
- License numbers are in the footer, each linking to the Virginia DHP and NYSED verification tools. Still confirm what each board requires.
- The cities line in About facts is work history, not service area. Keep saying clients must be located in Virginia or New York at the time of the session (FAQ and footer licensure).
- The footer links to Karen's LinkedIn. Make sure her profile presents her as a therapist, not a coach.
- DC: add only once she is licensed there. Site says Virginia and New York only; do not use "nationwide."
- No testimonials included on purpose (board rules vary, and the old one was about coaching).
- Minnesota State Fair is not named in the draft copy. Add to About only if she wants it.
- The introductory call is stated as free, 20 minutes. Confirm it is free in Calendly.
- "How I work" section (family systems, emotional intelligence, trauma-informed practice) confirmed by Brian as core to Karen. Karen to review the East Coast candor / Midwest tact line and add any specific training or modality.
- Confirm the "private-pay keeps care out of insurance" and "confidential within legal limits" FAQ wording.
- Privacy policy page still needed. No analytics or ad pixels are installed.

## Contact form and booking mode

By default every "request a call" button goes to Karen's Calendly page (new tab). A contact form is built but dormant: `/contact` and `/privacy` exist, are hidden from search engines (noindex) and are not linked anywhere.

- To switch the buttons to the form, set `NEXT_PUBLIC_BOOKING_MODE=form` in Vercel and redeploy. That also restores the footer Contact and Privacy links and the form-specific wording.
- Transport: a Vercel Server Action posts to a Google Apps Script web app in Karen's Google account, which emails her. Nothing is stored. Script and steps: `docs/contact-form-apps-script.gs` and `docs/contact-form-setup.md`.
- Vercel env vars for the form: `CONTACT_WEBHOOK_URL` and `CONTACT_WEBHOOK_SECRET` (matches the script's `SHARED_SECRET`). Mark both Sensitive. Without them the form shows an error with Karen's email.
- Spam defenses: honeypot field, minimum time on page, validation, in-memory rate limits (per IP and global). They reset when the server restarts.
- Swapping email vendors later (for example Resend) only means changing `src/lib/inquiry.ts`.
- If the form is turned back on, Karen should review `/privacy` (state boards, HIPAA status) and confirm the "two business days" promise and how long she keeps inquiry emails. Copy lives in `src/content/copy.ts` (`contact`, `privacy`, `replyWindow`).

## Deploy
Push to GitHub (Vercel deploys automatically), then attach karenknab.com. `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CALENDLY_URL` are optional overrides.

## Photos
Cropped 4:5 from the 2023 bench shoot (originals 2576px wide) into `public/images/`:
- `karen-hero.jpg`: hands clasped, eye contact (hero)
- `karen-about.jpg`: candid, looking off to the side (About)
- `karen-rail.jpg`: stair-railing portrait, cropped and ready but NOT placed. The saturated orange/yellow background clashes with the petrol/forest/taupe palette. Try it in About (swap the `src` in `page.tsx`) and let Karen react.
- Not used: workshop candid (shows other attendees who have not consented, and low quality) and the 400px black and white headshot (too small for web hero; fine for directory profiles).
- To change a crop, edit the source in `page.tsx` or re-export a 4:5 JPEG at 1200x1500 or larger.

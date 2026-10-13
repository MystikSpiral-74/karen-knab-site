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
- Headline options: `/?h=1`, `/?h=2`, `/?h=3`
  1. You're the one everyone relies on. Who do you rely on?
  2. Successful on paper. Overwhelmed in private.
  3. You can handle everything. That's part of the problem.
- All copy is in `src/content/copy.ts`. Layout is in `src/app/page.tsx` and `src/components/`.
- Brand colors are tokens in `src/app/globals.css`. Warm Taupe fails text contrast on light backgrounds, so it is used only for rules, numerals and accents.

## Placeholders to replace before launch
1. **Calendly link:** set `NEXT_PUBLIC_CALENDLY_URL` in Vercel (fallback is a dummy URL in `copy.ts`).
2. **Logo:** `src/components/Logo.tsx` is a text stand-in. Need the KK monogram and lockup as SVG.
3. **Photos:** hero and About are real photos (see Photos below).
4. **Email:** `karen@karenknab.com` comes from the brand board mockup. Confirm it exists.
5. **Fonts:** Cormorant Garamond is a stand-in for the brand board serif. Confirm or identify the real typeface.
6. **Favicon and Open Graph image:** not yet made.

## Compliance and content checks (Karen)
- Virginia Board of Counseling advertising rules (titles, claims). New York equivalent if applicable.
- Add license numbers to the footer if required.
- DC: add only once she is licensed there. Site says Virginia and New York only; do not use "nationwide."
- No testimonials included on purpose (board rules vary, and the old one was about coaching).
- Minnesota State Fair is not named in the draft copy. Add to About only if she wants it.
- Consultation is stated as free, 45 minutes. Confirm.
- "How I work" section (family systems, emotional intelligence, trauma-informed practice) confirmed by Brian as core to Karen. Karen to review the East Coast candor / Midwest tact line and add any specific training or modality.
- Confirm the "private-pay keeps care out of insurance" and "confidential within legal limits" FAQ wording.
- Privacy policy page still needed. No analytics or ad pixels are installed.

## Deploy
Push to GitHub, import in Vercel, add `NEXT_PUBLIC_CALENDLY_URL` and `NEXT_PUBLIC_SITE_URL`, then attach karenknab.com.

## Photos
Cropped 4:5 from the 2023 bench shoot (originals 2576px wide) into `public/images/`:
- `karen-hero.jpg`: hands clasped, eye contact (hero)
- `karen-about.jpg`: candid, looking off to the side (About)
- `karen-rail.jpg`: stair-railing portrait, cropped and ready but NOT placed. The saturated orange/yellow background clashes with the petrol/forest/taupe palette. Try it in About (swap the `src` in `page.tsx`) and let Karen react.
- Not used: workshop candid (shows other attendees who have not consented, and low quality) and the 400px black and white headshot (too small for web hero; fine for directory profiles).
- To change a crop, edit the source in `page.tsx` or re-export a 4:5 JPEG at 1200x1500 or larger.

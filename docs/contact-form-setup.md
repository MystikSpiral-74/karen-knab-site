# Contact form setup

The site's server posts each inquiry to a small Google Apps Script in Karen's Google account, which emails her. Nothing is stored.

## Karen (about 5 minutes)
1. Signed in as the Google account that receives karen@karenknab.com mail, go to script.google.com and create a new project.
2. Paste in `contact-form-apps-script.gs`. Pick `testSend` in the function menu and Run. Approve the permissions. A test email should arrive. If it does not, tell Brian (fallback: Resend).
3. Project Settings (gear) > Script Properties > add `SHARED_SECRET` with a long random value. Send it to Brian privately.
4. Deploy > New deployment > type Web app. Execute as: Me. Who has access: Anyone. Deploy and copy the Web app URL (ends in /exec).
5. Optional: in Gmail, add a filter on subject "Website inquiry from" to label or star these.

## Brian
1. In Vercel set `CONTACT_WEBHOOK_URL` (the /exec URL) and `CONTACT_WEBHOOK_SECRET` (same as SHARED_SECRET), then redeploy.
2. Submit a live test on /contact and confirm it reaches Karen.

## Turning the contact form on (and back off)
The site defaults to Calendly: every "request a call" button opens Karen's Calendly page. The contact form exists but is dormant: in Calendly mode `/contact` and `/privacy` return a not-found page and the form handler refuses to send anything.

To switch the buttons to the form:
1. Make sure Karen's script is deployed and `CONTACT_WEBHOOK_URL` and `CONTACT_WEBHOOK_SECRET` in Vercel point at it (not a practice deployment). Do one live test first.
2. In Vercel, add `NEXT_PUBLIC_BOOKING_MODE` with the value `form` (lowercase, exactly).
3. Redeploy. This value is built into the site, so changing it does nothing until a new deployment. In Vercel go to Deployments, open the latest one's menu, choose Redeploy, and turn off "use existing build cache".
4. Check the buttons go to `/contact`, the footer shows Contact and Privacy links, and submit one test message.

To go back to Calendly: delete the variable (or set it to anything other than `form`) and redeploy. Any other value, a blank or a typo falls back to Calendly on purpose.

Before turning the form on for visitors, Karen should review `/privacy`.

## Review before launch
Karen should review /privacy for her state boards and HIPAA status, and confirm the "two business days" promise and how long she keeps inquiry emails.

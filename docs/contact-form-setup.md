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

## Switching back to Calendly
Set `NEXT_PUBLIC_BOOKING_MODE=calendly` in Vercel and redeploy. Remove it to return to the form.

## Review before launch
Karen should review /privacy for her state boards and HIPAA status, and confirm the "two business days" promise and how long she keeps inquiry emails.

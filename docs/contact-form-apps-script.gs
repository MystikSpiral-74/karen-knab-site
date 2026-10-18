/**
 * Contact form relay for karenknab.com.
 * Lives in KAREN'S Google account. Emails her each inquiry. Stores nothing and logs no message contents.
 *
 * Setup: see docs/contact-form-setup.md
 * Script Properties required: SHARED_SECRET (same value as CONTACT_WEBHOOK_SECRET in Vercel)
 * Optional: NOTIFY_TO (defaults to the Google account that owns this script)
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var props = PropertiesService.getScriptProperties();
    var secret = props.getProperty("SHARED_SECRET");
    if (!secret || data.secret !== secret) return out_({ ok: false });

    var name = clean_(data.name, 100);
    var email = clean_(data.email, 254);
    var reason = String(data.reason || "").slice(0, 1000);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || reason.length < 10) return out_({ ok: false });

    var to = props.getProperty("NOTIFY_TO") || Session.getEffectiveUser().getEmail();
    MailApp.sendEmail({
      to: to,
      replyTo: email,
      name: "Karen Knab website",
      subject: "Website inquiry from " + name,
      body:
        "New introductory call request from karenknab.com\n\n" +
        "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + reason +
        "\n\n(Reply to this email to answer them directly.)",
    });
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false });
  }
}

function clean_(v, max) {
  return String(v || "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor to confirm this account can send mail (you should receive it). */
function testSend() {
  MailApp.sendEmail(Session.getEffectiveUser().getEmail(), "Test from website form", "If you got this, sending works.");
}

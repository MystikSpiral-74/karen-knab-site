// All page copy lives here so Karen's edits never touch layout code.
// Style rule: no em-dashes anywhere in site copy.

// Env vars set to an empty or malformed value must not crash the build, so
// anything that is not a valid http(s) URL falls back to the default.
function urlFromEnv(value: string | undefined, fallback: string): string {
  const v = value?.trim();
  if (!v) return fallback;
  try {
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:" ? v : fallback;
  } catch {
    return fallback;
  }
}

// How the "request a call" buttons work.
//   "calendly" goes straight to Karen's Calendly page (the default).
//   "form"     sends visitors to the /contact page instead, and shows the Contact and Privacy links.
// Set NEXT_PUBLIC_BOOKING_MODE=form in Vercel and redeploy to switch to the form.
// The /contact and /privacy pages always exist but are hidden from search and, in Calendly mode, unlinked.
const bookingMode: "form" | "calendly" =
  process.env.NEXT_PUBLIC_BOOKING_MODE === "form" ? "form" : "calendly";
const byMode = <T>(form: T, calendly: T): T => (bookingMode === "calendly" ? calendly : form);

// Karen's free 20-minute introductory call. NEXT_PUBLIC_CALENDLY_URL in Vercel overrides it.
const bookingUrl = urlFromEnv(
  process.env.NEXT_PUBLIC_CALENDLY_URL,
  "https://calendly.com/karenknab/introductory-call",
);

// How quickly Karen promises to answer a note. Used in several places, so change it here.
const replyWindow = "two business days";

export const site = {
  name: "Karen Knab, LMFT",
  descriptor: "Therapy for Leaders and High-Achieving Professionals",
  // Public address of the live site. Used for the canonical link, social previews, the sitemap and
  // structured data. Fixed on purpose: Vercel's automatic production URL can be the *.vercel.app
  // address, which would tell Google the wrong site is the original.
  // If the main address ever changes (for example to the bare karenknab.com), set
  // NEXT_PUBLIC_SITE_URL in Vercel and redeploy.
  url: urlFromEnv(process.env.NEXT_PUBLIC_SITE_URL, "https://www.karenknab.com").replace(/\/+$/, ""),
  email: "karen@karenknab.com",
  bookingMode,
  bookingUrl,
  replyWindow,
  // Where every "request a call" button points, and whether it leaves the site.
  ctaHref: bookingMode === "calendly" ? bookingUrl : "/contact",
  ctaExternal: bookingMode === "calendly",
  psychologyTodayUrl: "https://www.psychologytoday.com/profile/1250829",
  linkedinUrl: "https://www.linkedin.com/in/karen-knab",
  // Draft sites stay hidden from search engines. Set NEXT_PUBLIC_ALLOW_INDEXING=true at launch.
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  ctaLabel: byMode("Request a free introductory call", "Schedule a free introductory call"),
  // Short label for the header button. It has to stay short to fit beside the logo on phones.
  headerCtaLabel: "Let's talk",
  ctaNote: "Free, 20 minutes. No pressure, no pitch.",
  metaDescription:
    "Private therapy for founders, executives, attorneys, finance professionals and physicians who look highly functional from the outside and are privately burning out. Secure telehealth in Virginia, New York, and Minnesota.",
};

// Hero headline options. With no ?h= in the URL the page shows option 3 (defaultHeroIndex).
// The others stay reachable for sharing: /?h=1, /?h=2, /?h=3 (positions in this list).
export const defaultHeroIndex = 2;

// All three hero options share the same italic line under the headline.
const heroSubhead =
  "Private therapy for founders, executives, attorneys, finance professionals and physicians who look highly functional from the outside and are quietly burning out.";
export const heroOptions = [
  {
    headline: "You're the one everyone relies on. Who do you rely on?",
    subhead: heroSubhead,
  },
  {
    headline: "Successful on paper. Overwhelmed in private.",
    subhead: heroSubhead,
  },
  {
    headline: "You can handle everything. That's part of the problem.",
    subhead: heroSubhead,
  },
];

export const nav = [
  { label: "Who I work with", href: "/#who" },
  { label: "How I work", href: "/#method" },
  { label: "Getting started", href: "/#how" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export const recognition = {
  eyebrow: "Success can hide distress",
  heading: "From the outside, it looks like it's working.",
  intro: "You may recognize yourself in this:",
  items: [
    "You're competent and successful, and you're the person everyone else relies on.",
    "You've been pushing through stress for years and have stopped noticing how much it weighs.",
    "Sleep, patience, motivation or your relationships have started to slip.",
    "Alcohol, work, exercise or distraction has become how you get through the day.",
    "You feel embarrassed to be struggling when, objectively, you've done so well.",
    "Traditional mental-health messaging doesn't sound like it was written for you.",
  ],
  close: "You've built something. It's costing more than you expected.",
  concernsLabel: "Common concerns",
  concerns:
    "Burnout, strain in a marriage or partnership, work-life balance, family conflict that spills into the business, and habits used to cope with pressure.",
};

export const who = {
  eyebrow: "Who I work with",
  heading: "Your title doesn't decide whether this fits.",
  body: "Much like leaders and founders, attorneys, finance professionals and physicians carry the same weight: long hours, high stakes and a role you can't set down at the end of the day. The patterns are the same, and so is the cost.",
  groups: [
    "Founders, business owners and executives",
    "Attorneys and law firm partners",
    "Finance and investment professionals",
    "Physicians and healthcare leaders",
    "Members of family-owned businesses",
    "Other high-achieving professionals in demanding careers",
  ],
};

export const approach = {
  eyebrow: "Why therapy, not coaching",
  heading: "Some conversations coaching can't reach.",
  body: [
    "I spent five years coaching founders and CEOs, and I learned a great deal. I also saw where coaching stops. Time and again, the issues that mattered most ran deeper than a coaching relationship could hold.",
    "If you've worked with a coach and felt the real conversation never happened, that's the conversation we have here. You won't spend sessions explaining your world to me, and you won't settle for a conversation that stays on the surface.",
  ],
  pillars: [
    {
      title: "Relationships",
      text: "The marriage, the family and the business relationships that carry the weight of your success.",
    },
    {
      title: "Balance",
      text: "Pressure that follows you home, and a role you can't seem to set down.",
    },
    {
      title: "Identity",
      text: "Who you are when the performance stops, and what you actually want from here.",
    },
    {
      title: "Habits",
      text: "The ways of coping that once worked and have quietly stopped serving you.",
    },
  ],
};

export const method = {
  eyebrow: "How I work",
  heading: "How I think about this.",
  body: [
    "I work from a family systems perspective: the idea that none of us is who we are in isolation. Your marriage, your family, your organization and the role you play in each of them are one connected system, and change in one part moves the others.",
    "My approach blends the candor of my East Coast roots with the respect and tact of my Midwest influence. My style is direct but kind and tends to land well with people who are tired of being handled. You won't get a framework or a worksheet. You'll get a real conversation, tailored to you.",
    "The goal isn't to make life easier. It's to change your relationship with the pressure, so that you respond to it instead of just absorbing it.",
  ],
  influences: [
    {
      title: "Family systems",
      text: "People are shaped by, and shape, the relationships around them. We look at the whole picture, not just you.",
    },
    {
      title: "Emotional intelligence",
      text: "Recognizing what is really happening in a hard moment, and staying present when it gets uncomfortable.",
    },
    {
      title: "Trauma-informed practice",
      text: "High performers often learned early that being capable was the safest way to be. We work with that, not against it.",
    },
  ],
};

export const how = {
  eyebrow: "Getting started",
  heading: "A straightforward way to begin.",
  steps: [
    {
      title: "A free 20-minute introductory call",
      text: byMode(
        `Send a short note and I will reply within ${replyWindow} to set up a time. We talk about what's going on, what you want to change, and whether working together makes sense. No pressure, no pitch.`,
        "We talk about what's going on, what you want to change, and whether working together makes sense. No pressure, no pitch.",
      ),
    },
    {
      title: "We get to what's underneath",
      text: "Together we look at the patterns shaping your relationships, your work and how you cope, with a focus on what you actually want to change.",
    },
    {
      title: "Ongoing work, on your schedule",
      text: "Sessions are by secure telehealth, scheduled around how you really work. My practice is private-pay, which keeps your care confidential and focused on your goals.",
    },
  ],
};

export const about = {
  eyebrow: "About Karen",
  heading: "Twenty years of family systems work, five of them inside the business world.",
  body: [
    "I'm a licensed marriage and family therapist currently living in Washington DC. For twenty years I've helped people change the patterns that shape their relationships and their lives. For five of those years I worked inside companies, coaching founders and CEOs and leading leadership development programs.",
    "Many of those engagements came from family-owned businesses, where leadership brought me in because their business challenges were really about family dynamics: succession, sibling rivalry, unspoken loyalties and old roles playing out in the boardroom.",
    "I've also sat in the owner's seat. I co-owned a business advisory consultancy and brought products to market, so I know what it means to have your name on the line.",
    "I understand the isolation of being the one everyone depends on, the pressure that follows people home, and the way success can quietly cost a marriage, a family or a sense of self. So I chose to focus entirely on therapy, because that's where lasting change happens.",
  ],
  facts: [
    "Licensed Marriage and Family Therapist",
    "20 years of clinical experience",
    "5 years coaching founders and CEOs",
    "Has worked with leaders and organizations in Virginia/Washington DC, Los Angeles, Austin, Minneapolis, and Buffalo NY",
    "Secure telehealth in Virginia, New York, and Minnesota",
  ],
};

export const faq = {
  eyebrow: "Questions",
  heading: "Before you reach out.",
  items: [
    {
      q: "Is this therapy or coaching?",
      a: "It's therapy. My coaching background informs how I understand your world, but the work we do together is psychotherapy.",
    },
    {
      q: "I'm not sure I need therapy. Is that okay?",
      a: "Very common. Most people who reach out are functioning well on the surface and aren't sure it's \"bad enough.\" The introductory call is a low-pressure way to find out whether this is the right fit.",
    },
    {
      q: "I don't hold a C-suite title. Is this still for me?",
      a: "Yes. I work with attorneys, physicians, finance professionals, business owners and other high achievers whose roles carry the same pressure.",
    },
    {
      q: "Does it matter where I live?",
      a: "Yes. Currently I am only licensed to work with clients who reside in Virginia, New York, or Minnesota.",
    },
    {
      q: "Where do you see clients?",
      a: "I see clients via a secure telehealth portal who are residents of Virginia, New York, and Minnesota.",
    },
    {
      q: "Is what we discuss confidential?",
      a: "Therapy is confidential within the limits set by law, and we'll go over those limits together before we begin. Private-pay also means your care isn't routed through an insurance company.",
    },
    {
      q: "Do you take insurance?",
      a: "No. All sessions are to be paid for at the time of service. Sessions can be paid for by debit/credit card or with an HSA/flex spending account. You may be eligible for reimbursement for sessions depending on your out-of-network mental health benefits. If you choose to submit for reimbursement, I can provide you with a \u201csuperbill\u201d for services at any point. However, I do not submit anything on your behalf.",
    },
    {
      q: "What happens after I reach out?",
      a: byMode(
        `I read your note myself and reply within ${replyWindow}. If it looks like a good fit, I'll send a link to book a free 20-minute introductory call.`,
        "You pick a time on my calendar for a free 20-minute introductory call. It's a chance to talk about what's going on and whether working together makes sense.",
      ),
    },
    {
      q: "How much do sessions cost?",
      a: "Sessions are 60 minutes and the price is $250/session.",
    },
  ],
};

export const closing = {
  // Two lines on purpose, so "A conversation." sits together on the second line.
  headingLines: ["The first conversation is just that.", "A conversation."],
  body: "An honest discussion about where you are, where you want to be, and whether working together makes sense.",
};

export const footer = {
  licensure: "Karen Knab, LMFT. Licensed in Virginia, New York, and Minnesota.",
  // Each license links to that state's public verification tool.
  licenses: [
    {
      label: "Virginia LMFT #0717002740",
      verifyHref: "https://dhp.virginiainteractive.org/lookup/index",
    },
    {
      label: "New York LMFT #001354",
      verifyHref: "https://eservices.nysed.gov/professions/verification-search",
    },
    {
      label: "Minnesota LMFT #4571",
      verifyHref: "https://mft.hlb.state.mn.us/#/services/onlineLicenseSearch",
    },
  ],
  crisis: byMode(
    "If you are in crisis or need immediate help, call or text 988, or go to your nearest emergency room. Requesting an introductory call is not an emergency service.",
    "If you are in crisis or need immediate help, call or text 988, or go to your nearest emergency room. Scheduling an introductory call is not an emergency service.",
  ),
  // The contact form and privacy pages are dormant in Calendly mode, so no links to them.
  links: byMode([
    { label: "Contact", href: "/contact" },
    { label: "Privacy policy", href: "/privacy" },
  ], [] as { label: string; href: string }[]),
};

export const contact = {
  metaTitle: "Contact | Karen Knab, LMFT",
  metaDescription:
    "Send Karen Knab a short note to request a free introductory call. She replies personally within two business days.",
  eyebrow: "Let's talk",
  heading: "Request a free introductory call",
  intro: `Tell me a little about what brings you here. I read every note myself and will reply within ${replyWindow} to set up a free 20-minute conversation. No pressure, no pitch.`,
  privacyNote:
    "Please keep your note brief and leave out medical or other personal details. This form is not a secure place for clinical information. Your name and email are used only so Karen can reply.",
  privacyLinkLabel: "How your information is handled",
  fields: {
    name: { label: "Your name", error: "Please enter your name." },
    email: { label: "Your email", error: "Please enter a valid email address." },
    reason: {
      label: "What brings you here?",
      hint: "A sentence or two is plenty.",
      error: "Please add a short note (at least a few words).",
    },
  },
  submit: "Send",
  sending: "Sending...",
  successHeading: "Thank you. Your note is on its way.",
  successBody: `I will reply within ${replyWindow}. If you don't see a message from me, check your spam folder.`,
  errorGeneric: `Something went wrong and your note didn't go through. Please try again, or email ${site.email} directly.`,
  errorTooFast: "That was quick. Please take a moment and try sending again.",
  errorRateLimit: `Too many attempts. Please try again later, or email ${site.email} directly.`,
  crisis:
    "If you are in crisis or need immediate help, call or text 988, or go to your nearest emergency room.",
};

export const privacy = {
  metaTitle: "Privacy Policy | Karen Knab, LMFT",
  metaDescription: "How Karen Knab, LMFT handles the information you send through this website.",
  heading: "Privacy policy",
  updated: "October 2026",
  sections: [
    {
      heading: "What I collect",
      body: [
        "If you use the contact form, I receive your name, your email address, and the note you write. That is all. This site has no accounts, no analytics, no advertising trackers, and no tracking cookies.",
      ],
    },
    {
      heading: "How it is used",
      body: [
        "I use what you send only to reply to you and to establish a professional relationship with you. I do not sell it, rent it, or share it with anyone else, and I do not use it for marketing or advertising.",
      ],
    },
    {
      heading: "How it travels and where it lives",
      body: [
        "Your note is sent from this website to my email through Google's email systems. This site does not store form submissions in a database. A copy of your message stays in my email inbox, like any other email, until I delete it. The site is hosted on Vercel, which processes basic technical data such as IP addresses to deliver pages and protect against abuse.",
      ],
    },
    {
      heading: "Please keep it brief",
      body: [
        "Email and web forms are not secure places for private health information. Please do not include medical or other sensitive details in your note. We can talk about those once we are in touch through appropriate channels.",
      ],
    },
    {
      heading: "Deleting your message",
      body: [`To have your message deleted, email ${site.email} and I will remove it.`],
    },
    {
      heading: "Other sites",
      body: [
        "This site links to outside pages, such as LinkedIn and state license verification tools. Those sites have their own privacy practices.",
      ],
    },
    {
      heading: "Questions",
      body: [`Write to ${site.email}.`],
    },
  ],
};

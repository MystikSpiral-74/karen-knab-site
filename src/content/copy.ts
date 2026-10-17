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

export const site = {
  name: "Karen Knab, LMFT",
  descriptor: "Therapy for Leaders and High-Achieving Professionals",
  // Address of the live site. Vercel supplies VERCEL_PROJECT_PRODUCTION_URL automatically
  // (it becomes karenknab.com once that domain is attached), so no manual setup is needed.
  // NEXT_PUBLIC_SITE_URL still overrides it if ever set.
  url: urlFromEnv(
    process.env.NEXT_PUBLIC_SITE_URL,
    urlFromEnv(
      process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : undefined,
      "https://www.karenknab.com",
    ),
  ),
  email: "karen@karenknab.com",
  // Karen's free 20-minute introductory call. NEXT_PUBLIC_CALENDLY_URL in Vercel overrides it.
  bookingUrl: urlFromEnv(
    process.env.NEXT_PUBLIC_CALENDLY_URL,
    "https://calendly.com/karenknab/introductory-call",
  ),
  linkedinUrl: "https://www.linkedin.com/in/karen-knab",
  // Draft sites stay hidden from search engines. Set NEXT_PUBLIC_ALLOW_INDEXING=true at launch.
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  ctaLabel: "Schedule a free introductory call",
  ctaNote: "Free, 20 minutes. No pressure, no pitch.",
  metaDescription:
    "Private therapy for founders, executives, attorneys, finance professionals and physicians who look highly functional from the outside and are privately burning out. Secure telehealth in Virginia and New York.",
};

// Hero headline options. With no ?h= in the URL the page shows option 3 (defaultHeroIndex).
// The others stay reachable for sharing: /?h=1, /?h=2, /?h=3 (positions in this list).
export const defaultHeroIndex = 2;
export const heroOptions = [
  {
    headline: "You're the one everyone relies on. Who do you rely on?",
    subhead:
      "Private therapy for founders, executives, attorneys, finance professionals and physicians who look highly functional from the outside and are quietly burning out.",
  },
  {
    headline: "Successful on paper. Overwhelmed in private.",
    subhead:
      "Therapy for high-achieving professionals carrying more than anyone can see: the pressure, the strained relationships, and the habits that have stopped working.",
  },
  {
    headline: "You can handle everything. That's part of the problem.",
    subhead:
      "Private therapy for leaders and professionals who overfunction at work, struggle to say no, and have nowhere to put it all down.",
  },
];

export const nav = [
  { label: "Who I work with", href: "#who" },
  { label: "How I work", href: "#method" },
  { label: "Getting started", href: "#how" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
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
  body: "Attorneys, finance professionals and physicians carry the same weight as executives: long hours, high stakes and a role you can't set down at the end of the day. The patterns are the same, and so is the cost.",
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
    "I'm direct, and I'm kind about it. My East Coast candor and Midwest tact tend to land well with people who are tired of being handled. You won't get a framework or a worksheet. You'll get a real conversation, tailored to you.",
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
      text: "We talk about what's going on, what you want to change, and whether working together makes sense. No pressure, no pitch.",
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
    "I'm a licensed marriage and family therapist. For twenty years I've helped people change the patterns that shape their relationships and their lives. For five of those years I worked inside companies, coaching founders and CEOs and leading leadership development programs.",
    "Many of those engagements came from family-owned businesses, where leadership brought me in because their business challenges were really family dynamics: succession, sibling rivalry, unspoken loyalties and old roles playing out in the boardroom.",
    "I've also sat in the owner's seat. I co-owned a business advisory consultancy and brought products to market, so I know what it means to have your name on the line.",
    "I understand the isolation of being the one everyone depends on, the pressure that follows people home, and the way success can quietly cost a marriage, a family or a sense of self. So I chose to focus entirely on therapy, because that's where lasting change happens.",
  ],
  facts: [
    "Licensed Marriage and Family Therapist",
    "20 years of clinical experience",
    "5 years coaching founders and CEOs",
    "Has worked with leaders and organizations in Virginia/Washington DC, Los Angeles, Austin, Minneapolis, and Buffalo NY",
    "Secure telehealth in Virginia and New York",
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
      q: "Where do you see clients?",
      a: "By secure, private telehealth, for clients located in Virginia or New York at the time of the session.",
    },
    {
      q: "Is what we discuss confidential?",
      a: "Therapy is confidential within the limits set by law, and we'll go over those limits together before we begin. Private-pay also means your care isn't routed through an insurance company.",
    },
    {
      q: "Do you take insurance?",
      a: "My practice is private-pay. If you have questions about fees or how this fits your situation, we can talk about it on the introductory call.",
    },
    {
      q: "I'm not sure I need therapy. Is that okay?",
      a: "Very common. Most people who reach out are functioning well on the surface and aren't sure it's \"bad enough.\" The introductory call is a low-pressure way to find out whether this is the right fit.",
    },
    {
      q: "I don't hold a C-suite title. Is this still for me?",
      a: "Yes. I work with attorneys, physicians, finance professionals, business owners and other high achievers whose roles carry the same pressure.",
    },
  ],
};

export const closing = {
  // Two lines on purpose, so "A conversation." sits together on the second line.
  headingLines: ["The first conversation is just that.", "A conversation."],
  body: "An honest discussion about where you are, where you want to be, and whether working together makes sense.",
};

export const footer = {
  licensure: "Karen Knab, LMFT. Licensed in Virginia and New York.",
  // Each license links to that state's public verification tool.
  licenses: [
    {
      label: "Virginia LMFT license 0717002740",
      verifyHref: "https://dhp.virginiainteractive.org/lookup/index",
    },
    {
      label: "New York LMFT license 001354",
      verifyHref: "https://eservices.nysed.gov/professions/verification-search",
    },
  ],
  verifyLabel: "Verify",
  crisis:
    "If you are in crisis or need immediate help, call or text 988, or go to your nearest emergency room. Scheduling an introductory call is not an emergency service.",
};

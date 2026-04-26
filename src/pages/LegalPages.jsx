import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { SITE } from "../lib/site.js";

const updated = "April 25, 2026";

const privacySections = [
  {
    title: "What we collect",
    body:
      "HackerRoll collects the information needed to run the app: account and installation identifiers, app diagnostics, entitlement status, support messages, and the email address you choose to share on this website. If you use Hacker News account features, session material is stored encrypted by the service so authenticated actions can work.",
  },
  {
    title: "How we use it",
    body:
      "We use data to provide the product, keep subscriptions and credits accurate, answer support requests, protect the service from abuse, and understand aggregate performance. We do not sell personal data or build third-party advertising profiles.",
  },
  {
    title: "AI features",
    body:
      "AI summaries, analysis, explanations, and translations are generated on demand from the story, comment, or article content needed for that request. Cached AI outputs may be retained to improve speed, reduce duplicate work, and avoid charging subscribers twice for unchanged translations.",
  },
  {
    title: "Advertising and reporting",
    body:
      "Sponsored placements are labeled. Advertiser reporting is aggregate and delayed; we do not share names, emails, device identifiers, or account-level reading histories with advertisers.",
  },
  {
    title: "Your choices",
    body:
      "You can unsubscribe from marketing emails, contact support for account or deletion requests, and manage subscriptions through Apple. Some operational data may be retained where required for security, billing, or legal compliance.",
  },
];

const termsSections = [
  {
    title: "Using HackerRoll",
    body:
      "You may use HackerRoll for personal, lawful purposes and must not interfere with the service, scrape it at scale, bypass access controls, or misuse Hacker News authentication flows exposed through the app.",
  },
  {
    title: "Content and AI output",
    body:
      "HackerRoll summarizes and transforms public article and Hacker News content. AI output can be incomplete or wrong, so use original sources for decisions where accuracy matters. HackerRoll is not legal, financial, medical, or investment advice.",
  },
  {
    title: "Subscriptions and credits",
    body:
      "Paid features may include AI summaries, analysis, structured translation, credits, and reduced ads. Purchases and renewals are handled by Apple or the platform shown at checkout. Credits, limits, and available Pro features may change as the beta evolves.",
  },
  {
    title: "Acceptable conduct",
    body:
      "Do not submit unlawful content, abuse support or lead forms, attempt to reverse engineer private APIs, or use the service to harass people, manipulate votes, or violate third-party terms.",
  },
  {
    title: "Availability and changes",
    body:
      "HackerRoll is provided as available. We may modify, suspend, or discontinue features, and we may update these terms when the product or legal requirements change.",
  },
];

export function Privacy() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title={<>Privacy that fits <span className="text-mute-soft">a news app.</span></>}
      body="A clear account of what HackerRoll collects, what it avoids, and how AI features handle story content."
      sections={privacySections}
      contact={`Questions or requests: ${SITE.privacyEmail}`}
      email={SITE.privacyEmail}
    />
  );
}

export function Terms() {
  return (
    <PolicyPage
      eyebrow="Terms"
      title={<>Terms for the <span className="text-mute-soft">broadcast.</span></>}
      body="The ground rules for using HackerRoll, subscriptions, AI output, and public beta features."
      sections={termsSections}
      contact={`Legal questions: ${SITE.legalEmail}`}
      email={SITE.legalEmail}
    />
  );
}

function PolicyPage({ eyebrow, title, body, sections, contact, email }) {
  return (
    <section className="relative pt-16 pb-28 sm:pt-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <PageHeader eyebrow={eyebrow} title={title} body={body} />

        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          <span className="rounded-full border border-line-strong bg-ink-1 px-3 py-1.5">
            Last updated {updated}
          </span>
          <Link to="/support" className="rounded-full border border-line-strong bg-ink-1 px-3 py-1.5 transition-colors hover:border-accent/60 hover:text-text">
            Support
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav aria-label={`${eyebrow} sections`} className="rounded-2xl border border-line-strong bg-ink-1/70 p-5">
              <ol className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                {sections.map((section) => (
                  <li key={section.title}>
                    <a className="transition-colors hover:text-accent" href={`#${slug(section.title)}`}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="divide-y divide-line rounded-2xl border border-line-strong bg-ink-1/80">
            {sections.map((section) => (
              <article key={section.title} id={slug(section.title)} className="scroll-mt-28 p-6 sm:p-8">
                <h2 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.01em] text-text">
                  {section.title}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-mute">{section.body}</p>
              </article>
            ))}
            <div className="p-6 sm:p-8">
              <p className="text-[14px] leading-relaxed text-mute">
                {contact}{" "}
                <a className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-text" href={`mailto:${email}`}>
                  Email us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

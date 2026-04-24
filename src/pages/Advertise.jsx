import { useState } from "react";
import { PageHeader } from "./Blog.jsx";
import { ArrowIcon, SparkleIcon, BoltIcon, InfinityIcon, GlobeIcon } from "../components/Icons.jsx";

const formats = [
  {
    idx: "01",
    name: "Native scene",
    price: "from $12 CPM",
    blurb:
      "A full-bleed vertical spot, rendered in the same engine as our editorial. Labeled, never mistaken for news.",
    points: ["15s vertical video or still", "Brand voice + logo lock-up", "Labeled 'Sponsored'"],
    Icon: SparkleIcon,
    accent: "accent",
  },
  {
    idx: "02",
    name: "Wire spotlight",
    price: "from $4,500 / week",
    blurb:
      "Ship a dedicated channel tied to a real wire moment — product launches, earnings windows, conference cycles.",
    points: ["Pinned channel placement", "Up to 8 rendered spots", "Realtime performance dashboard"],
    Icon: BoltIcon,
    accent: "hot",
  },
  {
    idx: "03",
    name: "Always-on feed",
    price: "from $18k / quarter",
    blurb:
      "A managed advertising relationship with a dedicated producer. For brands running continuous storytelling in-feed.",
    points: ["Dedicated producer", "Weekly creative refresh", "Quarterly insights report"],
    Icon: InfinityIcon,
    accent: "violet",
  },
];

const metrics = [
  { label: "Monthly active", value: "410K", note: "iOS · US + UK launch cohort" },
  { label: "Median session", value: "9:12", note: "Minutes per session · higher than read-only feeds" },
  { label: "Completion rate", value: "82%", note: "Of served spots watched through" },
  { label: "Safe surface", value: "100%", note: "No UGC. No comments. No autoplay after lock." },
];

const faqs = [
  {
    q: "Is this programmatic?",
    a: "No. Every spot passes an editorial review and is clearly labeled Sponsored. We do not buy or sell through ad exchanges.",
  },
  {
    q: "What categories do you accept?",
    a: "Tech, finance, science, culture, and long-form consumer brands. No gambling, crypto trading products, political advertising, or children-targeted categories.",
  },
  {
    q: "Do you share personal data with advertisers?",
    a: "Never. Reporting is aggregate and delayed by 24 hours. We do not sync audiences with external DMPs.",
  },
  {
    q: "How fast can we go live?",
    a: "Native scenes typically ship within five business days of creative approval. Wire spotlights align to a news window you specify.",
  },
];

export default function Advertise() {
  return (
    <section className="relative pt-16 pb-28 sm:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <PageHeader
          eyebrow="For brands"
          title={
            <>
              Advertise <em className="not-italic text-mute-soft">inside</em> the broadcast.
            </>
          }
          body="Newsroll runs a single, premium ad format: native vertical scenes, editorially reviewed, labeled, and never programmatic. If you want attention without the trust tax, read on."
        />

        {/* Metrics row */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-strong bg-line-strong md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-ink-1 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">{m.label}</div>
              <div className="mt-2 font-display text-[30px] font-semibold leading-none tracking-tight text-text sm:text-[36px]">
                {m.value}
              </div>
              <div className="mt-2 text-[12px] leading-snug text-mute">{m.note}</div>
            </div>
          ))}
        </div>

        {/* Formats */}
        <div className="mt-20">
          <div className="flex items-end justify-between">
            <h2 className="max-w-2xl font-display text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-text sm:text-[40px]">
              Three formats. <span className="text-mute-soft">Zero banner ads.</span>
            </h2>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-mute sm:inline">
              /rate-card
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-strong bg-line-strong md:grid-cols-3">
            {formats.map((f, i) => (
              <FormatCard key={f.idx} {...f} position={i} />
            ))}
          </div>
        </div>

        {/* Sample + Why */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <SamplePreview />
          <div className="flex flex-col justify-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">Why advertisers like it</div>
            <h3 className="mt-3 font-display text-[26px] font-semibold leading-[1.05] tracking-[-0.02em] text-text sm:text-[32px]">
              Attention earned the same way news is.
            </h3>
            <ul className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-mute">
              <BulletItem>
                <b className="text-text">Labeled, not laundered.</b> Every spot carries the Sponsored badge. No native deception.
              </BulletItem>
              <BulletItem>
                <b className="text-text">Produced, not pasted.</b> We render the creative in the same engine as editorial — consistent aesthetics, consistent pace.
              </BulletItem>
              <BulletItem>
                <b className="text-text">Aggregate only.</b> No personal identifiers, no re-targeting, no external data sharing.
              </BulletItem>
              <BulletItem>
                <b className="text-text">Editorial veto.</b> We say no to formats that would compromise the feed. That is the product.
              </BulletItem>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h3 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.01em] text-text sm:text-[30px]">
            Common questions
          </h3>
          <div className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line-strong bg-ink-1">
            {faqs.map((item, i) => (
              <Faq key={i} {...item} />
            ))}
          </div>
        </div>

        {/* Contact form */}
        <ContactForm />
      </div>
    </section>
  );
}

function FormatCard({ idx, name, price, blurb, points, Icon, accent, position }) {
  const accentClass = accent === "accent" ? "text-accent" : accent === "violet" ? "text-violet" : "text-hot";
  return (
    <div
      data-event="ad_format_view"
      data-format={name.toLowerCase()}
      className="group relative flex flex-col gap-6 bg-ink-1 p-8 transition-colors duration-500 hover:bg-ink-2"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Icon className={`h-6 w-6 ${accentClass}`} />
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">{name}</div>
        </div>
        <div className="font-mono text-[11px] text-mute/60">/ {idx}</div>
      </div>

      <div>
        <div className={`font-display text-[22px] font-semibold leading-tight tracking-[-0.01em] ${accentClass}`}>
          {price}
        </div>
        <p className="mt-3 max-w-[36ch] text-[14px] leading-relaxed text-mute">{blurb}</p>
      </div>

      <ul className="mt-auto space-y-2 text-[12.5px] text-text/85">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className={`mt-[7px] inline-block h-1 w-1 rounded-full ${accent === "accent" ? "bg-accent" : accent === "violet" ? "bg-violet" : "bg-hot"}`} />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        id={`cta-format-${idx}`}
        data-event="ad_format_inquire_click"
        data-format={name.toLowerCase()}
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-line-strong bg-ink-2/60 px-3.5 py-2 text-[12px] font-medium text-text transition-colors hover:border-accent/60"
      >
        Get a rate card
        <ArrowIcon className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function BulletItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
      <span>{children}</span>
    </li>
  );
}

function SamplePreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-ink-1 p-6">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
          Sample · Native scene
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute/80">Sponsored</div>
      </div>

      <div className="relative mt-4 aspect-[9/16] w-full overflow-hidden rounded-xl border border-line">
        {/* Mocked creative */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 70% 30%, rgba(178,140,255,0.45) 0%, transparent 60%), radial-gradient(50% 40% at 30% 70%, rgba(109,228,255,0.35) 0%, transparent 60%), linear-gradient(180deg,#0b0618,#06060f)",
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-white/70">
          <span>BRAND</span>
          <span>0:14 / 0:15</span>
        </div>
        <div className="absolute inset-x-5 bottom-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
            <SparkleIcon className="h-3 w-3 text-accent" />
            Rendered for brand
          </div>
          <h4 className="mt-2 font-display text-[20px] font-semibold leading-[1.1] text-white">
            A quiet phone. <br /> A loud idea.
          </h4>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-black">
            Learn more <ArrowIcon className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      data-event="ad_faq_toggle"
      data-question={q}
      className="group flex w-full flex-col gap-2 p-6 text-left transition-colors hover:bg-ink-2"
    >
      <div className="flex items-center justify-between gap-6">
        <div className="font-display text-[16px] font-semibold leading-snug text-text sm:text-[17px]">{q}</div>
        <span
          className={[
            "inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-line-strong text-[12px] text-mute transition-transform",
            open ? "rotate-45 text-accent" : "",
          ].join(" ")}
          aria-hidden="true"
        >
          +
        </span>
      </div>
      {open && (
        <p className="max-w-[64ch] text-[13.5px] leading-relaxed text-mute">{a}</p>
      )}
    </button>
  );
}

function ContactForm() {
  const [state, setState] = useState({ company: "", email: "", budget: "from-5k", message: "", ok: false });

  function submit(e) {
    e.preventDefault();
    setState((s) => ({ ...s, ok: true }));
  }

  return (
    <div id="contact" className="mt-24 overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-br from-ink-1 to-ink-2 p-8 sm:p-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">/get-in-touch</div>
          <h3 className="mt-3 font-display text-[28px] font-semibold leading-[1.05] tracking-[-0.02em] text-text sm:text-[36px]">
            Run something worth watching.
          </h3>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-mute sm:text-[15px]">
            Tell us about the brand and the window. Our partnerships team replies within two business days.
          </p>
          <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
            <GlobeIcon className="h-3.5 w-3.5 text-accent" />
            <a
              id="link-email-ads"
              data-event="ads_mailto_click"
              href="mailto:ads@newsroll.app"
              className="hover:text-text"
            >
              ads@newsroll.app
            </a>
          </div>
        </div>

        <form
          id="form-advertise-inquiry"
          data-event="ad_inquiry_submit"
          onSubmit={submit}
          className="grid grid-cols-1 gap-3"
        >
          <Field label="Company" id="ad-company">
            <input
              id="ad-company"
              data-event="ad_inquiry_company_focus"
              required
              value={state.company}
              onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
              placeholder="Brand or agency"
              className="w-full rounded-xl border border-line-strong bg-ink-0/60 px-4 py-3 text-[13.5px] text-text placeholder:text-mute focus:border-accent/50 focus:outline-none"
            />
          </Field>

          <Field label="Work email" id="ad-email">
            <input
              id="ad-email"
              type="email"
              required
              data-event="ad_inquiry_email_focus"
              value={state.email}
              onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-line-strong bg-ink-0/60 px-4 py-3 text-[13.5px] text-text placeholder:text-mute focus:border-accent/50 focus:outline-none"
            />
          </Field>

          <Field label="Budget band" id="ad-budget">
            <select
              id="ad-budget"
              data-event="ad_inquiry_budget_change"
              value={state.budget}
              onChange={(e) => setState((s) => ({ ...s, budget: e.target.value }))}
              className="w-full rounded-xl border border-line-strong bg-ink-0/60 px-4 py-3 text-[13.5px] text-text focus:border-accent/50 focus:outline-none"
            >
              <option value="under-5k">Under $5k (pilot)</option>
              <option value="from-5k">$5k – $20k</option>
              <option value="from-20k">$20k – $50k</option>
              <option value="from-50k">$50k+</option>
            </select>
          </Field>

          <Field label="What's the brief?" id="ad-message">
            <textarea
              id="ad-message"
              rows={4}
              data-event="ad_inquiry_message_focus"
              value={state.message}
              onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
              placeholder="Launch window, product, audience, success criteria…"
              className="w-full resize-none rounded-xl border border-line-strong bg-ink-0/60 px-4 py-3 text-[13.5px] text-text placeholder:text-mute focus:border-accent/50 focus:outline-none"
            />
          </Field>

          <div className="mt-2 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[11px] text-mute">
              Protected by an editorial veto. No brief, no pressure.
            </p>
            <button
              id="cta-advertise-submit"
              data-event="ad_inquiry_submit_click"
              type="submit"
              className="btn-halo inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[13px] font-semibold text-ink-0 transition-transform hover:-translate-y-0.5"
            >
              {state.ok ? "Sent ✦ We'll reply in 2 days" : "Send inquiry"}
              {!state.ok && <ArrowIcon className="h-3.5 w-3.5" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, id, children }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">{label}</span>
      {children}
    </label>
  );
}

import { useState } from "react";
import { ArrowIcon, GlobeIcon, SparkleIcon } from "../components/Icons.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { submitLead } from "../lib/api.js";
import { SITE } from "../lib/site.js";

const resources = [
  {
    id: "ios",
    title: "Subscriptions",
    body: "Manage HackerRoll Pro, renewals, cancellations, and receipts through your Apple account.",
    action: "Open Apple subscriptions",
    href: "https://apps.apple.com/account/subscriptions",
  },
  {
    id: "hn-login",
    title: "Hacker News login",
    body: "HN actions require a valid Hacker News session. If voting or replying fails, sign out and connect again.",
    action: "Email support",
    href: `mailto:${SITE.supportEmail}?subject=HN%20login%20help`,
  },
  {
    id: "ai-credits",
    title: "AI credits",
    body: "Summaries, explanations, analysis, and translations are generated on demand and may use credits based on your plan.",
    action: "Ask about credits",
    href: `mailto:${SITE.supportEmail}?subject=AI%20credits`,
  },
  {
    id: "android-waitlist",
    title: "Android waitlist",
    body: "HackerRoll is focused on iOS first. Tell us if you want early access when Android work starts.",
    action: "Join waitlist",
    href: `mailto:${SITE.supportEmail}?subject=Android%20waitlist`,
  },
];

const faqs = [
  {
    q: "Where can I get help fastest?",
    a: `Email ${SITE.supportEmail}. Include your device model, iOS version, app version, and the story or feature that failed.`,
  },
  {
    q: "How do I report an inaccurate summary?",
    a: "Send the story link and what looked wrong. We review source resolution, AI output, and cache state when investigating.",
  },
  {
    q: "Can I delete my data?",
    a: `Yes. Email ${SITE.privacyEmail} from the address tied to your request and describe what you want deleted.`,
  },
];

export default function Support() {
  return (
    <section className="relative pt-16 pb-28 sm:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <PageHeader
          eyebrow="Support"
          title={<>Help for <span className="text-mute-soft">real readers.</span></>}
          body="Get account, subscription, AI feature, and advertiser support from the HackerRoll team."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-strong bg-line-strong md:grid-cols-3">
          {resources.map((item) => (
            <a id={item.id} key={item.title} href={item.href} className="group flex min-h-[220px] scroll-mt-24 flex-col bg-ink-1 p-7 transition-colors hover:bg-ink-2">
              <SparkleIcon className="h-5 w-5 text-accent" />
              <h2 className="mt-5 font-display text-[22px] font-semibold leading-tight tracking-[-0.01em] text-text">
                {item.title}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-mute">{item.body}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-medium text-accent">
                {item.action}
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SupportForm />

          <div className="rounded-2xl border border-line-strong bg-ink-1 p-7 sm:p-8">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
              <GlobeIcon className="h-3.5 w-3.5 text-accent" />
              Common fixes
            </div>
            <div className="mt-6 divide-y divide-line">
              {faqs.map((item) => (
                <article key={item.q} className="py-5 first:pt-0 last:pb-0">
                  <h2 className="font-display text-[18px] font-semibold leading-snug text-text">{item.q}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-mute">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportForm() {
  const [form, setForm] = useState({ email: "", topic: "support", message: "" });
  const [status, setStatus] = useState("idle");

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      await submitLead({
        type: "support",
        email: form.email,
        metadata: {
          topic: form.topic,
          message: form.message,
        },
      });
      setStatus("ok");
      setForm({ email: "", topic: "support", message: "" });
    } catch (error) {
      setStatus(error.message);
    }
  }

  return (
    <form
      id="form-support"
      data-event="support_form_submit"
      onSubmit={onSubmit}
      className="rounded-2xl border border-line-strong bg-gradient-to-br from-ink-1 to-ink-2 p-7 sm:p-8"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">/contact</div>
      <h2 className="mt-3 font-display text-[28px] font-semibold leading-[1.05] tracking-[-0.02em] text-text">
        Send a support note.
      </h2>
      <p className="mt-3 text-[14px] leading-relaxed text-mute">
        We reply by email. For billing issues, avoid sending full payment details.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <Field label="Email" id="support-email">
          <input
            id="support-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-xl border border-line-strong bg-ink-0/60 px-4 py-3 text-[13.5px] text-text placeholder:text-mute focus:border-accent/50 focus:outline-none"
            placeholder="you@inbox.com"
          />
        </Field>

        <Field label="Topic" id="support-topic">
          <select
            id="support-topic"
            value={form.topic}
            onChange={(event) => setForm((current) => ({ ...current, topic: event.target.value }))}
            className="w-full rounded-xl border border-line-strong bg-ink-0/60 px-4 py-3 text-[13.5px] text-text focus:border-accent/50 focus:outline-none"
          >
            <option value="support">App support</option>
            <option value="subscription">Subscription</option>
            <option value="ai">AI feature</option>
            <option value="privacy">Privacy request</option>
          </select>
        </Field>

        <Field label="Message" id="support-message">
          <textarea
            id="support-message"
            rows={5}
            required
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            className="w-full resize-none rounded-xl border border-line-strong bg-ink-0/60 px-4 py-3 text-[13.5px] text-text placeholder:text-mute focus:border-accent/50 focus:outline-none"
            placeholder="What happened? Include app version and story link when relevant."
          />
        </Field>
      </div>

      <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="min-h-5 text-[12px] text-mute" role="status" aria-live="polite">
          {status === "ok" ? "Sent. We will reply by email." : status !== "idle" && status !== "sending" ? status : ""}
        </p>
        <button
          id="cta-support-submit"
          data-event="support_submit_click"
          type="submit"
          disabled={status === "sending"}
          className="btn-halo inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[13px] font-semibold text-ink-0 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending" : "Send note"}
          <ArrowIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    </form>
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

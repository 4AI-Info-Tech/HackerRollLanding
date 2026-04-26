import { useState } from "react";
import PhoneMockup from "./PhoneMockup.jsx";
import { AppleIcon, ArrowIcon, GlobeIcon } from "./Icons.jsx";
import { submitLead } from "../lib/api.js";
import { SITE } from "../lib/site.js";

export default function Hero() {
  return (
    <section id="top" className="relative pt-8 sm:pt-14">
      <Ticker />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-20">
        {/* Copy column */}
        <div className="relative flex flex-col justify-center">
          <div className="rise inline-flex w-fit items-center gap-2 rounded-full border border-line-strong bg-ink-1/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-mute-soft backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hot opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-hot" />
            </span>
            On air · daily
          </div>

          <h1
            className="rise mt-6 font-display text-[42px] font-semibold leading-[0.95] tracking-[-0.025em] text-text sm:text-[56px] md:text-[68px] lg:text-[74px]"
            style={{ animationDelay: "80ms" }}
          >
            See Hacker News.<br />
            <span className="text-mute-soft">Don&rsquo;t just</span>{" "}
            <em className="not-italic relative whitespace-nowrap text-text">
              read
              <svg
                aria-hidden="true"
                viewBox="0 0 220 20"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full"
              >
                <path
                  d="M4 14 C 60 4, 160 4, 216 14"
                  stroke="var(--color-accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  style={{ filter: "drop-shadow(0 0 6px rgba(109,228,255,0.7))" }}
                />
              </svg>
            </em>{" "}
            <span className="text-mute-soft">it.</span>
          </h1>

          <p
            className="rise mt-7 max-w-[520px] text-[15px] leading-relaxed text-mute sm:text-[17px]"
            style={{ animationDelay: "160ms" }}
          >
            HackerRoll turns Hacker News into a visual, readable feed with source links,
            comment threads, AI summaries, translations, and authenticated HN actions.
          </p>

          <div
            className="rise mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "220ms" }}
          >
            <a
              id="cta-hero-download"
              data-event="download_click_hero"
              data-surface="hero"
              href={SITE.appStoreUrl}
              target="_blank"
              rel="noopener"
              className="btn-halo group inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3.5 text-[14px] font-semibold tracking-tight text-ink-0 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <AppleIcon className="h-[18px] w-[18px]" />
              <span>Get iOS access</span>
              <span className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-0/10">
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>

            <a
              id="cta-hero-how"
              data-event="how_it_works_click"
              data-surface="hero"
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink-2/40 px-4 py-3 text-[13px] font-medium text-text/90 backdrop-blur transition-colors hover:bg-ink-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-mute" />
              How it works
            </a>
          </div>

          {/* Early access email */}
          <EmailCapture />

          {/* trust row */}
          <div
            className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-mute"
            style={{ animationDelay: "360ms" }}
          >
            <TrustItem label="Used by" value="9,200 beta readers" />
            <span className="hidden h-3 w-px bg-line-strong sm:inline-block" />
            <TrustItem label="Sources" value="Reuters · AP · Bloomberg" icon={<GlobeIcon className="h-3.5 w-3.5 text-accent" />} />
            <span className="hidden h-3 w-px bg-line-strong sm:inline-block" />
            <TrustItem label="Privacy" value="No ads. No tracking." />
          </div>
        </div>

        {/* Phone column */}
        <div className="relative flex items-center justify-center py-8 lg:py-0">
          <PhoneMockup />
        </div>
      </div>

      {/* bottom divider */}
      <div className="mx-auto h-px max-w-6xl hair" />
    </section>
  );
}

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  async function submit(e) {
    e.preventDefault();
    setState("sending");

    try {
      await submitLead({
        type: "early-access",
        email,
        metadata: { surface: "hero" },
      });
      setState("ok");
    } catch (error) {
      setState(error.message);
    }
  }

  return (
    <form
      id="form-early-access"
      data-event="early_access_form_submit"
      data-surface="hero"
      onSubmit={submit}
      className="rise mt-6 flex w-full max-w-[440px] items-center gap-2 rounded-full border border-line-strong bg-ink-1/60 p-1.5 pl-4 backdrop-blur"
      style={{ animationDelay: "280ms" }}
    >
      <label htmlFor="email-early" className="sr-only">Email</label>
      <input
        id="email-early"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@inbox.com · get launch invite"
        autoComplete="email"
        data-event="early_access_email_focus"
        required
        className="min-w-0 flex-1 bg-transparent text-[13px] text-text placeholder:text-mute focus:outline-none"
      />
      <button
        id="cta-early-access-submit"
        data-event="early_access_submit_click"
        data-surface="hero"
        type="submit"
        disabled={state === "sending"}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink-3 px-4 py-2 text-[12px] font-medium text-text transition-colors hover:bg-ink-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "ok" ? "On the list" : state === "sending" ? "Sending" : "Notify me"}
      </button>
      {state !== "idle" && state !== "sending" && state !== "ok" && (
        <p className="sr-only" role="status" aria-live="polite">{state}</p>
      )}
    </form>
  );
}

function TrustItem({ label, value, icon }) {
  return (
    <div className="inline-flex items-center gap-2">
      {icon}
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute/80">{label}</span>
      <span className="text-[12px] text-text/80">{value}</span>
    </div>
  );
}

function Ticker() {
  const items = [
    "LIVE · WIRE-0182",
    "JWST · water signals confirmed at 40ly",
    "MARKETS · S&P closes green, 0.8%",
    "TECH · OpenAI opens v6 agent API",
    "CLIMATE · Arctic sea ice at cycle low",
    "CULTURE · Venice Biennale opens",
    "WIRE · 4,218 stories rendered today",
    "NEWSROLL · now on iOS · v0.1 beta",
  ];
  const row = [...items, ...items];
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex w-full max-w-6xl items-center gap-3 overflow-hidden px-5 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink-0 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink-0 to-transparent" />
      <div className="ticker flex min-w-max gap-8 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-mute/70">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent/70" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { submitLead } from "../lib/api.js";
import { POSTS, formatDate } from "./blogData.js";

export default function Blog() {
  return (
    <section className="relative pt-16 pb-28 sm:pt-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <PageHeader
          eyebrow="Field notes"
          title={<>Dispatches from the <span className="text-mute-soft">render room.</span></>}
          body="Long-form notes on how we build, what we publish, and why the news needs a better form."
        />

        <ul className="mt-16 divide-y divide-line">
          {POSTS.map((p, i) => (
            <li key={p.slug} className="rise" style={{ animationDelay: `${80 + i * 60}ms` }}>
              <Link
                to={`/blog/${p.slug}`}
                id={`blog-post-${p.slug}`}
                data-event="blog_post_open"
                data-slug={p.slug}
                className="group grid grid-cols-1 items-start gap-6 py-8 md:grid-cols-[140px_1fr_auto]"
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mute md:pt-1">
                  <AccentDot accent={p.accent} />
                  <time>{formatDate(p.date)}</time>
                </div>

                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute/80">
                    {p.kicker} · {p.readTime}
                  </div>
                  <h3 className="font-display text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] text-text transition-colors group-hover:text-accent sm:text-[26px]">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-mute">
                    {p.excerpt}
                  </p>
                </div>

                <div className="hidden items-center justify-end md:flex">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-ink-1 text-mute transition-all group-hover:-translate-y-0.5 group-hover:border-accent/60 group-hover:text-accent">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Subscribe card */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-br from-ink-1 to-ink-2 p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">/field-notes</div>
              <h4 className="mt-2 font-display text-[24px] font-semibold leading-tight tracking-[-0.01em] text-text sm:text-[28px]">
                One post a fortnight. Never more.
              </h4>
            </div>
            <BlogSubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      await submitLead({
        type: "blog-subscribe",
        email,
        metadata: { surface: "blog" },
      });
      setStatus("ok");
      setEmail("");
    } catch (error) {
      setStatus(error.message);
    }
  }

  return (
    <form
      id="form-blog-subscribe"
      data-event="blog_subscribe_submit"
      onSubmit={onSubmit}
      className="flex w-full max-w-md items-center gap-2 rounded-full border border-line-strong bg-ink-0/60 p-1.5 pl-4"
    >
      <label htmlFor="email-blog" className="sr-only">Email</label>
      <input
        id="email-blog"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@inbox.com"
        autoComplete="email"
        data-event="blog_email_focus"
        className="min-w-0 flex-1 bg-transparent text-[13px] text-text placeholder:text-mute focus:outline-none"
      />
      <button
        id="cta-blog-subscribe"
        data-event="blog_subscribe_click"
        type="submit"
        disabled={status === "sending"}
        className="shrink-0 rounded-full bg-accent px-4 py-2 text-[12px] font-semibold text-ink-0 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "ok" ? "Added" : status === "sending" ? "Sending" : "Subscribe"}
      </button>
      {status !== "idle" && status !== "sending" && status !== "ok" && (
        <p className="sr-only" role="status" aria-live="polite">{status}</p>
      )}
    </form>
  );
}

function AccentDot({ accent }) {
  const cls = accent === "accent" ? "bg-accent" : accent === "violet" ? "bg-violet" : "bg-hot";
  const glow =
    accent === "accent"
      ? "shadow-[0_0_8px_var(--color-accent)]"
      : accent === "violet"
      ? "shadow-[0_0_8px_rgba(178,140,255,0.7)]"
      : "shadow-[0_0_8px_rgba(255,107,61,0.7)]";
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${cls} ${glow}`} />;
}

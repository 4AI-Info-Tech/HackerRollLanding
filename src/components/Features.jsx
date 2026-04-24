import { BrushIcon, InfinityIcon, BoltIcon, AppleIcon, ArrowIcon } from "./Icons.jsx";

const features = [
  {
    idx: "01",
    label: "Visuals",
    title: "AI-Generated Visuals",
    body: "Every story is rendered into a short vertical film or cover still — scene, motion, voice. News that moves.",
    Icon: BrushIcon,
    accent: "accent",
  },
  {
    idx: "02",
    label: "Feed",
    title: "Infinite Scroll",
    body: "A TikTok-style feed you already know how to use. One thumb, every headline. No tabs. No tabs of tabs.",
    Icon: InfinityIcon,
    accent: "violet",
  },
  {
    idx: "03",
    label: "Wire",
    title: "Real-Time Updates",
    body: "Wires hit, we render, you swipe. Median latency from breaking source to your feed is twelve seconds.",
    Icon: BoltIcon,
    accent: "hot",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
            <span className="h-px w-6 bg-line-strong" />
            What it does
          </div>
          <h2 className="max-w-2xl font-display text-[34px] font-semibold leading-[1.03] tracking-[-0.02em] text-text sm:text-[48px]">
            Three things, done&nbsp;
            <span className="text-mute-soft">unreasonably well.</span>
          </h2>
        </div>

        <div id="how" className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-strong bg-line-strong md:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.idx} {...f} position={i} />
          ))}
        </div>

        {/* Secondary CTA band */}
        <div id="download" className="mt-24 overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-br from-ink-1 to-ink-2">
          <div className="relative grid grid-cols-1 items-center gap-8 p-8 sm:p-12 md:grid-cols-[1.2fr_0.8fr]">
            {/* background accent */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-violet/10 blur-3xl" />

            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
                /app-store · coming soon
              </div>
              <h3 className="mt-3 font-display text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-text sm:text-[38px]">
                Swipe the world in <span className="text-accent">nine minutes</span> a day.
              </h3>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-mute sm:text-[15px]">
                Free to download. No newsletter guilt. No autoplay ads. Just the day, rendered.
              </p>
            </div>

            <div className="relative flex flex-col items-start gap-3 md:items-end">
              <a
                id="cta-band-download"
                data-event="download_click_band"
                data-surface="feature_band"
                href="https://apps.apple.com/app/id6761051035"
                target="_blank"
                rel="noopener"
                className="btn-halo group inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3.5 text-[14px] font-semibold tracking-tight text-ink-0 transition-transform hover:-translate-y-0.5"
              >
                <AppleIcon className="h-[18px] w-[18px]" />
                <span>Download on iOS</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                id="cta-band-android"
                data-event="android_waitlist_click"
                data-surface="feature_band"
                href="#"
                className="text-[12px] text-mute underline-offset-4 hover:text-text hover:underline"
              >
                Android? Join the waitlist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ idx, label, title, body, Icon, accent, position }) {
  const accentClass = accent === "accent" ? "text-accent" : accent === "violet" ? "text-violet" : "text-hot";
  const glowStyle =
    accent === "accent"
      ? { background: "radial-gradient(120px 100px at 20% 0%, rgba(109,228,255,0.2), transparent 60%)" }
      : accent === "violet"
      ? { background: "radial-gradient(120px 100px at 20% 0%, rgba(178,140,255,0.18), transparent 60%)" }
      : { background: "radial-gradient(120px 100px at 20% 0%, rgba(255,107,61,0.18), transparent 60%)" };

  return (
    <div
      data-event="feature_card_view"
      data-feature={label.toLowerCase()}
      className="group relative flex flex-col justify-between gap-10 bg-ink-1 p-8 transition-colors duration-500 hover:bg-ink-2 sm:p-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={glowStyle} />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Icon className={`h-7 w-7 ${accentClass}`} />
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">{label}</div>
        </div>
        <div className="font-mono text-[11px] text-mute/60">/ {idx}</div>
      </div>

      <div className="relative">
        <h3 className="font-display text-[26px] font-semibold leading-[1.05] tracking-[-0.01em] text-text sm:text-[28px]">
          {title}
        </h3>
        <p className="mt-3 max-w-[36ch] text-[14px] leading-relaxed text-mute">
          {body}
        </p>
      </div>

      {/* bottom meta */}
      <div className="relative flex items-center justify-between border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        <span>Step {position + 1}</span>
        <span className={`inline-flex items-center gap-1.5 ${accentClass}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
          ready
        </span>
      </div>
    </div>
  );
}

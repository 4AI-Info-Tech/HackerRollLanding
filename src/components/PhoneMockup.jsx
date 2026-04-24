import { HeartIcon, CommentIcon, ShareIcon, SparkleIcon } from "./Icons.jsx";

const stories = [
  {
    tag: "SCIENCE / SPACE",
    headline: "JWST confirms water vapor on exoplanet 40 light-years away.",
    source: "@astro.reuters",
    likes: "284.1K",
    comments: "12.4K",
    shares: "41.2K",
    hashtags: "#jwst #exoplanet #watersignals",
    palette: {
      a: "rgba(109,228,255,0.45)",
      b: "rgba(178,140,255,0.35)",
      c: "rgba(10,12,19,1)",
    },
    scene: "cosmic",
  },
  {
    tag: "MARKETS / BREAKING",
    headline: "Fed holds rates steady; hints at summer cut.",
    source: "@reuters.markets",
    likes: "98.3K",
    comments: "6.1K",
    shares: "14.7K",
    hashtags: "#fed #rates #markets",
    palette: {
      a: "rgba(255,107,61,0.55)",
      b: "rgba(255,186,107,0.35)",
      c: "rgba(18,14,12,1)",
    },
    scene: "chart",
  },
  {
    tag: "TECH / AI",
    headline: "A lab-grown model writes code that writes itself.",
    source: "@newsroll.app",
    likes: "512.9K",
    comments: "22.0K",
    shares: "88.4K",
    hashtags: "#ai #agents #dev",
    palette: {
      a: "rgba(178,140,255,0.55)",
      b: "rgba(109,228,255,0.35)",
      c: "rgba(12,10,20,1)",
    },
    scene: "grid",
  },
];

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px] md:w-[360px]">
      {/* Ambient aura behind device */}
      <div className="pointer-events-none absolute -inset-16 aura" />

      <div className="phone-float relative">
        {/* Phone chassis */}
        <div
          className="relative aspect-[9/19.5] w-full rounded-[44px] border border-line-strong bg-gradient-to-b from-ink-2 to-ink-1 p-[6px]"
          style={{ boxShadow: "var(--shadow-phone)" }}
        >
          {/* Inner bezel */}
          <div className="relative h-full w-full overflow-hidden rounded-[38px] border border-white/5 bg-black">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2 z-30 flex h-7 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-black">
              <div className="h-1.5 w-1.5 rounded-full bg-accent/70 shadow-[0_0_8px_var(--color-accent)]" />
            </div>

            {/* Status bar */}
            <div className="absolute left-0 right-0 top-2.5 z-20 flex items-center justify-between px-5 font-mono text-[10px] font-medium tracking-tight text-white/80">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <SignalBars />
                <WifiGlyph />
                <BatteryGlyph />
              </div>
            </div>

            {/* Top overlay — tabs */}
            <div className="absolute left-0 right-0 top-10 z-20 flex items-center justify-center gap-5 text-[12px] font-medium text-white/60">
              <span className="relative">
                Following
              </span>
              <span className="relative text-white">
                For You
                <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-white" />
              </span>
              <span>Live</span>
            </div>

            {/* Feed viewport (cycles vertically) */}
            <div className="relative h-full w-full">
              <div className="feed-cycle h-full w-full will-change-transform">
                {stories.map((s, i) => (
                  <StoryCard key={i} story={s} />
                ))}
                {/* duplicate first card for seamless loop */}
                <StoryCard story={stories[0]} />
              </div>
            </div>

            {/* Scanline sweep */}
            <div aria-hidden="true" className="scanline pointer-events-none absolute inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

            {/* Vignette edges */}
            <div className="pointer-events-none absolute inset-0 rounded-[38px] [box-shadow:inset_0_0_60px_rgba(0,0,0,0.55)]" />
          </div>

          {/* Side buttons */}
          <span className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l bg-ink-3" />
          <span className="absolute -left-[3px] top-40 h-16 w-[3px] rounded-l bg-ink-3" />
          <span className="absolute -left-[3px] top-60 h-16 w-[3px] rounded-l bg-ink-3" />
          <span className="absolute -right-[3px] top-32 h-24 w-[3px] rounded-r bg-ink-3" />
        </div>

        {/* Reflected glow on ground */}
        <div className="pointer-events-none mx-auto mt-4 h-10 w-4/5 rounded-[50%] bg-accent/10 blur-2xl" />
      </div>
    </div>
  );
}

function StoryCard({ story }) {
  return (
    <div
      className="relative h-full w-full"
      style={{
        background: `linear-gradient(180deg, ${story.palette.c} 0%, ${story.palette.c} 100%)`,
      }}
    >
      {/* Scene background */}
      <Scene kind={story.scene} palette={story.palette} />

      {/* Dark gradient overlay for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />

      {/* AI badge */}
      <div className="absolute left-4 top-20 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
        <SparkleIcon className="h-3 w-3 text-accent" />
        <span>AI-rendered</span>
      </div>

      {/* Progress bars (story segments) */}
      <div className="absolute left-4 right-4 top-[72px] z-10 flex gap-1.5">
        <div className="h-[2px] flex-1 rounded-full bg-white/15">
          <div className="progress h-full w-full rounded-full bg-white" />
        </div>
        <div className="h-[2px] flex-1 rounded-full bg-white/15" />
        <div className="h-[2px] flex-1 rounded-full bg-white/15" />
      </div>

      {/* Right action rail */}
      <div className="absolute bottom-28 right-3 z-10 flex flex-col items-center gap-5 text-white">
        <Action Icon={HeartIcon} label={story.likes} accent />
        <Action Icon={CommentIcon} label={story.comments} />
        <Action Icon={ShareIcon} label={story.shares} />
        <div className="mt-1 h-9 w-9 rounded-full border border-white/30 bg-gradient-to-br from-white/20 to-white/0 ring-2 ring-white/10" />
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-5 left-4 right-20 z-10">
        <div className="mb-2 inline-flex items-center gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-hot live-dot" />
          {story.tag}
        </div>
        <h4 className="font-display text-[17px] font-semibold leading-[1.15] text-white text-balance">
          {story.headline}
        </h4>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-white/70">
          <span className="h-5 w-5 rounded-full bg-white/80" />
          <span className="font-medium text-white">{story.source}</span>
          <span className="text-white/30">·</span>
          <span className="font-mono text-[10px] text-white/60">{story.hashtags}</span>
        </div>
      </div>
    </div>
  );
}

function Action({ Icon, label, accent }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className={accent ? "h-6 w-6 drop-shadow-[0_0_6px_rgba(255,107,61,0.6)] text-hot" : "h-6 w-6 text-white"} />
      <span className="font-mono text-[10px] font-medium text-white/85">{label}</span>
    </div>
  );
}

function Scene({ kind, palette }) {
  if (kind === "cosmic") {
    return (
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(60% 40% at 30% 35%, ${palette.a} 0%, transparent 60%),
            radial-gradient(50% 30% at 80% 70%, ${palette.b} 0%, transparent 60%),
            radial-gradient(80% 80% at 50% 110%, rgba(0,0,0,0.8), transparent 60%),
            linear-gradient(180deg, #060814, #0a0618 60%, #020103)
          `,
        }}
      >
        {/* Stars */}
        <Stars />
        {/* Planet */}
        <div className="absolute left-1/2 top-[28%] h-32 w-32 -translate-x-1/2 rounded-full"
             style={{
               background: "radial-gradient(circle at 30% 30%, #9ad8ff 0%, #3a6ea5 40%, #0a1b2a 80%)",
               boxShadow: "0 0 80px rgba(109,228,255,0.35), inset -10px -10px 30px rgba(0,0,0,0.6)",
             }} />
        <div className="absolute left-1/2 top-[30%] h-36 w-56 -translate-x-1/2 rotate-[-15deg] rounded-full border border-white/10"
             style={{ boxShadow: "inset 0 0 30px rgba(255,255,255,0.1)" }} />
      </div>
    );
  }
  if (kind === "chart") {
    return (
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(60% 40% at 70% 20%, ${palette.a} 0%, transparent 60%),
            radial-gradient(50% 50% at 30% 80%, ${palette.b} 0%, transparent 60%),
            linear-gradient(180deg, #120a06, #1c0f07 50%, #0a0604)
          `,
        }}
      >
        {/* chart sparkline */}
        <svg viewBox="0 0 300 400" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FF6B3D" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF6B3D" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* grid */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="0" x2="300" y1={(i + 1) * 45} y2={(i + 1) * 45} stroke="rgba(255,255,255,0.04)" />
          ))}
          <path
            d="M0,280 C30,260 60,300 90,240 C120,180 150,220 180,160 C210,110 240,150 270,90 L300,100 L300,400 L0,400 Z"
            fill="url(#chart-fill)"
          />
          <path
            d="M0,280 C30,260 60,300 90,240 C120,180 150,220 180,160 C210,110 240,150 270,90 L300,100"
            fill="none" stroke="#FF6B3D" strokeWidth="2.5" strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(255,107,61,0.6))" }}
          />
          {/* markers */}
          {[[90, 240], [180, 160], [270, 90]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="#FF6B3D" />
          ))}
        </svg>
      </div>
    );
  }
  // grid / ai scene
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(50% 40% at 50% 30%, ${palette.a} 0%, transparent 60%),
          radial-gradient(60% 40% at 50% 90%, ${palette.b} 0%, transparent 60%),
          linear-gradient(180deg, #0a0618, #0b0a18 50%, #05050a)
        `,
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      {/* concentric rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-40 w-40 rounded-full border border-violet/40" />
        <div className="absolute inset-4 rounded-full border border-accent/40" />
        <div className="absolute inset-10 rounded-full border border-white/20" />
        <div className="absolute inset-16 rounded-full bg-violet/30 blur-xl" />
      </div>
    </div>
  );
}

function Stars() {
  const dots = Array.from({ length: 26 });
  return (
    <>
      {dots.map((_, i) => {
        const top = (i * 37) % 100;
        const left = (i * 53) % 100;
        const size = (i % 3) + 1;
        const opacity = ((i % 5) + 3) / 10;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              boxShadow: size > 1 ? "0 0 6px rgba(255,255,255,0.8)" : undefined,
            }}
          />
        );
      })}
    </>
  );
}

/* --- status bar glyphs --- */
function SignalBars() {
  return (
    <svg viewBox="0 0 18 10" className="h-2.5 w-4" fill="currentColor" aria-hidden="true">
      <rect x="0" y="7" width="3" height="3" rx="0.6" />
      <rect x="5" y="5" width="3" height="5" rx="0.6" />
      <rect x="10" y="2" width="3" height="8" rx="0.6" />
      <rect x="15" y="0" width="3" height="10" rx="0.6" />
    </svg>
  );
}
function WifiGlyph() {
  return (
    <svg viewBox="0 0 14 10" className="h-2.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M1 3.5a10 10 0 0 1 12 0" />
      <path d="M3 6a6 6 0 0 1 8 0" />
      <circle cx="7" cy="8.5" r="0.9" fill="currentColor" />
    </svg>
  );
}
function BatteryGlyph() {
  return (
    <svg viewBox="0 0 22 10" className="h-2.5 w-5" aria-hidden="true">
      <rect x="0.5" y="0.5" width="19" height="9" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.6" />
      <rect x="20.5" y="3.5" width="1.2" height="3" fill="currentColor" fillOpacity="0.6" />
      <rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor" />
    </svg>
  );
}


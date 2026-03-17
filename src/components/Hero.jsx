const headlines = [
  "Why the mass exodus from San Francisco is actually a myth",
  "Open-source AI model beats GPT-4 on coding benchmarks",
  "The forgotten engineer who invented the internet protocol",
  "Show HN: I built a real-time collaborative code editor",
];

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-20 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Hacker News,{" "}
          <span className="text-[#ff6600]">reimagined</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
          AI-generated editorial illustrations, one-line headline summaries,
          and the full HN experience — wrapped in a beautiful visual magazine
          for iOS.
        </p>

        <div className="mt-10">
          <a
            href="https://apps.apple.com/app/hackerroll"
            className="inline-flex items-center gap-2 bg-[#ff6600] hover:bg-[#e65c00] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>
        </div>

        <div className="mt-14 mx-auto max-w-xl rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 overflow-hidden">
          <p className="text-xs text-[#a1a1aa] uppercase tracking-widest mb-3 font-medium">
            AI Headline Summaries
          </p>
          <div className="h-7 overflow-hidden">
            <div className="ticker-animate">
              {headlines.map((h, i) => (
                <p key={i} className="h-7 text-sm text-white/80 truncate leading-7">
                  &ldquo;{h}&rdquo;
                </p>
              ))}
              <p className="h-7 text-sm text-white/80 truncate leading-7">
                &ldquo;{headlines[0]}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

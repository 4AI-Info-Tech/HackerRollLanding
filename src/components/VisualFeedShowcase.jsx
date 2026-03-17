const stories = [
  {
    gradient: "from-orange-600 to-red-700",
    title: "The Rise of Rust in Production Systems",
    headline: "Memory safety without garbage collection is reshaping how companies build infrastructure",
    points: 482,
    comments: 197,
  },
  {
    gradient: "from-blue-600 to-indigo-700",
    title: "Why SQLite Is Taking Over the Edge",
    headline: "A database born for embedded systems finds new life powering serverless applications",
    points: 631,
    comments: 284,
  },
  {
    gradient: "from-emerald-600 to-teal-700",
    title: "Show HN: An Open-Source Figma Alternative",
    headline: "Community-driven design tool aims to break the proprietary lock-in of creative software",
    points: 1024,
    comments: 412,
  },
];

export default function VisualFeedShowcase() {
  return (
    <section className="w-full py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Visual Feed
        </h2>
        <p className="text-[#a1a1aa] text-center mb-14 max-w-xl mx-auto">
          Every story becomes a card with AI-generated art and a one-line summary.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((s, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden"
            >
              <div className={`h-40 bg-gradient-to-br ${s.gradient} flex items-end p-4`}>
                <div className="w-8 h-8 rounded-md bg-white/20 backdrop-blur-sm" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[#a1a1aa] text-sm italic leading-relaxed mb-4">
                  &ldquo;{s.headline}&rdquo;
                </p>
                <div className="flex items-center gap-4 text-xs text-[#71717a]">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    {s.points}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    {s.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

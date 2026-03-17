const Check = () => (
  <svg className="w-4 h-4 text-[#ff6600] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Classic HN feed",
      "Full comment threads",
      "30 visual feed stories/day",
      "Article reader",
      "HN account integration",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$3.99",
    period: "/month",
    features: [
      "Everything in Free",
      "Unlimited visual feed",
      "AI headline summaries",
      "Push notifications",
      "Priority support",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Pricing
        </h2>
        <p className="text-[#a1a1aa] text-center mb-14 max-w-xl mx-auto">
          Start free. Upgrade when you want more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 ${
                plan.highlighted
                  ? "bg-white/[0.05] border-2 border-[#ff6600]"
                  : "bg-white/[0.03] border border-white/[0.06]"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block text-xs font-semibold text-[#ff6600] uppercase tracking-wider mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-white text-xl font-bold">{plan.name}</h3>
              <div className="mt-2 mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-[#a1a1aa] text-sm ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#d4d4d8]">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.apple.com/app/hackerroll"
                className={`block text-center text-sm font-semibold py-3 rounded-lg transition-colors ${
                  plan.highlighted
                    ? "bg-[#ff6600] hover:bg-[#e65c00] text-white"
                    : "bg-white/[0.06] hover:bg-white/[0.1] text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

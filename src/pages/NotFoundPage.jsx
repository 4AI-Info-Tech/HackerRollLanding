import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="w-full pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff6600]">
          404
        </p>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#a1a1aa]">
          The page you requested does not exist or may have moved. Use one of the links
          below to get back to HackerRoll.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#ff6600] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#ff7a24]"
          >
            Go to homepage
          </Link>
          <Link
            to="/privacy"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.1] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/[0.24] hover:bg-white/[0.03]"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.1] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/[0.24] hover:bg-white/[0.03]"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
}

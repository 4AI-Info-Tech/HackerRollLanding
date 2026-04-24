import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons.jsx";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center py-24">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
          404 · signal lost
        </div>
        <h1 className="mt-4 font-display text-[44px] font-semibold leading-[0.98] tracking-[-0.02em] text-text sm:text-[64px]">
          That page is <span className="text-mute-soft">off the wire.</span>
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-mute">
          The story you were looking for didn't render. Try the home feed, or dig through our field notes.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/"
            id="cta-404-home"
            data-event="nav_404_home_click"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-[13px] font-semibold text-ink-0"
          >
            Home <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/blog"
            id="cta-404-blog"
            data-event="nav_404_blog_click"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink-2/60 px-4 py-2.5 text-[13px] font-medium text-text/90"
          >
            Field notes
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-line bg-ink-0">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
              <span className="font-display text-[15px] font-semibold tracking-tight text-text">
                newsroll<span className="text-accent">.</span>app
              </span>
            </div>
            <p className="mt-3 max-w-sm text-[12px] leading-relaxed text-mute">
              The news, broadcast. Built in the open. No autoplay ads, no doomposting, no infinite newsletters.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-[12px] text-mute">
            <a
              id="link-blog"
              data-event="footer_blog_click"
              href="/blog"
              className="transition-colors hover:text-text"
            >
              Blog
            </a>
            <span className="h-3 w-px bg-line-strong" />
            <a
              id="link-advertise"
              data-event="footer_advertise_click"
              href="/advertise"
              className="transition-colors hover:text-text"
            >
              Advertise
            </a>
            <span className="h-3 w-px bg-line-strong" />
            <a
              id="link-privacy"
              data-event="footer_privacy_click"
              href="/privacy"
              className="transition-colors hover:text-text"
            >
              Privacy
            </a>
            <span className="h-3 w-px bg-line-strong" />
            <a
              id="link-terms"
              data-event="footer_terms_click"
              href="/terms"
              className="transition-colors hover:text-text"
            >
              Terms
            </a>
            <span className="h-3 w-px bg-line-strong" />
            <a
              id="link-press"
              data-event="footer_press_click"
              href="mailto:press@newsroll.app"
              className="transition-colors hover:text-text"
            >
              Press
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-mute/80 md:flex-row md:items-center">
          <span>© {year} Newsroll Labs · All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Operational · v0.1.0
          </span>
        </div>
      </div>
    </footer>
  );
}

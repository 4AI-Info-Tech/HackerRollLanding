import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppleIcon } from "./Icons.jsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-300",
        scrolled || !onHome
          ? "border-b border-line bg-ink-0/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="Newsroll home">
          <LogoMark />
          <span className="font-display text-[17px] font-semibold tracking-tight text-text">
            newsroll<span className="text-accent">.</span>app
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] text-mute md:flex">
          {onHome ? (
            <a href="#features" className="transition-colors hover:text-text">Features</a>
          ) : (
            <Link to="/#features" className="transition-colors hover:text-text">Features</Link>
          )}
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/advertise">Advertise</NavItem>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute/70">
            v0.1 · beta
          </span>
        </nav>

        <a
          id="cta-header-download"
          data-event="download_click_header"
          data-surface="header"
          href="https://apps.apple.com/app/id6761051035"
          target="_blank"
          rel="noopener"
          className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink-2/70 px-3.5 py-2 text-[13px] font-medium text-text transition-all hover:border-accent/60 hover:bg-ink-2 hover:shadow-[0_0_0_4px_rgba(109,228,255,0.08)]"
        >
          <AppleIcon className="h-4 w-4 text-text" />
          <span>Download</span>
          <span className="ml-1 hidden h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] sm:inline-block" />
        </a>
      </div>
    </header>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      data-event="nav_link_click"
      data-target={to}
      className={({ isActive }) =>
        [
          "relative transition-colors",
          isActive ? "text-text" : "text-mute hover:text-text",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
          )}
        </>
      )}
    </NavLink>
  );
}

function LogoMark() {
  return (
    <span
      className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-[9px] border border-line-strong bg-ink-2"
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-[conic-gradient(from_200deg_at_50%_50%,rgba(109,228,255,0.55),rgba(178,140,255,0.45),rgba(255,107,61,0.35),rgba(109,228,255,0.55))] opacity-80 blur-[2px]" />
      <span className="absolute inset-[2px] rounded-[7px] bg-ink-1" />
      <span className="relative font-display text-[13px] font-semibold tracking-tight text-text">
        N
      </span>
    </span>
  );
}

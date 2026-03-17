export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#ff6600] flex items-center justify-center">
            <span className="text-white font-bold text-sm font-[var(--font-display)]">H</span>
          </div>
          <span className="text-white font-semibold text-lg">HackerRoll</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#features" className="text-sm text-[#a1a1aa] hover:text-white transition-colors hidden sm:block">
            Features
          </a>
          <a href="#pricing" className="text-sm text-[#a1a1aa] hover:text-white transition-colors hidden sm:block">
            Pricing
          </a>
          <a
            href="https://apps.apple.com/app/hackerroll"
            className="text-sm font-medium text-white bg-[#ff6600] hover:bg-[#e65c00] px-4 py-2 rounded-lg transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

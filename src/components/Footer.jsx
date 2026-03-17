export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-[#ff6600] flex items-center justify-center">
                <span className="text-white font-bold text-xs font-[var(--font-display)]">H</span>
              </div>
              <span className="text-white font-semibold">HackerRoll</span>
            </div>
            <p className="text-sm text-[#71717a] max-w-xs">
              Hacker News, reimagined as a visual magazine for iOS.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-[#71717a] hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm text-[#71717a] hover:text-white transition-colors">Pricing</a></li>
              <li><a href="https://apps.apple.com/app/hackerroll" className="text-sm text-[#71717a] hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-[#71717a] hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-[#71717a] hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] text-center">
          <p className="text-xs text-[#52525b]">
            &copy; {new Date().getFullYear()} HackerRoll. All rights reserved. Not affiliated with Y Combinator.
          </p>
        </div>
      </div>
    </footer>
  );
}

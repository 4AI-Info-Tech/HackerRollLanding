export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(109,228,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(178,140,255,0.05),transparent_70%)]" />
      {/* Hairline grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent_80%)] opacity-60" />
      {/* Ambient glow blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-[20%] -right-40 h-[480px] w-[480px] rounded-full bg-violet/10 blur-[140px]" />
      {/* Grain */}
      <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />
    </div>
  );
}

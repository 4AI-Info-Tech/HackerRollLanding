export default function PageHeader({ eyebrow, title, body }) {
  return (
    <div className="pt-10 sm:pt-16">
      <div className="inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
        <span className="h-px w-6 bg-line-strong" />
        {eyebrow}
      </div>
      <h1 className="mt-5 max-w-3xl font-display text-[40px] font-semibold leading-[0.98] tracking-[-0.025em] text-text sm:text-[56px]">
        {title}
      </h1>
      {body && (
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mute sm:text-[16px]">
          {body}
        </p>
      )}
    </div>
  );
}

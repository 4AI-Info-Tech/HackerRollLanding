export function AppleIcon({ className = "h-4 w-4" }) {
  // Authentic Apple logo outline
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.54 12.36c-.02-2.03 1.66-3 1.73-3.05-.94-1.38-2.41-1.57-2.93-1.59-1.25-.13-2.44.74-3.07.74-.64 0-1.62-.72-2.66-.7-1.37.02-2.63.8-3.34 2.03-1.42 2.47-.36 6.12 1.03 8.12.68.98 1.49 2.08 2.55 2.04 1.03-.04 1.42-.66 2.66-.66 1.24 0 1.59.66 2.67.64 1.1-.02 1.8-1 2.48-1.99.78-1.14 1.1-2.25 1.12-2.31-.02-.01-2.15-.83-2.24-3.27zM15.5 6.3c.56-.68.94-1.62.84-2.55-.81.03-1.79.54-2.37 1.22-.52.6-.97 1.56-.85 2.47.9.07 1.82-.46 2.38-1.14z"/>
    </svg>
  );
}

export function HeartIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.35-10-8.5C.5 9.5 2.5 6 6 6c2 0 3.3 1 4 2 .7-1 2-2 4-2 3.5 0 5.5 3.5 4 6.5-2.5 4.15-10 8.5-10 8.5z"/>
    </svg>
  );
}

export function CommentIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
    </svg>
  );
}

export function ShareIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  );
}

export function SparkleIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.8 5.6L19.5 9.4l-5.2 2.7L12 17l-2.3-4.9L4.5 9.4l5.7-1.8L12 2zM19 14l.9 2.6L22.5 18l-2.6.9L19 22l-.9-3.1-2.6-.9 2.6-1.4L19 14z"/>
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export function InfinityIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18.5 12c0-2.5-2-4.5-4.5-4.5-1.8 0-3.4 1-4 2.5-.6-1.5-2.2-2.5-4-2.5C3.5 7.5 1.5 9.5 1.5 12s2 4.5 4.5 4.5c1.8 0 3.4-1 4-2.5.6 1.5 2.2 2.5 4 2.5 2.5 0 4.5-2 4.5-4.5z"/>
    </svg>
  );
}

export function BoltIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>
    </svg>
  );
}

export function BrushIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20c0-3 3-3 3-6 0-2 1.5-3 3-3s3 1 3 3-3 3-3 6"/>
      <path d="M14 11l6-6a2.1 2.1 0 1 1 3 3l-6 6"/>
    </svg>
  );
}

export function GlobeIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/>
    </svg>
  );
}

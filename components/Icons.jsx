/* Lightweight inline icons — no icon library needed. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': 'true',
};

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3z" />
      <path d="M9.2 12.2l1.9 1.9 3.7-3.9" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function TagIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M11.4 3.6H20v8.6l-8.2 8.2a1.6 1.6 0 01-2.3 0l-6.3-6.3a1.6 1.6 0 010-2.3l8.2-8.2z" />
      <circle cx="16.2" cy="7.8" r="1.4" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.2 3.8h3l1.4 3.6-1.9 1.4a11.4 11.4 0 005.5 5.5l1.4-1.9 3.6 1.4v3a1.7 1.7 0 01-1.9 1.7C10.7 18 6 13.3 4.5 5.7A1.7 1.7 0 016.2 3.8z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.8 6.6l8.2 6 8.2-6" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15" />
      <path d="M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ToolIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.8 6.2a3.8 3.8 0 004.9 4.9l-8 8a2.1 2.1 0 01-3-3l8-8z" />
      <path d="M5.6 5.6l2.8 2.8" />
    </svg>
  );
}

export function StarIcon({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z" />
    </svg>
  );
}

export function ThreeStars({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-hidden="true">
      <StarIcon className="h-3 w-3" />
      <StarIcon className="h-4 w-4" />
      <StarIcon className="h-3 w-3" />
    </span>
  );
}

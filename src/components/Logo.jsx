import { Link } from 'react-router-dom';

export function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke="var(--gold)" strokeWidth="3.6" strokeLinejoin="round">
        <path d="M32 6 54.5 19v26L32 58 9.5 45V19Z" />
        <path d="M32 25.5 43 31.8v12.6L32 50.7l-11-6.3V31.8Z" />
      </g>
    </svg>
  );
}

export default function Logo({ to = '/' }) {
  return (
    <Link to={to} className="logo" aria-label="Zynera Connect home">
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name">ZYNERA</span>
        <span className="logo-sub">CONNECT</span>
      </span>
    </Link>
  );
}

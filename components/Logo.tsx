import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

export function Logo({ variant = "light", compact = false, className = "" }: LogoProps) {
  const isLight = variant === "light";
  const text = isLight ? "#f5f0e6" : "#06111f";
  const accent = "#d59b35";
  const signal = "#4cc7d9";

  return (
    <Link href="/" className={`logo-lockup ${className}`} aria-label={`${site.name} home`}>
      <svg
        aria-hidden="true"
        className="logo-symbol"
        viewBox="0 0 64 64"
        role="img"
      >
        <path
          d="M8 42c14.8-25 33.4-33.2 48-24.8"
          fill="none"
          stroke={accent}
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M14 46c12.5-15.4 25.5-20.6 39-15"
          fill="none"
          stroke={signal}
          strokeLinecap="round"
          strokeWidth="2.5"
          opacity=".82"
        />
        <path d="M26 19h13l-6.5 25L26 19Z" fill={text} />
        <path d="M32.5 44 39 19h7L32.5 52 19 19h7l6.5 25Z" fill={text} opacity=".74" />
        <circle cx="49" cy="18" r="3" fill={accent} />
      </svg>
      {!compact ? (
        <span className="logo-wordmark">
          <span>TIVION</span>
          <small>Space International</small>
        </span>
      ) : null}
    </Link>
  );
}

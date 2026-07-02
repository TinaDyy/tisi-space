import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "onDark" | "onLight";
  compact?: boolean;
  className?: string;
};

/**
 * Unified TIVION lockup. The orbital mark, globe, wordmark, and subtitle
 * render as one logo so the brand never separates into icon-only pieces.
 */
export function Logo({ variant = "onDark", compact = false, className = "" }: LogoProps) {
  const navy = variant === "onDark" ? "#ffffff" : "#08255c";
  const gold = "#c58a1d";
  const globeTop = variant === "onDark" ? "#ffffff" : "#5f9ad8";
  const globeBottom = variant === "onDark" ? "rgba(255,255,255,0.28)" : "rgba(201,221,242,0.45)";
  const globeLine = variant === "onDark" ? "rgba(255,255,255,0.5)" : "rgba(8,37,92,0.24)";
  const logoClass = compact ? "h-9 w-auto" : "h-9 w-auto sm:h-10";
  const gradientId = `tivion-earth-lockup-${variant}`;

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label={`${site.name} home`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 320 150"
        className={logoClass}
        role="img"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={globeTop} stopOpacity="0.9" />
            <stop offset="58%" stopColor={globeTop} stopOpacity="0.46" />
            <stop offset="100%" stopColor={globeBottom} />
          </linearGradient>
        </defs>

        <path
          d="M76 68 C 112 24, 191 14, 245 36"
          fill="none"
          stroke={navy}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M116 68 A 74 42 0 0 1 238 68"
          fill="none"
          stroke={globeLine}
          strokeWidth="2"
        />
        <path
          d="M121 68 A 69 39 0 0 1 233 68 Z"
          fill={`url(#${gradientId})`}
          opacity="0.9"
        />
        <path
          d="M101 68 C 143 37, 197 32, 236 43"
          fill="none"
          stroke={gold}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M235 30 L238 40 L248 43 L238 46 L235 56 L232 46 L222 43 L232 40 Z"
          fill={gold}
        />
        <g transform="translate(255 29) rotate(34)" fill={navy}>
          <rect x="-4" y="-4" width="8" height="8" rx="1.4" />
          <rect x="-17" y="-2.4" width="10" height="4.8" rx="1" />
          <rect x="7" y="-2.4" width="10" height="4.8" rx="1" />
          <circle cx="0" cy="-8" r="2.5" />
        </g>

        <g transform="translate(39 83)" fill={navy}>
          <path d="M0 0h38v8.5H24v36h-9.5v-36H0Z" />
          <rect x="50" width="9.5" height="44.5" />
          <path d="M76 0h10l14.5 30L115 0h10l-21.5 44.5h-6Z" />
          <path d="M93 4h15.5L101 20Z" fill={gold} />
          <rect x="139" width="9.5" height="44.5" />
          <path
            fillRule="evenodd"
            d="M177 0h28c9 0 16 7 16 16v12.5c0 9-7 16-16 16h-28c-9 0-16-7-16-16V16c0-9 7-16 16-16Zm2 8.5c-4.6 0-8.5 3.9-8.5 8.5v10.5c0 4.6 3.9 8.5 8.5 8.5h24c4.6 0 8.5-3.9 8.5-8.5V17c0-4.6-3.9-8.5-8.5-8.5Z"
          />
          <path d="M238 44.5V0h10l35 30V0h9.5v44.5h-10l-35-30v30Z" />
        </g>

        <g opacity="0.95">
          <rect x="39" y="135" width="25" height="1.5" fill={gold} />
          <rect x="255" y="135" width="25" height="1.5" fill={gold} />
          <text
            x="80"
            y="140"
            fill={navy}
            fontSize="10"
            fontWeight="600"
            letterSpacing="9"
            textLength="160"
            lengthAdjust="spacing"
          >
            SPACE INTERNATIONAL
          </text>
        </g>
      </svg>
    </Link>
  );
}

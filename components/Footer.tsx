import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { capabilities, navigation, site, solutions } from "@/lib/site";

const columnTitle =
  "mb-4 text-[10px] font-black uppercase tracking-[0.15em] text-black md:text-xs";
const columnLink =
  "block py-1 text-sm text-black/55 transition-colors duration-200 hover:text-black";

// Brand glyphs — this lucide-react version ships no social/brand icons.
function BrandIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const BRAND_PATHS = {
  linkedin:
    "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z",
  twitter:
    "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z",
  youtube:
    "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z",
  instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z",
  facebook:
    "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z",
} as const;

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, path: BRAND_PATHS.linkedin },
  { label: "Twitter", href: site.social.twitter, path: BRAND_PATHS.twitter },
  { label: "YouTube", href: site.social.youtube, path: BRAND_PATHS.youtube },
  { label: "Instagram", href: site.social.instagram, path: BRAND_PATHS.instagram },
  { label: "Facebook", href: site.social.facebook, path: BRAND_PATHS.facebook },
  { label: "Email", href: `mailto:${site.email}`, path: null },
];

const showFooterSocials = false;

export function Footer() {
  return (
    <footer className="border-t border-black bg-white px-6 py-14 md:px-12 lg:px-16">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-6">
        <div>
          <h2 className={columnTitle}>Capabilities</h2>
          {capabilities.map((item) => (
            <Link key={item.slug} href={item.href} className={columnLink}>
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <h2 className={columnTitle}>Solutions</h2>
          {solutions.map((item) => (
            <Link key={item.slug} href={item.href} className={columnLink}>
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <h2 className={columnTitle}>Company</h2>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={columnLink}>
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className={columnLink}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={columnLink}>
            Terms of Use
          </Link>
        </div>
        <div>
          <h2 className={columnTitle}>Contact</h2>
          <a href={`mailto:${site.email}`} className={columnLink}>
            {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={columnLink}>
            {site.phone}
          </a>
          <p className="py-1 text-sm text-black/55">{site.address}</p>
        </div>
        <div className="col-span-2">
          <h2 className={columnTitle}>Mission Briefings</h2>
          <p className="mb-4 text-sm text-black/55">
            Occasional updates on missions, sensors, and Earth-intelligence programs.
          </p>
          {/* Static for now — degrades to the contact page; wire to an API later. */}
          <form action="/contact" method="GET" className="flex max-w-sm">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full border border-black px-4 py-2.5 text-sm text-black outline-none"
            />
            <button
              type="submit"
              className="border border-l-0 border-black bg-black px-4 text-xs font-black uppercase tracking-wider !text-white transition hover:bg-white hover:!text-black"
            >
              Notify&nbsp;Me
            </button>
          </form>
          {showFooterSocials ? (
            <>
              <h2 className={`${columnTitle} mb-3 mt-6`}>Connect</h2>
              <div className="flex items-center gap-3">
                {socials.map(({ label, href, path }) => (
                  <a
                    key={label}
                    href={href || "#"}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    className="text-black/50 transition-colors duration-200 hover:text-black"
                  >
                    {path ? (
                      <BrandIcon path={path} className="h-4 w-4" />
                    ) : (
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    )}
                  </a>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-4 border-t border-black/20 pt-6 text-xs text-black/45 md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <Logo compact variant="onLight" />
      </div>
    </footer>
  );
}

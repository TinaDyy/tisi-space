import Link from "next/link";
import { ArrowRight } from "lucide-react";

const gradientPillClasses =
  "group inline-flex min-h-12 items-center justify-center gap-3 border border-black bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.16em] !text-white transition hover:bg-white hover:!text-black";

const eyebrowClasses =
  "text-[11px] font-black uppercase tracking-[0.2em] text-black/55";

export function GradientPill({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${gradientPillClasses} ${className}`}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

/** Same look as GradientPill for real <button> elements (form submits). */
export function gradientButtonClasses(className = "") {
  return `${gradientPillClasses} cursor-pointer border-0 ${className}`;
}

export function GlassPill({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center border border-black px-5 py-3 text-xs font-black uppercase tracking-[0.16em] !text-black transition hover:bg-black hover:!text-white ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 flex flex-col gap-4 ${className}`}>
      <p className={eyebrowClasses}>{eyebrow}</p>
      <h2 className="max-w-4xl text-3xl font-black leading-[1.02] text-black md:text-5xl">{title}</h2>
      {lead ? (
        <p className="max-w-2xl leading-snug text-black/65 md:text-lg">{lead}</p>
      ) : null}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-black/25 bg-white p-6 transition hover:border-black md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

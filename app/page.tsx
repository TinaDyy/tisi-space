import { Metadata } from "next";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ArchitectureDiagram, DeliveryConsole } from "@/components/Visuals";
import { VideoBackground } from "@/components/VideoBackground";
import { GlassPill, GradientPill, SectionHeader } from "@/components/ui";
import { capabilities, site, solutions, workflow } from "@/lib/site";

export const metadata: Metadata = {
  title: "Earth Intelligence Engineered End to End",
  description:
    "TIVION Space International designs satellite systems, mission infrastructure, remote-sensing data flows, and decision-support applications.",
  alternates: { canonical: "/" },
};

const engagements = [
  "Design a complete mission",
  "Develop a satellite or payload",
  "Establish mission and ground infrastructure",
  "Acquire Earth-observation data",
  "Monitor a region or asset",
  "Turn raw imagery into operational intelligence",
];

const principles = [
  "Multi-sensor intelligence",
  "SAR for dependable observation through darkness and many cloud conditions",
  "Configurable mission architectures",
  "Rapid data-to-decision workflows",
  "Automated monitoring with review paths",
  "Delivery through APIs, alerts, maps, imagery, and reports",
];

const sectionPadding = "px-6 py-16 md:px-12 md:py-24 lg:px-16";

/**
 * Editorial showcase rows for the landing capabilities section: short
 * display name + wide image band. Order matches `capabilities` in lib/site.
 * TODO: replace Unsplash placeholders with TIVION mission renders.
 */
const capabilityShowcase = [
  {
    name: "Constellation",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=82",
  },
  {
    name: "Payload",
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1800&q=82",
  },
  {
    name: "Operations",
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1800&q=82",
  },
  {
    name: "Data",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=82",
  },
  {
    name: "Analytics",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=82",
  },
] as const;

function CapabilityGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M2 19 C 6 8, 14 4, 21 6.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M17.5 2 L18.4 4.6 L21 5.5 L18.4 6.4 L17.5 9 L16.6 6.4 L14 5.5 L16.6 4.6 Z" fill="#d59b35" />
    </svg>
  );
}

function SectionRule({ label }: { label: string }) {
  return (
    <div className="mb-12 grid grid-cols-[auto_1fr] items-center gap-6">
      <h2 className="text-2xl font-black uppercase leading-none text-black md:text-3xl">
        {label}
      </h2>
      <div className="h-px bg-black/55" aria-hidden="true" />
    </div>
  );
}

function QuietLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:text-black/55"
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <section
        data-video-hero
        className="relative grid min-h-screen overflow-hidden border-b border-black pt-24 md:grid-cols-[minmax(5rem,1fr)_minmax(0,1040px)_minmax(2rem,1fr)]"
      >
        <VideoBackground overlay="hero" />
        <div className="hidden md:block" aria-hidden="true" />
        <div className="flex flex-col justify-end gap-8 px-6 py-10 md:px-12 md:py-14 lg:px-16">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] text-white md:text-7xl lg:text-8xl">
              Orbit
              <br />
              To Action
            </h1>
          </div>
          <div className="grid items-center gap-5">
            <p className="max-w-xl text-sm font-medium uppercase tracking-[0.14em] text-white/70">
              Earth intelligence, engineered end to end.
            </p>
          </div>
        </div>
        <a
          href="#engagement-overview"
          className="absolute bottom-10 right-6 z-10 inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.18em] !text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.95)] transition hover:!text-white/75 md:right-12 md:bottom-14 lg:right-16"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>

      <section className={sectionPadding} id="engagement-overview">
        <SectionRule label="System" />
        <div className="grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
              One integrated chain
            </p>
            <h2 className="mt-4 text-6xl font-black uppercase leading-[0.86] text-black md:text-8xl">
              Orbit
              <br />
              Action
            </h2>
            <p className="mt-6 max-w-md text-lg leading-snug text-black/65">
              Customers can engage at the exact layer their mission requires:
              architecture, payloads, operations, data, analytics, or delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GradientPill href="/contact">{site.cta.primary}</GradientPill>
              <GlassPill href="/capabilities">{site.cta.capabilities}</GlassPill>
            </div>
          </div>
          <div className="min-h-[360px] border-t border-black bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(255,255,255,0.12)_45%),url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1800&q=82')] bg-cover bg-center md:min-h-[520px]" />
        </div>
      </section>

      <section className={sectionPadding}>
        <SectionRule label="Engage" />
        <div className="grid border-l border-t border-black md:grid-cols-2 lg:grid-cols-3">
          {engagements.map((item, index) => (
            <article key={item} className="min-h-40 border-b border-r border-black p-6">
              <span className="text-4xl font-black text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 max-w-xs text-lg font-black leading-tight text-black">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionPadding} id="capability-overview">
        <SectionRule label="Capabilities" />
        <div className="flex flex-col gap-16 md:gap-20">
          {capabilityShowcase.map(({ name, image }, index) => {
            const item = capabilities[index];
            return (
              <article key={item.slug}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-5xl font-black uppercase leading-[0.9] text-black md:text-7xl">
                      {name}
                    </h3>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-black/55">
                      {item.title}
                    </p>
                  </div>
                  <a
                    href={item.href}
                    className="group inline-flex shrink-0 items-stretch border border-black"
                  >
                    <span className="flex w-12 items-center justify-center bg-black">
                      <CapabilityGlyph />
                    </span>
                    <span className="flex items-center px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition group-hover:bg-black group-hover:text-white">
                      Explore {name}
                    </span>
                  </a>
                </div>
                <div
                  className="mt-5 h-64 border-t border-black bg-cover bg-center md:h-[420px]"
                  style={{ backgroundImage: `url(${image})` }}
                  role="img"
                  aria-label={`${item.title} visual`}
                />
              </article>
            );
          })}
        </div>
      </section>

      <section className={sectionPadding}>
        <SectionRule label="Architecture" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Workflow"
            title="Aerospace complexity, explained operationally."
            lead="Every mission begins with a decision to support. The architecture, tasking plan, processing chain, and delivery interface are shaped around that operational outcome."
            className="mb-0"
          />
          <ol className="border-y border-black">
            {workflow.map(([title, copy], index) => (
              <li
                key={title}
                className="grid gap-4 border-b border-black/30 py-5 last:border-b-0 sm:grid-cols-[4rem_1fr]"
              >
                <span className="text-2xl font-black text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-black text-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-12">
          <ArchitectureDiagram />
        </div>
      </section>

      <section className={sectionPadding}>
        <SectionRule label="Solutions" />
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Programs"
              title="Monitoring for material change on Earth."
              lead="Each solution defines what must be observed, how it should be analyzed, what the customer receives, and which decision it supports."
              className="mb-8"
            />
            <GlassPill href="/solutions">View all solutions</GlassPill>
          </div>
          <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {solutions.map((solution) => (
              <article key={solution.slug} className="border-t border-black pt-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/45">
                  Operational area
                </span>
                <h3 className="mt-3 text-lg font-black text-black">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65">
                  {solution.problem}
                </p>
                <div className="mt-5">
                  <QuietLink href={solution.href}>View</QuietLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionPadding}>
        <SectionRule label="Principles" />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="How we build"
            title="Designed for dependable delivery, not spectacle."
            lead="The strongest system is often the clearest one: selected sensors, transparent processing, direct outputs, and delivery channels customers can use in existing operations."
            className="mb-0"
          />
          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle} className="border-t border-black pt-4">
                <span className="text-sm font-semibold leading-relaxed text-black/70">
                  {principle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={sectionPadding}>
        <SectionRule label="Delivery" />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Data delivery"
              title="Built for teams that need usable intelligence."
              lead="Delivery can include secure geospatial interfaces, APIs, downloadable imagery, change-detection layers, alerts, notifications, executive reports, and custom operational dashboards."
              className="mb-8"
            />
            <div className="flex flex-wrap gap-4">
              <GradientPill href="/technology">Explore Technology</GradientPill>
              <GlassPill href="/contact">Plan a Workflow</GlassPill>
            </div>
          </div>
          <DeliveryConsole />
        </div>
      </section>

      <section className="border-y border-black px-6 py-16 text-center md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
          <h2 className="text-4xl font-black uppercase leading-[1.05] text-black md:text-6xl">
            Build the mission. Observe the change. Act with clarity.
          </h2>
          <p className="max-w-2xl leading-snug text-black/65 md:text-lg">
            Bring a region, asset, event, or strategic question. We will map the
            sensing architecture, data path, and intelligence output needed to
            support the decision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GradientPill href="/contact">{site.cta.requirements}</GradientPill>
            <GlassPill href="/capabilities">{site.cta.capabilities}</GlassPill>
          </div>
        </div>
      </section>
    </>
  );
}

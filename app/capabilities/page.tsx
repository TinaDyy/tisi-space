import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GlassCard, GradientPill } from "@/components/ui";
import { capabilities, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Satellite mission design, payload engineering, mission operations, Earth-observation data, and analytics capabilities.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Engage at any layer of the Earth-intelligence chain."
        lead="TIVION supports missions from early requirements through satellite architecture, payload selection, operations, data access, analytics, and industry reporting."
      />
      <section className="flex flex-col gap-20 px-6 pb-24 pt-8 md:px-12 md:pt-10 lg:px-16">
        {capabilities.map((item) => (
          <article className="scroll-mt-28" id={item.slug} key={item.slug}>
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div className="flex flex-col items-start gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">
                  {item.eyebrow}
                </span>
                <h2 className="text-2xl font-black text-black md:text-4xl">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-black/65">{item.summary}</p>
                {item.slug === "payload-engineering" ? (
                  <p className="leading-relaxed text-black/65">
                    SAR uses active radar sensing to observe the Earth through
                    darkness and many cloud conditions, making it valuable when
                    dependable observation matters more than perfect weather.
                  </p>
                ) : null}
                <GradientPill href="/contact" className="mt-2">
                  {site.cta.primary}
                </GradientPill>
              </div>
              <GlassCard>
                <h3 className="mb-4 text-sm font-black uppercase tracking-[0.15em] text-black">
                  Program elements
                </h3>
                <ul className="flex list-disc flex-col gap-3 pl-4 marker:text-black">
                  {item.details.map((detail) => (
                    <li key={detail} className="text-sm leading-relaxed text-black/65">
                      {detail}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

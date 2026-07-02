import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GlassCard, GradientPill } from "@/components/ui";
import { capabilities, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Space-air data services, satellite operations management, SAR payload development, and remote-sensing application delivery.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Commercial space capability across data, operations, and systems."
        lead="TIVION supports customers with space-air remote-sensing data services, trusted satellite lifecycle operations, SAR payload development, satellite-system architecture, processing, products, and application solutions."
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
                {item.slug === "satellite-system-development" ? (
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

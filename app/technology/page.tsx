import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ArchitectureDiagram } from "@/components/Visuals";
import { GlassCard, GradientPill, SectionHeader } from "@/components/ui";
import { site, technology } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Sensor modalities, ground and processing architecture, data pipelines, delivery interfaces, and security-minded engineering principles.",
  alternates: { canonical: "/technology" },
};

const sectionPadding = "px-6 py-14 md:px-12 lg:px-16";

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Transparent architecture for practical Earth intelligence."
        lead="The technology story is deliberately clear: sensors collect evidence, ground systems move it, pipelines prepare it, analytics interpret it, and delivery interfaces place it in operational hands."
      />

      <section className={sectionPadding}>
        <SectionHeader
          eyebrow="Sensor modalities"
          title="Choose the observation layer the mission needs."
          lead="Missions can combine radar, optical, spectral, and complementary sources when the decision requires multiple kinds of evidence."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {technology.sensors.map(([title, copy]) => (
            <GlassCard key={title}>
              <h3 className="mb-3 text-lg font-black text-black">{title}</h3>
              <p className="text-sm leading-relaxed text-black/65">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className={sectionPadding}>
        <SectionHeader
          eyebrow="Architecture"
          title="Ground and processing flow."
          lead="The architecture separates mission control, processing, geospatial infrastructure, analytics, and customer delivery so each layer can be scoped, secured, and improved independently."
        />
        <ArchitectureDiagram />
      </section>

      <section className={sectionPadding}>
        <SectionHeader
          eyebrow="Pipeline"
          title="From collection to distribution."
          lead="Processing levels and review depth are configured to the mission, data source, decision timeline, and delivery format."
        />
        <div className="flex flex-wrap gap-3">
          {technology.pipeline.map((step, index) => (
            <span
              key={step}
              className="inline-flex items-center gap-2 border border-black/25 px-4 py-2 text-sm text-black/70"
            >
              <span className="text-xs font-black text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step}
            </span>
          ))}
        </div>
      </section>

      <section className={`${sectionPadding} pb-24`}>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Delivery interfaces"
              title="Interfaces that fit the customer workflow."
              lead="Delivery can include secure portals, API access, event alerts, standard geospatial formats, custom integrations, and operational reporting."
              className="mb-8"
            />
            <GradientPill href="/contact">{site.cta.primary}</GradientPill>
          </div>
          <GlassCard>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.15em] text-black">
              Security and reliability
            </h3>
            <ul className="flex list-disc flex-col gap-3 pl-4 marker:text-black">
              {technology.security.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-black/65">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>
    </>
  );
}

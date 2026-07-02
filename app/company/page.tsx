import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GlassCard, GradientPill, SectionHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Mission, vision, engineering principles, operating model, customer focus, and partnership approach for TIVION Space International.",
  alternates: { canonical: "/company" },
};

const principles = [
  "Put the customer mission first and define success in operational terms.",
  "Treat service delivery as a core product, from requirements through handover.",
  "Use creative engineering to make sophisticated space capability practical.",
  "Ground every program in credible SAR, satellite, data, and application technology.",
  "Build modular systems across payloads, operations, data platforms, and applications.",
  "Document milestones, assumptions, quality controls, and delivery responsibilities clearly.",
];

const sectionPadding = "px-6 py-14 md:px-12 lg:px-16";

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A commercial space company built around data, operations, and SAR systems."
        lead={`${site.name} develops the operational chain behind Earth intelligence: SAR payload and satellite-system programs, satellite operations management, data reception and processing, product generation, and remote-sensing application solutions for government and enterprise customers.`}
      />
      <section className={sectionPadding}>
        <div className="grid gap-4 lg:grid-cols-2">
          <GlassCard>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
              Mission
            </p>
            <h2 className="text-xl font-black leading-snug text-black md:text-2xl">
              Make space-air remote sensing, SAR capability, and satellite
              operations accessible as practical services customers can use.
            </h2>
          </GlassCard>
          <GlassCard>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
              Vision
            </p>
            <h2 className="text-xl font-black leading-snug text-black md:text-2xl">
              A competitive Earth-intelligence ecosystem where data, satellite
              infrastructure, and applications move from orbit to action.
            </h2>
          </GlassCard>
        </div>
      </section>
      <section className={sectionPadding}>
        <SectionHeader
          eyebrow="Operating model"
          title="Customer first, service led, creative in approach, grounded in technology."
          lead="TIVION works across the commercial space value chain: satellite and SAR payload development, in-orbit operations, ground reception, data processing, data products, value-added applications, and industry-specific solutions."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <GlassCard key={principle} className="!p-5">
              <span className="mb-3 block text-2xl font-black text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-semibold leading-relaxed text-black/70">
                {principle}
              </h3>
            </GlassCard>
          ))}
        </div>
      </section>
      <section className={`${sectionPadding} pb-24`}>
        <SectionHeader
          eyebrow="Partnership approach"
          title="Built to collaborate across the value chain."
          lead="TIVION can support a focused data-service requirement, a hosted satellite operations workflow, a SAR payload or small-satellite development effort, a ground-to-cloud data platform, or a full remote-sensing application program. The engagement model is scoped around the customer requirement rather than a fixed product box."
        />
        <GradientPill href="/contact">{site.cta.primary}</GradientPill>
      </section>
    </>
  );
}

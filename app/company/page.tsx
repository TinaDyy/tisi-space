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
  "Start with the operational decision, then design the observation system.",
  "Separate confirmed capability from future ambition in customer communication.",
  "Use modular architectures so missions can begin focused and expand responsibly.",
  "Prefer interoperable formats and customer-controlled workflows.",
  "Apply human review where automated signals affect high-consequence decisions.",
  "Document milestones, assumptions, and delivery responsibilities clearly.",
];

const sectionPadding = "px-6 py-14 md:px-12 lg:px-16";

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Making space-based observation practical for real operations."
        lead={`${site.name} is building an independent Earth-intelligence company for customers who need to understand material change on Earth quickly enough to respond intelligently.`}
      />
      <section className={sectionPadding}>
        <div className="grid gap-4 lg:grid-cols-2">
          <GlassCard>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
              Mission
            </p>
            <h2 className="text-xl font-black leading-snug text-black md:text-2xl">
              Make sophisticated space-based observation accessible as a
              practical operational capability.
            </h2>
          </GlassCard>
          <GlassCard>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
              Vision
            </p>
            <h2 className="text-xl font-black leading-snug text-black md:text-2xl">
              A world where organizations can understand material change on
              Earth in time to act.
            </h2>
          </GlassCard>
        </div>
      </section>
      <section className={sectionPadding}>
        <SectionHeader
          eyebrow="Operating model"
          title="Independent, modular, and mission-led."
          lead="TIVION works with governments, infrastructure operators, enterprise customers, investors, and strategic partners across mission development, payload and system engineering, data services, monitoring programs, and application delivery."
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
          lead="TIVION can support a focused analytics program, a satellite-data access workflow, a ground-segment architecture, or a broader mission development effort. The engagement model is scoped around the customer requirement rather than a fixed product box."
        />
        <GradientPill href="/contact">{site.cta.primary}</GradientPill>
      </section>
    </>
  );
}

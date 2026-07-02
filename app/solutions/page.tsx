import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GlassCard, GradientPill } from "@/components/ui";
import { solutions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Earth-observation solutions for agriculture, disasters, maritime awareness, energy, infrastructure, and environmental monitoring.",
  alternates: { canonical: "/solutions" },
};

const facetTitle =
  "mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-black/50";

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Operational monitoring for land, water, infrastructure, and risk."
        lead="Each solution is configured around the customer question, the observation method, the analytic output, and the decision that follows."
      />
      <section className="flex flex-col gap-20 px-6 pb-24 pt-8 md:px-12 md:pt-10 lg:px-16">
        {solutions.map((solution) => (
          <article className="scroll-mt-28" id={solution.slug} key={solution.slug}>
            <div className="mb-8 flex flex-col gap-4">
              <h2 className="text-2xl font-black text-black md:text-4xl">
                {solution.title}
              </h2>
              <p className="max-w-2xl leading-snug text-black/65 md:text-lg">
                {solution.problem}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <GlassCard className="!p-5">
                <h3 className={facetTitle}>Observation</h3>
                <p className="text-sm leading-relaxed text-black/65">{solution.observe}</p>
              </GlassCard>
              <GlassCard className="!p-5">
                <h3 className={facetTitle}>Analysis</h3>
                <p className="text-sm leading-relaxed text-black/65">{solution.analyze}</p>
              </GlassCard>
              <GlassCard className="!p-5">
                <h3 className={facetTitle}>Delivery</h3>
                <p className="text-sm leading-relaxed text-black/65">{solution.deliver}</p>
              </GlassCard>
              <GlassCard className="!p-5">
                <h3 className={facetTitle}>Decisions</h3>
                <p className="text-sm leading-relaxed text-black/65">{solution.decisions}</p>
              </GlassCard>
            </div>
            <GradientPill href="/contact" className="mt-8">
              {site.cta.primary}
            </GradientPill>
          </article>
        ))}
      </section>
    </>
  );
}

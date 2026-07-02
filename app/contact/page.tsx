import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/ui";
import { inquiryCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TIVION Space International about satellite mission development, payload engineering, Earth-observation data, analytics, or partnerships.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss a mission requirement."
        lead="Share the operational question, region, timeline, and desired output. TIVION will use that context to shape a practical next conversation."
      />
      <section className="px-6 pb-24 pt-8 md:px-12 md:pt-10 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.2fr]">
          <aside className="flex flex-col gap-6">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
                Inquiry paths
              </p>
              <h2 className="text-2xl font-black text-black md:text-3xl">
                Start with the work to be done.
              </h2>
            </div>
            <GlassCard className="!p-6">
              <dl className="flex flex-col gap-3 text-sm">
                <div>
                  <dt className="font-bold text-black">Email</dt>
                  <dd className="text-black/65">{site.email}</dd>
                </div>
                <div>
                  <dt className="font-bold text-black">Phone</dt>
                  <dd className="text-black/65">{site.phone}</dd>
                </div>
                <div>
                  <dt className="font-bold text-black">Office</dt>
                  <dd className="text-black/65">{site.address}</dd>
                </div>
              </dl>
            </GlassCard>
            <GlassCard className="!p-6">
              <h3 className="mb-4 text-sm font-black uppercase tracking-[0.15em] text-black">
                Categories
              </h3>
              <ul className="flex list-disc flex-col gap-2 pl-4 marker:text-black">
                {inquiryCategories.map((category) => (
                  <li key={category} className="text-sm text-black/65">
                    {category}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

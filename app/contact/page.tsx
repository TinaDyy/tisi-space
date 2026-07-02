import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

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
        <div className="grid items-start gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <aside className="lg:sticky lg:top-28">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
                Direct contact
              </p>
              <h2 className="max-w-sm text-2xl font-black leading-tight text-black md:text-3xl">
                Send the essentials.
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-black/65">
                Include the region, decision timeline, data need, and the
                operational question you are trying to answer.
              </p>
            </div>
            <dl className="mt-8 divide-y divide-black/20 border-y border-black/25 text-sm">
              <div className="grid gap-1 py-4">
                <dt className="text-[10px] font-black uppercase tracking-[0.18em] text-black/50">
                  Email
                </dt>
                <dd className="text-black/70">{site.email}</dd>
              </div>
              <div className="grid gap-1 py-4">
                <dt className="text-[10px] font-black uppercase tracking-[0.18em] text-black/50">
                  Phone
                </dt>
                <dd className="text-black/70">{site.phone}</dd>
              </div>
              <div className="grid gap-1 py-4">
                <dt className="text-[10px] font-black uppercase tracking-[0.18em] text-black/50">
                  Office
                </dt>
                <dd className="text-black/70">{site.address}</dd>
              </div>
            </dl>
          </aside>
          <div>
            <div className="mb-6 border-b border-black pb-5">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
                Mission intake
              </p>
              <h2 className="mt-3 text-2xl font-black text-black md:text-3xl">
                Tell us what needs to be decided.
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

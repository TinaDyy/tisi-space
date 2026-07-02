import { Metadata } from "next";
import { IconDiagram } from "@/components/Visuals";
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
      <section className="page-hero">
        <span className="eyebrow">Capabilities</span>
        <h1>Engage at any layer of the Earth-intelligence chain.</h1>
        <p className="lead">
          TIVION supports missions from early requirements through satellite
          architecture, payload selection, operations, data access, analytics,
          and industry reporting.
        </p>
      </section>
      <section className="section">
        {capabilities.map((item, index) => (
          <article className="detail-block" id={item.slug} key={item.slug}>
            <div className="grid-2">
              <div>
                <IconDiagram index={index} />
                <span className="eyebrow">{item.eyebrow}</span>
                <h2>{item.title}</h2>
                <p className="muted">{item.summary}</p>
                {item.slug === "payload-engineering" ? (
                  <p className="muted">
                    SAR uses active radar sensing to observe the Earth through
                    darkness and many cloud conditions, making it valuable when
                    dependable observation matters more than perfect weather.
                  </p>
                ) : null}
                <div className="cta-row">
                  <a className="button primary" href="/contact">{site.cta.primary}</a>
                </div>
              </div>
              <div className="card">
                <h3>Program elements</h3>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

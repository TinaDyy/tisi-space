import { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/Visuals";
import { site, technology } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Sensor modalities, ground and processing architecture, data pipelines, delivery interfaces, and security-minded engineering principles.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Technology</span>
        <h1>Transparent architecture for practical Earth intelligence.</h1>
        <p className="lead">
          The technology story is deliberately clear: sensors collect evidence,
          ground systems move it, pipelines prepare it, analytics interpret it,
          and delivery interfaces place it in operational hands.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Sensor modalities</span>
            <h2>Choose the observation layer the mission needs.</h2>
          </div>
          <p className="muted">
            Missions can combine radar, optical, spectral, and complementary
            sources when the decision requires multiple kinds of evidence.
          </p>
        </div>
        <div className="grid-2">
          {technology.sensors.map(([title, copy]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p className="muted">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section paper-section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Architecture</span>
            <h2>Ground and processing flow.</h2>
          </div>
          <p className="lead">
            The architecture separates mission control, processing, geospatial
            infrastructure, analytics, and customer delivery so each layer can
            be scoped, secured, and improved independently.
          </p>
        </div>
        <ArchitectureDiagram />
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Pipeline</span>
            <h2>From collection to distribution.</h2>
          </div>
          <p className="muted">
            Processing levels and review depth are configured to the mission,
            data source, decision timeline, and delivery format.
          </p>
        </div>
        <div className="workflow">
          {technology.pipeline.map((step, index) => (
            <article className="workflow-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section paper-section">
        <div className="grid-2">
          <div>
            <span className="eyebrow">Delivery interfaces</span>
            <h2>Interfaces that fit the customer workflow.</h2>
            <p className="lead">
              Delivery can include secure portals, API access, event alerts,
              standard geospatial formats, custom integrations, and operational
              reporting.
            </p>
          </div>
          <div className="card">
            <span className="eyebrow">Security and reliability</span>
            <ul>
              {technology.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cta-row">
          <a className="button primary" href="/contact">{site.cta.primary}</a>
        </div>
      </section>
    </>
  );
}

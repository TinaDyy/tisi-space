import { Metadata } from "next";
import { solutions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Earth-observation solutions for agriculture, disasters, maritime awareness, energy, infrastructure, and environmental monitoring.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Solutions</span>
        <h1>Operational monitoring for land, water, infrastructure, and risk.</h1>
        <p className="lead">
          Each solution is configured around the customer question, the
          observation method, the analytic output, and the decision that follows.
        </p>
      </section>
      <section className="section">
        {solutions.map((solution) => (
          <article className="detail-block" id={solution.slug} key={solution.slug}>
            <div className="section-header">
              <div>
                <span className="eyebrow">Solution</span>
                <h2>{solution.title}</h2>
              </div>
              <p className="lead">{solution.problem}</p>
            </div>
            <div className="grid-5">
              <div className="card">
                <span className="mono-label">Problem</span>
                <p className="muted">{solution.problem}</p>
              </div>
              <div className="card">
                <span className="mono-label">Observation</span>
                <p className="muted">{solution.observe}</p>
              </div>
              <div className="card">
                <span className="mono-label">Analysis</span>
                <p className="muted">{solution.analyze}</p>
              </div>
              <div className="card">
                <span className="mono-label">Delivery</span>
                <p className="muted">{solution.deliver}</p>
              </div>
              <div className="card">
                <span className="mono-label">Decisions</span>
                <p className="muted">{solution.decisions}</p>
              </div>
            </div>
            <div className="cta-row">
              <a className="button primary" href="/contact">{site.cta.primary}</a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

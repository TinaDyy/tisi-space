import { Metadata } from "next";
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

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Company</span>
        <h1>Making space-based observation practical for real operations.</h1>
        <p className="lead">
          {site.name} is building an independent Earth-intelligence company for
          customers who need to understand material change on Earth quickly
          enough to respond intelligently.
        </p>
      </section>
      <section className="section paper-section">
        <div className="grid-2">
          <article>
            <span className="eyebrow">Mission</span>
            <h2>Make sophisticated space-based observation accessible as a practical operational capability.</h2>
          </article>
          <article>
            <span className="eyebrow">Vision</span>
            <h2>A world where organizations can understand material change on Earth in time to act.</h2>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Operating model</span>
            <h2>Independent, modular, and mission-led.</h2>
          </div>
          <p className="muted">
            TIVION works with governments, infrastructure operators, enterprise
            customers, investors, and strategic partners across mission
            development, payload and system engineering, data services,
            monitoring programs, and application delivery.
          </p>
        </div>
        <div className="grid-3">
          {principles.map((principle) => (
            <article className="principle-card" key={principle}>
              <h3>{principle}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="section paper-section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Partnership approach</span>
            <h2>Built to collaborate across the value chain.</h2>
          </div>
          <p className="lead">
            TIVION can support a focused analytics program, a satellite-data
            access workflow, a ground-segment architecture, or a broader mission
            development effort. The engagement model is scoped around the
            customer requirement rather than a fixed product box.
          </p>
        </div>
        <a className="button primary" href="/contact">{site.cta.primary}</a>
      </section>
    </>
  );
}

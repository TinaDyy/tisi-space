import { Metadata } from "next";
import { DeliveryConsole, HeroVisual, IconDiagram } from "@/components/Visuals";
import { capabilities, site, solutions, workflow } from "@/lib/site";

export const metadata: Metadata = {
  title: "Earth Intelligence Engineered End to End",
  description:
    "TIVION Space International designs satellite systems, mission infrastructure, remote-sensing data flows, and decision-support applications.",
  alternates: { canonical: "/" },
};

const principles = [
  "Multi-sensor intelligence",
  "SAR for dependable observation through darkness and many cloud conditions",
  "Configurable mission architectures",
  "Rapid data-to-decision workflows",
  "Automated monitoring with review paths",
  "Delivery through APIs, alerts, maps, imagery, and reports",
];

const trust = [
  "Mission-driven engineering",
  "Modular system architecture",
  "Security-conscious delivery",
  "Transparent project milestones",
  "Interoperable data formats",
  "Customer-controlled workflows",
  "Human-reviewed intelligence where required",
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroVisual />
        <div className="hero-content">
          <span className="eyebrow">Earth observation systems</span>
          <h1>Earth intelligence, engineered end to end.</h1>
          <p>
            We design satellite systems, operate mission infrastructure, and
            transform Earth-observation data into intelligence for decisions
            that cannot wait.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/contact">{site.cta.primary}</a>
            <a className="button secondary" href="/capabilities">{site.cta.capabilities}</a>
          </div>
        </div>
      </section>

      <section className="section paper-section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Company thesis</span>
            <h2>From orbit to action, one integrated system.</h2>
          </div>
          <p className="lead">
            {site.name} connects spacecraft, payloads, ground infrastructure,
            data processing, analytics, and operational applications so
            customers can engage at the exact level their mission requires.
          </p>
        </div>
        <div className="grid-3">
          {[
            "Design a complete mission",
            "Develop a satellite or payload",
            "Establish mission and ground infrastructure",
            "Acquire Earth-observation data",
            "Monitor a region or asset",
            "Turn raw imagery into operational intelligence",
          ].map((item) => (
            <article className="principle-card" key={item}>
              <span className="mono-label">Engagement</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="capability-overview">
        <div className="section-header">
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2>Build the system around the decision.</h2>
          </div>
          <p className="muted">
            The capability stack is designed for customers who need more than
            imagery. It joins mission design, sensing, operations, data access,
            analytics, and reporting into a controlled workflow.
          </p>
        </div>
        <div className="grid-5">
          {capabilities.map((item, index) => (
            <article className="card" key={item.slug}>
              <IconDiagram index={index} />
              <span className="mono-label">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p className="muted">{item.summary}</p>
              <a className="card-link" href={item.href}>Read capability</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section paper-section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Workflow</span>
            <h2>Aerospace complexity, explained operationally.</h2>
          </div>
          <p className="lead">
            Every mission begins with a decision to support. The architecture,
            tasking plan, processing chain, and delivery interface are then
            shaped around that operational outcome.
          </p>
        </div>
        <div className="workflow">
          {workflow.map(([title, copy], index) => (
            <article className="workflow-step" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p className="muted">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Solutions</span>
            <h2>Monitoring programs for material change on Earth.</h2>
          </div>
          <p className="muted">
            Each solution begins with the operational problem, then defines
            what must be observed, how it should be analyzed, what the customer
            receives, and which decision it supports.
          </p>
        </div>
        <div className="grid-3">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.slug}>
              <span className="mono-label">Operational area</span>
              <h3>{solution.title}</h3>
              <p className="muted">{solution.problem}</p>
              <a className="card-link" href={solution.href}>View solution</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section paper-section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Technical differentiation</span>
            <h2>Designed for dependable delivery, not spectacle.</h2>
          </div>
          <p className="lead">
            The strongest system is often the clearest one: selected sensors,
            transparent processing, direct outputs, and delivery channels the
            customer can use in existing operations.
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

      <section className="section">
        <div className="grid-2">
          <div>
            <span className="eyebrow">Data delivery</span>
            <h2>Built for teams that need usable intelligence.</h2>
            <p className="muted">
              Delivery can include secure geospatial interfaces, APIs,
              downloadable imagery, change-detection layers, alerts,
              notifications, executive reports, and custom operational
              dashboards.
            </p>
            <div className="cta-row">
              <a className="button primary" href="/technology">Explore technology</a>
              <a className="button secondary" href="/contact">Plan a workflow</a>
            </div>
          </div>
          <DeliveryConsole />
        </div>
      </section>

      <section className="section paper-section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Trust principles</span>
            <h2>Credibility without invented claims.</h2>
          </div>
          <p className="lead">
            TIVION communicates what can be responsibly built and delivered.
            Specific performance, certifications, and operational commitments
            are defined during project scoping.
          </p>
        </div>
        <div className="grid-3">
          {trust.map((item) => (
            <article className="principle-card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Start a mission</span>
            <h2>Build the mission. Observe the change. Act with clarity.</h2>
          </div>
          <div>
            <p className="muted">
              Bring a region, asset, event, or strategic question. We will map
              the sensing architecture, data path, and intelligence output
              needed to support the decision.
            </p>
            <div className="cta-row">
              <a className="button primary" href="/contact">{site.cta.requirements}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

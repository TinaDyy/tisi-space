import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Starter terms of use for TIVION Space International.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Terms</span>
        <h1>Terms of Use</h1>
        <p className="lead">
          These starter terms are provided for launch preparation and require
          legal review before use in production.
        </p>
      </section>
      <section className="section">
        <div className="legal-content">
          <p className="muted">Last updated: July 2, 2026</p>
          <h2>Use of the Website</h2>
          <p className="muted">
            The website provides general information about Earth-observation,
            satellite mission, data, and analytics services. It does not create
            a contract or commitment to deliver a specific technical result.
          </p>
          <h2>No Unsupported Reliance</h2>
          <p className="muted">
            Technical descriptions are general and must be confirmed through a
            written scope of work before being relied upon for procurement,
            operational, regulatory, or safety-critical decisions.
          </p>
          <h2>Intellectual Property</h2>
          <p className="muted">
            The site design, logo, diagrams, copy, and other materials are owned
            or controlled by {site.name}, except where otherwise stated.
          </p>
          <h2>Acceptable Use</h2>
          <p className="muted">
            Users may not interfere with the website, attempt unauthorized
            access, submit misleading inquiry information, or use the site in a
            way that violates applicable law.
          </p>
          <h2>Contact</h2>
          <p className="muted">
            Questions about these terms can be sent to {site.email}.
          </p>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Starter privacy policy for TIVION Space International.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Privacy</span>
        <h1>Privacy Policy</h1>
        <p className="lead">
          This starter policy explains how inquiry information may be handled.
          It should be reviewed by qualified counsel before public launch.
        </p>
      </section>
      <section className="section">
        <div className="legal-content">
          <p className="muted">Last updated: July 2, 2026</p>
          <h2>Information We Collect</h2>
          <p className="muted">
            We collect information submitted through the contact form, including
            name, work email, organization, role, country or region, inquiry
            category, project timeline, and message content.
          </p>
          <h2>How We Use Information</h2>
          <p className="muted">
            We use inquiry information to respond to requests, evaluate mission
            requirements, coordinate follow-up conversations, maintain security
            of the site, and improve the clarity of our services.
          </p>
          <h2>Sharing</h2>
          <p className="muted">
            We do not sell inquiry information. We may share information with
            service providers that help operate the website, deliver email, or
            support customer communication, subject to appropriate safeguards.
          </p>
          <h2>Retention and Security</h2>
          <p className="muted">
            Inquiry records should be retained only as long as needed for
            business, legal, and security purposes. The production deployment
            should define retention controls, access roles, and audit practices.
          </p>
          <h2>Contact</h2>
          <p className="muted">
            Privacy questions can be sent to {site.email}. Replace this contact
            information in the centralized site configuration before launch.
          </p>
        </div>
      </section>
    </>
  );
}

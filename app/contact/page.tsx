import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
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
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Discuss a mission requirement.</h1>
        <p className="lead">
          Share the operational question, region, timeline, and desired output.
          TIVION will use that context to shape a practical next conversation.
        </p>
      </section>
      <section className="section">
        <div className="form-shell">
          <aside>
            <span className="eyebrow">Inquiry paths</span>
            <h2>Start with the work to be done.</h2>
            <p className="muted">
              Contact details are centralized in the site configuration so they
              can be replaced before deployment without editing presentation
              components.
            </p>
            <div className="card">
              <p><strong>Email:</strong> {site.email}</p>
              <p><strong>Phone:</strong> {site.phone}</p>
              <p><strong>Office:</strong> {site.address}</p>
            </div>
            <div className="card">
              <h3>Categories</h3>
              <ul>
                {inquiryCategories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

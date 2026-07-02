import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Starter terms of use for TIVION Space International.",
  alternates: { canonical: "/terms" },
};

const heading = "mt-10 text-2xl font-bold tracking-tight text-black";
const paragraph = "mt-3 leading-relaxed text-black/65";
const list = "mt-3 list-disc space-y-2 pl-5 leading-relaxed text-black/65";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        lead="These starter terms are provided for launch preparation and require legal review before use in production."
      />
      <section className="px-6 pb-24 pt-8 md:px-12 md:pt-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm text-black/45">Last updated: July 2, 2026</p>

          <p className={paragraph}>
            These Terms of Use govern access to and use of the {site.name}
            website and related online materials. They are provided as starter
            terms for launch preparation and should be reviewed by qualified
            counsel before production use.
          </p>

          <h2 className={heading}>Use of the Website</h2>
          <p className={paragraph}>
            The website provides general information about Earth-observation,
            satellite mission, data, analytics, infrastructure, and
            decision-support services. You may use the website for lawful
            business and informational purposes, including learning about our
            capabilities and submitting a legitimate inquiry.
          </p>

          <h2 className={heading}>No Offer or Professional Advice</h2>
          <p className={paragraph}>
            Website content is provided for general informational purposes only.
            It is not an offer, acceptance, procurement commitment, engineering
            certification, regulatory opinion, legal advice, or operational
            instruction. Any project, deliverable, license, access right,
            service level, data product, or technical result must be confirmed
            in a separate written agreement signed by authorized representatives.
          </p>

          <h2 className={heading}>No Unsupported Reliance</h2>
          <p className={paragraph}>
            Technical descriptions are general and must be confirmed through a
            written scope of work before being relied upon for procurement,
            operational, regulatory, or safety-critical decisions.
            Satellite tasking, imagery availability, analytic outputs, revisit
            rates, latency, coverage, weather effects, cloud conditions, sensor
            constraints, and downstream decisions may depend on factors outside
            our control.
          </p>

          <h2 className={heading}>Inquiry Submissions</h2>
          <p className={paragraph}>
            If you submit an inquiry, you represent that the information is
            accurate to the best of your knowledge and that you have authority
            to share it. Do not submit classified, export-controlled, highly
            sensitive, regulated, or third-party confidential information through
            the public website unless an approved written agreement and transfer
            channel are in place. Submission of an inquiry does not create a
            customer relationship, confidentiality obligation, exclusivity,
            teaming arrangement, or duty to respond.
          </p>

          <h2 className={heading}>Intellectual Property</h2>
          <p className={paragraph}>
            The site design, logo, diagrams, copy, and other materials are owned
            or controlled by {site.name}, except where otherwise stated.
            You may not copy, modify, distribute, scrape, train models on,
            reverse engineer, frame, or commercially exploit website materials
            without prior written permission, except as allowed by applicable
            law. Third-party names, marks, data, imagery, and services remain
            the property of their respective owners.
          </p>

          <h2 className={heading}>Acceptable Use</h2>
          <p className={paragraph}>
            You agree not to misuse the website. Prohibited activity includes:
          </p>
          <ul className={list}>
            <li>Attempting unauthorized access to systems, accounts, networks, source code, or non-public information.</li>
            <li>Interfering with site operation through malware, denial-of-service activity, automated abuse, scraping, probing, or vulnerability exploitation.</li>
            <li>Submitting false, misleading, infringing, unlawful, malicious, or unauthorized information.</li>
            <li>Using the website in violation of sanctions, export-control, procurement, privacy, intellectual-property, or other applicable laws.</li>
            <li>Misrepresenting affiliation with {site.name} or using site content to imply endorsement without written permission.</li>
          </ul>

          <h2 className={heading}>Third-Party Services and Links</h2>
          <p className={paragraph}>
            The website may reference third-party services, platforms, imagery,
            maps, data sources, links, or integrations. We do not control
            third-party materials and are not responsible for their content,
            availability, security, policies, or performance. Access to
            third-party services may be governed by separate terms.
          </p>

          <h2 className={heading}>Availability and Changes</h2>
          <p className={paragraph}>
            We may update, suspend, remove, or restrict any part of the website
            at any time. Website content may be incomplete, outdated, or changed
            without notice, especially while the site is in launch preparation.
          </p>

          <h2 className={heading}>Disclaimers</h2>
          <p className={paragraph}>
            The website is provided on an &quot;as is&quot; and &quot;as available&quot; basis
            without warranties of any kind, whether express, implied, or
            statutory. To the maximum extent permitted by law, we disclaim
            warranties of accuracy, completeness, merchantability, fitness for a
            particular purpose, non-infringement, availability, security, and
            error-free operation.
          </p>

          <h2 className={heading}>Limitation of Liability</h2>
          <p className={paragraph}>
            To the maximum extent permitted by law, {site.name} and its
            officers, employees, contractors, and affiliates will not be liable
            for indirect, incidental, consequential, special, exemplary, or
            punitive damages, or for lost profits, lost data, business
            interruption, procurement decisions, operational decisions, or
            reliance on website content.
          </p>

          <h2 className={heading}>Indemnity</h2>
          <p className={paragraph}>
            You agree to defend, indemnify, and hold harmless {site.name} from
            claims, losses, liabilities, damages, costs, and expenses arising
            from your misuse of the website, violation of these terms,
            unauthorized submissions, or violation of applicable law or third
            party rights.
          </p>

          <h2 className={heading}>Governing Law</h2>
          <p className={paragraph}>
            The production version of these terms should identify the governing
            law, venue, dispute-resolution process, and any region-specific
            consumer or business terms that apply to the operating entity and
            target customers.
          </p>

          <h2 className={heading}>Changes to These Terms</h2>
          <p className={paragraph}>
            We may update these Terms of Use as the website, services, business
            model, or legal requirements change. The updated version should
            identify its effective date, and continued use of the website after
            updates constitutes acceptance of the revised terms to the extent
            permitted by law.
          </p>

          <h2 className={heading}>Contact</h2>
          <p className={paragraph}>
            Questions about these terms can be sent to {site.email}. Replace or
            confirm this contact information in the centralized site
            configuration before launch.
          </p>
        </div>
      </section>
    </>
  );
}

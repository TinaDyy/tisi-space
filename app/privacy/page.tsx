import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Starter privacy policy for TIVION Space International.",
  alternates: { canonical: "/privacy" },
};

const heading = "mt-10 text-2xl font-bold tracking-tight text-black";
const paragraph = "mt-3 leading-relaxed text-black/65";
const list = "mt-3 list-disc space-y-2 pl-5 leading-relaxed text-black/65";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        lead="This starter policy explains how inquiry information may be handled. It should be reviewed by qualified counsel before public launch."
      />
      <section className="px-6 pb-24 pt-8 md:px-12 md:pt-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm text-black/45">Last updated: July 2, 2026</p>

          <p className={paragraph}>
            This Privacy Policy describes how {site.name} collects, uses,
            discloses, and safeguards information received through this website
            and related inquiry channels. It is intended as a launch-ready
            starter policy and should be reviewed by qualified counsel before
            production use.
          </p>

          <h2 className={heading}>Information We Collect</h2>
          <p className={paragraph}>
            We collect information that visitors choose to provide when they
            contact us, request information, or discuss a potential mission,
            data, analytics, or infrastructure engagement. This may include:
          </p>
          <ul className={list}>
            <li>Name, work email address, phone number, organization, title, and role.</li>
            <li>Country or region, area of interest, inquiry category, project timeline, and message content.</li>
            <li>Operational context voluntarily provided in an inquiry, such as regions of interest, monitoring objectives, data requirements, or procurement needs.</li>
            <li>Business correspondence and follow-up information exchanged after the initial inquiry.</li>
          </ul>

          <h2 className={heading}>Website and Technical Information</h2>
          <p className={paragraph}>
            The website may collect limited technical information needed to
            operate, secure, and improve the site, such as IP address, browser
            type, device information, referring pages, pages visited, time
            stamps, and basic diagnostics. If analytics, hosting logs, cookies,
            or similar technologies are enabled in production, this section
            should be updated to identify those tools and any available choices.
          </p>

          <h2 className={heading}>How We Use Information</h2>
          <p className={paragraph}>
            We use collected information for business and operational purposes,
            including to:
          </p>
          <ul className={list}>
            <li>Respond to inquiries and coordinate follow-up conversations.</li>
            <li>Evaluate mission requirements, technical feasibility, project scope, and customer needs.</li>
            <li>Prepare proposals, demonstrations, statements of work, or other pre-contract materials.</li>
            <li>Operate, monitor, troubleshoot, and secure the website and communication systems.</li>
            <li>Maintain internal records, improve service descriptions, and support compliance obligations.</li>
          </ul>

          <h2 className={heading}>Sharing</h2>
          <p className={paragraph}>
            We do not sell inquiry information. We may share information with
            service providers, contractors, or professional advisers who help us
            operate the website, host systems, deliver email, manage customer
            communication, evaluate technical requests, or support legal,
            accounting, security, and compliance functions. We may also disclose
            information if required by law, to protect rights and safety, or in
            connection with a merger, financing, acquisition, or similar business
            transaction.
          </p>

          <h2 className={heading}>Retention and Security</h2>
          <p className={paragraph}>
            Inquiry records should be retained only as long as needed for the
            purposes described in this policy, including business, legal,
            security, audit, and dispute-resolution needs. The production
            deployment should define retention schedules, access roles, backup
            practices, and secure deletion procedures. We use administrative,
            technical, and organizational safeguards designed to protect
            information, but no website, network, or storage system can be
            guaranteed to be completely secure.
          </p>

          <h2 className={heading}>Confidential and Sensitive Information</h2>
          <p className={paragraph}>
            Visitors should not submit classified, export-controlled, highly
            sensitive, regulated, or third-party confidential information through
            the public contact form unless a written agreement and approved
            transfer channel are in place. Mission details submitted through the
            website should be limited to the information reasonably needed to
            begin a business conversation.
          </p>

          <h2 className={heading}>Your Choices</h2>
          <p className={paragraph}>
            You may request that we update, correct, or delete inquiry
            information associated with you, subject to legal, security,
            contractual, and legitimate business retention needs. If you receive
            optional marketing communications from us, you may opt out by using
            the instructions in the communication or by contacting us.
          </p>

          <h2 className={heading}>International Visitors</h2>
          <p className={paragraph}>
            The website may be operated from, and information may be processed
            in, jurisdictions different from where a visitor is located. Where
            required, production privacy notices should be expanded to address
            applicable regional privacy rights, transfer mechanisms, and local
            contact requirements.
          </p>

          <h2 className={heading}>Updates to This Policy</h2>
          <p className={paragraph}>
            We may update this Privacy Policy as the website, services, vendors,
            or legal requirements change. The updated version should identify
            its effective date, and material changes should be communicated
            through an appropriate notice.
          </p>

          <h2 className={heading}>Contact</h2>
          <p className={paragraph}>
            Privacy questions or requests can be sent to {site.email}. Replace
            or confirm this contact information in the centralized site
            configuration before launch.
          </p>
        </div>
      </section>
    </>
  );
}

# TIVION Space International Website

Production-ready corporate website for an independent aerospace and Earth-observation company. The site positions TIVION as an end-to-end Earth-intelligence partner spanning mission design, satellite and payload systems, ground operations, Earth-observation data, analytics, and industry-specific decision support.

## Technology Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4 plus custom CSS
- Native React client components for navigation and form state
- Server-side contact API route with validation, honeypot spam prevention, and basic rate limiting
- Resend-compatible email delivery through environment variables

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and update values:

- `NEXT_PUBLIC_SITE_URL`: canonical production URL.
- `NEXT_PUBLIC_LINKEDIN_URL`: optional LinkedIn URL. Leave blank to hide the footer link.
- `RESEND_API_KEY`: required for contact form delivery.
- `CONTACT_TO_EMAIL`: destination inbox for inquiries.
- `CONTACT_FROM_EMAIL`: verified sender identity for the email provider.

If the Resend variables are missing, `/api/contact` returns a clear configuration error instead of pretending the message was sent.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Deployment

Deploy as a standard Next.js application. Set all production environment variables in the hosting provider before enabling the contact form publicly. Confirm the email sender domain is verified with the delivery provider.

## Editing Site Content

Most editable company, navigation, contact, capability, solution, technology, metadata, CTA, and footer content lives in `lib/site.ts`.

To replace the company name, update:

- `site.name`
- `site.shortName`
- Metadata strings in route files where a highly tailored title is preferred
- Brand SVG files in `public/brand/`

To replace contact information, update `site.email`, `site.phone`, and `site.address` in `lib/site.ts`, plus contact delivery values in environment variables.

To update navigation, edit `navigation` in `lib/site.ts`. Every navigation item should point to a substantial route or anchored content section.

To edit capabilities and solutions, update `capabilities` and `solutions` in `lib/site.ts`. The homepage, footer, and detail pages consume that data.

## Brand Assets

The temporary logo system is stored in `public/brand/`:

- `logo-symbol.svg`
- `logo-horizontal.svg`
- `favicon.svg`
- `apple-touch-icon.svg`
- `og-image.svg`

The browser `.ico` favicon is `app/favicon.ico`. Replace it when the final brand system is approved.

## Contact Form Delivery

The contact form posts to `app/api/contact/route.ts`. It includes:

- Client-side validation
- Server-side validation
- Consent requirement
- Honeypot field
- Basic IP-window rate limiting
- Resend email submission when configured
- Explicit configuration failure when provider credentials are absent

## Claims Requiring Verification

Before public launch, verify or replace:

- Final company legal name and public contact details
- Any office, country, or regional presence
- Email sender domain and privacy contact
- Specific service performance commitments
- Sensor, satellite, payload, resolution, revisit, and processing claims
- Security, compliance, or certification statements
- Legal text in Privacy Policy and Terms of Use

The current site intentionally avoids unverified customers, contracts, certifications, funding, awards, founders, offices, launches, and proprietary performance claims.

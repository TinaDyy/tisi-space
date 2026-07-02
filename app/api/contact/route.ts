import { NextRequest, NextResponse } from "next/server";
import { inquiryCategories, timelines, site } from "@/lib/site";

type ContactPayload = Record<string, unknown>;

const requests = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const LIMIT = 5;

function asString(payload: ContactPayload, key: string) {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: ContactPayload) {
  const errors: Record<string, string> = {};
  const fullName = asString(payload, "fullName");
  const email = asString(payload, "email");
  const organization = asString(payload, "organization");
  const role = asString(payload, "role");
  const region = asString(payload, "region");
  const category = asString(payload, "category");
  const interest = asString(payload, "interest");
  const timeline = asString(payload, "timeline");
  const message = asString(payload, "message");
  const consent = asString(payload, "consent");
  const website = asString(payload, "website");

  if (website) errors.website = "Spam prevention field must remain empty.";
  if (fullName.length < 2) errors.fullName = "Full name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Valid email is required.";
  if (organization.length < 2) errors.organization = "Organization is required.";
  if (role.length < 2) errors.role = "Role is required.";
  if (region.length < 2) errors.region = "Country or region is required.";
  if (!inquiryCategories.includes(category as (typeof inquiryCategories)[number])) errors.category = "Valid category is required.";
  if (interest.length < 3) errors.interest = "Area of interest is required.";
  if (!timelines.includes(timeline as (typeof timelines)[number])) errors.timeline = "Valid timeline is required.";
  if (message.length < 20 || message.length > 4000) errors.message = "Message must be between 20 and 4000 characters.";
  if (consent !== "on") errors.consent = "Consent is required.";

  return {
    errors,
    data: { fullName, email, organization, role, region, category, interest, timeline, message },
  };
}

function rateLimit(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || "local";
  const now = Date.now();
  const current = requests.get(ip);
  if (!current || current.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= LIMIT) return false;
  current.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  if (!rateLimit(request)) {
    return NextResponse.json({ error: "Too many inquiries. Please try again later." }, { status: 429 });
  }

  const payload = (await request.json().catch(() => null)) as ContactPayload | null;
  if (!payload) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { errors, data } = validate(payload);
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      {
        error:
          "Contact delivery is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.",
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: data.email,
      subject: `${site.shortName} inquiry: ${data.category}`,
      text: [
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Organization: ${data.organization}`,
        `Role: ${data.role}`,
        `Region: ${data.region}`,
        `Category: ${data.category}`,
        `Area of interest: ${data.interest}`,
        `Timeline: ${data.timeline}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Email provider rejected the inquiry." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

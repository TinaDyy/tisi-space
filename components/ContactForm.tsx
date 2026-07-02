"use client";

import { FormEvent, useMemo, useState } from "react";
import { gradientButtonClasses } from "@/components/ui";
import { inquiryCategories, timelines } from "@/lib/site";

type FormState = Record<string, string>;
type Errors = Record<string, string>;

const initialState: FormState = {
  fullName: "",
  email: "",
  organization: "",
  role: "",
  region: "",
  category: "",
  interest: "",
  timeline: "",
  message: "",
  consent: "",
  website: "",
};

const labelClasses = "text-xs font-black uppercase tracking-[0.15em] text-black/60";
const inputClasses =
  "w-full border border-black/25 bg-white px-4 py-3 text-sm text-black placeholder-black/30 outline-none transition focus:border-black";
const errorClasses = "text-xs text-black";
const statusClasses =
  "border border-black bg-white p-4 text-sm text-black";

function validate(values: FormState) {
  const errors: Errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid work email.";
  if (values.organization.trim().length < 2) errors.organization = "Enter your organization.";
  if (values.role.trim().length < 2) errors.role = "Enter your role.";
  if (values.region.trim().length < 2) errors.region = "Enter your country or region.";
  if (!values.category) errors.category = "Choose an inquiry category.";
  if (values.interest.trim().length < 3) errors.interest = "Describe the area of interest.";
  if (!values.timeline) errors.timeline = "Choose a project timeline.";
  if (values.message.trim().length < 20) errors.message = "Add at least 20 characters of project context.";
  if (values.consent !== "on") errors.consent = "Consent is required before sending.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const disabled = status === "loading";

  const errorSummary = useMemo(() => Object.values(errors), [errors]);

  function update(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setMessage("");
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const body = await response.json().catch(() => ({}));
    if (response.ok) {
      setStatus("success");
      setValues(initialState);
      setMessage("Your inquiry was sent. A mission team member will review the request and respond through the configured channel.");
      return;
    }
    setStatus("error");
    setMessage(body.error || "The inquiry could not be sent. Please try again or use the listed contact details.");
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit} noValidate>
      {errorSummary.length ? (
        <div className={statusClasses} role="alert">
          <strong className="mb-2 block">Review the highlighted fields.</strong>
          <ul className="list-disc pl-4">
            {errorSummary.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {message ? (
        <div className={statusClasses} role="status">
          {message}
        </div>
      ) : null}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="fullName" label="Full name" placeholder="Jane Chen" value={values.fullName} error={errors.fullName} onChange={update} />
        <Field id="email" label="Work email" type="email" placeholder="jane@organization.com" value={values.email} error={errors.email} onChange={update} />
        <Field id="organization" label="Organization" placeholder="Agency, operator, or company" value={values.organization} error={errors.organization} onChange={update} />
        <Field id="role" label="Role" placeholder="Program lead, analyst, engineer" value={values.role} error={errors.role} onChange={update} />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Field id="region" label="Country or region" placeholder="Region of interest" value={values.region} error={errors.region} onChange={update} />
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className={labelClasses}>Inquiry category</label>
          <select
            id="category"
            name="category"
            value={values.category}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? "category-error" : undefined}
            onChange={(event) => update("category", event.target.value)}
            className={inputClasses}
          >
            <option value="">Select a category</option>
            {inquiryCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.category ? <span className={errorClasses} id="category-error">{errors.category}</span> : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="timeline" className={labelClasses}>Project timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            onChange={(event) => update("timeline", event.target.value)}
            className={inputClasses}
          >
            <option value="">Select a timeline</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>{timeline}</option>
            ))}
          </select>
          {errors.timeline ? <span className={errorClasses} id="timeline-error">{errors.timeline}</span> : null}
        </div>
      </div>
      <Field
        id="interest"
        label="Area of interest"
        placeholder="Example: crop monitoring, port activity, infrastructure change"
        value={values.interest}
        error={errors.interest}
        onChange={update}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>Message</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Share the decision to support, location or asset type, target timeline, and preferred output."
          className={`${inputClasses} min-h-[132px] resize-y`}
        />
        {errors.message ? <span className={errorClasses} id="message-error">{errors.message}</span> : null}
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-black/65">
        <input
          type="checkbox"
          checked={values.consent === "on"}
          onChange={(event) => update("consent", event.target.checked ? "on" : "")}
          className="mt-1 h-4 w-4 accent-black"
        />
        <span>
          I agree to be contacted about this inquiry and understand that project
          details will be handled according to the privacy policy.
        </span>
      </label>
      {errors.consent ? <span className={errorClasses}>{errors.consent}</span> : null}
      <button className={gradientButtonClasses("self-start")} type="submit" disabled={disabled}>
        {disabled ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClasses}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(id, event.target.value)}
        className={inputClasses}
      />
      {error ? <span className={errorClasses} id={`${id}-error`}>{error}</span> : null}
    </div>
  );
}

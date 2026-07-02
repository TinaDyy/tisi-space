"use client";

import { FormEvent, useMemo, useState } from "react";
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
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {errorSummary.length ? (
        <div className="form-status" role="alert">
          <strong>Review the highlighted fields.</strong>
          <ul>
            {errorSummary.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {message ? (
        <div className="form-status" role="status">
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
      <div className="field-grid">
        <Field id="fullName" label="Full name" value={values.fullName} error={errors.fullName} onChange={update} />
        <Field id="email" label="Work email" type="email" value={values.email} error={errors.email} onChange={update} />
        <Field id="organization" label="Organization" value={values.organization} error={errors.organization} onChange={update} />
        <Field id="role" label="Role" value={values.role} error={errors.role} onChange={update} />
        <Field id="region" label="Country or region" value={values.region} error={errors.region} onChange={update} />
        <div className="field">
          <label htmlFor="category">Inquiry category</label>
          <select
            id="category"
            name="category"
            value={values.category}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? "category-error" : undefined}
            onChange={(event) => update("category", event.target.value)}
          >
            <option value="">Select a category</option>
            {inquiryCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.category ? <span className="error" id="category-error">{errors.category}</span> : null}
        </div>
        <Field id="interest" label="Area of interest" value={values.interest} error={errors.interest} onChange={update} />
        <div className="field">
          <label htmlFor="timeline">Project timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            onChange={(event) => update("timeline", event.target.value)}
          >
            <option value="">Select a timeline</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>{timeline}</option>
            ))}
          </select>
          {errors.timeline ? <span className="error" id="timeline-error">{errors.timeline}</span> : null}
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message ? <span className="error" id="message-error">{errors.message}</span> : null}
      </div>
      <label className="checkbox-field">
        <input
          type="checkbox"
          checked={values.consent === "on"}
          onChange={(event) => update("consent", event.target.checked ? "on" : "")}
        />{" "}
        I agree to be contacted about this inquiry and understand that project
        details will be handled according to the privacy policy.
      </label>
      {errors.consent ? <span className="error">{errors.consent}</span> : null}
      <button className="button primary" type="submit" disabled={disabled}>
        {disabled ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(id, event.target.value)}
      />
      {error ? <span className="error" id={`${id}-error`}>{error}</span> : null}
    </div>
  );
}

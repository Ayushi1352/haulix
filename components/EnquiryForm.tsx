"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "./Icon";
import { Highlight } from "./SectionHeading";
import { label as uiLabel, site as data } from "@/data";

interface Field {
  name: string;
  type: string;
  placeholder: string;
  icon: string;
  required?: boolean;
  options?: string;
  full?: boolean;
}

interface FormConfig {
  title: string;
  titleHighlight: string;
  description: string;
  button: string;
  successTitle: string;
  success: string;
  fields: Field[];
}

const { formOptions } = data;

// Select options come from site.json: the service list, or a named list in FormOptions.
function optionsFor(source?: string): string[] {
  if (source === "services") return data.services.items.map((item) => item.title);
  if (source === "cities") return formOptions.cities;
  if (source === "shipmentTypes") return formOptions.shipmentTypes;
  return [];
}

const SENDING_DELAY_MS = 1000;
const SUCCESS_VISIBLE_MS = 6000;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isInvalid(field: Field, value: string) {
  if (field.required && !value) return true;
  if (!value) return false;
  if (field.type === "email") return !EMAIL.test(value);
  if (field.type === "tel") return !/^\+?[\d\s()-]+$/.test(value) || value.replace(/\D/g, "").length < 7;
  return false;
}

// Returns the message for the first problem found, or "" when the form is valid.
function validate(fields: Field[], values: Record<string, string>) {
  const invalid = fields.filter((field) => isInvalid(field, values[field.name]?.trim() ?? ""));
  if (invalid.length === 0) return "";
  if (invalid.some((field) => field.required && !values[field.name]?.trim())) return formOptions.requiredError;
  return invalid[0].type === "email" ? formOptions.emailError : formOptions.phoneError;
}

interface EnquiryFormProps {
  form: FormConfig;
  /** "contact" uses the taller contact-page inputs, "quote" the compact quote-page ones. */
  size?: "contact" | "quote";
}

export default function EnquiryForm({ form, size = "contact" }: EnquiryFormProps) {
  const empty = Object.fromEntries(form.fields.map((field) => [field.name, ""]));
  const [values, setValues] = useState<Record<string, string>>(empty);
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "error" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const compact = size === "quote";
  const fieldHeight = compact ? "h-52 xl:h-57" : "h-54 xl:h-60";
  const textareaHeight = compact ? "h-110 xl:h-92" : "h-140 xl:h-151";

  useEffect(() => () => clearTimeout(timer.current), []);

  const reset = () => {
    clearTimeout(timer.current);
    setStatus("idle");
  };

  const update = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (status === "error" || status === "sent") reset();
  };

  // Dummy submit: nothing leaves the browser. After a short "sending" pause the
  // thank-you note shows, then hides on its own, on close, or when the user types again.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const message = validate(form.fields, values);
    if (message) {
      setError(message);
      setStatus("error");
      return;
    }

    clearTimeout(timer.current);
    setStatus("sending");
    timer.current = setTimeout(() => {
      setValues(empty);
      setStatus("sent");
      timer.current = setTimeout(() => setStatus("idle"), SUCCESS_VISIBLE_MS);
    }, SENDING_DELAY_MS);
  };

  const base =
    "w-full rounded-[calc(3*var(--spacing))] border border-line bg-white pl-48 font-heading text-[calc(15*var(--spacing))] font-medium text-ink outline-none transition-colors placeholder:text-steel focus:border-brand xl:pl-60 xl:text-[calc(17*var(--spacing))]";

  return (
    <div data-reveal="left" className="rounded-[calc(6*var(--spacing))] border border-line bg-cloud px-20 py-28 sm:px-32 xl:px-36 xl:pt-30 xl:pb-38">
      <h2 className="font-heading text-[calc(28*var(--spacing))] leading-36 font-extrabold tracking-[-0.025em] text-ink xl:text-[calc(41*var(--spacing))] xl:leading-50">
        <Highlight text={form.title} highlight={form.titleHighlight} highlightClass="text-brand" />
      </h2>
      <p className="mt-6 font-heading text-[calc(15*var(--spacing))] leading-24 font-medium text-steel xl:mt-8 xl:text-[calc(20*var(--spacing))] xl:leading-30 xl:whitespace-pre-line">
        {form.description}
      </p>

      <form onSubmit={onSubmit} noValidate className={`grid gap-14 sm:grid-cols-2 ${compact ? "mt-24 xl:mt-28 xl:gap-x-20 xl:gap-y-20" : "mt-24 xl:mt-38 xl:gap-x-20 xl:gap-y-22"}`}>
        {form.fields.map((field) => {
          const label = `${field.placeholder}${field.required ? " *" : ""}`;
          const value = values[field.name] ?? "";
          const invalid = status === "error" && isInvalid(field, value.trim());
          const border = invalid ? "border-brand" : "";

          return (
            <div key={field.name} className={`group/field relative ${field.full ? "sm:col-span-2" : ""}`}>
              <Icon
                name={field.icon}
                className={`pointer-events-none absolute left-16 size-18 text-steel transition-colors group-focus-within/field:text-brand xl:left-22 xl:size-20 ${
                  field.type === "textarea" ? "top-18 xl:top-22" : "top-1/2 -translate-y-1/2"
                }`}
                strokeWidth={1.6}
              />
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  aria-label={label}
                  placeholder={label}
                  value={value}
                  onChange={(event) => update(field.name, event.target.value)}
                  className={`${base} ${border} ${textareaHeight} resize-y pt-15 pr-16 xl:pt-20`}
                />
              ) : field.type === "select" ? (
                <>
                  <select
                    name={field.name}
                    aria-label={label}
                    value={value}
                    onChange={(event) => update(field.name, event.target.value)}
                    className={`${base} ${border} ${fieldHeight} appearance-none pr-44 ${value ? "text-ink" : "text-steel"}`}
                  >
                    <option value="" disabled>
                      {label}
                    </option>
                    {optionsFor(field.options).map((option) => (
                      <option key={option} value={option} className="text-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                  <Icon
                    name="chevron-down"
                    className="pointer-events-none absolute top-1/2 right-16 size-16 -translate-y-1/2 text-ink xl:right-22 xl:size-20"
                    strokeWidth={2.4}
                  />
                </>
              ) : (
                <>
                  <input
                    name={field.name}
                    aria-label={label}
                    placeholder={label}
                    // Date fields show their placeholder until focused, then open the date picker.
                    type={field.type === "date" && focused !== field.name && !value ? "text" : field.type}
                    value={value}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    onChange={(event) => update(field.name, event.target.value)}
                    className={`${base} ${border} ${fieldHeight} pr-16 ${field.type === "date" ? "relative pr-48 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0" : ""}`}
                  />
                  {field.type === "date" && (
                    <Icon
                      name="calendar"
                      className="pointer-events-none absolute top-1/2 right-16 size-18 -translate-y-1/2 text-steel xl:right-22 xl:size-21"
                      strokeWidth={1.6}
                    />
                  )}
                </>
              )}
            </div>
          );
        })}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className={`group mt-4 inline-flex w-full items-center justify-center gap-16 rounded-[calc(3*var(--spacing))] border border-brand bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,var(--color-brand)_100%)] font-heading text-[calc(16*var(--spacing))] font-bold tracking-[0.14em] text-white shadow-[0_8px_20px_color-mix(in_srgb,var(--color-brand)_25%,transparent)] transition-colors hover:bg-white hover:bg-none hover:text-brand disabled:cursor-wait disabled:opacity-80 disabled:hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,var(--color-brand)_100%)] disabled:hover:text-white xl:gap-26 xl:text-[calc(19*var(--spacing))] ${
              compact ? "h-56 xl:mt-0 xl:h-68" : "h-58 xl:mt-5 xl:h-64"
            }`}
          >
            {status === "sending" ? (
              <>
                {formOptions.sending}
                <span className="size-20 animate-spin rounded-full border-2 border-white/40 border-t-white xl:size-24" />
              </>
            ) : (
              <>
                {form.button}
                <Icon name="arrow-right" className="size-20 transition-transform group-hover:translate-x-6 xl:size-26" strokeWidth={2.2} />
              </>
            )}
          </button>
          <div aria-live="polite" className="font-heading">
            {status === "error" && <p className="mt-12 text-[calc(14*var(--spacing))] font-semibold text-brand xl:text-[calc(17*var(--spacing))]">{error}</p>}
            {status === "sent" && (
              <div
                role="status"
                className="mt-16 flex items-start gap-14 rounded-[calc(6*var(--spacing))] border border-[#bfe3cd] bg-[#eef8f2] px-16 py-14 [animation:fade_0.3s_ease-out] xl:mt-20 xl:gap-18 xl:px-22 xl:py-18"
              >
                <span className="flex size-32 shrink-0 items-center justify-center rounded-full bg-[#1d7a46] text-white xl:size-40">
                  <Icon name="check" className="size-18 xl:size-22" strokeWidth={2.6} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[calc(16*var(--spacing))] font-bold text-[#145c34] xl:text-[calc(19*var(--spacing))]">{form.successTitle}</p>
                  <p className="mt-2 text-[calc(14*var(--spacing))] leading-22 font-medium text-[#2f5d43] xl:text-[calc(16*var(--spacing))] xl:leading-24">{form.success}</p>
                </div>
                <button
                  type="button"
                  aria-label={uiLabel("closeMessage")}
                  onClick={reset}
                  className="shrink-0 rounded-full p-4 text-[#2f5d43] transition-colors hover:bg-[#d7efe0]"
                >
                  <Icon name="close" className="size-16 xl:size-18" strokeWidth={2.2} />
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { Highlight } from "./SectionHeading";
import { site as data } from "@/data";

interface Field {
  name: string;
  type: string;
  placeholder: string;
  icon: string;
  required?: boolean;
  options?: string;
  full?: boolean;
  rows?: string;
}

interface FormConfig {
  title: string;
  titleHighlight: string;
  description: string;
  button: string;
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

interface EnquiryFormProps {
  form: FormConfig;
  /** "contact" uses the taller contact-page inputs, "quote" the compact quote-page ones. */
  size?: "contact" | "quote";
}

export default function EnquiryForm({ form, size = "contact" }: EnquiryFormProps) {
  const empty = Object.fromEntries(form.fields.map((field) => [field.name, ""]));
  const [values, setValues] = useState<Record<string, string>>(empty);
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  const compact = size === "quote";
  const fieldHeight = compact ? "h-52 xl:h-57" : "h-54 xl:h-60";
  const textareaHeight = compact ? "h-110 xl:h-92" : "h-140 xl:h-151";

  const update = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const missing = form.fields.some((field) => field.required && !values[field.name]?.trim());
    if (missing) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setValues(empty);
  };

  const base =
    "w-full rd-3 border border-[#e1e5e9] bg-white pl-48 font-jakarta fs-15 font-medium text-ink outline-none transition-colors placeholder:text-[#5d6870] focus:border-[#d2161e] xl:pl-60 xl:fs-17";

  return (
    <div className="rd-6 border border-[#eceef1] bg-[#f7f8fa] px-20 py-28 sm:px-32 xl:px-36 xl:pt-36 xl:pb-32">
      <h2 className="font-jakarta fs-28 leading-36 font-extrabold tracking-[-0.025em] text-ink xl:fs-41 xl:leading-50">
        <Highlight text={form.title} highlight={form.titleHighlight} highlightClass="text-scarlet" />
      </h2>
      <p className="mt-6 font-jakarta fs-15 leading-24 font-medium text-[#5b6770] xl:mt-8 xl:fs-20 xl:leading-30 xl:whitespace-pre-line">
        {form.description}
      </p>

      <form onSubmit={onSubmit} noValidate className={`grid gap-14 sm:grid-cols-2 ${compact ? "mt-24 xl:mt-28 xl:gap-x-20 xl:gap-y-20" : "mt-24 xl:mt-38 xl:gap-x-20 xl:gap-y-22"}`}>
        {form.fields.map((field) => {
          const label = `${field.placeholder}${field.required ? ` ${formOptions.requiredMark}` : ""}`;
          const value = values[field.name] ?? "";
          const invalid = status === "error" && field.required && !value.trim();
          const border = invalid ? "border-scarlet" : "";

          return (
            <div key={field.name} className={`relative ${field.full ? "sm:col-span-2" : ""}`}>
              <Icon
                name={field.icon}
                className={`pointer-events-none absolute left-16 size-18 text-[#5d6870] xl:left-22 xl:size-20 ${
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
                    className={`${base} ${border} ${fieldHeight} pr-44 ${value ? "text-ink" : "text-[#5d6870]"}`}
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
                    className={`${base} ${border} ${fieldHeight} pr-16 ${field.type === "date" ? "relative pr-48" : ""}`}
                  />
                  {field.type === "date" && (
                    <Icon
                      name="calendar"
                      className="pointer-events-none absolute top-1/2 right-16 size-18 -translate-y-1/2 text-[#5d6870] xl:right-22 xl:size-21"
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
            className={`mt-4 inline-flex w-full items-center justify-center gap-16 rd-3 bg-[linear-gradient(90deg,#e01d25_0%,#b8121a_100%)] font-jakarta fs-16 font-bold tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(210,22,30,0.25)] transition-[filter] hover:brightness-110 xl:gap-26 xl:fs-19 ${
              compact ? "h-56 xl:mt-0 xl:h-68" : "h-58 xl:mt-5 xl:h-69"
            }`}
          >
            {form.button}
            <Icon name="arrow-right" className="size-20 xl:size-26" strokeWidth={2.2} />
          </button>
          <p aria-live="polite" className="font-jakarta fs-14 font-semibold xl:fs-17">
            {status === "error" && <span className="mt-12 block text-scarlet">{formOptions.requiredError}</span>}
            {status === "sent" && <span className="mt-12 block text-[#1d7a46]">{form.success}</span>}
          </p>
        </div>
      </form>
    </div>
  );
}

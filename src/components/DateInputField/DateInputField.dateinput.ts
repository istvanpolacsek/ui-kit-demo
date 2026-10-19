import { useEffect, useId, useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

export type DateSegment = "day" | "month" | "year";

type Segments = Record<DateSegment, string>;

const LENGTH: Record<DateSegment, number> = { day: 2, month: 2, year: 4 };
const LABEL: Record<DateSegment, string> = {
  day: "Day",
  month: "Month",
  year: "Year",
};
const EMPTY: Segments = { day: "", month: "", year: "" };

const pad = (value: string, length: number) => value.padStart(length, "0");

/** YYYY-MM-DD, or an empty string while the date is incomplete or not real. */
export function composeDate({ day, month, year }: Segments): string {
  if (year.length !== 4 || month === "" || day === "") return "";
  const y = Number(year);
  const m = Number(month);
  const d = Number(day);
  const real = new Date(Date.UTC(y, m - 1, d));
  if (
    real.getUTCFullYear() !== y ||
    real.getUTCMonth() !== m - 1 ||
    real.getUTCDate() !== d
  ) {
    return "";
  }
  return `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`;
}

export function parseDate(value: string | undefined): Segments {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? "");
  return match ? { year: match[1], month: match[2], day: match[3] } : EMPTY;
}

export interface UseDateInputParams {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  hasLabel?: boolean;
  hasDescription?: boolean;
  hasError?: boolean;
  /** The segments in the order they are drawn. */
  order: DateSegment[];
}

export function useDateInput({
  value,
  defaultValue,
  onChange,
  disabled,
  hasLabel,
  hasDescription,
  hasError,
  order,
}: UseDateInputParams) {
  const base = useId();
  const ids = {
    label: `${base}-label`,
    description: `${base}-description`,
    error: `${base}-error`,
  };
  const [segments, setSegments] = useState<Segments>(() =>
    parseDate(value ?? defaultValue),
  );
  const inputs = useRef<Partial<Record<DateSegment, HTMLInputElement | null>>>(
    {},
  );
  // read by the handlers, and moved on at once: quick typing fires several
  // events before React renders between them
  const latest = useRef(segments);
  latest.current = segments;
  const composed = composeDate(segments);

  // a controlled date that differs from what is typed replaces it; an empty
  // one while the date is only incomplete does not wipe the typing
  useEffect(() => {
    if (value !== undefined && value !== composed) {
      latest.current = parseDate(value);
      setSegments(latest.current);
    }
  }, [value]);

  const update = (patch: Partial<Segments>) => {
    const before = composeDate(latest.current);
    const next = { ...latest.current, ...patch };
    latest.current = next;
    setSegments(next);
    const date = composeDate(next);
    if (date !== before) onChange?.(date);
  };

  const focus = (segment: DateSegment | undefined) =>
    segment && inputs.current[segment]?.focus();
  const neighbour = (segment: DateSegment, delta: number) =>
    order[order.indexOf(segment) + delta];

  return {
    ids,
    /** Whether any segment has something typed (the design's value state). */
    hasValue: Object.values(segments).some((part) => part !== ""),
    groupProps: {
      role: "group" as const,
      "aria-labelledby": hasLabel ? ids.label : undefined,
      "aria-describedby":
        [hasDescription && ids.description, hasError && ids.error]
          .filter(Boolean)
          .join(" ") || undefined,
    },
    segment: (segment: DateSegment) => ({
      ref: (node: HTMLInputElement | null) => {
        inputs.current[segment] = node;
      },
      type: "text" as const,
      inputMode: "numeric" as const,
      autoComplete: "off",
      maxLength: LENGTH[segment],
      "aria-label": LABEL[segment],
      "aria-invalid": hasError || undefined,
      disabled,
      value: segments[segment],
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        const typed = event.target.value
          .replace(/\D/g, "")
          .slice(0, LENGTH[segment]);
        update({ [segment]: typed });
        if (typed.length === LENGTH[segment]) focus(neighbour(segment, 1));
      },
      onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
        const input = event.currentTarget;
        if (/^[/.\-\s]$/.test(event.key) && input.value !== "") {
          event.preventDefault();
          focus(neighbour(segment, 1));
        } else if (event.key === "Backspace" && input.value === "") {
          focus(neighbour(segment, -1));
        } else if (
          event.key === "ArrowLeft" &&
          input.selectionStart === 0 &&
          input.selectionEnd === 0
        ) {
          focus(neighbour(segment, -1));
        } else if (
          event.key === "ArrowRight" &&
          input.selectionStart === input.value.length
        ) {
          focus(neighbour(segment, 1));
        }
      },
      onBlur: () => {
        // 5 → 05, so the date reads the way it is composed
        const part = latest.current[segment];
        if (segment !== "year" && part.length === 1) {
          update({ [segment]: pad(part, 2) });
        }
      },
    }),
  };
}

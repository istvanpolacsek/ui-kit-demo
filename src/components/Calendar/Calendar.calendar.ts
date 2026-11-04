import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { ForwardedRef, KeyboardEvent } from "react";

const pad = (value: number, length = 2) => String(value).padStart(length, "0");

const toIso = (year: number, month: number, day: number) =>
  `${pad(year, 4)}-${pad(month + 1)}-${pad(day)}`;

/** A date as UTC parts, or undefined for anything that is not a real day. */
function parse(value: string | undefined) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? "");
  if (!match) return undefined;
  const [year, month, day] = [
    Number(match[1]),
    Number(match[2]) - 1,
    Number(match[3]),
  ];
  const real = new Date(Date.UTC(year, month, day));
  return real.getUTCFullYear() === year &&
    real.getUTCMonth() === month &&
    real.getUTCDate() === day
    ? { year, month, day }
    : undefined;
}

function addDays(iso: string, days: number): string {
  const parts = parse(iso);
  if (!parts) return iso;
  const next = new Date(Date.UTC(parts.year, parts.month, parts.day + days));
  return toIso(next.getUTCFullYear(), next.getUTCMonth(), next.getUTCDate());
}

function addMonths(iso: string, months: number): string {
  const parts = parse(iso);
  if (!parts) return iso;
  const target = new Date(Date.UTC(parts.year, parts.month + months, 1));
  const last = new Date(
    Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0),
  ).getUTCDate();
  return toIso(
    target.getUTCFullYear(),
    target.getUTCMonth(),
    Math.min(parts.day, last),
  );
}

const weekday = (iso: string) => {
  const parts = parse(iso);
  return parts
    ? new Date(Date.UTC(parts.year, parts.month, parts.day)).getUTCDay()
    : 0;
};

const today = () => {
  const now = new Date();
  return toIso(now.getFullYear(), now.getMonth(), now.getDate());
};

export interface CalendarDay {
  iso: string;
  number: number;
  outside: boolean;
  selected: boolean;
  disabled: boolean;
}

export interface UseCalendarParams<T extends HTMLElement> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  autoFocus?: boolean;
  forwardedRef: ForwardedRef<T>;
}

export function useCalendar<T extends HTMLElement>({
  value,
  defaultValue,
  onChange,
  min,
  max,
  autoFocus,
  forwardedRef,
}: UseCalendarParams<T>) {
  const titleId = useId();
  const element = useRef<T | null>(null);
  const [inner, setInner] = useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const chosen = parse(isControlled ? value : inner)
    ? ((isControlled ? value : inner) as string)
    : "";
  const [focused, setFocused] = useState(chosen || today());
  const [view, setView] = useState(() => {
    const start = parse(chosen) ?? parse(today());
    return { year: start?.year ?? 1970, month: start?.month ?? 0 };
  });
  const focusRequest = useRef(0);
  const [focusTick, setFocusTick] = useState(0);

  const ref = useCallback(
    (node: T | null) => {
      element.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef],
  );

  const isDisabled = (iso: string) =>
    (!!min && iso < min) || (!!max && iso > max);

  const first = toIso(view.year, view.month, 1);
  const offset = weekday(first);
  const length = new Date(Date.UTC(view.year, view.month + 1, 0)).getUTCDate();
  const rows = Math.ceil((offset + length) / 7);
  const weeks: CalendarDay[][] = [];
  for (let week = 0; week < rows; week++) {
    const days: CalendarDay[] = [];
    for (let weekDay = 0; weekDay < 7; weekDay++) {
      const iso = addDays(first, week * 7 + weekDay - offset);
      const outside = parse(iso)?.month !== view.month;
      days.push({
        iso,
        number: parse(iso)?.day ?? 0,
        outside,
        selected: !outside && iso === chosen,
        disabled: outside || isDisabled(iso),
      });
    }
    weeks.push(days);
  }

  // the one day in the tab order: the focused one, if it is shown and can be
  // chosen, else the first that can
  const shown = weeks.flat().filter((day) => !day.disabled);
  const tabIso = shown.some((day) => day.iso === focused)
    ? focused
    : shown[0]?.iso;

  const show = (iso: string) => {
    const parts = parse(iso);
    if (parts) setView({ year: parts.year, month: parts.month });
  };
  const moveTo = (iso: string) => {
    const clamped = min && iso < min ? min : max && iso > max ? max : iso;
    setFocused(clamped);
    show(clamped);
    focusRequest.current += 1;
    setFocusTick(focusRequest.current);
  };

  // after a key moved the focused day, put the browser's focus on its button
  useEffect(() => {
    if (focusTick === 0) return;
    element.current
      ?.querySelector<HTMLElement>(`[data-iso="${focused}"]:not(:disabled)`)
      ?.focus();
  }, [focusTick]);

  useEffect(() => {
    if (!autoFocus) return;
    element.current
      ?.querySelector<HTMLElement>(`[data-iso="${tabIso}"]:not(:disabled)`)
      ?.focus();
  }, []);

  const choose = (iso: string) => {
    if (isDisabled(iso)) return;
    if (!isControlled) setInner(iso);
    setFocused(iso);
    onChange?.(iso);
  };

  const step = (months: number) =>
    setView((current) => {
      const next = new Date(Date.UTC(current.year, current.month + months, 1));
      return { year: next.getUTCFullYear(), month: next.getUTCMonth() };
    });

  const title = new Date(Date.UTC(view.year, view.month, 1)).toLocaleDateString(
    undefined,
    {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    },
  );

  return {
    ref,
    ids: { title: titleId },
    title,
    weeks,
    previousMonth: () => step(-1),
    nextMonth: () => step(1),
    dayProps: (day: CalendarDay) => ({
      number: String(day.number),
      outside: day.outside,
      selected: day.selected,
      inRange: false,
      disabled: day.disabled,
      tabIndex: day.iso === tabIso ? 0 : -1,
      "data-iso": day.iso,
      "aria-label": new Date(
        Date.UTC(
          ...(Object.values(
            parse(day.iso) ?? { year: 1970, month: 0, day: 1 },
          ) as [number, number, number]),
        ),
      ).toLocaleDateString(undefined, {
        dateStyle: "full",
        timeZone: "UTC",
      }),
      "aria-current": day.iso === today() ? ("date" as const) : undefined,
      onClick: () => choose(day.iso),
      onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
        const moves: Record<string, string> = {
          ArrowLeft: addDays(day.iso, -1),
          ArrowRight: addDays(day.iso, 1),
          ArrowUp: addDays(day.iso, -7),
          ArrowDown: addDays(day.iso, 7),
          Home: addDays(day.iso, -weekday(day.iso)),
          End: addDays(day.iso, 6 - weekday(day.iso)),
          PageUp: addMonths(day.iso, event.shiftKey ? -12 : -1),
          PageDown: addMonths(day.iso, event.shiftKey ? 12 : 1),
        };
        const target = moves[event.key];
        if (!target) return;
        event.preventDefault();
        moveTo(target);
      },
    }),
  };
}

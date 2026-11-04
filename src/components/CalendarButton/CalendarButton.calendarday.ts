import { useState } from "react";

export interface UseCalendarDayParams {
  selected?: boolean;
  inRange?: boolean;
  disabled?: boolean;
  outside?: boolean;
  /** The design's option for each state, by lower-case name. */
  states: Record<string, string>;
}

export function useCalendarDay({
  selected,
  inRange,
  disabled,
  outside,
  states,
}: UseCalendarDayParams) {
  const [hovered, setHovered] = useState(false);
  const normal = states["default"] ?? "";
  const pick = (...names: string[]) =>
    names.map((name) => states[name]).find((option) => option !== undefined) ??
    normal;

  const state = outside
    ? pick("hidden")
    : disabled
      ? pick(inRange ? "range disabled" : "disabled", "disabled")
      : selected
        ? pick("active")
        : inRange
          ? pick("range")
          : hovered
            ? pick("hover")
            : normal;

  return {
    state,
    rootProps: {
      type: "button" as const,
      disabled: disabled || outside,
      "aria-pressed": selected || undefined,
      "aria-hidden": outside || undefined,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  };
}

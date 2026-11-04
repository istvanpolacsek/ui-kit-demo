import { useEffect, useId, useRef, useState } from "react";
import type { ChangeEvent, CSSProperties } from "react";

export interface UseToggleParams {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (checked: boolean) => void;
  hasDescription?: boolean;
  /** Names the input when the design draws no label (or to replace it). */
  ariaLabel?: string;
}

/** Keeps the real input in the page for the browser and assistive tech while
 * the design's drawn control is what people see. */
const visuallyHidden: CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export function useToggle({
  checked: checkedProp,
  defaultChecked = false,
  indeterminate = false,
  disabled,
  required,
  name,
  value,
  onChange,
  hasDescription = false,
  ariaLabel,
}: UseToggleParams) {
  const base = useId();
  const ids = { description: `${base}-description` };
  const [inner, setInner] = useState(defaultChecked);
  const isControlled = checkedProp !== undefined;
  const checked = isControlled ? checkedProp : inner;
  const inputRef = useRef<HTMLInputElement>(null);

  // The mixed state is a DOM property, not an attribute.
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  });

  return {
    checked,
    indeterminate,
    disabled: !!disabled,
    ids,
    inputProps: {
      ref: inputRef,
      type: "checkbox" as const,
      checked,
      disabled,
      required,
      name,
      value,
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ids.description : undefined,
      style: visuallyHidden,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        const next = event.target.checked;
        if (!isControlled) setInner(next);
        // A click clears the mixed state in the DOM; the parent decides
        // whether it stays.
        event.target.indeterminate = indeterminate;
        onChange?.(next);
      },
    },
  };
}

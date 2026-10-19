import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";

export interface SelectChoice {
  value: string;
  label: string;
}

export interface UseSelectParams {
  options?: SelectChoice[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  hasLabel?: boolean;
  hasDescription?: boolean;
  hasError?: boolean;
}

/** A value the parent may control: `controlled` wins when it is defined. */
function useControllable<T>(
  controlled: T | undefined,
  initial: T,
  onChange?: (next: T) => void,
): [T, (next: T) => void] {
  const [inner, setInner] = useState(initial);
  const isControlled = controlled !== undefined;
  const latest = useRef({ isControlled, onChange });
  latest.current = { isControlled, onChange };
  const set = useCallback((next: T) => {
    if (!latest.current.isControlled) setInner(next);
    latest.current.onChange?.(next);
  }, []);
  return [isControlled ? controlled : inner, set];
}

/** The option the keyboard moves to: wraps around the ends. */
export function moveIndex(current: number, delta: number, count: number) {
  if (count === 0) return -1;
  if (current < 0) return delta > 0 ? 0 : count - 1;
  return (current + delta + count) % count;
}

export function useSelect({
  options = [],
  value: valueProp,
  defaultValue,
  onChange,
  open: openProp,
  defaultOpen,
  onOpenChange,
  disabled = false,
  hasLabel = false,
  hasDescription = false,
  hasError = false,
}: UseSelectParams) {
  const base = useId();
  const ids = {
    label: `${base}-label`,
    description: `${base}-description`,
    error: `${base}-error`,
    list: `${base}-list`,
  };
  const optionId = (index: number) => `${base}-option-${index}`;

  const [value, setValue] = useControllable<string | undefined>(
    valueProp,
    defaultValue,
    onChange as ((next: string | undefined) => void) | undefined,
  );
  const [isOpen, setOpenState] = useControllable(
    openProp,
    defaultOpen ?? false,
    onOpenChange,
  );
  const [activeIndex, setActiveIndex] = useState(-1);
  const triggerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typed = useRef({ text: "", timer: 0 });

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  const setOpen = (next: boolean) => {
    if (disabled && next) return;
    setOpenState(next);
  };
  const choose = (index: number) => {
    const option = options[index];
    if (!option) return;
    setValue(option.value);
    setOpen(false);
    triggerRef.current?.focus();
  };

  // The keyboard starts on the chosen option when the list opens.
  useEffect(() => {
    setActiveIndex(isOpen ? Math.max(selectedIndex, 0) : -1);
  }, [isOpen, selectedIndex]);

  // A press outside the field closes the list.
  const close = useRef(setOpenState);
  close.current = setOpenState;
  useEffect(() => {
    if (!isOpen) return undefined;
    const onPointerDown = (event: PointerEvent) => {
      if (!triggerRef.current?.contains(event.target as Node)) {
        close.current(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  const typeahead = (character: string) => {
    window.clearTimeout(typed.current.timer);
    typed.current.text += character.toLowerCase();
    typed.current.timer = window.setTimeout(() => {
      typed.current.text = "";
    }, 500);
    const start = Math.max(activeIndex, selectedIndex, -1) + 1;
    const ordered = [...options.keys()].map(
      (_, offset) => (start + offset) % options.length,
    );
    const match = ordered.find((index) =>
      options[index].label.toLowerCase().startsWith(typed.current.text),
    );
    if (match === undefined) return;
    if (isOpen) setActiveIndex(match);
    else choose(match);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (disabled) return;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        if (!isOpen) setOpen(true);
        else {
          setActiveIndex(
            moveIndex(
              activeIndex,
              event.key === "ArrowDown" ? 1 : -1,
              options.length,
            ),
          );
        }
        break;
      }
      case "Home":
      case "End":
        if (isOpen) {
          event.preventDefault();
          setActiveIndex(event.key === "Home" ? 0 : options.length - 1);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (isOpen && activeIndex >= 0) choose(activeIndex);
        else setOpen(!isOpen);
        break;
      case "Escape":
        if (isOpen) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        if (isOpen) setOpen(false);
        break;
      default:
        if (
          event.key.length === 1 &&
          !event.ctrlKey &&
          !event.metaKey &&
          !event.altKey
        ) {
          typeahead(event.key);
        }
    }
  };

  return {
    isOpen,
    selected,
    ids,
    triggerProps: {
      ref: triggerRef,
      role: "combobox" as const,
      tabIndex: disabled ? -1 : 0,
      "aria-haspopup": "listbox" as const,
      "aria-expanded": isOpen,
      "aria-controls": ids.list,
      "aria-activedescendant":
        isOpen && activeIndex >= 0 ? optionId(activeIndex) : undefined,
      "aria-disabled": disabled || undefined,
      "aria-invalid": hasError || undefined,
      "aria-labelledby": hasLabel ? ids.label : undefined,
      "aria-describedby":
        [hasDescription && ids.description, hasError && ids.error]
          .filter(Boolean)
          .join(" ") || undefined,
      onClick: (event: MouseEvent<HTMLElement>) => {
        // A click inside the list belongs to its option, not to the trigger.
        if (listRef.current?.contains(event.target as Node)) return;
        setOpen(!isOpen);
      },
      onKeyDown,
    },
    listProps: {
      ref: listRef,
      id: ids.list,
      role: "listbox" as const,
      "aria-labelledby": hasLabel ? ids.label : undefined,
    },
    getOptionProps: (option: SelectChoice, index: number) => ({
      id: optionId(index),
      role: "option" as const,
      "aria-selected": option.value === value,
      "data-active": index === activeIndex ? ("true" as const) : undefined,
      onClick: (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        choose(index);
      },
      onMouseMove: () => {
        if (activeIndex !== index) setActiveIndex(index);
      },
    }),
  };
}

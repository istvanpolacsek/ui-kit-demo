import { useId, useState } from "react";
import type { KeyboardEvent } from "react";

export interface UseTabsParams {
  items?: { value: string; disabled?: boolean }[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  panels?: Record<string, unknown>;
}

export function useTabs({
  items = [],
  value,
  defaultValue,
  onChange,
  panels,
}: UseTabsParams) {
  const base = useId();
  const [inner, setInner] = useState(defaultValue);
  const isControlled = value !== undefined;
  // with nothing chosen yet the first enabled tab is, so the list can be
  // reached with the keyboard
  const selected =
    (isControlled ? value : inner) ?? items.find((i) => !i.disabled)?.value;
  const indexOf = (item: string) => items.findIndex((i) => i.value === item);
  const tabId = (item: string) => `${base}-tab-${indexOf(item)}`;
  const panelId = (item: string) => `${base}-panel-${indexOf(item)}`;

  function select(item: string) {
    if (item === selected) return;
    if (!isControlled) setInner(item);
    onChange?.(item);
  }

  return {
    selected,
    tabId,
    panelId,
    isSelected: (item: string) => item === selected,
    /** Only the chosen tab's panel is rendered, so only it can be named. */
    controls: (item: string) =>
      item === selected && panels?.[item] !== undefined
        ? panelId(item)
        : undefined,
    select,
    /** Moves focus along the list and chooses the tab it lands on. */
    onKeyDown(event: KeyboardEvent<HTMLElement>) {
      const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
      if (!keys.includes(event.key)) return;
      const tabs = Array.from(
        event.currentTarget
          .closest('[role="tablist"]')
          ?.querySelectorAll<HTMLElement>('[role="tab"]:not(:disabled)') ?? [],
      );
      const at = tabs.indexOf(event.currentTarget);
      if (at < 0) return;
      const target =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? tabs.length - 1
            : (at + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) %
              tabs.length;
      event.preventDefault();
      tabs[target]?.focus();
      tabs[target]?.click();
    },
  };
}

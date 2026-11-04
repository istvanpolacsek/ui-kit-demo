import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface TagToggleProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "showIcon" | "icon" | "label" | "selected"
> {
  showIcon?: boolean;
  icon?: IconProps["name"];
  label?: string;
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{ $state: string }>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "On":
          return css`
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        case "Off":
          return css`
            background-color: ${theme["Background"]["Brand"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["Icon"]["Brand"]["On Brand"]};
  `,
);

const StyledTitle = styled.div<{ $state: string }>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "On":
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        case "Off":
          return css`
            color: ${theme["Text"]["Brand"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-inter, 'Inter'), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  `,
);

/** A toggleable tag/chip component that can be switched between 'On' and 'Off' states, optionally displaying an icon alongside a text label. */
export const TagToggle = React.forwardRef<HTMLButtonElement, TagToggleProps>(
  function TagToggle(
    { showIcon = true, icon = "Check", label = "Label", selected, ...rest },
    ref,
  ) {
    const state = selected ? "On" : "Off";
    return (
      <StyledRoot
        type="button"
        role="tab"
        aria-selected={selected ?? false}
        tabIndex={selected ? 0 : -1}
        {...rest}
        ref={ref}
        $state={state}
      >
        {showIcon && <Icon size={16} name={icon} />}
        <StyledTitle $state={state}>{label}</StyledTitle>
      </StyledRoot>
    );
  },
);

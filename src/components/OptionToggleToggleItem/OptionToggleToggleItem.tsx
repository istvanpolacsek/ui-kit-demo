import React from "react";
import styled, { css } from "styled-components";
import { ToggleSwitch } from "../ToggleSwitch";

export interface OptionToggleToggleItemProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "selected"
> {
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: #fefefe;
  `,
);

const StyledLabel = styled.div(
  () => css`
    color: #fefefe;
  `,
);

/** A toggle option item that pairs a text label with a switch control, allowing users to turn a setting on or off. */
export const OptionToggleToggleItem = React.forwardRef<
  HTMLButtonElement,
  OptionToggleToggleItemProps
>(function OptionToggleToggleItem({ selected, ...rest }, ref) {
  const state = selected ? "On" : "Off";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
    >
      <StyledLabel>{"Value"}</StyledLabel>
      <ToggleSwitch state={"False"} mode={"Dark"} />
    </StyledRoot>
  );
});

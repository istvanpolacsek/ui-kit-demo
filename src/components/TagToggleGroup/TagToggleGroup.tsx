import React from "react";
import styled, { css } from "styled-components";

export interface TagToggleGroupProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "slot"
> {
  slot?: React.ReactNode;
}

const StyledRoot = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSlot = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A group of toggleable tag/chip components rendered as an inline horizontal list, allowing users to select or deselect multiple tag options. */
export const TagToggleGroup = React.forwardRef<
  HTMLUListElement,
  TagToggleGroupProps
>(function TagToggleGroup({ slot, ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Tag toggle group" {...rest} ref={ref}>
      <StyledSlot>{slot}</StyledSlot>
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";

export interface TokenBadgeProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "color"
> {
  color?: boolean;
}

const StyledRoot = styled.span(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 12px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 4px;
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledColor = styled.div(
  ({ theme }) => css`
    width: 56px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["background"]["bgBrand"]};
    border-radius: 4px;
  `,
);

const Styledlabel = styled.span(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-inconsolata, "Inconsolata"), monospace;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  `,
);

/** A small badge component used to display a token label, optionally with a color indicator. Typically used inline to represent categorized or tagged items. */
export const TokenBadge = React.forwardRef<HTMLSpanElement, TokenBadgeProps>(
  function TokenBadge({ color = true, ...rest }, ref) {
    return (
      <StyledRoot aria-label="Token badge label" {...rest} ref={ref}>
        {color && <StyledColor />}
        <Styledlabel>{"label"}</Styledlabel>
      </StyledRoot>
    );
  },
);

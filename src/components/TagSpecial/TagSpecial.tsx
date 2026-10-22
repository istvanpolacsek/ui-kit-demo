import React from "react";
import styled, { css } from "styled-components";

export interface TagSpecialProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "size"
> {
  type?: "Default portfolio";
  size?: "Regular" | "Small";
}

const StyledRoot = styled.span<{ $size: "Regular" | "Small" }>(
  ({ $size }) => css`
    background-color: #0f0f0f;
    border-radius: 4px;
    ${(() => {
      switch ($size) {
        case "Regular":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 6px;
            padding-right: 10px;
            padding-bottom: 6px;
            padding-left: 10px;
            gap: 4px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Small":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 8px;
            padding-bottom: 4px;
            padding-left: 8px;
            gap: 4px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    color: #fefefe;
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #fefefe;
  `,
);

/** A special tag component used to label or categorize content, such as marking items as 'Default portfolio'. Renders as an inline badge or chip with size variants. */
export const TagSpecial = React.forwardRef<HTMLSpanElement, TagSpecialProps>(
  function TagSpecial(
    { type = "Default portfolio", size = "Regular", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="status"
        aria-label="Default portfolio"
        {...rest}
        ref={ref}
        $size={size}
      >
        <StyledLabel>{"Default portfolio"}</StyledLabel>
      </StyledRoot>
    );
  },
);

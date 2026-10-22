import React from "react";
import styled, { css } from "styled-components";

export interface TagOutlinedProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type"
> {
  type?: "Emphasized" | "Informative" | "Danger" | "Highlighted";
}

const StyledRoot = styled.span<{
  $type: "Emphasized" | "Informative" | "Danger" | "Highlighted";
}>(
  ({ $type }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 3px;
    padding-right: 8px;
    padding-bottom: 3px;
    padding-left: 8px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($type) {
        case "Emphasized":
          return css`
            border-color: ${"#dcfa37"};
          `;
        case "Highlighted":
          return css`
            border-color: ${"#fefefe"};
          `;
        case "Informative":
          return css`
            border-color: ${"#4d4c4c"};
          `;
        case "Danger":
          return css`
            border-color: ${"#ef4444"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Emphasized":
          return css`
            color: ${"#dcfa37"};
          `;
        case "Highlighted":
          return css`
            color: ${"#fefefe"};
          `;
        case "Informative":
          return css`
            color: ${"#fefefe"};
          `;
        case "Danger":
          return css`
            color: ${"#f48787"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.span<{
  $type: "Emphasized" | "Informative" | "Danger" | "Highlighted";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Emphasized":
          return css`
            color: ${"#dcfa37"};
          `;
        case "Highlighted":
          return css`
            color: ${"#fefefe"};
          `;
        case "Informative":
          return css`
            color: ${"#fefefe"};
          `;
        case "Danger":
          return css`
            color: ${"#f48787"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A compact tag/badge component with an outlined style, used to label or categorize content. Supports multiple semantic variants: Emphasized, Informative, Danger, and Highlighted. */
export const TagOutlined = React.forwardRef<HTMLSpanElement, TagOutlinedProps>(
  function TagOutlined({ type = "Emphasized", ...rest }, ref) {
    return (
      <StyledRoot
        role="status"
        aria-label="Tag label"
        {...rest}
        ref={ref}
        $type={type}
      >
        <StyledLabel $type={type}>{"Label"}</StyledLabel>
      </StyledRoot>
    );
  },
);

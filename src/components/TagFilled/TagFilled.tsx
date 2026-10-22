import React from "react";
import styled, { css } from "styled-components";

export interface TagFilledProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type"
> {
  type?: "Highlighted" | "Informative" | "Danger" | "Emphasized";
}

const StyledRoot = styled.span<{
  $type: "Highlighted" | "Informative" | "Danger" | "Emphasized";
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
    border-radius: 4px;
    ${(() => {
      switch ($type) {
        case "Emphasized":
          return css`
            background-color: ${"rgba(220, 250, 55, 0.10000000149011612)"};
          `;
        case "Highlighted":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Informative":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Danger":
          return css`
            background-color: ${"#ef4444"};
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
            color: ${"#0f0f0f"};
          `;
        case "Informative":
          return css`
            color: ${"#fefefe"};
          `;
        case "Danger":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.span<{
  $type: "Highlighted" | "Informative" | "Danger" | "Emphasized";
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
            color: ${"#0f0f0f"};
          `;
        case "Informative":
          return css`
            color: ${"#fefefe"};
          `;
        case "Danger":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A filled tag component used to display categorized labels with visual emphasis. Supports multiple semantic variants including Highlighted, Informative, Danger, and Emphasized to convey different contextual meanings. */
export const TagFilled = React.forwardRef<HTMLSpanElement, TagFilledProps>(
  function TagFilled({ type = "Emphasized", ...rest }, ref) {
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

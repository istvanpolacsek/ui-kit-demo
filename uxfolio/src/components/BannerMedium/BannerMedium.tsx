import React from "react";
import styled, { css } from "styled-components";

export interface BannerMediumProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type" | "hasIcon"
> {
  type?: "Negative" | "Neutral" | "Positive" | "Warning" | "Premium";
  hasIcon?: "True" | "False";
}

const StyledRoot = styled.section<{
  $type: "Negative" | "Neutral" | "Positive" | "Warning" | "Premium";
}>(
  ({ $type }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 32px;
    padding-bottom: 10px;
    padding-left: 32px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 400px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Positive":
          return css`
            background-color: ${"#2dc28c"};
          `;
        case "Warning":
          return css`
            background-color: ${"#f59e0b"};
          `;
        case "Negative":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Neutral":
          return css`
            background-color: ${"#707070"};
          `;
        case "Premium":
          return css`
            background-color: ${"#dcfa37"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Positive":
          return css`
            color: ${"#fefefe"};
          `;
        case "Warning":
          return css`
            color: ${"#fefefe"};
          `;
        case "Negative":
          return css`
            color: ${"#fefefe"};
          `;
        case "Neutral":
          return css`
            color: ${"#fefefe"};
          `;
        case "Premium":
          return css`
            color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle = styled.h3<{
  $type: "Negative" | "Neutral" | "Positive" | "Warning" | "Premium";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Positive":
          return css`
            color: ${"#fefefe"};
          `;
        case "Warning":
          return css`
            color: ${"#fefefe"};
          `;
        case "Negative":
          return css`
            color: ${"#fefefe"};
          `;
        case "Neutral":
          return css`
            color: ${"#fefefe"};
          `;
        case "Premium":
          return css`
            color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.p<{
  $type: "Negative" | "Neutral" | "Positive" | "Warning" | "Premium";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Positive":
          return css`
            color: ${"#fefefe"};
          `;
        case "Warning":
          return css`
            color: ${"#fefefe"};
          `;
        case "Negative":
          return css`
            color: ${"#fefefe"};
          `;
        case "Neutral":
          return css`
            color: ${"#fefefe"};
          `;
        case "Premium":
          return css`
            color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A banner component that displays a status message with an optional icon. Supports multiple semantic types (Positive, Negative, Neutral, Warning, Premium) and medium sizing, used to communicate contextual feedback or alerts to the user. */
export const BannerMedium = React.forwardRef<HTMLElement, BannerMediumProps>(
  function BannerMedium({ type = "Positive", hasIcon = "True", ...rest }, ref) {
    return (
      <StyledRoot
        role="status"
        aria-label="Status banner"
        {...rest}
        ref={ref}
        $type={type}
      >
        {hasIcon === "True" && (
          <StyledTitle $type={type}>{"Status"}</StyledTitle>
        )}
        <StyledLabel $type={type}>{"Status"}</StyledLabel>
      </StyledRoot>
    );
  },
);

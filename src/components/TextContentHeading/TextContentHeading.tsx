import React from "react";
import styled, { css } from "styled-components";

export interface TextContentHeadingProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasSubheading" | "heading" | "subheading" | "align"
> {
  hasSubheading?: boolean;
  heading?: string;
  subheading?: string;
  align?: "Start" | "Center";
}

const StyledRoot = styled.div<{ $align: "Start" | "Center" }>(
  ({ $align }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($align) {
        case "Start":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Center":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHeading = styled.h2(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
);

const StyledSubheading = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
  `,
);

/** A content heading block that displays a primary heading and an optional subheading, with configurable text alignment (start or center). */
export const TextContentHeading = React.forwardRef<
  HTMLDivElement,
  TextContentHeadingProps
>(function TextContentHeading(
  {
    hasSubheading = true,
    heading = "Heading",
    subheading = "Subheading",
    align = "Start",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref} $align={align}>
      <StyledHeading>{heading}</StyledHeading>
      {hasSubheading && <StyledSubheading>{subheading}</StyledSubheading>}
    </StyledRoot>
  );
});

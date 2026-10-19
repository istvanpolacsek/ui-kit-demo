import React from "react";
import styled, { css } from "styled-components";

export interface TextContentTitleProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "subtitle" | "hasSubtitle" | "title" | "align"
> {
  subtitle?: string;
  hasSubtitle?: boolean;
  title?: string;
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

const StyledTitle = styled.h2(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 72px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.03em;
  `,
);

const StyledSubtitle = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 32px;
    font-weight: 400;
    line-height: 1.2;
  `,
);

/** A content title block displaying a primary title and an optional subtitle, supporting start or center text alignment. */
export const TextContentTitle = React.forwardRef<
  HTMLDivElement,
  TextContentTitleProps
>(function TextContentTitle(
  {
    subtitle = "Subtitle",
    hasSubtitle = true,
    title = "Title",
    align = "Start",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref} $align={align}>
      <StyledTitle>{title}</StyledTitle>
      {hasSubtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </StyledRoot>
  );
});

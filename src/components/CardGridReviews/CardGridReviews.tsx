import React from "react";
import styled, { css } from "styled-components";
import { TextHeading } from "../TextHeading";
import { ReviewCard } from "../ReviewCard";

export interface CardGridReviewsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform"
> {
  platform?: "Desktop" | "Mobile";
}

const StyledRoot = styled.section<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Default"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 64px;
            padding-right: 64px;
            padding-bottom: 64px;
            padding-left: 64px;
            gap: 48px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCardGrid = styled.ul<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 48px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledReviewCard = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledReviewCard2 = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledReviewCard3 = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A responsive grid section displaying a collection of review cards, with a heading and a configurable layout for Desktop and Mobile platforms. */
export const CardGridReviews = React.forwardRef<
  HTMLElement,
  CardGridReviewsProps
>(function CardGridReviews({ platform = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Customer Reviews"
      {...rest}
      ref={ref}
      $platform={platform}
    >
      <TextHeading text={"Latest reviews"} />
      <StyledCardGrid $platform={platform}>
        <StyledReviewCard>
          <ReviewCard />
        </StyledReviewCard>
        <StyledReviewCard2>
          <ReviewCard />
        </StyledReviewCard2>
        <StyledReviewCard3>
          <ReviewCard />
        </StyledReviewCard3>
      </StyledCardGrid>
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";
import { TextContentHeading } from "../TextContentHeading";

export interface CardGridTestimonialsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform" | "cardGrid"
> {
  platform?: "Desktop" | "Mobile";
  cardGrid?: React.ReactNode;
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
            gap: 48px;
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

const StyledCardGrid = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    && > * {
      flex: 1 1 325.3333435058594px;
      min-width: 0;
      width: auto;
    }
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

/** A responsive grid layout displaying multiple testimonial cards. Supports Desktop and Mobile variants and accepts a slot for customizable card content. */
export const CardGridTestimonials = React.forwardRef<
  HTMLElement,
  CardGridTestimonialsProps
>(function CardGridTestimonials(
  { platform = "Desktop", cardGrid, ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Testimonials"
      {...rest}
      ref={ref}
      $platform={platform}
    >
      <TextContentHeading
        hasSubheading={true}
        subheading={"Subheading"}
        heading={"Heading"}
        align={"Start"}
      />
      <StyledCardGrid $platform={platform}>{cardGrid}</StyledCardGrid>
    </StyledRoot>
  );
});

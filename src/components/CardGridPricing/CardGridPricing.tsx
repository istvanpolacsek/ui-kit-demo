import React from "react";
import styled, { css } from "styled-components";
import { NavigationPillList } from "../NavigationPillList";

export interface CardGridPricingProps extends Omit<
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
            align-items: center;
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
            align-items: center;
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
      flex: 1 1 314.6666564941406px;
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
            gap: 64px;
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

/** A responsive pricing card grid layout that displays multiple pricing options side-by-side, supporting both Desktop and Mobile platform variants. Accepts a slot for consumer-provided card content and renders a navigation pill list alongside a grid of Pricing Card instances. */
export const CardGridPricing = React.forwardRef<
  HTMLElement,
  CardGridPricingProps
>(function CardGridPricing({ platform = "Desktop", cardGrid, ...rest }, ref) {
  return (
    <StyledRoot
      role="region"
      aria-label="Pricing plans"
      {...rest}
      ref={ref}
      $platform={platform}
    >
      <NavigationPillList
        link2={true}
        link1={true}
        link7={true}
        link4={false}
        link5={false}
        link6={false}
        link3={false}
        direction={"Row"}
      />
      <StyledCardGrid $platform={platform}>{cardGrid}</StyledCardGrid>
    </StyledRoot>
  );
});

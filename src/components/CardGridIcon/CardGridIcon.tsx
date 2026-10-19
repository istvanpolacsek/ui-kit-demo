import React from "react";
import styled, { css } from "styled-components";
import { TextContentHeading } from "../TextContentHeading";

export interface CardGridIconProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform" | "cards"
> {
  platform?: "Desktop" | "Mobile";
  cards?: React.ReactNode;
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

const StyledCards = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
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
            align-items: center;
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
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A responsive grid layout that displays a collection of icon cards. Supports Desktop and Mobile platform variants and accepts a configurable slot of Card components. */
export const CardGridIcon = React.forwardRef<HTMLElement, CardGridIconProps>(
  function CardGridIcon({ platform = "Desktop", cards, ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Card grid"
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
        <StyledCards $platform={platform}>{cards}</StyledCards>
      </StyledRoot>
    );
  },
);

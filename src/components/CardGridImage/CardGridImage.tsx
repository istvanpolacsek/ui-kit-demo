import React from "react";
import styled, { css } from "styled-components";
import { TextContentHeading } from "../TextContentHeading";

export interface CardGridImageProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform" | "slot"
> {
  platform?: "Desktop" | "Mobile";
  slot?: React.ReactNode;
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

const StyledSlot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 48px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    && > * {
      align-self: stretch;
      width: auto;
    }
    border-radius: 0px;
  `,
);

/** A card grid image component that displays a heading and a slotted content area, typically used to present a grid of images with a title. Supports Desktop and Mobile platform variants. */
export const CardGridImage = React.forwardRef<HTMLElement, CardGridImageProps>(
  function CardGridImage({ platform = "Desktop", slot, ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Card grid image section"
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
        <StyledSlot>{slot}</StyledSlot>
      </StyledRoot>
    );
  },
);

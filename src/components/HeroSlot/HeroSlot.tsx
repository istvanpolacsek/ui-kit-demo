import React from "react";
import styled, { css } from "styled-components";

export interface HeroSlotProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform" | "slot"
> {
  platform?: "Desktop" | "Mobile";
  slot?: React.ReactNode;
}

const StyledRoot = styled.section<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 160px;
            padding-right: 64px;
            padding-bottom: 160px;
            padding-left: 64px;
            gap: 0px;
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
            padding-top: 160px;
            padding-right: 24px;
            padding-bottom: 160px;
            padding-left: 24px;
            gap: 0px;
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

const StyledSlot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A hero section component that acts as a slot container, allowing consumers to inject custom content into a prominent page section. Supports Desktop and Mobile platform variants. */
export const HeroSlot = React.forwardRef<HTMLElement, HeroSlotProps>(
  function HeroSlot({ platform = "Desktop", slot, ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Hero section"
        {...rest}
        ref={ref}
        $platform={platform}
      >
        <StyledSlot>{slot}</StyledSlot>
      </StyledRoot>
    );
  },
);

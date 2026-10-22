import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface LinkButtonMasterProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "leftIcon" | "rightIcon" | "linkValue" | "size" | "device"
> {
  leftIcon?: boolean;
  rightIcon?: boolean;
  linkValue?: string;
  size?: "Large" | "Small";
  device?: "Desktop" | "Mobile";
}

const StyledRoot = styled.a(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 0px;
    color: ${theme["accent"]["accentGray"]};
  `,
);

const StyledTextContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledLink = styled.span<{ $size: "Large" | "Small" }>(
  ({ theme, $size }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
          `;
        case "Small":
          return css`
            font-family: "Roboto";
            font-size: 14px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: 0.005em;
            text-transform: capitalize;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A link button component that renders as an anchor element, optionally displaying left and/or right icons alongside a text label. Supports large/small sizes and desktop/mobile device variants. */
export const LinkButtonMaster = React.forwardRef<
  HTMLAnchorElement,
  LinkButtonMasterProps
>(function LinkButtonMaster(
  {
    leftIcon = true,
    rightIcon = true,
    linkValue = "Link",
    size = "Large",
    device = "Desktop",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot aria-label="Link" {...rest} ref={ref}>
      {leftIcon && <Icon name={"keyboard_arrow_down"} size={24} />}
      <StyledTextContent>
        <StyledLink $size={size}>{linkValue}</StyledLink>
      </StyledTextContent>
      {rightIcon && <Icon name={"keyboard_arrow_down"} size={24} />}
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";

export interface FooterProps extends Omit<
  React.ComponentPropsWithoutRef<"footer">,
  "platform" | "title" | "slot"
> {
  platform?: "Desktop" | "Mobile";
  title?: React.ReactNode;
  slot?: React.ReactNode;
}

const StyledRoot = styled.footer<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 160px;
            padding-left: 32px;
            gap: 16px;
            flex-wrap: wrap;
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
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 64px;
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

const StyledTitle = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 262px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
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
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledLinks = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSlot2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
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

/** A page footer component that renders a title slot and a set of link list columns. Supports Desktop and Mobile layout variants. */
export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  function Footer({ platform = "Desktop", title, slot, ...rest }, ref) {
    return (
      <StyledRoot
        role="contentinfo"
        aria-label="Site footer"
        {...rest}
        ref={ref}
        $platform={platform}
      >
        <StyledTitle $platform={platform}>{title}</StyledTitle>
        {platform === "Desktop" && <StyledSlot>{slot}</StyledSlot>}
        {platform === "Mobile" && (
          <StyledLinks>
            {platform === "Mobile" && <StyledSlot2>{slot}</StyledSlot2>}
          </StyledLinks>
        )}
      </StyledRoot>
    );
  },
);

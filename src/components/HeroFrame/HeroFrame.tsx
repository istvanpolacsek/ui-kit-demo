import React from "react";
import styled, { css } from "styled-components";
import { HomepageSearchWidget } from "../HomepageSearchWidget";

export interface HeroFrameProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Web";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    overflow: hidden;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: flex-start;
            width: 1440px;
            height: 700px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 390px;
            height: 700px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            width: 390px;
            height: 700px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHero = styled.div<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 64px;
            padding-right: 84px;
            padding-bottom: 64px;
            padding-left: 84px;
            gap: 10px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            gap: 10px;
            justify-content: space-between;
            align-items: flex-end;
            width: 390px;
            height: 700px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            background-color: ${"transparent"};
          `;
        case "Mobile":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A hero section component that renders a prominent full-width area containing a search widget. Supports both Mobile and Web device variants to adapt its layout accordingly. */
export const HeroFrame = React.forwardRef<HTMLElement, HeroFrameProps>(
  function HeroFrame({ device = "Web", ...rest }, ref) {
    return (
      <StyledRoot aria-label="Hero" {...rest} ref={ref} $device={device}>
        <StyledHero $device={device}>
          <HomepageSearchWidget steps={"Step 1"} device={"Web"} />
        </StyledHero>
      </StyledRoot>
    );
  },
);

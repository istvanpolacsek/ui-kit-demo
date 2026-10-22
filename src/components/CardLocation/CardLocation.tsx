import React from "react";
import styled, { css } from "styled-components";

export interface CardLocationProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.article<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 500px;
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
            justify-content: flex-start;
            align-items: flex-start;
            width: 310px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledImage = styled.div(
  ({ theme }) => css`
    width: 144px;
    height: 145px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 0px;
  `,
);

const StyledInfo = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 12px;
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

const StyledTitle = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 1px;
    padding-right: 0px;
    padding-bottom: 1px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledNationalUniversity = styled.h3<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPleasantHillCalifornia = styled.p<{
  $device: "Mobile" | "Desktop";
}>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 14px;
            font-weight: 700;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled100EllinwoodWayPleasantHillCA94523 = styled.p<{
  $device: "Mobile" | "Desktop";
}>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A card component displaying location information for a place, including its name, city/state, and full street address. Supports both Mobile and Desktop layout variants. */
export const CardLocation = React.forwardRef<HTMLElement, CardLocationProps>(
  function CardLocation({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="article"
        aria-label="Location card"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledImage />
        <StyledInfo $device={device}>
          <StyledTitle>
            <StyledNationalUniversity $device={device}>
              {"National University"}
            </StyledNationalUniversity>
            <StyledPleasantHillCalifornia $device={device}>
              {"Pleasant Hill, California"}
            </StyledPleasantHillCalifornia>
            <Styled100EllinwoodWayPleasantHillCA94523 $device={device}>
              {"100 Ellinwood Way, Pleasant Hill, CA, 94523"}
            </Styled100EllinwoodWayPleasantHillCA94523>
          </StyledTitle>
        </StyledInfo>
      </StyledRoot>
    );
  },
);

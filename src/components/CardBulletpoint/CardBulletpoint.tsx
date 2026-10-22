import React from "react";
import styled, { css } from "styled-components";

export interface CardBulletpointProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.article(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: #ffffff;
    color: #191a1c;
  `,
);

const StyledDecorativeLine = styled.div(
  () => css`
    background-color: #003a92;
    border-radius: 0px;
  `,
);

const StyledPictureFrame = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 0px;
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
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
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
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage3 = styled.div(
  () => css`
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledBulletpoint = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
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
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 4px;
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

const StyledAffordable = styled.h3<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    color: #191a1c;
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

const StyledAcademicProgram = styled.p<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    color: #191a1c;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A card bulletpoint component that displays a decorative line, an image frame, and a labeled text pair (e.g., category and title). Adapts layout for Mobile and Desktop variants. */
export const CardBulletpoint = React.forwardRef<
  HTMLElement,
  CardBulletpointProps
>(function CardBulletpoint({ device = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      role="article"
      aria-label="Card Bulletpoint"
      {...rest}
      ref={ref}
    >
      <StyledDecorativeLine />
      <StyledPictureFrame $device={device}>
        <StyledImage3 />
      </StyledPictureFrame>
      <StyledBulletpoint $device={device}>
        <StyledAffordable $device={device}>{"Affordable"}</StyledAffordable>
        <StyledAcademicProgram $device={device}>
          {"Academic Program"}
        </StyledAcademicProgram>
      </StyledBulletpoint>
    </StyledRoot>
  );
});

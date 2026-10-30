import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface HeroBulletpointProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
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
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 300px;
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
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 350px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["accent"]["accentWhite"]};
  `,
);

const StyledIcon = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    background-color: ${theme["background"]["bgBrand"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 7.529411792755127px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 3.7552084922790527px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFlexible150DegreePrograms = styled.span<{
  $device: "Mobile" | "Desktop";
}>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
          `;
        case "Mobile":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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

/** A hero bulletpoint component that displays an icon (check circle) alongside a descriptive text label, used to highlight key features or benefits in a hero section. Supports Mobile and Desktop variants. */
export const HeroBulletpoint = React.forwardRef<
  HTMLDivElement,
  HeroBulletpointProps
>(function HeroBulletpoint({ device = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      role="listitem"
      aria-label="Flexible 150+ Degree Programs"
      {...rest}
      ref={ref}
      $device={device}
    >
      <StyledIcon $device={device}>
        {device === "Desktop" && <Icon name={"data_check"} size={24} />}
        {device === "Mobile" && (
          <div>
            {device === "Mobile" && <Icon name={"data_check"} size={24} />}
          </div>
        )}
      </StyledIcon>
      <StyledFlexible150DegreePrograms $device={device}>
        {"Flexible 150+ Degree Programs"}
      </StyledFlexible150DegreePrograms>
    </StyledRoot>
  );
});

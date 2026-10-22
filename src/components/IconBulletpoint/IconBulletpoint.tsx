import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface IconBulletpointProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "device"
> {
  device?: "Mobile" | "Web";
}

const StyledRoot = styled.div<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    border-radius: 16px;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 12px;
            justify-content: center;
            align-items: flex-start;
            width: 622px;
            height: 79px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 12px;
            justify-content: center;
            align-items: flex-start;
            width: 692px;
            height: 74px;
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

const StyledIcon = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 7.529411792755127px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: ${theme["background"]["bgBrand"]};
  `,
);

const StyledContent = styled.div<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    border-radius: 0px;
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
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTheKeyGrantScholarship = styled.h3<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Web":
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

const StyledNeedsBasedAwardUpTo3600Annually = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A bulletpoint list item component that pairs an icon with a title and description, used to highlight key information such as scholarship details. Supports Mobile and Web variants. */
export const IconBulletpoint = React.forwardRef<
  HTMLDivElement,
  IconBulletpointProps
>(function IconBulletpoint({ device = "Web", ...rest }, ref) {
  return (
    <StyledRoot
      role="listitem"
      aria-label="Icon Bulletpoint"
      {...rest}
      ref={ref}
      $device={device}
    >
      <StyledIcon>
        {device === "Web" && <Icon name={"book_5"} size={24} />}
        {device === "Mobile" && <Icon name={"key_vertical"} size={24} />}
      </StyledIcon>
      <StyledContent $device={device}>
        <StyledTheKeyGrantScholarship $device={device}>
          {"The Key Grant Scholarship"}
        </StyledTheKeyGrantScholarship>
        <StyledNeedsBasedAwardUpTo3600Annually>
          {"Needs-based award up to $3,600 annually"}
        </StyledNeedsBasedAwardUpTo3600Annually>
      </StyledContent>
    </StyledRoot>
  );
});

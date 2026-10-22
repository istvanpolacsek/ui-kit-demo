import React from "react";
import styled, { css } from "styled-components";
import { LogoSocialMedia } from "../LogoSocialMedia";

export interface NavigationItemSocialIconProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "style" | "type"
> {
  style?: "Simple" | "Box sharp" | "Box rounded" | "Box pill";
  type?: "Icon" | "Text";
}

const StyledRoot = styled.a<{
  $style: "Simple" | "Box sharp" | "Box rounded" | "Box pill";
  $type: "Icon" | "Text";
}>(
  ({ theme, $style, $type }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$style, $type])) {
        case '["Simple","Icon"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 0px;
            padding-bottom: 8px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Box sharp","Icon"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Box rounded","Icon"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Box pill","Icon"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Simple","Text"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 0px;
            padding-bottom: 8px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Box sharp","Text"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Box rounded","Text"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Box pill","Text"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["Color 2"]};
    &:hover {
      color: ${theme["Color 1"]};
    }
  `,
);

const StyledBox = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 40px;
    height: 40px;
    border-radius: 0px;
  `,
);

const StyledText = styled.span(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A navigation item representing a social media link, displayed as either an icon or text label. Supports multiple visual styles (simple, box sharp, box rounded, box pill) and interactive states (default, hover). */
export const NavigationItemSocialIcon = React.forwardRef<
  HTMLAnchorElement,
  NavigationItemSocialIconProps
>(function NavigationItemSocialIcon(
  { style = "Simple", type = "Icon", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Dribbble"
      {...rest}
      ref={ref}
      $style={style}
      $type={type}
    >
      {type === "Icon" && <LogoSocialMedia type={"Dribbble"} />}
      {["Box sharp", "Box rounded", "Box pill"].includes(style) && (
        <StyledBox />
      )}
      {type === "Text" && <StyledText>{"Dribbble"}</StyledText>}
    </StyledRoot>
  );
});

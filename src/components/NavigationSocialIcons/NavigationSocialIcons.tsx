import React from "react";
import styled, { css } from "styled-components";
import { NavigationItemSocialIcon } from "../NavigationItemSocialIcon";
import { ToolbarThumbnail } from "../ToolbarThumbnail";

export interface NavigationSocialIconsProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "hasPage4" | "type"
> {
  hasPage4?: boolean;
  type?: "Icon" | "Text";
}

const StyledRoot = styled.nav<{ $type: "Icon" | "Text" }>(
  ({ theme, $type }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 28px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Icon":
          return css`
            color: ${theme["Color 2"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledToolbarThumbnail = styled.div(
  () => css`
    position: absolute;
    left: 36px;
    top: -76px;
    width: 56px;
    height: 56px;
  `,
);

const StyledContainer = styled.div(
  () => css`
    display: none;
    position: absolute;
    left: -12px;
    top: -12px;
    width: 152px;
    height: 64px;
    border-radius: 4px;
    &:hover {
      display: block;
    }
  `,
);

/** A navigation component displaying a row of social media icon links. Supports icon-only or text variants, default and hover states, and an optional fourth page/icon slot. */
export const NavigationSocialIcons = React.forwardRef<
  HTMLElement,
  NavigationSocialIconsProps
>(function NavigationSocialIcons(
  { hasPage4 = false, type = "Icon", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="navigation"
      aria-label="Social media links"
      {...rest}
      ref={ref}
      $type={type}
    >
      <NavigationItemSocialIcon style={"Simple"} type={"Icon"} />
      <NavigationItemSocialIcon style={"Simple"} type={"Icon"} />
      <NavigationItemSocialIcon style={"Simple"} type={"Icon"} />
      <StyledToolbarThumbnail>
        <ToolbarThumbnail
          addNavigation={false}
          addSocialLink={false}
          addMedia={false}
          addText={false}
          flipHorizontally={false}
          type={"Navigation"}
          mode={"Light"}
        />
      </StyledToolbarThumbnail>
      <StyledContainer />
    </StyledRoot>
  );
});

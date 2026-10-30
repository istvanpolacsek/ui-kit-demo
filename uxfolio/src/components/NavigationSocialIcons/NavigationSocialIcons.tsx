import React from "react";
import styled, { css } from "styled-components";
import { NavigationItemSocialIcon } from "../NavigationItemSocialIcon";
import { ToolbarThumbnail } from "../ToolbarThumbnail";

export interface NavigationSocialIconsProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "hasPage4" | "type"
> {
  hasPage4?: boolean;
  type?: "Icon" | "Text";
}

const StyledRoot = styled.button<{ $type: "Icon" | "Text" }>(
  ({ theme, $type }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
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
    &:is(button:hover:not(:disabled) *) {
      display: block;
    }
  `,
);

/** A navigation component displaying a row of social media icon links. Supports optional page indicators and can render as icon-only or text variants with default and hover states. */
export const NavigationSocialIcons = React.forwardRef<
  HTMLButtonElement,
  NavigationSocialIconsProps
>(function NavigationSocialIcons(
  { hasPage4 = false, type = "Icon", ...rest },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref} $type={type}>
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

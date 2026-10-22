import React from "react";
import styled, { css } from "styled-components";
import { NavigationItemPage } from "../NavigationItemPage";
import { ToolbarThumbnail } from "../ToolbarThumbnail";

export interface NavigationInLineProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "hasPage4" | "type"
> {
  hasPage4?: boolean;
  type?: "Regular" | "Link";
}

const StyledRoot = styled.nav(
  () => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 28px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    row-gap: 16px;
    border-radius: 0px;
  `,
);

const StyledToolbarThumbnail = styled.div(
  () => css`
    position: absolute;
    left: 73px;
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
    width: 226px;
    height: 64px;
    border-radius: 4px;
    &:hover {
      display: block;
    }
  `,
);

/** An inline navigation component displaying a series of page navigation items, with an optional fourth page and support for regular or link-style variants with default and hover states. */
export const NavigationInLine = React.forwardRef<
  HTMLElement,
  NavigationInLineProps
>(function NavigationInLine(
  { hasPage4 = false, type = "Regular", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="navigation"
      aria-label="Page navigation"
      {...rest}
      ref={ref}
    >
      <NavigationItemPage type={"Underline regular"} />
      <NavigationItemPage type={"Underline regular"} />
      <NavigationItemPage type={"Underline regular"} />
      {hasPage4 && <NavigationItemPage type={"Underline regular"} />}
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

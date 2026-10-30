import React from "react";
import styled, { css } from "styled-components";
import { HeaderSidebar } from "../HeaderSidebar";
import { MenuItemDesignSidebar } from "../MenuItemDesignSidebar";
import { MenuItemSettingsSidebar } from "../MenuItemSettingsSidebar";

export interface SidebarMainProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "type" | "page"
> {
  type?: "Settings" | "Design";
  page?: "Main" | "Case study";
}

const StyledRoot = styled.aside(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    height: 1500px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1a1a1a;
    border-radius: 0px;
  `,
);

/** A sidebar navigation panel that supports two modes (Design and Settings) and two page contexts (Main and Case study). It contains a header and a list of contextual menu items that change based on the active type variant. */
export const SidebarMain = React.forwardRef<HTMLElement, SidebarMainProps>(
  function SidebarMain({ type = "Design", page = "Main", ...rest }, ref) {
    return (
      <StyledRoot
        role="navigation"
        aria-label="Sidebar navigation"
        {...rest}
        ref={ref}
      >
        <HeaderSidebar hasBack={false} hasTabs={"False"} type={"Simple"} />
        {type === "Design" && <MenuItemDesignSidebar type={"Template"} />}
        {type === "Design" && <MenuItemDesignSidebar type={"Colors"} />}
        {type === "Design" && <MenuItemDesignSidebar type={"Fonts"} />}
        {type === "Design" && <MenuItemDesignSidebar type={"Animations"} />}
        {type === "Design" && <MenuItemDesignSidebar type={"Buttons"} />}
        {type === "Design" && <MenuItemDesignSidebar type={"Spacing"} />}
        {type === "Settings" && <MenuItemSettingsSidebar type={"Share"} />}
        {type === "Settings" && <MenuItemSettingsSidebar type={"Domain"} />}
        {type === "Settings" && <MenuItemSettingsSidebar type={"Share"} />}
        {type === "Settings" && <MenuItemSettingsSidebar type={"Share"} />}
        {type === "Settings" && <MenuItemSettingsSidebar type={"Password"} />}
        {type === "Settings" && <MenuItemSettingsSidebar type={"Password"} />}
        {type === "Settings" && page === "Main" && (
          <MenuItemSettingsSidebar type={"Archive"} />
        )}
        {type === "Settings" && page === "Main" && (
          <MenuItemSettingsSidebar type={"Show footer"} />
        )}
        {type === "Settings" && page === "Main" && (
          <MenuItemSettingsSidebar type={"Hide from search"} />
        )}
      </StyledRoot>
    );
  },
);

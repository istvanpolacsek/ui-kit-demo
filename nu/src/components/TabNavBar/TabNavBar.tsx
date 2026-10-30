import React from "react";
import styled, { css } from "styled-components";
import { Tabs } from "../Tabs";

export interface TabNavBarProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.nav<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    overflow: hidden;
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
            gap: 4px;
            justify-content: flex-start;
            align-items: center;
            width: 1272px;
            height: 80px;
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
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            width: 350px;
            height: 80px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A tab navigation bar component that renders a horizontal list of tab items, supporting both Mobile and Desktop layout variants. Used to switch between top-level sections or views within an interface. */
export const TabNavBar = React.forwardRef<HTMLElement, TabNavBarProps>(
  function TabNavBar({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="tablist"
        aria-label="Tab navigation"
        {...rest}
        ref={ref}
        $device={device}
      >
        <Tabs value={"Item"} state={"Selected"} device={"Desktop"} />
        <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        {device === "Desktop" && (
          <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        )}
        {device === "Desktop" && (
          <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        )}
        {device === "Desktop" && (
          <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        )}
        {device === "Desktop" && (
          <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        )}
        {device === "Desktop" && (
          <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        )}
        {device === "Desktop" && (
          <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        )}
        {device === "Desktop" && (
          <Tabs value={"Item"} state={"Default"} device={"Desktop"} />
        )}
      </StyledRoot>
    );
  },
);

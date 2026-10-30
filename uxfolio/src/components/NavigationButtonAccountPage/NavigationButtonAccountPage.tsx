import React from "react";
import styled, { css } from "styled-components";
import { Profile } from "../Profile";

export interface NavigationButtonAccountPageProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "state"
> {
  state?: "Default" | "Hover" | "Selected";
}

const StyledRoot = styled.a<{ $state: "Default" | "Hover" | "Selected" }>(
  ({ $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 242px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Selected":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Hover":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Selected":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAccountSettings = styled.span<{
  $state: "Default" | "Hover" | "Selected";
}>(
  ({ $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Hover":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Selected":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A navigation button linking to the Account settings page. Supports Default, Hover, and Selected visual states to indicate the current page or interaction state. */
export const NavigationButtonAccountPage = React.forwardRef<
  HTMLAnchorElement,
  NavigationButtonAccountPageProps
>(function NavigationButtonAccountPage({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="link"
      aria-label="Account settings"
      {...rest}
      ref={ref}
      $state={state}
    >
      <Profile />
      <StyledAccountSettings $state={state}>
        {"Account settings"}
      </StyledAccountSettings>
    </StyledRoot>
  );
});

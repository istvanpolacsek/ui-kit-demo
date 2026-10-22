import React from "react";
import styled, { css } from "styled-components";
import { KarmaScore } from "../KarmaScore";
import { Info } from "../Info";
import { LinkButton } from "../LinkButton";
import { Notification } from "../Notification";
import { Unlock } from "../Unlock";

export interface MenuItemAccountProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type" | "mode"
> {
  type?: "Option" | "Karma" | "Subscription";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.button<{
  $type: "Option" | "Karma" | "Subscription";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Karma":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
          `;
        case "Option":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 24px;
            padding-bottom: 12px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
          `;
        case "Subscription":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 24px;
            padding-bottom: 12px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledScore = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.span<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#d1d1d1"};
          `;
        case "Light":
          return css`
            color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAllNotifications = styled.span<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#adadad"};
          `;
        case "Light":
          return css`
            color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
    &:hover {
      ${(() => {
        switch ($mode) {
          case "Dark":
            return css`
              color: ${"#fefefe"};
            `;
          case "Light":
            return css`
              color: ${"#0f0f0f"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

const StyledUpgradeForFullAccess = styled.p(
  () => css`
    color: #dcfa37;
    &:hover {
      color: #fefefe;
    }
  `,
);

/** A menu item representing the user's account section. Supports three variants: 'Option' for generic menu actions, 'Karma' for displaying karma score and notifications, and 'Subscription' for prompting subscription upgrades. Adapts to light/dark modes and hover/default states. */
export const MenuItemAccount = React.forwardRef<
  HTMLButtonElement,
  MenuItemAccountProps
>(function MenuItemAccount({ type = "Karma", mode = "Dark", ...rest }, ref) {
  return (
    <StyledRoot
      role="menuitem"
      aria-label="Account menu item"
      {...rest}
      ref={ref}
      $type={type}
    >
      {type === "Karma" && <KarmaScore type={"Small"} />}
      {type === "Karma" && (
        <StyledInfo>
          {type === "Karma" && (
            <StyledScore>
              {type === "Karma" && (
                <StyledLabel $mode={mode}>{"3 karma points"}</StyledLabel>
              )}
              {type === "Karma" && <Info />}
            </StyledScore>
          )}
          {type === "Karma" && <LinkButton size={"Small"} mode={"Dark"} />}
        </StyledInfo>
      )}
      {type === "Option" && <Notification />}
      {type === "Option" && (
        <StyledAllNotifications $mode={mode}>
          {"All notifications"}
        </StyledAllNotifications>
      )}
      {type === "Subscription" && <Unlock />}
      {type === "Subscription" && (
        <StyledUpgradeForFullAccess>
          {"Upgrade for full access"}
        </StyledUpgradeForFullAccess>
      )}
    </StyledRoot>
  );
});

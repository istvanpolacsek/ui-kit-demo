import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import { Icon } from "../Icon";

export interface HeaderAuthProps extends Omit<
  React.ComponentPropsWithoutRef<"header">,
  "state"
> {
  state?: "Logged In" | "Logged Out" | "Logged In - Hover";
}

const StyledRoot = styled.header<{
  $state: "Logged In" | "Logged Out" | "Logged In - Hover";
}>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Logged Out":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: 178px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Logged In":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Logged In - Hover":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Logged In - Hover":
          return css`
            background-color: ${theme["Background"]["Default"]["Default Hover"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Logged Out":
          return css`
            border-radius: 0px;
          `;
        case "Logged In":
          return css`
            border-radius: 8px;
          `;
        case "Logged In - Hover":
          return css`
            border-radius: 8px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledButton = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledButton2 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A site header component that adapts its content based on authentication state. Displays login/signup buttons when logged out, and an avatar with navigation controls when logged in. */
export const HeaderAuth = React.forwardRef<HTMLElement, HeaderAuthProps>(
  function HeaderAuth({ state = "Logged Out", ...rest }, ref) {
    return (
      <StyledRoot
        role="banner"
        aria-label="Site header"
        {...rest}
        ref={ref}
        $state={state}
      >
        {state === "Logged Out" && (
          <StyledButton>
            <Button
              iconStart={"Star"}
              hasIconStart={false}
              hasIconEnd={false}
              iconEnd={"X"}
              label={"Sign in"}
              variant={"Neutral"}
              state={"Default"}
              size={"Small"}
            />
          </StyledButton>
        )}
        {state === "Logged Out" && (
          <StyledButton2>
            <Button
              iconStart={"Star"}
              hasIconStart={false}
              hasIconEnd={false}
              iconEnd={"X"}
              label={"Register"}
              variant={"Primary"}
              state={"Default"}
              size={"Small"}
            />
          </StyledButton2>
        )}
        {["Logged In", "Logged In - Hover"].includes(state) && (
          <Avatar
            initials={"F"}
            type={"Image"}
            size={"Large"}
            shape={"Circle"}
          />
        )}
        {["Logged In", "Logged In - Hover"].includes(state) && (
          <Icon name={"Chevron down"} size={16} />
        )}
      </StyledRoot>
    );
  },
);

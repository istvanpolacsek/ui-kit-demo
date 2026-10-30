import React from "react";
import styled, { css } from "styled-components";
import { UserButtonIconArrow } from "../UserButtonIconArrow";

export interface UserButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 5"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Color 4"]};
    border-radius: 999px;
    color: ${theme["Color 1"]};
  `,
);

/** A user account button that triggers a dropdown or navigation action, available in Light and Dark display modes. */
export const UserButton = React.forwardRef<HTMLButtonElement, UserButtonProps>(
  function UserButton({ mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot aria-label="User account" aria-haspopup {...rest} ref={ref}>
        <UserButtonIconArrow direction={"Left"} />
      </StyledRoot>
    );
  },
);

import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface ToastWithButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Informative" | "Error" | "Success";
}

const StyledRoot = styled.section(
  () => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 56px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 4px;
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.1),
      0px 8px 12px 0px rgba(0, 0, 0, 0.06);
    color: #fefefe;
  `,
);

const StyledContentWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledMessage = styled.p(
  () => css`
    color: #fefefe;
  `,
);

const StyledIconOnlyPrimaryButtonSubtle = styled.div(
  () => css`
    position: absolute;
    left: 358px;
    top: 14px;
    width: 28px;
    height: 28px;
  `,
);

/** A toast notification component that displays a brief message with an optional action button and a dismiss button. Supports Informative, Error, and Success variants to communicate different states to the user. */
export const ToastWithButton = React.forwardRef<
  HTMLElement,
  ToastWithButtonProps
>(function ToastWithButton({ type = "Error", ...rest }, ref) {
  return (
    <StyledRoot
      role="alert"
      aria-label="Toast notification"
      aria-describedby="toast-message"
      {...rest}
      ref={ref}
    >
      <StyledContentWrapper>
        <StyledMessage>{"Message"}</StyledMessage>
      </StyledContentWrapper>
      <StyledIconOnlyPrimaryButtonSubtle>
        <IconOnlyPrimaryButtonSubtle
          state={"Default (no BG)"}
          size={"Tiny"}
          mode={"Light"}
        />
      </StyledIconOnlyPrimaryButtonSubtle>
      <TertiaryButtonNeutral mode={"Dark"} hasIcon={"False"} size={"Small"} />
    </StyledRoot>
  );
});

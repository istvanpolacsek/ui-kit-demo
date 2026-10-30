import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface ToastLightWithButtonProps extends Omit<
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
    background-color: #eeeeee;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 4px;
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.1),
      0px 8px 12px 0px rgba(0, 0, 0, 0.06);
    color: #0f0f0f;
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
    color: #0f0f0f;
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

/** A toast notification component that displays a brief message to the user, with an optional action button and a dismiss (icon-only) button. Supports Informative, Error, and Success variants with a light theme. */
export const ToastLightWithButton = React.forwardRef<
  HTMLElement,
  ToastLightWithButtonProps
>(function ToastLightWithButton({ type = "Error", ...rest }, ref) {
  return (
    <StyledRoot role="alert" aria-label="Notification" {...rest} ref={ref}>
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
      <TertiaryButtonNeutral mode={"Light"} hasIcon={"False"} size={"Small"} />
    </StyledRoot>
  );
});

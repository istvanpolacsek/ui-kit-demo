import React from "react";
import styled, { css } from "styled-components";
import { NavigationButtonBack } from "../NavigationButtonBack";

export interface NavigationBarNonEditorProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "type"
> {
  type?: "Account" | "Reviews";
}

const StyledRoot = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 120px;
    padding-bottom: 12px;
    padding-left: 120px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 1440px;
    height: 60px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

/** A navigation bar component (non-editor variant) that provides contextual navigation controls such as back navigation for Account or Reviews sections. */
export const NavigationBarNonEditor = React.forwardRef<
  HTMLElement,
  NavigationBarNonEditorProps
>(function NavigationBarNonEditor({ type = "Account", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Page navigation" {...rest} ref={ref}>
      <NavigationButtonBack />
    </StyledRoot>
  );
});

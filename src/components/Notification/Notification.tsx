import React from "react";
import styled, { css } from "styled-components";

export interface NotificationProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  | "dismissible"
  | "icon"
  | "hasIcon"
  | "hasButton"
  | "title"
  | "body"
  | "variant"
  | "title2"
> {
  dismissible?: boolean;
  icon?: string;
  hasIcon?: boolean;
  hasButton?: boolean;
  title?: string;
  body?: string;
  variant?: "Message" | "Alert";
  title2?: React.ReactNode;
}

const StyledRoot = styled.section<{ $variant: "Message" | "Alert" }>(
  ({ theme, $variant }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($variant) {
        case "Message":
          return css`
            background-color: ${theme["Background"]["Default"]["Default"]};
          `;
        case "Alert":
          return css`
            background-color: ${theme["Background"]["Danger"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($variant) {
        case "Message":
          return css`
            border-color: ${theme["Border"]["Default"]["Secondary"]};
          `;
        case "Alert":
          return css`
            border-color: ${theme["Border"]["Danger"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

/** A notification component that displays informational or alert messages to the user, optionally with an icon, dismissible close button, and an action button. Supports 'Message' and 'Alert' variants. */
export const Notification = React.forwardRef<HTMLElement, NotificationProps>(
  function Notification(
    {
      dismissible = true,
      icon = "4039:12985",
      hasIcon = true,
      hasButton = true,
      title = "Title",
      body = "Body text.",
      variant = "Message",
      title2,
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="alert"
        aria-label="Notification"
        {...rest}
        ref={ref}
        $variant={variant}
      >
        <StyledTitle2>{title2}</StyledTitle2>
      </StyledRoot>
    );
  },
);

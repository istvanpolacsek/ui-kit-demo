import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { LinkButton } from "../LinkButton";

export interface ToastProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type" | "device"
> {
  type?: "Info" | "Error" | "Warning" | "Confirmation" | "Warnin" | "Confir";
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{
  $type: "Info" | "Error" | "Warning" | "Confirmation" | "Warnin" | "Confir";
  $device: "Mobile" | "Desktop";
}>(
  ({ theme, $type, $device }) => css`
    border-radius: 8px;
    ${(() => {
      switch (JSON.stringify([$type, $device])) {
        case '["Error","Desktop"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 20px;
            padding-bottom: 12px;
            padding-left: 16px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Warning","Desktop"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 20px;
            padding-bottom: 12px;
            padding-left: 16px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Confirmation","Desktop"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 20px;
            padding-bottom: 12px;
            padding-left: 16px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Info","Desktop"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 20px;
            padding-bottom: 12px;
            padding-left: 16px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Error","Mobile"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Warnin","Mobile"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Confir","Mobile"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Info","Mobile"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Error":
          return css`
            background-color: ${theme["alert"]["errorLight"]};
          `;
        case "Warning":
          return css`
            background-color: ${theme["alert"]["WarningLight"]};
          `;
        case "Confirmation":
          return css`
            background-color: ${theme["alert"]["successLight"]};
          `;
        case "Info":
          return css`
            background-color: ${theme["royalBlue"]["100"]};
          `;
        case "Warnin":
          return css`
            background-color: ${theme["alert"]["WarningLight"]};
          `;
        case "Confir":
          return css`
            background-color: ${theme["alert"]["successLight"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame1707482905 = styled.div(
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
    width: 383px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledErrorNotification = styled.h4<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["alert"]["errorText"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThisIsAnErrorMessage = styled.p(
  ({ theme }) => css`
    color: ${theme["alert"]["errorText"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledWarningNotification = styled.h4<{
  $type: "Info" | "Error" | "Warning" | "Confirmation" | "Warnin" | "Confir";
}>(
  ({ theme, $type }) => css`
    color: ${theme["alert"]["warningText"]};
    ${(() => {
      switch ($type) {
        case "Warning":
          return css`
            font-family: "Roboto";
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Warnin":
          return css`
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThisIsAnWarningMessage = styled.p(
  ({ theme }) => css`
    color: ${theme["alert"]["warningText"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledConfirmationNotification = styled.h4<{
  $type: "Info" | "Error" | "Warning" | "Confirmation" | "Warnin" | "Confir";
}>(
  ({ theme, $type }) => css`
    color: ${theme["alert"]["successText"]};
    ${(() => {
      switch ($type) {
        case "Confirmation":
          return css`
            font-family: "Roboto";
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Confir":
          return css`
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThisIsAnConfirmationMessage = styled.p(
  ({ theme }) => css`
    color: ${theme["alert"]["successText"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledInfoNotification = styled.h4<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["royalBlue"]["700"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThisIsAnInfoMessage = styled.p(
  ({ theme }) => css`
    color: ${theme["royalBlue"]["700"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A Toast notification component that displays brief, contextual messages to the user. Supports multiple types (Info, Error, Warning, Confirmation) with an icon, title, message body, a link/action button, and a dismiss icon. Adapts layout for Mobile and Desktop devices. */
export const Toast = React.forwardRef<HTMLElement, ToastProps>(function Toast(
  { type = "Error", device = "Desktop", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="alert"
      aria-label="Notification"
      aria-describedby="toast-message"
      {...rest}
      ref={ref}
      $type={type}
      $device={device}
    >
      {type === "Error" && <Icon name={"error_circle_rounded"} size={24} />}
      <StyledFrame1707482905>
        {type === "Error" && (
          <StyledErrorNotification $device={device}>
            {"Error Notification"}
          </StyledErrorNotification>
        )}
        {type === "Error" && (
          <StyledThisIsAnErrorMessage>
            {"This is an error message"}
          </StyledThisIsAnErrorMessage>
        )}
        {["Warning", "Warnin"].includes(type) && (
          <StyledWarningNotification $type={type}>
            {"Warning Notification"}
          </StyledWarningNotification>
        )}
        {["Warning", "Warnin"].includes(type) && (
          <StyledThisIsAnWarningMessage>
            {"This is an warning message"}
          </StyledThisIsAnWarningMessage>
        )}
        {["Confirmation", "Confir"].includes(type) && (
          <StyledConfirmationNotification $type={type}>
            {"Confirmation Notification"}
          </StyledConfirmationNotification>
        )}
        {["Confirmation", "Confir"].includes(type) && (
          <StyledThisIsAnConfirmationMessage>
            {"This is an confirmation message"}
          </StyledThisIsAnConfirmationMessage>
        )}
        {type === "Info" && (
          <StyledInfoNotification $device={device}>
            {"Info Notification"}
          </StyledInfoNotification>
        )}
        {type === "Info" && (
          <StyledThisIsAnInfoMessage>
            {"This is an Info message"}
          </StyledThisIsAnInfoMessage>
        )}
      </StyledFrame1707482905>
      <LinkButton
        linkValue={"Action"}
        rightIcon={false}
        leftIcon={false}
        size={"Large"}
        device={"Desktop"}
        state={"Default"}
        hierarchy={"Secondary"}
        type={"Default"}
      />
      <Icon name={"close_small"} size={24} />
      {["Warning", "Warnin"].includes(type) && (
        <Icon name={"warning"} size={24} />
      )}
      {["Confirmation", "Confir"].includes(type) && (
        <Icon name={"check_circle"} size={24} />
      )}
      {type === "Info" && <Icon name={"info"} size={24} />}
    </StyledRoot>
  );
});

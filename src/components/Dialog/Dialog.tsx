import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { useDialog } from "./Dialog.dialog";

export interface DialogProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "title" | "supportingText" | "icon" | "device" | "onClose"
> {
  title?: string;
  supportingText?: string;
  icon?: "True" | "False";
  device?: "Mobile" | "Desktop";
  /** Called when the user asks to close it (Escape or the close button). */
  onClose?: () => void;
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    background-color: ${theme["background"]["bgGray"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-end;
            width: 500px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-end;
            width: 312px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent = styled.div<{ $icon: "True" | "False" }>(
  ({ $icon }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($icon) {
        case "False":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "True":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 0px;
            padding-left: 24px;
            gap: 16px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitleDescription = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 0px;
    padding-left: 24px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledHeadline = styled.h2<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
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

const StyledSupportingText = styled.p(
  () => css`
    color: #49454f;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledHeadline2 = styled.h2<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
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

const StyledSupportingText2 = styled.p(
  () => css`
    color: #49454f;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledLocalActions = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledButtonContainer = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-end;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledButton = styled.li(() => css``);

const StyledButton2 = styled.li(() => css``);

/** A modal dialog component that displays a title, supporting text, and action buttons to present critical information or prompt user decisions. Supports optional icon display and adapts layout for mobile and desktop devices. */
export const Dialog = React.forwardRef<HTMLElement, DialogProps>(
  function Dialog(
    {
      title = "Basic dialog title",
      supportingText = "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
      icon = "False",
      device = "Desktop",
      onClose,
      ...rest
    },
    ref,
  ) {
    const dialog = useDialog({ onClose, forwardedRef: ref });
    return (
      <StyledRoot
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        {...rest}
        ref={dialog.ref}
        $device={device}
      >
        <StyledContent $icon={icon}>
          {icon === "False" && (
            <StyledTitleDescription>
              {icon === "False" && (
                <StyledHeadline $device={device}>
                  {"Basic dialog title"}
                </StyledHeadline>
              )}
              {icon === "False" && (
                <StyledSupportingText>
                  {
                    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
                  }
                </StyledSupportingText>
              )}
            </StyledTitleDescription>
          )}
          {icon === "True" && <Icon name={"info"} size={24} />}
          {icon === "True" && (
            <StyledHeadline2 $device={device}>
              {"Basic dialog title"}
            </StyledHeadline2>
          )}
          {icon === "True" && (
            <StyledSupportingText2>
              {
                "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
              }
            </StyledSupportingText2>
          )}
        </StyledContent>
        <StyledLocalActions>
          <StyledButtonContainer>
            <StyledButton>
              <Button
                label={true}
                bTNValue={"Action"}
                rightIcon={false}
                leftIcon={false}
                iconOnly={"False"}
                device={"Desktop"}
                size={"Medium"}
                hierarchy={"Tertiary"}
                state={"Default"}
                type={"Default"}
              />
            </StyledButton>
            <StyledButton2>
              <Button
                label={true}
                bTNValue={"Action"}
                rightIcon={false}
                leftIcon={false}
                iconOnly={"False"}
                device={"Desktop"}
                size={"Medium"}
                hierarchy={"Primary"}
                state={"Default"}
                type={"Default"}
              />
            </StyledButton2>
          </StyledButtonContainer>
        </StyledLocalActions>
      </StyledRoot>
    );
  },
);

import React from "react";
import styled, { css } from "styled-components";
import { Button, type ButtonProps } from "../Button";

export interface ButtonGroupProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "buttonStart"
  | "buttonEnd"
  | "align"
  | "buttonLabel"
  | "buttonIconEnd"
  | "buttonHasIconEnd"
  | "buttonHasIconStart"
  | "buttonIconStart"
  | "buttonVariant"
  | "buttonSize"
  | "button2Label"
  | "button2IconEnd"
  | "button2HasIconEnd"
  | "button2HasIconStart"
  | "button2IconStart"
  | "button2Variant"
  | "button2Size"
> {
  buttonStart?: boolean;
  buttonEnd?: boolean;
  align?: "Justify" | "Start" | "End" | "Center" | "Stack";
  buttonLabel?: ButtonProps["label"];
  buttonIconEnd?: ButtonProps["iconEnd"];
  buttonHasIconEnd?: ButtonProps["hasIconEnd"];
  buttonHasIconStart?: ButtonProps["hasIconStart"];
  buttonIconStart?: ButtonProps["iconStart"];
  buttonVariant?: ButtonProps["variant"];
  buttonSize?: ButtonProps["size"];
  button2Label?: ButtonProps["label"];
  button2IconEnd?: ButtonProps["iconEnd"];
  button2HasIconEnd?: ButtonProps["hasIconEnd"];
  button2HasIconStart?: ButtonProps["hasIconStart"];
  button2IconStart?: ButtonProps["iconStart"];
  button2Variant?: ButtonProps["variant"];
  button2Size?: ButtonProps["size"];
}

const StyledRoot = styled.div<{
  $align: "Justify" | "Start" | "End" | "Center" | "Stack";
}>(
  ({ $align }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($align) {
        case "Start":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: 240px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "End":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-end;
            align-items: center;
            width: 240px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Center":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: center;
            align-items: center;
            width: 240px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Justify":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: 240px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Stack":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: center;
            align-items: flex-start;
            width: 240px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledButton = styled.div<{
  $align: "Justify" | "Start" | "End" | "Center" | "Stack";
}>(
  ({ $align }) => css`
    ${(() => {
      switch ($align) {
        case "Justify":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Stack":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledButton2 = styled.div<{
  $align: "Justify" | "Start" | "End" | "Center" | "Stack";
}>(
  ({ $align }) => css`
    ${(() => {
      switch ($align) {
        case "Justify":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Stack":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A group of buttons arranged together with configurable alignment and optional start/end button visibility. Used to present related actions in a unified, styled container. */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    {
      buttonStart = true,
      buttonEnd = true,
      align = "Justify",
      buttonLabel = "Button",
      buttonIconEnd = "X",
      buttonHasIconEnd = false,
      buttonHasIconStart = false,
      buttonIconStart = "Star",
      buttonVariant = "Subtle",
      buttonSize = "Medium",
      button2Label = "Button",
      button2IconEnd = "X",
      button2HasIconEnd = false,
      button2HasIconStart = false,
      button2IconStart = "Star",
      button2Variant = "Primary",
      button2Size = "Medium",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="group"
        aria-label="Button group"
        {...rest}
        ref={ref}
        $align={align}
      >
        {buttonStart && (
          <StyledButton $align={align}>
            <Button
              label={buttonLabel}
              iconEnd={buttonIconEnd}
              hasIconEnd={buttonHasIconEnd}
              hasIconStart={buttonHasIconStart}
              iconStart={buttonIconStart}
              variant={buttonVariant}
              size={buttonSize}
            />
          </StyledButton>
        )}
        {buttonEnd && (
          <StyledButton2 $align={align}>
            <Button
              label={button2Label}
              iconEnd={button2IconEnd}
              hasIconEnd={button2HasIconEnd}
              hasIconStart={button2HasIconStart}
              iconStart={button2IconStart}
              variant={button2Variant}
              size={button2Size}
            />
          </StyledButton2>
        )}
      </StyledRoot>
    );
  },
);

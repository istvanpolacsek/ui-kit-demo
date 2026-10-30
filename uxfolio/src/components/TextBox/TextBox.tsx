import React from "react";
import styled, { css } from "styled-components";
import { TextBoxRegular, type TextBoxRegularProps } from "../TextBoxRegular";

export interface TextBoxProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "size"
  | "hasButton"
  | "reachingLimit"
  | "aboveImage"
  | "moveLeft"
  | "moveRight"
  | "state"
  | "mode"
> {
  size?: "Flexible" | "4" | "5" | "6" | "8" | "10";
  hasButton?: TextBoxRegularProps["hasButton"];
  reachingLimit?: TextBoxRegularProps["reachingLimit"];
  aboveImage?: TextBoxRegularProps["aboveImage"];
  moveLeft?: TextBoxRegularProps["moveLeft"];
  moveRight?: TextBoxRegularProps["moveRight"];
  state?: TextBoxRegularProps["state"];
  mode?: TextBoxRegularProps["mode"];
}

const StyledRoot = styled.div<{
  $size: "Flexible" | "4" | "5" | "6" | "8" | "10";
}>(
  ({ $size }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($size) {
        case "Flexible":
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
            width: 500px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "4":
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
            width: fit-content;
          `;
        case "5":
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
            width: fit-content;
          `;
        case "6":
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
            width: fit-content;
          `;
        case "8":
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
            width: fit-content;
          `;
        case "10":
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
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextBoxRegular = styled.div<{
  $size: "Flexible" | "4" | "5" | "6" | "8" | "10";
}>(
  ({ $size }) => css`
    ${(() => {
      switch ($size) {
        case "Flexible":
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

/** A multi-line text input container (textarea wrapper) that supports flexible or fixed-size variants for collecting user text input. */
export const TextBox = React.forwardRef<HTMLDivElement, TextBoxProps>(
  function TextBox(
    {
      size = "Flexible",
      hasButton = false,
      reachingLimit = false,
      aboveImage = false,
      moveLeft = true,
      moveRight = true,
      state = "Default",
      mode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="textbox"
        aria-label="Text box"
        aria-describedby="textbox-description"
        {...rest}
        ref={ref}
        $size={size}
      >
        <StyledTextBoxRegular $size={size}>
          <TextBoxRegular
            colorOverride={false}
            roundness={"Sharp"}
            hasButton={hasButton}
            reachingLimit={reachingLimit}
            aboveImage={aboveImage}
            moveLeft={moveLeft}
            moveRight={moveRight}
            state={state}
            mode={mode}
          />
        </StyledTextBoxRegular>
      </StyledRoot>
    );
  },
);

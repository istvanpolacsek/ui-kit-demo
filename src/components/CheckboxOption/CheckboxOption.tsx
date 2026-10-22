import React from "react";
import styled, { css } from "styled-components";
import { Checkbox } from "../Checkbox";

export interface CheckboxOptionProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "device"
> {
  device?: "Desktop" | "Mobile";
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 780px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledQuestion = styled.h3<{ $device: "Desktop" | "Mobile" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOptions = styled.ul<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 0px;
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
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
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

const StyledOption = styled.li<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOption1 = styled.span<{ $device: "Desktop" | "Mobile" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCheckbox = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledOption2 = styled.li<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOption22 = styled.span<{ $device: "Desktop" | "Mobile" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCheckbox2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledOption3 = styled.li<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOption32 = styled.span<{ $device: "Desktop" | "Mobile" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCheckbox3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A checkbox option group presenting a question with multiple selectable options. Supports Desktop and Mobile variants, rendering a list of labeled checkbox inputs for multi-select form interactions. */
export const CheckboxOption = React.forwardRef<
  HTMLDivElement,
  CheckboxOptionProps
>(function CheckboxOption({ device = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Question?" {...rest} ref={ref}>
      <StyledQuestion $device={device}>{"Question?"}</StyledQuestion>
      <StyledOptions $device={device}>
        <StyledOption $device={device}>
          {device === "Desktop" && <Checkbox defaultChecked={true} />}
          <StyledOption1 $device={device}>{"Option 1"}</StyledOption1>
          {device === "Mobile" && (
            <StyledCheckbox>
              {device === "Mobile" && <Checkbox defaultChecked={true} />}
            </StyledCheckbox>
          )}
        </StyledOption>
        <StyledOption2 $device={device}>
          {device === "Desktop" && <Checkbox />}
          <StyledOption22 $device={device}>{"Option 2"}</StyledOption22>
          {device === "Mobile" && (
            <StyledCheckbox2>
              {device === "Mobile" && <Checkbox />}
            </StyledCheckbox2>
          )}
        </StyledOption2>
        <StyledOption3 $device={device}>
          {device === "Desktop" && <Checkbox />}
          <StyledOption32 $device={device}>{"Option 3"}</StyledOption32>
          {device === "Mobile" && (
            <StyledCheckbox3>
              {device === "Mobile" && <Checkbox />}
            </StyledCheckbox3>
          )}
        </StyledOption3>
      </StyledOptions>
    </StyledRoot>
  );
});

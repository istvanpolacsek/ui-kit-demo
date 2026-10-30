import React from "react";
import styled, { css } from "styled-components";
import { Check } from "../Check";
import { Danger } from "../Danger";

export interface TextFieldLabeledProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state" | "mode"
> {
  state?:
    | "Default"
    | "Active"
    | "Success"
    | "Filled"
    | "Hover"
    | "Error"
    | "Disabled";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div(
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
    width: 275px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
  `,
);

const StyledInputField = styled.div<{
  $state:
    | "Default"
    | "Active"
    | "Success"
    | "Filled"
    | "Hover"
    | "Error"
    | "Disabled";
  $mode: "Light" | "Dark";
}>(
  ({ $state, $mode }) => css`
    position: relative;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 14px;
            padding-right: 16px;
            padding-bottom: 14px;
            padding-left: 16px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Hover":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 14px;
            padding-right: 16px;
            padding-bottom: 14px;
            padding-left: 16px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Active":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 14px;
            padding-right: 16px;
            padding-bottom: 14px;
            padding-left: 16px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Filled":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 14px;
            padding-right: 16px;
            padding-bottom: 14px;
            padding-left: 16px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Success":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 14px;
            padding-right: 16px;
            padding-bottom: 14px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Error":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 14px;
            padding-right: 16px;
            padding-bottom: 14px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Disabled":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 14px;
            padding-right: 16px;
            padding-bottom: 14px;
            padding-left: 16px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case '["Hover","Light"]':
          return css`
            border-color: ${"#707070"};
          `;
        case '["Active","Light"]':
          return css`
            border-color: ${"#0f0f0f"};
          `;
        case '["Filled","Light"]':
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case '["Success","Light"]':
          return css`
            border-color: ${"#2b906c"};
          `;
        case '["Error","Light"]':
          return css`
            border-color: ${"#ef4444"};
          `;
        case '["Disabled","Light"]':
          return css`
            border-color: ${"#eeeeee"};
          `;
        case '["Default","Dark"]':
          return css`
            border-color: ${"#3d3d3d"};
          `;
        case '["Hover","Dark"]':
          return css`
            border-color: ${"#707070"};
          `;
        case '["Active","Dark"]':
          return css`
            border-color: ${"#fefefe"};
          `;
        case '["Filled","Dark"]':
          return css`
            border-color: ${"#3d3d3d"};
          `;
        case '["Success","Dark"]':
          return css`
            border-color: ${"#2b906c"};
          `;
        case '["Error","Dark"]':
          return css`
            border-color: ${"#ef4444"};
          `;
        case '["Disabled","Dark"]':
          return css`
            border-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.label<{
  $state:
    | "Default"
    | "Active"
    | "Success"
    | "Filled"
    | "Hover"
    | "Error"
    | "Disabled";
  $mode: "Light" | "Dark";
}>(
  ({ $state, $mode }) => css`
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            color: ${"#707070"};
          `;
        case '["Hover","Light"]':
          return css`
            color: ${"#707070"};
          `;
        case '["Disabled","Light"]':
          return css`
            color: ${"#adadad"};
          `;
        case '["Default","Dark"]':
          return css`
            color: ${"#adadad"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#adadad"};
          `;
        case '["Disabled","Dark"]':
          return css`
            color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledValue = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Dark":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabelVisual = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    position: absolute;
    left: 12px;
    top: -9px;
    width: 41px;
    height: 18px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 4px;
    padding-bottom: 0px;
    padding-left: 4px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel2 = styled.label<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#707070"};
          `;
        case "Dark":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIconContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledHelperText = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledText = styled.p<{
  $state:
    | "Default"
    | "Active"
    | "Success"
    | "Filled"
    | "Hover"
    | "Error"
    | "Disabled";
}>(
  ({ $state }) => css`
    ${(() => {
      switch ($state) {
        case "Success":
          return css`
            color: ${"#2b906c"};
          `;
        case "Error":
          return css`
            color: ${"#ef4444"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A labeled text field component that displays an input area with an associated label, current value, and optional helper text or status icons. Supports multiple states (Default, Active, Success, Filled, Hover, Error, Disabled) and light/dark modes. */
export const TextFieldLabeled = React.forwardRef<
  HTMLDivElement,
  TextFieldLabeledProps
>(function TextFieldLabeled(
  { state = "Default", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot role="group" aria-label="Text field" {...rest} ref={ref}>
      <StyledInputField $state={state} $mode={mode}>
        {["Default", "Hover", "Disabled"].includes(state) && (
          <StyledLabel $state={state} $mode={mode}>
            {"Label"}
          </StyledLabel>
        )}
        {["Active", "Filled", "Success", "Error"].includes(state) && (
          <StyledValue $mode={mode}>{"Value"}</StyledValue>
        )}
        {["Active", "Filled", "Success", "Error"].includes(state) && (
          <StyledLabelVisual $mode={mode}>
            {["Active", "Filled", "Success", "Error"].includes(state) && (
              <StyledLabel2 $mode={mode}>{"Label"}</StyledLabel2>
            )}
          </StyledLabelVisual>
        )}
        {["Success", "Error"].includes(state) && (
          <StyledIconContainer>
            {state === "Success" && <Check />}
            {state === "Error" && <Danger />}
          </StyledIconContainer>
        )}
      </StyledInputField>
      {["Success", "Error"].includes(state) && (
        <StyledHelperText>
          {["Success", "Error"].includes(state) && (
            <StyledText $state={state}>{"Helper text"}</StyledText>
          )}
        </StyledHelperText>
      )}
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "./Switch.toggle";

export interface SwitchProps extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  | "state"
  | "checked"
  | "defaultChecked"
  | "onChange"
  | "disabled"
  | "required"
  | "name"
  | "value"
> {
  state?: "Enabled" | "Disabled" | "Focused";
  /** Whether it is on (controlled). */
  checked?: boolean;
  /** Whether it starts on (uncontrolled). */
  defaultChecked?: boolean;
  /** Called with the new state when the user toggles it. */
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  /** The form field name of the input. */
  name?: string;
  /** The form value submitted when it is on. */
  value?: string;
}

const StyledRoot = styled.label<{
  $state: "Enabled" | "Disabled" | "Focused";
  $selected: string;
}>(
  ({ theme, $state, $selected }) => css`
    display: inline-flex;
    position: relative;
    cursor: pointer;
    &:has(:disabled) {
      cursor: not-allowed;
    }
    &:has(input:focus-visible) {
      outline: 2px solid Highlight;
      outline-offset: 2px;
    }
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($state) {
        case "Enabled":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 4px;
            padding-bottom: 2px;
            padding-left: 4px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 52px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Focused":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Disabled":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 4px;
            padding-bottom: 2px;
            padding-left: 4px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 52px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$selected, $state])) {
        case '["False","Enabled"]':
          return css`
            background-color: ${theme["gray"]["400"]};
          `;
        case '["True","Enabled"]':
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["False","Disabled"]':
          return css`
            background-color: ${theme["gray"]["300"]};
          `;
        case '["True","Disabled"]':
          return css`
            background-color: ${theme["gray"]["300"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Focused":
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Enabled":
          return css`
            border-radius: 100px;
          `;
        case "Focused":
          return css`
            border-radius: 1000px;
          `;
        case "Disabled":
          return css`
            border-radius: 100px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHandle = styled.div<{ $selected: string }>(
  ({ $selected }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($selected) {
        case "False":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 8px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "True":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 8px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            flex: 1 1 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTarget = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledStateLayer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 100px;
  `,
);

const StyledHandleShape = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 11px;
    padding-right: 11px;
    padding-bottom: 11px;
    padding-left: 11px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: ${theme["surface"]["surfaceDefault"]};
    border-radius: 24px;
  `,
);

const StyledContainer = styled.div(
  () => css`
    width: 2px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 23px;
  `,
);

const StyledSwitchFalseEnabled = styled.div<{ $selected: string }>(
  ({ theme, $selected }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 2px;
    padding-right: 4px;
    padding-bottom: 2px;
    padding-left: 4px;
    gap: 0px;
    justify-content: flex-end;
    align-items: center;
    width: 52px;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
    ${(() => {
      switch ($selected) {
        case "False":
          return css`
            background-color: ${theme["gray"]["400"]};
          `;
        case "True":
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHandle2 = styled.div<{ $selected: string }>(
  ({ $selected }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($selected) {
        case "False":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 8px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "True":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 8px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            flex: 1 1 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTarget2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledStateLayer2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 100px;
  `,
);

const StyledHandleShape2 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 11px;
    padding-right: 11px;
    padding-bottom: 11px;
    padding-left: 11px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: ${theme["surface"]["surfaceDefault"]};
    border-radius: 24px;
  `,
);

const StyledContainer2 = styled.div(
  () => css`
    width: 2px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 23px;
  `,
);

/** A toggle switch component that represents an on/off state. Renders as a track with a sliding handle knob, supporting enabled, disabled, and focused states. */
export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  function Switch(
    {
      state = "Enabled",
      checked,
      defaultChecked,
      onChange,
      disabled,
      required,
      name,
      value,
      ...rest
    },
    ref,
  ) {
    const toggle = useToggle({
      checked,
      defaultChecked,
      disabled,
      required,
      name,
      value,
      onChange,
      hasDescription: false,
      ariaLabel: rest["aria-label"],
    });
    const selected = toggle.checked ? "True" : "False";
    return (
      <StyledRoot
        data-toggle-disabled={toggle.disabled || undefined}
        data-toggle-checked={toggle.checked || undefined}
        {...rest}
        ref={ref}
        $state={state}
        $selected={selected}
      >
        <input {...toggle.inputProps} />
        {["Enabled", "Disabled"].includes(state) && (
          <StyledHandle $selected={selected}>
            {["Enabled", "Disabled"].includes(state) && (
              <StyledTarget>
                {["Enabled", "Disabled"].includes(state) && (
                  <StyledStateLayer>
                    {["Enabled", "Disabled"].includes(state) && (
                      <StyledHandleShape>
                        {["Enabled", "Disabled"].includes(state) && (
                          <StyledContainer />
                        )}
                      </StyledHandleShape>
                    )}
                  </StyledStateLayer>
                )}
              </StyledTarget>
            )}
          </StyledHandle>
        )}
        {state === "Focused" && (
          <StyledSwitchFalseEnabled $selected={selected}>
            {state === "Focused" && (
              <StyledHandle2 $selected={selected}>
                {state === "Focused" && (
                  <StyledTarget2>
                    {state === "Focused" && (
                      <StyledStateLayer2>
                        {state === "Focused" && (
                          <StyledHandleShape2>
                            {state === "Focused" && <StyledContainer2 />}
                          </StyledHandleShape2>
                        )}
                      </StyledStateLayer2>
                    )}
                  </StyledTarget2>
                )}
              </StyledHandle2>
            )}
          </StyledSwitchFalseEnabled>
        )}
      </StyledRoot>
    );
  },
);

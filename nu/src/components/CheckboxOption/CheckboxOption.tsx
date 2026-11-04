import React from "react";
import styled, { css } from "styled-components";
import { Checkbox, type CheckboxProps } from "../Checkbox";
import { useChoiceGroup } from "./CheckboxOption.choicegroup";

export type CheckboxOptionItem = Omit<
  CheckboxProps,
  "checked" | "defaultChecked" | "name" | "onChange" | "value"
> & { value: string; label: string };

export interface CheckboxOptionProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "device"
  | "options"
  | "value"
  | "defaultValue"
  | "onChange"
  | "name"
  | "disabled"
> {
  device?: "Desktop" | "Mobile";
  options?: CheckboxOptionItem[];
  /** The values that are checked (controlled). */
  value?: string[];
  /** The values that start checked (uncontrolled). */
  defaultValue?: string[];
  /** Called with the new value when the user changes it. */
  onChange?: (values: string[]) => void;
  /** The form field name shared by every option. */
  name?: string;
  /** Disables every option. */
  disabled?: boolean;
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

const StyledQuestion = styled.div<{ $device: "Desktop" | "Mobile" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          `;
        case "Mobile":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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

const StyledOptions = styled.div<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
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

const StyledOption = styled.div<{ $device: "Desktop" | "Mobile" }>(
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

const StyledOption1 = styled.div<{ $device: "Desktop" | "Mobile" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          `;
        case "Mobile":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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

/** A checkbox option group presenting a question with multiple selectable options. Supports Desktop and Mobile variants, rendering a labeled set of checkboxes for multi-select input. */
export const CheckboxOption = React.forwardRef<
  HTMLDivElement,
  CheckboxOptionProps
>(function CheckboxOption(
  {
    device = "Desktop",
    options,
    value,
    defaultValue,
    onChange,
    name,
    disabled,
    ...rest
  },
  ref,
) {
  const group = useChoiceGroup({
    value,
    defaultValue,
    onChange,
    name,
    disabled,
  });
  return (
    <StyledRoot role="group" {...rest} ref={ref}>
      <StyledQuestion $device={device}>{"Question?"}</StyledQuestion>
      <StyledOptions $device={device}>
        {(options ?? []).map(({ label, ...item }) => (
          <StyledOption
            $device={device}
            key={item.value}
            {...group.rowProps(item.value, item.disabled)}
          >
            {device === "Desktop" && (
              <Checkbox
                {...item}
                name={group.name}
                checked={group.isChecked(item.value)}
                disabled={group.disabled || item.disabled}
                onChange={(checked) => group.select(item.value, checked)}
                aria-label={label}
              />
            )}
            <StyledOption1 $device={device}>{label}</StyledOption1>
            {device === "Mobile" && (
              <StyledCheckbox>
                {device === "Mobile" && (
                  <Checkbox
                    {...item}
                    name={group.name}
                    checked={group.isChecked(item.value)}
                    disabled={group.disabled || item.disabled}
                    onChange={(checked) => group.select(item.value, checked)}
                    aria-label={label}
                  />
                )}
              </StyledCheckbox>
            )}
          </StyledOption>
        ))}
      </StyledOptions>
    </StyledRoot>
  );
});

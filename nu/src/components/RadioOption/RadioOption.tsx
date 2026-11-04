import React from "react";
import styled, { css } from "styled-components";
import { Radio, type RadioProps } from "../Radio";
import { useChoiceGroup } from "./RadioOption.choicegroup";

export type RadioOptionItem = Omit<
  RadioProps,
  "checked" | "defaultChecked" | "name" | "onChange" | "value"
> & { value: string; label: string };

export interface RadioOptionProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "device"
  | "options"
  | "value"
  | "defaultValue"
  | "onChange"
  | "name"
  | "disabled"
> {
  device?: "Mobile" | "Desktop";
  options?: RadioOptionItem[];
  /** The chosen option value (controlled). */
  value?: string;
  /** The option value that starts chosen (uncontrolled). */
  defaultValue?: string;
  /** Called with the new value when the user changes it. */
  onChange?: (value: string) => void;
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

const StyledQuestion = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledQuestion2 = styled.div<{ $device: "Mobile" | "Desktop" }>(
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

const StyledOptions = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledOption = styled.div<{ $device: "Mobile" | "Desktop" }>(
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

const StyledOption1 = styled.div<{ $device: "Mobile" | "Desktop" }>(
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

const StyledRadio = styled.div(
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

/** A radio option group presenting a question with multiple selectable radio button options. Supports Mobile and Desktop layout variants. */
export const RadioOption = React.forwardRef<HTMLDivElement, RadioOptionProps>(
  function RadioOption(
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
      <StyledRoot role="radiogroup" {...rest} ref={ref}>
        <StyledQuestion>
          <StyledQuestion2 $device={device}>{"Question?"}</StyledQuestion2>
        </StyledQuestion>
        <StyledOptions>
          {(options ?? []).map(({ label, ...item }) => (
            <StyledOption
              $device={device}
              key={item.value}
              {...group.rowProps(item.value, item.disabled)}
            >
              {device === "Desktop" && (
                <Radio
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
                <StyledRadio>
                  {device === "Mobile" && (
                    <Radio
                      {...item}
                      name={group.name}
                      checked={group.isChecked(item.value)}
                      disabled={group.disabled || item.disabled}
                      onChange={(checked) => group.select(item.value, checked)}
                      aria-label={label}
                    />
                  )}
                </StyledRadio>
              )}
            </StyledOption>
          ))}
        </StyledOptions>
      </StyledRoot>
    );
  },
);

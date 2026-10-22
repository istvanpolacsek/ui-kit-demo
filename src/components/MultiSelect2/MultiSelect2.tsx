import React from "react";
import styled, { css } from "styled-components";
import { ToggleRadioBox } from "../ToggleRadioBox";

export interface MultiSelect2Props extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
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
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#4d4c4c"};
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

const StyledField = styled.ul(
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
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledToggleRadioBox = styled.li(() => css``);

const StyledValue = styled.li<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#4d4c4c"};
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

const StyledField2 = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledValue2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#4d4c4c"};
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

const StyledField3 = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledValue3 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#4d4c4c"};
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

/** A multi-select field group that presents multiple options, each with a toggle/radio control and a value label, allowing users to select one or more items from a list. */
export const MultiSelect2 = React.forwardRef<HTMLDivElement, MultiSelect2Props>(
  function MultiSelect2({ mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot
        role="group"
        aria-label="Multi select options"
        {...rest}
        ref={ref}
        $mode={mode}
      >
        <StyledField>
          <StyledToggleRadioBox>
            <ToggleRadioBox state={"True"} mode={"Light"} />
          </StyledToggleRadioBox>
          <StyledValue $mode={mode}>{"Value"}</StyledValue>
        </StyledField>
        <StyledField2>
          <ToggleRadioBox state={"False"} mode={"Light"} />
          <StyledValue2 $mode={mode}>{"Value"}</StyledValue2>
        </StyledField2>
        <StyledField3>
          <ToggleRadioBox state={"False"} mode={"Light"} />
          <StyledValue3 $mode={mode}>{"Value"}</StyledValue3>
        </StyledField3>
      </StyledRoot>
    );
  },
);

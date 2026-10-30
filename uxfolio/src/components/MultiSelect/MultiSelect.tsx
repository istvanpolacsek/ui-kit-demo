import React from "react";
import styled, { css } from "styled-components";
import { ToggleCheckBox } from "../ToggleCheckBox";

export interface MultiSelectProps extends Omit<
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

const StyledToggleCheckBox = styled.li(() => css``);

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

const StyledField2 = styled.ul(
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

const StyledToggleCheckBox2 = styled.li(() => css``);

const StyledValue2 = styled.li<{ $mode: "Dark" | "Light" }>(
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

const StyledField3 = styled.ul(
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

const StyledToggleCheckBox3 = styled.li(() => css``);

const StyledValue3 = styled.li<{ $mode: "Dark" | "Light" }>(
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

/** A multi-select field group presenting multiple checkbox options, each with an associated label, allowing users to select one or more values from a list. */
export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  function MultiSelect({ mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot
        role="group"
        aria-label="Multi select options"
        {...rest}
        ref={ref}
        $mode={mode}
      >
        <StyledField>
          <StyledToggleCheckBox>
            <ToggleCheckBox state={"True"} mode={"Light"} />
          </StyledToggleCheckBox>
          <StyledValue $mode={mode}>{"Value"}</StyledValue>
        </StyledField>
        <StyledField2>
          <StyledToggleCheckBox2>
            <ToggleCheckBox state={"False"} mode={"Light"} />
          </StyledToggleCheckBox2>
          <StyledValue2 $mode={mode}>{"Value"}</StyledValue2>
        </StyledField2>
        <StyledField3>
          <StyledToggleCheckBox3>
            <ToggleCheckBox state={"False"} mode={"Light"} />
          </StyledToggleCheckBox3>
          <StyledValue3 $mode={mode}>{"Value"}</StyledValue3>
        </StyledField3>
      </StyledRoot>
    );
  },
);

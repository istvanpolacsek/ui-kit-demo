import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import { PopoverListDropdown } from "../PopoverListDropdown";

export interface DropListLabellessProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    position: relative;
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

const StyledInputField = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 6px;
    padding-right: 12px;
    padding-bottom: 6px;
    padding-left: 16px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 4px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Dark":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
    &:hover {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              background-color: ${"#d1d1d1"};
            `;
          case "Dark":
            return css`
              background-color: ${"#333333"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

const StyledContent = styled.div(
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
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledValue = styled.span<{ $mode: "Dark" | "Light" }>(
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
    &:disabled {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              color: ${"#adadad"};
            `;
          case "Dark":
            return css`
              color: ${"#4d4c4c"};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:active {
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
    }
  `,
);

const StyledPopoverListDropdown = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 52px;
    width: 275px;
    height: 209px;
  `,
);

/** A labelless dropdown list component that displays a selected value and toggles a popover list of options. Supports default, hover, active, and disabled states in both light and dark modes. */
export const DropListLabelless = React.forwardRef<
  HTMLDivElement,
  DropListLabellessProps
>(function DropListLabelless({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="combobox"
      aria-label="Select an option"
      aria-haspopup
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <StyledInputField $mode={mode}>
        <StyledContent>
          <StyledValue $mode={mode}>{"Value"}</StyledValue>
          <VisualAsset name={"Chevron down"} size={24} />
          <VisualAsset name={"Chevron up"} size={24} />
        </StyledContent>
      </StyledInputField>
      <StyledPopoverListDropdown>
        <PopoverListDropdown
          hasAction={true}
          type={"Hero text"}
          mode={"Light"}
        />
      </StyledPopoverListDropdown>
    </StyledRoot>
  );
});

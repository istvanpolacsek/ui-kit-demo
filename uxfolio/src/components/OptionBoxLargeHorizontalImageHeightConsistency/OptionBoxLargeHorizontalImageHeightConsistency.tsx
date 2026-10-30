import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewLargeHorizontalImageHeightConsistency } from "../OptionPreviewLargeHorizontalImageHeightConsistency";

export interface OptionBoxLargeHorizontalImageHeightConsistencyProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "showLabel" | "type"
> {
  showLabel?: boolean;
  type?: "Even" | "Uneven";
}

const StyledRoot = styled.button(
  () => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    border-radius: 0px;
    color: #d1d1d1;
  `,
);

const StyledLabel = styled.label(
  () => css`
    color: #d1d1d1;
    &:is(button:active:not(:disabled) *) {
      color: #fefefe;
    }
  `,
);

/** A large horizontal option box component that displays an image preview with an optional label. Supports even and uneven image height variants, and interactive states (default, hover, active) for use in selection or configuration UIs. */
export const OptionBoxLargeHorizontalImageHeightConsistency = React.forwardRef<
  HTMLButtonElement,
  OptionBoxLargeHorizontalImageHeightConsistencyProps
>(function OptionBoxLargeHorizontalImageHeightConsistency(
  { showLabel = true, type = "Even", ...rest },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewLargeHorizontalImageHeightConsistency type={"Even"} />
      {showLabel && (
        <StyledLabel>
          {
            (
              { '["Even"]': "Even", '["Uneven"]': "Uneven" } as Record<
                string,
                string
              >
            )[JSON.stringify([type])]
          }
        </StyledLabel>
      )}
    </StyledRoot>
  );
});

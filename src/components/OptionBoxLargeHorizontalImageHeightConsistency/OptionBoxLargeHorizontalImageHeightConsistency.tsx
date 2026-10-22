import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewLargeHorizontalImageHeightConsistency } from "../OptionPreviewLargeHorizontalImageHeightConsistency";

export interface OptionBoxLargeHorizontalImageHeightConsistencyProps extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  "showLabel" | "type"
> {
  showLabel?: boolean;
  type?: "Even" | "Uneven";
}

const StyledRoot = styled.label(
  () => css`
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

const StyledLabel = styled.span(
  () => css`
    color: #d1d1d1;
    &:active {
      color: #fefefe;
    }
  `,
);

/** A large horizontal option box with image height consistency, allowing users to select an option. Supports default, hover, and active states, with an optional visible label. Renders as a labeled selectable control wrapping an option preview. */
export const OptionBoxLargeHorizontalImageHeightConsistency = React.forwardRef<
  HTMLLabelElement,
  OptionBoxLargeHorizontalImageHeightConsistencyProps
>(function OptionBoxLargeHorizontalImageHeightConsistency(
  { showLabel = true, type = "Even", ...rest },
  ref,
) {
  return (
    <StyledRoot role="option" aria-label="Option box" {...rest} ref={ref}>
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

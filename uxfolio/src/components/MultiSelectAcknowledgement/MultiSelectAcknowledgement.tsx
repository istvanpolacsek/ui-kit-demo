import React from "react";
import styled, { css } from "styled-components";
import { ToggleCheckBox } from "../ToggleCheckBox";

export interface MultiSelectAcknowledgementProps extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  "state" | "mode"
> {
  state?: "Inactive" | "Active";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.label<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 2px;
    padding-right: 0px;
    padding-bottom: 2px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 332px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledIAcknowledgeThatMyDomainMayTake48HoursToActivate = styled.span<{
  $mode: "Light" | "Dark";
}>(
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

/** A multi-select acknowledgement component combining a checkbox with a descriptive label text, used to confirm user understanding of a condition (e.g., domain activation delay). */
export const MultiSelectAcknowledgement = React.forwardRef<
  HTMLLabelElement,
  MultiSelectAcknowledgementProps
>(function MultiSelectAcknowledgement(
  { state = "Inactive", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="I acknowledge that my domain may take 48 hours to activate."
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <ToggleCheckBox state={"False"} mode={"Light"} />
      <StyledText>
        <StyledIAcknowledgeThatMyDomainMayTake48HoursToActivate $mode={mode}>
          {"I acknowledge that my domain may take 48 hours to activate."}
        </StyledIAcknowledgeThatMyDomainMayTake48HoursToActivate>
      </StyledText>
    </StyledRoot>
  );
});

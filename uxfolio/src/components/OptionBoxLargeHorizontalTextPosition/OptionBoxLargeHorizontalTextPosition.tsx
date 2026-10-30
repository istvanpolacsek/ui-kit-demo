import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewLargeHorizontalTextPosition } from "../OptionPreviewLargeHorizontalTextPosition";

export interface OptionBoxLargeHorizontalTextPositionProps extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  "showLabel" | "type"
> {
  showLabel?: boolean;
  type?: "No text" | "Below" | "Above" | "Between";
}

const StyledRoot = styled.label<{
  $type: "No text" | "Below" | "Above" | "Between";
}>(
  ({ $type }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Below":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Above":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Between":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "No text":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    color: #d1d1d1;
  `,
);

const StyledLabel = styled.label(
  () => css`
    color: #d1d1d1;
    &:active {
      color: #fefefe;
    }
  `,
);

/** A large horizontal option box component with configurable text position (above, below, between, or none) and an optional label. Used to present a selectable option with a visual preview and associated label text. */
export const OptionBoxLargeHorizontalTextPosition = React.forwardRef<
  HTMLLabelElement,
  OptionBoxLargeHorizontalTextPositionProps
>(function OptionBoxLargeHorizontalTextPosition(
  { showLabel = true, type = "Below", ...rest },
  ref,
) {
  return (
    <StyledRoot role="group" {...rest} ref={ref} $type={type}>
      <OptionPreviewLargeHorizontalTextPosition textPosition={"Below"} />
      {showLabel && (
        <StyledLabel>
          {
            (
              {
                '["Below"]': "Below",
                '["Above"]': "Above",
                '["Between"]': "Between",
                '["No text"]': "No text",
              } as Record<string, string>
            )[JSON.stringify([type])]
          }
        </StyledLabel>
      )}
    </StyledRoot>
  );
});

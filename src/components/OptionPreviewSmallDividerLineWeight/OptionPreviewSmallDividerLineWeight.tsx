import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewSmallDividerLineWeightProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "weight"
> {
  weight?: "Bold" | "Light" | "Medium";
}

const StyledRoot = styled.div<{ $weight: "Bold" | "Light" | "Medium" }>(
  ({ $weight }) => css`
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    ${(() => {
      switch ($weight) {
        case "Light":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 9px;
            padding-bottom: 0px;
            padding-left: 10px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 59px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Medium":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 8.5px;
            padding-bottom: 0px;
            padding-left: 10.5px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 59px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Bold":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 8.66650390625px;
            padding-bottom: 0px;
            padding-left: 10.33349609375px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 59px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 59px;
    height: 59px;
    box-sizing: border-box;
  `,
);

const StyledBase = styled.span(
  () => css`
    width: 40px;
    height: 1px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A visual divider component used to separate options or list items, available in multiple line weight variants (Bold, Medium, Light). */
export const OptionPreviewSmallDividerLineWeight = React.forwardRef<
  HTMLDivElement,
  OptionPreviewSmallDividerLineWeightProps
>(function OptionPreviewSmallDividerLineWeight(
  { weight = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="separator"
      aria-label="Divider"
      {...rest}
      ref={ref}
      $weight={weight}
    >
      <StyledBase />
    </StyledRoot>
  );
});

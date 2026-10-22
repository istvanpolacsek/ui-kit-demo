import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewMediumSquareAspectRatioProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "aspectRatio"
> {
  aspectRatio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "Original";
}

const StyledRoot = styled.div<{
  $aspectRatio: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "Original";
}>(
  ({ $aspectRatio }) => css`
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    ${(() => {
      switch ($aspectRatio) {
        case "16:9":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 16px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "4:3":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 16px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "1:1":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 16px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "3:4":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 26px;
            padding-right: 16px;
            padding-bottom: 26px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "9:16":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 16px;
            padding-bottom: 18px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Original":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 26px;
            padding-right: 16px;
            padding-bottom: 26px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 84px;
    height: 84px;
    box-sizing: border-box;
  `,
);

const StyledLayer = styled.div(
  () => css`
    width: 24px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledLayer2 = styled.div(
  () => css`
    width: 24px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

/** A preview component that displays a visual representation of a selected aspect ratio option (e.g., 16:9, 4:3, 1:1) as a medium square thumbnail, allowing users to visualize and select from available aspect ratio variants. */
export const OptionPreviewMediumSquareAspectRatio = React.forwardRef<
  HTMLDivElement,
  OptionPreviewMediumSquareAspectRatioProps
>(function OptionPreviewMediumSquareAspectRatio(
  { aspectRatio = "16:9", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="img"
      aria-label="Aspect ratio preview: 16:9"
      {...rest}
      ref={ref}
      $aspectRatio={aspectRatio}
    >
      <StyledLayer />
      <StyledLayer2 />
    </StyledRoot>
  );
});

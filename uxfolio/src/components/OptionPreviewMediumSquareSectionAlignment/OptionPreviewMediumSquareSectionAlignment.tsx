import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewMediumSquareSectionAlignmentProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "alignment"
> {
  alignment?: "Left" | "Center" | "Right" | "Top" | "Middle" | "Bottom";
}

const StyledRoot = styled.div<{
  $alignment: "Left" | "Center" | "Right" | "Top" | "Middle" | "Bottom";
}>(
  ({ $alignment }) => css`
    background-color: #262626;
    border-radius: 0px;
    ${(() => {
      switch ($alignment) {
        case "Left":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 32px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Center":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 24px;
            padding-bottom: 16px;
            padding-left: 24px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 32px;
            gap: 4px;
            justify-content: center;
            align-items: flex-end;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Top":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 32px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Middle":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 16px;
            padding-bottom: 24px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Bottom":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 32px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: flex-end;
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

const StyledLayer = styled.span(
  () => css`
    width: 36px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledLayer2 = styled.span(
  () => css`
    width: 16px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A visual preview component for section alignment options (Left, Center, Right, Top, Middle, Bottom), displayed as a medium square indicator used in alignment selection controls. */
export const OptionPreviewMediumSquareSectionAlignment = React.forwardRef<
  HTMLDivElement,
  OptionPreviewMediumSquareSectionAlignmentProps
>(function OptionPreviewMediumSquareSectionAlignment(
  { alignment = "Left", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="img"
      aria-label="Section alignment preview"
      {...rest}
      ref={ref}
      $alignment={alignment}
    >
      <StyledLayer />
      <StyledLayer2 />
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewLargeHorizontalTextPositionProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "textPosition"
> {
  textPosition?: "No text" | "Below" | "Above" | "Between";
}

const StyledRoot = styled.div<{
  $textPosition: "No text" | "Below" | "Above" | "Between";
}>(
  ({ $textPosition }) => css`
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    ${(() => {
      switch ($textPosition) {
        case "Below":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Above":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Between":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "No text":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 10px;
            justify-content: center;
            align-items: flex-start;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: transparent;
  `,
);

const StyledIllustration = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRectangle698 = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledAa = styled.span(
  () => css`
    color: transparent;
  `,
);

const StyledFrame48096228 = styled.div<{
  $textPosition: "No text" | "Below" | "Above" | "Between";
}>(
  ({ $textPosition }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($textPosition) {
        case "Above":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "No text":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            height: 12px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAa2 = styled.span(
  () => css`
    color: transparent;
  `,
);

const StyledRectangle6982 = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledFrame48096229 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame480962292 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRectangle6983 = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledAa3 = styled.span(
  () => css`
    color: transparent;
  `,
);

const StyledRectangle699 = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A preview component for a selectable option displayed in a large horizontal layout. Supports multiple text position variants (No text, Below, Above, Between) relative to an illustration or visual element. */
export const OptionPreviewLargeHorizontalTextPosition = React.forwardRef<
  HTMLDivElement,
  OptionPreviewLargeHorizontalTextPositionProps
>(function OptionPreviewLargeHorizontalTextPosition(
  { textPosition = "Below", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="group"
      aria-label="Option preview"
      {...rest}
      ref={ref}
      $textPosition={textPosition}
    >
      {textPosition === "Below" && (
        <StyledIllustration>
          {textPosition === "Below" && <StyledRectangle698 />}
          {textPosition === "Below" && <StyledAa>{"Aa"}</StyledAa>}
        </StyledIllustration>
      )}
      {["Above", "No text"].includes(textPosition) && (
        <StyledFrame48096228 $textPosition={textPosition}>
          {textPosition === "Above" && <StyledAa2>{"Aa"}</StyledAa2>}
          {["Above", "No text"].includes(textPosition) && (
            <StyledRectangle6982 />
          )}
        </StyledFrame48096228>
      )}
      {textPosition === "Between" && (
        <StyledFrame48096229>
          {textPosition === "Between" && (
            <StyledFrame480962292>
              {textPosition === "Between" && <StyledRectangle6983 />}
              {textPosition === "Between" && <StyledAa3>{"Aa"}</StyledAa3>}
              {textPosition === "Between" && <StyledRectangle699 />}
            </StyledFrame480962292>
          )}
        </StyledFrame48096229>
      )}
    </StyledRoot>
  );
});

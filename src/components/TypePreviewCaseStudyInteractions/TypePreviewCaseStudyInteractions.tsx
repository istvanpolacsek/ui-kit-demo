import React from "react";
import styled, { css } from "styled-components";

export interface TypePreviewCaseStudyInteractionsProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?:
    | "Zoom in"
    | "Arrow"
    | "Tilt image"
    | "Card color"
    | "Underline title"
    | "Blur bg"
    | "Blob bg";
}

const StyledRoot = styled.div<{
  $type:
    | "Zoom in"
    | "Arrow"
    | "Tilt image"
    | "Card color"
    | "Underline title"
    | "Blur bg"
    | "Blob bg";
}>(
  ({ $type }) => css`
    overflow: hidden;
    background-color: #4d4c4c;
    border-radius: 3px;
    ${(() => {
      switch ($type) {
        case "Arrow":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 7px;
            padding-right: 23px;
            padding-bottom: 12px;
            padding-left: 28px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Card color":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 28px;
            padding-bottom: 12px;
            padding-left: 28px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Underline title":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 22px;
            padding-right: 33px;
            padding-bottom: 22px;
            padding-left: 33px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 96px;
    height: 64px;
    box-sizing: border-box;
    color: #adadad;
  `,
);

const StyledBase = styled.div(
  () => css`
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 4px;
    box-shadow: 0px 103.23px 103.23px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledHighlight = styled.div(
  () => css`
    width: 36px;
    height: 22.5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.1599999964237213);
    border-radius: 4px;
  `,
);

const StyledArrow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #adadad;
    border-radius: 33px;
  `,
);

const StyledBoundingBox = styled.div(
  () => css`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #d9d9d9;
    border-radius: 0px;
  `,
);

const StyledarrowOutward = styled.div(
  () => css`
    width: 6.093749523162842px;
    height: 6.093749523162842px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1c1b1f;
    border-radius: 0px;
  `,
);

const StyledBase2 = styled.div(
  () => css`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 4px;
    box-shadow: 0px 103.23px 103.23px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledHighlight2 = styled.div(
  () => css`
    width: 40px;
    height: 25px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.1599999964237213);
    border-radius: 4px;
  `,
);

const StyledFrame427321498 = styled.div(
  () => css`
    overflow: hidden;
    background-color: #adadad;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
  `,
);

const StyledTypePreviewCardColorChange = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    overflow: hidden;
    background-color: #adadad;
    border-radius: 6px;
  `,
);

const StyledBase3 = styled.div(
  () => css`
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 4px;
    box-shadow: 0px 103.23px 103.23px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledHighlight3 = styled.div(
  () => css`
    width: 32px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.1599999964237213);
    border-radius: 4px;
  `,
);

const StyledTitle = styled.h3(
  () => css`
    color: #adadad;
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-decoration: underline;
  `,
);

const StyledFrame427321501 = styled.div<{
  $type:
    | "Zoom in"
    | "Arrow"
    | "Tilt image"
    | "Card color"
    | "Underline title"
    | "Blur bg"
    | "Blob bg";
}>(
  ({ $type }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 7px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    ${(() => {
      switch ($type) {
        case "Blur bg":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.10000000149011612)"};
          `;
        case "Blob bg":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Blur bg":
          return css`
            border-radius: 4px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame427321500 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 25px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRectangle2 = styled.div<{
  $type:
    | "Zoom in"
    | "Arrow"
    | "Tilt image"
    | "Card color"
    | "Underline title"
    | "Blur bg"
    | "Blob bg";
}>(
  ({ $type }) => css`
    border-radius: 1px;
    ${(() => {
      switch ($type) {
        case "Blur bg":
          return css`
            background-color: ${"#adadad"};
          `;
        case "Blob bg":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle3 = styled.div<{
  $type:
    | "Zoom in"
    | "Arrow"
    | "Tilt image"
    | "Card color"
    | "Underline title"
    | "Blur bg"
    | "Blob bg";
}>(
  ({ $type }) => css`
    border-radius: 1px;
    ${(() => {
      switch ($type) {
        case "Blur bg":
          return css`
            background-color: ${"#adadad"};
          `;
        case "Blob bg":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A visual preview component showcasing different interaction types for case study cards, including zoom, arrow, tilt, color change, underline, blur, and blob background effects. Used to demonstrate hover or animation states in a design system. */
export const TypePreviewCaseStudyInteractions = React.forwardRef<
  HTMLDivElement,
  TypePreviewCaseStudyInteractionsProps
>(function TypePreviewCaseStudyInteractions(
  { type = "Zoom in", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Case study interaction type preview"
      {...rest}
      ref={ref}
      $type={type}
    >
      {["Zoom in", "Arrow", "Tilt image", "Blur bg", "Blob bg"].includes(
        type,
      ) && (
        <div>
          {["Zoom in", "Arrow", "Tilt image", "Blur bg", "Blob bg"].includes(
            type,
          ) && <StyledBase />}
          {["Zoom in", "Arrow", "Tilt image", "Blur bg", "Blob bg"].includes(
            type,
          ) && <StyledHighlight />}
          {type === "Arrow" && (
            <StyledArrow>
              {type === "Arrow" && (
                <div>
                  {type === "Arrow" && <StyledBoundingBox />}
                  {type === "Arrow" && <StyledarrowOutward />}
                </div>
              )}
            </StyledArrow>
          )}
        </div>
      )}
      {type === "Zoom in" && (
        <div>
          {type === "Zoom in" && <StyledBase2 />}
          {type === "Zoom in" && <StyledHighlight2 />}
        </div>
      )}
      {type === "Tilt image" && <StyledFrame427321498></StyledFrame427321498>}
      {type === "Card color" && (
        <StyledTypePreviewCardColorChange>
          {type === "Card color" && (
            <div>
              {type === "Card color" && <StyledBase3 />}
              {type === "Card color" && <StyledHighlight3 />}
            </div>
          )}
        </StyledTypePreviewCardColorChange>
      )}
      {type === "Underline title" && <StyledTitle>{"Title"}</StyledTitle>}
      {["Blur bg", "Blob bg"].includes(type) && (
        <StyledFrame427321501 $type={type}>
          {["Blur bg", "Blob bg"].includes(type) && (
            <StyledFrame427321500>
              {["Blur bg", "Blob bg"].includes(type) && (
                <StyledRectangle2 $type={type} />
              )}
              {["Blur bg", "Blob bg"].includes(type) && (
                <StyledRectangle3 $type={type} />
              )}
            </StyledFrame427321500>
          )}
        </StyledFrame427321501>
      )}
    </StyledRoot>
  );
});

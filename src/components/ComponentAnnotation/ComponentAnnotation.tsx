import React from "react";
import styled, { css } from "styled-components";

export interface ComponentAnnotationProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "direction" | "type"
> {
  direction?: "Right" | "Top" | "Bottom" | "Left";
  type?: "Primary" | "Secondary" | "Group";
}

const StyledRoot = styled.div<{
  $direction: "Right" | "Top" | "Bottom" | "Left";
  $type: "Primary" | "Secondary" | "Group";
}>(
  ({ $direction, $type }) => css`
    ${(() => {
      switch (JSON.stringify([$direction, $type])) {
        case '["Right","Group"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Top","Group"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Bottom","Group"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Left","Group"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Right","Primary"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Top","Primary"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Bottom","Primary"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Left","Primary"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Right","Secondary"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Top","Secondary"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Bottom","Secondary"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Left","Secondary"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Group":
          return css`
            border-radius: 9999px;
          `;
        case "Primary":
          return css`
            border-radius: 0px;
          `;
        case "Secondary":
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPill = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 12px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: ${theme["Background"]["Neutral"]["Tertiary"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Neutral"]["tertiary"]};
    border-radius: 9999px;
  `,
);

const StyledLabel = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Neutral"]["On Neutral Tertiary"]};
    font-family: "Roboto Mono";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledPointer = styled.div<{
  $direction: "Right" | "Top" | "Bottom" | "Left";
}>(
  ({ $direction }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($direction) {
        case "Right":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            align-self: stretch;
          `;
        case "Top":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        case "Bottom":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        case "Left":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 38px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledBarHorizontal = styled.div(
  ({ theme }) => css`
    width: 22px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Background"]["Neutral"]["Tertiary"]};
    border-radius: 0px;
  `,
);

const StyledBarVertical = styled.div(
  ({ theme }) => css`
    background-color: ${theme["Background"]["Neutral"]["Tertiary"]};
    border-radius: 0px;
  `,
);

const StyledBarHorizontal2 = styled.div(
  ({ theme }) => css`
    width: 2px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Background"]["Neutral"]["Tertiary"]};
    border-radius: 0px;
  `,
);

const StyledLabel2 = styled.div<{ $type: "Primary" | "Secondary" | "Group" }>(
  ({ theme, $type }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Neutral"]["tertiary"]};
    border-radius: 8px;
    ${(() => {
      switch ($type) {
        case "Primary":
          return css`
            background-color: ${theme["Background"]["Neutral"]["Secondary"]};
          `;
        case "Secondary":
          return css`
            background-color: ${theme["Background"]["Neutral"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel3 = styled.span<{ $type: "Primary" | "Secondary" | "Group" }>(
  ({ theme, $type }) => css`
    ${(() => {
      switch ($type) {
        case "Primary":
          return css`
            color: ${theme["Text"]["Neutral"]["On Neutral Secondary"]};
          `;
        case "Secondary":
          return css`
            color: ${theme["Text"]["Neutral"]["On Neutral Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Roboto Mono';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledPointer2 = styled.div(
  ({ theme }) => css`
    width: 24px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Background"]["Neutral"]["Tertiary"]};
    border-radius: 0px;
  `,
);

/** A visual annotation component used in design documentation to label or highlight UI elements. Supports directional pointer variants (Right, Top, Bottom, Left) and type variants (Primary, Secondary, Group) to indicate different annotation styles and groupings. */
export const ComponentAnnotation = React.forwardRef<
  HTMLDivElement,
  ComponentAnnotationProps
>(function ComponentAnnotation(
  { direction = "Right", type = "Group", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="note"
      aria-label="Annotation"
      {...rest}
      ref={ref}
      $direction={direction}
      $type={type}
    >
      {type === "Group" && (
        <StyledPill>
          {type === "Group" && <StyledLabel>{"Label"}</StyledLabel>}
        </StyledPill>
      )}
      {type === "Group" && (
        <StyledPointer $direction={direction}>
          {((direction === "Right" && type === "Group") ||
            (direction === "Left" && type === "Group")) && (
            <StyledBarHorizontal />
          )}
          {type === "Group" && <StyledBarVertical />}
          {((direction === "Top" && type === "Group") ||
            (direction === "Bottom" && type === "Group")) && (
            <StyledBarHorizontal2 />
          )}
        </StyledPointer>
      )}
      {["Primary", "Secondary"].includes(type) && (
        <StyledLabel2 $type={type}>
          {["Primary", "Secondary"].includes(type) && (
            <StyledLabel3 $type={type}>{"Label"}</StyledLabel3>
          )}
        </StyledLabel2>
      )}
      {["Primary", "Secondary"].includes(type) && <StyledPointer2 />}
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface TypePreviewCustomCursorsProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?:
    | "Labeled"
    | "Default"
    | "Circle"
    | "Arrow"
    | "Glass"
    | "Blurred"
    | "Figma"
    | "Emoji";
}

const StyledRoot = styled.div<{
  $type:
    | "Labeled"
    | "Default"
    | "Circle"
    | "Arrow"
    | "Glass"
    | "Blurred"
    | "Figma"
    | "Emoji";
}>(
  ({ $type }) => css`
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1599999964237213);
    border-radius: 3px;
    ${(() => {
      switch ($type) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 19.999998092651367px;
            padding-bottom: 17.999998092651367px;
            padding-left: 20px;
            gap: 0px;
            justify-content: center;
            align-items: flex-start;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Circle":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 20px;
            padding-bottom: 18px;
            padding-left: 20px;
            gap: 0px;
            justify-content: center;
            align-items: flex-start;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Arrow":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 20px;
            padding-bottom: 18px;
            padding-left: 20px;
            gap: 0px;
            justify-content: center;
            align-items: flex-start;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Labeled":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 22px;
            padding-bottom: 18px;
            padding-left: 17px;
            gap: 1px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Glass":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 19px;
            padding-bottom: 18px;
            padding-left: 18px;
            gap: 3px;
            justify-content: center;
            align-items: flex-start;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Blurred":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 20px;
            padding-bottom: 18px;
            padding-left: 20px;
            gap: 0px;
            justify-content: center;
            align-items: flex-start;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Figma":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 20px;
            padding-bottom: 18px;
            padding-left: 20px;
            gap: 0px;
            justify-content: center;
            align-items: flex-start;
            width: 96px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Emoji":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 20px;
            padding-bottom: 18px;
            padding-left: 20px;
            gap: 0px;
            justify-content: center;
            align-items: flex-start;
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
    color: #ffffff;
  `,
);

const StyledCursor = styled.div<{
  $type:
    | "Labeled"
    | "Default"
    | "Circle"
    | "Arrow"
    | "Glass"
    | "Blurred"
    | "Figma"
    | "Emoji";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8.587077140808105px;
            padding-right: 0px;
            padding-bottom: 7.000522613525391px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Circle":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 7px;
            padding-right: 7px;
            padding-bottom: 7px;
            padding-left: 7px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Arrow":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 7px;
            padding-right: 7px;
            padding-bottom: 7px;
            padding-left: 7px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Labeled":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 7px;
            padding-right: 7px;
            padding-bottom: 7px;
            padding-left: 7px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Glass":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Blurred":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Figma":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2.918196439743042px;
            padding-right: 5.000000476837158px;
            padding-bottom: 5.08180570602417px;
            padding-left: 3px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Emoji":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2.625px;
            padding-right: 5.875px;
            padding-bottom: 1.375px;
            padding-left: 6.125px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledArrow = styled.div(
  () => css`
    width: 7.02187442779541px;
    height: 12.412400245666504px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
    box-shadow: 0px 0.88px 1.75px 0px rgba(0, 0, 0, 0.4);
  `,
);

const StyledEllipse12 = styled.div(
  () => css`
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 50%;
  `,
);

const StyledGlass = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4.800000190734863px;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 599.4000244140625px;
  `,
);

const StyledBlur = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 5.599999904632568px;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.30000001192092896);
    border-radius: 699.2999877929688px;
  `,
);

const StyledCursor2 = styled.div(
  () => css`
    width: 13.848611831665039px;
    height: 14.787799835205078px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 1px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  `,
);

const Styled = styled.span(
  () => css`
    color: #ffffff;
    font-family: "Inter Tight";
    font-size: 15.75px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledCursor22 = styled.div<{
  $type:
    | "Labeled"
    | "Default"
    | "Circle"
    | "Arrow"
    | "Glass"
    | "Blurred"
    | "Figma"
    | "Emoji";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Default":
          return css``;
        case "Arrow":
          return css``;
        case "Labeled":
          return css``;
        case "Glass":
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
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Blurred":
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
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Figma":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 7.52490234375px;
            padding-right: 8px;
            padding-bottom: 7.827144622802734px;
            padding-left: 7px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Emoji":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8.587077140808105px;
            padding-right: 0px;
            padding-bottom: 7.000522613525391px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Default":
          return css`
            box-shadow: 0px 0.88px 1.75px 0px rgba(0, 0, 0, 0.3);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOutline = styled.div(
  () => css`
    width: 13.125000953674316px;
    height: 14.000000953674316px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
  `,
);

const StyledFill = styled.div(
  () => css`
    width: 11.86292552947998px;
    height: 12.711716651916504px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledEllipse122 = styled.div(
  () => css`
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 50%;
  `,
);

const StyledArrow2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0.8333333134651184px;
    padding-right: 1.1669921875px;
    padding-bottom: 0.8333336710929871px;
    padding-left: 0.49967479705810547px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledVector = styled.div(
  () => css`
    width: 8.333333015441895px;
    height: 8.333333015441895px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
  `,
);

const Styledview = styled.div(
  () => css`
    width: 17px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
  `,
);

const StyledGlass2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 5.599999904632568px;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 699.2999877929688px;
  `,
);

const StyledBlur2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6.400000095367432px;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.30000001192092896);
    border-radius: 799.2000122070312px;
  `,
);

const StyledArrow3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0.8333333134651184px;
    padding-right: 1.1669921875px;
    padding-bottom: 0.8333336710929871px;
    padding-left: 0.49967479705810547px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledVector2 = styled.div(
  () => css`
    width: 8.333333015441895px;
    height: 8.333333015441895px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledOutline2 = styled.div(
  () => css`
    width: 13px;
    height: 12.647953033447266px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
    box-shadow: 0px 0.86px 1.72px 0px rgba(0, 0, 0, 0.25);
  `,
);

const StyledFill2 = styled.div(
  () => css`
    width: 11.669160842895508px;
    height: 11.587900161743164px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledArrow4 = styled.div(
  () => css`
    width: 7.02187442779541px;
    height: 12.412400245666504px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
    box-shadow: 0px 0.88px 1.75px 0px rgba(0, 0, 0, 0.4);
  `,
);

const StyledCursor1 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 3px;
    padding-right: 3px;
    padding-bottom: 3px;
    padding-left: 3px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse123 = styled.div(
  () => css`
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 50%;
  `,
);

/** A visual preview component that displays various custom cursor styles (Default, Labeled, Circle, Arrow, Glass, Blurred, Figma, Emoji) used to demonstrate cursor appearance options in a design system or cursor picker UI. */
export const TypePreviewCustomCursors = React.forwardRef<
  HTMLDivElement,
  TypePreviewCustomCursorsProps
>(function TypePreviewCustomCursors({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="img"
      aria-label="Custom cursor preview"
      {...rest}
      ref={ref}
      $type={type}
    >
      <StyledCursor $type={type}>
        {type === "Default" && <StyledArrow />}
        {["Circle", "Arrow", "Labeled"].includes(type) && <StyledEllipse12 />}
        {type === "Glass" && <StyledGlass></StyledGlass>}
        {type === "Blurred" && <StyledBlur></StyledBlur>}
        {type === "Figma" && <StyledCursor2 />}
        {type === "Emoji" && <Styled>{"👀"}</Styled>}
      </StyledCursor>
      {[
        "Default",
        "Arrow",
        "Labeled",
        "Glass",
        "Blurred",
        "Figma",
        "Emoji",
      ].includes(type) && (
        <StyledCursor22 $type={type}>
          {type === "Default" && <StyledOutline />}
          {type === "Default" && <StyledFill />}
          {["Arrow", "Labeled"].includes(type) && <StyledEllipse122 />}
          {type === "Arrow" && (
            <StyledArrow2>{type === "Arrow" && <StyledVector />}</StyledArrow2>
          )}
          {type === "Labeled" && <Styledview />}
          {type === "Glass" && (
            <StyledGlass2>
              {type === "Glass" && (
                <VisualAsset name={"Arrow right"} size={24} />
              )}
            </StyledGlass2>
          )}
          {type === "Blurred" && (
            <StyledBlur2>
              {type === "Blurred" && (
                <StyledArrow3>
                  {type === "Blurred" && <StyledVector2 />}
                </StyledArrow3>
              )}
            </StyledBlur2>
          )}
          {type === "Figma" && (
            <div>
              {type === "Figma" && <StyledOutline2 />}
              {type === "Figma" && <StyledFill2 />}
            </div>
          )}
          {type === "Emoji" && <StyledArrow4 />}
        </StyledCursor22>
      )}
      {type === "Circle" && (
        <StyledCursor1>
          {type === "Circle" && <StyledEllipse123 />}
        </StyledCursor1>
      )}
    </StyledRoot>
  );
});

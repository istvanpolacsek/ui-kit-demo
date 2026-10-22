import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface CustomCursorsProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type" | "state"
> {
  type?:
    | "Default"
    | "Circle"
    | "Arrow"
    | "Labeled"
    | "Glass"
    | "Blurred"
    | "Figma"
    | "Emoji";
  state?: "Default" | "Hover" | "Project hover";
}

const StyledRoot = styled.div<{
  $type:
    | "Default"
    | "Circle"
    | "Arrow"
    | "Labeled"
    | "Glass"
    | "Blurred"
    | "Figma"
    | "Emoji";
  $state: "Default" | "Hover" | "Project hover";
}>(
  ({ $type, $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Default","Default"]':
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
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Circle","Default"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 18px;
            padding-bottom: 18px;
            padding-left: 18px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Circle","Hover"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 14px;
            padding-right: 14px;
            padding-bottom: 14px;
            padding-left: 14px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Arrow","Default"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 18px;
            padding-bottom: 18px;
            padding-left: 18px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Labeled","Default"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 18px;
            padding-bottom: 18px;
            padding-left: 18px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Glass","Default"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 18px;
            padding-bottom: 18px;
            padding-left: 18px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Glass","Hover"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 14px;
            padding-right: 14px;
            padding-bottom: 14px;
            padding-left: 14px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Blurred","Default"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 18px;
            padding-right: 18px;
            padding-bottom: 18px;
            padding-left: 18px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Blurred","Hover"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 14px;
            padding-right: 14px;
            padding-bottom: 14px;
            padding-left: 14px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Figma","Default"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 19.0791015625px;
            padding-right: 21.539321899414062px;
            padding-bottom: 20.492938995361328px;
            padding-left: 18px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Emoji","Default"]':
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
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Emoji","Hover"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 21px;
            padding-bottom: 0px;
            padding-left: 22px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Emoji","Project hover"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 21px;
            padding-bottom: 0px;
            padding-left: 22px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Default","Hover"]':
          return css`
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
          `;
        case '["Default","Project hover"]':
          return css`
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
          `;
        case '["Figma","Hover"]':
          return css`
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Circle":
          return css`
            color: ${"#000000"};
          `;
        case "Arrow":
          return css`
            color: ${"#000000"};
          `;
        case "Labeled":
          return css`
            color: ${"#000000"};
          `;
        case "Glass":
          return css`
            color: ${"#ffffff"};
          `;
        case "Blurred":
          return css`
            color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledArrow = styled.div(
  () => css`
    width: 8.024999618530273px;
    height: 14.185600280761719px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  `,
);

const StyledOutline = styled.div(
  () => css`
    width: 15px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
  `,
);

const StyledFill = styled.div(
  () => css`
    width: 13.557628631591797px;
    height: 14.527674674987793px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledCursor = styled.div(
  () => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 50%;
  `,
);

const StyledCursor2 = styled.div<{
  $type:
    | "Default"
    | "Circle"
    | "Arrow"
    | "Labeled"
    | "Glass"
    | "Blurred"
    | "Figma"
    | "Emoji";
}>(
  ({ $type }) => css`
    width: 72px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 999px;
    ${(() => {
      switch ($type) {
        case "Labeled":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Figma":
          return css`
            background-color: ${"#f6f6f6"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledView = styled.div(
  () => css`
    width: 35px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
  `,
);

const StyledCursor3 = styled.div<{
  $state: "Default" | "Hover" | "Project hover";
  $type:
    | "Default"
    | "Circle"
    | "Arrow"
    | "Labeled"
    | "Glass"
    | "Blurred"
    | "Figma"
    | "Emoji";
}>(
  ({ $state, $type }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 799.2000122070312px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            width: 28px;
            height: 28px;
            box-sizing: border-box;
          `;
        case "Hover":
          return css`
            width: 36px;
            height: 36px;
            box-sizing: border-box;
          `;
        case "Project hover":
          return css`
            width: 44px;
            height: 44px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Glass","Default"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.5)"};
          `;
        case '["Glass","Hover"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.699999988079071)"};
          `;
        case '["Glass","Project hover"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.699999988079071)"};
          `;
        case '["Blurred","Default"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.10000000149011612)"};
          `;
        case '["Blurred","Hover"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.10000000149011612)"};
          `;
        case '["Blurred","Project hover"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.10000000149011612)"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($type) {
        case "Blurred":
          return css`
            border-color: ${"rgba(255, 255, 255, 0.20000000298023224)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCursor4 = styled.div(
  () => css`
    width: 17.000001907348633px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 1.2000000476837158px;
    box-shadow: 0px 1.2px 2.4px 0px rgba(0, 0, 0, 0.25);
  `,
);

const Styled = styled.span(
  () => css`
    color: #ffffff;
    font-family: "Inter Tight";
    font-size: 21px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled2 = styled.span(
  () => css`
    color: #ffffff;
    font-family: "Inter Tight";
    font-size: 21px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

/** Renders a custom cursor overlay element with multiple visual variants (default pointer, circle, arrow, labeled, glass, blurred, Figma-style, and emoji), used to replace or augment the native browser cursor in interactive UI experiences. */
export const CustomCursors = React.forwardRef<
  HTMLDivElement,
  CustomCursorsProps
>(function CustomCursors(
  { type = "Default", state = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Custom cursor"
      {...rest}
      ref={ref}
      $type={type}
      $state={state}
    >
      {((type === "Default" && state === "Default") ||
        (type === "Emoji" && state === "Default")) && <StyledArrow />}
      {((type === "Default" && state === "Hover") ||
        (type === "Default" && state === "Project hover") ||
        (type === "Figma" && state === "Hover")) && <StyledOutline />}
      {((type === "Default" && state === "Hover") ||
        (type === "Default" && state === "Project hover") ||
        (type === "Figma" && state === "Hover")) && <StyledFill />}
      {((type === "Circle" && state === "Default") ||
        (type === "Circle" && state === "Hover") ||
        (type === "Circle" && state === "Project hover") ||
        (type === "Arrow" && state === "Default") ||
        (type === "Arrow" && state === "Hover") ||
        (type === "Arrow" && state === "Project hover") ||
        (type === "Labeled" && state === "Default") ||
        (type === "Labeled" && state === "Hover")) && <StyledCursor />}
      {((type === "Circle" && state === "Project hover") ||
        (type === "Arrow" && state === "Hover") ||
        (type === "Arrow" && state === "Project hover") ||
        (type === "Labeled" && state === "Hover") ||
        (type === "Glass" && state === "Project hover") ||
        (type === "Blurred" && state === "Project hover")) && (
        <VisualAsset name={"Arrow right"} size={24} />
      )}
      {((type === "Labeled" && state === "Project hover") ||
        (type === "Figma" && state === "Project hover")) && (
        <StyledCursor2 $type={type} />
      )}
      {((type === "Labeled" && state === "Project hover") ||
        (type === "Figma" && state === "Project hover")) && <StyledView />}
      {["Glass", "Blurred"].includes(type) && (
        <StyledCursor3 $state={state} $type={type}></StyledCursor3>
      )}
      {((type === "Figma" && state === "Default") ||
        (type === "Figma" && state === "Project hover")) && <StyledCursor4 />}
      {type === "Emoji" && state === "Hover" && <Styled>{"👀"}</Styled>}
      {type === "Emoji" && state === "Project hover" && (
        <Styled2>{"➡️"}</Styled2>
      )}
    </StyledRoot>
  );
});

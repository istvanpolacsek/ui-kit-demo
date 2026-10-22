import React from "react";
import styled, { css } from "styled-components";

export interface BackgroundGradientSmallProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Left angular" | "Right angular" | "Vertical" | "Radial" | "Solid";
}

const StyledRoot = styled.div<{
  $type: "Left angular" | "Right angular" | "Vertical" | "Radial" | "Solid";
}>(
  ({ theme, $type }) => css`
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Left angular":
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Right angular":
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Vertical":
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Radial":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Solid":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Left angular":
          return css`
            width: 570px;
            height: 570px;
            box-sizing: border-box;
          `;
        case "Right angular":
          return css`
            width: 570px;
            height: 570px;
            box-sizing: border-box;
          `;
        case "Vertical":
          return css`
            width: 570px;
            height: 570px;
            box-sizing: border-box;
          `;
        case "Solid":
          return css`
            width: 570px;
            height: 570px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMask = styled.div<{
  $type: "Left angular" | "Right angular" | "Vertical" | "Radial" | "Solid";
}>(
  ({ $type }) => css`
    width: 570px;
    height: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Left angular":
          return css`
            background-color: ${"transparent"};
          `;
        case "Right angular":
          return css`
            background-color: ${"transparent"};
          `;
        case "Vertical":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledColor = styled.div(
  ({ theme }) => css`
    width: 570px;
    height: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 1"]};
    border-radius: 0px;
  `,
);

const StyledMask2 = styled.div(
  () => css`
    width: 570px;
    height: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #d9d9d9;
    border-radius: 0px;
  `,
);

const StyledCircle = styled.div(
  () => css`
    width: 286px;
    height: 286px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 999px;
  `,
);

/** A decorative background gradient component that renders various gradient styles (left angular, right angular, vertical, radial, or solid) as a visual layer behind content. */
export const BackgroundGradientSmall = React.forwardRef<
  HTMLDivElement,
  BackgroundGradientSmallProps
>(function BackgroundGradientSmall({ type = "Left angular", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Background gradient"
      {...rest}
      ref={ref}
      $type={type}
    >
      {["Left angular", "Right angular", "Vertical", "Radial"].includes(
        type,
      ) && (
        <div>
          {["Left angular", "Right angular", "Vertical"].includes(type) && (
            <StyledMask $type={type} />
          )}
          {["Left angular", "Right angular", "Vertical", "Radial"].includes(
            type,
          ) && <StyledColor />}
          {type === "Radial" && (
            <div>
              {type === "Radial" && <StyledMask2 />}
              {type === "Radial" && <StyledCircle />}
            </div>
          )}
        </div>
      )}
    </StyledRoot>
  );
});

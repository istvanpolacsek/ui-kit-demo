import React from "react";
import styled, { css } from "styled-components";

export interface BackgroundGradientLargeProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?:
    | "Left angular"
    | "Right angular"
    | "Vertical"
    | "Radial left"
    | "Radial center"
    | "Radial right"
    | "Solid";
}

const StyledRoot = styled.div<{
  $type:
    | "Left angular"
    | "Right angular"
    | "Vertical"
    | "Radial left"
    | "Radial center"
    | "Radial right"
    | "Solid";
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
            width: 1188px;
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
            width: 1188px;
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
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Radial left":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Radial center":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: flex-start;
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Radial right":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-end;
            align-items: flex-start;
            width: 1188px;
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
            justify-content: flex-end;
            align-items: flex-start;
            width: 1188px;
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
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
          `;
        case "Right angular":
          return css`
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
          `;
        case "Vertical":
          return css`
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
          `;
        case "Solid":
          return css`
            width: 1188px;
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
  $type:
    | "Left angular"
    | "Right angular"
    | "Vertical"
    | "Radial left"
    | "Radial center"
    | "Radial right"
    | "Solid";
}>(
  ({ $type }) => css`
    width: 1188px;
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
    width: 1188px;
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

/** A decorative background gradient component that renders various gradient styles (angular, radial, vertical, or solid) as a large visual backdrop. Intended purely for aesthetic layering behind content. */
export const BackgroundGradientLarge = React.forwardRef<
  HTMLDivElement,
  BackgroundGradientLargeProps
>(function BackgroundGradientLarge({ type = "Left angular", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Background gradient"
      {...rest}
      ref={ref}
      $type={type}
    >
      {[
        "Left angular",
        "Right angular",
        "Vertical",
        "Radial left",
        "Radial center",
        "Radial right",
      ].includes(type) && (
        <div>
          {["Left angular", "Right angular", "Vertical"].includes(type) && (
            <StyledMask $type={type} />
          )}
          {[
            "Left angular",
            "Right angular",
            "Vertical",
            "Radial left",
            "Radial center",
            "Radial right",
          ].includes(type) && <StyledColor />}
          {["Radial left", "Radial center", "Radial right"].includes(type) && (
            <div>
              {["Radial left", "Radial center", "Radial right"].includes(
                type,
              ) && <StyledMask2 />}
              {["Radial left", "Radial center", "Radial right"].includes(
                type,
              ) && <StyledCircle />}
            </div>
          )}
        </div>
      )}
    </StyledRoot>
  );
});

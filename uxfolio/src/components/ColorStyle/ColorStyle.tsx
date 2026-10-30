import React from "react";
import styled, { css } from "styled-components";

export interface ColorStyleProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type" | "style"
> {
  type?: "Solid" | "Gradient";
  style?:
    | "Accent"
    | "Accent platform"
    | "Contrast"
    | "Platform"
    | "Subtle"
    | "Custom";
}

const StyledRoot = styled.div(
  () => css`
    background-color: #262626;
    border-radius: 4px;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    &:hover {
      background-color: #333333;
    }
  `,
);

const StyledBackground = styled.div(
  () => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 50%;
  `,
);

const StyledForeground = styled.div<{
  $style:
    | "Accent"
    | "Accent platform"
    | "Contrast"
    | "Platform"
    | "Subtle"
    | "Custom";
}>(
  ({ $style }) => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($style) {
        case "Subtle":
          return css`
            background-color: ${"#ea903d"};
          `;
        case "Platform":
          return css`
            background-color: ${"#000000"};
          `;
        case "Accent":
          return css`
            background-color: ${"#ea903d"};
          `;
        case "Accent platform":
          return css`
            background-color: ${"#ea903d"};
          `;
        case "Contrast":
          return css`
            background-color: ${"#000000"};
          `;
        case "Custom":
          return css`
            background-color: ${"#0073c7"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOutline = styled.div(
  () => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
  `,
);

const StyledBackgroundLayer = styled.div<{
  $style:
    | "Accent"
    | "Accent platform"
    | "Contrast"
    | "Platform"
    | "Subtle"
    | "Custom";
}>(
  ({ $style }) => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($style) {
        case "Subtle":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Platform":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Accent":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Accent platform":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Contrast":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Custom":
          return css`
            background-color: ${"#0073c7"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMask = styled.div<{
  $style:
    | "Accent"
    | "Accent platform"
    | "Contrast"
    | "Platform"
    | "Subtle"
    | "Custom";
}>(
  ({ $style }) => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($style) {
        case "Subtle":
          return css`
            background-color: ${"transparent"};
          `;
        case "Platform":
          return css`
            background-color: ${"transparent"};
          `;
        case "Accent":
          return css`
            background-color: ${"transparent"};
          `;
        case "Accent platform":
          return css`
            background-color: ${"transparent"};
          `;
        case "Contrast":
          return css`
            background-color: ${"transparent"};
          `;
        case "Custom":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledForegroundLayer = styled.div(
  () => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 50%;
  `,
);

const StyledBackgroundLayer2 = styled.div<{
  $style:
    | "Accent"
    | "Accent platform"
    | "Contrast"
    | "Platform"
    | "Subtle"
    | "Custom";
}>(
  ({ $style }) => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($style) {
        case "Platform":
          return css`
            background-color: ${"#000000"};
          `;
        case "Accent":
          return css`
            background-color: ${"#ea903d"};
          `;
        case "Accent platform":
          return css`
            background-color: ${"#ea903d"};
          `;
        case "Contrast":
          return css`
            background-color: ${"#000000"};
          `;
        case "Custom":
          return css`
            background-color: ${"#00c2ff"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledGradient = styled.div(
  () => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.009999999776482582);
    border-radius: 50%;
  `,
);

const StyledBackgroundLayer3 = styled.div<{
  $style:
    | "Accent"
    | "Accent platform"
    | "Contrast"
    | "Platform"
    | "Subtle"
    | "Custom";
}>(
  ({ $style }) => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($style) {
        case "Subtle":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Platform":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Accent":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Accent platform":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Contrast":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Custom":
          return css`
            background-color: ${"#0073c7"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMask2 = styled.div<{
  $style:
    | "Accent"
    | "Accent platform"
    | "Contrast"
    | "Platform"
    | "Subtle"
    | "Custom";
}>(
  ({ $style }) => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($style) {
        case "Subtle":
          return css`
            background-color: ${"transparent"};
          `;
        case "Platform":
          return css`
            background-color: ${"transparent"};
          `;
        case "Accent":
          return css`
            background-color: ${"transparent"};
          `;
        case "Accent platform":
          return css`
            background-color: ${"transparent"};
          `;
        case "Contrast":
          return css`
            background-color: ${"transparent"};
          `;
        case "Custom":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledForegroundLayer2 = styled.div(
  () => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 50%;
  `,
);

const StyledBackgroundLayer4 = styled.div<{
  $style:
    | "Accent"
    | "Accent platform"
    | "Contrast"
    | "Platform"
    | "Subtle"
    | "Custom";
}>(
  ({ $style }) => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($style) {
        case "Platform":
          return css`
            background-color: ${"#000000"};
          `;
        case "Accent":
          return css`
            background-color: ${"#ea903d"};
          `;
        case "Accent platform":
          return css`
            background-color: ${"#ea903d"};
          `;
        case "Contrast":
          return css`
            background-color: ${"#000000"};
          `;
        case "Custom":
          return css`
            background-color: ${"#00c2ff"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A visual color style swatch component that displays color representations in Solid or Gradient types, with various style variants (Accent, Contrast, Platform, Subtle, Custom) and hover states. Used to preview and select color styles in a design system. */
export const ColorStyle = React.forwardRef<HTMLDivElement, ColorStyleProps>(
  function ColorStyle({ type = "Solid", style = "Subtle", ...rest }, ref) {
    return (
      <StyledRoot
        role="img"
        aria-label="Color style swatch"
        {...rest}
        ref={ref}
      >
        {((type === "Solid" && style === "Subtle") ||
          (type === "Solid" && style === "Platform") ||
          (type === "Solid" && style === "Accent") ||
          (type === "Solid" && style === "Accent platform") ||
          (type === "Solid" && style === "Contrast")) && <StyledBackground />}
        {type === "Solid" && <StyledForeground $style={style} />}
        {type === "Solid" && <StyledOutline />}
        {type === "Gradient" && (
          <div>
            {type === "Gradient" && <StyledBackgroundLayer $style={style} />}
            {type === "Gradient" && (
              <div>
                {type === "Gradient" && <StyledMask $style={style} />}
                {type === "Gradient" && style === "Subtle" && (
                  <StyledForegroundLayer />
                )}
                {((type === "Gradient" && style === "Platform") ||
                  (type === "Gradient" && style === "Accent") ||
                  (type === "Gradient" && style === "Accent platform") ||
                  (type === "Gradient" && style === "Contrast") ||
                  (type === "Gradient" && style === "Custom")) && (
                  <StyledBackgroundLayer2 $style={style} />
                )}
              </div>
            )}
          </div>
        )}
        {type === "Gradient" && <StyledGradient />}
        {type === "Gradient" && (
          <div>
            {type === "Gradient" && <StyledBackgroundLayer3 $style={style} />}
            {type === "Gradient" && (
              <div>
                {type === "Gradient" && <StyledMask2 $style={style} />}
                {type === "Gradient" && style === "Subtle" && (
                  <StyledForegroundLayer2 />
                )}
                {((type === "Gradient" && style === "Platform") ||
                  (type === "Gradient" && style === "Accent") ||
                  (type === "Gradient" && style === "Accent platform") ||
                  (type === "Gradient" && style === "Contrast") ||
                  (type === "Gradient" && style === "Custom")) && (
                  <StyledBackgroundLayer4 $style={style} />
                )}
              </div>
            )}
          </div>
        )}
      </StyledRoot>
    );
  },
);

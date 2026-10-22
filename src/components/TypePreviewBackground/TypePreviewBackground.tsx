import React from "react";
import styled, { css } from "styled-components";

export interface TypePreviewBackgroundProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "None" | "Solid" | "Gradient" | "Image";
}

const StyledRoot = styled.div(
  () => css`
    overflow: hidden;
    background-color: #4d4c4c;
    border-radius: 3px;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledDecoration = styled.div(
  () => css`
    width: 10px;
    height: 1.5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

const StyledDecoration2 = styled.div(
  () => css`
    width: 5px;
    height: 1.5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

const StyledImage = styled.span<{
  $type: "None" | "Solid" | "Gradient" | "Image";
}>(
  ({ $type }) => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Solid":
          return css`
            background-color: ${"#7d7d7d"};
          `;
        case "Gradient":
          return css`
            background-color: ${"transparent"};
          `;
        case "Image":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A visual preview component that displays a background type (None, Solid, Gradient, or Image) applied to text. Used to demonstrate how different background styles affect the appearance of typographic content. */
export const TypePreviewBackground = React.forwardRef<
  HTMLDivElement,
  TypePreviewBackgroundProps
>(function TypePreviewBackground({ type = "None", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Background type preview"
      aria-describedby="background-type-description"
      {...rest}
      ref={ref}
    >
      <StyledText>
        <StyledDecoration />
        <StyledDecoration2 />
      </StyledText>
      <StyledImage $type={type} />
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";

export interface OverlayCanvasHomogenProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type" | "strength"
> {
  type?: "Brighten" | "Dimming";
  strength?: "Regular" | "Strong" | "Weak";
}

const StyledRoot = styled.div<{
  $type: "Brighten" | "Dimming";
  $strength: "Regular" | "Strong" | "Weak";
}>(
  ({ $type, $strength }) => css`
    overflow: hidden;
    border-radius: 0px;
    width: 282px;
    height: 100px;
    box-sizing: border-box;
    ${(() => {
      switch (JSON.stringify([$type, $strength])) {
        case '["Dimming","Weak"]':
          return css`
            background-color: ${"rgba(15, 15, 15, 0.25)"};
          `;
        case '["Dimming","Regular"]':
          return css`
            background-color: ${"rgba(15, 15, 15, 0.5)"};
          `;
        case '["Dimming","Strong"]':
          return css`
            background-color: ${"rgba(15, 15, 15, 0.75)"};
          `;
        case '["Brighten","Weak"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.25)"};
          `;
        case '["Brighten","Regular"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.5)"};
          `;
        case '["Brighten","Strong"]':
          return css`
            background-color: ${"rgba(255, 255, 255, 0.75)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A homogeneous overlay canvas component that applies a uniform color wash over content, supporting both brightening and dimming effects at varying strengths (weak, regular, strong). Typically used as a decorative or UX layer over images or sections. */
export const OverlayCanvasHomogen = React.forwardRef<
  HTMLDivElement,
  OverlayCanvasHomogenProps
>(function OverlayCanvasHomogen(
  { type = "Dimming", strength = "Weak", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="presentation"
      aria-label="Overlay canvas"
      {...rest}
      ref={ref}
      $type={type}
      $strength={strength}
    ></StyledRoot>
  );
});

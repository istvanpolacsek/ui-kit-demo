import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./Cursor.markup";

export interface CursorProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?:
    | "Beachball"
    | "Busy"
    | "Copy"
    | "Cross"
    | "Default"
    | "Hand (Grabbing)"
    | "Hand (Open)"
    | "Hand (Pointing)"
    | "Help"
    | "Move"
    | "Resize (Double Vertical)"
    | "Resize (Down)"
    | "Resize (Left)"
    | "Resize (Left-Right)"
    | "Resize (Right)"
    | "Resize (Single) Up"
    | "Resize (Up)"
    | "Resize (Up-Down)"
    | "Text Cursor"
    | "Zoom In"
    | "Zoom Out"
    | "Resize (Double) 1"
    | "Resize (Double) 2"
    | "Resize (Double Horizontal)"
    | "Resize (Single) Top Left"
    | "Resize (Single) Left"
    | "Resize (Single) Bottom Left"
    | "Resize (Single) Down"
    | "Resize (Single) Bottom Right"
    | "Resize (Single) Right"
    | "Resize (Single) Top Right"
    | "Disabled";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const Cursor = React.forwardRef<HTMLSpanElement, CursorProps>(
  function Cursor({ type = "Default", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([type])] && (
          <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);

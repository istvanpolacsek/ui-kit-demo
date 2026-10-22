import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { IndicatorImageOrder } from "../IndicatorImageOrder";
import { FABNeutral } from "../FABNeutral";

export interface ImageManagerReorderItemProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state"
> {
  state?: "Default" | "Hover" | "Dragging" | "Placement";
}

const StyledRoot = styled.div<{
  $state: "Default" | "Hover" | "Dragging" | "Placement";
}>(
  ({ $state }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Placement":
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
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 84px;
    height: 84px;
    box-sizing: border-box;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Hover":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Dragging":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Placement":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-color: ${"#3d3d3d"};
          `;
        case "Hover":
          return css`
            border-color: ${"#adadad"};
          `;
        case "Dragging":
          return css`
            border-color: ${"#fefefe"};
          `;
        case "Placement":
          return css`
            border-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOverlay = styled.div(
  () => css`
    width: 76px;
    height: 76px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 0px;
  `,
);

/** A draggable reorder item used within an image manager interface. Displays an image thumbnail with an order indicator and a floating action button for drag-and-drop reordering. Supports Default, Hover, Dragging, and Placement visual states. */
export const ImageManagerReorderItem = React.forwardRef<
  HTMLDivElement,
  ImageManagerReorderItemProps
>(function ImageManagerReorderItem({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="listitem"
      aria-label="Reorder image"
      {...rest}
      ref={ref}
      $state={state}
    >
      {["Default", "Hover", "Dragging"].includes(state) && (
        <ImageFlexible snaps={false} defaultProp={"Free"} />
      )}
      {["Default", "Placement"].includes(state) && (
        <IndicatorImageOrder state={"Active"} size={"Small"} mode={"Dark"} />
      )}
      {["Hover", "Dragging"].includes(state) && <StyledOverlay />}
      {["Hover", "Dragging"].includes(state) && (
        <FABNeutral state={"Default"} size={"Small"} mode={"Light"} />
      )}
    </StyledRoot>
  );
});

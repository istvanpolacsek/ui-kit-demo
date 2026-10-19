import React from "react";
import styled, { css } from "styled-components";
import { useTooltip } from "./Tooltip.tooltip";

export interface TooltipProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "title"
  | "body"
  | "hasBody"
  | "placement"
  | "slot"
  | "children"
  | "open"
  | "defaultOpen"
  | "onOpenChange"
  | "delay"
> {
  title?: string;
  body?: string;
  hasBody?: boolean;
  placement?: "Top" | "Left" | "Right" | "Bottom";
  slot?: React.ReactNode;
  /** The element the tooltip describes. */
  children?: React.ReactNode;
  /** Whether it is shown (controlled). */
  open?: boolean;
  /** Whether it starts shown (uncontrolled). */
  defaultOpen?: boolean;
  /** Called with the new state when it opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Milliseconds the target is hovered before it opens (300 by default; focus opens at once). */
  delay?: number;
}

const StyledRoot = styled.div<{
  $placement: "Top" | "Left" | "Right" | "Bottom";
}>(
  ({ theme, $placement }) => css`
    position: relative;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
    box-shadow:
      0px 1px 4px 0px rgba(12, 12, 13, 0.1),
      0px 1px 4px 0px rgba(12, 12, 13, 0.05);
    ${(() => {
      switch ($placement) {
        case "Top":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Bottom":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Left":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledBeak = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 44px;
    bottom: -2.0500030517578125px;
    width: 8px;
    height: 8px;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border-radius: 0px;
    transform: rotate(45deg);
    pointer-events: none;
    z-index: 1;
    [data-placement="top"] > & {
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      bottom: -4px;
      left: calc(50% - 4px);
    }
    [data-placement="bottom"] > & {
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      top: -4px;
      left: calc(50% - 4px);
    }
    [data-placement="left"] > & {
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      right: -4px;
      top: calc(50% - 4px);
    }
    [data-placement="right"] > & {
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      left: -4px;
      top: calc(50% - 4px);
    }
  `,
);

const StyledBeakStroke = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 44px;
    bottom: -2.0500030517578125px;
    width: 8px;
    height: 8px;
    background-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 0px;
    transform: rotate(45deg);
    pointer-events: none;
    z-index: 0;
    [data-placement="top"] > & {
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      bottom: -5px;
      left: calc(50% - 4px);
    }
    [data-placement="bottom"] > & {
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      top: -5px;
      left: calc(50% - 4px);
    }
    [data-placement="left"] > & {
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      right: -5px;
      top: calc(50% - 4px);
    }
    [data-placement="right"] > & {
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      left: -5px;
      top: calc(50% - 4px);
    }
  `,
);

const StyledSlot = styled.div<{
  $placement: "Top" | "Left" | "Right" | "Bottom";
}>(
  ({ $placement }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($placement) {
        case "Top":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
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
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Left":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A small contextual popup bubble with a directional beak that provides supplemental information about a target element. Supports top, left, right, and bottom placement variants, an optional body text, and a slot for custom content. */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(
    {
      title = "Title",
      body = "Body text",
      hasBody = true,
      placement = "Top",
      slot,
      children,
      open,
      defaultOpen,
      onOpenChange,
      delay,
      ...rest
    },
    ref,
  ) {
    const tooltip = useTooltip({
      open,
      defaultOpen,
      onOpenChange,
      delay,
      placement: placement,
      forwardedRef: ref,
    });
    return (
      <React.Fragment>
        {tooltip.renderTrigger(children)}
        {tooltip.open
          ? tooltip.portal(
              <StyledRoot
                role="tooltip"
                id={tooltip.id}
                data-placement={tooltip.placement}
                {...rest}
                ref={tooltip.ref}
                $placement={placement}
              >
                <StyledBeak />
                <StyledBeakStroke />
                <StyledSlot $placement={placement}>{slot}</StyledSlot>
              </StyledRoot>,
            )
          : null}
      </React.Fragment>
    );
  },
);

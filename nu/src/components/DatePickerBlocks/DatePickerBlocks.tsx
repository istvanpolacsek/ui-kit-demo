import React from "react";
import styled, { css } from "styled-components";

export interface DatePickerBlocksProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "date" | "showFocusIndicator" | "type" | "state"
> {
  date?: string;
  showFocusIndicator?: boolean;
  type?: "Default" | "Today" | "Selected" | "Null" | "Prev/Next";
  state?: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled" | "Hovere";
}

const StyledRoot = styled.button<{
  $type: "Default" | "Today" | "Selected" | "Null" | "Prev/Next";
  $state: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled" | "Hovere";
}>(
  ({ theme, $type, $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Today":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Default":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Selected":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Null":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Prev/Next":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Today","Disabled"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Default","Disabled"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Selected","Pressed"]':
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        case '["Today","Pressed"]':
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case '["Default","Pressed"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Selected","Focused"]':
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        case '["Today","Focused"]':
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case '["Default","Focused"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Selected","Hovered"]':
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        case '["Today","Hovered"]':
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case '["Default","Hovered"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Prev/Next","Enabled"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Prev/Next","Hovere"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Prev/Next","Focused"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Selected","Enabled"]':
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        case '["Today","Enabled"]':
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case '["Default","Enabled"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styledcontainer = styled.div<{
  $type: "Default" | "Today" | "Selected" | "Null" | "Prev/Next";
  $state: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled" | "Hovere";
}>(
  ({ theme, $type, $state }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Today","Disabled"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Disabled"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Selected","Pressed"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Today","Pressed"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Pressed"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Selected","Focused"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Today","Focused"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Focused"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Selected","Hovered"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Today","Hovered"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Hovered"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Null","Enabled"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Prev/Next","Enabled"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Prev/Next","Hovere"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Prev/Next","Focused"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Selected","Enabled"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Today","Enabled"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Enabled"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Selected","Pressed"]':
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Selected","Focused"]':
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Selected","Hovered"]':
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Prev/Next","Hovere"]':
          return css`
            background-color: ${theme["gray"]["200"]};
          `;
        case '["Prev/Next","Focused"]':
          return css`
            background-color: ${theme["gray"]["200"]};
          `;
        case '["Selected","Enabled"]':
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Today","Disabled"]':
          return css`
            border-color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Today","Pressed"]':
          return css`
            border-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Today","Focused"]':
          return css`
            border-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Today","Hovered"]':
          return css`
            border-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Today","Enabled"]':
          return css`
            border-color: ${theme["accent"]["accentBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Today","Disabled"]':
          return css`
            border-radius: 100px;
          `;
        case '["Default","Disabled"]':
          return css`
            border-radius: 100px;
          `;
        case '["Selected","Pressed"]':
          return css`
            border-radius: 100px;
          `;
        case '["Today","Pressed"]':
          return css`
            border-radius: 100px;
          `;
        case '["Default","Pressed"]':
          return css`
            border-radius: 100px;
          `;
        case '["Selected","Focused"]':
          return css`
            border-radius: 100px;
          `;
        case '["Today","Focused"]':
          return css`
            border-radius: 100px;
          `;
        case '["Default","Focused"]':
          return css`
            border-radius: 100px;
          `;
        case '["Selected","Hovered"]':
          return css`
            border-radius: 100px;
          `;
        case '["Today","Hovered"]':
          return css`
            border-radius: 100px;
          `;
        case '["Default","Hovered"]':
          return css`
            border-radius: 100px;
          `;
        case '["Null","Enabled"]':
          return css`
            border-radius: 0px;
          `;
        case '["Prev/Next","Enabled"]':
          return css`
            border-radius: 0px;
          `;
        case '["Prev/Next","Hovere"]':
          return css`
            border-radius: 100px;
          `;
        case '["Prev/Next","Focused"]':
          return css`
            border-radius: 100px;
          `;
        case '["Selected","Enabled"]':
          return css`
            border-radius: 100px;
          `;
        case '["Today","Enabled"]':
          return css`
            border-radius: 100px;
          `;
        case '["Default","Enabled"]':
          return css`
            border-radius: 100px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledstateLayer = styled.div<{
  $type: "Default" | "Today" | "Selected" | "Null" | "Prev/Next";
  $state: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled" | "Hovere";
}>(
  ({ theme, $type, $state }) => css`
    ${(() => {
      switch ($type) {
        case "Today":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Selected":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Null":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Prev/Next":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Selected","Pressed"]':
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        case '["Today","Pressed"]':
          return css`
            background-color: ${theme["gray"]["300"]};
          `;
        case '["Default","Pressed"]':
          return css`
            background-color: ${theme["gray"]["300"]};
          `;
        case '["Selected","Focused"]':
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        case '["Today","Focused"]':
          return css`
            background-color: ${theme["gray"]["200"]};
          `;
        case '["Default","Focused"]':
          return css`
            background-color: ${theme["gray"]["200"]};
          `;
        case '["Selected","Hovered"]':
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        case '["Today","Hovered"]':
          return css`
            background-color: ${theme["gray"]["200"]};
          `;
        case '["Default","Hovered"]':
          return css`
            background-color: ${theme["gray"]["200"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Today","Disabled"]':
          return css`
            border-radius: 0px;
          `;
        case '["Default","Disabled"]':
          return css`
            border-radius: 0px;
          `;
        case '["Selected","Pressed"]':
          return css`
            border-radius: 0px;
          `;
        case '["Today","Pressed"]':
          return css`
            border-radius: 0px;
          `;
        case '["Default","Pressed"]':
          return css`
            border-radius: 0px;
          `;
        case '["Selected","Focused"]':
          return css`
            border-radius: 0px;
          `;
        case '["Today","Focused"]':
          return css`
            border-radius: 0px;
          `;
        case '["Default","Focused"]':
          return css`
            border-radius: 100px;
          `;
        case '["Selected","Hovered"]':
          return css`
            border-radius: 0px;
          `;
        case '["Today","Hovered"]':
          return css`
            border-radius: 0px;
          `;
        case '["Default","Hovered"]':
          return css`
            border-radius: 0px;
          `;
        case '["Null","Enabled"]':
          return css`
            border-radius: 0px;
          `;
        case '["Prev/Next","Enabled"]':
          return css`
            border-radius: 0px;
          `;
        case '["Prev/Next","Hovere"]':
          return css`
            border-radius: 0px;
          `;
        case '["Prev/Next","Focused"]':
          return css`
            border-radius: 0px;
          `;
        case '["Selected","Enabled"]':
          return css`
            border-radius: 0px;
          `;
        case '["Today","Enabled"]':
          return css`
            border-radius: 0px;
          `;
        case '["Default","Enabled"]':
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDate = styled.span<{
  $type: "Default" | "Today" | "Selected" | "Null" | "Prev/Next";
  $state: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled" | "Hovere";
}>(
  ({ theme, $type, $state }) => css`
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Today","Disabled"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Default","Disabled"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Selected","Pressed"]':
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        case '["Today","Pressed"]':
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case '["Default","Pressed"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Selected","Focused"]':
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        case '["Today","Focused"]':
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case '["Default","Focused"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Selected","Hovered"]':
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        case '["Today","Hovered"]':
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case '["Default","Hovered"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Prev/Next","Enabled"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Prev/Next","Hovere"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Prev/Next","Focused"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case '["Selected","Enabled"]':
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        case '["Today","Enabled"]':
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case '["Default","Enabled"]':
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-roboto, 'Roboto'), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledEmptyContainer = styled.div(
  () => css`
    width: 22px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A single day cell within a date picker calendar grid. Displays a date number and supports multiple visual states including default, today, selected, previous/next month, and null (empty) states, as well as interactive states like hover, focus, pressed, and disabled. */
export const DatePickerBlocks = React.forwardRef<
  HTMLButtonElement,
  DatePickerBlocksProps
>(function DatePickerBlocks(
  {
    date = "00",
    showFocusIndicator = true,
    type = "Default",
    state = "Enabled",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Day cell, e.g. '15'"
      {...rest}
      ref={ref}
      $type={type}
      $state={state}
    >
      <Styledcontainer $type={type} $state={state}>
        <StyledstateLayer $type={type} $state={state}>
          {["Today", "Default", "Selected", "Prev/Next"].includes(type) && (
            <StyledDate $type={type} $state={state}>
              {date}
            </StyledDate>
          )}
          {type === "Null" && <StyledEmptyContainer />}
        </StyledstateLayer>
      </Styledcontainer>
    </StyledRoot>
  );
});

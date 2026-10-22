import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import { IndicatorProject } from "../IndicatorProject";
import { TagSubscription } from "../TagSubscription";

export interface ListItemDropdownProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "hasIcon" | "hasStatus" | "hasPlusLock" | "type" | "mode"
> {
  hasIcon?: boolean;
  hasStatus?: boolean;
  hasPlusLock?: boolean;
  type?: "Decisive" | "Neutral" | "Destructive";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button<{
  $type: "Decisive" | "Neutral" | "Destructive";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    overflow: hidden;
    background-color: #3d3d3d;
    border-radius: 2px;
    ${(() => {
      switch ($type) {
        case "Decisive":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 44px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: 200px;
            height: 44px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Neutral":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: 200px;
            height: 44px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Destructive":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: 200px;
            height: 44px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Decisive","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Neutral","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Destructive","Dark"]':
          return css`
            color: ${"#ef4444"};
          `;
        case '["Decisive","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Neutral","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Destructive","Light"]':
          return css`
            color: ${"#9e3131"};
          `;
        default:
          return css``;
      }
    })()}
  &:active {
      ${css`
        display: inline-flex;
        flex-direction: row;
        padding-top: 12px;
        padding-right: 12px;
        padding-bottom: 12px;
        padding-left: 12px;
        gap: 12px;
        justify-content: flex-start;
        align-items: center;
        width: 200px;
        height: 44px;
        box-sizing: border-box;
        flex-shrink: 0;
      `}
    }
  `,
);

const StyledLabel = styled.span<{
  $type: "Decisive" | "Neutral" | "Destructive";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Decisive","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Neutral","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Destructive","Dark"]':
          return css`
            color: ${"#ef4444"};
          `;
        case '["Decisive","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Neutral","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Destructive","Light"]':
          return css`
            color: ${"#9e3131"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledStatus = styled.span(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A list item used within a dropdown menu. Supports optional icon, status indicator, and subscription lock tag. Comes in Decisive, Neutral, and Destructive types with Active, Default, and Hover states, in both Light and Dark modes. */
export const ListItemDropdown = React.forwardRef<
  HTMLButtonElement,
  ListItemDropdownProps
>(function ListItemDropdown(
  {
    hasIcon = true,
    hasStatus = false,
    hasPlusLock = false,
    type = "Decisive",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="menuitem"
      aria-label="Dropdown list item"
      {...rest}
      ref={ref}
      $type={type}
      $mode={mode}
    >
      <StyledLabel $type={type} $mode={mode}>
        {
          (
            {
              '["Decisive"]': "Value",
              '["Neutral"]': "Action",
              '["Destructive"]': "Action",
            } as Record<string, string>
          )[JSON.stringify([type])]
        }
      </StyledLabel>
      {hasIcon && <VisualAsset name={"Edit"} size={24} />}
      {hasStatus && (
        <StyledStatus>
          {["Neutral", "Destructive"].includes(type) && (
            <IndicatorProject type={"Public"} />
          )}
        </StyledStatus>
      )}
      {hasPlusLock && <TagSubscription property1={"Upgrade short default"} />}
      <VisualAsset name={"Check"} size={24} />
    </StyledRoot>
  );
});

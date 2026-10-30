import React from "react";
import styled, { css } from "styled-components";
import { Edit } from "../Edit";
import { IndicatorProject } from "../IndicatorProject";
import { TagSubscription } from "../TagSubscription";
import { Check } from "../Check";

export interface ListItemDropdownProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "hasIcon" | "hasStatus" | "hasPlusLock" | "type" | "mode"
> {
  hasIcon?: boolean;
  hasStatus?: boolean;
  hasPlusLock?: boolean;
  type?: "Decisive" | "Neutral" | "Destructive";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.li<{
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
            display: flex;
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
            display: flex;
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
            display: flex;
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
        display: flex;
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

/** A list item used within a dropdown menu, supporting optional icons, status indicators, subscription tags, and selection states. Supports active, hover, and default interaction states, as well as decisive, neutral, and destructive visual types. */
export const ListItemDropdown = React.forwardRef<
  HTMLLIElement,
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
    <StyledRoot role="option" {...rest} ref={ref} $type={type} $mode={mode}>
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
      {hasIcon && <Edit />}
      {hasStatus && (
        <StyledStatus>
          {["Neutral", "Destructive"].includes(type) && (
            <IndicatorProject type={"Public"} />
          )}
        </StyledStatus>
      )}
      {hasPlusLock && <TagSubscription property1={"Upgrade short default"} />}
      <Check />
    </StyledRoot>
  );
});

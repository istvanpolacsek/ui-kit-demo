import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import {
  IndicatorProject,
  type IndicatorProjectProps,
} from "../IndicatorProject";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";

export interface ListItemPageProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "isHome" | "state" | "active" | "type" | "indicatorProjectType"
> {
  isHome?: boolean;
  state?: "Default" | "Hover" | "Active" | "Dragged";
  active?: "False" | "True";
  type?: "Page" | "Case study";
  indicatorProjectType?: IndicatorProjectProps["type"];
}

const StyledRoot = styled.a<{
  $state: "Default" | "Hover" | "Active" | "Dragged";
}>(
  ({ $state }) => css`
    position: relative;
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 305px;
            height: 44px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Hover":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 305px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Active":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 305px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Dragged":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 305px;
            height: 44px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            background-color: ${"#262626"};
          `;
        case "Active":
          return css`
            background-color: ${"#262626"};
          `;
        case "Dragged":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPageNameIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.span<{
  $state: "Default" | "Hover" | "Active" | "Dragged";
  $active: "False" | "True";
}>(
  ({ $state, $active }) => css`
    ${(() => {
      switch (JSON.stringify([$state, $active])) {
        case '["Default","False"]':
          return css`
            color: ${"#d1d1d1"};
          `;
        case '["Hover","False"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Active","False"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Dragged","False"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Default","True"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Hover","True"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Active","True"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Dragged","True"]':
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48096530 = styled.div(
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

const StyledHelperText = styled.span(
  () => css`
    color: #fefefe;
  `,
);

const StyledActiveVisual = styled.div(
  () => css`
    position: absolute;
    left: -6px;
    top: 12px;
    width: 2px;
    height: 20px;
    background-color: #fefefe;
    border-radius: 999px;
  `,
);

/** A navigation list item representing a page link, with optional home icon, active state indicator, and drag state support. Used within a sidebar or navigation panel to link to individual pages or case studies. */
export const ListItemPage = React.forwardRef<
  HTMLAnchorElement,
  ListItemPageProps
>(function ListItemPage(
  {
    isHome = true,
    state = "Default",
    active = "False",
    type = "Page",
    indicatorProjectType = "Public",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Page navigation item"
      {...rest}
      ref={ref}
      $state={state}
    >
      <StyledPageNameIcon>
        {state === "Default" && type === "Page" && (
          <VisualAsset name={"Home"} size={24} />
        )}
        {((state === "Default" && type === "Page") ||
          (state === "Default" && type === "Case study") ||
          (state === "Hover" && type === "Page") ||
          (state === "Hover" && type === "Case study") ||
          (state === "Active" && type === "Page") ||
          (state === "Dragged" && type === "Page") ||
          (state === "Dragged" && type === "Case study")) && (
          <StyledTitle $state={state} $active={active}>
            {
              (
                {
                  '["Default","Page"]': "About",
                  '["Default","Case study"]': "Case study",
                  '["Hover","Page"]': "About",
                  '["Hover","Case study"]': "Case study",
                  '["Active","Page"]': "Conta|",
                  '["Dragged","Page"]': "About",
                  '["Dragged","Case study"]': "Case study",
                } as Record<string, string>
              )[JSON.stringify([state, type])]
            }
          </StyledTitle>
        )}
        {state === "Default" && type === "Case study" && (
          <StyledFrame48096530>
            {state === "Default" && type === "Case study" && (
              <IndicatorProject type={indicatorProjectType} />
            )}
          </StyledFrame48096530>
        )}
        {["Hover", "Active", "Dragged"].includes(state) && (
          <VisualAsset name={"Drag"} size={24} />
        )}
        {state === "Active" && type === "Case study" && (
          <StyledHelperText>{"Doesn’t have edit state\n"}</StyledHelperText>
        )}
      </StyledPageNameIcon>
      {["Hover", "Active"].includes(state) && (
        <IconOnlyPrimaryButtonSubtle
          state={"Default (no BG)"}
          size={"Tiny"}
          mode={"Dark"}
        />
      )}
      {isHome && (
        <IconOnlyPrimaryButtonSubtle
          state={"Default (no BG)"}
          size={"Tiny"}
          mode={"Dark"}
        />
      )}
      {active === "True" && <StyledActiveVisual />}
    </StyledRoot>
  );
});

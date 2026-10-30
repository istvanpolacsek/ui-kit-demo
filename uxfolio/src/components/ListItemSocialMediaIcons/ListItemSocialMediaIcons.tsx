import React from "react";
import styled, { css } from "styled-components";
import { LogoSocialMedia } from "../LogoSocialMedia";
import { Drag } from "../Drag";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";

export interface ListItemSocialMediaIconsProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "state"
> {
  state?: "Default" | "Hover" | "Dragged";
}

const StyledRoot = styled.li<{ $state: "Default" | "Hover" | "Dragged" }>(
  ({ $state }) => css`
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 305px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Hover":
          return css`
            display: flex;
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
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 305px;
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
        case "Dragged":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  color: #fefefe;
  `,
);

const StyledTitle = styled.span<{ $state: "Default" | "Hover" | "Dragged" }>(
  ({ $state }) => css`
    color: #fefefe;
    ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            font-family: var(--font-work-sans, "Work Sans"), sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.01em;
          `;
        case "Dragged":
          return css`
            font-family: var(--font-work-sans, "Work Sans"), sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.01em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A list item representing a social media platform entry, displaying a logo, title (e.g. 'Facebook'), and contextual action buttons. Supports Default, Hover, and Dragged interaction states, suggesting use within a sortable or interactive list of social media links. */
export const ListItemSocialMediaIcons = React.forwardRef<
  HTMLLIElement,
  ListItemSocialMediaIconsProps
>(function ListItemSocialMediaIcons({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="listitem"
      aria-label="Facebook"
      {...rest}
      ref={ref}
      $state={state}
    >
      {state === "Default" && <LogoSocialMedia type={"Facebook"} />}
      <StyledTitle $state={state}>{"Facebook"}</StyledTitle>
      {["Hover", "Dragged"].includes(state) && <Drag />}
      {state === "Hover" && (
        <IconOnlyPrimaryButtonSubtle
          state={"Default (no BG)"}
          size={"Tiny"}
          mode={"Dark"}
        />
      )}
      {state === "Hover" && (
        <IconOnlyPrimaryButtonSubtle
          state={"Default (no BG)"}
          size={"Tiny"}
          mode={"Dark"}
        />
      )}
    </StyledRoot>
  );
});

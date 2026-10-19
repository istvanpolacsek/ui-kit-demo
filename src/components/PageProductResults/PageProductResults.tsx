import React from "react";
import styled, { css } from "styled-components";
import { Search } from "../Search";
import { IconButton } from "../IconButton";
import { TagToggleGroup } from "../TagToggleGroup";

export interface PageProductResultsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform" | "slot" | "cardGrid"
> {
  platform?: "Desktop" | "Mobile";
  slot?: React.ReactNode;
  cardGrid?: React.ReactNode;
}

const StyledRoot = styled.section<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Default"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 64px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["Icon"]["Brand"]["On Brand"]};
  `,
);

const StyledFilterMenu = styled.aside(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 240px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
  `,
);

const StyledSlot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    && > * {
      align-self: stretch;
      width: auto;
    }
    border-radius: 0px;
  `,
);

const StyledSectionProductGrid = styled.div<{
  $platform: "Desktop" | "Mobile";
}>(
  ({ $platform }) => css`
    border-radius: 8px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 48px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFilterBar = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 48px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSearchFilter = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 327px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSearch = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    ${(() => {
      switch ($platform) {
        case "Mobile":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTagToggleGroup = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    ${(() => {
      switch ($platform) {
        case "Mobile":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCardGrid = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    && > * {
      flex: 1 1 261.3333435058594px;
      min-width: 0;
      width: auto;
    }
    border-radius: 0px;
  `,
);

/** A full-page product results layout that combines a filterable search interface (filter menu, search bar, tag toggles) with a responsive product card grid. Supports Desktop and Mobile variants. */
export const PageProductResults = React.forwardRef<
  HTMLElement,
  PageProductResultsProps
>(function PageProductResults(
  { platform = "Desktop", slot, cardGrid, ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Product Results"
      {...rest}
      ref={ref}
      $platform={platform}
    >
      {platform === "Desktop" && (
        <StyledFilterMenu>
          {platform === "Desktop" && <StyledSlot>{slot}</StyledSlot>}
        </StyledFilterMenu>
      )}
      <StyledSectionProductGrid $platform={platform}>
        <StyledFilterBar $platform={platform}>
          <StyledSearchFilter $platform={platform}>
            <StyledSearch $platform={platform}>
              <Search value={"Search"} valueType={"Placeholder"} />
            </StyledSearch>
            {platform === "Mobile" && (
              <IconButton
                icon={"Sliders"}
                variant={"Primary"}
                size={"Medium"}
              />
            )}
          </StyledSearchFilter>
          <StyledTagToggleGroup $platform={platform}>
            <TagToggleGroup />
          </StyledTagToggleGroup>
        </StyledFilterBar>
        <StyledCardGrid>{cardGrid}</StyledCardGrid>
      </StyledSectionProductGrid>
    </StyledRoot>
  );
});

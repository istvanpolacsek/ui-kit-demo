import React from "react";
import styled, { css } from "styled-components";

export interface OptionBoxLargeHorizontalCardsSectionLayoutsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type" | "state"
> {
  type?:
    | "Three cards two rows"
    | "Two cards one rows"
    | "Three cards one row"
    | "Two cards two rows";
  state?: "Hover" | "Selected" | "Default";
}

const StyledRoot = styled.section<{
  $type:
    | "Three cards two rows"
    | "Two cards one rows"
    | "Three cards one row"
    | "Two cards two rows";
  $state: "Hover" | "Selected" | "Default";
}>(
  ({ $type, $state }) => css`
    overflow: hidden;
    border-radius: 4px;
    ${(() => {
      switch ($type) {
        case "Two cards one rows":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 33px;
            padding-bottom: 0px;
            padding-left: 33px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Two cards two rows":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 33px;
            padding-bottom: 15px;
            padding-left: 33px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Three cards one row":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 33px;
            padding-bottom: 0px;
            padding-left: 33px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Three cards two rows":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 33px;
            padding-bottom: 15px;
            padding-left: 33px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 134px;
    height: 59px;
    box-sizing: border-box;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"#262626"};
          `;
        case "Hover":
          return css`
            background-color: ${"#333333"};
          `;
        case "Selected":
          return css`
            background-color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCards = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: 68px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCard = styled.li<{ $state: "Hover" | "Selected" | "Default" }>(
  ({ $state }) => css`
    border-radius: 1px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"transparent"};
          `;
        case "Hover":
          return css`
            background-color: ${"transparent"};
          `;
        case "Selected":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCard2 = styled.li<{ $state: "Hover" | "Selected" | "Default" }>(
  ({ $state }) => css`
    border-radius: 1px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"transparent"};
          `;
        case "Hover":
          return css`
            background-color: ${"transparent"};
          `;
        case "Selected":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCard3 = styled.li<{ $state: "Hover" | "Selected" | "Default" }>(
  ({ $state }) => css`
    border-radius: 1px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"transparent"};
          `;
        case "Hover":
          return css`
            background-color: ${"transparent"};
          `;
        case "Selected":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCards2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: 68px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCard4 = styled.li<{ $state: "Hover" | "Selected" | "Default" }>(
  ({ $state }) => css`
    border-radius: 1px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"transparent"};
          `;
        case "Hover":
          return css`
            background-color: ${"transparent"};
          `;
        case "Selected":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCard22 = styled.li<{ $state: "Hover" | "Selected" | "Default" }>(
  ({ $state }) => css`
    border-radius: 1px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"transparent"};
          `;
        case "Hover":
          return css`
            background-color: ${"transparent"};
          `;
        case "Selected":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCard32 = styled.li<{ $state: "Hover" | "Selected" | "Default" }>(
  ({ $state }) => css`
    border-radius: 1px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"transparent"};
          `;
        case "Hover":
          return css`
            background-color: ${"transparent"};
          `;
        case "Selected":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A layout section containing a grid of selectable option cards, supporting one or two rows with two or three cards per row. Used to present grouped choices in a card-based selection UI. */
export const OptionBoxLargeHorizontalCardsSectionLayouts = React.forwardRef<
  HTMLElement,
  OptionBoxLargeHorizontalCardsSectionLayoutsProps
>(function OptionBoxLargeHorizontalCardsSectionLayouts(
  { type = "Two cards one rows", state = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="group"
      aria-label="Card options"
      {...rest}
      ref={ref}
      $type={type}
      $state={state}
    >
      <StyledCards>
        <StyledCard $state={state} />
        <StyledCard2 $state={state} />
        {["Three cards one row", "Three cards two rows"].includes(type) && (
          <StyledCard3 $state={state} />
        )}
      </StyledCards>
      {["Two cards two rows", "Three cards two rows"].includes(type) && (
        <StyledCards2>
          {["Two cards two rows", "Three cards two rows"].includes(type) && (
            <StyledCard4 $state={state} />
          )}
          {["Two cards two rows", "Three cards two rows"].includes(type) && (
            <StyledCard22 $state={state} />
          )}
          {type === "Three cards two rows" && <StyledCard32 $state={state} />}
        </StyledCards2>
      )}
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { FilterItem } from "../FilterItem";

export interface FilterDropdownProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state"
> {
  state?: "Closed" | "Open";
}

const StyledRoot = styled.button<{ $state: "Closed" | "Open" }>(
  ({ theme, $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Closed":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 96px;
            justify-content: space-between;
            align-items: flex-start;
            width: 317px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Open":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 317px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["button"]["Default"]["default"]};
  `,
);

const StyledSection = styled.div(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledFilterDropdown = styled.label(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 96px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSection2 = styled.div(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledItems = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFilterItem = styled.li(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFilterItem2 = styled.li(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFilterItem3 = styled.li(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFilterItem4 = styled.li(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFilterItem5 = styled.li(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFilterItem6 = styled.li(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A filter dropdown component that toggles between closed and open states, revealing a list of filterable items when expanded. Used to filter content by a specific section or category. */
export const FilterDropdown = React.forwardRef<
  HTMLButtonElement,
  FilterDropdownProps
>(function FilterDropdown({ state = "Closed", ...rest }, ref) {
  return (
    <StyledRoot aria-haspopup {...rest} ref={ref} $state={state}>
      {state === "Closed" && <StyledSection>{"Section"}</StyledSection>}
      {state === "Closed" && <Icon name={"keyboard_arrow_down"} size={24} />}
      {state === "Open" && (
        <StyledFilterDropdown>
          {state === "Open" && <StyledSection2>{"Section"}</StyledSection2>}
          {state === "Open" && <Icon name={"keyboard_arrow_up"} size={24} />}
        </StyledFilterDropdown>
      )}
      {state === "Open" && (
        <StyledItems>
          {state === "Open" && (
            <StyledFilterItem>
              <FilterItem />
            </StyledFilterItem>
          )}
          {state === "Open" && (
            <StyledFilterItem2>
              <FilterItem />
            </StyledFilterItem2>
          )}
          {state === "Open" && (
            <StyledFilterItem3>
              <FilterItem />
            </StyledFilterItem3>
          )}
          {state === "Open" && (
            <StyledFilterItem4>
              <FilterItem />
            </StyledFilterItem4>
          )}
          {state === "Open" && (
            <StyledFilterItem5>
              <FilterItem />
            </StyledFilterItem5>
          )}
          {state === "Open" && (
            <StyledFilterItem6>
              <FilterItem />
            </StyledFilterItem6>
          )}
        </StyledItems>
      )}
    </StyledRoot>
  );
});

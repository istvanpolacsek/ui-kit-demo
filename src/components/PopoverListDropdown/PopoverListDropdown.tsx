import React from "react";
import styled, { css } from "styled-components";
import { ListItemDropdown } from "../ListItemDropdown";
import { Separator } from "../Separator";

export interface PopoverListDropdownProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "hasAction" | "type" | "mode"
> {
  hasAction?: boolean;
  type?: "Hero text" | "Section text" | "Simple";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.ul<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"#eeeeee"};
          `;
        case "Dark":
          return css`
            border-color: ${"#3d3d3d"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            box-shadow:
              0px 4px 8px 0px rgba(0, 0, 0, 0.1),
              0px 8px 12px 0px rgba(0, 0, 0, 0.06);
          `;
        case "Dark":
          return css`
            box-shadow:
              0px 4px 8px 0px rgba(0, 0, 0, 0.24),
              0px 8px 12px 0px rgba(0, 0, 0, 0.2);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledList = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemDropdown = styled.div(
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

const StyledListItemDropdown2 = styled.div(
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

const StyledListItemDropdown3 = styled.div(
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

const StyledListItemDropdown4 = styled.div(
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

const StyledListItemDropdown5 = styled.div(
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

const StyledListItemDropdown6 = styled.div(
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

const StyledListItemDropdown7 = styled.div(
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

const StyledListItemDropdown8 = styled.div(
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

const StyledListItemDropdown9 = styled.div(
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

const StyledSeparator = styled.li(
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

const StyledList2 = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemDropdown10 = styled.div(
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

/** A popover list or dropdown menu component that renders a vertical list of selectable items, optionally separated into groups. Supports hero text, section text, and simple display variants in both light and dark modes, with an optional action item. */
export const PopoverListDropdown = React.forwardRef<
  HTMLUListElement,
  PopoverListDropdownProps
>(function PopoverListDropdown(
  { hasAction = true, type = "Hero text", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="menu"
      aria-label="Dropdown menu"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <StyledList>
        <StyledListItemDropdown>
          <ListItemDropdown
            hasPlusLock={false}
            hasStatus={false}
            hasIcon={true}
            type={"Decisive"}
            mode={"Light"}
          />
        </StyledListItemDropdown>
        <StyledListItemDropdown2>
          <ListItemDropdown
            hasPlusLock={false}
            hasStatus={false}
            hasIcon={true}
            type={"Decisive"}
            mode={"Light"}
          />
        </StyledListItemDropdown2>
        <StyledListItemDropdown3>
          <ListItemDropdown
            hasPlusLock={false}
            hasStatus={false}
            hasIcon={true}
            type={"Decisive"}
            mode={"Light"}
          />
        </StyledListItemDropdown3>
        {["Section text", "Simple"].includes(type) && (
          <StyledListItemDropdown4>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Light"}
            />
          </StyledListItemDropdown4>
        )}
        {["Section text", "Simple"].includes(type) && (
          <StyledListItemDropdown5>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Light"}
            />
          </StyledListItemDropdown5>
        )}
        {["Section text", "Simple"].includes(type) && (
          <StyledListItemDropdown6>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Light"}
            />
          </StyledListItemDropdown6>
        )}
        {type === "Simple" && (
          <StyledListItemDropdown7>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Light"}
            />
          </StyledListItemDropdown7>
        )}
        {type === "Simple" && (
          <StyledListItemDropdown8>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Light"}
            />
          </StyledListItemDropdown8>
        )}
        {type === "Simple" && (
          <StyledListItemDropdown9>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Light"}
            />
          </StyledListItemDropdown9>
        )}
      </StyledList>
      <StyledSeparator>
        <Separator angle={"Horizontal"} mode={"Light"} />
      </StyledSeparator>
      <StyledList2>
        <StyledListItemDropdown10>
          <ListItemDropdown
            hasPlusLock={false}
            hasStatus={false}
            hasIcon={true}
            type={"Neutral"}
            mode={"Light"}
          />
        </StyledListItemDropdown10>
      </StyledList2>
    </StyledRoot>
  );
});

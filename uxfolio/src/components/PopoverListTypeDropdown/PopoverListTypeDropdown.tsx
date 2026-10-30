import React from "react";
import styled, { css } from "styled-components";
import { ListItemType } from "../ListItemType";

export interface PopoverListTypeDropdownProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "type"
> {
  type?: "Gallery layout" | "Device styles";
}

const StyledRoot = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 276px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #333333;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #3d3d3d;
    border-radius: 4px;
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.24),
      0px 8px 12px 0px rgba(0, 0, 0, 0.2);
  `,
);

const StyledListItemType = styled.li(() => css``);

const StyledListItemType2 = styled.li(() => css``);

const StyledListItemType3 = styled.li(() => css``);

const StyledListItemType4 = styled.li(() => css``);

const StyledListItemType5 = styled.li(() => css``);

/** A dropdown popover list presenting selectable layout or style type options, rendered as a list of items for the user to choose from. */
export const PopoverListTypeDropdown = React.forwardRef<
  HTMLUListElement,
  PopoverListTypeDropdownProps
>(function PopoverListTypeDropdown({ type = "Gallery layout", ...rest }, ref) {
  return (
    <StyledRoot role="listbox" aria-label="Select type" {...rest} ref={ref}>
      <StyledListItemType>
        <ListItemType active={"True"} />
      </StyledListItemType>
      <StyledListItemType2>
        <ListItemType active={"False"} />
      </StyledListItemType2>
      <StyledListItemType3>
        <ListItemType active={"False"} />
      </StyledListItemType3>
      <StyledListItemType4>
        <ListItemType active={"False"} />
      </StyledListItemType4>
      {type === "Device styles" && (
        <StyledListItemType5>
          <ListItemType active={"False"} />
        </StyledListItemType5>
      )}
    </StyledRoot>
  );
});

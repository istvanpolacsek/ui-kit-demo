import React from "react";
import styled, { css } from "styled-components";
import { ListItemSmallType } from "../ListItemSmallType";

export interface PopoverListSmallTypeDropdownProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "type"
> {
  type?: "Background";
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

const StyledListItemSmallType = styled.li(() => css``);

const StyledListItemSmallType2 = styled.li(() => css``);

const StyledListItemSmallType3 = styled.li(() => css``);

const StyledListItemSmallType4 = styled.li(() => css``);

/** A popover list component displaying a small-type dropdown menu with a background style, containing a list of selectable items. */
export const PopoverListSmallTypeDropdown = React.forwardRef<
  HTMLUListElement,
  PopoverListSmallTypeDropdownProps
>(function PopoverListSmallTypeDropdown({ type = "Background", ...rest }, ref) {
  return (
    <StyledRoot
      role="listbox"
      aria-label="Dropdown options"
      {...rest}
      ref={ref}
    >
      <StyledListItemSmallType>
        <ListItemSmallType selected={true} />
      </StyledListItemSmallType>
      <StyledListItemSmallType2>
        <ListItemSmallType />
      </StyledListItemSmallType2>
      <StyledListItemSmallType3>
        <ListItemSmallType />
      </StyledListItemSmallType3>
      <StyledListItemSmallType4>
        <ListItemSmallType />
      </StyledListItemSmallType4>
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { ListItemAddModule } from "../ListItemAddModule";

export interface PopoverPanelAddModuleProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 24px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    box-shadow:
      0px 6px 16px 0px rgba(0, 0, 0, 0.32),
      0px 16px 24px 0px rgba(0, 0, 0, 0.24);
  `,
);

const StyledList = styled.ul(
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
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledListItemAddModule = styled.li(() => css``);

const StyledListItemAddModule2 = styled.li(() => css``);

const StyledListItemAddModule3 = styled.li(() => css``);

const StyledListItemAddModule4 = styled.li(() => css``);

const StyledListItemAddModule5 = styled.li(() => css``);

const StyledListItemAddModule6 = styled.li(() => css``);

/** A popover panel that presents a list of modules available for the user to add. Contains a header and a scrollable or static list of selectable module items. */
export const PopoverPanelAddModule = React.forwardRef<
  HTMLElement,
  PopoverPanelAddModuleProps
>(function PopoverPanelAddModule({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Add module" {...rest} ref={ref}>
      <HeaderPopoverPanel type={"No tabs"} />
      <StyledList>
        <StyledListItemAddModule>
          <ListItemAddModule />
        </StyledListItemAddModule>
        <StyledListItemAddModule2>
          <ListItemAddModule />
        </StyledListItemAddModule2>
        <StyledListItemAddModule3>
          <ListItemAddModule />
        </StyledListItemAddModule3>
        <StyledListItemAddModule4>
          <ListItemAddModule />
        </StyledListItemAddModule4>
        <StyledListItemAddModule5>
          <ListItemAddModule />
        </StyledListItemAddModule5>
        <StyledListItemAddModule6>
          <ListItemAddModule />
        </StyledListItemAddModule6>
      </StyledList>
    </StyledRoot>
  );
});

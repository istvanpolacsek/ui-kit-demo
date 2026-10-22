import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { ListItemOption } from "../ListItemOption";

export interface OptionListSimpleProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "hasLavel" | "type"
> {
  hasLavel?: boolean;
  type?: "Default";
}

const StyledRoot = styled.ul(
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall = styled.li(
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

const StyledList = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemOption = styled.div(
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

const StyledListItemOption2 = styled.div(
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

const StyledListItemOption3 = styled.div(
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

const StyledListItemOption4 = styled.div(
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

/** A simple option list component that displays a collection of selectable options, optionally preceded by a subheader label. Renders as an unordered list of option items. */
export const OptionListSimple = React.forwardRef<
  HTMLUListElement,
  OptionListSimpleProps
>(function OptionListSimple(
  { hasLavel = true, type = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot role="listbox" aria-label="Options" {...rest} ref={ref}>
      {hasLavel && (
        <StyledSubheaderSmall>
          <SubheaderSmall hasIcon={false} mode={"Dark"} />
        </StyledSubheaderSmall>
      )}
      <StyledList>
        <StyledListItemOption>
          <ListItemOption />
        </StyledListItemOption>
        <StyledListItemOption2>
          <ListItemOption />
        </StyledListItemOption2>
        <StyledListItemOption3>
          <ListItemOption />
        </StyledListItemOption3>
        <StyledListItemOption4>
          <ListItemOption />
        </StyledListItemOption4>
      </StyledList>
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { OptionChip } from "../OptionChip";

export interface OptionListArrayProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasLavel" | "type"
> {
  hasLavel?: boolean;
  type?: "Default";
}

const StyledRoot = styled.div(
  () => css`
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

const StyledSubheaderSmall = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledOptionChip = styled.li(() => css``);

const StyledOptionChip2 = styled.li(() => css``);

const StyledOptionChip3 = styled.li(() => css``);

const StyledOptionChip4 = styled.li(() => css``);

const StyledOptionChip5 = styled.li(() => css``);

const StyledOptionChip6 = styled.li(() => css``);

const StyledOptionChip7 = styled.li(() => css``);

const StyledOptionChip8 = styled.li(() => css``);

const StyledOptionChip9 = styled.li(() => css``);

const StyledOptionChip10 = styled.li(() => css``);

const StyledOptionChip11 = styled.li(() => css``);

const StyledOptionChip12 = styled.li(() => css``);

/** A labeled list of selectable option chips, allowing users to choose from an array of options. Optionally displays a subheader/label above the chip list. */
export const OptionListArray = React.forwardRef<
  HTMLDivElement,
  OptionListArrayProps
>(function OptionListArray(
  { hasLavel = true, type = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot role="group" aria-label="Option list" {...rest} ref={ref}>
      {hasLavel && (
        <StyledSubheaderSmall>
          <SubheaderSmall hasIcon={false} mode={"Dark"} />
        </StyledSubheaderSmall>
      )}
      <StyledList>
        <StyledOptionChip>
          <OptionChip />
        </StyledOptionChip>
        <StyledOptionChip2>
          <OptionChip />
        </StyledOptionChip2>
        <StyledOptionChip3>
          <OptionChip />
        </StyledOptionChip3>
        <StyledOptionChip4>
          <OptionChip />
        </StyledOptionChip4>
        <StyledOptionChip5>
          <OptionChip />
        </StyledOptionChip5>
        <StyledOptionChip6>
          <OptionChip />
        </StyledOptionChip6>
        <StyledOptionChip7>
          <OptionChip />
        </StyledOptionChip7>
        <StyledOptionChip8>
          <OptionChip />
        </StyledOptionChip8>
        <StyledOptionChip9>
          <OptionChip />
        </StyledOptionChip9>
        <StyledOptionChip10>
          <OptionChip />
        </StyledOptionChip10>
        <StyledOptionChip11>
          <OptionChip />
        </StyledOptionChip11>
        <StyledOptionChip12>
          <OptionChip />
        </StyledOptionChip12>
      </StyledList>
    </StyledRoot>
  );
});

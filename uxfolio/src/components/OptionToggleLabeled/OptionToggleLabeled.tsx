import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import {
  OptionToggleToggleItem,
  type OptionToggleToggleItemProps,
} from "../OptionToggleToggleItem";

export interface OptionToggleLabeledProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "numberOfItems"
  | "optionToggleToggleItemState"
  | "optionToggleToggleItem2State"
  | "optionToggleToggleItem3State"
  | "optionToggleToggleItem4State"
> {
  numberOfItems?: 1 | 2 | 3 | 4;
  optionToggleToggleItemState?: OptionToggleToggleItemProps["state"];
  optionToggleToggleItem2State?: OptionToggleToggleItemProps["state"];
  optionToggleToggleItem3State?: OptionToggleToggleItemProps["state"];
  optionToggleToggleItem4State?: OptionToggleToggleItemProps["state"];
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
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

const StyledOptionToggleToggleItem = styled.div(
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

const StyledOptionToggleToggleItem2 = styled.div(
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

const StyledOptionToggleToggleItem3 = styled.div(
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

const StyledOptionToggleToggleItem4 = styled.div(
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

/** A labeled option toggle group that displays a subheader/label alongside one or more toggle items, supporting 1 to 4 selectable options. */
export const OptionToggleLabeled = React.forwardRef<
  HTMLDivElement,
  OptionToggleLabeledProps
>(function OptionToggleLabeled(
  {
    numberOfItems = 1,
    optionToggleToggleItemState = "Off",
    optionToggleToggleItem2State = "Off",
    optionToggleToggleItem3State = "Off",
    optionToggleToggleItem4State = "Off",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="group"
      aria-label="Option toggle group"
      {...rest}
      ref={ref}
    >
      <StyledSubheaderSmall>
        <SubheaderSmall hasIcon={false} mode={"Dark"} />
      </StyledSubheaderSmall>
      <StyledOptionToggleToggleItem>
        <OptionToggleToggleItem state={optionToggleToggleItemState} />
      </StyledOptionToggleToggleItem>
      {[2, 3, 4].includes(numberOfItems) && (
        <StyledOptionToggleToggleItem2>
          <OptionToggleToggleItem state={optionToggleToggleItem2State} />
        </StyledOptionToggleToggleItem2>
      )}
      {[3, 4].includes(numberOfItems) && (
        <StyledOptionToggleToggleItem3>
          <OptionToggleToggleItem state={optionToggleToggleItem3State} />
        </StyledOptionToggleToggleItem3>
      )}
      {numberOfItems === 4 && (
        <StyledOptionToggleToggleItem4>
          <OptionToggleToggleItem state={optionToggleToggleItem4State} />
        </StyledOptionToggleToggleItem4>
      )}
    </StyledRoot>
  );
});

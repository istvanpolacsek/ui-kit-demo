import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import {
  OptionBarOnlyBar,
  type OptionBarOnlyBarProps,
} from "../OptionBarOnlyBar";

export interface OptionBarLabeledProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "hasDescription"
  | "type"
  | "number"
  | "optionBarOnlyBarNumber"
  | "optionBarOnlyBarActive"
  | "optionBarOnlyBarType"
  | "optionBarOnlyBar2Number"
  | "optionBarOnlyBar2Active"
  | "optionBarOnlyBar2Type"
  | "optionBarOnlyBar3Number"
  | "optionBarOnlyBar3Active"
  | "optionBarOnlyBar3Type"
> {
  hasDescription?: boolean;
  type?: "Enabled" | "Disabled";
  number?: "1 option" | "2 options";
  optionBarOnlyBarNumber?: OptionBarOnlyBarProps["number"];
  optionBarOnlyBarActive?: OptionBarOnlyBarProps["active"];
  optionBarOnlyBarType?: OptionBarOnlyBarProps["type"];
  optionBarOnlyBar2Number?: OptionBarOnlyBarProps["number"];
  optionBarOnlyBar2Active?: OptionBarOnlyBarProps["active"];
  optionBarOnlyBar2Type?: OptionBarOnlyBarProps["type"];
  optionBarOnlyBar3Number?: OptionBarOnlyBarProps["number"];
  optionBarOnlyBar3Active?: OptionBarOnlyBarProps["active"];
  optionBarOnlyBar3Type?: OptionBarOnlyBarProps["type"];
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
    border-radius: 4px;
    color: #adadad;
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

const StyledOptionBarOnlyBar = styled.div(
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

const StyledYourWebsiteIsOnlyAccessibleThroughADirectLink = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledOptions = styled.ul(
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledOptionBarOnlyBar2 = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledOptionBarOnlyBar22 = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A labeled option bar group that presents one or two selectable options beneath a subheader, with an optional descriptive text. Supports enabled and disabled states. */
export const OptionBarLabeled = React.forwardRef<
  HTMLDivElement,
  OptionBarLabeledProps
>(function OptionBarLabeled(
  {
    hasDescription = false,
    type = "Enabled",
    number = "1 option",
    optionBarOnlyBarNumber = 4,
    optionBarOnlyBarActive = 1,
    optionBarOnlyBarType = "Text",
    optionBarOnlyBar2Number = 3,
    optionBarOnlyBar2Active = 1,
    optionBarOnlyBar2Type = "Icon",
    optionBarOnlyBar3Number = 3,
    optionBarOnlyBar3Active = 1,
    optionBarOnlyBar3Type = "Icon",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="group"
      aria-label="Option bar labeled group"
      {...rest}
      ref={ref}
    >
      <StyledSubheaderSmall>
        <SubheaderSmall hasIcon={false} mode={"Dark"} />
      </StyledSubheaderSmall>
      {number === "1 option" && (
        <StyledOptionBarOnlyBar>
          <OptionBarOnlyBar
            number={optionBarOnlyBarNumber}
            active={optionBarOnlyBarActive}
            type={optionBarOnlyBarType}
          />
        </StyledOptionBarOnlyBar>
      )}
      {hasDescription && (
        <StyledYourWebsiteIsOnlyAccessibleThroughADirectLink>
          {"Your website is only accessible through a direct link"}
        </StyledYourWebsiteIsOnlyAccessibleThroughADirectLink>
      )}
      {number === "2 options" && (
        <StyledOptions>
          {number === "2 options" && (
            <StyledOptionBarOnlyBar2>
              <OptionBarOnlyBar
                number={optionBarOnlyBar2Number}
                active={optionBarOnlyBar2Active}
                type={optionBarOnlyBar2Type}
              />
            </StyledOptionBarOnlyBar2>
          )}
          {number === "2 options" && (
            <StyledOptionBarOnlyBar22>
              <OptionBarOnlyBar
                number={optionBarOnlyBar3Number}
                active={optionBarOnlyBar3Active}
                type={optionBarOnlyBar3Type}
              />
            </StyledOptionBarOnlyBar22>
          )}
        </StyledOptions>
      )}
    </StyledRoot>
  );
});

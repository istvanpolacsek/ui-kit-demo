import React from "react";
import styled, { css } from "styled-components";
import { OptionGridSimple } from "../OptionGridSimple";
import { SubheaderSmall } from "../SubheaderSmall";
import { OptionListSimple } from "../OptionListSimple";

export interface ModalSidebarCropProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.aside(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 257px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledOptionGridSimple = styled.div(
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

const StyledOptionList = styled.section(
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
    align-self: stretch;
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

const StyledOptionListSimple = styled.div(
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

const StyledBottomScrollOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: -0.33349609375px;
    width: 257px;
    height: 48px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A modal sidebar panel for cropping, containing an option grid and a grouped option list with a subheader, overlaid with a bottom scroll fade effect. */
export const ModalSidebarCrop = React.forwardRef<
  HTMLElement,
  ModalSidebarCropProps
>(function ModalSidebarCrop({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Crop options" {...rest} ref={ref}>
      <StyledOptionGridSimple>
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Image shape"}
        />
      </StyledOptionGridSimple>
      <StyledOptionList>
        <StyledSubheaderSmall>
          <SubheaderSmall hasIcon={false} mode={"Dark"} />
        </StyledSubheaderSmall>
        <StyledOptionListSimple>
          <OptionListSimple hasLavel={false} type={"Default"} />
        </StyledOptionListSimple>
      </StyledOptionList>
      <StyledBottomScrollOverlay />
    </StyledRoot>
  );
});

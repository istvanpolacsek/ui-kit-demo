import React from "react";
import styled, { css } from "styled-components";
import { OptionGridSimple } from "../OptionGridSimple";

export interface ModalSidebarThumbnailLayoutProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "hasColor" | "hasSecondColor" | "hasThirdColor" | "type"
> {
  hasColor?: boolean;
  hasSecondColor?: boolean;
  hasThirdColor?: boolean;
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
    width: 332px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledBottomScrollOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: -0.33349609375px;
    width: 332px;
    height: 48px;
    background-color: transparent;
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

const StyledOptionGridSimple2 = styled.div(
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

const StyledOptionGridSimple3 = styled.div(
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

const StyledOptionGridSimple4 = styled.div(
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

/** A modal sidebar panel displaying a thumbnail layout grid of selectable color or style options, organized as a scrollable list of option grid items. */
export const ModalSidebarThumbnailLayout = React.forwardRef<
  HTMLElement,
  ModalSidebarThumbnailLayoutProps
>(function ModalSidebarThumbnailLayout(
  {
    hasColor = true,
    hasSecondColor = true,
    hasThirdColor = true,
    type = "Default",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Thumbnail layout options"
      {...rest}
      ref={ref}
    >
      <StyledBottomScrollOverlay />
      <StyledOptionGridSimple>
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Mobile layout"}
        />
      </StyledOptionGridSimple>
      <StyledOptionGridSimple2>
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Laptop layout"}
        />
      </StyledOptionGridSimple2>
      <StyledOptionGridSimple3>
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Desktop layout"}
        />
      </StyledOptionGridSimple3>
      <StyledOptionGridSimple4>
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Tablet layout"}
        />
      </StyledOptionGridSimple4>
    </StyledRoot>
  );
});

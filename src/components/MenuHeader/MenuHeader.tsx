import React from "react";
import styled, { css } from "styled-components";
import { TextSmall } from "../TextSmall";
import { TextStrong } from "../TextStrong";

export interface MenuHeaderProps extends React.ComponentPropsWithoutRef<"header"> {}

const StyledRoot = styled.header(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 4px;
    padding-left: 16px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 256px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
  `,
);

/** A menu header component that displays a small descriptive text alongside a strong/bold title, typically used to label or introduce a section within a navigation menu. */
export const MenuHeader = React.forwardRef<HTMLElement, MenuHeaderProps>(
  function MenuHeader({ ...rest }, ref) {
    return (
      <StyledRoot
        role="banner"
        aria-label="Menu section header"
        {...rest}
        ref={ref}
      >
        <TextSmall text={"Heading"} />
        <TextStrong text={"Heading"} />
      </StyledRoot>
    );
  },
);

import React from "react";
import styled, { css } from "styled-components";
import { TextStrong } from "../TextStrong";

export interface MenuHeadingProps extends React.ComponentPropsWithoutRef<"h3"> {}

const StyledRoot = styled.h3(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 4px;
    padding-left: 16px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

/** A heading element used to label or title a section within a menu, providing semantic structure and hierarchy to menu content. */
export const MenuHeading = React.forwardRef<
  HTMLHeadingElement,
  MenuHeadingProps
>(function MenuHeading({ ...rest }, ref) {
  return (
    <StyledRoot role="heading" {...rest} ref={ref}>
      <TextStrong text={"Heading"} />
    </StyledRoot>
  );
});

import React from "react";
import styled, { css } from "styled-components";

export interface MenuSeparatorProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 16px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledRule = styled.div(
  ({ theme }) => css`
    background-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 0px;
  `,
);

/** A visual separator used within a menu to divide groups of related menu items. Renders as a horizontal rule to provide visual separation between menu sections. */
export const MenuSeparator = React.forwardRef<
  HTMLDivElement,
  MenuSeparatorProps
>(function MenuSeparator({ ...rest }, ref) {
  return (
    <StyledRoot
      role="separator"
      aria-label="Menu separator"
      {...rest}
      ref={ref}
    >
      <StyledRule />
    </StyledRoot>
  );
});

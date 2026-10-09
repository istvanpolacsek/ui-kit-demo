import React from "react";
import styled, { css } from "styled-components";

export interface AlertProps extends React.ComponentPropsWithoutRef<"section"> {}

const StyledRoot = styled.section(
  () => css`
    position: relative;
    border-radius: 0px;
    width: 21px;
    height: 21px;
    box-sizing: border-box;
  `,
);

const StyledFrame54 = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 21px;
    height: 21px;
    overflow: hidden;
    background-color: ${theme["Semantic"]["Error Scale"]["10"]};
    border-radius: 34px;
  `,
);

const StyledFrame53 = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 5px;
    top: 5px;
    width: 11px;
    height: 11px;
    overflow: hidden;
    background-color: ${theme["Semantic"]["Error Scale"]["50"]};
    border-radius: 34px;
  `,
);

/** An Alert component used to display important messages or notifications to the user, typically conveying status information such as success, warning, error, or informational states. */
export const Alert = React.forwardRef<HTMLElement, AlertProps>(function Alert(
  { ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="alert"
      aria-label="Alert notification"
      {...rest}
      ref={ref}
    >
      <StyledFrame54></StyledFrame54>
      <StyledFrame53></StyledFrame53>
    </StyledRoot>
  );
});

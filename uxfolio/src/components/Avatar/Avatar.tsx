import React from "react";
import styled, { css } from "styled-components";

export interface AvatarProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #ffffff;
    border: 2px solid transparent;
    box-sizing: border-box;
    border-radius: 30px;
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    &:hover {
      border-color: #333333;
    }
  `,
);

const StyledImage = styled.span(
  () => css`
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** Displays a user's avatar image, typically used to represent a person or account visually. Supports default and hover interaction states. */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="User avatar" {...rest} ref={ref}>
        <StyledImage />
      </StyledRoot>
    );
  },
);

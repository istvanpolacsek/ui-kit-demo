import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface AddPageOrSocialButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 305px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
    color: #adadad;
    &:hover {
      background-color: #262626;
    }
  `,
);

const StyledAddPageOrLink = styled.span(
  () => css`
    color: #adadad;
    &:hover {
      color: #fefefe;
    }
  `,
);

/** A button component for adding a new page or social link. Displays an icon alongside a label and supports default and hover interaction states. */
export const AddPageOrSocialButton = React.forwardRef<
  HTMLButtonElement,
  AddPageOrSocialButtonProps
>(function AddPageOrSocialButton({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Add page or link" {...rest} ref={ref}>
      <VisualAsset name={"Add"} size={24} />
      <StyledAddPageOrLink>{"Add page or link"}</StyledAddPageOrLink>
    </StyledRoot>
  );
});

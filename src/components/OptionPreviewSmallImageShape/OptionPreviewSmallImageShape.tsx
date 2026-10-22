import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewSmallImageShapeProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Rectangle" | "Super rounded rectangle" | "Oval" | "Arch";
}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 59px;
    height: 59px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    width: 59px;
    height: 59px;
    box-sizing: border-box;
  `,
);

const StyledBase = styled.span(
  () => css`
    width: 27px;
    height: 35px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledBase2 = styled.span(
  () => css`
    width: 27px;
    height: 35px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

/** A small option preview component that displays an image shape selector. Supports multiple shape variants including Rectangle, Super rounded rectangle, Oval, and Arch, allowing users to select a preferred image shape option. */
export const OptionPreviewSmallImageShape = React.forwardRef<
  HTMLButtonElement,
  OptionPreviewSmallImageShapeProps
>(function OptionPreviewSmallImageShape({ type = "Rectangle", ...rest }, ref) {
  return (
    <StyledRoot
      role="radio"
      aria-label="Image shape option"
      {...rest}
      ref={ref}
    >
      {["Rectangle", "Super rounded rectangle", "Arch"].includes(type) && (
        <StyledBase />
      )}
      {type === "Oval" && <StyledBase2 />}
    </StyledRoot>
  );
});

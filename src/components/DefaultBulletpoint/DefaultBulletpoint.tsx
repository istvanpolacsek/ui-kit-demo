import React from "react";
import styled, { css } from "styled-components";

export interface DefaultBulletpointProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "size"
> {
  size?: "Small" | "Medium";
}

const StyledRoot = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 7px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    color: #191a1c;
  `,
);

const StyledIcon = styled.span(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    width: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledRectangle = styled.div(
  () => css`
    background-color: #1aa0a5;
    border-radius: 1.6666667461395264px;
  `,
);

const StyledAffordableAcademicPrograms = styled.span<{
  $size: "Small" | "Medium";
}>(
  ({ $size }) => css`
    color: #191a1c;
    ${(() => {
      switch ($size) {
        case "Medium":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        case "Small":
          return css`
            font-family: "Roboto";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A single bulletpoint list item component, typically used within a list to display a text entry preceded by a bullet icon. Supports small and medium size variants. */
export const DefaultBulletpoint = React.forwardRef<
  HTMLLIElement,
  DefaultBulletpointProps
>(function DefaultBulletpoint({ size = "Medium", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledIcon>
        <StyledRectangle />
      </StyledIcon>
      <StyledAffordableAcademicPrograms $size={size}>
        {"Affordable Academic Programs"}
      </StyledAffordableAcademicPrograms>
    </StyledRoot>
  );
});

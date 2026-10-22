import React from "react";
import styled, { css } from "styled-components";

export interface OptionMobileProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state"
> {
  state?: "Default" | "Pressed";
}

const StyledRoot = styled.button<{ $state: "Default" | "Pressed" }>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Pressed":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Pressed":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledatomsDefault = styled.span<{ $state: "Default" | "Pressed" }>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Pressed":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

/** A mobile option item that represents a selectable choice in a list or menu. Supports default and pressed states to indicate selection or interaction feedback. */
export const OptionMobile = React.forwardRef<
  HTMLButtonElement,
  OptionMobileProps
>(function OptionMobile({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="option"
      aria-label="Option 1"
      {...rest}
      ref={ref}
      $state={state}
    >
      <StyledatomsDefault $state={state}>{"Option 1"}</StyledatomsDefault>
    </StyledRoot>
  );
});

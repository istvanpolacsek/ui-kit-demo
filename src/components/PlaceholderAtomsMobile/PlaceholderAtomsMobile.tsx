import React from "react";
import styled, { css } from "styled-components";

export interface PlaceholderAtomsMobileProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "textState"
> {
  textState?: "Placeholder" | "Secure";
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["gray"]["500"]};
  `,
);

const StyledatomsDefault = styled.span<{
  $textState: "Placeholder" | "Secure";
}>(
  ({ theme, $textState }) => css`
    color: ${theme["gray"]["500"]};
    ${(() => {
      switch ($textState) {
        case "Placeholder":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCursor = styled.span(
  ({ theme }) => css`
    width: 1px;
    height: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["gray"]["500"]};
    border-radius: 1px;
  `,
);

/** A mobile placeholder input atom that displays placeholder or secure (password) text, with a visible cursor indicator for active state. */
export const PlaceholderAtomsMobile = React.forwardRef<
  HTMLDivElement,
  PlaceholderAtomsMobileProps
>(function PlaceholderAtomsMobile({ textState = "Placeholder", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Text input field" {...rest} ref={ref}>
      <StyledatomsDefault $textState={textState}>
        {
          (
            {
              '["Placeholder"]': "Placeholder text",
              '["Secure"]': "• • • • • • • • • •",
            } as Record<string, string>
          )[JSON.stringify([textState])]
        }
      </StyledatomsDefault>
      <StyledCursor />
    </StyledRoot>
  );
});

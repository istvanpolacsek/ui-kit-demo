import React from "react";
import styled, { css } from "styled-components";

export interface PlaceholderAtomsWebProps extends Omit<
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
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCursor = styled.div(
  ({ theme }) => css`
    width: 1px;
    height: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["gray"]["500"]};
    border-radius: 1px;
  `,
);

/** A text input atom that supports both placeholder and secure (password) text states, representing the base input field used across web forms. */
export const PlaceholderAtomsWeb = React.forwardRef<
  HTMLDivElement,
  PlaceholderAtomsWebProps
>(function PlaceholderAtomsWeb({ textState = "Placeholder", ...rest }, ref) {
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

import React from "react";
import styled, { css } from "styled-components";

export interface PlainTooltipProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "supportingText" | "type"
> {
  supportingText?: string;
  type?: "Single line" | "Multi line";
}

const StyledRoot = styled.div<{ $type: "Single line" | "Multi line" }>(
  ({ theme, $type }) => css`
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 4px;
    box-shadow: 4px 4px 8px 0px rgba(147, 147, 147, 0.25);
    ${(() => {
      switch ($type) {
        case "Single line":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 8px;
            padding-bottom: 4px;
            padding-left: 8px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Multi line":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 8px;
            padding-bottom: 4px;
            padding-left: 8px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledSupportingText = styled.input(
  ({ theme }) => css`
    flex: 1 1 auto;
    min-width: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    font: inherit;
    &::placeholder {
      color: inherit;
      opacity: 1;
    }
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A plain tooltip that displays supporting text to provide additional context or information. Supports single-line and multi-line text variants. */
export const PlainTooltip = React.forwardRef<
  HTMLInputElement,
  PlainTooltipProps
>(function PlainTooltip(
  { supportingText = "Supporting text", type = "Single line", ...rest },
  ref,
) {
  return (
    <StyledRoot $type={type}>
      <StyledSupportingText
        type="text"
        placeholder={supportingText}
        aria-label={supportingText}
        ref={ref}
        {...rest}
      />
    </StyledRoot>
  );
});

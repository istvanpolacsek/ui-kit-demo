import React from "react";
import styled, { css } from "styled-components";

export interface TextPriceProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "price" | "label" | "currency" | "hasLabel" | "size"
> {
  price?: string;
  label?: string;
  currency?: string;
  hasLabel?: boolean;
  size?: "Large" | "Small";
}

const StyledRoot = styled.span(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledPrice = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styled = styled.span<{ $size: "Large" | "Small" }>(
  ({ theme, $size }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: "Inter";
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: -0.02em;
          `;
        case "Small":
          return css`
            font-family: "Inter";
            font-size: 16px;
            font-weight: 600;
            line-height: 1;
            letter-spacing: -0.02em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled50 = styled.span<{ $size: "Large" | "Small" }>(
  ({ theme, $size }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: "Inter";
            font-size: 48px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: -0.02em;
          `;
        case "Small":
          return css`
            font-family: "Inter";
            font-size: 24px;
            font-weight: 600;
            line-height: 1;
            letter-spacing: -0.02em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMo = styled.span<{ $size: "Large" | "Small" }>(
  ({ theme, $size }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: "Inter";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.8;
          `;
        case "Small":
          return css`
            font-family: "Inter";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.2;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** Displays a formatted price with an optional currency symbol, numeric value, and billing period label (e.g. '$50 / mo'). Supports large and small size variants. */
export const TextPrice = React.forwardRef<HTMLSpanElement, TextPriceProps>(
  function TextPrice(
    {
      price = "50",
      label = "/ mo",
      currency = "$",
      hasLabel = true,
      size = "Large",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot aria-label="$50 / mo" {...rest} ref={ref}>
        <StyledPrice>
          <Styled $size={size}>{currency}</Styled>
          <Styled50 $size={size}>{price}</Styled50>
        </StyledPrice>
        {hasLabel && <StyledMo $size={size}>{label}</StyledMo>}
      </StyledRoot>
    );
  },
);

import React from "react";
import styled, { css } from "styled-components";

export interface ProductInfoCardProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "showDescription" | "body"
> {
  showDescription?: boolean;
  body?: React.ReactNode;
}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
  `,
);

const StyledImage = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    height: 247px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["Slate"]["200"]};
    border-radius: 0px;
  `,
);

const StyledBody = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 208px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A card component that displays product information, including an image and a configurable body slot with optional description content. */
export const ProductInfoCard = React.forwardRef<
  HTMLElement,
  ProductInfoCardProps
>(function ProductInfoCard({ showDescription = true, body, ...rest }, ref) {
  return (
    <StyledRoot
      role="article"
      aria-label="Product information card"
      {...rest}
      ref={ref}
    >
      <StyledImage></StyledImage>
      <StyledBody>{body}</StyledBody>
    </StyledRoot>
  );
});

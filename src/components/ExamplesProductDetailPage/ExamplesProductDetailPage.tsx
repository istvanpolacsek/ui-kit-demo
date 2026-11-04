import React from "react";
import styled, { css } from "styled-components";
import { Header } from "../Header";
import { PageProduct } from "../PageProduct";
import { CardGridReviews } from "../CardGridReviews";
import { PageNewsletter } from "../PageNewsletter";
import { Footer } from "../Footer";

export interface ExamplesProductDetailPageProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform"
> {
  platform?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $platform: "Mobile" | "Desktop" }>(
  ({ theme, $platform }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            color: ${theme["Icon"]["Brand"]["On Brand"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHeader = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledPageProduct = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledPageNewsletter = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A full product detail page layout composed of a header, product detail section, reviews card grid, newsletter signup, and footer. Supports both Mobile and Desktop platform variants. */
export const ExamplesProductDetailPage = React.forwardRef<
  HTMLElement,
  ExamplesProductDetailPageProps
>(function ExamplesProductDetailPage({ platform = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      role="main"
      aria-label="Product Detail Page"
      {...rest}
      ref={ref}
      $platform={platform}
    >
      <StyledHeader>
        <Header
          variant={"Neutral"}
          state={"Default"}
          size={"Medium"}
          platform={"Desktop"}
        />
      </StyledHeader>
      <StyledPageProduct>
        <PageProduct platform={"Desktop"} />
      </StyledPageProduct>
      <CardGridReviews platform={"Desktop"} />
      <StyledPageNewsletter>
        <PageNewsletter platform={"Desktop"} />
      </StyledPageNewsletter>
      <Footer platform={"Desktop"} />
    </StyledRoot>
  );
});

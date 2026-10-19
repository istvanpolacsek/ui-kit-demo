import React from "react";
import styled, { css } from "styled-components";
import { IconButton } from "../IconButton";

export interface PageProductProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform" | "column"
> {
  platform?: "Desktop" | "Mobile";
  column?: React.ReactNode;
}

const StyledRoot = styled.section<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Default"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 64px;
            padding-right: 64px;
            padding-bottom: 64px;
            padding-left: 64px;
            gap: 24px;
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
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
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
    color: ${theme["Icon"]["Brand"]["On Brand"]};
  `,
);

const StyledSection = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 64px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 64px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    overflow: hidden;
    background-color: ${theme["Slate"]["200"]};
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
            justify-content: center;
            align-items: center;
            flex: 1 1 0;
            align-self: stretch;
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
            justify-content: center;
            align-items: center;
            height: 327px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledColumn = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    && > * {
      align-self: stretch;
      width: auto;
    }
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
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIconButton = styled.div(
  () => css`
    position: absolute;
    left: 10px;
    top: 10px;
    width: 36px;
    height: 36px;
  `,
);

/** A product page section component that displays a product image alongside a configurable content column and an icon button. Supports Desktop and Mobile layout variants. */
export const PageProduct = React.forwardRef<HTMLElement, PageProductProps>(
  function PageProduct({ platform = "Desktop", column, ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Product section"
        {...rest}
        ref={ref}
        $platform={platform}
      >
        <StyledSection $platform={platform}>
          <StyledImage $platform={platform}></StyledImage>
          <StyledColumn $platform={platform}>{column}</StyledColumn>
          <StyledIconButton>
            <IconButton icon={"Heart"} variant={"Primary"} size={"Small"} />
          </StyledIconButton>
        </StyledSection>
      </StyledRoot>
    );
  },
);

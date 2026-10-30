import React from "react";
import styled, { css } from "styled-components";
import { IllustrationLegacyIcon } from "../IllustrationLegacyIcon";
import { LinkButton } from "../LinkButton";

export interface ListItemPageAddProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Icon" | "Image";
}

const StyledRoot = styled.button(
  () => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 18px;
    padding-right: 24px;
    padding-bottom: 18px;
    padding-left: 76px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    background-color: #262626;
    border-radius: 4px;
  `,
);

const StyledIllustration = styled.div<{ $type: "Icon" | "Image" }>(
  ({ $type }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 60px;
    height: 60px;
    background-color: #333333;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Icon":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Image":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledContact = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledNow = styled.p(
  () => css`
    color: #adadad;
  `,
);

/** A list item representing a page entry with an illustration (icon or image), a title, optional subtitle, and an optional link button. Used within a navigation or page-selection list. */
export const ListItemPageAdd = React.forwardRef<
  HTMLButtonElement,
  ListItemPageAddProps
>(function ListItemPageAdd({ type = "Icon", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <StyledIllustration $type={type}>
        {type === "Icon" && <IllustrationLegacyIcon type={"About me"} />}
        {type === "Image" && <StyledImage />}
      </StyledIllustration>
      <StyledContact>{"Contact"}</StyledContact>
      <StyledNow>{"Now"}</StyledNow>
      <LinkButton size={"Small"} mode={"Dark"} />
    </StyledRoot>
  );
});

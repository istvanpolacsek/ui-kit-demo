import React from "react";
import styled, { css } from "styled-components";

export interface TypePreviewHeroProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Modular" | "Overlay" | "Sidebar";
}

const StyledRoot = styled.section(
  () => css`
    overflow: hidden;
    background-color: #4d4c4c;
    border-radius: 3px;
    width: 96px;
    height: 64px;
    box-sizing: border-box;
  `,
);

const StyledRectangle704 = styled.div(
  () => css`
    width: 72px;
    height: 52px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.1599999964237213);
    border-radius: 0px;
  `,
);

const StyledRectangle708 = styled.div(
  () => css`
    width: 26px;
    height: 11px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #4d4c4c;
    border-radius: 0px;
  `,
);

const StyledRectangle7082 = styled.div(
  () => css`
    width: 26px;
    height: 11px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #4d4c4c;
    border-radius: 0px;
  `,
);

const Styledimage = styled.div<{ $type: "Modular" | "Overlay" | "Sidebar" }>(
  ({ $type }) => css`
    width: 26px;
    height: 25px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Modular":
          return css`
            background-color: ${"transparent"};
          `;
        case "Overlay":
          return css`
            background-color: ${"transparent"};
          `;
        case "Sidebar":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame194 = styled.section<{
  $type: "Modular" | "Overlay" | "Sidebar";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Modular":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Overlay":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Sidebar":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDecoration = styled.div(
  () => css`
    width: 21px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

const StyledDecoration2 = styled.div(
  () => css`
    width: 21px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

const StyledDecoration3 = styled.div(
  () => css`
    width: 15px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

const StyledRectangle707 = styled.div(
  () => css`
    width: 56px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle7083 = styled.div(
  () => css`
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #4d4c4c;
    border-radius: 0px;
  `,
);

const StyledRectangle7084 = styled.div(
  () => css`
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #4d4c4c;
    border-radius: 0px;
  `,
);

const StyledRectangle7085 = styled.div(
  () => css`
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #4d4c4c;
    border-radius: 0px;
  `,
);

const StyledRectangle7086 = styled.div(
  () => css`
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #4d4c4c;
    border-radius: 0px;
  `,
);

/** A hero preview component that showcases typographic layout options. Supports three layout variants: Modular, Overlay, and Sidebar. Used to preview how type and decorative elements are arranged in different hero configurations. */
export const TypePreviewHero = React.forwardRef<
  HTMLElement,
  TypePreviewHeroProps
>(function TypePreviewHero({ type = "Modular", ...rest }, ref) {
  return (
    <StyledRoot
      role="img"
      aria-label="Hero type layout preview"
      {...rest}
      ref={ref}
    >
      <StyledRectangle704 />
      <StyledRectangle708 />
      <StyledRectangle7082 />
      <Styledimage $type={type} />
      <StyledFrame194 $type={type}>
        <StyledDecoration />
        <StyledDecoration2 />
        {type === "Modular" && <StyledDecoration3 />}
      </StyledFrame194>
      {type === "Overlay" && <StyledRectangle707 />}
      {type === "Sidebar" && <StyledRectangle7083 />}
      {type === "Sidebar" && <StyledRectangle7084 />}
      {type === "Sidebar" && <StyledRectangle7085 />}
      {type === "Sidebar" && <StyledRectangle7086 />}
    </StyledRoot>
  );
});

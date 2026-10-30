import React from "react";
import styled, { css } from "styled-components";

export interface TypePreviewNavigationProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "type"
> {
  type?: "Simple" | "Sides" | "Centered";
}

const StyledRoot = styled.nav(
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

const StyledFrame48096230 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledHighlight = styled.div(
  () => css`
    width: 5px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledHighlight2 = styled.div(
  () => css`
    width: 5px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledHighlight3 = styled.div(
  () => css`
    width: 5px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledRectangle712 = styled.div(
  () => css`
    width: 12px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledFrame480962302 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledHighlight4 = styled.div(
  () => css`
    width: 4px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledHighlight22 = styled.div(
  () => css`
    width: 4px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

/** A navigation preview component that visually represents different navigation layout styles (Simple, Sides, Centered) using highlight shapes to indicate navigation structure and active states. */
export const TypePreviewNavigation = React.forwardRef<
  HTMLElement,
  TypePreviewNavigationProps
>(function TypePreviewNavigation({ type = "Simple", ...rest }, ref) {
  return (
    <StyledRoot
      role="navigation"
      aria-label="Navigation preview"
      {...rest}
      ref={ref}
    >
      <StyledRectangle704 />
      <StyledFrame48096230>
        <StyledHighlight />
        <StyledHighlight2 />
        {["Simple", "Sides"].includes(type) && <StyledHighlight3 />}
      </StyledFrame48096230>
      {["Sides", "Centered"].includes(type) && <StyledRectangle712 />}
      {type === "Centered" && (
        <StyledFrame480962302>
          {type === "Centered" && <StyledHighlight4 />}
          {type === "Centered" && <StyledHighlight22 />}
        </StyledFrame480962302>
      )}
    </StyledRoot>
  );
});

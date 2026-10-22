import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewMediumHorizontalNavPositionProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "position" | "hero"
> {
  position?: "Top" | "Bottom" | "Special";
  hero?: "Normal" | "Sidebar";
}

const StyledRoot = styled.nav(
  () => css`
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    width: 84px;
    height: 59px;
    box-sizing: border-box;
  `,
);

const StyledBackground = styled.div(
  () => css`
    width: 60px;
    height: 47px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.05999999865889549);
    border-radius: 0px;
  `,
);

const StyledMenu = styled.nav<{
  $position: "Top" | "Bottom" | "Special";
  $hero: "Normal" | "Sidebar";
}>(
  ({ $position, $hero }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$position, $hero])) {
        case '["Top","Normal"]':
          return css`
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
          `;
        case '["Bottom","Normal"]':
          return css`
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
          `;
        case '["Special","Normal"]':
          return css`
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
          `;
        case '["Top","Sidebar"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: center;
            align-items: flex-start;
            width: 12px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Bottom","Sidebar"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: center;
            align-items: flex-start;
            width: 12px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Special","Sidebar"]':
          return css`
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
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledText = styled.div(
  () => css`
    width: 6px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #adadad;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledText2 = styled.div(
  () => css`
    width: 6px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #adadad;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledText3 = styled.div(
  () => css`
    width: 6px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #adadad;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledText4 = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledDecoration = styled.div(
  () => css`
    width: 25px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.1599999964237213);
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledDecoration2 = styled.div(
  () => css`
    width: 25px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.1599999964237213);
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledDecoration3 = styled.div(
  () => css`
    width: 19px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.1599999964237213);
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledSidebar = styled.div(
  () => css`
    width: 20px;
    height: 47px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.05999999865889549);
    border-radius: 0px;
  `,
);

/** A navigation preview component displaying a medium horizontal navigation bar with configurable position (Top, Bottom, Special) and hero layout (Normal, Sidebar). Used to preview how navigation options appear in different layout configurations. */
export const OptionPreviewMediumHorizontalNavPosition = React.forwardRef<
  HTMLElement,
  OptionPreviewMediumHorizontalNavPositionProps
>(function OptionPreviewMediumHorizontalNavPosition(
  { position = "Top", hero = "Normal", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="navigation"
      aria-label="Navigation preview"
      {...rest}
      ref={ref}
    >
      <StyledBackground />
      <StyledMenu $position={position} $hero={hero}>
        <StyledText />
        <StyledText2 />
        <StyledText3 />
      </StyledMenu>
      {position === "Special" && hero === "Normal" && (
        <StyledText4>
          {position === "Special" && hero === "Normal" && <StyledDecoration />}
          {position === "Special" && hero === "Normal" && <StyledDecoration2 />}
          {position === "Special" && hero === "Normal" && <StyledDecoration3 />}
        </StyledText4>
      )}
      {hero === "Sidebar" && <StyledSidebar />}
    </StyledRoot>
  );
});

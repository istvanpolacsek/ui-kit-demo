import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface CardIconProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "mode" | "variant" | "device"
> {
  mode?: "Light" | "Dark";
  variant?: "Aqua" | "Blue" | "Gray" | "Sand";
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.article<{
  $mode: "Light" | "Dark";
  $variant: "Aqua" | "Blue" | "Gray" | "Sand";
}>(
  ({ theme, $mode, $variant }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 310px;
    height: 263px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    ${(() => {
      switch (JSON.stringify([$mode, $variant])) {
        case '["Dark","Blue"]':
          return css`
            background-color: ${theme["surface"]["surfaceBrand"]};
          `;
        case '["Light","Blue"]':
          return css`
            background-color: ${theme["surface"]["surfaceDefault"]};
          `;
        case '["Light","Aqua"]':
          return css`
            background-color: ${theme["surface"]["surfaceDefault"]};
          `;
        case '["Light","Gray"]':
          return css`
            background-color: ${theme["surface"]["surfaceGray"]};
          `;
        case '["Light","Sand"]':
          return css`
            background-color: ${theme["surface"]["surfaceSand"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$mode, $variant])) {
        case '["Dark","Blue"]':
          return css`
            color: ${theme["accent"]["accentBrandInverted"]};
          `;
        case '["Light","Blue"]':
          return css`
            color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Light","Aqua"]':
          return css`
            color: ${theme["accent"]["accentAqua"]};
          `;
        case '["Light","Gray"]':
          return css`
            color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Light","Sand"]':
          return css`
            color: ${theme["accent"]["accentSand"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle4134298 = styled.div<{
  $mode: "Light" | "Dark";
  $variant: "Aqua" | "Blue" | "Gray" | "Sand";
}>(
  ({ theme, $mode, $variant }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$mode, $variant])) {
        case '["Dark","Blue"]':
          return css`
            background-color: ${theme["accent"]["accentBrandInverted"]};
          `;
        case '["Light","Blue"]':
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Light","Aqua"]':
          return css`
            background-color: ${theme["accent"]["accentAqua"]};
          `;
        case '["Light","Gray"]':
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Light","Sand"]':
          return css`
            background-color: ${theme["accent"]["accentSand"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const Styled37Million = styled.h3<{
  $mode: "Light" | "Dark";
  $device: "Mobile" | "Desktop";
}>(
  ({ theme, $mode, $device }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 24px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEducationDesignedForBusyLearnersWithFlexibleOnlineAndHybridProgramsAndCoursesAsShortAs4Weeks =
  styled.p<{ $mode: "Light" | "Dark" }>(
    ({ theme, $mode }) => css`
      ${(() => {
        switch ($mode) {
          case "Dark":
            return css`
              color: ${"#ffffff"};
            `;
          case "Light":
            return css`
              color: ${theme["text"]["textOnLightDefault"]};
            `;
          default:
            return css``;
        }
      })()}
      font-family: 'Roboto';
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

/** A card component displaying an icon alongside a statistic value and descriptive text. Supports light/dark modes, multiple color variants (Aqua, Blue, Gray, Sand), and responsive desktop/mobile layouts. */
export const CardIcon = React.forwardRef<HTMLElement, CardIconProps>(
  function CardIcon(
    { mode = "Dark", variant = "Blue", device = "Desktop", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="region"
        aria-label="Card Icon"
        {...rest}
        ref={ref}
        $mode={mode}
        $variant={variant}
      >
        <StyledRectangle4134298 $mode={mode} $variant={variant} />
        <StyledContent>
          <StyledIcon>
            <Icon name={"search"} size={24} />
          </StyledIcon>
          <StyledText>
            <Styled37Million $mode={mode} $device={device}>
              {"$37 Million"}
            </Styled37Million>
            <StyledEducationDesignedForBusyLearnersWithFlexibleOnlineAndHybridProgramsAndCoursesAsShortAs4Weeks
              $mode={mode}
            >
              {
                "Education designed for busy learners with flexible online and hybrid programs and courses as short as 4 weeks."
              }
            </StyledEducationDesignedForBusyLearnersWithFlexibleOnlineAndHybridProgramsAndCoursesAsShortAs4Weeks>
          </StyledText>
        </StyledContent>
      </StyledRoot>
    );
  },
);
